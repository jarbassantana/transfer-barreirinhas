export default function initModal() {
    handleClick()
}

function handleClick() {
    const videoModal = document.querySelector('.tours-content-video')
    const closeModal = document.getElementById('close-modal')
    videoModal.addEventListener('click', activeModal)
    closeModal.addEventListener('click', removeModal)
}

function activeModal(event) {
    event.preventDefault()
    const modal = document.querySelector('.modal-container')
    if (modal) {
        modal.classList.add('active-modal')
    }
}

function removeModal(event) {
    event.preventDefault()
    const modal = document.querySelector('.modal-container')
    if (modal) {
        modal.classList.remove('active-modal')
        modal.querySelector('iframe').src = ''
    }
}
