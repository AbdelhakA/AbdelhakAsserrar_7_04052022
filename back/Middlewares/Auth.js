const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const unhiddenToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = unhiddenToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User ID non valide !';
    } else {
      next();
    }
  } catch {
    res.status(401).json({ error: new Error('Requête invalide !')});
  }
};