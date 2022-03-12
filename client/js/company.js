$(document).ready(function(){
  $('#add-company-btn').click((e) => {
    var company_name = $("#company_name").val();
    var description = $("#description").val();
    var role = $("#role").val();
    var ctc = $("#ctc").val();
    var location = $("#location").val()
    var ssc_marks = $("#ssc_marks").val();
    var hsc_marks = $("#hsc_marks").val();
    var degree_marks = $("#degree_marks").val();
    var gap = $("#gap").val();
    var others = $("#others").val();
    var backlog_allowed = $("#backlog_allowed").val();
    var expiry_date = $("#expiry_date").val();

    var jsondata = JSON.stringify({'company_name': company_name, 'description': description, 'role': role, 'ctc': ctc, 'location': location, 'ssc_marks': ssc_marks, 'hsc_marks': hsc_marks, 'degree_marks': degree_marks, 'gap': gap, 'other': others, 'expiry_date': expiry_date, 'backlog_allowed': backlog_allowed, 'active_status': 1});
    const accessToken = localStorage.getItem('token');
    $.ajax({
      type: "POST",
      contentType: "application/json",
      headers: {'authorization': accessToken},
      dataType: "json",
      data : jsondata,
      url: "http://localhost:4000/api/tpo/add_company",
      success : function(res){
        console.log(res);
        if(res.error == 'none'){
          alert('Company Added Successfully.');
          // var tr = ' ';
          // for(var i = 0; i < res.msg.length; i++){
          //   tr += '<td>'+res.msg[i].id+'</td><td>'+res.msg[i].name+'</td><td>'+res.msg[i].description+'</td><td>'+res.msg[i].location+'</td>\
          //         <td>'+res.msg[i].role+'</td><td>'+res.msg[i].ctc+'</td><td>'+res.msg[i].ssc_marks+'</td><td>'+res.msg[i].hsc_marks+'</td>';
          // }
          // $('#company-table tbody tb')
        }else{
          alert('Invalid Username password');
        }
      }
    })
  });

  
  $("#add-student-btn").click(function(e){
    var first_name = $('#first_name').val();
    var middle_name = $('#middle_name').val();
    var last_name = $("#last_name").val();
    var mobile_no = $("#mobile_no").val();
    var email = $('#email').val();

    var jsondata = JSON.stringify({ 'first_name': first_name, 'middle_name': middle_name, 'last_name': last_name, 'mobile_no': mobile_no, 'email': email});
    const accessToken = localStorage.getItem('token');
    $.ajax({
      url: 'http://localhost:4000/api/tpo/add_student',
      type: "POST",
      contentType: "application/json",
      headers: {'authorization': accessToken},
      data : jsondata,
      success: (res) => {
        console.log(res);
        if(res.err == 'none'){
          alert('Password: ' + res[0].msg);
        }else{
          alert("Failed");
        }
      }
    });
  });
  
})