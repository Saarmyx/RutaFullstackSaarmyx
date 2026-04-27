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
