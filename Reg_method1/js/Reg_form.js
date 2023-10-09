$(document).ready(function(){

 $("#button").click(function(){

    if($ ('#fullname').val()==''){
        $('#error').html("Please Enter your name")
        
    }
    else if($ ('#email').val()==''){
        $('#error1').html("Please Enter your email")
        $('#error').html("")

    }
    else if($('#number').val()==''){
        $('#error2').html("Please Enter your number")
        $('#error1').html("")
        $('#error').html("")

    }

    else if($('#date').val()==''){
        $('#error4').html("Please Enter your date")
        $('#error2').html("")
        $('#error1').html("")
        $('#error').html("")

    }

    else if($('#branch').val()==''){
        $('#error5').html("Please Enter your branch")
        $('#error4').html("")
        $('#error2').html("")
        $('#error1').html("")
        $('#error').html("")
    
    }

    else{
        document.getElementById('reg_form').submit();

    }
});
});



