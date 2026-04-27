# 🧠 Aprendiendo Markdown

Markdown es un lenguaje de marcado ligero que permite dar formato a texto de manera sencilla y rápida.
Se usa principalmente en documentación, README, blogs y notas técnicas.

---

## ✍️ Texto básico

Esto es un párrafo normal.

Podemos aplicar:

- _Cursiva_
- **Negrita**
- **_Cursiva y negrita al mismo tiempo_**

> Nota: Siempre deja un espacio entre el `#` y el texto en los encabezados.

---

## 🔠 Encabezados

```md
# Nivel 1

## Nivel 2

### Nivel 3

#### Nivel 4

##### Nivel 5

###### Nivel 6

Ejemplo:

Encabezado de nivel 1

Encabezado de nivel 2

Encabezado de nivel 3

Encabezado de nivel 4

Encabezado de nivel 5

Encabezado de nivel 6
```

---

🔗 Enlaces

Enlace externo

[YouTube](https://youtube.com)

Resultado:
YouTube

Enlace interno (anclas)

[Ir a Markdown](#-aprendiendo-markdown)

> El texto del enlace debe coincidir con el encabezado en formato URL.

---

🖼️ Imágenes

![Texto alternativo](ruta/o/url.jpg)

Ejemplo:

---

➖ Divisores

Se crean con tres guiones:

---

---

📋 Listas

Ordenadas

1. Elemento 1
2. Elemento 2
3. Elemento 3

No ordenadas

- Elemento

* Elemento

Ejemplo:

Ejemplo 1

Ejemplo 2

Ejemplo 3

---

🔽 Sublistas

Se crean con indentación (espacios o tabulación):

- Lista principal
  - Sublista

Ejemplo:

Lista mayor

Sublista

---

💬 Citas

Se crean con >:

> Esto es una cita

Ejemplo:

> Esto es una cita en línea - Santiago

> Esto es una cita en bloque
> con múltiples líneas
> Santiago

---

📊 Tablas

| Nombre   | Edad | Correo            |
| -------- | ---- | ----------------- |
| Santiago | 18   | saarmyx@gmail.com |
| Rosie    | 17   | No recuerdo       |

Resultado:

Nombre Edad Correo

Santiago 18 saarmyx@gmail.com
Rosie 17 No recuerdo

---

🧩 Código y destacado

Código en línea

`texto`

Ejemplo:
Esto es un texto destacado

Bloques de código

````js
function sumar(a, b) {
  return a + b;
}
```

Resultado:

```js
function sumar(a, b) {
  return a + b;
}
```

---

🌐 HTML en Markdown

Markdown permite usar HTML directamente:

<form>
  <label for="q">Buscar:</label>
  <input type="search" id="q" name="q">
</form>

Resultado:

<form>
<label for="q">Buscar:</label>
<input type="search" id="q" name="q">
</form>
---

🧠 Comentarios

<!-- Esto es un comentario -->

No se muestran en el resultado final.


---

🔒 Escapar formato

Para evitar que Markdown interprete símbolos, usa \:

\*\*negrita\*\*
\_cursiva\_

Resultado:
**negrita**
_cursiva_


---

⚡ Extras útiles (que curiosamente faltaban)

✔️ Checklist (tareas)

- [x] Completado
- [ ] Pendiente

Ejemplo:

[x] Aprender Markdown básico

[ ] Dejar de cometer errores tontos



---

📌 Citas de código (lenguaje específico)

Especificar lenguaje mejora el resaltado:

```python
print("Hola mundo")

---

### 📎 Referencias (enlaces reutilizables)

```md
[Google][1]

[1]: https://google.com


---

🧭 Saltos de línea

Para forzar salto de línea:

Usa dos espacios al final

O una línea en blanco



---

🧠 Buenas prácticas

Mantén consistencia en estilos

Usa encabezados para estructurar

No abuses de HTML si Markdown lo resuelve

Usa código formateado para ejemplos

Mantén legibilidad (esto no es un experimento artístico)
````

```

```
