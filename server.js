const express = require('express')
const cors = require('cors')

const dotenv= require('dotenv')
dotenv.config();
// mongoDB cnnection
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL)
    .then((res) => { console.log('MongoDB successfully connected ') })
    .catch((err) => { console.log('MongoDB Failed to  connect' + err) })

const bodyParser = require('body-parser')
var app = express()
var Users = require('./Model/UsersDetails.model')
var PORT = 5600
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.use(express.static(__dirname))



// routes



app.post('/usersdetails', (req, res) => {
    console.log(req.body)
    var user = new Users(req.body)
    user.save().then(data => {
        res.status(200).json({msg:'Thank You! We Will Get Back to You Soon!'});

    })
    .catch(err => {
        res.status(500).json({msg:'Error in submiting Data'})
   })

})





app.listen(PORT, () => { console.log(`Server is running on ${PORT}`) })

