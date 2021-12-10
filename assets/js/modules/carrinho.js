export default function initCarrinho() {
    grabButton()
}

function grabButton() {
    const btnPrimary = document.getElementById('cart-salvar')
    if (btnPrimary) {
        btnPrimary.addEventListener('click', handleClick)
    }
}

function handleClick(event) {
    event.preventDefault()
    const progressBar = document.querySelector('.border-progress-bar')
    const checkList = document.querySelector('.checklist-2')
    const formContainer = document.querySelector('.cart-form-container')
    const cartContainer = document.querySelector('.cart-confirm-container')
    const infoPeople = document.querySelector('.edit-cart-container')
    const btnPrimary = document.getElementById('cart-salvar')
    const btnPagamento = document.getElementById('pagamento')

    formContainer.style.display = 'none'

    infoPeople.classList.add('add-edit')
    btnPrimary.style.display = 'none'
    btnPagamento.style.display = 'flex'
    cartContainer.style.justifyContent = 'space-between'
    cartContainer.style.paddingTop = '0'
    progressBar.classList.add('active')
    setInterval(() => {
        checkList.classList.add('active')
    }, 600)
}
