

const obtenerProductos = async (search="") => {
    let url;
    let resp;
    console.log(search);
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

export {
    obtenerProductos
}