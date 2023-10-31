// Nagivation menu 
const menuIcon = document.querySelector('#menuIcon')
const navLinks = document.querySelector(".navbar__links");

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    menuIcon.classList.toggle('bx-x')
})

// Event Counter
const eventNumber = document.querySelectorAll('.event__number')
const interval = 4000
eventNumber.forEach(num => {
    let startValue = 0
    let endValue = parseInt(num.getAttribute('data-value'))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(() => {
        startValue++
        num.textContent = startValue
        if(startValue === endValue){
            clearInterval(counter)
        }
    }, duration)
})

// ScrollBar Visibility
// window.addEventListener('scroll', () => {
//     // Height of viewport
//     let viewPortHeight = window.innerHeight
//     // Get current scroll position
//     let scrollPosition = document.documentElement.scrollTop
//     // set Threshold height to show/hide the scrollbar (80vh)
//     let thresholdHeight = viewPortHeight * 0.8

// })
