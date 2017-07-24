function printBill(input) {
    let product = input.filter((a,b) => b%2 ==0);
    let sum = input.filter((a,b) => b%2 == 1).map(Number)
        .reduce((a,b)=> a+b);
    console.log(`You purchased ${product.join(', ')} for a total sum of ${sum}`);
}

printBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);
