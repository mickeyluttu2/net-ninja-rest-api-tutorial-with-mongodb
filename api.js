var express = require('express');
var Data = require('./mongoose');
var router = express.Router();
// get list 
router.get('/person', function (req, res) {
    Data.find()
        .then(function (result) {
        console.log("result", result);
        res.status(200).json({
            data: result
        });
    })["catch"](function (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
router.post('/person', function (req, res) {
    // var data = new Data(req.body);
    // data.save();
    // does the above 2 lines in single code
    Data.create(req.body).then(function (data) {
        res.send(data);
    });
    // res.send(
    //     {
    //         type: 'POST', 
    //         "firstName": req.body.firstName, 
    //         "lastName": req.body.lastName, 
    //         "id": req.body.id
    //     });
});
// put or update
router.put('/person/:id', function (req, res) {
    Data.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        // to find the updated data from the database
        Data.findOne({ _id: req.params.id }).then(function (data) {
            res.send(data);
        });
    });
    // res.send({type: 'PUT'});
});
// deleting by unique id in mongodb
router["delete"]('/person/:id', function (req, res) {
    Data.findByIdAndRemove({ _id: req.params.id }).then(function (data) {
        res.send(data);
    });
    // res.send({type: 'DELETE'});
});
module.exports = router;
