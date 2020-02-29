var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");

/* GET users listing. */
router.get('/', function (req, res, next) {

  Mongolib.getDatabase(db => {
    Mongolib.findUsers(db, docs => {
      res.send(docs);
    })
  })
});

router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  Mongolib.getDatabase(db => {
    Mongolib.findUserById(id, db, docs => {
      res.send(docs);
    })
  })
});



module.exports = router;
