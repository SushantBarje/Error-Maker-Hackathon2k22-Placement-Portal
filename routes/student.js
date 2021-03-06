const express = require('express');
var router = express.Router();
var con = require('../database/connection');
const crypto = require('crypto');
const auth = require('../middleware/auth');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email',
    pass: '********'
  }
});

router.post('/edit_details', auth.verify, (req, res) => {
  const gender =  req.body.gender;
  const prn_no = req.body.prn_no;
  const dob = req.body.dob;
  const mother_name = req.body.mother_name;
  const father_name = req.body.father_name;
  const mobile_no = req.body.mobile_no;
  const dept_id = req.body.dept_id;
  const class_year = req.body.class_year;
  const aadhar_no = req.body.aadhar_no;
  const pan_no = req.body.pan_no;
  const ssc_marks = req.body.ssc_marks;
  const hsc_marks = req.body.hsc_marks;
  const degree_marks = req.body.degree_marks;
  const gap = req.body.gap;
  const backlog = req.body.backlog;
  const technical_skills = req.body.technical_skills;
  const project = req.body.project;
  const work_exp = req.body.work_exp;
  const achievements = req.body.achievements;
  const certificates = req.body.certificates;
  const email = req.body.email;
  const resume = req.body.resume;

  var sql = "UPDATE student SET gender = ?, prn_no = ?, dob = ?, mother_name = ?, father_name = ?, mobile_no = ?, dept_id = ?, class = ?, aadhar_no = ?, pan_card = ?, ssc_marks = ?, hsc_marks = ?, degree_marks = ?, gap = ?, backlog = ?, technical_skills = ?, project = ?, work_exp = ?, achievements = ?, certificates = ?, resume = ? WHERE email = ?";
           
  con.query(sql, 
    [gender, prn_no, dob, mother_name, father_name, 
    mobile_no, dept_id, class_year, aadhar_no, pan_no, 
    ssc_marks, hsc_marks, degree_marks, gap, backlog, 
    technical_skills, project, work_exp, achievements, 
    certificates, resume, email],
    (err, result) => {
      if (err) throw err;
      res.status(200).json({error: "none", msg: "Details Updated Successfully."});
    });
});

router.get('/get_company', auth.verify, (req, res) => {
  var sql = "SELECT * FROM company;";
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.status(200).json({error: "none", msg: result});
  });
});

router.post('/apply', auth.verify, (req, res) => {
  const company_id = req.body.company_id;
  var sql = "SELECT * from student WHERE id = ?";
  // con.query(sql, [req.user.id], (err, result1) => {
  //   console.log(result);
  //   con.query("SELECT * FROM company WHERE id=?", [company_id], (err, result2) => {
  //     if(result1.ssc_marks == result2.ssc_marks && result1.hsc_marks == result2.hsc_marks && result1.backlog <= result2.backlog_allowed && result1.gap <= result2.gap){

  //     }
  //   });
    
  // })
  var sql = "INSERT INTO company_status(student_id, company_id, status) VALUES(?,?,?);";
  con.query(sql, [req.user.id, company_id, 1], (err, result) => {
    if (err) throw err;
    var mailtext = 'You have succesfully applied for this job.';
    var mailOptions = {
      from: 'gmail',
      to: 'gmail',
      subject: 'Sending Email using Node.js username and password',
      text: mailtext
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    res.status(200).json({error: "none", msg: "Registration Successful."});
  });
})

router.get('/get_companies', auth.verify, (req, res) => {
  var sql = "SELECT * FROM company;";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({error: "none" , msg: result});
  });
})

module.exports = router;