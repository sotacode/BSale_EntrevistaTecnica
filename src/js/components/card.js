import { obtenerProductos } from '../provider/http-provider';
import { enterClick, search } from './search';


const crearCards = (products) => {
    document.querySelector('#content').removeChild(document.getElementById('cargando'))
    //recorrerArray(products);
    products.map(product => {
        const div = document.createElement('div');
        div.className = 'card';
        const img = document.createElement('img');
        img.src = product.url_image;
        div.appendChild(img);
    
        const title = document.createElement('h2');
        title.textContent = product.name;
        div.appendChild(title);

        const prices = document.createElement('div');
        prices.className = 'prices';

        const price = document.createElement('p');
        price.textContent = '$'+product.price
        price.className = 'priceorigin'
        prices.appendChild(price)

        if (product.discount != 0){
            const priceDiscounted = document.createElement('p');
            priceDiscounted.className = 'priceDiscounted';
            priceDiscounted.textContent = '$'+(product.price - (product.price * product.discount / 100));
            prices.appendChild(priceDiscounted);
            price.className += price.className + ' underlineAdd';

            const discount = document.createElement('span');
            discount.textContent = product.discount+'% dcto';
            div.appendChild(discount);
        }

        div.appendChild(prices);

        const buttons = document.createElement('div');
        buttons.className='buttons';

        const buttonBuy = document.createElement('button');
        buttonBuy.className = 'buttonBuy';
        buttonBuy.textContent = 'Comprar';
        buttons.appendChild(buttonBuy)

        const buttonAddToCart = document.createElement('button');
        buttonAddToCart.className = 'buttonAddToCart';
        buttonAddToCart.textContent = 'Agregar al carro';
        buttons.appendChild(buttonAddToCart)

        div.appendChild(buttons);
        
    
        const content = document.querySelector('#content')
        content.appendChild(div) 
    });
}

const init = () => {

    document.body.style.backgroundImage = "url(./assets/img/pattern.png)"
    document.querySelector('#content').innerHTML = `<h1 id='cargando'> Cargando productos </h1>`
    
    document.querySelector("#inputSearch").onkeypress = function(event) {
        enterClick(event);
    }
    
    obtenerProductos(search.value.toLowerCase()).then( (resp) => {
        crearCards(resp)
    });
}

export {
    init,
    crearCards
}