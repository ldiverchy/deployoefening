import routes from "./routes";
import express, { Application, Request, Response } from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";


const app: Application = express();
const PORT: number = 3000;

// EJS als template-engine instellen
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware voor layouts
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware om formulierdata te verwerken
app.use(express.urlencoded({ extended: true }));

// Route om een HTML-pagina te tonen
app.use("/", routes)

// Middleware om statische bestanden te serveren
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});