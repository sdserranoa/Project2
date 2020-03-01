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

router.post('/postPet', function(req, res, next) {
    Mongolib.getDatabase(db=>{
        Mongolib.postPet(req.body,db,docs=>{
            res.send(docs);
        })
    })
});

router.delete('/:petId/deletePet', function(req,res,next){
    Mongolib.getDatabase(db=>{
        Mongolib.deletePet(req.params.petId,db,docs=>{
            res.send(docs);
        })
    })
});



module.exports = router;
