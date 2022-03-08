# BSale test por Nelson Rivera

## **Para usar en desarrollo**
- Clonar repositorio
- Ejecutar comando ```npm install``` en la raiz del proyecto para descargar los paquetes necesarios.
- Ejecutar comando ```npm run start``` en la raiz del proyecto para ver proyecto en desarrollo.
- Ejecutar comando ```npm run build``` para generar el build de produccion.


## **Backend**

El backend, escrito en Go, se encuentra en el directorio *server/*:

- **main.go**: Fichero en el que se definen las rutas de la API REST, se asigna un puerto dinamicamente y se corre el servidor.
- **db/database.go**: Fichero donde se declaran funciones de conexion y desconexion a la base de datos. Tambien se polimorfizo la funcion Query para centralizar los errores y conexiones a la base de datos.
- **sql/querys.go**: Fichero donde se hacen las consultas sql. Al iniciar el sitio web se devuelven todos los productos. Por otro lado, si se usa el buscador la consulta sql aplica el filtro en el WHERE.
- **structs/entities.go**: Fichero donde se define la estructura/objeto de producto y una lista de ellos.



## **Frontend**

Se utilizo webpack por algunas ventajas que se obtienen en desarrollo y en la generacion del build del produccion:

- Ver los cambios en sitio web en tiempo real.
- Minimizar el codigo.
- Incrementar compatibilidad con navegadores.

Ficheros del frontend:

- **index.js**: Inicializa los scripts.
- **init.js**: Principalmente cumple la funcion de realizar la primera peticion en donde se devuelven todos los productos para mostrarlos en el html.
- **event.js**: Se especifica el evento de presionar el boton buscar y la funcion asociada.
- **card.js**: Crea las tarjetas de los productos con los datos de cada uno.
- **search.js**: Fichero donde se realiza la consulta sql con el valor de entrada del buscador del sitio web.
- **http-provider.js**: Fichero donde se encuentran las peticiones a la API REST.

Ver sitio en [http://bsale.test.sota.s3-website-sa-east-1.amazonaws.com/](http://bsale.test.sota.s3-website-sa-east-1.amazonaws.com/)