const magicNumber = 7
for (attempt = 1; attempt<=2; attempt++ ){
    let guess = Number(prompt('enter number between 1 to 10'));
    
    
    if (guess < 0) {
        alert('not allowed number');
        attempt--
        continue
    }
    if (guess === magicNumber) {
        alert('well done');
        break
    }else{
        alert('number is wrong try again');
    }
    if (attempt === 2) {
        alert('the number was ' + magicNumber);
    }
}

