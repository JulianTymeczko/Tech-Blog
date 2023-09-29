const routes = require("express").Router();
const { User, Blog } = require("../../models");

routes.post("/create", async (req, res) => {
  const user = await User.findOne({
    where: {
      username: req.session.user,
    },
  });
  if (!user) {
    return res.status(404).json("User is not signed in");
  }
  await Blog.create({
    title: req.body.title,
    paragraph: req.body.paragraph,
    user_id: user.id,
  })
    .then(() => {
      res.status(201).json({ message: "Blog successfully created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// routes.update("/", async (req, res) => {
//   const user = await User.findOne({
//     where: {
//       username: req.session.user,
//     },
//   });
//   if (!user) {
//     return res.status(404).json("User is not signed in");
//   }
//   await Blog.update(
//     { paragraph: req.body.paragraph },
//     { where: { userId: user.id } },
//   ).catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

module.exports = routes;
