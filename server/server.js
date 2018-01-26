require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const passport = require('passport');
const Auth0 = require('passport-auth0');

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//grabbing database connection
massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

// passport.use(new Auth0({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENTID,
//     clientSecret: process.env.AUTH_CLIENTSECRET,
//     callbackURL: process.env.AUTH_CALLBACK_URL,
//     scope: "openid profile"
// }, function (accessToken, refreshToken, extraParams, profile, done) {
    //not grabbing right information
    // let { displayName, user_id, picture } = profile;
    // const db = app.get('db');

    // //needs to be changed
    // db.find_user([user_id]).then(function (users) {
    //     if (!users[0]) {
    //         db.create_user([
    //             displayName,
    //             'test@test.com',
    //             picture,
    //             user_id
    //         ]).then(user => {
    //             return done(null, user[0].id)
    //         })
    //     } else {
    //         return done(null, users[0].id)
    //     }
    // })
//     return done(null, profile)
// }))

// passport.serializeUser((id, done) => {
//     done(null, id);
// })
// passport.deserializeUser((id, done) => {
//     app.get('db').find_session_user([id]).then(function(user){
//         return done(null, user[0]);
//     })
// })

/* start auth end points */
// app.get('/auth', passport.authenticate("auth0"))
// app.get('/auth/callback', passport.authenticate("auth0", {
//     successRedirect: "http://localhost:3000/#/home",
//     failureRedirect: "http://localhost:3000/"
// }))

// app.get('/api/auth/authenticated', (req, res)=>{
//     if(!req.user){
//         res.status(404).send('User not found.')
//     }else{
//         res.status(200).send(req.user);
//     }
// })
// app.get('/api/auth/logout', function(req, res){
//     req.logOut();
//     res.redirect('http://localhost:3000/')
// })
/* end auth endpoints */
/* start cart endpoints */

//get cart - get
app.get('/api/cartgrab', (req, res)=>{
    const db = req.app.get('db');
    let username='User1'
    db.grabCurCart(username).then(cart=>{
        res.send(cart)
    })
})

// add to cart - put
app.put('/api/cartadd', function(req, res, next)
    {
    const db = app.get('db');
    let userName = req.body.userName
    let item = req.body.item
    db.addToCart(item, userName)
    res.status(200).send('added to cart')
})
// remove from cart - delete
app.delete('/api/cartRemove', function(req, res){
    const db = app.get('db');
    let userName = 'User1'
    db.emptyCart([userName])
    res.status(200).send('removed from cart')
})
//edit quanitity of cart - put
app.put('/api/cartEdit', function(req, res){
    const db = app.get('db');
    res.status(200).send('cart edited')
})
// move to favourites - put
app.put('/api/movetofavorites', function(req, res){
    const db = app.get('db');
    res.status(200).send('moved to favorites')
})
/* end cart endpoints */
/* start order endpoints */

// send order - post
app.post('/api/sendorder', function(req, res){
    const db = app.get('db');
    res.status(200).send('sent order')
})
/* end order endpoints */
/* start account specific endpoints */

// make comment endpoint - post
app.post('/api/makecomment', function(req, res){
    const db = app.get('db');

})
// edit comment  - put
app.put('/api/editcomment',function(req, res){
    const db = app.get('db');

})
// delete comment - delete
app.delete('/api/deletecomment', function(req, res){
    const db = app.get('db');

})
// get comments - get
app.get('/api/getcomments', function(req, res){
    const db = app.get('db');

})
// get order history - get
app.get('/api/getcomments', function(req, res){
    const db = app.get('db');
    
})
// update account - put
app.put('/api/updateaccount', function(req, res){
    const db = app.get('db');

})
// delete account - delete
app.delete('/api/deleteaccount', function(req, res){
    const db = app.get('db');
    
})
/* end account specific endpoints*/

const { SERVER_PORT } = process.env
app.listen(SERVER_PORT, function () { console.log(`listening on port ${SERVER_PORT}`) });