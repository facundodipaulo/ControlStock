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
                        <button class="btn" onclick="agregarAlCarrito('${articulo.nombre}', ${articulo.stock})">Agregar al Carrito</button>
            </div>
                </div>
                     </div>
            `

        });

        function agregarAlCarrito(nombre, stock) {
            const cantidadInput = document.querySelector(".inputCant");
            const cantidad = cantidadInput.value;
            const nombreLadrillo = nombre;
            const stockLadrillo = stock - cantidad;
            console.log(nombreLadrillo);
            console.log(stockLadrillo);
        }



    })


});