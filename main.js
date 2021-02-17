const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");

// prev.addEventListener('click', ()=>{
//     console.log('clicked');
// });

function display(){
    slides.forEach(slide=>{
        slide.style.display='none';
    });
 slides[index].style.display='flex';
}

let index= 0;

function nextSlide(){
    index++;
    if (index > slides.length - 1){
        index = 0;
    }
    display();
}


function prevSlide(){
    index--;
    if (index < 0){
        index = slides.length-1;
    }
    display();
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

display();