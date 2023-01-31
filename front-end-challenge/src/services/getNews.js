"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
function getNews() {
    var options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?q=helloworld&apiKey=4e5a2895ab4e4d72a888becae8ce37a8'
    };
    axios_1["default"]
        .request(options)
        .then(function (response) {
        console.log(response.data);
    })["catch"](function (error) {
        console.log(error);
    });
}
getNews();
