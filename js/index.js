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




// scale btn

const img1 = document.querySelectorAll('.content-pick .btn');

img1.forEach((imgs) => {
    imgs.addEventListener('wheel', (e) => {
        scale += event.deltaY * -.01;

        //Restrict scale
        scale = Math.min(Math.max(.125, scale), 4);

        //Apply scale transform
        e.target.style.transform = `scale(${scale})`;

    })

})

let scale = 1;




// Resize

const height = document.querySelector('.heightEvent')
const width = document.querySelector('.widthEvent')

function screenSize() {
    height.textContent = window.innerHeight;
    width.textContent = window.innerWidth
}


window.onresize = screenSize;





// dbclick

const imgToggle = document.querySelectorAll('.content-section img');



imgToggle.forEach((imgs) => {
    imgs.addEventListener('dblclick', (e) => {
        e.target.classList.toggle('large');
    });
})


// change event

const selectingEvent = document.querySelector('.destinationA');


selectingEvent.addEventListener('change', (e) => {
    const result = document.querySelector('.result')
    result.textContent = `You're traveling to ${event.target.value}`;
})



//stop propagation

const letsgo = document.querySelector('.text-content');

letsgo.addEventListener('mouseover', (e) => {
    e.target.style.color = 'blue';
})


const letsgop = document.querySelector('.text-content p');

letsgop.addEventListener('mouseover', (e) => {
    event.stopPropagation();
    e.target.style.color = 'green';
})



























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