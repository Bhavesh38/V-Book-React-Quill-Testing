const books = require("../../models/Book.model")
const writeBook = async (book)=>{
    await books.findByIdAndUpdate(
        {title:book.title},
        {$push:{pages: book.page}}
    )
    newbook = await books.findOne({title:book.title})
    return newbook
}
module.exports = writeBook
