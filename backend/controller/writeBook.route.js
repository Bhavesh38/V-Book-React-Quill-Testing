const Router=require('express').Router()
const writeBook=require('../repository/writebook.repository')
const router = require('./book.route')
const doesBookExist = require("../middleware/doesBookExist.js")

Router.post('/', doesBookExist , (req , res)=>{
    writeBook(req.body.bookpage)
})
module.exports=Router