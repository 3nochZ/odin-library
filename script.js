const myLibrary = [];

function Book(id, title) {
  this.id = id;
  this.title = title;
}

function addBook(title) {
  // take params, create a book then store it in the array
  const id = crypto.randomUUID();
  
  const book = new Book(id, title);
  myLibrary.push(book);
}

const tableContainer = document.querySelector('#table-container');
const dialog = document.querySelector('#new-book-dialog');

function displayBooks(){
  tableContainer.textContent="";	

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  
  const header = document.createElement('tr');
  
  const thead1 = document.createElement('th');
  const thead2 = document.createElement('th');
  thead1.textContent = "title";
  thead2.textContent = "id";
  
  header.append(thead1, thead2);
  thead.append(header);
  
  table.append(thead, tbody);  
  
  for (const book of myLibrary) {
    // console.log(book.title);
    
    const row = document.createElement('tr');
    
    const id = document.createElement('td');
    const title = document.createElement('td');
    title.textContent = book.title;
    id.textContent = book.id;
    
    row.append(title, id);
    tbody.append(row);
  }
   tableContainer.append(table);
}

function resetDisplay(){
	tableContainer.textContent = "";
}

const newBtn = document.querySelector('button');
// newBtn.addEventListener('click', () => newBook('a'));

const addBtn = document.querySelector('#submit-btn');
const title = document.querySelector('#title-input');
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (!title.value.trim()) return;
  addBook(title.value);
  resetDisplay();
  displayBooks();
  dialog.close();
})

addBook("odd");
displayBooks();

