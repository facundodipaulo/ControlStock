const cartBtn = document.getElementById("btn");
//const input = document.getElementsByClassName("inputCant");




document.addEventListener('DOMContentLoaded', function () {

    //Declaración de constantes y variables
    const cont1 = document.getElementById("container");
    const url = "data.json"


    fetch(url)
    .then(response => response.json())
    .then(data => {

        

        data.forEach(articulo => {

            cont1.innerHTML += `
            <div class="cont">          
                <div class="card">
                    <div class="content">
                        <p class="heading">${articulo.nombre}</p>
                        <p class="stock text-end">${articulo.stock} artículos</p>
                        <p class="info">${articulo.descripcion}</p>
                        <p class="costo">${articulo.tipo_moneda} ${articulo.costo}</p>
                        <input type="number" class="inputCant" min="1" required>
                        <button class="btn" onclick="agregarAlCarrito('${articulo.nombre}', ${articulo.stock}, ${articulo.tipo_moneda}, ${articulo.costo}, this)">Agregar al Carrito</button>
            </div>
                </div>
                     </div>
            `

        });


        



    })

    cartBtn.addEventListener("click", function() {




        window.location.href = "cart.html";

    })


});

function limpiar() {
    cantidad = "0";
    nombreLadrillo = "";
    stockLadrillo = "";
    monedaLadrillo = "";
    costoLadrillo = "";
    nuevoStockLadrillo = "";
};

let stockLadrillo;
let nuevoStockLadrillo;



const stocks = {}; // Objeto para almacenar los stocks de cada artículo

function agregarAlCarrito(nombre, stock, moneda, costo, elementoBtn) {
    const cantidadInput = elementoBtn.previousElementSibling;
    let cantidad = parseInt(cantidadInput.value);
    let nombreLadrillo = nombre;

    if (!stocks[nombreLadrillo]) {
        stocks[nombreLadrillo] = stock; // Inicializa el stock para este artículo
    } 

    if (cantidad <= 0) {
        alert("Ingresa una cantidad válida");
        return; // Sale de la función si la cantidad es 0 o negativa
    }

    if (cantidad > stocks[nombreLadrillo]) {
        alert("No hay suficientes productos disponibles");
        return; // Sale de la función si no hay suficiente stock
    }

    stocks[nombreLadrillo] -= cantidad; // Actualiza el stock en el objeto

    // Actualiza el stock en la interfaz
    const stockElement = elementoBtn.parentElement.querySelector(".stock");
    stockElement.textContent = `${stocks[nombreLadrillo]} artículos`;

    console.log(nombreLadrillo);
    console.log(moneda);
    console.log(costo);
    console.log(cantidad);
    limpiar();
}




