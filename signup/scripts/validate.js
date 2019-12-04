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
    {
        var isAN = isNaN(phone.value);
        if(isAN){
            window.alert("Not a valid Phone NUmber!"); 
            phone.focus(); 
            return false;
        }
    }
    if (phone.value.length != 10)
    { 
        window.alert("Phone Number should have 10 numbers!"); 
        phone.focus(); 
        return false; 
    } 
    if (password.value == "")
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    }
    if(password.value.length<8)
    {
        window.alert("Password is small(Minimum characters:8)"); 
        password.focus(); 
        return false; 
    }
	if(password.value.length<8)
    {
        window.alert("Password is small(Minimum characters:8)"); 
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