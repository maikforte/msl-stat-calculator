var exports = module.exports = {};

exports.getFlatGems = function (request, response) {
    var flatGem = [
        {
            "value": 1,
            "star": 1,
            "base": 100,
            "increment": 200
        },
        {
            "value": 1,
            "star": 2,
            "base": 300,
            "increment": 300
        },
        {
            "value": 1,
            "star": 3,
            "base": 500,
            "increment": 400
        },
        {
            "value": 1,
            "star": 4,
            "base": 700,
            "increment": 500
        },
        {
            "value": 1,
            "star": 5,
            "base": 900,
            "increment": 600
        },
        {
            "value": 1,
            "star": 6,
            "base": 1100,
            "increment": 700
        },
    ];

    response.json(flatGem);
};
