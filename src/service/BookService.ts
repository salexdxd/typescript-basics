import { v4 as uuidv4 } from "uuid";
import { Book } from "../model/Book";

var myBooks: Book[] = [];

function createBook(
  name: string,
  price: number,
  title: string,
  isAudio?: boolean
): void {
  let myuuid: string = uuidv4();
  let newBook: Book = new Book(name, price, title);
  newBook.id = myuuid;
  newBook.isAudio = false;
  myBooks.push(newBook);
}

function deleteBookById(id: string) {
  myBooks.forEach((item, index) => {
    if (item.id === id) {
      myBooks.splice(index, 1);
    }
  });
}

export { createBook, myBooks };
console.log("im from bookservice");
