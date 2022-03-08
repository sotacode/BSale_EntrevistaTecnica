/* import { eventChangeCategory } from "../events"; */
import { obtenerProductos } from "../provider/http-provider";
import { crearCards, divs } from "./card";


const categorias = [];
const search = document.querySelector('#inputSearch');
const order = document.querySelector('#select');


const eventChangeCategory = (e)=>{
    document.querySelector('#content').innerHTML = '';
    const content = document.querySelector('#content')
    divs.map( div => {
        const card = document.getElementById(div[1].toString());
        if (card!=null && card.checked){
            content.appendChild(div[0]);
        }    
    } )
    if (content.innerHTML == ''){
        divs.map( div => {
            content.appendChild(div[0]);
        } )
    }
}

const updateFilter = (products)=>{
    let newCategorys = [];
    products.map(prod =>{
        if(!newCategorys.includes(prod.category)){
            categorias.map( obj => {
                if (obj.id == prod.category && !newCategorys.includes(obj)){
                    newCategorys.push(obj);
                }
            })
        }
    })
    const lateral = document.querySelector('#lateral');

    /* const titleFilterCategory = document.createElement('h3');
    titleFilterCategory.innerText = 'Categorias';
    lateral.appendChild(titleFilterCategory); */

    const divFilterCategory = document.querySelector('.filtercategory');
    divFilterCategory.innerHTML = '';

    newCategorys.map(category => {
        const divCategory = document.createElement('div');
        divCategory.className= 'container';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'categoria';
        checkbox.value = category.name;
        checkbox.id = category.id.toString();
        checkbox.onchange = eventChangeCategory;
        

        var label = document.createElement('label');
        label.htmlFor = "id";
        label.innerText = category.name;

        divCategory.appendChild(checkbox);
        divCategory.appendChild(label);
        divFilterCategory.appendChild(divCategory);
    })
    lateral.appendChild(divFilterCategory);
}

const filtrar = () => {
    document.querySelector('#content').innerHTML = '';
    document.querySelector('#content').innerHTML = `<h1 id='cargando'> Cargando productos </h1>`;
    
    obtenerProductos(search.value.toLowerCase()).then((resp) => {
        crearCards(resp);
        updateFilter(resp)
    })
}

const sortProducts = (a, b) => {
    a = a[0];
    b = b[0];
    let aoriginal = a.innerText.split(/\$/)[1];
    let adescount = a.innerText.split(/\$/)[2];
    let pricea;
    if (aoriginal.includes("Comprar")) {
        pricea = Number(aoriginal.split("C")[0]);
    } else {
        pricea = Number(adescount.split("C")[0]);
    }

    let boriginal = b.innerText.split(/\$/)[1];
    let bdescount = b.innerText.split(/\$/)[2];
    let priceb;
    if (boriginal.includes("Comprar")) {
        priceb = Number(boriginal.split("C")[0]);
    } else {
        priceb = Number(bdescount.split("C")[0]);
    }

    if (order.value == 'mayor'){
        if (pricea < priceb) {
            return 1;
        }
        if (pricea > priceb) {
            return -1;
        }
        return 0;
    }else if (order.value == 'menor'){
        if (pricea > priceb) {
            return 1;
        }
        if (pricea < priceb) {
            return -1;
        }
        return 0;
    }
    return 0;
}

export {
    filtrar,
    search,
    order,
    sortProducts,
    categorias,
    eventChangeCategory
}