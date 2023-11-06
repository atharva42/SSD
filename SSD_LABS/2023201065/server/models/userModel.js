const mongoose = require('mongoose')
const bcrypt = require('bcrypt') 
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


userSchema.statics.signup = async function(email, password, confirmpass) {
    const exists = await this.findOne({email})
    if(!email || !password){
        throw Error('Must enter something correct')
    }
    if(!validator.isEmail(email)){
        throw Error('Not valid email')
    }
    if(exists){
        throw Error('Email in use')
    }
    // if(password!=confirmpass){
    //     console.log(password, confirmpass)
    //     throw Error('Passwords do not match')
    // }
    const salt = await bcrypt.genSalt(7)
    const hash  =await bcrypt.hash(password, salt)
    const user = await this.create({ email, password: hash })
    return user
}

userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('Must eneter something correct')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error('Incorrect passkey')
    }
    return user
}

module.exports = mongoose.model('passes', userSchema)