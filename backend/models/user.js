/**
 * Created by Joey on 9/10/2016.
 */

var schema = require('mongoose').Schema;

module.exports = {
    name: 'User',
    schema: new schema({
        name: { type: String },
        email: { type: String, unique: true },
        password: { type: String },
        about: { type: String },
        signup_date: { type: schema.Types.Date, default: Date.now() }
    }),
};
