module.exports = function(app) {

    var user = require('../controllers/customer.controller.js');

    // Create a new Customer
    app.post('/', user.create);

    // Retrieve all Customer
    app.get('/', user.findAll);

    // Retrieve a single Customer by Id
    app.get('/:id', user.findOne);

    // Update a Customer with Id
    app.put('/:id', user.update);

    // Delete a Customer with Id
    app.delete('/:id', user.delete);
}
