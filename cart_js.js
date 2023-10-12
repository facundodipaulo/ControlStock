const tabla = document.getElementById("tabla")
const btn = document.getElementById("btn")

tabla.innerHTML=`
                <tr>
                    <td class="producto">${data}</td>
                    <td class="precio">${data}</td>
                    <td class="cantidad">
                        <input type="number" value="2" min="1">
                    </td>
                        <td class="total">${data}</td>
                </tr>`