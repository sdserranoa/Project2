const MongoClient = require('mongodb').MongoClient;

var conn = MongoClient.connect('mongodb+srv://usuario1:usuario1@petsociety-jo7y6.mongodb.net/test?retryWrites=true&w=majority',  {useNewUrlParser: true, useUnifiedTopology: true });

conn.then(client=>{
    console.log('DB is connected')}).catch(err=> console.error(err));
    //client.db("Population").collection("cities").find({}).toArray((err, data)=>{
   //     console.log(data);
  //  });


module.exports = MongoClient ;