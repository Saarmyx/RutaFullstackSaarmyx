# HTML Intermedio

## Comentarios, meta tags y favicon

Los comentarios son lineas de cogidos que no lee el programa, solo el desarrollador

<!-- Esto es un comentario -->

Un favicon es el icono que aparece en la parte de la pestaña, se añade en el head de la siguiente manera

`<link rel="icon" href="icono.png" type="image/png">`

Se recomienta poner el type para la compatibilidad

Las meta tags son etiquetas que el navegador solo lee y no muestra

El atributo lang en html se usa para definir el idioma base de nuestra web

El utf-8 se usa para la compatibilidad en los acentos de todo el mundo

el meta viewport, nos ayuda a que se adapta a todos los dispositivos y

Tenemos el

- meta description que describe nuestra webs
- meta keyword estas son las palabras claves
- meta autor define el nombre del autor
- meta robots para que muestre o no muestre un fragmento de nuestra pagina y lo muestre o tambien para que google guarde o no guarde cache de nuestra web, tambien para que no se indece nuestra img

- meta title es para el titulo de la web, no se usa tanto

- Tambien tenemos los meta OG:title,img,description , url que son los mas comunes y nos ayuda con lo que se muestra para eso nos puede ayudar una pagina web para crearlo de manera automatica

# Text Area

La propiedad max-w/h hace que no se pueda agrandar en base al valor que nosotros le demos

Text area es un propiedad que nos ayuda a que el usuario escriba un texto mas amplio

HTML

```html
<div class="form_input">
  <textarea></textarea>
</div>
```

El text area aunque se le ponga un width no se pondra para eso tendremos que usar o minwidth o resize (mas usada)

ademas de que deberemos agregarle una tipografia al text area, ya que tengra una tipografia

y la propiedad form-sizing hace que se adapte a lo que nosotros escribamos

el atritbuto readonly, solo nos deja ver no escribir aunque pongamos esto hara un focus y lo que tenga dentro se enviara

en cambio con disable nos desabilitara

tambien con minleght es para que puedas escribir hasta los caracteres que especifiques

y con el atributo row, podemos especificar cuantas columnas escribira el usuario

# Labels

Es la forma que tenemos de etiquetar un input

```html
<div class="form_input">
  <label>Nombre</label>
  <input type="name" />
</div>
```

Se puede abarcar de 2 maneras, con for en label y id en input o abarcando todo el input con nuestro label

# Selects, datalist y options

los selects son una especie de lista que ya definimos y quue el usuario elige

```html
<select name="type-of-user">
  <option value="user1">Opcion 1</option>
  <option value="user2">Opcion 2</option>
  <option value="user3">Opcion 3</option>
</select>
```

El select se puede estilizar de la misma manera que un input, pero el option se estiliza aparte y no se puede dar mucha personalizacion por defecto

En las datalist nos podemos ahorrar el value, aunque es mejor ponerlo porque es el valor que se envia

```html
<input list="user" name="user" />
<datalist id="user" name="type-of-user">
  <option value="user1">Opcion 1</option>
  <option value="user2">Opcion 2</option>
  <option value="user3">Opcion 3</option>
</datalist>
```

# Fielset y Legend

Estos se usan para enumerar y etiquetar un form

Si tenemos un input base, podemos agrupar el tipo de dato que se pide

```html
<fieldset>
  <legend>
    <input type="email" />
  </legend>
</fieldset>
```

# Details y summeries

Estos proporcinan una manera nativa de hacer una lista deplegable

```html
<details>
  <summary>A tu mama le encanta</summary>
  <ul>
    Ver videos
  </ul>
</details>
```

y se puede editar de muchas maneras, una es

datails[open] y esto quiere que decir que editamos cuando se abra el menu

# Enlaces (avazandos)

Para ir a una seccion en especifico mediante un enlace, lo podemos hacer con un id que debe ser igual a donde nosotros queremos ir

ejemplo

```html
<a href="hola"></a>

<h1 id="hola"></h1>
```

Para descar el archivo que nosotros queremos podemos crear un enlace con el atributo **download** y listo

```html
<a id="archivo.html" download></a>
```

Con el rel="noopener", rel="noferrer" nos ayuda a que el target blank no de datos que nos pueda hacer fishing, ni nada parecido

rel="nofollow", ayuda a no indexar nuestra web

Tambien podemos "mandar un mail", con mailto:correo@gmail.com o tel:12345678

# Tablas

Es una manera de organizar informacion a modo de columnas o filas

<table>
<th> arma un encabezado por columna
<tr> arma una columna
<td> arma una fila

<thead> Arma todo el encabezado

<tbody> Arma el cuerpo de todo el contenido

<tfoot> Arma el pie de la tabla

# Audio y video

Para reproducir video se necesita el autoplay, esto hace que se autoreproduce y controls nos permite ver controles del video y muted para poder hacer una reproduccion automaticamente muteada y con loop hace que el video se reproduzca en bucle

```html
<video controls loop auto play src="url del video">Tu navegar no soporta video</video>
```

y pasa lo mismo con el audio

```html
<audio controls loop auto play src="url del video">Tu navegar no soporta video</audio>
```

Para poner subtitulos lo hacemos de esta manera, default hace que los subtitulos esten por defectos, kind ?, srclang hace que el navegador sepa el idioma del subtitulo, label para poner el nombre en el apartado de subtitulos

```html
<track src="url de subtitulos" default kind="captions" srclang="es" label="Español" />
```

# Carga diferida

Es un concepto que la web se debe cargar mediante el usurio scrollee

Con el loading="lazy", ayuda a que se cargen mas abajo algunos

# Html obsoleto

La mayoria son sobre estilo

Una etiqueta puede ser font, center,blink,big, strike(remplazado por del o s),tt(Remplazado por code),u (no esta obsoleta, pero no se recomienda)

Etiqueta b(remplazo strong),em

# Html Semantico

Significa usar etiquetas hechas para un proposito

- header = Encabezado
- nav = navegacion
- section = seccion
- main = contenido principal de la web
- aside = seccion secundaria
- footer = pie de pagina

# Accesibilidad Web

Esto nos dice que debemos hacerla accesible para todo tipo de personas

La ruta base es

html->chrome->web

Aunque realemnte antes de la web se crea un Dom y para gente que tenga alguna discapacidad, se crea el mismo dom pero antes de ver la web, pasa por un programa de accesibilidad
