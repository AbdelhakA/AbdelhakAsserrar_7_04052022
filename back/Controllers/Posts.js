const Post = require('../models/posts');
const User = require('../models/user');
const fs = require('fs');

// PUBLIER UN POST (POST)

exports.createPost = (req, res, next) => {
  const postObject = JSON.parse(req.body.post);
  delete postObject._id;
  const post = new post ({...postObject, imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`});
  post.save()
    .then(() => res.status(201).json({message: 'Post enregistré !'}))
    .catch((error) => res.status(400).json({ error }));
};

// TROUVER TOUS LES POSTS (GET)

exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: ["id", "content", "imageUrl", "userId"],
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["pseudo", "id"],
      },
    ],
  })
};
  

// TROUVER UN POST (GET)

exports.getOnePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {res.status(200).json(post)})
    .catch(error => {res.status(404).json({ error })});
};

// MODIFIER UN POST (PUT)

exports.modifyPost = (req, res, next) => {
  const postObject = req.file ?
    {...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`} : { ...req.body };

  Post.updateOne({_id: req.params.id}, { ...postObject, _id: req.params.id })
    .then(() => res.status(201).json({message: 'Post modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

// SUPPRIMER UN POST (DELETE)

exports.deletePost = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post supprimé !'}))
        .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};