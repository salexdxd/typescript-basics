"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myBooks = exports.createBook = void 0;
const uuid_1 = require("uuid");
const Book_1 = require("../model/Book");
var myBooks = [];
exports.myBooks = myBooks;
function createBook(name, price, title, isAudio) {
    let myuuid = (0, uuid_1.v4)();
    let newBook = new Book_1.Book(name, price, title);
    newBook.id = myuuid;
    newBook.isAudio = false;
    myBooks.push(newBook);
}
exports.createBook = createBook;
function deleteBookById(id) {
    myBooks.forEach((item, index) => {
        if (item.id === id) {
            myBooks.splice(index, 1);
        }
    });
}
console.log("im from bookservice");
