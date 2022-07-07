const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
    
  const people = [
    { 
        name: "Jane",
        address: {
            street: "12 Lalaland St",
            suburb: "Brisbane"
        },
        company: "Company One"
    },
    { 
        name: "John",
        address: {
            street: "123 Somewhere Lane",
            suburb: "Adelaide"
        },
        company: "Company Two"
    },
    { 
        name: "Jill",
        address: {
            street: "321 Nowhere Av",
            suburb: "Sydney"
        },
        company: "Company Three"
    }      
];

//This function adds a new person to the people object and prints a confirmation message
function addPerson(new_name, new_street, new_suburb, new_company)
{
    people.push({name: new_name, address: {street: new_street, suburb: new_suburb}, company: new_company});
    console.log(people); 
    console.log('added '+new_name);
}

//This function adds a new company to the companies object and prints a confirmation message
function addCompany(new_name, new_category, new_start, new_end)
{
    companies.push({name: new_name, category: new_category, start: new_start, end: new_end})
    console.log(companies)
    console.log('Added ' + new_name + ' to the companies list')
}

//This function prints and returns how many people exist
function countPeople()
{
    console.log(people.length);
    return people.length;
}

//This function prints and returns how many companies exist
function countCompanies()
{
    return companies.length
}

//This function generates a HTML list of all the people names
function createPeopleList()
{
    let html = '<ul>';

    for (i = 0; i < people.length; i++)
    {
        html += '<li>' + people[i].name + '</li>';
    }
    html += '</li>';

    return html;
}

//This function generates a HTML list of all the company names
function createCompanyList()
{
    let html = "<table><thead><tr><th>Name</th><th>Category</th><th>Start Year</th><th>End Year</th><tbody>"

    companies.map(company => {
        html += "<tr>"
        html += "<td>" + company.name + "</td>"
        html += "<td>" + company.category + "</td>"
        html += "<td>" + company.start + "</td>"
        html += "<td>" + company.end + "</td"
        html += "</tr>"
    })
    
    html += "</tbody></table>"
}

//This function changes the company of the given person to the new value and prints a confirmation message
function changeCompany(person_name, new_company)
{
    for (i = 0; i < people.length; i++)
    {
        if (people[i].name == person_name)
        {
            console.log('Changing company for '+person_name+' from '+people[i].company+' to '+new_company);
            people[i].company = new_company;
        }
    }
}

//This function changes the address of the given person to the new value and prints a confirmation message
function changeAddress(person_name, new_street, new_suburb)
{
    const personIndex = people.findIndex(person => person.name === person_name)
    const newPersonData = people[personIndex];
    newPersonData.address = {street: new_street, new_suburb}
    people[personIndex] = newPersonData;
}

//This function gets the company category for a given person and prints and returns the category value
function getCompanyCategory(person_name)
{
    let company;
    let category;
    for (i = 0; i < people.length; i++)
    {
        if (people[i].name == person_name)
        {
            company = people[i].company;
        }
    }
    console.log(person_name+' works at '+company);

    for (j = 0; j < companies.length; j++)
    {
        if (companies[j].name == company)
        {
            category = companies[i].category;
        }
    }
    console.log(company+' is in the '+category+' category');

    return category;
}

//This function gets the company starting year for a given person and prints and returns the value
function getCompanyStartYear(person_name)
{
    let company = people[people.findIndex(person => person.name == person_name)].company;
    return companies[companies.findIndex(companyItem => companyItem.name == company)].start;
}


//This function generates a HTML table to format all of the people
function generatePeopleTable()
{
    let html = '<table>';
    html += '<thead><tr> <th>Name</th> <th>Address</th> <th>Company</th> </tr></thead><tbody>';
    for (i = 0; i < people.length; i++)
    {
        html += '<tr>';
        html += '<td>' + people[i].name + '</td>';
        html += '<td>' + people[i].address.street + ', ' + people[i].address.suburb + '</td>';
        html += '<td>' + people[i].company + '</td>';
        html += '</tr>';
    }
    html += '</tbody></table>';

    return html;
}

//This function generates a HTML table to format all of the companies
function generateCompanyTable()
{
    let html = '<table>';
    html += '<thead><tr> <th>Name</th> <th>Category</th> <th>Start</th> <th>End</th> </tr></thead><tbody>';
    for (i = 0; i < companies.length; i++)
    {
        html += "<tr>"
        html += "<td>" + companies[i].name + "</td>"
        html += "<td>" + companies[i].category + "</td>"
        html += "<td>" + companies[i].start + "</td>"
        html += "<td>" + companies[i].end + "</td>"
        html += "</tr>"
    }
    html += '</tbody></table>';

    return html;
}


//TODO: Create functions to remove a person; to remove a company
function removePerson(personName) {
    people.splice(people.findIndex(person => person.name === personName), 1)
    console.log('Successfully removed ' + personName)
}

function removeComany(companyName) {
    companies.splice(companies.findIndex(company => company.name == companyName), 1)
    console.log('Successfully removed ' + companyName)
}

//TODO: Build HTML with forms and buttons to use the above functions (similar to calculator example) and display results

addPerson('Jo', '44 Forty St', 'Darwin', 'Company Nine');
countPeople();
changeCompany('Jill', 'Company Five');
getCompanyCategory('John');
console.log(getCompanyStartYear('John'))
console.log(countCompanies())