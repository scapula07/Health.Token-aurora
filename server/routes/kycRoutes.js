const express = require('express');

const {verifier,upload} = require('../controllers/Controller');


const router = express.Router();

router.route('/kyc-verify').post(verifier);
router.route('/kyc-upload').post(upload);

module.exports = router;