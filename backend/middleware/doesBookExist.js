const books = require("../models/Book.model")

const doesBookExist = async (req , res , next) => {
    findbooks = await books.find({title : req.body.title})
    if(!findbooks){
        res.status(404).json({message: "book does not exist"})
    }
    else{
        next()
    }
}
module.exports = doesBookExist
