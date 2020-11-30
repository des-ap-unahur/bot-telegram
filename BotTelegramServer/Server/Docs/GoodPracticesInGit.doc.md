## Buenas practicas en git:
------------------------------------------------
En este caso las buenas practicas en git van a ser subjetivas, como primera parte se van a definir una serie de reglas, la primera va a ser que cuando se crea una nueva branch se usen las siguientes nomenclautras.

* feature: En general como su nombre lo dice, va a ser una caracteristica la cual estemos desarrollando en este nuevo branch.
* bugfix: En este caso, si nosotros encontraramos un bug, y hubiese una tarea que fuese un bug, usariamos esta nomenclatura.
* release: Esta nomenclatura es especifica para cuando terminamos un prototipo, osea termina el sprint y nosotros tenemos que lanzar una version.
* hotfix: Esta nomenclatura solo la usariamos si tenemos una tarea de arreglar un bug en produccion.

Ahora, ¿como integrar estas nomenclaturas? bueno de la siguiente manera.
primero pondriamos por ejemplo: 

feature/BOT-100-arreglar-contenedor-de-react

¿que significa todo lo que sigue despues de la nomenclatura? En principio BOT seria el identificador del proyecto, 100 seria el numero de ticket, y lo siguiente la tarea que estamos haciendo, ¿Esto para que? Simple, para que sea mas facil buscar las branch donde se hicieron las tareas y saber que se hizo en cada una.

Bien, ahora comenzemos con nuestra "tarea".
como primer paso nos paramos en el branch develop y hacemos un pull para tener todo actualizado.

```bash
git checkout develop
git pull origin develop
```

Ahora creamos la nueva branch donde vamos a hacer la tarea que nos encomendaron.

```bash
git checkout -b feature/BOT-100-arreglar-contenedor-de-react
```
Nota: git checkout -b es un comando que crea la branch y te redirige a la misma.

Ahora supongamos que ya terminamos la tarea, entonces lo que ariamos seria.

```bash
git status
git add archivo
git commit -m "#BOT-100: contenedor de react arreglado"
git push origin feature/BOT-100-arreglar-contenedor-de-react
```
¿Que es todo esto? En principio git status para ver que archivos modificamos, luego en git add pegamos las rutas de todos los archivos que modificamos, con el git commit comentamos todos esos archivos y con el git push lo subimos al repositorio, el origin es para aclararle que lo tiene que subir a nuestra branch y no a master.

Nota: El commit se debe hacer añadiendo # id de proyecto - numero de ticket.

Ahora supongamos que nosotros queremos hacer un pull request para integrar lo que hicimos en develop, y nos tira un conflicto, nosotros lo que tendriamos que hacer es.

```bash
git pull origin develop
git status
git add archivo/archivos
git commit -m "#BOT-100: Conflictos arreglados"
git push origin feature/BOT-100-arreglar-contenedor-de-react
```
¿Y que significan esos comandos? Con el git pull origin develop, le decimos que queremos que traiga los cambios de develop y los fusione con los nuestros, en este caso puede pasar 2 cosas, en la primera que los cambios se integren bien, en la segunda que tengamos que arreglarlos mediante la herramienta del visual, en caso de ser asi, pondriamos un git status, luego agregariamos los archivos que arreglamos, hariamos el commit diciendo que arreglamos los conflictos, luego lo subiriamos a nuestra branch, y por ultimo ya podriamos fusionar nuestra branch con develop integrando asi nuestros cambios con el mismo. 