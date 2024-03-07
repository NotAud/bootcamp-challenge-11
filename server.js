const express = require("express");
const viewRouter = require("./router/router.js");
const apiRouter = require("./api/router.api");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRouter);
app.use("/", viewRouter);

app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});
