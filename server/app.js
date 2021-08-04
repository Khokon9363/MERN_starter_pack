// External dependencies
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

// Internal dependencies
const { notFoundMiddleware, defaultErrorMiddleware } = require('./app/http/middlewares/error/errorMiddleware')
const authRouter = require('./routes/authRouter')

// app initialization
const app = express()
dotenv.config()

// prevent cors
app.use(cors())

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log('Database connected')
}).catch((err) => {
    console.log('Database connection failed', err)
})

// request parser
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// define static folder
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/auth', authRouter)

// 404 error
app.use(notFoundMiddleware)

// error
app.use(defaultErrorMiddleware)

// start the app on a specific PORT
app.listen(process.env.PORT, () => {
    console.log(`Application running on http://localhost:${process.env.PORT}`)
})