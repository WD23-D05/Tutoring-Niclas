// Class for Book Management:
// Create a Book class with properties such as title, author, and ISBN. Create a myBookManager to add a book, remove a book, and display all the books in the library.

// Your code Here :

// #########################################################
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
