// understanding closure
function outer(){
    var x = 10;
    return function inner(){
        console.log(x)
    }
};
outer()();

let returnedOuter = outer();
returnedOuter();
//inner();  ==> calling inner directly throws undefined error
// now js engine forms a closure with outer variable x's reference attached to inner function. 
// But normally if the variable is not referenced in inner function, it should die/ moved out from EC/ garbage collected. 
// now why are closures powerful because they are used for 
/* 
Why this is powerful

This enables:

data hiding
private variables
React hooks
memoization
currying
event handlers
debouncing
module patterns
*/