// JSON
let myLibrary = [
  {
    id: "1694667710725",
    title: "The Scourge of Will",
  },
  {
    id: "1694666610726",
    title: "The tale of ice and fire",
  },
  {
    id: "1694337710725",
    title: "Wings of fire",
  },
];

// for (let i = 0; i < myLibrary.length; i++) {
//   let book = myLibrary[i];
//   console.log(book);
// }

// for (const book of myLibrary) {
//   console.log(book);
// }

// 1694667710725 - remove
function removeBookAndReturnNewLibrary(bookId) {
  let newLibrary = [];
  for (const book of myLibrary) {
    if (book["id"] != bookId) {
      newLibrary.push(book);
    }
  }
  return newLibrary;
}

// myLibrary = removeBookAndReturnNewLibrary("1694667710725");
// myLibrary = myLibrary.filter(function (book) {
//   let dontRemove = false;
//   if (book.id != "1694667710725") {
//     dontRemove = true;
//   }
//   return dontRemove;
// });

// myLibrary = myLibrary.filter(function (book) {
//   let dontRemove = book.id != "1694667710725";
//   console.log(book, dontRemove);
//   return dontRemove;
// });

// myLibrary = myLibrary.filter(function (book) {
//   return book.id != "1694667710725";
// });

// myLibrary = myLibrary.filter((book) => {
//   return book.id != "1694667710725";
// });

// myLibrary = myLibrary.filter((book) => book.id != "1694667710725");

// let newLibrary = myLibrary.map(function (book) {
//   let newBook = { ...book };
//   newBook["isFiction"] = true;
//   return newBook;
// });

// let indexToDelete = myLibrary.findIndex((book) => {
//   return book.id == "haha";
// });

// console.log(myLibrary);

// console.log("Here");
// myLibrary.forEach((book) => {
//   console.log(book);
// });
// console.log("there");

// setTimeout(function () {
//   console.log("2 second");
// }, 2 * 1000);

// setTimeout(function () {
//   console.log("3 second");
// }, 3 * 1000);

// setTimeout(function () {
//   console.log("1 second");
// }, 1 * 1000);

// callback hell
setTimeout(function () {
  console.log("2 second");
  setTimeout(function () {
    console.log("3 second");
    setTimeout(function () {
      console.log("1 second");
    }, 1 * 1000);
  }, 3 * 1000);
}, 2 * 1000);
