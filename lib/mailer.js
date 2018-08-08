var nodemailer = require('nodemailer');
var config = require('../config.json');

module.exports = {
  sayHello : function(req, res){

    console.log("what is config ---- ", config, req.body);
    // const smtpConfig = {
    //   service: config.MAIL.SERVICE,
    //   auth: {
    //     user: config.MAIL.USER,
    //     pass: config.MAIL.PASS
    //   }
    // }

    // the amazon one
    const smtpConfig = {
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: config.AWS_MAIL.SMTP_USER,
            pass: config.AWS_MAIL.SMTP_PASS
        }
    };

    const transport = nodemailer.createTransport(smtpConfig);

    var mailOption = {
      from: `"${req.body.name}" <${req.body.email}>`,
      to: config.MAIL.ADDRESS,
      subject: req.body.subject,
      text: req.body.message
    }

    transport.sendMail(mailOption, function(error, info){
      if(error){
        console.log(error);
        res.json({hey: 'error'});
      }else{
        console.log('message sent: '+ info.response)
      };
    });
  }
}

// export default function sayHello(req, res) = ({
// });
