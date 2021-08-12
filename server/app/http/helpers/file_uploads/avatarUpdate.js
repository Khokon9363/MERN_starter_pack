// Internal dependencies
const singleFileUploader = require("../singleFileUploader")
const { unlink } = require('fs')

function avatarUpdate(req, res, next) {
    const upload = singleFileUploader('avatars', ["image/jpg", "image/jpeg", "image/png"], 1000000, '"Only jpg, png & jpeg format allowed !"')

    // call the default function of a multer upload object any()
    upload.any()(req, res, (err) => {
        if(err){
            res.status(500).json({
                errors: {
                    avatar: {
                        message: err.message
                    }
                }
            })
        }else{
            next()
        }
    })
}

module.exports = avatarUpdate