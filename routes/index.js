var express = require('express');
var twilio = require('twilio');
var accountSid = 'AC920c9920faf15270c5394f690187585b'; // Your Account SID from www.twilio.com/console
var authToken = '2a97b37e4a7cdd9bbd18b5b64cca1369';   // Your Auth Token from www.twilio.com/console
var client = new twilio(accountSid, authToken);

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
/* POST home page. */
router.post('/', function(req, res, next) {


    client.messages.create({
        body: req.body.messagetotext,
        to: '+18053022710',  // Text this number
        from: '+12019044111' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid));

    res.render('index', { title: 'Your message was sent!' });
});

module.exports = router;
