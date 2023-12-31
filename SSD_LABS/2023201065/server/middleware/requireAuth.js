const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers
    console.log(authorization)
    if (!authorization) {
        return res.status(401).json({ error: "Auth token required" })
    }
    const token = authorization.split(' ')[1]
    try {
        const { _id } = jwt.verify(token, 'secstring')
        req.user = await User.findOne({ _id }).select('_id')
        next()
    }
    catch (error) {
        console.log(error)
        res.status(401).json({ error: 'Not Authorized' })
    }
}

module.exports = requireAuth