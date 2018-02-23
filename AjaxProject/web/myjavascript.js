/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    
    

    $(document).ready(function(){
       
        setInterval(getData, 4000);
        function getData(){
            $.ajax({url:'chatServlet',
                type:'POST',
                dataType: 'json',
                success: function (data) {
                    $("#messages").html("<tr><th>sender</th><th>message</th></tr>");
//                    $("#messages").html("");
                    $.each(data, function( key, value ) {
                        
                        $("#messages").append("<tr><td>"+value.name+"</td>"+"<td>"+value.message+"</td></tr>");
                        
                        });
            }
                });
        }
        
        $("#sendbtn").click(function(){
            var name = $("#name").val();
            var message = $("#message").val();
            var jsonData = {"name":name,"message":message};
            $.ajax({url:'chatServlet',
                type:'GET',
                contentType: 'application/json',
                data:jsonData,
                dataType: 'json',
                success: function (data) {
                    
                    $("#message").val("");
                    $("#messages").html("<tr><th>sender</th><th>message</th></tr>");
                    $.each(data, function( key, value ) {
                        
                        $("#messages").append("<tr><td>"+value.name+"</td>"+"<td>"+value.message+"</td></tr>");
                        
                        });
            }
                });
        });
        setInterval(getActiveUsers, 4000);
        function getActiveUsers(){
            $.get("loginServlet",function (responseTxt, statusTxt, xhr){
                if(statusTxt == "success"){
                        document.getElementById("activeUsers").innerHTML="<th>Online users</th>";
                        var usersObject = JSON.parse(responseTxt);
                        for(i=0; i<usersObject.length; i++){
                            var username = usersObject[i].username;
                            var tr = document.createElement("tr");
                            var td1 = document.createElement("td");
                            td1.innerHTML = username;
                            tr.appendChild(td1);
                            document.getElementById("activeUsers").appendChild(tr);
                        }
                }
            })
        }
    });
    