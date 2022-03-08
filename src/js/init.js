import { crearCards } from "./components/card";
import { order, search } from "./components/filters";
import { enterClick } from "./events";
import { obtenerCategorias, obtenerProductos } from "./provider/http-provider";
import { eventChangeOrder } from "./events";
import { crearFiltroCategoria } from "./components/lateral";

const init = () => {

    document.body.style.backgroundImage = "url(./assets/img/pattern.png)";
    document.querySelector('#content').innerHTML = `<h1 id='cargando'> Cargando productos </h1>`;
    order.onchange = eventChangeOrder;
        
    search.onkeypress = function(event) {
        enterClick(event);
    }
    
    obtenerProductos(search.value.toLowerCase()).then( (resp) => {
        crearCards(resp);
    });
    obtenerCategorias().then( resp => {
        crearFiltroCategoria(resp);
    });
}

export {
    init
}