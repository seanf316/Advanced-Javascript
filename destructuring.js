/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    alicia: "developer",
    jill: "accountant"
};

let {mike, alicia, jill} = jobs;
console.log(mike, alicia, jill);

// Destructuring subsets
let languages = ['English', 'French', 'Italian', 'Spanish', 'German'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'English',
    secondLanguage: 'French',
    thirdLanguage: 'Italian',
    fourthLanguage: 'Spanish',
    fifthLangauage: 'German'
};

let {firstLanguage, fifthLangauage} = languages2;
console.log(firstLanguage, fifthLangauage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherries'];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: 'pizza',
    silvia: 'steak',
    jack: 'fruit',
    jim: 'vegeterian'
};

let {brian, silvia, ...rest} = favouriteFoods;
console.log(brian);
console.log(silvia);
console.log(rest);