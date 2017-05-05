var exports = module.exports = {};

exports.basicMainStats = [
    {
        "label": "HP",
        "value": 1
    },
    {
        "label": "HP%",
        "value": 2
    },
    {
        "label": "ATK",
        "value": 3
    },
    {
        "label": "ATK%",
        "value": 4
    },
    {
        "label": "DEF",
        "value": 5
    },
    {
        "label": "DEF%",
        "value": 6
    },
    {
        "label": "REC",
        "value": 7
    },
    {
        "label": "REC%",
        "value": 8
    }
];

exports.squareMainStat = {
    "label": "RES%",
    "value": 9
};

exports.getBasicStats = function (request, response) {
    response.json(exports.basicStats);
};

exports.getSquareMainStat = function (request, response) {
    var squareMainStat = exports.basicMainStats;
    squareMainStat.push(exports.squareMainStat);
    response.json(squareMainStat);
};
