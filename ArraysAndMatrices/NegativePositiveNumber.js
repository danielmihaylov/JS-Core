function negativePositive(nums) {
    let result = [];
    for(num of nums){
        if(num < 0){
            result.unshift(num);
        }else{
            result.push(num);
        }
    }
    console.log(result.join('\n'));
}
negativePositive([7,-2,8,9]);