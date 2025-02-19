const mongoose = require('mongoose')
const parentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    department: {
        type: String,
        required: true
    },
    time: [
        { startTime: String },
        { endTime: String }
    ],
    attentence: {
        type: String,
        required: true
    },
    illness: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    phNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    accountNumber: {
        type: String,
    },
    payment:{
        type : Number,
        require : true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const PatientrModel = mongoose.model("patients", parentSchema)

module.exports = PatientrModel;