var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");

router.get('/', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        Mongolib.findHouses(db,docs=>{
            res.send(docs);
        })
    })
});

router.put('/:userId/:fosterHouseId', function(req, res, next) {
   
    Mongolib.getDatabase(db=>{
        Mongolib.putUserFosterHouseInteraction(db,req.params.userId,req.params.fosterHouseId,req.body,docs=>{
            res.send(docs);
        })
    })
});


module.exports = router;
