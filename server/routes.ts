import express, { Request, Response } from "express";
import path from "path";
import { getNews, getNewsBySlug, addNews } from "./data/newsService";

const router = express.Router();

/**
 * GET / - Laadt de homepagina
 */

router.get("/", (req, res) => {
  const news = getNews();
  res.render("index", {
  title: "News",
  news
});
});

router.get("/details", (req: Request, res: Response): void => {
  res.render("details", { title: "Details" });
});

export default router;