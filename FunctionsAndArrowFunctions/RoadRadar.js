function radar([km,region]) {
    switch (region){
        case "motorway":
            if(km <= 130){
                console.log("");
                break;
            }else if(km > 130 && km <= 150){
                console.log("speeding");
                break;
            }else if(km > 150 && km <= 170){
                console.log("excessive speeding");
                break;
            }else{
                console.log("reckless driving");
                break;
            }
            break;
        case "interstate":
            if(km <= 90){
                console.log("");
                break;
            }else if(km > 90 && km <= 110){
                console.log("speeding");
                break;
            }else if(km > 110 && km <= 130){
                console.log("excessive speeding");
                break;
            }else{
                console.log("reckless driving");
                break;
            }
            break;
        case "city":
            if(km <= 50){
                console.log("");
                break;
            }else if(km > 50 && km <= 70){
                console.log("speeding");
                break;
            }else if(km > 70 && km <= 90){
                console.log("excessive speeding");
                break;
            }else{
                console.log("reckless driving");
                break;
            }
            break;
        case "residential":
            if(km <= 20){
                console.log("");
                break;
            }else if(km > 20 && km <= 40){
                console.log("speeding");
                break;
            }else if(km > 40 && km <= 60){
                console.log("excessive speeding");
                break;
            }else{
                console.log("reckless driving");
                break;
            }
            break;
        default:
            break;
    }
}

radar([21,residential]);
