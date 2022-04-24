// const e = document.getElementById('clicUp');
// e.onclick = () => alert("Merci d'avoir cliqué !");

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer) {
    entries.forEach(function (entry) {
    if(entry.intersectionRatio > ratio) {

        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
    }
    })
}


const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})
