function showMenu() {
    const showMenu = document.querySelector('#bx')
    if (showMenu) {
        showMenu.addEventListener('click', initMenuMobile)
    }
}

function initMenuMobile(event) {
    event.preventDefault()
    const showMenu = document.querySelector('#bx')
    const menuMobile = document.getElementById('menu-mobile')
    showMenu.classList.toggle('active-bx')
    menuMobile.classList.toggle('active-menu-mobile')
}
showMenu()
