const express = require("express");
const app = express();
const port = 5200;

app.use(checkPermission);

// path books
app.get("/books", function (req, res) {
  return res.send({ route: "/books" });
});


// Libraries permission: true
app.get("/libraries" , function (req, res) {
  return  res.send({ route: " /libraries", permission: true, libraries : req. librarian});
});

// route = autohor && permission = true
app.get("/authors",  function (req, res) {
  return res.send({ route: "/authors", permission: true,  author : req. author });
});

//checkPermission function
function checkPermission(req, res, next) {
  if (req.path === "libraries") {
    console.log(req.path);
     req. author = "libraries"
  }
  else if (req.path === "authors") {
    console.log(req.path);
     req. author  = "authors";
  }else{
    console.log(req.path);
     req. author  = "Someone";
  }

  next();
}

// app listen
app.listen(port,()=>{
    console.log(`it's running on port ${port}`)
});