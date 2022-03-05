const url = 'http://localhost:3000/api/products/'


const obtenerProductos = async () => {
    try{
        const resp = await fetch( url )

        if (! resp.ok) throw alert('No se pudo realizar la peticion') 

        return await resp.json();;
    }catch (err){
        throw err
    }

    
}

export {
    obtenerProductos
}