// Using For Loop
// let val = 6
// let factorial = val;
// for (let i = val-1; i>=1 ; i--) {
//     factorial = factorial * i
// }
// console.log(factorial);


// Using Reduce
arr = []
let val = 6
let factorial = val;
for (let i = val; i>=1 ; i--) {
    arr.push(i);
}

let fact_result = arr.reduce(function(acc, cur) {
    return acc * cur;
});
console.log(fact_result);
// console.log(arr)


/*
Logic:
A reverse loop from 6 to 1 (i)
The initial value of factorial is 6 then it would be multiplied with the (i)



*/