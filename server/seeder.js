// External dependencies
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// Internal dependencies
const { admin } = require('./seeder/userSeeder')

// env config
dotenv.config()

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then((res) => {
    console.log('Database connected')
    seedAppData()
}).catch((err) => {
    console.log('Database connection failed', err)
})

// seeder
const seedAppData = async () => {
    await admin()
    process.exit()
}