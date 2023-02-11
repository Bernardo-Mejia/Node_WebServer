const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// ? Helpers and Partials

// ! Middleware
// ? Servir contenido estático
app.use(express.static("public"));

// * Partial HBS
hbs.registerPartials(__dirname + "/views/shared");

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

// app.get("/hola-mundo", (req, res) => {
//   res.send("Hola mundo");
// });

app.set("view engine", "hbs");

const conf = {
  nombre: "Bernardo",
  titulo: "Curso",
};

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/public/index.html")
  // ? con hbs
  res.render("home", conf);
});

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });
app.get("/generic", (req, res) => {
  res.render("generic", conf);
});

// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });
app.get("/elements", (req, res) => {
  res.render("elements", conf);
});

app.get("*", (req, res) => {
  //   res.send("404 | Page not found");
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
