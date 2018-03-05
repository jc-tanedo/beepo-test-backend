'use strict';

const squel = require('squel');
const DB = require('helpers/db');
const db = new DB;

function mysql_real_escape_string(str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\" + char; // prepends a backslash to backslash, percent,
                                    // and double/single quotes
        }
    });
}

module.exports = class Script {

    static create(data) {

        data.body = mysql_real_escape_string(data.body);

        const query = squel.insert()
            .into('scripts')
            .setFields(data);

        return db.build(query)
            .promise();
    }

    static retrieve(ids = null) {
        const query = squel.select()
            .from('scripts');

        if (ids) {
            ids = ids instanceof Array ? ids.join(',') : [ids];
            query.where('id IN ?', ids);
        }

        return db.build(query)
            .promise();
    }
};