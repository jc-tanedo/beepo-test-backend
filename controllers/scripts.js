'use strict';

const Scripts = require('models/Script');
const text_options = require('lib/text-options');

module.exports = {
    create,
    retrieve,
    get_file_names,
    get_options
};

function create(req, res) {
    return Scripts.create(req.body)
        .then(data => res.send({message: 'create success', data}));
}

function retrieve(req, res) {
    return Scripts.retrieve(req.params.id)
        .then(data => res.send({message: 'retrieve success', data}));
}

function get_file_names(req, res) {
    return Scripts.retrieve(req.params.id)
        .then(rows => rows.map(({id, file_name}) => ({id, file_name})))
        .then(data => res.send({message: 'retrieve file_names success', data}));
}

function get_options(req, res) {
    return res.send({
        message: 'retrieve options success',
        data: text_options
    })
}