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

exports.getDatabase = getDatabase;
exports.getAllPets = getAllPets;
exports.findHouses = findHouses;