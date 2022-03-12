$(document).ready(function(){

  var accessToken = localStorage.getItem('token');
  $.ajax({
    type: "GET",
    url: "http://localhost:4000/api/student/get_companies",
    dataType: 'json',
    headers: {'authorization': accessToken},
    success: (res) => {
      if(res.error == 'none'){
        console.log(res);
        var t =  ' ';
        for(var i = 0; i < res.msg.length; i++){
          t += '<li><table class="table table-sm table-bordered table-hover cell-border nowrap" cellspacing="0" width="100%" id="dept-table"><thead>';
          t += '<tr><th>Name</th><td>'+ res.msg[i].name+'</td></tr>\
              <tr><th>Description</th><td>'+ res.msg[i].description +'</td></tr>\
              <tr><th>Role </th><td>'+ res.msg[i].role+'</td></tr>\
              <tr><th>Criteria</th><td><ol><li>SSC: '+res.msg[i].ssc_marks+'</li><li> HSC: '+res.msg[i].hsc_marks+'</li></ol></td></tr>\
              <tr><th>CTC:</th><td>'+res.msg[i].ctc+'</td></tr>\
              <tr><th>Location</th><td>'+res.msg[i].location+'</td></tr>\
              <tr colspan="2"><th><button type="button" class="btn btn-primary" id="apply-btn" data-id="'+res.msg[i].id+'" data-toggle="modal" data-target="#viewModal">Apply</button></th></tr>';
          t += '</thead></table></li>';
        }
      }
      $('#company-list').append(t);
    },
  }).then(()=>{
    $('#apply-btn').click(function(){
      const id = $(this).attr('data-id');
      console.log(id);
      $.ajax({
        url: "http://localhost:4000/api/student/apply",
        type: "POST",
        dataType: 'json',
        data : {company_id: id},
        headers: {'authorization': accessToken},
        success: (res) => {
          if(res.error == "none"){
            alert("Applied Successfully.");
            $(this).hide();
          }else{
            alert("Failed to apply.");
          }
        }
      })
    });
  });

});
