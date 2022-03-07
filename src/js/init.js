import { crearCards } from "./components/card";
import { search } from "./components/search";
import { enterClick } from "./events";
import { obtenerProductos } from "./provider/http-provider";

const init = () => {

    document.body.style.backgroundImage = "url(./assets/img/pattern.png)"
    document.querySelector('#content').innerHTML = `<h1 id='cargando'> Cargando productos </h1>`
    
    search.onkeypress = function(event) {
        enterClick(event);
    }
    
    obtenerProductos(search.value.toLowerCase()).then( (resp) => {
        crearCards(resp)
    });
}

export {
    init
}