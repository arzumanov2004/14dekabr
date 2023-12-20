const div = document.getElementById('myDiv')

function getBasket() {
    div.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) => {
        const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
            <button onclick="removeFromCart(${index})">Delete</button>
            `;
            div.appendChild(box);
    });
};
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart));
    getBasket()
};
window.onload = () =>{
    getBasket()
}