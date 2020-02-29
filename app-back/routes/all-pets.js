var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");
/* GET home page. */
router.get('/', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        Mongolib.findPets(db,docs=>{
            res.send(docs);
        })
    })
});


module.exports = router;
