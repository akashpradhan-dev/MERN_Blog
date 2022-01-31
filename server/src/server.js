const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const fetchModel = require("./models/blogModel");
const port = process.env.port || 3030;
const articlesRouter = require("./routes/articles");
var cors = require("cors");
require("dotenv").config();
app.use(cors());

require("./db/conn");
//Static filr serve
app.use("/static", express.static(path.join(__dirname, "public")));
//View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const fetchBlog = await fetchModel.find().sort({ date: "desc" });
  res.status("201").json({ article: fetchBlog });
  // res.render("home", { article: fetchBlog });
});

app.use("/article", articlesRouter);

app.listen(port, () => {
  console.log(`App is runing on http://localhost:${port}`);
});
