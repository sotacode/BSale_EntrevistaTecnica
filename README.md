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

Ver sitio en [http://bsale.test.sota.s3-website-sa-east-1.amazonaws.com/](https://s3.sa-east-1.amazonaws.com/bsale.test.sota/index.html?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXNhLWVhc3QtMSJIMEYCIQCpFG05Tn0uj6yVN%2BtLK9U85EpH0Q5Js704TsjE%2B0HpIQIhAIs8r0Em02JHJYNhDT94RlNV5y4NvtrQLIRSBgSbLSJhKu0CCMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjQ2MDUzODM0OTIyIgzb0cvRMWeGydbn1TYqwQL6Vnf%2FQfvvra9jP72SRwJjdop48tCHPjKnOvj8rHyEKt7DefWp3Z8SjSkiwz3i1rEShXE%2FNyzEy3xDWVFvACcvve8MqZzGiITwABOjsDTx2aGcVFjbrBtoomBf0pfFrEIhRxfNgcm6stsUMi2wuhoLS0JkRL%2FIQ3ppLBq73OxSjcpgnAV0xbdSwyO2cvfBADGWURlF9Abt0S2CgAiQGf87Po2%2FGIXQtDHTOU3CwLA%2Fzr8p%2FqHp%2BJqs92us3YHGjibOHRLxH9jtfQTKT6saWnZ2khPki6AFpp500UShdUto9VOV0fhaatoyqqZFxDGKtDNh3W0eSWZKybaxBmc7FauwoxdRbKaWIEKWFAm8AKXXBgnE2f2Db%2FCxIpGcziD0F%2FExDAAD6lJ4XlQ1RWlAJNa3zugbxXb7mRb2B%2FsHdOu9XHUwvauekQY6sgKziOvdrc29nsXk05OSM4IiqqAgMvsGPfACAUkeROGbOLw%2FCPu%2FkIk6twbJI1WbMSZ95FD7P8dOaSPOq3G%2BYNsklIetzq9XF6bLezwgSBpY4F6FtC0KwYmq2aFSmxJscPNY%2BkUkmh22yNmHkkFof7D4V6NWb4pCM%2BAGv4OleQ7FRMbQk4hYrMLSOWTU%2F9of5xXibEGK6%2B%2BdhbtH3dNHYn5LSuVdshIpiT3M1sox%2Fk7MX6YKZjm6EonUWf%2FAZeZ6d6B0giqihPjMlT7L%2BV2YZc7WWkPP0rEyUy%2BoDDni306W1RW55W758YsLWytzLqbG%2BjveKrQ9tTQMHydQXP56CuDtB0PCUXlmTyiQY3B8ZdBgv8pLfLWK8huwWkItW%2F3WYLAh2GHNc1qmsoNrWpOehfxkxJI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220308T181828Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAZM26PGCVG3ITZ6UR%2F20220308%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=eacd54055a7921b193e588a766f683a3f200c5b97ff41822976be2e38318e1bd)