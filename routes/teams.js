function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const teamsRoutes = (app, fs) => {
    // variables
    const dataPath = './data/football.json';

    // READ Teams
    app.get('/teams', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            let dataArr = JSON.parse(data);
            res.send(dataArr);
        });
    });

    // READ Team
    app.get('/teams/:name', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            let dataArr = JSON.parse(data);

            let teamName = req.params.name;

            console.log(teamName);
            

            var result = dataArr.filter(obj => {
                return obj["name"].toLowerCase() === teamName.toLowerCase();
              })

            res.send(result);
        });
    });

    // Create or Update Team
    app.post('/teams', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            let dataArr = JSON.parse(data);
            
            let teamName = capitalizeFirstLetter(req.body["name"]);

            let teamObj = dataArr.find(obj => obj.name.toLowerCase() === teamName.toLowerCase());
            
            let teamIdx = dataArr.findIndex(obj => obj.name.toLowerCase() === teamName.toLowerCase());
            
            let Idx;

            if(teamObj){
                // Team exists
                dataArr[teamIdx]["img"] = req.body["img"];
                idx = teamIdx
            }
            else{
                // Team does not exists
                let newTeam = req.body;
                newTeam["name"] = capitalizeFirstLetter(newTeam["name"]) 
                dataArr.push(newTeam);
                idx = dataArr.length - 1
            }

            fs.writeFile(dataPath, JSON.stringify(dataArr), 'utf8', (err) => {
                if (err) {
                    throw err;
                }
            });
            
            return res.status(200).send();;
        });
    });
};

module.exports = teamsRoutes;