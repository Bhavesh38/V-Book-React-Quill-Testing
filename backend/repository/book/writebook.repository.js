const books = require("../../models/Book.model")
const writeBook = async (book)=>{
    console.log("adding page")
    const response = await books.updateOne(
        {book_title:book.title},
        {$push:{pages: book.bookpage}}
    )
    return await books.findOne({book_title:book.title})
}
module.exports = writeBook
