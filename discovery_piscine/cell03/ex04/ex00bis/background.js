(function( $ ){
    $.fn.changeColor = function() {
        const min = 0;
        const max = 255;

        const r1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const r2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const r3 = Math.floor(Math.random() * (max - min + 1)) + min;
        const color = `rgb(${r1},${r2},${r3})`;

        this.css('background-color', color);
    }; 
 })( jQuery );

$(document).ready(function() {
    $('.changeColor').click(function() {
        $('body').changeColor();
    });
});