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

    // READ Team
    app.get('/teams/:name', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            // console.log(data);
            // console.log(req.params["name"]);

            var result = JSON.parse(data).filter(obj => {
                return obj.name === req.params["name"];
              })
            console.log(result);
            res.send(result);
        });
    });


};

module.exports = teamsRoutes;