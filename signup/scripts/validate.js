function validate(){
    var name = document.forms["name"]; 
    var lastname = document.forms["lastname"];  
    var email = document.forms["email"];    
    var phone = document.forms["phone"]; 
    var password = document.forms["password"];
    var repassword = document.forms["repassword"];
    if (name.value == "")
    { 
        window.alert("Please enter your First name."); 
        name.focus(); 
        return false; 
    }
    if (lastname.value == "")
    { 
        window.alert("Please enter your Last name."); 
        lastname.focus(); 
        return false; 
    } 
    if (email.value == "")
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "")
    { 
        window.alert("Please enter your phone number."); 
        phone.focus(); 
        return false; 
    } 

    if (password.value == "")
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    }
    if (repassword.value != password.value)
    { 
        window.alert("Passwords don't match!"); 
        repassword.focus(); 
        return false; 
    } 
    return true; 
}