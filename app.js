const express = require("express");
const app = express();
const port = 6200;

//Middlewares call
app.use(logger);

// path books
app.get("/books", function (req, res) {
  return res.send({ route: "/books" });
});

// Libraries permission: true
app.get("/libraries" , function (req, res) {
  return  res.send({ route: "/libraries", permission: true});
});

// route = autohor && permission = true
app.get("/authors",  function (req, res) {
  return res.send({ route: "/authors", permission: true });
});

// logger function
function logger(req, res, next) {
  console.log(req.path);
  next();
}

// app listen
app.listen(port,()=>{
  console.log(`it's running on port ${port}`)
})