var path = require('path');

// Routes
module.exports = function(app) {
// Routes for each page the user is sent to
// load view html homepage
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/view.html'));
  });

// user can add new character to the database
  app.get('/add', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/add.html'));
  });

// Show all characters from the database 
  app.get('/all', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/all.html'));
  });
  
};