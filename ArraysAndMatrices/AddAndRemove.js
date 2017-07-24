function addRemove(input) {
    let result = [];
    let element = 1;

    for(let command of input){
        if(command == 'add'){
            result.push(element);
        }else{
            result.pop();
        }
        element ++;
    }

    if(result.length == 0){
        console.log('Empty');
    }else{
        result.forEach(element => console.log(element));
    }
}
