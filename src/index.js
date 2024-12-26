import "./styles.css";
import home from "./home";
import menu from "./menu";
import about from "./about";

const pages = {"home" : home, "menu" : menu, "about" : about};

const content = document.getElementById("content");

function startUp(){
    addEventListeners();
    load(home);
}

function addEventListeners(){
    const nav = document.querySelector("nav");
    nav.addEventListener("click", (e)=>{
        e.target.id? load(pages[e.target.id]):null;
    })
}

function load(page){
    content.innerHTML = "";
    content.appendChild(page);
}



startUp();