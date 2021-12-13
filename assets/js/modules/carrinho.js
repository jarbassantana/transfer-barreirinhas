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
    const variaveisFunc = {
        progressBar: document.querySelector('.border-progress-bar'),
        checkList: document.querySelector('.border-progress-bar'),
        formContainer: document.querySelector('.cart-form-container'),
        cartContainer: document.querySelector('.cart-confirm-container'),
        infoPeople: document.querySelector('.edit-cart-container'),
        btnPrimary: document.getElementById('cart-salvar'),
        btnPagamento: document.getElementById('pagamento')
    }
    if (variaveisFunc) {
        variaveisFunc.formContainer.style.display = 'none'
        variaveisFunc.infoPeople.classList.add('add-edit')
        variaveisFunc.btnPrimary.style.display = 'none'
        variaveisFunc.btnPagamento.style.display = 'flex'
        variaveisFunc.cartContainer.style.justifyContent = 'space-between'
        variaveisFunc.cartContainer.style.paddingTop = '0'
        variaveisFunc.progressBar.classList.add('active')
        setInterval(() => {
            variaveisFunc.checkList.classList.add('active')
        }, 600)
    }
}
