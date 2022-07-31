const User = require('../Models/User')


const register = async (req,res,next) => {

    const name = "Topcu"
    const email = "user1@example.com"
    const password = "1234567890"

   const user = await User.create({
        name,
        email,
        password,
    })

    res.status(200).json({
        success: true,
        data: user
    })

}

module.exports = {
    register
}