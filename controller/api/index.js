const router = require("express").Router();
const user_routes = require("./user-routes");
const blog_routes = require("./blog-routes");

router.use("/users", user_routes);
router.use("/blogs", blog_routes);

module.exports = router;
