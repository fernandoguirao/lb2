# Landbot

## Instalación
```bash
npm install
```

## Desarrollo
Ejecutar `npm start` para iniciar las tareas de automatización con *gulp*.
Se abrirá automáticamente una página ofreciendo el servidor local de la app en `http://localhost:8080`.

#### Modus Operandi
El flujo de trabajo se basa en la adición/edición de archivos en directorio `app/`. *Gulp* se encargará de generar los archivos finales en el directorio `build/`.
- Sass: Separar los estilos de cada componente en archivos .scss diferentes dentro de la carpeta `include/` correspondiente, añadiendo su referencia en el archivo raíz (`@import "include/file"`).
- JavaScript: Todos los archivos .js dentro de la carpeta `app/js/` son concatenados y minificados.
- Html: El archivo `index.html` contiene el html común a todos los *index* generados. Los snippets son inyectados de manera dinámica por *gulp*.


#### Sass
El proyecto compila dos archivos de estilo:
1. `master.css`: Estilos de la página principal (contenedora).
2. `botchat.css`: Estilos cargados tras el renderizado completo del webchat en su iframe correspondiente.

Procesado de archivos:
> Compilación SASS > Autoprefixer > Minificado* > Sourcemaps > Inyección en servidor local

*: La acción de minificado está desactivada por ahora

#### JavaScript
1. `master.js`: Scripts de la página principal (contenedora).

Procesado de archivos:
> Concatenación > Uglify > Sourcemaps > Refrescado de la página en servidor local

#### Html
El archivo `index.html` es duplicado en `build/` para ofrecer:
1. `index.html`, es la página principal que se verá en producción. El archivo `snippet.html` es inyectado en su cabecera (header).

2. `index.dev.html`, es la página ofrecida por el servidor local, su snippet (`snippet.dev.html`) apunta a los archivos estáticos de scripts y estilos de nuestro servidor de daisho `http://localhost:8000`

Procesado de archivos:
> Inyección de snippet > Refrescado de la página en servidor local


## Deploy
El comando `npm run build` cumple la función de construcción de los archivos de producción. Es equivalente a `npm start`, pero no activa el servidor local ni realiza *watch* de los cambios.

#### Deploy a servidor FTP
Ver [documentación](https://github.com/fernandoguirao/lb2/blob/master/docs/deploy.md)
