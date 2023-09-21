const router = require("express").Router();
router.get("/", async (req, res) => {
  const data = [
    {
      user: "dwadwawad",
      title: "dwadadwdawdawd",
      paragraph:
        "dwadwadwadawdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      date: "dawdwadaw",
    },
    {
      user: "1dwadwawad",
      title: "1dwadadwdawdawd",
      paragraph: "1dwadwadwadawd",
      date: "1dawdwadaw",
    },
  ];

  res.render("home", { data });
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

module.exports = router;
