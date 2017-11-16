const Users = require('../controllers/users');
const Polls = require('../controllers/polls');
const Options = require('../controllers/options');
const path = require('path');


module.exports = function(app){
    // routes go here
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);

    app.post('/polls', Polls.create);
    app.get('/polls', Polls.index);
    app.get('/polls/:id', Polls.show);
    app.delete('/polls/:id', Polls.destroy);

    app.get('/options/:id', Options.show);
    app.put('/options/:id', Options.update);



    // Always include in routes (saying "if current route doesn't match any of the above routes then send up to frontend so angular can potentially render a component.") can only have activated after ng build(ng build creates dist folder)
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}