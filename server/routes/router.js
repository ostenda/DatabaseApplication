const express = require('express');
const route = express.Router()
const user = require("../model/User");

const services = require('../services/render');
const controller = require('../controller/controller');
const userController = require('../controller/user')

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);


/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)

route.get("/join", (req, res) => {
    res.render('create-user', { errors: {} })
  });
  
route.post("/join", userController.create);
route.get("/login", (req, res) => {
    res.render('login-user', { errors: {} })
});
route.post("/login", userController.login);

route.get("/logout", async (req, res) => {
    req.session.destroy();
    global.user = false;
    res.redirect('/');
  })

route.get('/map',services.map)

route.get('/home',services.home)

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route