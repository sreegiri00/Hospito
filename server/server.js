const express = require("express")
const cors = require('cors')
const DoctorModel = require('./models/doctor');
const NorseModel = require('./models/nurse');
const PatientModel = require('./models/patient');
const PharmacyModel = require('./models/pharmacy');
const BookingModel = require('./models/boocking');

require('./config')
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3005;

// docter start 

app.post('/doctore/createUser', (req, res) => {
    DoctorModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/doctore/', (req, res) => {
    DoctorModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/doctore/getUser/:id', (req, res) => {
    const id = req.params.id;
    DoctorModel.findById(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))

})
app.put('/doctore/updateUser/:id', (req, res) => {
    const id = req.params.id;
    DoctorModel.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/doctore/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    DoctorModel.findByIdAndDelete(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// docter end 

// nurse start 

app.post('/nurse/createUser', (req, res) => {
    NorseModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/nurse/', (req, res) => {
    NorseModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/nurse/getUser/:id', (req, res) => {
    const id = req.params.id;
    NorseModel.findById(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))

})
app.put('/nurse/updateUser/:id', (req, res) => {
    const id = req.params.id;
    NorseModel.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/nurse/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    NorseModel.findByIdAndDelete(id)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


// nurse ends

// patiend start

app.post('/patient/createUser', (req, res) => {
    PatientModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/patient/', (req, res) => {
    PatientModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/patient/getUser/:id', (req, res) => {
    const id = req.params.id;
    PatientModel.findById(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))

})
app.put('/patient/updateUser/:id', (req, res) => {
    const id = req.params.id;
    PatientModel.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/patient/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    PatientModel.findByIdAndDelete(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})



// patend ends

//pharmacy start

app.post('/pharmacy/createUser', (req, res) => {
    PharmacyModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/pharmacy/', (req, res) => {
    PharmacyModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.get('/pharmacy/getUser/:id', (req, res) => {
    const id = req.params.id;
    PharmacyModel.findById(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))

})
app.put('/pharmacy/updateUser/:id', (req, res) => {
    const id = req.params.id;
    PharmacyModel.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.delete('/pharmacy/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    PharmacyModel.findByIdAndDelete(id)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

//pharmacy end 


app.listen(PORT, () => console.log(`srever running.... http://localhost:${PORT}`))