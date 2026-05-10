`````md
# 🧠 Guía Completa de Markdown

Markdown es un lenguaje de marcado ligero diseñado para escribir texto con formato de forma rápida y legible.

Se utiliza en:

- README de GitHub
- Documentación técnica
- Blogs
- Notas
- Wikis
- Foros
- Chats compatibles
- Sistemas de gestión de contenido

La gracia de Markdown es simple:  
el texto sigue siendo fácil de leer incluso sin renderizar. Algo que muchos documentos modernos olvidaron mientras intentaban convertirse en PowerPoint con ansiedad.

---

# ✍️ Texto básico

Texto normal:

Esto es un párrafo común.

## Estilos de texto

```md
_Cursiva_
_Cursiva_

**Negrita**
**Negrita**

**_Negrita y cursiva_**
**_Negrita y cursiva_**

~~Texto tachado~~
```

Resultado:

_Cursiva_  
**Negrita**  
**_Negrita y cursiva_**  
~~Texto tachado~~

---

# 🔠 Encabezados

Los encabezados se crean usando `#`.

```md
# Nivel 1

## Nivel 2

### Nivel 3

#### Nivel 4

##### Nivel 5

###### Nivel 6
```

## Reglas importantes

- Siempre deja un espacio después del `#`
- Usa solo un `#` por nivel
- Mantén jerarquía lógica

Incorrecto:

```md
###Texto
```

Correcto:

```md
### Texto
```

---

# ➖ Líneas divisoras

Sirven para separar secciones visualmente.

```md
---
```

También funcionan:

```md
---
---
```

Resultado:

---

---

# 📋 Listas

## Listas ordenadas

```md
1. Elemento
2. Elemento
3. Elemento
```

Resultado:

1. Elemento
2. Elemento
3. Elemento

---

## Listas no ordenadas

```md
- Elemento

* Elemento

- Elemento
```

Resultado:

- Elemento
- Elemento
- Elemento

## Buenas prácticas

Mantén el mismo símbolo en toda la lista.  
Mezclar `-`, `*` y `+` porque sí es el equivalente visual a cables pelados dentro de un servidor.

---

# 🔽 Sublistas

Se crean con indentación.

```md
- Frontend
  - HTML
  - CSS
  - JavaScript
```

Resultado:

- Frontend
  - HTML
  - CSS
  - JavaScript

---

# ✔️ Checklist

Muy usadas en GitHub y documentación.

```md
- [x] Terminado
- [ ] Pendiente
```

Resultado:

- [x] Terminado
- [ ] Pendiente

---

# 💬 Citas

Se crean usando `>`.

```md
> Esto es una cita
```

Resultado:

> Esto es una cita

---

## Citas multilínea

```md
> Primera línea
> Segunda línea
> Tercera línea
```

Resultado:

> Primera línea
> Segunda línea
> Tercera línea

---

# 🔗 Enlaces

## Enlace básico

```md
[YouTube](https://youtube.com)
```

Resultado:

[YouTube](https://youtube.com)

---

## Enlace con título

```md
[Google](https://google.com 'Buscador')
```

---

## Enlaces reutilizables

Útiles cuando un documento tiene muchos enlaces.

```md
[Google][1]
[GitHub][2]

[1]: https://google.com
[2]: https://github.com
```

---

## Enlaces internos (anclas)

Permiten navegar dentro del documento.

```md
[Ir a Tablas](#-tablas)
```

### Cómo funcionan

Markdown convierte encabezados en IDs:

```md
# 📊 Tablas
```

Se transforma aproximadamente en:

```md
#-tablas
```

---

# 🖼️ Imágenes

Sintaxis:

```md
![Texto alternativo](imagen.png)
```

Ejemplo:

```md
![Logo](https://ejemplo.com/logo.png)
```

## Texto alternativo

El texto alternativo ayuda a:

- Accesibilidad
- Lectores de pantalla
- SEO
- Mostrar contexto si la imagen falla

Algo que la mitad de internet ignora alegremente desde 2007.

---

# 🧩 Código

## Código en línea

Usa una sola comilla invertida:

```md
`console.log()`
```

Resultado:

`console.log()`

---

## Bloques de código

Usa tres comillas invertidas.

````md
```js
function saludar() {
  console.log('Hola')
}
```
````

Resultado:

```js
function saludar() {
  console.log('Hola')
}
```

---

# 🎨 Resaltado de sintaxis

Puedes especificar el lenguaje:

````md
```python
print("Hola")
```
````

Lenguajes comunes:

- `js`
- `python`
- `html`
- `css`
- `bash`
- `json`
- `sql`
- `cpp`

---

# 📊 Tablas

```md
| Nombre | Edad | País     |
| ------ | ---- | -------- |
| Ana    | 19   | Colombia |
| Luis   | 22   | México   |
```

Resultado:

| Nombre | Edad | País     |
| ------ | ---- | -------- |
| Ana    | 19   | Colombia |
| Luis   | 22   | México   |

---

## Alineación de tablas

```md
| Izquierda | Centro | Derecha |
| :-------- | :----: | ------: |
| Texto     | Texto  |   Texto |
```

Resultado:

| Izquierda | Centro | Derecha |
| :-------- | :----: | ------: |
| Texto     | Texto  |   Texto |

---

# 🌐 HTML dentro de Markdown

Markdown permite HTML.

```html
<form>
  <input type="text" />
</form>
```

Resultado:

<form>
  <input type="text">
</form>

---

## Cuándo usar HTML

Úsalo solo cuando Markdown no pueda resolver algo fácilmente.

Ejemplos válidos:

- Formularios
- Videos embebidos
- Detalles desplegables
- Estilos avanzados

No conviertas Markdown en un Frankenstein HTML porque “se veía chévere”. La mantenibilidad existe por una razón.

---

# 📦 Bloques desplegables

GitHub soporta `<details>`.

```html
<details>
  <summary>Mostrar contenido</summary>

  Texto oculto aquí.
</details>
```

Resultado:

<details>
  <summary>Mostrar contenido</summary>

Texto oculto aquí.

</details>

---

# 🧠 Comentarios ocultos

```md
<!-- Esto no se muestra -->
```

Muy usados para:

- Notas internas
- TODOs
- Indicaciones para colaboradores

---

# 🔒 Escapar caracteres

Usa `\` para evitar formato.

```md
\*\*Texto\*\*
```

Resultado:

**Texto**

---

# 🧭 Saltos de línea

## Nuevo párrafo

Deja una línea vacía.

```md
Texto 1

Texto 2
```

---

## Salto de línea simple

Dos espacios al final:

```md
Línea 1  
Línea 2
```

Resultado:

Línea 1
Línea 2

---

# 📌 Emojis

GitHub soporta emojis por código.

```md
:rocket:
:fire:
:white_check_mark:
```

Resultado:

🚀 🔥 ✅

---

# 🏷️ Badges

Muy usados en README.

```md
![Version](https://img.shields.io/badge/version-1.0-blue)
```

Sirven para mostrar:

- Versiones
- Licencias
- Build status
- Cobertura
- Tecnologías

---

# 🧮 Markdown avanzado de GitHub

## Bloques de advertencia

GitHub soporta:

```md
> [!NOTE]
> Nota importante

> [!WARNING]
> Advertencia

> [!TIP]
> Consejo útil
```

Resultado aproximado:

> [!NOTE]
> Nota importante

> [!WARNING]
> Advertencia

> [!TIP]
> Consejo útil

---

# 🗂️ Organización recomendada

Un buen documento Markdown suele tener:

```md
# Título

## Introducción

## Instalación

## Uso

## Ejemplos

## Configuración

## FAQ

## Licencia
```

Porque sorprender al lector con una estructura caótica no es creatividad. Es sabotaje editorial.

---

# ⚡ Buenas prácticas

## Haz esto

- Usa encabezados correctamente
- Mantén consistencia
- Usa bloques de código
- Separa secciones
- Mantén legibilidad
- Usa listas cuando ayuden

---

## Evita esto

- Encabezados desordenados
- Mezclar estilos
- HTML innecesario
- Bloques enormes de texto
- Tablas absurdamente anchas
- README escritos como si fueran manifiestos filosóficos

---

# 🧠 Diferencias entre Markdown y HTML

| Markdown                 | HTML                  |
| ------------------------ | --------------------- |
| Más simple               | Más poderoso          |
| Fácil de leer            | Más verboso           |
| Ideal para documentación | Ideal para interfaces |
| Rápido de escribir       | Más control visual    |

---

# 📚 Plataformas compatibles

Markdown es usado en:

- GitHub
- GitLab
- Discord
- Reddit
- Obsidian
- Notion
- Stack Overflow
- VS Code
- HackMD

Cada plataforma tiene pequeñas diferencias. Porque claramente el universo no podía permitir un estándar perfectamente consistente.

---

# 🚀 Ejemplo completo

````md
# Proyecto

## Descripción

Este proyecto usa **Markdown**.

## Tecnologías

- HTML
- CSS
- JavaScript

## Instalación

```bash
npm install
```

## Estado

- [x] Backend
- [ ] Frontend

## Autor

[Saarmyx](https://github.com/saarmyx)
````

---

# 🏁 Conclusión

Markdown no intenta reemplazar HTML.
Intenta resolver el 90% de la escritura técnica con el 10% del esfuerzo.

Y sinceramente, considerando cuántos documentos corporativos parecen diseñados por mapaches con acceso a Word, Markdown hizo un trabajo admirable.

```

```

```

```
`````
