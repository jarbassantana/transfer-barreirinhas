export default function initCalendar() {
    calendarSelect()
}

function calendarSelect() {
    const buttonsNum = document.querySelectorAll('.date-grid button')
    buttonsNum.forEach(button => {
        button.addEventListener('click', event => {
            removeSelect()
            event.currentTarget.classList.add('rs-active')
        })
    })
}

function removeSelect() {
    const buttonsNum = document.querySelectorAll('.date-grid button')
    buttonsNum.forEach(button => {
        button.classList.remove('rs-active')
    })
}
