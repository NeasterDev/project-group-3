const inputEl = document.querySelector('#cat-input');
const catEl = document.querySelector('#cat-pic');
const catFormEl = document.querySelector('#cat-form');

const gifEl = document.querySelector('#gif');
const saysEl = document.querySelector('#says');
const colorEl = document.querySelector('#colors');

// dog vars

const dogForm = document.querySelector('#dog-form');
const dogPic = document.querySelector('#dog-pic');
const catFact = document.querySelector('#cat-fact');
const dogFact = document.querySelector('#dog-fact');

const dogFactArray = [
    "All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.",
    "Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.",
    "Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.",
    "Apple and pear seeds contain arsenic, which may be deadly to dogs.",
    "Rock star Ozzy Osborne saved his wife Sharon’s Pomeranian from a coyote by tackling ad wresting the coyote until it released the dog.",
    "Dogs have sweat glands in between their paws.",
    "In 2003, Dr. Roger Mugford invented the \"wagometer,\" a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.",
    "Dogs have three eyelids. The third lid, called a nictitating membrane or \"haw,\" keeps the eye lubricated and protected.",
    "A dog’s shoulder blades are unattached to the rest of the skeleton to allow greater flexibility for running.",
    "Puppies are sometimes rejected by their mother if they are born by cesarean and cleaned up before being given back to her.",
    "The phrase \"raining cats and dogs\" originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.",
    "During the Middle Ages, Great Danes and Mastiffs were sometimes suited with armor and spiked collars to enter a battle or to defend supply caravans.",
    "Pekingese and Japanese Chins were so important in the ancient Far East that they had their own servants and were carried around trade routes as gifts for kings and emperors. Pekingese were even worshipped in the temples of China for centuries.",
    "The shape of a dog’s face suggests how long it will live. Dogs with sharp, pointed faces that look more like wolves typically live longer. Dogs with very flat faces, such as bulldogs, often have shorter lives.",
    "After the fall of Rome, human survival often became more important than breeding and training dogs. Legends of werewolves emerged during this time as abandoned dogs traveling in packs commonly roamed streets and terrified villagers.",
    "During the Middle Ages, mixed breeds of peasants’ dogs were required to wear blocks around their necks to keep them from breeding with noble hunting dogs. Purebred dogs were very expensive and hunting became the province of the rich.",
    "The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan.",
    "The American Kennel Club, the most influential dog club in the United States, was founded in 1884.",
    "The most popular male dog names are Max and Jake. The most popular female dog names are Maggie and Molly.",
]

// https://cataas.com/#/
// cat fact
// https://meowfacts.herokuapp.com/
catFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var url = "https://cataas.com/cat";
    var factUrl = "https://meowfacts.herokuapp.com/";

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

    // fetch fact
    fetch(factUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        var fact = data.data[0];
        catFact.textContent = fact;
        console.log("Cat fact: " + fact)
    })
})
// https://dog.ceo/dog-api/documentation/random


dogForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var url = "https://dog.ceo/api/breeds/image/random";
    //var factUrl = "https://cors-anywhere.herokuapp.com/https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        url = data.message;
        dogPic.src = url;
    })


    dogFact.textContent = dogFactArray[Math.floor(Math.random() * dogFactArray.length)];

});

fetch("https://dog.ceo/api/breeds/image/random").then(function (response) {
    return response.json();
}).then(function (data) {
    url = data.message;
    dogPic.src = url;
})

//VOTING SCRIPT
var DOGS = 0;
var CATS = 0;


if(storage.getItem('dogs')) {
    DOGS = +storage.getItem('dogs');
}
if(storage.getItem('cats')) {
    CATS = +storage.getItem('cats');
}

results.innerHTML = 'Total: ' + (DOGS + CATS);
results.innerHTML += '<br />DOGS: ' + DOGS;
results.innerHTML += '<br />CATS: ' + CATS;

function refreshResults() {
    storage.setItem('dogs', DOGS);
    storage.setItem('cats', CATS);
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
