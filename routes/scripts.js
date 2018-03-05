const express = require('express');
const router = express.Router();

const scripts = require('controllers/scripts');
router.get('/:id([0-9]+)?', scripts.retrieve);
router.get('/file-names', scripts.get_file_names);
router.get('/options', scripts.get_options);
router.post('/', scripts.create);

module.exports = router;
