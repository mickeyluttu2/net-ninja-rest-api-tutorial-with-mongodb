// npm init -y
// tsc --init
// npm i @types/express --save
// npm i @types/node --save
// npm i nodemon --save-dev
// npm i -D typescript
// npm i express --save-dev
// npm i body-parser --save
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./api');
// setup
var app = express();
// connecting with mongodb
mongoose.connect('mongodb://localhost/sample4/person');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
// request
// app.get('/datas', function(req: any, res: any) {
//     console.log('GET request');
//     res.send(
//         {firstName: 'Amal', 
//         lastName: "Thomas", 
//         id: 100}
//     );
// });
// app.post('/datas', function(req: any, res: any) {
//     console.log('POST request');
//     console.log(req.body);
// res.send(
//     {firstName: 'Damon', 
//     lastName: "Salvatore", 
//     id: 200}
// );
// res.send(
//     {
//         "firstName": req.body.firstName, 
//         "lastName": req.body.lastName, 
//         "id": req.body.id
//     }
// );
// });
app.use(routes);
// port listening for request
app.listen(process.env.port || 4000, function () {
    console.log('now listening for requests');
});
