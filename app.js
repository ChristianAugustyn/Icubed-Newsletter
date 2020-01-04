const express = require('express');
const bp = require('body-parser');
const request = require('request');
var port = 3000;
const app = express();

app.use(express.static('public'));

app.use(bp.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post('/', function(req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    
    var data = {
        members: [
            {
                email_address: email, 
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    };

    var jsondata = JSON.stringify(data);

    var options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/e769dcb9ab",
        method: "POST",
        headers: {
            "Authorization": "chris1 4802ac047d7cd08d55b55cf6eb3aa82d-us4"
        },
        body: jsondata
    };

    request(options, function(err, resp, body) {
        if (err) {
            res.sendFile(__dirname + '/failure.html');
        } else {
            if (res.statusCode === 200) {
                res.sendFile(__dirname + '/success.html');
            } else {
                res.sendFile(__dirname + '/failure.html');
            }
        }
    });
});

app.listen(process.env.PORT || port, function() {
    console.log('Server is running on port ' + port);
});

//e769dcb9ab -  list id

//4802ac047d7cd08d55b55cf6eb3aa82d-us4 -api key