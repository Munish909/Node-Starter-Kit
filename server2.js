const express = require("express");
const app = express();
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

app.use(express.json());

app.listen(8000, () => console.log("hello i am listening"));

app.get("/",(req, res) => {
    console.log("hello i am your server");
    res.send("success");
});

app.get("/books", (req, res)=> { // READ -> returns list of all books
    res.send(bookshopData);
})

app.post("/books", (req, res)=> { // CREATE -> add a new book
    const body = req.body;
    console.log(body);
    bookshopData.push(body);
    res.send("success");
});

app.delete("/books/:bookId", (req,res)=>{ //DELETE -> deletes book with id specified in :bookId
    const bookId = req.params.bookId;
    console.log(bookId);
    const bookToDelete = bookshopData.find((book)=> book.bookId=== bookId);
    const bookTodeleteIndex = bookshopData.indexOf(bookToDelete);
    console.log("bookTodelete "+ bookToDelete);
    console.log("bookTodeleteIndex "+bookTodeleteIndex);
    bookshopData.splice(bookTodeleteIndex, 1);
    res.send(bookToDelete.bookId); 
});

app.get("/books/:bookId", (req, res) => { // READ => find specific book by id 
    const bookId = req.params.bookId;
    console.log(bookId);
    const book = bookshopData.find((book) => book.bookId === bookId);
    res.send(book);
})

const bookshopData = [
    {
      bookId: "10",
      author: "Aminatta Forna",
      title: "The Memory of Love",
      bookUrl:"https://www.waterstones.com/book/the-memory-of-love/aminatta-forna/9780802145680",
      genre: "Fiction",
      publisher: "Bloomsbury Publishing PLC",
      publication_date: "2010",
    },
    {
      bookId: "11",
      author: "Chimamanda Ngozi Adi",
      title: "Americanah",
      bookUrl:
        "https://www.waterstones.com/book/americanah/chimamanda-ngozi-adichie/9780007356348",
      genre: "Fiction",
      publisher: "Harpercollins",
      publication_date: "2010",
    }
    ,
    {
      bookId: "12",
      author: "Khaled huseini",
      title: "And the mountain echoed",
      bookUrl:
        "https://www.waterstones.com/book/americanah/chimamanda-ngozi-adichie/9780007356348",
      genre: "Fiction",
      publisher: "Harpercollins",
      publication_date: "2010",
    }
  ];