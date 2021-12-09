export default function initScroll() {
    const scrollBtn = document.querySelector(
        '.scroll-bottom-container a[href^="#"]'
    )
    if (scrollBtn) {
        scrollBtn.addEventListener('click', initScrollTop)
    }
}
function initScrollTop(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    console.log(href)
    const section = document.querySelector(href)
    const topo = section.offsetTop
    window.scrollTo({
        top: topo,
        behavior: 'smooth'
    })
}
