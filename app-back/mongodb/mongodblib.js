const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://usuario1:usuario1@petsociety-jo7y6.mongodb.net/test?retryWrites=true&w=majority';

const dbName = 'PetSociety';

const client = new MongoClient(url, { useUnifiedTopology: true });

const getDatabase = (callback) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback(db, client);
    });
}

const getAllPets = function (db, callback) {
    const collection = db.collection('Pets');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const findHouses = function (db, callback) {
    const collection = db.collection('Houses');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const getPetsByIds = function (db, petIds, callback) {
    const collection = db.collection('Pets');
    collection.find({ id: { $in: petIds } }).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });


}

const findUsers = function (db, callback) {
    const collection = db.collection('Users');
    collection.find({}).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const findUserById = function (idU, db, callback) {

    const collection = db.collection('Users');
    collection.find({ id: parseInt(idU) }).toArray(function (err, docs) {
        assert.equal(err, null);
        callback(docs);
    });
}

const getIteractionsById = function (idU, db, callback) {

    findUserById(idU, db, docs => {
        console.log(docs[0].interactedPetsIds);
        callback(docs[0].interactedPetsIds);
    })
}
const putUserPetInteraction = function (db,userId,petId,interaction,callback){

    getIteractionsById(userId,db,docs=>{
        const collection = db.collection('Users');
        var actuales=[];
        
        var pet = docs.filter(e => e.petId == petId)
   
        if(pet.length>0){
            collection.updateOne(
                { id: parseInt(userId), "interactedPetsIds.petId":parseInt(petId) },
                {
                  $set: { "interactedPetsIds.$": interaction },
                  $currentDate: { lastModified: true }
                } 
             ).then(result=>{
               callback(interaction);
             })
        }else{
            docs.push(interaction);
           collection.updateOne(
                { id: parseInt(userId) },
                {
                  $set: { "interactedPetsIds": docs },
                  $currentDate: { lastModified: true }
                } 
             ).then(result=>{
               callback(interaction);
             })
        }
        })


}
exports.getDatabase = getDatabase;
exports.getAllPets = getAllPets;
exports.findHouses = findHouses;
exports.getPetsByIds = getPetsByIds;
exports.findUsers = findUsers;
exports.findUserById = findUserById;
exports.getIteractionsById = getIteractionsById;
exports.putUserPetInteraction =  putUserPetInteraction;