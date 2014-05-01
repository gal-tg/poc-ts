var when = require('when');

var wf;
(function (wf) {
    var wfSignup = (function () {
        function wfSignup(blUser) {
            this.signupFunction = function (user) {
                return when.attempt(this.saveUser, user);
            };
            this.doSignup = this.signupFunction;
            this.blUser = blUser;
        }
        wfSignup.prototype.saveUser = function (user) {
            this.blUser.create(user);
        };
        return wfSignup;
    })();
    wf.wfSignup = wfSignup;
})(wf || (wf = {}));
//# sourceMappingURL=wfSignup.js.map
