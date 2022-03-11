const express = require('express');
var router = express.Router();
var con = require('../database/connection');
const crypto = require('crypto');
var auth = require('../middleware/auth');

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
          res.status(200).json({error:"none", msg: password});
        });
      }
    });
});

router.post('/add_company', auth.verify , (req, res) => {
  console.log("Sushant");

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
    console.log(timestamp);

    
    var sql = "INSERT INTO company(name, description, location, role, ctc, ssc_marks, hsc_marks, degree_agg, backlog_allowed, other, active_status, expires_date) VALUES(?,?,?,?,?,?,?,?,?,?,?,?);";
  
    con.query(sql, [company_name, descr, role, ctc, location, ssc_marks, hsc_marks, degree_marks, backlog_allowed, gap, other,active_status, expires_date], (err, result, fields) => {
      if (err) throw err;
      console.log(result.insertId);
      sql = "INSERT INTO company_status(student_id, company_id) (SELECT id from student WHERE id = ?),(SELECT id from company WHERE id = ?)";
      con.query(sql, [])
    })

    // var sql = "INSERT INTO company_status() SELECT id from student WHERE ssc_marks = ? and hsc_marks = ? and degree_marks = ? and backlog_allow"
    // con.query()
})

module.exports = router;
