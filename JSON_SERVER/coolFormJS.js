const postBookForm = document.getElementById('postBookForm');
const postBookResponse = document.getElementById('postBookResponse');
const getBookForm = document.getElementById('getBookForm');
const getBookResponse = document.getElementById('getBookResponse');
const getAllBooksForm = document.getElementById('getAllBooksForm');
const getAllBooksResponse = document.getElementById('getAllBooksResponse');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const handlePostBookFormSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: postBookForm.title.value,
            authorId: postBookForm.authorId.value,
        })
    }).then(async res => {
        let resJSON = await res.json();
        console.debug(resJSON)
        postBookResponse.style.color = 'green';
        postBookResponse.style.fontWeight = 'normal';
        postBookResponse.innerHTML = `${resJSON.title} by author with ID ${resJSON.authorId} was successfully added to the database. The ID of this new book is ${resJSON.id}.`;
        postBookForm.reset();
        postBookForm.title.focus();
    }).catch(error => {
        postBookResponse.style.color = 'red';
        postBookResponse.style.fontWeight = 'bold';
        postBookResponse.innerHTML = `An error occured, please try again. This is the error: ${error}`;
    })

}

const handleGetBookFormSubmit = async (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/books/?&id=${getBookForm.id.value}`).then(async res => {
        let resJSON = await res.json();
        console.debug(resJSON)
        resJSON = resJSON[0];

        var authorName = '';

        try {
            const authorResponse = await fetch(`http://localhost:3000/authors/?&id=${resJSON.authorId}`);
            let authorJSON = await authorResponse.json();
            console.debug(authorJSON)
            authorJSON = authorJSON[0];

            authorName = authorJSON.name
        } catch (error) {
            console.error('An error occured while fetching the author. Error down below.')
            console.error(error);
            authorName = 'An error occured while getting author name.'
        }

        getBookResponse.style.color = 'green';
        getBookResponse.style.fontWeight = 'normal';
        getBookResponse.innerHTML = `The book with ID ${resJSON.id} is called "${resJSON.title}" by author named ${authorName} with ID ${resJSON.authorId}.`;
        getBookForm.reset();
    }).catch(error => {
        getBookResponse.style.color = 'red';
        getBookResponse.style.fontWeight = 'bold';
        getBookResponse.innerHTML = `An error occured while getting book data, please try again. This is the error: ${error}`;
    })
}

const handleGetAllBooksFormSubmit = async (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/books').then(async res => {
        let resJSON = await res.json();
        console.debug(resJSON)

        const getAllBooksDiv = document.getElementById('getAllBooksDiv');

        const container = document.querySelector('#getAllBooksDiv')
        removeAllChildNodes(container)

        var table = document.createElement('table');
        table.style.border = '1px solid black';
        table.cellSpacing = 0;

        var tableHead = document.createElement('thead');
        var tableHeadRow = document.createElement('tr');
        tableHeadRow.appendChild(document.createElement('th')).innerHTML = 'ID';
        tableHeadRow.appendChild(document.createElement('th')).innerHTML = 'Title';
        tableHeadRow.appendChild(document.createElement('th')).innerHTML = 'Author ID';

        tableHead.appendChild(tableHeadRow)
        table.appendChild(tableHead);

        var tableBody = document.createElement('tbody');


        resJSON.map(book => {
            var tableRow = document.createElement('tr');
            tableRow.appendChild(document.createElement('td')).innerHTML = book.id;
            tableRow.appendChild(document.createElement('td')).innerHTML = book.title;
            tableRow.appendChild(document.createElement('td')).innerHTML = book.authorId;
            tableBody.appendChild(tableRow);
        })

        table.appendChild(tableBody);

        getAllBooksDiv.appendChild(table);
        getAllBooksResponse.style.color = 'green';
        getAllBooksResponse.style.fontWeight = 'normal';
        getAllBooksResponse.innerHTML = "Successfully fetched all books.";
    }).catch(error => {
        getAllBooksResponse.style.color = 'red';
        getAllBooksResponse.style.fontWeight = 'bold';
        getAllBooksResponse.innerHTML = `An error occured while getting book data, please try again. This is the error: ${error}`;
    })
}

postBookForm.addEventListener('submit', handlePostBookFormSubmit);
getBookForm.addEventListener('submit', handleGetBookFormSubmit);
getAllBooksForm.addEventListener('submit', handleGetAllBooksFormSubmit);
