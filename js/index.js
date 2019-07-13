// Mouseover Event

const header = document.querySelector('.intro h2');

header.addEventListener('mouseover', (event) => {
    event.target.style.color = 'purple';
})



//Keydown

document.addEventListener('keydown', logsKey);


function logsKey(e) {
    console.log(`${e.code}`);
}


//Wheel

function zoomIn(event) {
    event.preventDefault();

    scale += event.deltaY * -.01;

    //Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);

    //Apply scale transform
    img1.style.transform = `scale(${scale})`;

}

let scale = 1;

const img1 = document.querySelector('div.destination');

// img1.onwheel = zoomIn;


img1.addEventListener('wheel', zoomIn);




























// // Your code goes here


// // Mouseover -- This will be executed when the mouse is 
// // over the ADVENTURE AWAITS text

// const mouseOver1 = document.querySelector('.inverse-content .text-content p');

// mouseOver1.addEventListener('mouseover', function(event) {
//     mouseOver1.style.color = 'orange';

//     setTimeout(function() {
//         mouseOver1.style.color = "";
//     }, 600);
// }, false);





// // Keydown

// const container = document.querySelector('.container');


// document.addEventListener('keydown', logKey);

// function logKey(e) {
//     console.log(e);
// }



// // Wheel

// // const makeBigger = document.querySelector('.destination');



// function zoom(wheel) {
//     wheel.preventDefault();

//     scale += wheel.deltaY * -0.01;

//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);

//     // Apply scale transform
//     makeBigger.style.transform = `scale(${scale})`;
// }

// let scale = 1;
// // const el1 = document.querySelector('.destination');
// makeBigger.onwheel = zoom;



// // dbclick


// const card = document.querySelectorAll('.expand');

// card.addEventListener('dblclick', () => {
//     card.classList.toggle('large');
// })