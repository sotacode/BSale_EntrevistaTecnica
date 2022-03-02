

export const saludar = ( nombre ) => {
    console.log("Creando etiqueta h1")

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}!!! Webpack dev server funcionando.`;

    document.body.append(h1);

}