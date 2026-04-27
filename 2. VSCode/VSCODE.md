# 🧠 Introducción

Programar en un bloc de notas o en editores de texto plano es posible… pero innecesariamente doloroso.
Por eso utilizamos un **editor de código**, que nos facilita escribir, entender y mantener nuestro software.

El editor más utilizado actualmente es **Visual Studio Code (VSCode)**, principalmente por las siguientes razones:

## 🚀 ¿Por qué VSCode?

### 🧩 Inteligencia

Cuenta con autocompletado inteligente (_IntelliSense_), sugerencias de código, detección de errores en tiempo real y soporte para múltiples lenguajes.

### 🔌 Extensibilidad

Podemos instalar extensiones para adaptar el editor a cualquier tecnología o flujo de trabajo (frontend, backend, DevOps, etc.).

### 🔄 Control de versiones integrado

Integra **Git** de forma nativa, permitiendo trabajar con repositorios sin salir del editor.

### 🐞 Debugging

Permite ejecutar código paso a paso, inspeccionar variables y detectar errores con precisión.

### 🎨 Personalización

Podemos modificar prácticamente todo: temas, iconos, atajos, comportamiento del editor, etc.

### 🧠 Editor híbrido

VSCode puede funcionar como:

- **Editor de código** ligero
- **IDE completo** dependiendo de las extensiones instaladas

---

# ⚙️ Instalación

1. Ir al navegador
2. Acceder al sitio oficial: https://code.visualstudio.com/
3. Descargar e instalar según tu sistema operativo

---

# 🎛️ Configuración inicial

Al abrir VSCode por primera vez:

- Selecciona el **tema oscuro (Dark Mode)**
- Configura preferencias básicas
- Finaliza el asistente

> _(Sí, puedes usar modo claro… pero luego no te quejes de tus ojos.)_

---

# 🧱 Interfaz de VSCode

## 📌 Barra de actividad (lado izquierdo)

1. 📁 Explorer → Archivos del proyecto
2. 🔍 Search → Búsqueda global
3. 🌿 Source Control → Git
4. 🐞 Run & Debug → Ejecución y depuración
5. 🧩 Extensions → Extensiones

---

## 📂 Área _Explorer_

Aquí gestionas tu proyecto:

- Crear/eliminar archivos y carpetas
- Renombrar
- Mover elementos
- Ver estructura completa

### Incluye:

- Carpeta raíz del proyecto
- Acciones rápidas (nuevo archivo, nueva carpeta, refrescar)

---

## 🔎 Área _Search_

Permite buscar en todo el proyecto:

- `Ctrl + F` → Buscar en archivo actual
- `Ctrl + Shift + F` → Buscar en todo el proyecto

### Opciones:

- **Match Case** → Sensible a mayúsculas
- **Match Whole Word** → Coincidencias exactas
- **Regex** → Búsquedas avanzadas
- **Replace** → Reemplazar texto

---

## 🌿 Área _Source Control_

Permite gestionar versiones con Git.

### Inicializar repositorio:

```bash
git init
```

### Comandos básicos:

```bash
git status
git log --oneline --all
```

### Funciones:

- Crear commits
- Ver cambios
- Manejar ramas (branches)
- Conectar con GitHub
- También puedes ver el historial en Timeline.

---

## 🐞 Área Run and Debug

Permite ejecutar código y analizarlo paso a paso.

### Funciones:

- Ejecutar programas
- Colocar breakpoints
- Ver flujo de ejecución
- Inspeccionar variables

---

## 🧩 Área Extensions

Permite ampliar funcionalidades.

### Extensiones esenciales:

- Tema (Dark Theme)
- Iconos (Material Icon Theme)
- GitLens
- Indent Rainbow

### Para desarrollo web:

- Live Server

---

## 📊 Barra inferior (Status Bar)

### Lado izquierdo:

- Errores y advertencias

### Lado derecho:

- Línea y columna actual
- Tipo de indentación (espacios o tabs)
- Codificación (UTF-8)
- Tipo de salto de línea (CRLF / LF)
- Lenguaje activo

---

# ⚙️ User Settings

Acceso:

`Ctrl + Shift + P` → "User Settings"

Configuración mediante archivo `.json`

---

## 🧪 Configuraciones útiles

### Ocultar barra lateral

```json
"workbench.sideBar.visible": false
```

### Desactivar breadcrumbs

```json
"breadcrumbs.enabled": false
```

### Auto guardado

```json
"files.autoSave": "afterDelay",
"files.autoSaveDelay": 5000
```

### Edición vinculada (HTML)

```json
"editor.linkedEditing": true
```

### Mostrar archivos ocultos

```json
"files.exclude": {
"\*\*/.git": false
}
```

### Tamaño de indentación

```json
"editor.tabSize": 4
```

### Resaltar línea actual

```json
"editor.renderLineHighlight": "line"
```

---

# ⌨️ Atajos de teclado

- Guardar → `Ctrl + S`
- Abrir archivo → `Ctrl + O`
- Buscar global → `Ctrl + Shift + F`
- Buscar en archivo → `Ctrl + F`
- Reemplazar → `Ctrl + H`
- Paleta de comandos → `Ctrl + Shift + P`
- Nueva ventana → `Ctrl + Shift + N`
- Ir a línea → `Ctrl + G`
- Duplicar línea → `Shift + Alt + ↓`
- Mover línea → `Alt + ↑ / ↓`
- Múltiples cursores → `Ctrl + Alt + ↑ / ↓`
- Selección múltiple → `Ctrl + Shift + L`
- Ir a definición → `F12`
- Modo Zen → `Ctrl + K Z`

---

# 🧩 Snippets

Plantillas reutilizables para acelerar escritura de código.

### Ejemplo:

```json
{
  "Saludo": {
    "prefix": "sal",
    "body": ["console.log('Hola mi nombre es ${1:Nombre} y mi apellido es ${2:Apellido}')"],
    "description": "Saludo personalizado"
  }
}
```

### Tips:

- `${1}` → Posición del cursor
- `"editor.snippetSuggestions": "top"` → Prioriza snippets

---

# ⚡ Emmet

Herramienta para escribir HTML y CSS rápidamente mediante abreviaciones.

## HTML

### Ejemplos:

```
ul > li * 4 > a
header > nav > ul > li * 3 > a
```

### Clases e IDs:

```
div.container
div#main
```

### Estructuras complejas:

```
ul(li>a)\*4
```

---

## CSS

### Ejemplos:

- `m10` → margin: 10px;
- `p20` → padding: 20px;

### Unidades:

- `p` → porcentaje
- `e` → em

---

# 🤝 Pair Programming

Técnica donde 2 desarrolladores trabajan juntos:

- 👨‍✈️ **Piloto** → Escribe código
- 🧠 **Copiloto** → Analiza, detecta errores y optimiza

### Ejemplo moderno:

- **GitHub _Copilot_** como asistente inteligente

---

# 🧠 Buenas prácticas adicionales

- Usa siempre control de versiones (Git)
- Organiza tu proyecto por carpetas
- Nombra archivos de forma clara
- Mantén consistencia en indentación
- Instala solo extensiones necesarias (no conviertas VSCode en un monstruo lento)
- Aprende atajos: ahorran horas de vida
