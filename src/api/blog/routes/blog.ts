import { sitemaps } from "../controllers/sitemap";

const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
};
function createRoute(method, path, handler) {
  return {
    method,
    path: path,
    handler,
    config: {
      policies: [],
      middlewares: [],
    },
  };
}

export default {
  routes: [
    createRoute(METHOD.GET, "/blog/search", "blog.searchPosts"),
    createRoute(METHOD.GET, "/blog/posts", "blog.getPosts"),
    createRoute(METHOD.GET, "/blog/post/:slug", "blog.getPost"),
    createRoute(METHOD.GET, "/blog/categories", "blog.getCategories"),
    createRoute(METHOD.GET, "/blog/category/:slug", "blog.getCategory"),
    createRoute(METHOD.GET, "/blog/tags", "blog.getTags"),
    createRoute(METHOD.GET, "/blog/tag/:slug", "blog.getTag"),
    createRoute(METHOD.GET, "/blog/heading-tag", "blog.getHeadingTag"),
    createRoute(METHOD.GET, `/blog/${sitemaps[0]}`, "sitemap.generateSiteMap"),
    createRoute(
      METHOD.GET,
      `/blog/${sitemaps[1]}`,
      "sitemap.generateSiteMapCategory"
    ),
    createRoute(
      METHOD.GET,
      `/blog/${sitemaps[2]}`,
      "sitemap.generateSiteMapTag"
    ),
    createRoute(
      METHOD.GET,
      `/blog/${sitemaps[3]}`,
      "sitemap.generateSiteMapPost"
    ),
  ],
};
