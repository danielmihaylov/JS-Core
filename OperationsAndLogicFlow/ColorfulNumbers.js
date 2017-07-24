function printColors(n) {
    let result = '<ul>\n';
    for(let i = 1; i <= n; i++){
        let color = i % 2 != 0 ? 'green' : 'blue';
        result += `  <li><span style='color:${color}'>${i}</span></li>\n`
    }
    result += '</ul>';
    return result;
}
console.log(printColors(5));
