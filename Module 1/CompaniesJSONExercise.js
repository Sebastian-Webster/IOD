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

function showErrorText(textElement, error) {
    textElement.style.color = 'red'
    textElement.style.fontWeight = 'bold'
    textElement.innerHTML = error
}

function showCompletionText(textElement, message) {
    textElement.style.color = 'green'
    textElement.style.fontWeight = 'normal'
    textElement.innerHTML = message
}

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
    let html = '<ul>';

    for (i = 0; i < companies.length; i++)
    {
        html += '<li>' + companies[i].name + '</li>';
    }
    html += '</li>';

    return html;
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
    newPersonData.address = {street: new_street, suburb: new_suburb}
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

    return category;
}

function getCompanyThatPersonWorksAt(person_name) {
    return people[people.findIndex(person => person.name === person_name)].company;
}

//This function gets the company starting year for a given person and prints and returns the value
function getCompanyStartYearFromPersonName(person_name)
{
    let company = people[people.findIndex(person => person.name == person_name)].company;
    return companies[companies.findIndex(companyItem => companyItem.name == company)].start
}

function getCompanyStartYearName(company_name)
{
    return companies[companies.findIndex(company => company.name == company_name)].start
}


//This function generates a HTML table to format all of the people
function generatePeopleTable()
{
    let html = '<table cellspacing="0">';
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
    let html = '<table cellspacing="0">';
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

function countPeopleButtonPress() {
    document.getElementById('peopleCount').innerHTML = 'There are ' + countPeople() + ' people in the people object.';
}

function countCompaniesButtonPress() {
    document.getElementById('companyCount').innerHTML = 'There are ' + countCompanies() + ' companies in the companies object.';
}

function createPeopleListButtonPress() {
    document.getElementById('peopleList').innerHTML = createPeopleList();
}

function createCompanyListButtonPress() {
    document.getElementById('companyList').innerHTML = createCompanyList()
}

function createPeopleTableButtonPress() {
    document.getElementById('peopleTable').innerHTML = generatePeopleTable();
}

function createCompanyTableButtonPress() {
    document.getElementById('companyTable').innerHTML = generateCompanyTable()
}

function addPersonFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('addPersonForm');
    const resultText = document.getElementById('addPersonResultText');

    if (companies.findIndex(company => company.name === form.company.value) === -1) {
        showErrorText(resultText, `${form.company.value} was not found in the companies object. Please use the Add a Company tool to add it.`)
    } else {
        addPerson(form.name.value, form.street.value, form.suburb.value, form.company.value)
        showCompletionText(resultText, `You have successfully added ${form.name.value} to the people object. There are now ${people.length} people in the people object.`)
        form.reset();
        form.name.focus();
    }
}

function addCompanyFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('addCompanyForm');
    const resultText = document.getElementById('addCompanyResultText');

    if (companies.findIndex(company => company.name === form.name.value) != -1) {
        // If the company has already been added, tell the user the company has already been created.
        showErrorText(resultText, `${form.name.value} is already a valid company.`)
    } else {
        // If the company has not been added, create the new company.
        addCompany(form.name.value, form.category.value, form.start.value, form.end.value)
        showCompletionText(resultText, `You have successfully added ${form.name.value} to the companies object. There are now ${companies.length} companies in the companies object.`)
        form.reset();
        form.name.focus();
    }
}

function changeCompanyFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('changeCompanyForm');
    const resultText = document.getElementById('changeCompanyResultText');

    if (companies.findIndex(company => company.name === form.nameOfNewCompany.value) === -1) {
        // The company that the person is trying to change to does not exist. Warn the user.
        showErrorText(resultText, `The company ${form.nameOfNewCompany.value} does not exist. Please add it with the Add a Company tool.`)
    } else if (people.findIndex(person => person.name === form.nameOfPerson.value) === -1) {
        // Warn the user that the person they are trying to change companies for does not exist.
        showErrorText(resultText, `The person ${form.nameOfPerson.value} does not exist. Please add the person with the Add a Person tool.`)
    } else {
        // Change the company if the above conditions are false.
        changeCompany(form.nameOfPerson.value, form.nameOfNewCompany.value)
        showCompletionText(resultText, `${form.nameOfPerson.value} now works at ${form.nameOfNewCompany.value}`)
        form.reset();
        form.nameOfPerson.focus();
    }
}

function changeAddressFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('changeAddressForm');
    const resultText = document.getElementById('changeAddressResultText');

    if (people.findIndex(person => person.name === form.nameOfPerson.value) === -1) {
        // Warn the user that the person they are trying to change address for does not exist.
        showErrorText(resultText, `The person ${form.nameOfPerson.value} does not exist. Please add the person with the Add a Person tool.`)
    } else {
        // Change the address if the above condition are false.
        changeAddress(form.nameOfPerson.value, form.nameOfNewStreetAddress.value, form.nameOfNewSuburb.value)
        showCompletionText(resultText, `${form.nameOfPerson.value} now lives at ${form.nameOfNewStreetAddress.value}, ${form.nameOfNewSuburb.value}`)
        form.reset();
        form.nameOfPerson.focus();
    }
}

function getCompanyCategoryFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('getCompanyCategoryForm');
    const resultText = document.getElementById('getCompanyCategoryResultText');

    if (people.findIndex(person => person.name === form.name.value) === -1) {
        // Warn the user that the person they are trying to find does not exist.
        showErrorText(resultText, `The person ${form.name.value} does not exist. Please add the person with the Add a Person tool.`)
    } else {
        let companyName = getCompanyThatPersonWorksAt(form.name.value)
        let companyCategory = getCompanyCategory(form.name.value)
        showCompletionText(resultText, `${form.name.value} works at ${companyName}. ${companyName} is part of the ${companyCategory} category.`)
        form.reset();
        form.name.focus();
    }
}

function getCompanyFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('getCompanyForm');
    const resultText = document.getElementById('getCompanyResultText');

    if (people.findIndex(person => person.name === form.name.value) === -1) {
        // Warn the user that the person they are trying to find does not exist.
        showErrorText(resultText, `The person ${form.name.value} does not exist. Please add the person with the Add a Person tool.`)
    } else {
        let companyName = getCompanyThatPersonWorksAt(form.name.value)
        showCompletionText(resultText, `${form.name.value} works at ${companyName}.`)
        form.reset();
        form.name.focus();
    }
}

function getCompanyStartYearFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('getCompanyStartYearForm');
    const resultText = document.getElementById('getCompanyStartYearResultText');

    if (people.findIndex(person => person.name === form.name.value) === -1) {
        // Warn the user that the person they are trying to find does not exist.
        showErrorText(resultText, `The person ${form.name.value} does not exist. Please add the person with the Add a Person tool.`)
    } else {
        const companyStartYear = getCompanyStartYearFromPersonName(form.name.value)
        showCompletionText(resultText, `${form.name.value} works at a company that started out in ${companyStartYear}.`)
        form.reset();
        form.name.focus();
    }
}

function getCompanyStartYearFromCompanyNameFormSubmit(e) {
    e.preventDefault();

    const form = document.getElementById('getCompanyStartYearFromCompanyNameForm');
    const resultText = document.getElementById('getCompanyStartYearFromCompanyNameResultText');

    if (companies.findIndex(company => company.name === form.name.value) === -1) {
        // Warn the user that the company they are trying to find does not exist.
        showErrorText(resultText, `The company ${form.name.value} does not exist. Please add the company with the Add a Company tool.`)
    } else {
        const companyStartYear = getCompanyStartYearName(form.name.value)
        showCompletionText(resultText, `${form.name.value} started out in ${companyStartYear}.`)
        form.reset();
        form.name.focus();
    }
}

document.getElementById('addPersonForm').addEventListener('submit', addPersonFormSubmit)
document.getElementById('addCompanyForm').addEventListener('submit', addCompanyFormSubmit)
document.getElementById('changeCompanyForm').addEventListener('submit', changeCompanyFormSubmit)
document.getElementById('changeAddressForm').addEventListener('submit', changeAddressFormSubmit)
document.getElementById('getCompanyCategoryForm').addEventListener('submit', getCompanyCategoryFormSubmit)
document.getElementById('getCompanyForm').addEventListener('submit', getCompanyFormSubmit)
document.getElementById('getCompanyStartYearForm').addEventListener('submit', getCompanyStartYearFormSubmit)
document.getElementById('getCompanyStartYearFromCompanyNameForm').addEventListener('submit', getCompanyStartYearFromCompanyNameFormSubmit)

//TODO: Build HTML with forms and buttons to use the above functions (similar to calculator example) and display results

/*addPerson('Jo', '44 Forty St', 'Darwin', 'Company Nine');
countPeople();
changeCompany('Jill', 'Company Five');
getCompanyCategory('John');
console.log(getCompanyStartYear('John'))
console.log(countCompanies())*/