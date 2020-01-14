// load route for teams
const teamsRoutes = require('./teams');


const appRouter = (app, fs) => {
    // default route at the base API url
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });


    // teams route module
    teamsRoutes(app, fs);
};

module.exports = appRouter;