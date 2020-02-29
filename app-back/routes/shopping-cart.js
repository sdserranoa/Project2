var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");
/* GET home page. */
router.get('/:id', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        
        Mongolib.findUserById(req.params.id,db,docs=>{
            var idsPets=[];
            docs[0].interactedPetsIds.forEach(element=>{
            if(element.addedToCart){
            idsPets.push(element.petId);
            }
            })
            Mongolib.getPetsByIds(db,idsPets,docs=>{ 
                res.send(docs);
            })
        } )
        
    })
});


module.exports = router;
