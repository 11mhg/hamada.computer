const settings   = require('./config.js').conf;
const bodyParser = require('body-parser');
const rfs        = require('rotating-file-stream');
const express    = require('express');
const morgan     = require('morgan');

// rotating write stream
var accessLogStream = rfs.createStream( 'access.log' , {
  interval: '7d',
  path: '/var/log/backend/'
});

async function main(){
  const app = express();

  app.use(morgan('combined',{ stream: accessLogStream }));

  app.use(bodyParser.urlencoded( {extended: false }));
  app.use(bodyParser.json());


  app.get('/api/backend-alive', function(req, res){
    console.log("ALIVE!");
    res.send('hello,world!\n');
  });


  app.use('/api/mail', require('./routes/mail') );


  app.listen(settings.server.port, (err)=>{
    if (err){
      console.log("Error during application: ", err);
    };
    console.log(`Application listening at ${settings.server.port}.`);
  });
}




main().catch((err)=>console.log("ERROR: ", err));
