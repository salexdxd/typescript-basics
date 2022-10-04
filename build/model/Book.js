"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Item_1 = require("../model/Item");
class Book extends Item_1.Item {
    constructor(name, price, title) {
        super(name, price);
        this.isAudio = false;
        this.title = title;
    }
}
exports.Book = Book;
// const myBook: Book = new Book(1, "2", 3, "4");
//# sourceMappingURL=Book.js.map