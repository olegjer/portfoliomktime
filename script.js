const footerEl = document.querySelector('.footer')
const footerBTN = document.querySelector('.footer__btn')
console.log(footerEl)

footerBTN.onclick = function () {
    footerEl.innerHTML = 'Привет'
}
