const mongoose= require('mongoose')
const { model,Schema}=mongoose
var usersSchema= new Schema({
    fullname:{ type : String},
    email :  {type:String},
    mobile:{ type :String},
   courseInterested:{type :String}
})
var Users = model('usersdetail',usersSchema)
module.exports=Users