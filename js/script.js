const inputEl = document.querySelector('#cat-input');
const catEl = document.querySelector('#cat-pic');
const catFormEl = document.querySelector('#cat-form');

const gifEl = document.querySelector('#gif');
const saysEl = document.querySelector('#says');
const colorEl = document.querySelector('#colors');

// dog vars

const dogForm = document.querySelector('#dog-form');
const dogPic = document.querySelector('#dog-pic');
const catLabel = document.querySelector('#cat-label');

// https://cataas.com/#/
catFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var url = "https://cataas.com/cat";

    if (gifEl.checked) {
        console.log("GIF");
        url += "/gif";
    } if (saysEl.value) {
        console.log("saysEl");
        url += "/says/" + saysEl.value;

    } if (colorEl.value) {
        console.log("colorEl");
        url += "?color=" + colorEl.value;
    }
    catEl.src = url;
})
// https://dog.ceo/dog-api/documentation/random

// cat fact
// https://meowfacts.herokuapp.com/
dogForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var url = "https://dog.ceo/api/breeds/image/random";
    var factUrl = "https://meowfacts.herokuapp.com/";
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        url = data.message;
        dogPic.src = url;
    })

    fetch(factUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        var fact = data.data[0];
        //catLabel.textContent = fact;
        console.log("Cat fact: " + fact)
    })

    // fetch("./api.json").then(function(response) {
    //     return response.json();
    // }).then(function(data) {
    //     console.log(data.fact);
    // });
})

//VOTING SCRIPT
var DOGS = 0;
var CATS = 0;

function refreshResults() {
    var results = document.getElementById('results');
    results.innerHTML = 'Total: ' + (DOGS + CATS);
    results.innerHTML += '<br />DOGS: ' + DOGS;
    results.innerHTML += '<br />CATS: ' + CATS;
}

document.getElementById('dog-vote').addEventListener('click', function () {
    DOGS++;
    refreshResults();
});

document.getElementById('cat-vote').addEventListener('click', function () {
    CATS++;
    refreshResults();
});