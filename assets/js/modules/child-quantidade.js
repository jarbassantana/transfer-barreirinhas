export default function initChildQuantity() {
    childDataDecrease()
    childDataIncrease()
}

function childDataDecrease() {
    const adultMinus = document.getElementById('child-minus')
    if (adultMinus) {
        adultMinus.addEventListener('click', initAdultDecrease)
    }
}
function childDataIncrease() {
    const adultPlus = document.getElementById('child-plus')
    if (adultPlus) {
        adultPlus.addEventListener('click', initAdultIncrease)
    }
}

function initAdultDecrease(event) {
    event.preventDefault()
    const input = document.getElementById('child-input')
    let rmv = input.value
    if (+rmv === 0) {
        input.value = 0
    } else {
        input.value = rmv - 1
    }
}

function initAdultIncrease(event) {
    event.preventDefault()
    const input = document.getElementById('child-input')
    let add = input.value
    input.value = +add + 1
}
