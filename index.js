import express from "express";
import nunjucks from "nunjucks";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

nunjucks.configure(resolve(__dirname, "templates"), {
  express: app,
  autoscape: true,
  noCache: false,
  watch: true,
});

const app = express();
app.get("/", function (req, res) {
  res.render("./pages/home.html");
});

app.use(express.static("public"));

app.listen(process.env.PORT || 3000);
