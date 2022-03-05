import '../../css/components.css'
import webpacklogo from '../../assets/img/webpack-logo.png'
import { obtenerProductos } from '../provider/http-provider';

const crearCard = (clase, idprod, nameProd, url, price, discount, category, idcat, nameCat) => {
    const div = document.createElement('div');
    div.className = clase;
    const img = document.createElement('img');
    img.src = url;
    div.appendChild(img);

    const title = document.createElement('h2');
    title.textContent = nameProd;
    div.appendChild(title);

    const content = document.querySelector('#content')
    content.appendChild(div)

}

export const saludar = ( nombre ) => {
    /* console.log("Creando etiqueta h1")

    const h1 = document.createElement('div');
    h1.innerText = `Hola ${nombre}!!! Webpack dev server funcionando.`;

    document.body.append(h1);


    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img) */


    /* const url1 = "https://www.licorea.com/images/magictoolbox_cache/feabb61ae2a71c1844359f7cbe8b5d82/1/4/1472/original/2901628488/absolut_4.5litros.jpg"
    const url2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg/270px-Appleton_Estate_V-X_Jamaica_Rum-with_glass.jpg"
    crearCard('card', 1, 'nombreProd1', url1, 25.3, 20, 2, 2, 'fuerte');
    crearCard('card', 1, 'nombreProd2', url2, 25.3, 20, 2, 2, 'fuerte'); */

    const info = obtenerProductos().then(console.log)

}