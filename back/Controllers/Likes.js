const Post = require('../MongoDB Models/Posts');
const Like = require('../Models/Likes');

// CRÉER UN LIKE

exports.createLike = (req, res, next) => {
  const userId = req.body.userId;
  const isliked = req.body.like;
  console.log(isliked);
  const postId = req.body.postId;

  Post.findOne({ where: { id: postId } })
    .then((post) => {
      if (!post) {
        return res.status(404).json({ error: "Post introuvable !" });
      } else if (isliked) {
        Like.create({ userId: userId, postId: postId })
          .then((like) => {
            res.status(201).json({ message: "Post liké" })
          })
          .catch((error) => res.status(400).json({ error }));
      } else if (!isliked) {
        Like.destroy({
          where: {
            userId: userId,
            postId: postId,
          },
        })
          .then((like) => {
            res.status(201).json({ message: "Post disliké" })
          })
          .catch((error) =>
            res.status(400).json({ message: "erreur supression like" })
          );
      }
    })
    .catch((error) => res.status(400).json({ message: "erreur suppression" }));
};

//TOUS LES LIKES SUR UN POST

exports.allLikes = (req, res, next) => {
  Like.findAll({ where: { postId: req.params.id } })
    .then((like) => res.status(200).json(like))
    .catch((error) => res.status(404).json({ error }));
};

//RENVOIE LE LIKE QUAND UN USER AIME UN POST

exports.getLike = (req, res, next) => {
  Like.findOne({ where: { userId: req.params.id, postId: req.params.idPost } })
    .then((like) => res.status(200).json(like))
    .catch((error) => res.status(404).json({ error }));
};