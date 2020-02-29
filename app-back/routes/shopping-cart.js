var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");
/* GET home page. */
router.get('/:id', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        console.log(req.params.id);
        Mongolib.getPetsByIds(db,[1],docs=>{ 
            res.send(docs);
        })
    })
});


module.exports = router;
