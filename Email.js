const nodemailer = require("nodemailer")


let transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:'b.prash2001@gmail.com',
        pass:'mqoyzfotfnuvbexf',
    }
    
})
 function SendMailToAdmin(formdata){
 var {fullname,email,mobile,courseInterested} = formdata

let message = {
    from:"b.prash2001@gmail.com",
    to:["b.prash2001@gmail.com","hikati9888@anlocc.com"],
    subject:`Mr ${fullname} Showed Intersted to Enrolled the Course`,
    text:`Dear Admin/stuff,
    
          Here the detail of Mr ${fullname} 
          Fullname : ${fullname},
          MailId : ${email},
          Mobile No : ${mobile},
          courseInterested : ${courseInterested},`
}

transporter.sendMail(message,(error,sucess)=>{
    if(error){
        console.log(error +'error in Email')
    }else{
        console.log(" Mail sent sencessfully")
    }
})

}

module.exports = SendMailToAdmin