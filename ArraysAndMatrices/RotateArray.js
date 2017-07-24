function rotate(array){
    let times = Number(array.pop());
    times %= array.length;

    for(let i = 0; i < times; i++){
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}
