import express from "express";

const app = express();

const APP_ID = process.env.APP_ID || "000";

app.get("/", (req, res) => {
  res.send(`App ID: ${APP_ID}`);
});

app.get("/app1", (req, res) => {
  res.send(`App ID: ${APP_ID}. <b>App 1</b>`);
});

app.get("/app2", (req, res) => {
  res.send(`App ID: ${APP_ID}. <b>App 2</b>`);
});

app.use("*", (req, res) => {
  res.status(404).send("<b>404! Not Found!</b>");
});

app.listen(80, () => {
  console.log("App listening on port 80!");
});
