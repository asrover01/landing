const codeCademyButton = document.getElementById("code-cademy-button");
const frontEndButton = document.getElementById("front-end-button");
const freeCodeCampButton = document.getElementById("freecodecamp-button");


const codeCademyLinks = document.getElementById("codecademy-links");
const frontEndLinks = document.getElementById("front-end-links");
const freeCodeCampLinks = document.getElementById("freeCodeCamp-links");

const allButtons = document.getElementsByClassName("button")
const linkMenus = document.getElementsByClassName("link-menu");

let codeCademyVisible = false;
let frontEndVisible = false;
let freeCodeCampVisible =false;

codeCademyButton.addEventListener("click",codeCademyDisplay)
frontEndButton.addEventListener("click", frontEndDisplay);
freeCodeCampButton.addEventListener("click",freeCodeCampDisplay)

function codeCademyDisplay(){
    if (!codeCademyVisible){
    codeCademyLinks.classList.remove('hide');
    codeCademyVisible=true;
    } else {
        codeCademyLinks.classList.add('hide');
        codeCademyVisible=false;   
    }
    if (frontEndVisible){
    frontEndLinks.classList.add("hide");
    frontEndVisible = false;
    }
    if (freeCodeCampVisible){
    freeCodeCampLinks.classList.add("hide")
    freeCodeCampVisible =false;
    }
}


function frontEndDisplay(){
    if (!frontEndVisible){
    frontEndLinks.classList.remove('hide');
    frontEndVisible =true;
    } else {
        frontEndLinks.classList.add('hide');
    frontEndVisible =false;
    }
    if (codeCademyVisible){
    codeCademyLinks.classList.add("hide");
    codeCademyVisible=false;
    }
    if (freeCodeCampVisible){
    freeCodeCampLinks.classList.add("hide");
    freeCodeCampVisible= false;
    }
}

function freeCodeCampDisplay(){
    if (!freeCodeCampVisible){
    freeCodeCampLinks.classList.remove('hide');
    freeCodeCampVisible=true;
    } else {
        freeCodeCampLinks.classList.add('hide');
        freeCodeCampVisible=false;
    }
    if (codeCademyVisible){
    codeCademyLinks.classList.add("hide");
    codeCademyVisible=false;  
    }
    if (frontEndVisible){
        frontEndLinks.classList.add("hide");
        frontEndVisible = false;
        }
}






