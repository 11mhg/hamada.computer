const settings = require('./config.js').conf;
const express = require('express');
const router = express.Router();
const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport(
  settings.mail
);

var defaultMailOptions = {
  from: 'hamada.computer.site@gmail.com',
  to: 'gasmallahmohammed@gmail.com',
  subject: 'Empty',
  text: ''
};

async function sendMail( mailOptions ){
  var defaultObj = Object.assign({}, defaultMailOptions);
  const optsToSend = Object.assign( defaultObj, mailOptions );
  
  await new Promise((resolve, reject)=>{
    transporter.sendMail( optsToSend, function(error, info){
      if (error){
        console.log("ERROR: ", error);
      }else{
        console.log("Email sent: ", info.response);
      }
      resolve();
    });
  });
  return;
};




router.post('/', async function(request, reply){

});
