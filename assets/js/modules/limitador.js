export default function initLimitador() {
    limitedParagraph()
}

function limitedParagraph() {
    const paragraph = document.querySelectorAll('.br-passeio-paragrafo')
    if (paragraph) {
        paragraph.forEach(text => {
            let paragraphSub = text.innerHTML.substr(0, 300) + '...'
            text.innerHTML = paragraphSub
        })
    }
}
