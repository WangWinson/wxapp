var express = require('express');
var router = express.Router();
var WXMessage = require('../wx/wxTemplateMessage');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ipn', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var ipnMessage = '';
  var message = new WXMessage();
  //hard code WX user Open ID
  var userId ='o_YTOwqXpFMjQfyJEWMwHwKm1Z6I';
  var templateId = 'hkCBYtJ6swMwE4i6eRP9MB2uCn9tR2vyOExm-CKsDWI';
  message.send(userId, templateId).then(function(res1) {
    res.send(res1);
  });
});

module.exports = router;
