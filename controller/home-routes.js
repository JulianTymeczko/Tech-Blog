const router = require("express").Router();
router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

router.get("/login", async (req, res) => {
  res.render("Login");
});

router.get("/Log-Out", async (req, res) => {
  res.render("Log-Out");
});
router.get("/Sign-Up", async (req, res) => {
  res.render("SignUp");
});

router.get("/", async (req, res) => {
  const Data = [
    {
      Title: "adwjunadwn",
      Date: "dwadaw",
      Paragraph: "dawdwad",
      User: "dwadwawad",
    },
  ];
  res.render("index", { Data });
});

// router.get("/movies", async (req, res) => {
//   const result = await Movie.findAll();
//   const movies = result.map((x) => x.get({ plain: true }));
//   res.render("movies", { movies });
// });

module.exports = router;
