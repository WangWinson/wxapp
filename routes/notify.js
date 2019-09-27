var express = require('express');
var router = express.Router();
var WXMessage = require('../wx/wxTemplateMessage');

router.post('/ipn', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var ipnMessage = '';
  var message = new WXMessage();
  //hard code WX user Open ID
  var userId ='o_YTOwqXpFMjQfyJEWMwHwKm1Z6I';
  var templateId = 'pk03pI4VUh9C6YaL1iMndVf6RZQOe9bcvqYY2XGF9-M';
  message.send(userId, templateId).then(function(res1) {
    res.send(res1);
  });
});

router.post('/webhook', function(req, res, next) {
  console.log(req.body);
  var wh = req.body;
  var info = {};
  if (wh.event_type === 'PAYMENT.CAPTURE.COMPLETED') {
    info.id = wh.resource.id;
    info.amount = wh.resource.amount;
    info.status = wh.resource.status;
    var message = new WXMessage();
    //hard code WX user Open ID
    var userId ='o_YTOwiNbq-DmM1bIzq06Gae-K3U';
    var templateId = 'pk03pI4VUh9C6YaL1iMndVf6RZQOe9bcvqYY2XGF9-M';
    message.send(userId, templateId, info).then(function(res1) {
      res.send(res1);
    });
  }
  res.send('OK');
});

module.exports = router;
