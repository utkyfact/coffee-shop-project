const carousel = document.getElementById('carousel')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

// SLIDER
let currentIndex = 0
let childrenLength = carousel.children.length
let oneSlideWidth = carousel.children[0].clientWidth

function visibleSlide(){
    const screenWidth = window.innerWidth
    
    if(screenWidth < 640 ){
        return 1
    }else if(screenWidth <1024 ){
        return 2
    }else if(screenWidth < 1536){
        return 3
    }else if(screenWidth <= 1920){
        return 4
    }
    return 5
}


window.addEventListener('resize',visibleSlide)



prev.addEventListener('click',function(){
    if(currentIndex > 0 ){
        currentIndex--
    }else{
        currentIndex = carousel.children.length-1
    }
    slideCarousel(currentIndex)
})

next.addEventListener('click',function(){
    if(currentIndex < childrenLength - visibleSlide()  ){
        currentIndex++
    }else{
        currentIndex = 0
    }
    slideCarousel(currentIndex)
})

function slideCarousel(currentIndex){
    console.log(currentIndex);
    
    carousel.style.transform = `translateX(-${currentIndex * oneSlideWidth}px)`;
}