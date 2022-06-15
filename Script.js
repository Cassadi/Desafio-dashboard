var btn1 = document.querySelector('.dados1');
var btn2 = document.querySelector('.dados2');
var btn3 = document.querySelector('.dados3');
var div1 = document.querySelector('#tabela1');
var div2 = document.querySelector('#tabela2');
var div3 = document.querySelector('#tabela3');

btn1.addEventListener('click', function () {
    div1.style.display = 'block'
    div2.style.display = 'none'
    div3.style.display = 'none'
})

btn2.addEventListener('click', function () {
    div1.style.display = 'none'
    div2.style.display = 'block'
    div3.style.display = 'none'
})

btn3.addEventListener('click', function () {
    div1.style.display = 'none'
    div2.style.display = 'none'
    div3.style.display = 'block'
})
