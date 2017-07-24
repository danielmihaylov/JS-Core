function concatenate(input) {
    let result = "";
    for(let i = 0;i < input.length; i ++){
        result = result.concat(input[i]);
    }
    console.log(result.split("").reverse().join(""));
}
concatenate(['race','car','dada']);
