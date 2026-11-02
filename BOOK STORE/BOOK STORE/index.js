const express = require ("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/BookStore")
    .then(()=> console.log("Database Connected Successfully"))
    .catch((err)=> console.log(err));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    category: String,
    stock: Number, 
    published: Boolean,
    rating: Number,
});

const Book = mongoose.model("Book", bookSchema);

app.post("/books", async(req, res)=>{
    const book = await Book.create(req.body);
    res.json(book);
});

app.get("/books",async (req, res)=>{
    const books = await Book.find();
    res.json(books);
});

app.put("/books/:id", async(req, res)=>{
    const book = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.json(book);
});

app.delete("/books/:id",async(req, res)=>{
    await Book.findByIdAndDelete(req.params.id);

    res.json({
        message: "Book Deleted Successfully",
    });
});

app.listen(1000,()=>{
    console.log("Server Running on Port 1000");
});



// {
//   "title": "Rich Dad Poor Dad",
//   "author": "Robert Kiyosaki",
//   "price": 250,
//   "category": "Finance",
//   "stock": 15,
//   "published": true,
//   "rating": 4.5
// }