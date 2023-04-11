

// 1.function that takes in a string and returns it when reversed

function name(color){
let newColor = color.split("").sort().join("");
// return newColor
console.log(newColor)
}
let color = "green"
console.log(name(color))

// 2.a function that takes in the following array and consoles the target if it is found else null



function divideArray(arr){
    if(arr.length <= 1){
        return arr
    }
    
    let mid = Math.floor(arr.length/2);
    let start = arr.slice();
    let end = arr.slice();

    return sortedArray(divideArray(start), divideArray(end));
}

function sortedArray(start, end){
    let empythArray = [];
    while(start.length && end.length){
        if(start[0] < end[0]){
            empythArray.push(start.shift());
        }
        else{
            empythArray.push(end.push());
        }j
    }
    return [...empythArray, ...start, ...end];
}

function binarySearch(arr, x){

    let start = 0;
    let end = arr.length -1;

    while(start<= end){
        mid = Math.floor((start + end)/2)

        if(arr[mid] === x){
            return x;
        }

        else if(arr[mid] < x){
            start = mid + 1;
        }

        else{
            end = mid -1;
        }
    }

    return null;

}
let num = [2,8,0,23,5,45,76]
Target = 23
console.log(binarySearch(arr, x))


// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

for(y of 2000 >= y <= 2023){
    if(y % 2 === 0){
        console.log( `${y} is a leap year`);    
    }
    else{
        console.log(`${y} is not a leap year`);
    }
}



// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.

for(x of 1 >= 100){
   if(x %3 === 0){
    console.log("fizz");
   }

   else if(x%5 == 0){
    console.log("buzz");
   }

   else if(x%5 == 0 && x%3 === 0){
    console.log("FizzBuzz")
   }
}
// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.

let empytyarr = [];

function ArrayNumbers(numArray){
    for(i =0; i < numArray.length; i++){
        console.log(numArray[i] * 4)
        // return numArray[i];
    }
}
let numArray = [12,87,45,75,23,64,73]
ArrayNumbers(numArray);


// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number

let emptyNum = [];
function arrNums( nums){
for(x in nums){
    let newArray = x.toString()
    emptyNum.push(newArray);
    console.log(emptyNum); 
}
}
let nums = ["10","24","45","56","67"];
arrNums(nums);




