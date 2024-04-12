const powerDivision = 12;

function updateBackgroundPosition(xPercent, yPercent, pageX, pageY) {
    const transform = 'translate(' + (xPercent / powerDivision - (50 / powerDivision) - 50) + '%,' + (yPercent / powerDivision - (50 / powerDivision) - 50) + '%)';

    for (let index = 0; index < planets.length; index++) {
        const planet = planets[index];
        // const planetRect = planet.getBoundingClientRect();
        // let center = {
        //     x: planetRect.left + planetRect.width / 2, 
        //     y: planetRect.top + planetRect.height / 2
        // };

        // let angle = Math.atan2(pageX - center.x, - (pageY - center.y)) * (180 / Math.PI);      

        planet.style.transform = 'rotate(' + (xPercent * (yPercent / 4) / 50) + 'deg)';
    }

    backgroundDiv.style.transform = transform;
}

window.onload = function() {
    window.backgroundDiv = document.querySelector('.stars');
    window.planets = document.querySelectorAll('.planet');

    window.onmousemove = function(event) {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        xPercent = parseInt(event.pageX / vw * 100);
        yPercent = parseInt(event.pageY / vh * 100);

        updateBackgroundPosition(xPercent, yPercent, event.pageX, event.pageY);
    }
}