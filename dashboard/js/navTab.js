function activeTab(index) {
    removeTab()
    const tabContent = document.querySelectorAll('.js-tabcontent')
    tabContent[index].classList.add('ativo')
}

function removeTab() {
    const tabContent = document.querySelectorAll('.js-tabcontent')
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    tabContent.forEach(item => {
        item.classList.remove('ativo')
    })
    tabMenu.forEach(itemMenu => {
        itemMenu.classList.remove('active')
    })
}
function handleMenu() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    if (tabMenu) {
        tabMenu.forEach(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('pedidos')) {
                    removeTab()
                    activeTab(0)
                    item.classList.add('active')
                } else if (item.classList.contains('reservas')) {
                    removeTab()
                    activeTab(1)
                    item.classList.add('active')
                } else {
                    removeTab()
                    item.classList.add('active')
                }
            })
        })
    }
}

handleMenu()
