import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Welcome To CWSK</h1>");
});
app.listen(process.env.PORT || 3000);
