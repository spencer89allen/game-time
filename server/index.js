var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var sessions = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var bcrypt = require('bcrypt');

var profileCtrl = require('./profileController')
var gameCtrl = require('./gameConntroller');


require('dotenv').config({ path: __dirname + '/.env' });

// var profileController = require('./profileController');

var app = express();

//MASSIVE
massive(process.env.CONNECTION_STRING, { scripts: __dirname + '/db' }).then(dbInstance => {
    app.set('db', dbInstance)
    console.log(`The database is connected`)
}).catch(error => {
    console.log(process.env.CONNECTION_STRING)
    console.error(error);
});

//BodyParser
app.use(bodyParser.json());

//Sessions
app.use(sessions({
    saveUninitialized: false,
    resave: false,
    secret: "shhh it's a secret"
}));

app.use(passport.initialize());
app.use(passport.session());

//Register set up 
passport.use('register', new LocalStrategy({ passReqToCallback: true }, function (req, username, password, done) {
    const { email } = req.body
    if (!email) {
        return done({ message: 'Username, Email, and Password are required' }, false);
    }

    const dbInstance = app.get('db')

    dbInstance.users.find({
        or: [{
            'username ilike': username,

        },
        {
            'email ilike': email,
        }]
    }).then(userInfo => {
        if (userInfo.length > 0) {
            return done({ message: "Username is not available" }, false);
        }
        bcrypt.hash(password, 15, (err, hashedPassword) => {
            if (err) {
                return done({ message: 'System Failure' }, false )
            }
            dbInstance.add_new_user([username, email, hashedPassword])
                .then(user => {
                    const newUser = user[0];
                    delete newUser.password;
                    done(null, newUser);
                }).catch(error => {
                    console.log(error.message)
                    return done({ message: 'System Failure' }, false)
        })
        });
    })
        .catch(error => {
            console.log(error.message)
            return done({ message: 'System Failure' }, false)
        })
}));

//Login set up
passport.use('login', new LocalStrategy(function (username, password, done) {

    const dbInstance = app.get('db');
    dbInstance.users.find({ username }).then(userInfo => {
        const user = userInfo[0];
        if (user === undefined) {
            return done(null, false, { message: 'Username or Password is incorrect' })
        }
        bcrypt.compare(password, user.password, (err, isSame) => {
            if (err) {
                return done(null, false, { message: 'System Failure' })
            }
            if (!isSame) {
                return done(null, false, { message: 'Username or Password is incorrect' })
            }
        })
        delete user.password
        done(null, user);
    }).catch(error => {
        console.log(error.message);
    })
}));


//Auth stuff
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const dbInstance = app.get('db')

    dbInstance.users.find(id)
        .then(user => {
            if (!user) {
                return done(null, undefined)
            }
            delete user.password
            return done(null, user)
        })
        .catch(err => {
            console.log(err)
            done('System failure');
        });
});

//ENDPOINTS

//auth endpoints
app.post(`/auth/register`, passport.authenticate('register', { failWithError: true }), (req, res) => {
    const { user } = req;
    res.send(user);
}, (err, req, res, next) => {
    console.log(err)
    next(err)
});

app.post(`/auth/login`, passport.authenticate('login'), (req, res) => {
    const { user } = req;
    res.send(user);
});

app.get(`/auth/logout`, (req, res) => {
    req.logout();
    res.sendStatus(204)
})

app.get(`/me`, (req, res) => {
    res.send(req.user);
});


//profile endpoints
app.post(`/profile/info`, profileCtrl.addProfile)
app.post(`/profile/get`, profileCtrl.getProfile)
app.post(`/profile/gameHistory/get`, profileCtrl.getGameHistory)

//game endpoints
app.post(`/game/score`, gameCtrl.postScore)

//score endpoints
app.get(`/score/topTen`, gameCtrl.getTopTen)



//PORT STUFF
var Port = 4545;

app.listen(Port, () => {
    console.log(`The server is listening on port ${Port}`)
});
