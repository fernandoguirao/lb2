### Deploy a servidor FTP

1. Subida automática a enlace principal. Ejemplo: `https://landbot.io/`
Es necesario crear un archivo secreto (un archivo secreto contiene la extensión `.secret.conf.json` y está incluido en el **.gitignore**) llamado `new-client.secret.conf.json` (es importante nombrarlo exactamente como se indica, sustituyendo `new-client` por el nombre del cliente) con la siguiente estructura:
```javascript
// new-client.secret.conf.json
{
  "host": "myhost",
  "user": "myuser",
  "pass": "mypass",
  "removes": [],
  "includes": [
    { "file": "index.test.html", "rename": "index.html" },
    { "file": "favicon.ico" },
    { "file": "js/main.js" }
  ],
  "remoteBaseDir": "./",
  "localBaseDir": "./"
}
```
*:Consultar antes de ejecutar.
```bash
npm run deploy
```
2. Subida manual: Consiste en subir archivos de la carpeta build/ al servidor de producción mediante cualquier interfaz de cliente FTP. Ejemplo: [FileZilla](https://filezilla-project.org/)

### landbot.io/test

1. Subida automática a: `https://landbot.io/test/`
```bash
npm run deploy-test
```
2. Subida manual: Proceder como en el caso anterior, pero es necesario renombrar **index.test.html** a **index.html**, eliminando el **index** anterior (de producción). De este modo el snippet usado apunta al bot de test y no contiene analytics.
