

const obtenerProductos = async (search="") => {
    let url = 'http://localhost:3000/api/productsFiltered/';
    let resp;
    console.log(search);
    try{
        if (search == "") {
            url ='http://localhost:3000/api/products/';
            resp = await fetch( url );
        }else{
            url = 'http://localhost:3000/api/productsFiltered/';
            resp = await fetch( url+search );
        }

        if (! resp.ok) throw alert('No se pudo realizar la peticion');

        return await resp.json();;
    }catch (err){
        throw err;
    }

    
}

export {
    obtenerProductos
}