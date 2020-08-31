var express = require('express');
var router = express.Router();
var pusher = require('../pusher');
/* GET users listing. */
router.get('/', function(req, res, next) {
  pusher.trigger('my-channel', 'my-event', {"message": "hello world"});
  res.send('respond with a resource');
});

module.exports = router;
