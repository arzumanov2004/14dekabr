const div = document.getElementById('myDiv')
const btn = document.getElementById('btn')
const search = document.getElementById('search')
const inp = document.getElementById('inp')
const searchByName = document.getElementById('searchByName')

let page = 1
let limit = 16

async function getProducts() {
    let skip = (page - 1) * limit
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`)
        const data = response.data
        db = data
        db.forEach(item => {
            const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
            <button onclick="adToBasket(${item.id})">Ad To Cart</button>
            `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    };
};

btn.addEventListener('click', getProducts)

function adToBasket(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

function searchh() {
    div.style.display = 'none'
    searchByName.style.display = 'block'

    axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products`)
        .then(res => {
            db = res.data
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
            console.log(filteredData);
            filteredData.map(item => {
                const box = document.createElement('div')
                box.className = 'myBox col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12'
                box.innerHTML = `
            <img src="${item.image}" alt="">
            <h5>${item.name}</h5>
            <p>${item.title}</p>
            `;
                searchByName.appendChild(box);
            });
        });
};

search.addEventListener('click', searchh)
window.onload = () => {
    getProducts()
}
