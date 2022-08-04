// Write some JavaScript to create a new array based on the overlapping items and the number of times the overlap occurs. For example, our new array would look like this:

// ['a', 'a', 'c', 'b', 'b'];

let arr1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
let arr2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

// my psuedo code solution
// 1. define input arrays
// 2. write a function to call both arrays
// 3. declare an empty array to store the overlapping characters
// 4. loop through the characters in arr1
// 5. if current character (within arr1) is also found within arr2...
// 6. push current character to new empty array
// 7. also remove THAT OCCURENCE of that character from both arr1 and arr2

let overlappingChars = [];

function checkOverlaps(x, y) {
    
    for (let i = 0; i < x.length; i++) {
        const xValue = x[i];
        
        for (let j = 0; j < y.length; j++) {
            const yValue = y[j];
            
            if (xValue === yValue) {
                overlappingChars.push(xValue);
            }
            x.shift()
            
            
        }
        console.log(y)
    };
    
    
    
    
    
    
    // let currentXValue = ""
    // let currentYValue = ""
    
    // x.find(function(yValue))
    
    // return x.forEach(function(y) {
    //     if (y.find) {
            
        // }
        // console.log(y, 'in arr2', x.indexOf(y) )
    //    debugger; 
    // });
    // return ;


    // for (let i = 0; i < x.length; i++) {
    //     const element = x[i];
    //     if (element) {

    //     }
    // }

    // overlappingChars.push(xyz) // where xyz === the current overlapping character

    // arr1.splice[i] // remove the character that was just itterated over, where i is the current index of the loop ????
};

checkOverlaps(arr1, arr2);
console.log(overlappingChars);