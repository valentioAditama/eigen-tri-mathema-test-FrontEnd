import axios from "axios";

function getNews() {
    const options = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?q=helloworld&apiKey=4e5a2895ab4e4d72a888becae8ce37a8'
    };

    axios
        .request(options)
        .then(function (response: any) {
            console.log(response.data);
        })
        .catch(function (error: any) {
            console.log(error);
        })
}

getNews();