export default function initScrollHome() {
    const btnScrollHome = document.querySelector('.btn-ScrollInitial')
    if (btnScrollHome) {
        btnScrollHome.addEventListener('click', scrollHome)
    }
}

function initalScroll() {
    window.addEventListener('scroll', detectScroll)
}

function detectScroll(event) {
    const btnScrollHome = document.querySelector('.btn-ScrollInitial')
    const scrollY = window.pageYOffset
    if (scrollY >= 200) {
        btnScrollHome.classList.add('active')
    } else if (scrollY <= 0) {
        btnScrollHome.classList.remove('active')
    }
}
function scrollHome(event) {
    event.preventDefault()
    const headerHome = document.getElementById('home')
    window.scrollTo({
        top: headerHome,
        behavior: 'smooth'
    })
}

initalScroll()
