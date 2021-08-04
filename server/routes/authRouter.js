// External dependencies
const express = require('express')

// Internal dependencies
const { register, login, me } = require('../app/http/controllers/auth/authController')
const avatarUpload = require('../app/http/helpers/file_uploads/avatarUpload')
const { registerValidator, registerValidatorChecker } = require('../app/http/helpers/validators/registerValidator')
const { loginValidator, loginValidatorChecker } = require('../app/http/helpers/validators/loginValidator')
const { auth, guest } = require('../app/http/middlewares/authOrGuest/authOrGuest')

// create router
const router = express.Router()

router.post('/register', guest, avatarUpload, registerValidator, registerValidatorChecker, register)
router.post('/login', guest, loginValidator, loginValidatorChecker, login)
router.post('/me', auth, me)

module.exports = router