const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const expressSession = require("express-session");

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const { PORT, MONGODB_URI } = process.env;

// middleware function
app.use(expressSession({ secret: 'foo barr', cookie: { expires: new Date(253402300000000) } }))

app.use("*", async (req, res, next) => {
    global.user = false;
    if (req.session.userID && !global.user) {
      const user = await User.findById(req.session.userID);
      global.user = user;
    }
    next();
  })

  const authMiddleware = async (req, res, next) => {
    const user = await User.findById(req.session.userID);
    if (!user) {
      return res.redirect('/home');
    }
    next()
  }

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});