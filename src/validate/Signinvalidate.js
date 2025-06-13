export default function Signinvalidation(email,pwd){
    if( !email.trim()|| !pwd.trim() ){
        return "Required all the fields"
    }

    

    // email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        return "Invalid email"
    }

// password
   
    if(pwd.trim().length <7){
        return "password should be atleast 7 characters"
    }
    if(pwd.trim().length>15){
        return "password should not more than 15 characters"
    }

}