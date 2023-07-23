const h1 = document.querySelector('h1');

function testFun() {
const para = document.createElement('p');
para.style.color = 'white';
para.textContent = 'I am alive! ';
h1.appendChild(para);
}

h1.addEventListener('click', testFun);