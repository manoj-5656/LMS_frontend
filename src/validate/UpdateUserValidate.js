export default function UserValidate(name,email,ph_no,university_name){
    if(!name.trim() || !email.trim() || !ph_no.trim() || !university_name.trim()    ){
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
    if(university_name.trim().length>20){
        return "University Name should not exceed 20 characters"
    }

}