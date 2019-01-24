
// 'nodemailer' package(module) makes it easy
// to send emails from a computer.

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpass'
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'recepient@email.com',
  subject: 'Sending an Email with nodejs',
  html: '<h1>You have got a new email!</h1>',
};

transporter.sendMail(mailOptions, function(error, info) {
  if(error) {
    console.log(error);
  } else {
    console.log('Email sent:' + info.response);
  }
});
