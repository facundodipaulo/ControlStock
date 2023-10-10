document.addEventListener('DOMContentLoaded', function () {

    //Declaración de constantes y variables
    const cont1 = document.getElementById("container");
    const url = "data.json"


    fetch(url)
    .then(response => response.json())
    .then(data => {

        function agregarAlCarrito(nombre, stock) {
            const cantidadInput = document.querySelector(".inputCant");
            const cantidad = cantidadInput.value;
            const nombreLadrillo = nombre;
            const stockLadrillo = stock - cantidad;
            console.log(nombreLadrillo);
            console.log(stockLadrillo);
        }

        


        data.forEach(articulo => {

            cont1.innerHTML += `
            <div class="articulo"
            <div class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col">
                        <div class="justify-content-between">
                            <h4 class="mb-1">${articulo.nombre}</h4>
                            <small>${articulo.stock} artículos</small>
                        </div>
                        <p class="mb-1">${articulo.descripcion}</p> <p class="mb-1">${articulo.tipo_moneda + " " + articulo.costo}</p>
                        <form>
                        <button type="button" onclick="agregarAlCarrito('${articulo.nombre}', ${articulo.stock})" id="agregar" class="btn btn-primary">Agregar al Carrito</button>
                        <input type="number" class="inputCant" min="1" required>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            `

        });

        



    })


});