const express = require('express')
const cors = require('cors')
var app = express()
app.use(cors())
const nodemailer= require("nodemailer")
const dotenv = require('dotenv')
dotenv.config();

// mongoDB cnnection
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
    .then((res) => { console.log('MongoDB successfully connected ') })
    .catch((err) => { console.log('MongoDB Failed to  connect' + err) })

const bodyParser = require('body-parser')

var Users = require('./Model/UsersDetails.model')
var Email = require('./Email')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var PORT = process.env.PORT || 5800;





// routes

app.get('/',(req,res)=>{
    res.send("Wellcome to Ampex Education Live Server")
})

app.post('/usersdetails', (req, res) => {
 

     console.log(req.body)
    var user = new Users(req.body)
    user.save().then(data => {
        res.status(200).json({ msg: 'Thank You! We Will Get Back to You Soon!' });
        Email(req.body) // userdetails sent to Admin mail
    })
        .catch(err => {
            res.status(500).json({ msg: 'Error in submiting Data' })
        })

})




app.listen(PORT, () => { console.log(`Server is running on ${PORT}`) })
