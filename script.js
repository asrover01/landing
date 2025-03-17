const codeCademyButton = document.getElementById("code-cademy-button");
const frontEndButton = document.getElementById("front-end-button");
const freeCodeCampButton = document.getElementById("freecodecamp-button");


const codeCademyLinks = document.getElementById("codecademy-links");
const frontEndLinks = document.getElementById("front-end-links");
const freeCodeCampLinks = document.getElementById("freeCodeCamp-links")

const allButtons = document.getElementsByClassName("button")
const linkMenus = document.getElementsByClassName("link-menu");

function codeCademyDisplay(){
    codeCademyLinks.classList.remove('hide');
    if (frontEndLinks.classList !== "hide"){
    frontEndLinks.classList.add("hide");
    }
    if (freeCodeCampLinks.classList !== "hide"){
    freeCodeCampLinks.classList.add("hide")
    }
}
codeCademyButton.addEventListener("click",codeCademyDisplay)

function frontEndDisplay(){
    frontEndLinks.classList.remove('hide');
    if (codeCademyLinks.classList !== "hide"){
    codeCademyLinks.classList.add("hide");
    }
    if (freeCodeCampLinks.classList !== "hide"){
    freeCodeCampLinks.classList.add("hide");
    }
}
frontEndButton.addEventListener("click", frontEndDisplay);
function freeCodeCampDisplay(){
    freeCodeCampLinks.classList.remove('hide');
    if (codeCademyLinks.classList !== "hide"){
    codeCademyLinks.classList.add("hide");
    }
    if (frontEndLinks.classList !== "hide"){
        frontEndLinks.classList.add("hide");
        }
}
freeCodeCampButton.addEventListener("click",freeCodeCampDisplay)





