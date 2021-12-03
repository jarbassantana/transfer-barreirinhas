const scrollBtn = document.querySelector(
    '.scroll-bottom-container a[href^="#"]'
)
function initMenuMobile(event) {
    const showMenu = document.getElementById('bx')
    const menuMobile = document.getElementById('menu-mobile')
    showMenu.addEventListener(event, () => {
        showMenu.classList.toggle('active-bx')
        menuMobile.classList.toggle('active-menu-mobile')
    })
}

function initScrollTop(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const topo = section.offsetTop
    window.scrollTo({
        top: topo,
        behavior: 'smooth'
    })
}
scrollBtn.addEventListener('click', initScrollTop)

initMenuMobile('click')
