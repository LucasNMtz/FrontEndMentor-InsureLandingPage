// icon swap
const aIcons = document.querySelectorAll(".footer-top div a");
aIcons.forEach(aIcon => {
    aIcon.addEventListener("mouseenter", ()=>{
        const imgIcon = aIcon.querySelector("img");
        imgIcon.src = imgIcon.src.replace(".svg", "-black.svg");
    })
    aIcon.addEventListener("mouseleave", ()=>{
        const imgIcon = aIcon.querySelector("img");
        imgIcon.src = imgIcon.src.replace("-black.svg", ".svg");
    })
})
// icon swap
// dropdown menu
const dropdownMenuBtn = document.querySelector(".dropdown-menu-button");
const dropdownMenu = document.querySelector("nav");
dropdownMenuBtn.addEventListener("click", ()=>{
    if(dropdownMenuBtn.querySelector("img").src.includes("hamburger")) dropdownMenuBtn.querySelector("img").src = dropdownMenuBtn.querySelector("img").src.replace("-hamburger.svg", "-close.svg");
    else dropdownMenuBtn.querySelector("img").src = dropdownMenuBtn.querySelector("img").src.replace("-close.svg", "-hamburger.svg");
    dropdownMenu.classList.toggle("dropdown-menu-active");
})
// dropdown menu