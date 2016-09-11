/**
 * Created by Joey on 9/10/2016.
 */

var schema = require('mongoose').Schema;

module.exports = {
    name: 'Review',
    schema: new schema({
        rating: { type: Number },
        text: { type: String },
        author: { type: schema.Types.ObjectId },
    }),
};