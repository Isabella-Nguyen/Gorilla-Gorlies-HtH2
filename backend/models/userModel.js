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

// static signup method
userSchema.statics.signup = async function(email, password) {

  // validation
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  if (!validator.isEmail(email)) {
    throw Error('Email not valid')
  }

  const passwordOptions = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1
  };

  if (!validator.isStrongPassword(password, passwordOptions)) {
    let reasons = [];
    if (password.length < passwordOptions.minLength) {
      reasons.push(`Password must be at least ${passwordOptions.minLength} characters long`);
    }
    if ((password.match(/[a-z]/g) || []).length < passwordOptions.minLowercase) {
      reasons.push(`Password must contain at least ${passwordOptions.minLowercase} lowercase letter`);
    }
    if ((password.match(/[A-Z]/g) || []).length < passwordOptions.minUppercase) {
      reasons.push(`Password must contain at least ${passwordOptions.minUppercase} uppercase letter`);
    }
    if ((password.match(/[0-9]/g) || []).length < passwordOptions.minNumbers) {
      reasons.push(`Password must contain at least ${passwordOptions.minNumbers} number`);
    }
    if ((password.match(/[\W_]/g) || []).length < passwordOptions.minSymbols) {
      reasons.push(`Password must contain at least ${passwordOptions.minSymbols} symbol`);
    }
    throw Error(`Password not strong enough:\n ${reasons.join("\n")}`);
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash })

  return user
}

// static login method
userSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', userSchema)