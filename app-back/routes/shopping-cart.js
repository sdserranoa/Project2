var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");
/* GET home page. */
router.get('/:id', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        
        Mongolib.findUserById(req.params.id,db,docs=>{
            console.log(docs);
            Mongolib.getPetsByIds(db,1,docs=>{ 
                res.send(docs);
            })
        } )
        
    })
});


module.exports = router;
