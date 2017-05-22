# Clientes

### Nuevo proyecto
1. Crear nueva rama a partir de master con 'customers-' seguido del nombre del cliente (Los nombres deben contener caracteres alfanuméricos y `-` preferiblemente).
```bash
git checkout -b customers-name
```
2. Editar propiedad `client` del archivo **package.json**.
```javascript
"client": "new-client"
```
3. Crear archivo `new-client.conf.js` en la carpeta `clients` con las variables de configuración deseadas. Todas las variables aquí definidas pueden ser inyectadas en el index.html a través de etiquetas como `{{url}}`
```javascript
{
  "url": "https://new-client.com"
}
```
4. Hacer los cambios correspondientes de estilos en `app/scss/variables.scss` y `app/scss/custom/custom.scss`
