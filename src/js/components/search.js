import { obtenerProductos } from "../provider/http-provider";
import { crearCards } from "./card";

const search = document.querySelector('#inputSearch');



const filtrar = ()=>{
    document.querySelector('#content').innerHTML = '';
    document.querySelector('#content').innerHTML = `<h1 id='cargando'> Cargando productos </h1>`
    obtenerProductos(search.value.toLowerCase()).then( (resp) => {
        crearCards(resp);
    })
}

/* const enterClick = (e)=>{
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        buttonSearch.click();
    }
} */


export {
    filtrar,
    search
}