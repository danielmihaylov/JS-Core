function oddEven(num) {
    let remember = num % 2;
    if(remember == 0){
        console.log("even");
    }else if(remember == Math.round(remember)){
        console.log("odd");
    }else{
        console.log("invalid");
    }
}
oddEven(5);
