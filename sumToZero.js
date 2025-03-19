function sumToZero (n) {
    let sum = 0;

    for (let i = n; i >= 0; i--) {
        sum += i;
    }

    return sum;
}



const result = sumToZero(5);
console.log(result);