function oddNumbers(nums) {
    let result = nums.filter((num, i) => i % 2 ==1).map(x => x*2).reverse();
    console.log(result.join(" "));
}

oddNumbers(10,15,20,25);

