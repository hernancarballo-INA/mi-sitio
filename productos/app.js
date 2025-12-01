import prodOfertas from "./productos.js"

window.onload =() =>{



let ofertas = document.getElementById("oferta")
prodOfertas.forEach(oferta => {
    ofertas.innerHTML += ` <article class="card">
            <h4> Producto: ${oferta.nombre}</h4>
            <img class="imagen" src="${oferta.imagen}">
            <p>Estado: ${oferta.estado}</p>
            <p> Disponibilidad: ${oferta.disponible}</p>
            <p> Precio: ${oferta.valor}</p>
            <p> Precio de Oferta: ${oferta.valorDescuento}</p>
            
        </article>`
        
})

}