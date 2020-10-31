const settings = require('../config.js').conf;
const express = require('express');
const router = express.Router();
const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport(
  settings.mail
);

var queue = [];

var defaultMailOptions = {
  from: 'hamada.computer.site@gmail.com',
  to: 'hamada.computer.site@gmail.com',
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


setInterval(async function(){
  if (queue.length > 0){
    let item = queue.shift();
    sendMail(item);
  }
}, 15*1000);




router.post('/', async function(request, reply){
  queue.push( request.body );
  reply.send(200);
});


module.exports = router;