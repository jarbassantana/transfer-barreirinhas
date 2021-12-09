export default function initAdultQuantity() {
    adultDataDecrease()
    adultDataIncrease()
}

function adultDataDecrease() {
    const adultMinus = document.getElementById('adult-minus')
    if (adultMinus) {
        adultMinus.addEventListener('click', initAdultDecrease)
    }
}
function adultDataIncrease() {
    const adultPlus = document.getElementById('adult-plus')
    if (adultPlus) {
        adultPlus.addEventListener('click', initAdultIncrease)
    }
}

function initAdultDecrease(event) {
    event.preventDefault()
    const input = document.getElementById('adult-input')
    let rmv = input.value
    if (+rmv === 1) {
        input.value = 1
    } else {
        input.value = rmv - 1
    }
}

function initAdultIncrease(event) {
    event.preventDefault()
    const input = document.getElementById('adult-input')
    let add = input.value
    input.value = +add + 1
}
