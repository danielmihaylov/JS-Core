function even(nums) {
    let result = [];
    for(let num in nums){
        if(num % 2 == 0){
           result.push(nums[num]);
        }
    }
    console.log(result.join(' '));
}

even(['5','10']);
