import dm = require('../Domain/dm');
import bl = require('../bl/bl');
import when = require('when');



module wf  {

    export class wfSignup {//implements wfISignup{
        blUser: typeof bl.IUser;
        constructor(blUser: typeof bl.IUser) {
            this.blUser = blUser;
        }

        signupFunction = function (user: dm.User) {
            return when.attempt<dm.User>(this.saveUser, user)
        };

        doSignup = this.signupFunction;

        saveUser(user: dm.User) {
            this.blUser.create(user);
        }
    }
}