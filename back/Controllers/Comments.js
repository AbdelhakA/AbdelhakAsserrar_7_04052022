const Reaction = require('../MongoDB Models/Comments');

//POSTER UN COMMENT (POST)
exports.createReaction = async (req, res, next) => {
  const reactionObject = JSON.parse(req.body.post);
  delete reactionObject._id;
  const reaction = new post ({...reactionObject, imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`});
  reaction.save()
    .then(() => res.status(201).json({message: 'Commentaire enregistré !'}))
    .catch((error) => res.status(400).json({ error }));
};

// TROUVER TOUS LES COMMENTS (GET)

exports.getAllReactions = (req, res, next) => {
  Reaction.find({
    where: { postId: req.params.postId },
  })
    .then(reactions => {res.status(200).json(reactions)})
    .catch(error => {res.status(400).json({ error })})
};

// SUPPRIMER UN COMMENT (DELETE)

exports.deleteReaction = (req, res, next) => {
  Reaction.findOne({ _id: req.params.id })
    .then(reaction => {
      const filename = reaction.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        reaction.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
        .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};