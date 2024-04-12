
// Function to get scroll percentage, supported on every browser and mobile.
// May not reach 100% on some mobile devices.
function getScrollPercentage() {
    // Defining html and body variables, and string variables for the names of scrollTop and scrollHeight.
    const html = document.documentElement, 
    body = document.body,
    scrollTop = 'scrollTop',
    scrollHeight = 'scrollHeight';

    // Retrieving the scroll position using the html, otherwise falling back to the body in case of old browser versions.
    const scrollPosition = html[scrollTop] || body[scrollTop];
    // Getting the total scrollable height of the html, and falling back to the total scrollable height of the body in case of old browser versions.
    const totalScrollableHeight = html[scrollHeight] || body[scrollHeight];

    // Getting the height of the visible part of the webpage.
    const viewportHeight = html.clientHeight;

    // Getting scroll percentage
    const scrollPercentage = 
    (scrollPosition / (totalScrollableHeight - viewportHeight)) * 100;

    return scrollPercentage; // Returning the scroll percentage
}

window.onload = function() {
    const background = document.querySelector('.background');
    const backgroundOverlay = background.querySelector('.backgroundOverlay');

    document.onscroll = function() {
        const scrollPercentage = getScrollPercentage();

        const newOpacity = 0.6 - (scrollPercentage / 100 / 1.5);

        console.log('op', newOpacity)

        backgroundOverlay.style.setProperty('--opacity', newOpacity);
    }
}