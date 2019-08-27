const path = require('path');
const friends = require('../data/friends.js');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log("these re the friends " + friends);
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        let userInput = req.body;
        console.log("anything" + userInput);

        let userResponses = userInput.scores;
        let totalDif;
        var bestMatch = {
            name: "",
            Photo: "",
            friendDifference: Infinity
        };

        for (let i = 0; i < friends.length; i++) {
            const currentF = friends[i];

            totalDif = 0;

            for (let j = 0; j < currentF.score.length; j++) {
                console.log("guess?" + currentF.score);
                let currentFscore = currentF.score[j];
                let currentUserScore = userResponses[j];
                console.log(currentFscore);
                console.log(currentUserScore);
                totalDif += Math.abs(parseInt(currentUserScore) - parseInt(currentFscore))
            }

            if (totalDif <= bestMatch.friendDifference) {
                bestMatch.name = currentF.name;
                bestMatch.photo = currentF.photo;
                bestMatch.friendDifference = totalDif;
            }
            console.log("anything again" + bestMatch);
        }

        friends.push(userInput);

        //    res.json({ bestMatch.name: bestMatch.photo });
    });
};