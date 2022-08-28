const slides = document.querySelectorAll('.slide__item')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveSlide()

        slide.classList.add('active')
    })
})

function clearActiveSlide () {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}