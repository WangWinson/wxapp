var rq = require('request-promise');

var templateMessage = function () {

};

var sendTemplateMessageUrl = "https://api.weixin.qq.com/cgi-bin/message/template/send";
var accessToken = "25_ZAgK5VlGoYZjHsMhz-IfVamaeng7GlY6-E9pzikgDx88HQobEodcGOOJn6nQb2LVdxKkjd_SlKt-JQBGJUy5Yj7q50dvwWUNpYgUjOdYieJvmw43b5NSkGh7jvAscGnQgUkInu3cdSrwg9EZMWPjAHAVFY";

templateMessage.prototype.send = function(userOpenId, templateId) {
  var message = '123';
  return rq.post({
    uri: sendTemplateMessageUrl + '?access_token=' + accessToken,
    body: {
      touser: userOpenId,
      template_id: templateId,
      url: "https://www.sandbox.paypal.com",
      data: {
        txnId: {
          value:"xxxxx",
          color:"#173177"
        },
        amount: {
          value:"666.00 RMB",
          color:"#173177"
        }
      }
    },
    json:true
  }).then(function (res) {
    console.log(res);
  });
}

module.exports = templateMessage;
