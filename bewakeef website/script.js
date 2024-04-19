// Fist Images Sliders

let images = document.querySelector('.containers1');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

right.addEventListener('click',() => {
    images.style.scrollBehavior = "smooth";
    images.scrollLeft += 380;
});
left.addEventListener('click',() => {
    images.style.scrollBehavior = "smooth";
    images.scrollLeft -= 380;
})

             // Second Images SLider

let images2 = document.querySelector('.containers2');
let left2 = document.querySelector('.left2');
let right2 = document.querySelector('.right2');

right2.addEventListener('click',() => {
    images2.style.scrollBehavior = "smooth";
    images2.scrollLeft += 280;
});
left2.addEventListener('click',() => {
    images2.style.scrollBehavior = "smooth";
    images2.scrollLeft -= 280;
})
             
            //   Thirds Images Sliders        


let images3 = document.querySelector('.containers3');
let left3 = document.querySelector('.left3');
let right3 = document.querySelector('.right3');

right3.addEventListener('click',() => {
    images3.style.scrollBehavior = "smooth";
    images3.scrollLeft += 380;
});
left3.addEventListener('click',() => {
    images3.style.scrollBehavior = "smooth";
    images3.scrollLeft -= 380;
})           



let imagesContainer = document.querySelector('.imagesContainer');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');

    prev.addEventListener("click",function(){
        imagesContainer.style.scrollBehavior = "smooth";
        imagesContainer.scrollLeft -= 1224;
    })

    next.addEventListener("click",function(){
        imagesContainer.style.scrollBehavior = "smooth";
        imagesContainer.scrollLeft += 1224;
    })
