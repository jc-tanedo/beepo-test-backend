'use strict';

const mysql = require('mysql');
const config = require('config');

module.exports = class DB {
    constructor() {
        this.connection = mysql.createConnection(config.DB);
    }

    build(squel_query) {
        this.query = squel_query.toString();
        return this;
    }

    promise() {
        return new Promise((resolve, reject) => {
            this.connection.query(this.query, (err, res) => {
                if (err) {
                    return reject(err);
                }

                return resolve(res);
            });
        });
    }
};