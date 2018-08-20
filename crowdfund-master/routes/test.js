var constant = require('../dapp/constant.js');
var eth = require('../dapp/eth.js');

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('test');
});

router.post('/signup', function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var nickname = req.body.nickname;
    var address = eth.testCreate(email,password,nickname)
    res.redirect('/test');

});

router.post('/login', function(req, res, next) {
    res.redirect('/test');
});

router.post('/tokenCheck', function(req, res, next) {
    var address = req.body.address;
    try{
      var tokenAmount = eth.getTokenAmount(address);
      var etherAmount = eth.getBalance(address);
      res.render('view', {address : address, token : tokenAmount, ether : etherAmount});
    }catch(exception){
      console.log("Invalid address!!!")
      res.redirect('/test');
    }


});

router.post('/meetCreate', function(req, res, next) {
    var address = req.body.address
    eth.join(address,60)
    res.redirect('/test');

});

router.post('/meetJoin', function(req, res, next) {
    var address = req.body.address;
    eth.join(address,40);
    res.redirect('/test');
});

router.post('/Ether_To_Token', function(req, res, next) {
    var address = req.body.address;
    var passwd = req.body.password;
    var value = req.body.value;
    eth.unlockAccount(address, passwd);
    eth.ether_to_token(address,value)
    res.redirect('/test');
});

router.post('/Token_To_Ether', function(req, res, next) {
    var address = req.body.address;
    var passwd = req.body.password;
    var value = req.body.value;
    eth.unlockAccount(address, passwd);
    eth.token_to_ether(address,value)
    res.redirect('/test');

});
module.exports = router;
