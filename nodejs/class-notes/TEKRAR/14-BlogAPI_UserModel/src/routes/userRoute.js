"use strict";
/* -------------------------------------------------------
EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */



//? Call Router:
const router =require('express').Router()

//? Call Controllers:
const {User} = require('../controllers/userController')


// -------------------------------------------------------
//******    USER    ********
// -------------------------------------------------------

//? Login:
router.post('/login',User.login)

//? Logout:
router.all('/logout',User.logout)




router
.route("/")
.get(User.list)
.post(User.create);

router
  .route("/:userId")
  .get(User.read)
  .put(User.update)
  .delete(User.delete);




  module.exports = router