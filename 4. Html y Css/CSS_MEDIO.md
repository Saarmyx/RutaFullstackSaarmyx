# Selectores avanzados

Estos se usan para selecionar elementos de diferentes maneras

Para seleccionar una imagen con un **src** en especifico, lo hacemos de esta manera:

```css
img[src='img.png'] {
  width: 100%;
}

/* Para hacer una seleccion de la extension */
img[src$='.png'] {
  width: 100%;
}
```

Para seleccionar de forma desendente

```css
/*  Agarramos el hijo del ul */
ul li {
    color:blue;
}}

/* Agarramos un nieto o que este dentro de un ul */
ul strong{
    color:blue;
}

/* Aqui strong tiene que estar adentro de un ul, como hijo directo de ul */
ul > strong{
    color:blue;
}

/* Selectores adyacentes se le aplica el color a un p, que esta despues de una h1 */
h1 + p {
    color #666;
}

/* Selectores de adyacentes generales se le aplica el color a todos los p, que esta despues de una h1 */
h1 ~ p {
    color #666;
}

/* Selector de hermano adyacente es una cadena de un p que le sigue un p que le sigue un h1 */
h1 + p + p {
    color:blue;
}
```

# Herencia

Habla de que algunas propiedades heredan y otras no

Ejemplo:

```css
/* Al hacer esto le damos un colo al body y todos los elementos del body lo van a heredar */
body {
  color: blue;
}

h1 {
  color: inherit; /* Esto hace que herede el color */
}
```
