function spliString(text,delimiter) {
    text.split(delimiter).forEach(s => console.log(s));
}

spliString('One-Two-Three-Four-Five', '-');
