## Patrón de desarrollo

- El directorio ./app contiene los archivos de desarrollo

- Los directorios ./landbot y ./webchat contienen archivos estáticos provisionales a los que apunta el **index.html** actual para facilitar el desarrollo. Por lo general, dichos directorios se encontrarán en el storage de los servidores demo.helloumi.com o daisho.yexir.com

### Directorio de archivos
Para funcionar con archivos locales de ./landbot y ./webchat, es necesario contar con el siguiente árbol de directorio:

```python
"""
├── README.md
...
├── dynamic
│   ├── README.md
│   ├── app
│   │   ├── js
│   │   │   ├── master.js
│   │   │   └── plugins
│   │   │       └── forabot.js
│   │   └── less
│   │       └── master
│   │           ├── buttons.less
│   │           ├── fonts.less
│   │           ├── global.less
│   │           ├── ...
│   ├── index.html
│   ├── landbot
│   │   ├── css
│   │   │   └── master.less
│   │   ├── files
│   │   │   ├── arrow-op.png
│   │   │   ├── arrow.png
│   │   │   ├── favicon.ico
│   │   │   ├── fonts
│   │   │   │   ├── Flaticon.eot
│   │   │   │   ├── Flaticon.svg
│   │   │   │   ├── Flaticon.ttf
│   │   │   │   └── Flaticon.woff
│   │   │   └── ogimage.jpg
│   │   ├── js
│   │   │   ├── master.js
│   │   │   └── master.js.map
│   │   └── video
│   ├── landbot-1.0.0.js
│   ├── less.min.js
│   └── webchat
│       ├── css
│       │   └── main-1.0.1.css
│       └── js
│           └── main-1.0.1.js
...
"""
```

Donde algunos de los archivos son copiados manualmente tras su procesado en el sistema de desarrollo de **daisho**, como es el caso de los estáticos del webchat (`main-1.0.1.css` y `main-1.0.1.js`)
