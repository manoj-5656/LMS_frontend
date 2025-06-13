export default function updatecoursevalidate(course_name,img,duration,price,mode,road_map_id){
    if(!course_name.trim() || !img.trim() || !duration.trim() || !price.trim() || !mode.trim() || !road_map_id.trim()){
        return "Required all the fields"
    }
}