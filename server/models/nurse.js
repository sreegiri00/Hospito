const mongoose = require('mongoose')
const nurseSchema = new mongoose.Schema({
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
    exp: {
        type: Date,
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
        required: true,
        unique: true,
        lowercase: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    salory: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    availability: {
        type: [String],
        required: true
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const NorseModel = mongoose.model("nurse", nurseSchema)

module.exports = NorseModel;