// find maximun in an array
let findMax = [10,37,3766,56, 664,773] ;
let max = findMax[0];
for(let i=1; i<findMax.length; i++){
    if(findMax[i] > max){
        max = findMax[i];
    }
}
console.log(max); // time complexity 0(n) // space complexity 0(1)

console.log(Math.max(...findMax)); // time complexity 0(n), space 0(n)

const maxi = findMax.reduce((acc, curv) => {
    curv > acc ? acc = curv : curv
    return acc;
})
console.log(maxi) // time complexity 0(n), space 0(1)

// sum of array

let findSum = [44,56,334,566,678,7889,77];
let sum = findSum.reduce((a,c)=> {
    a=a+c;
    return a;
}
)
console.log(sum); // time complexity 0(n) / space complexity 0(1)

//Create a function that removes duplicate values from the array / without using set.

function uniqueArray (arr){
    let unique = [];
    let seen = {};

    for (let i=0; i<arr.length; i++){
        if(!seen[arr[i]]){
            seen[arr[i]] = true;
            unique.push(arr[i]);
        }
    }
    console.log(unique)
}
uniqueArray([1,2,44,55,44,66,2]);


