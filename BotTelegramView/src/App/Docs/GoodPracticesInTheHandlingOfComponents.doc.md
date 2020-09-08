## Buenas practicas en el manejo de componentes:
------------------------------------------------
Para empezar a desarrollar un componente se tiene que tener en cuenta, a que modulo pertenece, si tuvieramos un modulo llamado Encuestas, y nosotros tuvieramos que desarrollar por ejemplo un componente para crear encuestas, entonces nosotros en la carpeta component deberiamos crear primero la carpeta Polls(Encuestas) y dentro de esa carpeta otra carpeta que se llame CreatePolls(crear encuestas). ¿Y esto por que? En general para tener un buen orden, en el primer foco tendriamos el modulo de Encuestas, y dentro de Encuestas tendriamos las pantallas para crear, modificar, borrar y ver los datos, osea el abm(no necesariamente tendriamos las 4 en pantallas divididas, pero es un ejemplo de por donde se debe empezar el analisis), osea que nuestro modulo con componentes quedaria un poco asi.

* Components
  * Polls
    * CreatePolls
    * DeletePolls
    * Polls
    * UpdatePolls

Ahora que ya tenemos entendido que tenemos que ordenar los componentes por modulo, ahora dentro de components vamos a tener una jerarquia mas, la cual se compone de los siguientes archivos para tener un mejor manejo del componente.

* Container: El container es el que se va a encargar de pasarle al componente las props de redux, para que las pueda utilizar en su logica de negocios.
* Component: En el component es donde va a estar la logica de negocios.
* Content: En el content es donde se va a renderizar todos los datos que ya fueron tratados por el component.
* Styles: En styles es donde va a estar los estilos del componente que van a ser usados en content.
* Config: En config vamos a almacenar las configuraciones de componentes reutilizables(SharedComponents), o configuraciones del componente, como el tipo de archivo que debe aceptar o el peso del mismo por dar un ejemplo.
* Interfaces: En Interfaces, vamos a tener todas las interfaces de todos los objetos que se usan en component.
* Utils: En utils vamos a almacenar funciones que puedan ser demasiado complejas como para estar en component, con el fin de mejorar la lectura de codigo y mejorar la mantenibilidad del mismo.