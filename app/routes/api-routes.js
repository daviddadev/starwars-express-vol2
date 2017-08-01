// Modules & Dependencies
var Character = require('../models/character.js');

module.exports = function(app) {

// Routes
// looks for characters JSON format
  app.get('/api/:characters?', function(req, res) {
    if (req.params.characters) {
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    else {
      Character.findAll({})
      .then(function(result) {
        return res.json(result);
      });
    }

  });

  // New character submission
  app.post('/api/new', function(req, res) {
    var character = req.body;
    var routeName = character.name.replace(/\s+g, '').toLowerCase();

    Character.create({
      routeName: routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    });
  });
};
