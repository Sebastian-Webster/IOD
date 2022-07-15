const now = new Date();

console.log(typeof now)
console.log(now);
console.log(now.toString())

console.log(now.getFullYear())
console.log(now.getDay()) //get the day. 1 is Monday, 7 is Saturday.

const Jan01_1970 = new Date(0); //Number of milliseconds after Jan 1st 1970. 0 milliseconds after is Jan 1st 1970.
console.log(Jan01_1970)

const Jan02_1970 = new Date(24 * 3600 * 1000) //Number of milliseconds after Jan 1st 1970. 24 hours x 3600 seconds x 1000 milliseconds = a full day of milliseconds. Date will be 2nd Jan 1970.
console.log(Jan02_1970)

const date = new Date("1986-08-17")
console.log(date)

const DOB = "2007-05-22";
const DOBDateObject = new Date(DOB);
console.log(DOBDateObject)
const timeNow = new Date();
console.log(timeNow)

let millisecondDifference = timeNow.getTime() - DOBDateObject.getTime();
const years = Math.floor(millisecondDifference / 1000 / 60 / 60 / 24 / 365)
millisecondDifference -= years * 1000 * 60 * 60 * 24 * 365;
const days = Math.floor(millisecondDifference / 1000 / 60 / 60 / 24)
millisecondDifference -= days * 1000 * 60 * 60 * 24
const hours = Math.floor(millisecondDifference / 1000 / 60 / 60)
millisecondDifference -= hours * 1000 * 60 * 60
const minutes = Math.floor(millisecondDifference / 60)
millisecondDifference -= minutes * 60
console.log(`You are ${years} years, ${days} days, ${hours} hours, ${minutes} minutes old!`)
console.log(timeNow.getFullYear() - DOBDateObject.getFullYear())