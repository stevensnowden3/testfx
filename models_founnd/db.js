const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/material', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

const Blog = require('./models/blog');

// Create a new blog document
const blog = new Blog({
  title: 'My first blog post',
  content: 'This is the content of my first blog post'
});

blog.save(error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Blog saved to the database');
  }
});

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blog', blogSchema);

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Blog', blogSchema);

const mongoose = require('mongoose');
const { default: next } = require('next');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/blogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

// Define a model for the blogs collection
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const Blog = mongoose.model('Blog', blogSchema);

// Create a new blog document
const blog = new Blog({
  title: 'My first blog post',
  content: 'This is the content of my first blog post'
});

blog.save(error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Blog saved to the database');
  }
});
