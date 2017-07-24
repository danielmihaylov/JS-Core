function delimiter(input) {
    let delimiter = input[input.length - 1];
    input.pop();
    console .log(input.join(delimiter));
}
//delimiter(['One' 'Two' 'Three' 'Four' 'Five' '-']);