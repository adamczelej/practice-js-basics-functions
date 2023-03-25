const sumTo = function(param) {
    let sum = 0;
    for (let i=1; i<=param; i++){
        sum+=i;
    }
    return sum;
}
const result = sumTo(4);
console.log(result);
