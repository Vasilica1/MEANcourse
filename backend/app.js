const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
})

app.post("/api/posts", (req, res, next) => {
  const posts = req.body;
  console.log(posts);
  res.status(201).json({
    message: 'Post added succesfully'
  });
})

app.get('/api/posts' ,(req, res, next) => {
  const posts = [
    {
      id: "12dd32",
      title: "First server-side post",
      content: "This is coming from the server"
    },
    {
      id: "13dd32",
      title: "Second server-side post",
      content: "This is coming from the server2"
    },
    {
      id: "14dd32",
      title: "Third server-side post",
      content: "This is coming from the server3"
    }
  ]
  res.status(200).json({
    message: "Posts fetch succesfully",
    posts: posts
  });
})

module.exports = app;