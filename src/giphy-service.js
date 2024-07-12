export default class Giphy {
    static searchGif(word) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${word}&limit=1&offset=0&rating=g&lang=en`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response);
                }
            };


            request.open("GET", url, true);
            request.send();
        })
    };
    static trendGif() {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            let url = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.API_KEY}&limit=3&rating=r`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response);
                }
            };


            request.open("GET", url, true);
            request.send();
        })
    }
    static randomizeGif(rating) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&rating=${rating}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response)
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    };
}