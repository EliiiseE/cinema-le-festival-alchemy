var positionbase = window.scrollY;

window.addEventListener("scroll", function() {
    var scollY = window.scrollY;
    if (scrollY < positionbase) {
        document.getElementById("myHeader").style.top = "0px";
    } else {
        document.getElementById("myHeader").style.top = "-120px";
        if (scollY < 100) {
            document.getElementById("myHeader").style.top = "0px";
        }
    }
    positionbase = scrollY;
});

const filmButtons = document.querySelectorAll('.film_nav');

filmButtons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        activateFilm(index)
    });
});

function activateFilm(wantedFilmIndex) {
    const films = document.querySelectorAll('.description_container');
    const video = document.querySelectorAll('.video_film');

    films.forEach(function(film, index) {
        if (index === wantedFilmIndex) {
            film.classList.add('is-active');
        } else {
            film.classList.remove('is-active');
        }
    });

    video.forEach(function(film, index) {
        if (index === wantedFilmIndex) {
            film.classList.remove('video-unactive');
        } else {
            film.classList.add('video-unactive');
        }
    });

    filmButtons.forEach(function(button, index) {
        if (index === wantedFilmIndex) {
            button.classList.add('is-active');
        } else {
            button.classList.remove('is-active');
        }
    });
}

// Function movie film animation

const arrowLeft = document.getElementById('arrow_left');
const arrowRight = document.getElementById('arrow_right');
const filmNav = document.getElementsByClassName('films_navigation');

arrowLeft.addEventListener('click', (event) => {
    console.log(filmNav)
})

arrowRight.addEventListener('click', (event) => {
    console.log('click')
})


document.getElementById('bouton').addEventListener('click', function () {

    document.getElementById('reservation_page').style.display = 'block'

})
document.getElementById('return').addEventListener('click', function () {
    setTimeout(function () {
        document.getElementById('reservation_page').style.display = 'none'
    }, 1000)

})