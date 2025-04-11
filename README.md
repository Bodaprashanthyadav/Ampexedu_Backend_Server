**Here Is my Ampex-Education_Backend_Server(users Enrollements) https://ampexedu-backend-server.onrender.com    (Link to Access):**


**📌 Ampex Education - Backend Server**
A backend server built with Node.js, Express.js, and MongoDB for handling user enrollments and course details. 
It also includes a mail notification system that alerts the admin, receptionist, and staff in real-time whenever a user submits the enrollment form.


**📖 Table of Contents**     <br/>
1.Features                   <br/>
2.Tech Stack                  <br/>
3.Installation                <br/>
4.Environment Variables      <br/>
5.API Endpoints              <br/>
6.Database Schema             <br/>
7.Running the Server          <br/>
8.Project Structure           <br/>


 **Features**                                        <br/>
✅ RESTful API for handling user enrollments         <br/>
✅ MongoDB database integration                      <br/>
✅ Express middleware for request parsing            <br/>
✅ CORS enabled for frontend communication           <br/>
✅ Environment variables for secure configuration    <br/>
✅ Email Notification System using Nodemailer for real-time alerts to staff/admin   <br/>

**🛠 Tech Stack**<br/>
1.Backend: Node.js, Express.js       <br/>
2.Database: MongoDB, Mongoose        <br/>
3.Middleware: CORS, body-parser      <br/>
4.Environment Management: dotenv     <br/>
5.Email Notifications: Nodemailer    <br/>


**⚙ Environment Variables**                <br/>
MONGO_URI=your_mongodb_connection_string   <br/>
PORT=5500                                  <br/>


**📡 API Endpoints**                                                          <br/>
Method  ----   Endpoint    ----    Description                       <br/>
    |  ---------------    |  --------------      |                                     <br/>
POST	---     /usersdetails   ---   Store user enrollment data and trigger admin notification email         <br/>


**ampex-backend/**                                      <br/>
│── Model/                                               <br/>
│   ├── UsersDetails.model.js  # User schema             <br/>
│── node_modules/                                        <br/>
├── Email.js      # ✅ Nodemailer logic for Gmail          <br/>
│── .gitignore                                           <br/>
│── .env                                                  <br/>
│── package.json                                          <br/>
│── server.js                                             <br/>
│── README.md                                             <br/>
