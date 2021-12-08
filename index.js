const mysql = require('mysql');
const con = mysql.createConnection({
  host: "housingdata.c0kxq0umbaz7.us-west-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "housingData"
})
con.connect()
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    con.query("SELECT * FROM properties", function (err, result, fields) {
      if (err) throw err;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(JSON.stringify(result));
    });
});

server.listen(port, hostname, () => {
  console.log("port: ", port);
});