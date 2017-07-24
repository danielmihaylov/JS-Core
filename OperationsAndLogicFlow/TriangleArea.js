function area(a,b,c) {
    let perimeter = (a + b + c)/2;
    console.log(Math.sqrt(perimeter *(perimeter-a)*(perimeter-b)*(perimeter -c)));
}

area(2,3.5,4);