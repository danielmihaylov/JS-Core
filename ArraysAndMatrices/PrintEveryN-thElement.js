function nThElement(input) {
    let step = input[input.length -1];
    input.pop();

    input.filter(
        (element, index) => index % step == 0)
        .forEach(element => console.log(element));
}

nThElement([1, 2, 3, 4, 5, 6]);
