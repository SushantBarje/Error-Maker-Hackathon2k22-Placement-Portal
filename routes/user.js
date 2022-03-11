const express = require('express');
var router = express.Router();
var con = require('../database/connection');
const crypto = require('crypto');
var session = require('express-session');
const TPO_ROLE = 'admin';
const STUDENT_ROLE = 'student';
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');

router.post('/tpo', (req,res) => {
	console.log(req.body);
  var { username, password } = req.body;
  password = crypto.createHash('sha256').update(password).digest('hex');
  if (username && password) {
		con.query('SELECT * FROM user WHERE username = ? and password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
        const accessToken = auth.generateAccessToken({ username: username, role: 'tpo' });
        res.status(200).json({error: "none", msg: accessToken});
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

router.post('/student', (req,res) => {
	console.log(req.body);
  var { email, password } = req.body;
	console.log(email);
  password = crypto.createHash('sha256').update(password).digest('hex');
  if (email && password) {
		con.query('SELECT id,email,password FROM student WHERE email = ? and password = ?', [email, password], function(error, result, fields) {
			if (error) throw error;
			if (result.length > 0) {
				const accessToken = auth.generateAccessToken({ username: email, role: 'tpo', id: result[0].id });
        res.status(200).json({error: "none", msg: accessToken});
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

module.exports = router;