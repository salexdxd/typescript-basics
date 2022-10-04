type idType = string | undefined;

interface ImplItem {
  id: idType;
  name: string;
  price: number;
}

type isAudioType = boolean;

interface ImplBook {
  genre: string;
  title: string;
  isAudio?: isAudioType;
  isAudioTrue(): void;
}

class Item implements ImplItem {
  id: idType;
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Book extends Item implements ImplBook {
  genre: string;
  title: string;
  isAudio: isAudioType = false;

  isAudioTrue(): void {
    this.isAudio = true;
  }

  constructor(genre: string, name: string, price: number, title: string) {
    super(name, price);
    this.genre = genre;
    this.title = title;
  }
}

const getNameInput = document.getElementById("input-name") as HTMLInputElement;
const getPriceInput = document.getElementById(
  "input-price"
) as HTMLInputElement;

let priceNum: number = +getPriceInput.value;
const getTitleInput = document.getElementById(
  "input-title"
) as HTMLInputElement;

const getIsAudioInput = document.getElementById(
  "input-audio"
) as HTMLInputElement;

const getGenreInput = document.getElementById("genre-id") as HTMLInputElement;
const getAudioInput = document.getElementById("audio-id") as HTMLInputElement;
const getSubmitBtn = document.getElementById("submit-btn") as HTMLInputElement;
const getDeleteBtn = document.getElementById("delete-btn") as HTMLInputElement;
const getIdToDelete = document.getElementById("delete-id") as HTMLInputElement;
const getTBody = document.getElementById("tbody") as HTMLTableElement;

var myBooks: Book[] = [];

let randId = function genUniqueId(): string {
  const randomStr = Math.random().toString(36).substring(2, 8);
  const randomStr2 = Math.random().toString(36).substring(2, 8);
  return `${randomStr}${randomStr2}`;
};
console.log(randId());
function createBook(
  name: string,
  genre: string,
  price: number,
  title: string,
  isAudio?: boolean
): void {
  let myBookId: string = randId();
  let newBook: Book = new Book(name, genre, price, title);
  newBook.id = myBookId;
  if (getAudioInput.value === "true") {
    newBook.isAudioTrue();
  }
  myBooks.push(newBook);
  // console.log(newBook + "asd");
}

function deleteBookById(id: string) {
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
getSubmitBtn?.addEventListener("click", function handleClick() {
  createBook(
    getGenreInput.value,
    getNameInput.value,
    priceNum,
    getTitleInput.value
  );
  createTable();
  console.log(myBooks);
});

getDeleteBtn?.addEventListener("click", function myClick() {
  deleteBookById(getIdToDelete.value);
  createTable();
  console.log(myBooks);
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
