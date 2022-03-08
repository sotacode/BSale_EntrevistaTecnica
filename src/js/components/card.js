import { sortProducts } from "./filters";


let divs;
const crearCards = (products) => {
    document.querySelector('#content').removeChild(document.getElementById('cargando'));
    divs = [];

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

        div.setAttribute('data-value',product.price)

        if (product.discount != 0){
            const priceDiscounted = document.createElement('p');
            priceDiscounted.className = 'priceDiscounted';
            priceDiscounted.textContent = '$'+(product.price - (product.price * product.discount / 100));
            prices.appendChild(priceDiscounted);
            price.className += price.className + ' underlineAdd';
            
            div.nodeValue = (product.price - (product.price * product.discount / 100)).toString()

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
        divs.push([div,product.category])
    });

    divs.sort(sortProducts)

    const content = document.querySelector('#content')
    divs.map( div => {
        content.appendChild(div[0]);
    } )
    
}

export{
    crearCards,
    divs
}