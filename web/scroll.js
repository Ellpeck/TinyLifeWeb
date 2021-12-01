let x = Math.random() * 100;
let y = Math.random() * 100;

let angle = Math.random() * 2 * Math.PI;
let addX = Math.cos(angle) * 0.02;
let addY = Math.sin(angle) * 0.02;

let background = $(".top");
background.css("background-position", `${x}% ${y}%`);
setInterval(function () {
    x += addX;
    y += addY;
    if (x < 0 || x > 100)
        addX *= -1;
    if (y < 0 || y > 100)
        addY *= -1;
    background.css("background-position", `${x}% ${y}%`);
}, 30);