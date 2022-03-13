const express = require('express');
var router = express.Router();
var con = require('../database/connection');
const crypto = require('crypto');
var auth = require('../middleware/auth');
var nodemailer = require('nodemailer');
var auth = require('../middleware/auth');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '*******',
    pass: '*********'
  }
});

router.post('/add_student', auth.verify , (req, res) => {
    const first_name = req.body.first_name;
    const middle_name = req.body.middle_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const mobile_no = req.body.mobile_no;
    var password = Math.random().toString(36).slice(-8);
    var password2 = crypto.createHash('sha256').update(password).digest('hex');
    var sql = "SELECT email from student WHERE email = ?";
    con.query(sql, [email], (err, result) => {
      if (err) throw err;
      if(result.length > 0){
        res.status(400).json({error: "already", msg: "User already exists"});
      }else{
        sql = "INSERT INTO student(first_name, middle_name, last_name, email, mobile_no, password) VALUES(?,?,?,?,?,?);";
        con.query(sql, [first_name, middle_name, last_name, email, mobile_no, password2], (err, result) => {
          if (err) throw err;
          var mailtext = 'Username: ' + email + '\n' + 'Password: ' + password;
          var mailOptions = {
            from: '*****',
            to: '******',
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
          res.status(200).json({err:"none", msg: password});
        });
      }
    });
});

router.post('/add_company', auth.verify , (req, res) => {

    const company_name = req.body.company_name;
    const descr = req.body.description;
    const role = req.body.role;
    const ctc = req.body.ctc;
    const location = req.body.location;
    const ssc_marks = req.body.ssc_marks;
    const hsc_marks = req.body.hsc_marks;
    const degree_marks = req.body.degree_marks;
    const backlog_allowed = req.body.backlog_allowed;
    const gap = req.body.gap;
    const other = req.body.other;
    const active_status = req.body.active_status;
    const expires_date = new Date((dt = new Date()).getTime() - dt.getTimezoneOffset() * 60000).toISOString().replace(/(.*)T(.*)\..*/,'$1 $2')

    var sql = "INSERT INTO company(name, description,  role, ctc,location, ssc_marks, hsc_marks, degree_agg, backlog_allowed,gap, other, active_status, expires_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?);";
  
    con.query(sql, [company_name, descr, role, ctc, location, ssc_marks, hsc_marks, degree_marks, backlog_allowed, gap,  other, active_status, expires_date], (err, result, fields) => {
      if (err) throw err;
      var mailtext = 'New Job available on Sinhgad placement portal \n'+ 'Name: '+ company_name + '\n Description: '+ descr + '\n CTC: '+ ctc + '\n See more details on portal.';
      var mailOptions = {
        from: 'sushantbarje11@gmail.com',
        to: 'sushantbarje11@gmail.com',
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
      sql = "SELECT * FROM company;";
      con.query(sql, (err, result) => {
        if (err) throw err;
        res.status(200).json({error: "none", msg: result});
      });
    });
    
    // var sql = "INSERT INTO company_status() SELECT id from student WHERE ssc_marks = ? and hsc_marks = ? and degree_marks = ? and backlog_allow"
    // con.query()
});

router.post('/get_all_student', auth.verify, (req, res) => {
  var sql = "SELECT * FROM student;";
  con.query(sql, (err, result) => {
    if(err) throw err;
    res.status(200).json({error: "none", msg: result});
  });
});


module.exports = router;
