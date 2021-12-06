export default function menuMobile() {
    const showMenu = document.querySelector('#bx')

    showMenu.addEventListener('click', initMenuMobile)
}

function initMenuMobile(event) {
    event.preventDefault()
    const showMenu = document.querySelector('#bx')
    const menuMobile = document.getElementById('menu-mobile')
    showMenu.classList.toggle('active-bx')
    menuMobile.classList.toggle('active-menu-mobile')
}
