function validation() {
    var email = document.forms["email"];    
    var password = document.forms["password"];
    if (email.value == "")
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
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
    return true; 
}