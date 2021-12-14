
function remarkHumidity(val) {
   if(val>50){
       return 'High';

   }else if(val>30){
       return 'Medium';
   }else if(val>0){
       return 'Low';
   }else return '--';
}

function remarkVisibility(val) {
    val = val /1000*100
    if(val>70){
        return 'High';
 
    }else if(val>50){
        return 'Medium';
    }else if(val>30){
        return 'Low';
    }else return '--';
}

function remarkAqi(val) {
    switch(val){
        case 1: return 'Good';
                
        case 2: return 'Fair';
                
        case 3: return 'Moderate';
                
        case 4: return 'Poor';
                
        case 5: return 'Dangerous';
                
        default: return '--';
                                                       
    }
}

export {
    remarkAqi,
    remarkVisibility,
    remarkHumidity
}