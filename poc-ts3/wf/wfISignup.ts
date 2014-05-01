import dm = require('../Domain/dm');
import bl = require('../bl/bl');
import when = require('when');

export module wf {

    export interface wfISignup {
        doSignup(user: dm.User): when.IPromise<dm.User>;
    }
}
