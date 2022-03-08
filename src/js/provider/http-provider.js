

const obtenerProductos = async (search="") => {
    let url;
    let resp;
    try{
        if (search == "") {
            url ='https://bsaletest-apirest.herokuapp.com/api/products/';
            resp = await fetch( url );
        }else{
            url = 'https://bsaletest-apirest.herokuapp.com/api/productsFiltered/';
            resp = await fetch( url+search );
        }

        if (! resp.ok) throw alert('No se pudo realizar la peticion');

        return await resp.json();;
    }catch (err){
        throw err;
    }
}

const obtenerCategorias = async () => {
    try{
        const url ='http://localhost:3000/api/categorys/';
        const resp = await fetch( url );

        if (! resp.ok) throw alert('No se pudo realizar la peticion');

        return await resp.json();;
    }catch (err){
        throw err;
    }
}

export {
    obtenerProductos,
    obtenerCategorias
}