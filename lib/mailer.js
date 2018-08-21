var nodemailer = require('nodemailer');
var config = require('../config.json');

module.exports = {
  sayHello : function(req, res){
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

    var message = `${req.body.message} \n\n\nFrom: ${req.body.name}\nEmail: ${req.body.email}`
    var mailOption = {
      from: `"USER group coop" <${config.MAIL.INFO}>`,
      to: config.MAIL.ADDRESS, // change this later to config.MAIL.INFO
      subject: `USER inquiry: ${req.body.subject}`,
      text: message
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
