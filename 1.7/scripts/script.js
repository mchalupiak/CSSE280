const h1 = document.querySelector('h1');
const p = document.createElement('p');
setTimeout(() => {
    h1.parentElement.removeChild(h1);
    p.textContent = 'Wildcard!';
    document.body.appendChild(p);
}, 5000);
