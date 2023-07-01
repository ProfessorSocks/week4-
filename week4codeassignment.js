//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] - ages[0] is not allowed!
//Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//Use a loop to iterate through the array and calculate the average age.

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

function ageCheck() {
    let newAge = ages[ages.length - 1] - ages[0];
    console.log(newAge);
}
ageCheck();

ages.push(69);

ageCheck();




//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//Use a loop to iterate through the array and calculate the average number of letters per name.
//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
for (let aName of names){
    console.log(aName.length);
}

let newName = "";
for (let aName of names){
    newName += aName + " "; 
}
console.log(newName);




//How do you access the last element of any array?

names[names.length-1];



//How do you access the first element of any array?

names[0];




//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example
//let names = ["Kelly", "Sam", "Kate"];    // starting with this array
//let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = [];
for(let aName of names){
    nameLengths.push(aName.length);
}
console.log(nameLengths);





// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

var nameSum = 0;
for(let aName of nameLengths){
    nameSum += aName;
}
console.log(nameSum);





// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

let newWord = '';
function wordMulti(word, n){
    for (i = 0; i < n; i++) {
        newWord += word;
    }
    console.log(newWord);
}
wordMulti('Hello', 3)



// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}

fullName('Camille', 'West')


// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function greaterThan100(arr) {
    let sum = 0
    for(let i of arr){
       sum += i ;
    }
    console.log(sum)
    if(sum > 100){
        return true;
    }else {
        return false;
    }
}

let random = [2,2,2,2,2];
console.log(greaterThan100(random));




// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(arr) {
    var sum = 0;
    for(let i of arr){
        sum += i;
    }
    return sum / arr.length
}

let random2 = [1,2,3,4,5,6,7,8,9,];
console.log(average(random2));







// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareSum(arr1,arr2){
    let sum1 = average(arr1);
    let sum2 = average(arr2);
    if(sum1 > sum2){
        return true;
    }else{
        return false;
    }
}
console.log(compareSum(random,random2))





// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

isHotOutside = prompt('Is it hot outside true or false?');
moneyInPocket = prompt('How much money do you have?');
function willBuyDrink(){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    }else{
        return false
    }
}
console.log(willBuyDrink())





// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


function feedCat(catName){
    let meowing = prompt('True or False is the cat meowing?')
    if(meowing){
        console.log(`Time to feed ${catName}`)
    }
}
feedCat('Circuit')