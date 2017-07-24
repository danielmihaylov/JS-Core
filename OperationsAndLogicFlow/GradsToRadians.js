function gradsToRadians(grads) {
    grads = Number(grads);
    let radians = grads * 3.6 / 4;
    radians = radians % 360;

    if(radians < 0) {
        radians = 360 + radians;
    }

    console.log(radians);
}

gradsToRadians(100);

