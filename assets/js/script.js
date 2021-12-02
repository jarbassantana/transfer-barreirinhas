// MENU MOBILE
// function MenuMobile() {
//     const showMenu = document.getElementById('bx')
//     showMenu.
// }

function initMenuMobile(event) {
    const showMenu = document.getElementById('bx')
    const menuMobile = document.getElementById('menu-mobile')
    showMenu.addEventListener(event, () => {
        showMenu.classList.toggle('active-bx')
        menuMobile.classList.toggle('active-menu-mobile')
    })
}

function verifiedClass() {
    const menuMobile = document.getElementById('menu-mobile')
    const classContain = menuMobile.classList.contains('active-menu-mobile')
    if (classContain && window.innerWidth > 1290) {
        menuMobile.classList.remove('active-menu-mobile')
    }
}

initMenuMobile('click')
