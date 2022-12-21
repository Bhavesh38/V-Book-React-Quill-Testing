const mongoose = require("mongoose");
const bodySchema = mongoose.Schema({
  diagram: {
    type: String,
  },
  formulae: {
    type: String,
  },
  table_img: {
    type: String,
  },
  description: {
    type: String,
  },
  imp_note: {
    type: String,
  },
  points: {
    type: String,
  },
  point_style: {
    type: String,
    default: "unordered",
  },
});
const headingSchema = mongoose.Schema({
  topic_title: {
    type: String,
    required: true,
  },
  body: [bodySchema],
});
const pageSchema = mongoose.Schema({
  page_number: {
    type: Number,
    required: true,
  },
  lecture_hrs: {
    type: Number,
  },
  next_page:{
    type: Boolean,
    required: true
  },
  headings: [headingSchema],
});
const bookSchema = mongoose.Schema(
  {
    tags: [],
    author: {
      type: String,
      required: true,
    },
    book_title: {
      type: String,
      required: true,
    },
    cover_page: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price:{
      type : Number,
      required: true,
    },
    pages: [pageSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
