var signup;
var express = require('express');
var router = new express.Router();
var app = express();
app.listen(3000);
app.use(express.bodyParser());
app.use('/', app); //app.use('/', router);
router.post('/user/', function (req, res) {
    var user = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone
    };

    signup.doSignup(user).then(function (val) {
        res.json(val);
    }).catch(function (err) {
        res.json(err);
    });
});
//# sourceMappingURL=app.js.map
