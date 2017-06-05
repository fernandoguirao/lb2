### Una lista de botones con icono
```html
{html}<img src="x" style="display: none;" onerror="jsFlex(this);">
<div class="la-flex la-flex-small">
  <!-- Cada botón empieza aquí: repetir -->
  <div class="la-choices">
    <!-- Donde pone picture se sustituye por otros nombres de icono -->
    <span class="fi picture"></span>
    <span>
      <!-- Sustituir por el texto del botón -->
      Templates
    </span>
  </div>
  <!-- Cada botón acaba aquí -->
  <!-- Aquí dejamos un último botón para volver (escribe back) -->
  <div class="la-choices la-choice-back">
      <span class="fi left-arrow-1"></span>
      <span>Back</span>
  </div>
  <!-- Termina botón para volver -->
</div>{/html}
```

### Lista de botones con imagen
```html
{html}<img src="x" style="display: none" onerror="jsaddClass(this,'js-thumbs');jsfakeMessage(this);">
<ul class="container-inline">
  <!-- Empiza cada botón -->
  <li class="two-rows">
    <a href="" target="_blank">
      <!-- Sustituir por la url de la imagen -->
      <div style="background-image: url(http://www.losandes.com.ar/files/image/15/03/image5519d6bd27d403.78857478.jpg);" class="bckg"></div>
      <p>
        <!-- Sustituir por el texto del botón -->
        Zen
      </p>  
    </a>
  </li>
  <!-- Acaba cada botón -->
  <!-- Si queremos botón para volver dejar esto: -->
  <li class="two-rows back">
    <a href="" target="_blank">
      <p>
        Back
      </p>  
    </a>
  </li>
  <!-- Termina botón para volver -->
</ul>{/html}
```
