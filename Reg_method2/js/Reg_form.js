$(document).ready(function(){

$("form").submit(function(){

if($ ('#fullname').val()==''){
    $('#error').html("Please Enter your name")
    return false
    
}
else if($ ('#email').val()==''){
    $('#error1').html("Please Enter your email")
    $('#error').html("")
    return false
}
else if($('#number').val()==''){
    $('#error2').html("Please Enter your number")
    $('#error1').html("")
    $('#error').html("")
    return false
}

else if($('#date').val()==''){
    $('#error4').html("Please Enter your date")
    $('#error2').html("")
    $('#error1').html("")
    $('#error').html("")
    return false
}
else if($('#branch').val()==''){
    $('#error5').html("Please Enter your branch")
    $('#error4').html("")
    $('#error2').html("")
    $('#error1').html("")
    $('#error').html("")
    return false
}

else{
    return true

}
});
});
