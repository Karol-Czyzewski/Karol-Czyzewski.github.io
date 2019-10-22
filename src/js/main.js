"use strict";

const list = document.querySelector('.projects__list-js');

fetch("https://api.github.com/users/Karol-Czyzewski/repos?sort=update")
.then(resp => resp.json())
.then (resp => {
const repos = resp
    for (const repo of repos) {
        list.innerHTML += `<li><a href=${repo.html_url}>${repo.name}</a></li>`; 
    }
})
.catch(err => {
    console.log(err); 
    list.innerHTML += "Nie moża wyświetliść API :) Sprawdź swoje połączenie z internetem";
})