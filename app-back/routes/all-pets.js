var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");
/* GET home page. */
router.get('/', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        Mongolib.getAllPets(db,docs=>{
            res.send(docs);
        })
    })
});
router.put('/:userId/:petId', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        Mongolib.putUserPetInteraction(db,req.params.userId,req.params.petId,req.body,docs=>{
            res.send(docs);
        })
    })
});


module.exports = router;
