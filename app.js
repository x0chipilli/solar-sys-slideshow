const carouselContainer = document.querySelector('.carousel-container')
const imgCarousel = document.querySelector('.img-carousel')
const carouselImages = document.querySelectorAll('.img-carousel img')
//buttons
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
//initial setup
let count = 1
var size = carouselImages[0].clientWidth
imgCarousel.style.transform = `translateX(${-size*count}px)`

//contemplate responsiveness 4 the img size
window.addEventListener('resize', ()=>{
  size = carouselImages[0].clientWidth
  imgCarousel.style.transform = `translateX(${-size*count}px)`
})

prevBtn.addEventListener('click', ()=>{
  if(count <= 0) return;
  imgCarousel.style.transition = 'transform 0.3s ease-in-out'
  count--
  imgCarousel.style.transform = `translateX(${-size*count}px)`
})

nextBtn.addEventListener('click', ()=>{
  if(count >= carouselImages.length - 1) return;
  imgCarousel.style.transition = 'transform 0.3s ease-in-out'
  count++
  imgCarousel.style.transform = `translateX(${-size*count}px)`
})

imgCarousel.addEventListener('transitionend', ()=>{
  if (carouselImages[count].id == 'lastClone'){
    imgCarousel.style.transition = 'none'
    count = carouselImages.length - 2
    imgCarousel.style.transform = `translateX(${-size*count}px)`
  }

  if (carouselImages[count].id == 'firstClone'){
    imgCarousel.style.transition = 'none'
    count = carouselImages.length - count
    imgCarousel.style.transform = `translateX(${-size*count}px)`
  }
}) 
