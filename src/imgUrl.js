

export default function imageUrl(code){
    if(code==="01d")
        {
            return "a_1_sunny.svg";
        }
    if(code==="02d")
        {
            return "b_1_partly_cloudy.svg";
        }
    if(code==="03d"||code==="03n")
        {
            return "b_2_cloudy.svg";
        }
    if(code==="04d"||code==="04n")
        {
            return "b_3_very_cloudy.svg";   
        }
    if(code==="09d"||code==="09n")
        {
            return "d_3_sleet.svg"
        }
    if(code==="10d"||code==="10n")
        {
            return "c_1_rainy.svg";
        }
    if(code==="11d"||code==="11n")
        {
            return "c_3_thunderstorm.svg";
        }
    if(code==="13d"||code==="13n")
        {
            return "g_3_snowflake.svg";
        }
    if(code==="50d"||code==="50n")
        {
            return "d_4_fog.svg";
        }
    if(code==="01n")
        {
            return"a_4_night.svg";
        }
    if(code==="02n")
        {
            return"b_4_cloudy_night.svg";
        }
}