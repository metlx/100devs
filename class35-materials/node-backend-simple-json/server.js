const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    if('student' in params){
      if(params['student']== 'slag'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "slag",
          status: "slag",
          currentOccupation: "slag"
        }
        res.end(JSON.stringify(objToJson));
      } else if(params['student']== 'slager'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "xxx",
          status: "xxx",
          currentOccupation: "xxx"
        }
        res.end(JSON.stringify(objToJson));
      }  else if(params['student']== 'shamus'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "shammmmuuuuuussssss",
          status: "shammmmmuusssssss",
          currentOccupation: "shhhaaammmmuuuusssss"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  } else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else{
    figlet('404!!', function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
