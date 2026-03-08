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

router.get("/:slug", (req, res) => {
  const article = getNewsBySlug(req.params.slug);

  if (!article) {
    return res.status(404).send("Article not found");
  }

  res.render("article", {
    title: article.title,
    article
  });
});

export default router;