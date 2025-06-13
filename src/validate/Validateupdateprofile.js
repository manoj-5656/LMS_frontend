export default function validateupdateprofile(name,ph_no,university_name){
    if(!name.trim() || !ph_no.trim() || !university_name.trim()){
        return "required all the fields"
    }
    if(ph_no.trim().length!=10){
        return "invalid phone number"
    }
    
    
}