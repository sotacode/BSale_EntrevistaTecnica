import { divs } from "./components/card";
import { filtrar, sortProducts } from "./components/filters";



buttonSearch.addEventListener('click', filtrar)
const enterClick = (e)=>{
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
        buttonSearch.click();
    }
}



const eventChangeOrder = (e)=>{
    document.querySelector('#content').innerHTML = '';
    divs.sort(sortProducts);
    const content = document.querySelector('#content')
    divs.map( div => {
        /* console.log(div.innerText) */
        content.appendChild(div[0]);
    } )
}




export{
    enterClick,
    eventChangeOrder
}