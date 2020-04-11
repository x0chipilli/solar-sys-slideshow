const carouselContainer = document.querySelector('.carousel-container')
const imgCarousel = document.querySelector('.img-carousel')
const carouselImages = document.querySelectorAll('.img-carousel img')
//buttons
const buttons = document.querySelectorAll('.buttons div')
//initial setup
let count = 1
var size = carouselImages[0].clientWidth
imgCarousel.style.transform = `translateX(${-size*count}px)`
buttons[count-1].classList.add('active-btn')

//contemplate responsiveness 4 the img size
window.addEventListener('resize', ()=>{
  size = carouselImages[0].clientWidth
  imgCarousel.style.transform = `translateX(${-size*count}px)`
})

//automatic img display
setInterval(()=>{
  if (count >= carouselImages.length-1) return;
  count++
  imgCarousel.style.transition = 'transform 0.3s ease-in-out'
  imgCarousel.style.transform = `translateX(${-size*count}px)`
  //buttn change
  buttons[count-2].classList.remove('active-btn')
  buttons[count-1].classList.add('active-btn')
}, 4000)

//check if the carousel has come to its end, if it does it, loop back
imgCarousel.addEventListener('transitionend', ()=>{
  if (carouselImages[count].id == 'firstClone'){
    imgCarousel.style.transition = 'none'
    count = carouselImages.length - count
    imgCarousel.style.transform = `translateX(${-size*count}px)`
    //button change
    buttons[0].classList.add('active-btn')
  }
}) 

//select img manually tru buttons
buttons.forEach( btn =>{
  btn.addEventListener('click', (e)=>{
    for(let i = 0; i < buttons.length; i++){
      //remove active mode of every button
      buttons[i].classList.remove('active-btn')
      //add active mode of button selected and go to the img 
      if(e.target == buttons[i]){
        count = i+1
        imgCarousel.style.transform = `translateX(${-size*count}px)`
        buttons[i].classList.add('active-btn')
      }
    }
  })
})