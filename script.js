const menuItems = {
    pizza: 80,
    hamburguesa: 30,
    tacos: 25,
    soda: 8,
    cerveza: 10,
    cafe: 5
};

const pedidoList = document.getElementById('pedido-list');
const totalElement = document.getElementById('total');

let total = 0;
let pedidoActual = [];

function actualizarTotal() {
    totalElement.textContent = total.toFixed(2);
}

function agregarPedido(item, precio) {
    pedidoActual.push({ item, precio });
    const listItem = document.createElement('li');
    listItem.textContent = `${item}: $${precio.toFixed(2)}`;
    pedidoList.appendChild(listItem);
    total += precio;
    actualizarTotal();
}

Object.keys(menuItems).forEach(item => {
    const button = document.getElementById(item);
    button.addEventListener('click', () => {
        agregarPedido(item, menuItems[item]);
    });
});

const agregarButton = document.getElementById('agregar');
agregarButton.addEventListener('click', () => {
    pedidoActual = [];
    pedidoList.innerHTML = '';
    total = 0;
    actualizarTotal();
});
