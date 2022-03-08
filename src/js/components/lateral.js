
import {categorias, eventChangeCategory} from './filters'



const crearFiltroCategoria = (categorys)=>{
    const lateral = document.querySelector('#lateral');

    const titleFilterCategory = document.createElement('h3');
    titleFilterCategory.innerText = 'Categorias';
    lateral.appendChild(titleFilterCategory)
    
    const divFilterCategory = document.createElement('div');
    divFilterCategory.className = 'filtercategory';

    categorys.map(category => {
        const divCategory = document.createElement('div');
        categorias.push(category)
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



export{
    crearFiltroCategoria    
}