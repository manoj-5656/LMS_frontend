export default function validation(name,email,ph_no,pwd,c_pwd){
    if(!name.trim() || !email.trim() || !ph_no.trim() || !pwd.trim() || !c_pwd.trim()){
        return "Required all the fields"
    }
//name validation
    if(name.trim().length>20){
        return "name should be less than 20 characters"
    }

    // email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        return "Invalid email"
    }
// phone number validation
    if(ph_no.trim().length!=10){
        return "Mobile number should be 10 digits"
    }
// password
    if(pwd.trim()!=c_pwd.trim()){
        return "Password and confirm password should be same"
    }
    if(pwd.trim().length <7){
        return "password should be atleast 7 characters"
    }
    if(pwd.trim().length>15){
        return "password should not more than 15 characters"
    }

}