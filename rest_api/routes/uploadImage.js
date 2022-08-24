const express = require('express');
const router = express.Router();
const upload = require('../app/api/controllers/uploadImage');


router.post('/uploadImage', upload.upload);


module.exports = router;