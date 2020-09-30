const express = require("express");
const app = express();

// const bodyParser = require("body-parser");/* after npm install body-parser, body-parser gets installed in express and thereafter we don't need body-parser and work with express instead */
// app.use(bodyParser.json()); /* before our routes definition */
app.use(express.json()); /* Will inform our app to understand and deal with the json file  coming towards it*/

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
});

app.get("/", (req, res) => {
    // console.log("I am on");
    res.send("Welcome to Code your future");
})


  app.get("/books",(req, res) => {
   
      res.send(bookshopData);
  })

  app.get("/books/:bookId", (req, res) => {
      const reqBook = req.params.bookId;
    //   console.log(reqBook);
      const book = bookshopData.find((book) => book.bookId === reqBook);
      res.send(book);
    });

app.post("/books", (req, res) => {
    const newBook = req.body;
    // console.log (newBook);
    bookshopData.push(newBook);
    res.send("sucess");
})

app.delete("/books/:bookId", (req, res) => {
    const  reqBook = req.params.bookId;
    const bookToDelete = bookshopData.find((book) => book.bookId === reqBook);
    const bookToDeleteIndex = bookshopData.indexOf(bookToDelete);
    bookshopData.splice(bookToDeleteIndex, 1);
    res.send(bookToDelete.bookId);
})

app.get("/albums", (req, res) => {
    res.send(albumsData);
});


    app.get("/albums/:albumId", (req, res) => {
        const reqAlbum = req.params.albumId;
        // console.log(reqAlbum);
        const album = albumsData.find((album) => album.albumId === reqAlbum);
        res.send(album);
    });

    app.post("/albums", (req, res) => {
        const newAlbum = req.body;
        // console.log("sucess");
        albumsData.push(newAlbum);
        res.send("sucess");

    });

    app.delete("/albums/:albumId", (req, res) => {
        const reqAlbum = req.params.albumId;
        const albumToDelete = albumsData.find((album) => album.albumId === reqAlbum);
        const albumToDeleteIndex = albumsData.indexOf(albumToDelete);
        albumsData.splice(albumToDeleteIndex, 1);
        res.send(albumToDelete.albumId);
    })
    
    app.put("/albums/:albumId", (req, res) => {
        const result = req.body;
        // console.log(result);
        const reqAlbumId = req.params.albumId;
        // console.log("Require AlbumID", reqAlbumId);
        const albumToUpdate = albumsData.findIndex(album => album.albumId === reqAlbumId);
        albumsData[albumToUpdate] = result;
        res.send(result);
    });

        
    // albumToUpdate.artistName === reqUpdate.artistName;
        // console.log("albumToUpdate", albumToUpdate)
        // const reqUpdate = req.body;
        // console.log("Require Update", reqUpdate);
       
    //     const albumToUpdateIndex = albumsData.indexOf(albumToUpdate);
    //     albumsData[albumToUpdateIndex] = albumSelect;
    //     res.send(albumToUpdate);
    // });

    // const found = albumsData.some(album => album.albumId === req.params.albumsId)
    // if (found) {
    //     const updateAlbum = req.body;
    //     albumsData.forEach(album => {
    //         if (album.albumId === req.params.albumsId) {
    //             album.artistName = updateAlbum.artistName ? updateAlbum.artistName : album.artistName;
    //         }
    //         res.send({ msg: 'Album updated', album })

    // if(albumToUpdate){
    //             const albumSelect = req.body;
    //             albumsData.forEach((album) => {
    //             if (album.albumId === req.params.albumId){
    //                 album.artistName === albumSelect.artistName
    //             }
    //             })
    //             }
                
    //             res.send(albumToUpdate);
               
    //     })
        
  const albumsData = [
    {
      albumId: "10",
      artistName: "beyoncé",
      collectionName: "lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
      albumId: "11",
      artistName: "beyoncé",
      collectionName: "dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    },

    {
        albumId: "12",
        artistName: "michael",
        collectionName: "informer",
        artworkUrl100:
          "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "Pop",
        url:
          "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
      },

      {
        albumId: "13",
        artistName: "jLO",
        collectionName: "brazil",
        artworkUrl100:
          "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "Pop",
        url:
          "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
      },

      {
        albumId: "14",
        artistName: "gerorge M",
        collectionName: "sweet Love",
        artworkUrl100:
          "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
        releaseDate: "2003-06-24T07:00:00Z",
        primaryGenreName: "Pop",
        url:
          "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
      }
  ];
  
//   app.get("/albums", function (req, res) {
//     res.send(albumsData);
//   });



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
    },

    {
        bookId: "13",
        author: "Shakesphere",
        title: "Romeo & Juliet",
        bookUrl:
          "https://www.waterstones.com/book/americanah/chimamanda-ngozi-adichie/9780007356348",
        genre: "Fiction",
        publisher: "Harpercollins",
        publication_date: "2010",
      },

      {
        bookId: "14",
        author: "Albert",
        title: "Speed of Light",
        bookUrl:
          "https://www.waterstones.com/book/americanah/chimamanda-ngozi-adichie/9780007356348",
        genre: "Fiction",
        publisher: "Harpercollins",
        publication_date: "2010",
      }
  ];
