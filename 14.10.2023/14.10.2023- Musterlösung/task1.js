// Class for Book Management:
// Create a Book class with properties such as title, author, and ISBN. Implement methods to add a book, remove a book, and display all the books in the library.

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class BookManager {
    constructor() {
        this.books = [];
    }

    // Method to add a book to the library
    addBook(title, author, isbn) {
        const newBook = new Book(title, author, isbn);
        this.books.push(newBook);
    }

    // Method to remove a book from the library
    removeBook(isbn) {
        this.books = this.books.filter((book) => book.isbn !== isbn);
    }

    // Method to display all the books in the library
    displayBooks() {
        this.books.forEach((book) => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
        });
    }
}

// Example usage:
const myBookManager = new BookManager();

// Adding books
myBookManager.addBook("The Great Gatsby", "F. Scott Fitzgerald", "978-3-16-148410-0");
myBookManager.addBook("To Kill a Mockingbird", "Harper Lee", "978-3-16-148410-1");
myBookManager.addBook("1984", "George Orwell", "978-3-16-148410-2");

// Displaying all books
console.log("All Books:");
myBookManager.displayBooks();

// Removing a book
myBookManager.removeBook("978-3-16-148410-1");

// Displaying all books after removal
console.log("All Books after removal:");
myBookManager.displayBooks();
