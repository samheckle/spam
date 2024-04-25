import express from "express";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/static", express.static(join(__dirname, "public")));
// app.use('/static', express.static(join(__dirname, 'public')));

app.get("/spam", (req, res) => {
  res.render("home", { layout: false });
});

app.get("/spam/very-real-people", (req, res) => {
  res.render("testimonials", { layout: false });
});

app.listen(5555, "0.0.0.0");
