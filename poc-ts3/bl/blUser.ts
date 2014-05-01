import dm = require('../Domain/dm');
import when = require('when');

export interface IUser {
    create(user: dm.User): when.IPromise<dm.User>;
}

