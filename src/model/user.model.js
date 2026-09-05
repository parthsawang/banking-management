const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')
const { kMaxLength } = require('node:buffer')
const { error, timeStamp } = require('node:console')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required for creating a user"],
        trim: true,
        unique: [true,"Email already exists"],
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },

    name: {
        type: String,
        required: [true, "username is required"],
        maxLength: 100,
        minlength: 8,
        trim: true,
        unique: [true,"username already exist"]
    },

    password: {
    type: String,
    required: true,
    // Regex: At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])[A-Za-z\d$@!%*?&]{8,}$/,
    message: props => `${props.value} is not a valid password!` ,
    minlength: [6,"password should be contain atlease 6 char"],
    select: false, //password default query mein hi nahi aata
  }
  
},{
    timestamps: true 
  })

userSchema.pre("save",async function(next){
    
})