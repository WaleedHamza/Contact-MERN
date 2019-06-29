const express = require('express');
const router = express.Router();


//@route  Get api/auth
//@desc   Get loged in user
//@access Private
router.get('/', (req, res)=> {
    res.send('register user')
});

//@route  POST api/auth
//@desc   Auth user & get token
//@access Private
router.post('/', (req, res)=> {
    res.send('Log in user')
});


module.exports = router