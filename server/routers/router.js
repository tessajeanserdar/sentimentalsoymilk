
var controller = require('../controllers/controller.js');
var dbroutes = require('../models/dbroutes.js');

module.exports = function(app, express) {

  app.post('/login', controller.login);
  app.post('/signup', controller.signup);
  //app.get('/user', controller.checkAuth);

  app.get('/activities', controller.fetchTripData);
  app.post('/trips', controller.createTrip);
  app.put('/trips', controller.editTrip);
  //app.delete('/trips', controller.deleteTrip);
  app.get('/db/activities', dbroutes.retrieveActivities);

}