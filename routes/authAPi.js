const { Register, Login } = require('../controllers/auth.controller');
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/Register', Register)
router.post('/Login', Login)
router.get('/profile', (req, res) => {
    res.send(req.user)
})



module.exports = router;