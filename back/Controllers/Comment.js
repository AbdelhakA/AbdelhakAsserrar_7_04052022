const Reaction = require('../models/comments');

//créer un commentaire (POST)
exports.createReaction = (req, res, next) => {
  const reactionObject = JSON.parse(req.body.post);
  delete reactionObject._id;
  const reaction = new post ({...reactionObject, imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`});
  reaction.save()
    .then(() => res.status(201).json({message: 'Commentaire enregistré !'}))
    .catch((error) => res.status(400).json({ error }));
};

// trouver tous les commentaires (GET)

exports.getAllReactions = (req, res, next) => {
  Reaction.find()
    .then(reactions => {res.status(200).json(reactions)})
    .catch(error => {res.status(400).json({ error })})
};

// supprimer un commentaire (DELETE)

exports.deleteReaction = (req, res, next) => {
  Reaction.findOne({ _id: req.params.id })
    .then(reaction => {
      const filename = reaction.imageUrl.split('/images/')[1];
      fs.unlink(`ìmages/${filename}`, () => {
        reaction.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
        .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};