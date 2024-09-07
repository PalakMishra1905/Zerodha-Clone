//Login, Signup routes.
const { Signup, Login} = require("./AuthController.js");
const router = require("express").Router();
const {userVerification} = require("./AuthMiddleware.js");

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/', userVerification);
module.exports = router;