let pic = document.getElementById('music');
console.log(pic);

let counter = 0;

document.getElementById('butt').addEventListener('click', change);

function change() {
    counter++;

    if (counter === 5) counter = 0;

    if (counter === 0) pic.src = "mu1.jpg";
    else if (counter === 1) pic.src = "mu2.jpg";
    else if (counter === 2) pic.src = "mu3.jpg";
    else if (counter === 3) pic.src = "mu4.jpg";
    else if (counter === 4) pic.src = "mu5.jpg";
    else return;
}