// External dependencies
const express = require('express')

// Internal dependencies
const { auth, guest } = require('../app/http/middlewares/authOrGuest/authOrGuest')

// create router
const router = express.Router()

// router.get('/', auth, index)

module.exports = router