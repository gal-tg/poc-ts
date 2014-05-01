var when = require('when');
var workflow;
(function (workflow) {
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
    workflow.wfSignup = wfSignup;
})(workflow || (workflow = {}));
//# sourceMappingURL=wfSignup.js.map
