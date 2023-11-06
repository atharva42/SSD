function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    // If password not entered
    if (password1 == '')
        alert ("Please enter Password");
          
    // If confirm password not entered
    else if (password2 == '')
        alert ("Please enter confirm password");
          
    // If Not same return False.    
    else if (password1 != password2) {
        alert ("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True.
}

function toggle(){
    var a= document.getElementById("userPassword")
    if(a.type==="password"){
        a.type="text";
    }
    else{
        a.type="password";
    }
}

function check_val(e){
    if(e==8){
        document.getElementById("error").innerHTML="NO"
        
    }
}
document.addEventListener("keydown", function (e){
    // e = e || window.event;
    if(e.ctrlKey && e.key==="m"){
        var el=document.body;
     el.classList.toggle("dark-mode")
    }
});


// function dark(e){
//     if(e=="m"){
//     var el=document.body;
//     el.classList.toggle("dark-mode")
//     }
// }