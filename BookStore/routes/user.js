const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

//test
router.get('/test/:userId', requireSignin, isAuth, (req, res) => {
    res.json({ user: req.profile });
})

router.param('userId', userById);

module.exports = router;