// External dependencies
const bcrypt = require('bcrypt')

// Internal dependencies
const People = require('../app/models/People')

async function admin(req, res, next) {
    console.log("admin seeding !!")
    try {
        await People.deleteMany({
            role: 'Admin'
        })
        const admin = new People({
            name: 'Super admin',
            email: 'admin@admin.com',
            phone: '01910000000',
            password: await bcrypt.hash('12345678', 10),
            role: 'Admin'
        })
        const result = await admin.save()
        console.log("admin seeded successfully !!")
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    admin
}