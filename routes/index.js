var express = require('express');
var fs = require('fs');

var validator = require('validator');
var md5 = require('md5');
var request = require('request');
var sanitize = require('mongo-sanitize');
var nl2br = require('nl2br');
//var nodemailer = require('nodemailer');
//var sgTransport = require('nodemailer-sendgrid-transport');

var UserData = require('../models/userdata.js');
var Jobs = require('../models/jobs.js');


var router = express.Router();

router.get('/', function(req, res, next) {
    var komunn = JSON.parse(fs.readFileSync('./public/komunn.json', 'utf8'));
    var cats = JSON.parse(fs.readFileSync('./public/cats.json', 'utf8'));

    res.render('pages/index', { title: 'Jobbmagnet', komunn:komunn.data, cats: cats.data });
});

router.get('/skapakonto', function(req, res, next){
    res.render('pages/reg_error', { title: 'Jobbmagnet', session: req.session, error: req.session.error });
});

router.post('/skapakonto', function(req, res, next) {
    var email = req.body.email;
    var tele  = req.body.telefon;
    var pass1 = req.body.password;
    var pass2 = req.body.password2;

    req.session.email = req.body.email;
    req.session.telefon  = req.body.telefon;

    if(email && tele && pass1){
      if(validator.isEmail(email)){
        UserData.findOne({ email: sanitize(email) }, function(err, rows){
          if(!err && !rows){
            console.log("**reg**");
            var data = {
              email: sanitize(req.body.email),
              password: sanitize(pass1),
              token: md5(pass1 + Math.floor((Math.random() * 1000000000) + 1) ),
              name: '',
              verified: false,
              phone: '',
              paid: false,
              affiliate: sanitize(req.session.affiliate)
            }
            var newInsert = new UserData(data);
            console.log(data);
            newInsert.save();
            req.session.email = email;
            res.redirect('/betalning');
          }else{
            console.log("**Ett konto är skapat med den angivna e-postadressen.**");
            req.session.error = "Ett konto är skapat med den angivna e-postadressen.";
            res.redirect('/skapakonto');
          }
        });
      }else{
        console.log("**Vänligen ange en giltig e-postadress**");
        req.session.error = "Vänligen ange en giltig e-postadress.";
        res.redirect('/skapakonto');
      }
    }else{
      console.log("**Vänligen fyll i alla fält**");
      req.session.error = "Vänligen fyll i alla fält.";
      res.redirect('/skapakonto');
    }
    //res.render('pages/reg_error', {  title: 'Jobbmagnet', req:req.body });
});

router.get('/betalning', function(req, res, next){
    res.render('pages/payment', { title: 'Jobbmagnet',  session: req.session, error: req.session.error });
});

router.post("/betalning/pay", function(request, response) {
    var tco = new Twocheckout({
      sellerId: "203836295",                                  // Seller ID, required for all non Admin API bindings 
      privateKey: "732B99BD-6341-4352-95E7-860DF6A24406",                              // Payment API private key, required for checkout.authorize binding
      sandbox: true                                                   // Uses 2Checkout sandbox URL for all bindings
    });

    var params = {
        "merchantOrderId": "123",
        "token": request.body.token,
        "currency": "USD",
        "total": "10.00",
        "billingAddr": {
            "name": "Testing Tester",
            "addrLine1": "123 Test St",
            "city": "Columbus",
            "state": "Ohio",
            "zipCode": "43123",
            "country": "USA",
            "email": "example@2checkout.com",
            "phoneNumber": "5555555555"
        }
    };

    tco.checkout.authorize(params, function (error, data) {
        if (error) {
            response.send(error.message);
        } else {
            response.send(data.response.responseMsg);
        }
    });

});

module.exports = router;
