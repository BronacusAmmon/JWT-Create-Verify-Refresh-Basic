const router = require("express").Router();


const {login, refresh} = require("../controllers/users"),
        {jwtverify} = require("../middleware/jwtverify")



router.post('/login', login);
router.use(jwtverify)
router.put('/refresh', refresh);

module.exports = router;
