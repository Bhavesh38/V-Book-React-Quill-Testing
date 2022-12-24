const Router=require('express').Router()
const writeBook=require('../repository/book/writebook.repository')
const router = require('./book.route')
const doesBookExist = require("../middleware/doesBookExist.js")

Router.post('/', doesBookExist , async (req , res)=>{
    const response =  await writeBook(req.body)
    res.status(200).json(response)
})
module.exports=Router