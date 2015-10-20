var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
  function(username, password, done){
    User.findOne({username:username}).exec(function(err, user){
      if(user){
        return done(null, user);
      } else{
        return done(null, false);
      }
    })
  }
));

passport.serializeUser(function(user, done){
  console.log('serializeUser called');
  if(user){
    done(null, user._id);
  }
});

passport.deserializeUser(function(id, done){
  User.findOne({_id:id}).exec(function(err, user){
    if(user){
      return done(null, user);
    }else{
      return done(null, false);
    }
  });
});

//require('./server/config/routes')(app);
var auth = require('./server/config/auth')

app.get('/partials/*', function(req, res){
  res.render('../../public/app/' + req.params[0]);
});

app.post('/login', auth.authenticate);

app.get('*', function(req, res){
  res.render('index');
});

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');