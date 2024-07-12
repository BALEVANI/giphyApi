import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Giphy from './giphy-service';
import './css/styles.css';



// search button
$("button#searchbtn").click(()=>{
    const searchedText = $("input#inputted-search").val();
    let promise = Giphy.searchGif(searchedText);
    promise.then(function(response){
        let resp = JSON.parse(response);
        $("div#searched-img").html(`<img src = ${ resp.data[0].images.original.url}>`)   
    })
})
// display trending gifs
function displayTrending(){
    let promise = Giphy.trendGif();
    promise.then(function(response){
        let images = "";
        let resp = JSON.parse(response);
        images += `<img src = ${ resp.data[0].images.original.url} class = 'col'>`;
        images += `<img src = ${ resp.data[1].images.original.url} class = 'col'>`;
        $("div#trending-img").html(images)
    })
}
// random gifs button
displayTrending();
let rating = $("select#rating").find(":selected").text();
$("button#random-btn").click(()=> {
    let promise = Giphy.randomizeGif(rating);
    promise.then(function(response){
        const resp = JSON.parse(response);
        $("div#random-img").html(`<img src = ${ resp.data.images.original.url}>`)
    })
})
