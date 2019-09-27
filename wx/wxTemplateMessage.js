var rq = require('request-promise');

var templateMessage = function () {

};

var sendTemplateMessageUrl = "https://api.weixin.qq.com/cgi-bin/message/template/send";
var accessToken = "25__SBxmAnflVYZ5SozRYwvFpfkUg38q71rBOJ0D23i44MvghPBYGCK_RO0pL0SvyghlS9zA1tikqi9La_GP2psyE3PP_ubNZXAAlMGOzHowKy-VFuYClH27du4SrkwFjXsHYyiBsCg8T_87L9sODAiAEATIF";
//var getAccessTokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxf5d9250271f0c40a&secret=9a1f424d82d19eeb546408966971236f'

templateMessage.prototype.send = function(userOpenId, templateId, info) {
  var message = '123';
  return rq.post({
    uri: sendTemplateMessageUrl + '?access_token=' + accessToken,
    body: {
      touser: userOpenId,
      template_id: templateId,
      url: "https://www.sandbox.paypal.com/activity/payment/" + info.id,
      data: {
        txnId: {
          value:info.id,
          color:"#173177"
        },
        amount: {
          value:info.amount.value + ' ' + info.amount.currency_code,
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
