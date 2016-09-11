/**
 * Created by Joey on 9/10/2016.
 */

var schema = require('mongoose').Schema;

module.exports = {
    name: 'User',
    schema: new schema({
        name: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        about: { type: String },
        signup_date: { type: schema.Types.Date, default: Date.now() }
    }),
};
