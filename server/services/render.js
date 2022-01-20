const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.home = (req, res) =>{
    res.render('home');
}

exports.login = (req, res) =>{
    res.render('login');
}

exports.register = (req, res) =>{
    res.render('register');
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.map = (req, res) =>{
    res.render('map');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}