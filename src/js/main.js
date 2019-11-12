"use strict";

const list = document.querySelector('.projects__list-js');

fetch("https://api.github.com/users/Karol-Czyzewski/repos?sort=updated")
.then(resp => resp.json())
.then (resp => {
const repos = resp
console.log(resp);
    for (const repo of repos) {

        list.innerHTML += 
        `
        <li class="project">
        <div class="project__item">
          <img class="project__photo" src="assets/img/github.svg" alt="">
          <h4 class="project__title">${repo.name}</h4>
          <p class="project__description">${repo.description}</p>
        </div>
        <div class="project__footer">
          <a href="https://karol-czyzewski.github.io/${repo.name}/" class="project__demo" title="Demo: KarolCZyżewski storna">Demo</a>
          <a href="${repo.html_url}" class="project__github" title="link do githuba">GitHub</a>
        </div>
      </li>`; 

    }
})
.catch(err => {
    console.log(err); 
    list.innerHTML += `<p class="err-js">"Nie moża wyświetliść API :) Sprawdź swoje połączenie z internetem"</p>`;
})
