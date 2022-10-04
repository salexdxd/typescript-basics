"use strict";
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Book extends Item {
    constructor(genre, name, price, title) {
        super(name, price);
        this.isAudio = false;
        this.genre = genre;
        this.title = title;
    }
    isAudioTrue() {
        this.isAudio = true;
    }
}
const getNameInput = document.getElementById("input-name");
const getPriceInput = document.getElementById("input-price");
let priceNum = +getPriceInput.value;
const getTitleInput = document.getElementById("input-title");
const getIsAudioInput = document.getElementById("input-audio");
const getGenreInput = document.getElementById("genre-id");
const getAudioInput = document.getElementById("audio-id");
const getSubmitBtn = document.getElementById("submit-btn");
const getDeleteBtn = document.getElementById("delete-btn");
const getIdToDelete = document.getElementById("delete-id");
const getTBody = document.getElementById("tbody");
var myBooks = [];
let randId = function genUniqueId() {
    const randomStr = Math.random().toString(36).substring(2, 8);
    const randomStr2 = Math.random().toString(36).substring(2, 8);
    return `${randomStr}${randomStr2}`;
};
console.log(randId());
function createBook(name, genre, price, title, isAudio) {
    let myBookId = randId();
    let newBook = new Book(name, genre, price, title);
    newBook.id = myBookId;
    if (getAudioInput.value === "true") {
        newBook.isAudioTrue();
    }
    myBooks.push(newBook);
    // console.log(newBook + "asd");
}
function deleteBookById(id) {
    myBooks.forEach((element, index) => {
        if (element.id === id) {
            myBooks.splice(index, 1);
            console.log(myBooks);
        }
    });
}
// createBook("str", 23, "str");
// console.log(myBooks);
console.log(getIdToDelete.value);
getSubmitBtn === null || getSubmitBtn === void 0 ? void 0 : getSubmitBtn.addEventListener("click", function handleClick() {
    createBook(getGenreInput.value, getNameInput.value, priceNum, getTitleInput.value);
    createTable();
    console.log(myBooks);
});
getDeleteBtn === null || getDeleteBtn === void 0 ? void 0 : getDeleteBtn.addEventListener("click", function myClick() {
    deleteBookById(getIdToDelete.value);
});
// function createTable(myNewArray: Book[]) {
//   let htmlItems = "";
//   myNewArray.forEach((element) => {
//     htmlItems += `
//             <tr>
//                 <td>${element.id}</td>
//                 <td>${element.name}</td>
//                 <td>${element.genre}</td>
//                 <td>${element.price} cm</td>
//                 <td>${element.title} $ </td>
//                 <td>${element.isAudio} $ </td>
//             </tr>
//         `;
//   });
// }
function createTable() {
    let htmlItems = "";
    for (let i = 0; i < myBooks.length; i++) {
        let item = myBooks[i];
        htmlItems += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.genre}</td>
                <td>${item.price} cm</td>
                <td>${item.title} $ </td>
                <td>${item.isAudio} $ </td>
            </tr>
        `;
    }
    getTBody.innerHTML = htmlItems;
}
// let myNewTable = createTable(myBooks);
