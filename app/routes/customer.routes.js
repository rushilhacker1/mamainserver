module.exports = function(app) {

    var user = require('../controllers/customer.controller.js');

    // Create a new Customer
    app.post('/user', user.create);

    // Retrieve all Customer
    app.get('/user', user.findAll);

    // Retrieve a single Customer by Id
    app.get('/user/:id', user.findOne);

    // Update a Customer with Id
    app.put('/user/:id', user.update);

    // Delete a Customer with Id
    app.delete('/user/:id', user.delete);
}