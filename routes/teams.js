
const teamsRoutes = (app, fs) => {
    // variables
    const dataPath = './data/football.json';

    // READ
    app.get('/teams', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            console.log(data);
            res.send(JSON.parse(data));
        });
    });



};

module.exports = teamsRoutes;