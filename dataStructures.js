const fruits = ["apple", "banana", "orange", "kiwi", "pear"];

for (let i = 0; i < fruits.length; i++) {
    console.log('Fruit name: ' + fruits[i])
}

console.log('----------------------------')

fruits.map(fruit => console.log('Fruit name: ' + fruit))

const websites = [
    {
        name: 'Google',
        url: 'https://www.google.com',
        role: 'Search Engine'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        role: 'Social Media'
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com',
        role: 'Social Media'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        role: 'Social Media'
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com',
        role: 'Video Sharing Platform'
    }
]

for (let i = 0; i < websites.length; i++) {
    console.log('Website name: ' + websites[i].name)
    console.log('Website url: ' + websites[i].url)
    console.log('Website role: ' + websites[i].role)
    console.log('----------------------------')
}

console.log('----------------------------')

websites.map(website => {
    console.log('Website name: ' + website.name)
    console.log('Website url: ' + website.url)
    console.log('Website role: ' + website.role)
    console.log('----------------------------')
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.pop() // Gets rid of 10 (gets rid of the last element and returns it)
numbers.shift() // Gets rid of 1 (gets rid of the first element and returns it)
numbers.unshift(1) //Puts back 1 (puts the arguments at the start of the array)
numbers.indexOf(5) //Returns 4 (gets the index of the argument and returns it)
numbers.push(10) //Puts 10 back into the end of the array (adds the argument to the end of the array)

console.log(numbers)
console.log(Array.isArray(numbers)) //Returns true (checks if the argument is an array)
console.log(Array.isArray("hi")) //Returns false (checks if the argument is an array)

console.log(typeof '') // Returns string (checks the type of the argument)
console.log(typeof 1) // Returns number (checks the type of the argument)
console.log(typeof true) // Returns boolean (checks the type of the argument)
console.log(typeof undefined) // Returns undefined (checks the type of the argument)
console.log(typeof null) // Returns object because of a JS glitch (checks the type of the argument)
console.log(typeof {}) // Returns object (checks the type of the argument)
console.log(typeof function () {}) // Returns function (checks the type of the argument)

//Creates a new array with 100 empty items
const newArray = new Array(100)
console.log(newArray)

//Does the same thing but with the array literal ([])
const newArray2 = [];
newArray2.length = 100;
console.log(newArray2)

const newObject = {firstName: "Sebastian", lastName: "Webster"}
//These are the same
console.log(newObject.firstName) 
console.log(newObject['firstName'])
//These are also the same
console.log(newObject.lastName)
console.log(newObject['lastName'])

const stringifiedObject = JSON.stringify(newObject);
console.log(stringifiedObject) // This is JSON
const parsedJSONObject = JSON.parse(stringifiedObject);
console.log(parsedJSONObject) // This is a JS Object

const companyDetails = {
    name: "Google",
    address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
    employees: [
        {
            name: "Sebastian",
            age: 15,
            role: "Software Engineer",
            currentProjects: [
                {
                    name: "Google Chrome",
                    description: "A browser that is used to browse the web",
                    projectStartDate: "2nd September 2008",
                },
                {
                    name: "Google Maps",
                    description: "A map that is used to find the location of a place",
                    projectStartDate: "8th February 2005",
                }
            ],
            discontinuedProjects: [
                {
                    name: "Google Glass",
                    description: "A pair of glasses that goes on your head that allows you to see AR",
                    projectStartDate: "15th April 2013",
                    projectEndDate: "15th January 2015"
                }
            ]
        },
        {
            name: "John",
            age: 25,
            role: "Software Engineer",
            currentProjects: [
                {
                    name: "Google Chrome",
                    description: "A browser that is used to browse the web",
                    projectStartDate: "2nd September 2008",
                },
                {
                    name: "Google Hangouts",
                    description: "An app that allows people to chat with each other",
                    projectStartDate: "15th May 2013"
                },
                {
                    name: "Google Search Engine",
                    description: "A search engine that allows people to search for things",
                    projectStartDate: "September 4th 1998"
                }
            ],
            discontinuedProjects: [
                {
                    name: "Loon",
                    description: "A company that provides internet to millions via balloons in the sky",
                    projectStartDate: "16th June 2013",
                    projectEndDate: "21st January 2021"
                }
            ]
        },
        {
            name: "Jane",
            age: 35,
            role: "Software Engineer",
            currentProjects: [
                {
                    name: "Google Docs",
                    description: "A document editor that allows people to edit documents",
                    projectStartDate: "9th March 2006"
                },
                {
                    name: "Google Slides",
                    description: "A presentation editor that allows people to edit presentations",
                    projectStartDate: "9th March 2006"
                }, 
                {
                    name: "Google Sheets",
                    description: "A spreadsheet editor that allows people to edit spreadsheets",
                    projectStartDate: "9th March 2006"
                }
            ],
            discontinuedProjects: [
                {
                    name: "YouTube Go",
                    description: "An app that lets you download YouTube videos to be able to watch videos when you don't have mobile data.",
                    projectStartDate: "December 2016",
                    projectEndDate: "August 2022"
                }
            ]
        }
    ]
}

console.log(companyDetails.employees[1].currentProjects)