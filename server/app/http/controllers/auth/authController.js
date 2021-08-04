// External dependencies
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createHttpError = require('http-errors')

// Internal dependencies
const People = require('../../../models/People')

async function register(req, res, next) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    let people = new People({
        ...req.body, // all fields using spread operator
        password: hashedPassword
    })

    if(req.files && req.files.length > 0){
        people.avatar = req.files[0].path
    }

    try {
        const result = await people.save()

        if(result){
            // Login functionalities
            const peopleObj = {
                name: people.name,
                phone: people.phone,
                email: people.email,
                avatar: people.avatar
            }
            // generate jwt token
            const token = jwt.sign(peopleObj, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRY_TIME
            })

            // pass user object as loggedInUser to api client
            peopleObj.token = token
            res.status(200).json({
                user: peopleObj,
                message: 'User registered successfully !'
            })
        }else{
            res.status(500).json({
                errors: {
                    common: 'User registration failed !'
                }
            })
        }
        
    } catch (err) {
        res.status(500).json({
            errors: {
                common: err.message
            }
        })
    }
}

async function login(req, res, next) {
    try {
        const people = await People.findOne({
            $or: [
                {
                    email: req.body.phoneOrEmail
                },
                {
                    phone: req.body.phoneOrEmail
                }
            ]
        })
        if(people && people._id){
            const validPassword = await bcrypt.compare(req.body.password, people.password)
            
            if(validPassword){
                const peopleObj = {
                    name: people.name,
                    phone: people.phone,
                    email: people.email
                }
                // generate jwt token
                const token = jwt.sign(peopleObj, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRY_TIME
                })
                // pass user object as loggedInUser to api client
                peopleObj.token = token
                res.status(200).json({
                    user: peopleObj,
                    message: 'User logged in successfully !'
                })
            }else{
                throw createHttpError('Login failed ! Password does not match !')
            }

        }else{
            throw createHttpError('Login failed ! Email or phone does not matching with our records !')
        }
    } catch (err) {
        res.status(500).json({
            errors: {
                common: err.message
            }
        })
    }
}

async function me(req, res, next) {
    res.status(200).json({
        user: req.user
    })
}

module.exports = {
    register,
    login,
    me
}