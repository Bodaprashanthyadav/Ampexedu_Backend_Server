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
    to:`${email}`,
    subject: `Mr. ${fullname} Showed Interest in Enrolling for ${courseInterested}`,
    text: `Dear Admin/Staff,

Here are the details of Mr. ${fullname}:

- Full Name : ${fullname}
- Email : ${email}
- Mobile : ${mobile}
- Course Interested : ${courseInterested}

Please follow up as soon as possible.

Thanks,
Enrollment Bot`
}

transporter.sendMail(message,(error,sucess)=>{
    if(error){
        console.log(error + " - error in sending Email");
    }else{
        console.log("Mail sent successfully to admin team!");    }
})

}

module.exports = SendMailToAdmin