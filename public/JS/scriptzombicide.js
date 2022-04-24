let cibleImg = document.querySelector("header");
let heros1 = document.querySelector(".Jane");
let heros2 = document.querySelector(".Joe");
let heros3 = document.querySelector(".Louise");
let heros4 = document.querySelector(".Travis");


heros1.addEventListener("mouseover", () => {
    cibleImg.style.backgroundImage = "url('../images/zombicide/Jane.jpg')";
    cibleImg.style.backgroundRepeat = "no-repeat"; 
    cibleImg.style.backgroundSize = "cover";
});

heros1.addEventListener("mouseout", () => {
    cibleImg.style.background = "brown"; 
});

heros2.addEventListener("mouseover", function() {
    cibleImg.style.backgroundImage = "url('./images/zombicide/Joe.jpg')";
    cibleImg.style.backgroundRepeat = "no-repeat";
    cibleImg.style.backgroundSize = "cover";
});

heros2.addEventListener("mouseout", function() {
    cibleImg.style.background = "brown";
    
});

heros3.addEventListener("mouseover", function() {
    cibleImg.style.backgroundImage = "url('./images/zombicide/Louise.jpg')";
    cibleImg.style.backgroundRepeat = "no-repeat";
    cibleImg.style.backgroundSize = "cover";
});

heros3.addEventListener("mouseout", function() {
    cibleImg.style.background = "brown"; 
});

heros4.addEventListener("mouseover", function() {
    cibleImg.style.backgroundImage = "url('./images/zombicide/Travis.jpg')";
    cibleImg.style.backgroundRepeat = "no-repeat"; 
    cibleImg.style.backgroundSize = "cover";
});

heros4.addEventListener("mouseout", function() {
    cibleImg.style.background = "brown"; 
});




// CORRECTION //

// let header = document.querySelector('header');

// document.querySelectorAll('nav > ul > li > a').forEach((lien) => {
//     lien.addEventListener('mousover', () => {
//         let attribut = lien.getAttribute('href');
//         let article = document.querySelector(attribut);
//         let img = article.querySelector('img');
//         let src = img.getAttribute('src');
//         header.style.backgroundImage = "url('" + src + "')";
//     });

//     lien.addEventListener('mouseout', () => {
//         header.style.backgroundImage = 'none';
//     });
// });
