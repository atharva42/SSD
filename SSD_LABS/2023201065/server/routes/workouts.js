const express= require('express')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)
module.exports=router