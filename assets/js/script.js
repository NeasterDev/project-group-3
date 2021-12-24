const inputEl = document.querySelector('#cat-input');
const catEl = document.querySelector('#cat-picture');
const formEl = document.querySelector('#form');

const gifEl = document.querySelector('#gif');
const saysEl = document.querySelector('#says');
const colorEl = document.querySelector('#color');

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    var url = "https://cataas.com/cat";

    if(gifEl.checked) {
        console.log("GIF");
        url += "/gif";
    }if(saysEl.value) {
        console.log("saysEl");
        url += "/says/" + saysEl.value;
        
    }if(colorEl.value) {
        console.log("colorEl");
        url += "?color=" + colorEl.value;
    }

    catEl.src = url;
})
