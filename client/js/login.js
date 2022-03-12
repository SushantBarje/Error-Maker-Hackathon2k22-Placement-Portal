$(document).ready(function(){
  $('#tpo-login-btn').click((e) => {
    var username = $("#tpo-username").val();
    var password = $("#tpo-password").val();
    console.log(username);
    console.log(password);
    var jsondata = JSON.stringify({'username':username,'password':password});
    $.ajax({
      url: "http://localhost:4000/api/users/login/tpo",
      type: "POST",
      contentType: "application/json",
      data : jsondata,
      dataType: 'json',
      success : function(res){
        console.log(res);
        if(res.error == 'none' && res.msg){
          localStorage.setItem('token', 'Bearer ' + res.msg);
          window.location.href = './TPO/adminHeader.html';
        }else{
          alert('Invalid Username password');
        }
      }
    })
  });

  $('#student-login-btn').click((e) => {
    var username = $("#student-username").val();
    var password = $("#student-password").val();
    console.log(username);
    console.log(password);
    var jsondata = JSON.stringify({'email':username,'password':password});
    $.ajax({
      type: "POST",
      contentType: "application/json",
      dataType: "json",
      data : jsondata,
      url: "http://localhost:4000/api/users/login/student",
      success : function(res){
        console.log(res);
        if(res.error == 'none' && res.msg){
          localStorage.setItem('token', 'Bearer ' + res.msg);
          window.location.href = './student_dashboard/adminHeader.html';
        }else{
          alert('Invalid Username password');
        }
      }
    })
  })


})