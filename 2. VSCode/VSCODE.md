# 🧠 Visual Studio Code (VSCode)

Programar usando únicamente un editor de texto plano es técnicamente posible.  
También es técnicamente posible construir una casa con una cuchara.  
La diferencia está en cuánto sufrimiento innecesario quieres tolerar.

Por eso existen los **editores de código** y los **IDE**, herramientas diseñadas para facilitar el desarrollo de software moderno.

Actualmente, el editor más utilizado es **Visual Studio Code (VSCode)**.

---

# 🚀 ¿Qué es VSCode?

**Visual Studio Code** es un editor de código desarrollado por [Microsoft](https://code.visualstudio.com?utm_source=chatgpt.com).

Está basado en:

- Electron
- TypeScript
- Node.js

Y combina:

- Ligereza
- Personalización
- Soporte masivo de extensiones
- Herramientas avanzadas de desarrollo

---

# ⚔️ Editor de texto vs Editor de código vs IDE

| Herramienta      | Función                        |
| ---------------- | ------------------------------ |
| Bloc de notas    | Texto plano                    |
| Editor de código | Ayuda a programar              |
| IDE              | Entorno completo de desarrollo |

---

## 📄 Editor de texto

Solo permite escribir texto.

Ejemplos:

- Bloc de notas
- Nano
- Gedit

No tiene:

- Autocompletado
- Depuración
- Detección de errores
- Integración avanzada

---

## 💻 Editor de código

Está diseñado específicamente para programar.

Incluye:

- Colores de sintaxis
- IntelliSense
- Extensiones
- Terminal integrada

VSCode pertenece principalmente a esta categoría.

---

## 🧠 IDE (Integrated Development Environment)

Incluye herramientas completas de desarrollo:

- Editor
- Compilador
- Depurador
- Gestión de dependencias
- Testing
- Integración avanzada

Ejemplos:

- IntelliJ IDEA
- Visual Studio
- Android Studio

---

# 🧩 ¿Por qué VSCode es tan popular?

## 🧠 IntelliSense

Sistema inteligente de autocompletado.

Ofrece:

- Sugerencias de código
- Métodos disponibles
- Parámetros
- Tipado
- Detección de errores

Ejemplo:

```js id="i0u3jv"
document.querySelector()
```

VSCode detecta automáticamente métodos y propiedades.

---

## 🔌 Extensiones

Una de las mayores fortalezas de VSCode.

Puedes convertirlo en:

- Editor frontend
- IDE backend
- Editor Python
- Entorno DevOps
- Editor para Docker
- Editor para IA
- Editor para ciencia de datos

Todo mediante extensiones.

---

## 🌿 Integración con Git

VSCode incluye soporte nativo para Git.

Permite:

- Ver cambios
- Crear commits
- Manejar ramas
- Resolver conflictos
- Conectarse con GitHub

Sin abrir terminal. Aunque eventualmente igual terminarás abriendo terminal porque Git disfruta humillando humanos en múltiples interfaces.

---

## 🐞 Debugging

Depuración integrada.

Permite:

- Ejecutar paso a paso
- Colocar breakpoints
- Ver variables
- Analizar stack traces

Esto reduce muchísimo el clásico:

```txt
"¿Por qué no funciona?"
```

seguido de mirar el monitor con resentimiento durante 20 minutos.

---

## 🎨 Personalización

VSCode puede modificarse casi completamente.

Puedes cambiar:

- Temas
- Iconos
- Fuentes
- Atajos
- Layout
- Animaciones
- Comportamiento interno

---

## ⚡ Rendimiento

VSCode es relativamente ligero comparado con IDE completos.

Aunque si instalas 73 extensiones inútiles porque “algún día podrían servir”, eventualmente se transforma en una tostadora existencial con sintaxis coloreada.

---

# ⚙️ Instalación

## 🌐 Sitio oficial

[Visual Studio Code Official Website](https://code.visualstudio.com?utm_source=chatgpt.com)

---

## 📥 Pasos

1. Entrar al sitio oficial
2. Descargar según tu sistema operativo
3. Ejecutar instalador
4. Completar instalación

---

## 🖥️ Sistemas compatibles

- Windows
- Linux
- macOS

---

# 🧱 Interfaz de VSCode

La interfaz está dividida en múltiples áreas.

---

# 📌 Barra de actividad (Activity Bar)

Ubicada normalmente a la izquierda.

Incluye accesos rápidos a:

1. 📁 Explorer
2. 🔍 Search
3. 🌿 Source Control
4. 🐞 Run & Debug
5. 🧩 Extensions

---

# 📂 Explorer

Gestión de archivos y carpetas.

Permite:

- Crear archivos
- Crear carpetas
- Renombrar
- Mover elementos
- Abrir proyectos

---

## 📁 Workspace

VSCode trabaja mediante **workspaces**.

Un workspace representa:

- Un proyecto
- O múltiples carpetas relacionadas

---

## 📄 Archivos importantes comunes

| Archivo                 | Función                    |
| ----------------------- | -------------------------- |
| `package.json`          | Dependencias Node.js       |
| `.gitignore`            | Archivos ignorados por Git |
| `README.md`             | Documentación              |
| `.vscode/settings.json` | Configuración local        |

---

# 🔎 Search

Permite buscar texto dentro del proyecto completo.

---

## 🔍 Atajos útiles

| Acción            | Atajo              |
| ----------------- | ------------------ |
| Buscar en archivo | `Ctrl + F`         |
| Reemplazar        | `Ctrl + H`         |
| Buscar global     | `Ctrl + Shift + F` |

---

## 🧪 Expresiones regulares (Regex)

VSCode soporta búsquedas avanzadas mediante Regex.

Ejemplo:

```regex
^[A-Z].*
```

Busca líneas que comiencen con mayúscula.

---

# 🌿 Source Control

Sección integrada de Git.

---

## 🔧 Inicializar repositorio

```bash id="x5th1x"
git init
```

---

## 📊 Ver estado

```bash id="q9mk4f"
git status
```

---

## 📜 Historial

```bash id="vqohz2"
git log --oneline --all
```

---

## 🌱 Branches

Git permite trabajar con ramas independientes.

Ejemplo:

```bash id="2t5mlv"
git checkout -b nueva-rama
```

---

## 🔗 Conexión con GitHub

VSCode puede:

- Clonar repositorios
- Publicar proyectos
- Hacer pull/push
- Resolver conflictos

---

# 🐞 Run and Debug

Área dedicada a ejecución y depuración.

---

## 🧷 Breakpoints

Permiten pausar ejecución.

Se crean haciendo clic al lado del número de línea.

---

## ▶️ Controles principales

| Acción    | Función             |
| --------- | ------------------- |
| Continue  | Continuar ejecución |
| Step Over | Saltar línea        |
| Step Into | Entrar función      |
| Step Out  | Salir función       |

---

## 🧠 Variables

Durante debugging puedes inspeccionar:

- Variables locales
- Variables globales
- Call stack
- Watch expressions

---

# 🧩 Extensions

Marketplace de extensiones.

---

# 📦 Extensiones recomendadas

## 🎨 Apariencia

- Nexora Theme
- One Dark Pro
- Catppuccin

---

## 🌿 Git

- GitLens

---

## 🌐 Desarrollo web

- Live Server
- Prettier
- ESLint

---

## 🧠 Productividad

- Error Lens
- Indent Rainbow
- Todo Tree

---

## 🐳 DevOps

- Docker
- Remote SSH

---

# ⚡ Live Preview

Extensión muy usada en frontend.

Permite:

- Abrir proyectos web localmente
- Recargar automáticamente al guardar

Ideal para HTML/CSS/JS.

---

# 📊 Status Bar

Barra inferior del editor.

---

## 📍 Información mostrada

- Rama Git actual
- Errores
- Advertencias
- Línea y columna
- Tipo de archivo
- UTF-8
- LF / CRLF
- Espacios o tabs

---

# ⚙️ Configuración

VSCode usa configuraciones JSON.

---

# 🧪 User Settings

Acceso:

```txt
Ctrl + Shift + P
```

Buscar:

```txt
Preferences: Open User Settings (JSON)
```

---

# 🧩 Configuraciones útiles

## 💾 Auto guardado

```json id="20m2wv"
"files.autoSave": "afterDelay",
"files.autoSaveDelay": 3000
```

---

## 🔗 Linked Editing

Muy útil en HTML.

```json id="ly7y5e"
"editor.linkedEditing": true
```

---

## 🧹 Minimapa

Desactivar minimapa:

```json id="0exm1z"
"editor.minimap.enabled": false
```

---

## 📏 Tamaño de fuente

```json id="n24uwl"
"editor.fontSize": 16
```

---

## ✨ Fuente personalizada

```json id="40ls7g"
"editor.fontFamily": "JetBrains Mono"
```

---

## 🔤 Ligaduras tipográficas

```json id="j6nmlz"
"editor.fontLigatures": true
```

---

## 🧠 Formateo automático

```json id="rj6az6"
"editor.formatOnSave": true
```

---

## 📂 Excluir carpetas

```json id="s0zw93"
"files.exclude": {
  "**/.git": true,
  "**/node_modules": true
}
```

---

# 🎨 Temas

VSCode soporta temas completos.

---

## 🌑 Temas populares

- Nexora Theme
- One Dark Pro
- Dracula
- Catppuccin
- Tokyo Night
- Nord

Porque claramente escribir código mejora psicológicamente cuando los colores correctos activan las neuronas decorativas del desarrollador.

---

# 🔤 Fuentes populares para proPgramar

- JetBrains Mono
- Fira Code
- Cascadia Code
- Inter
- SF Mono

---

# ⌨️ Atajos de teclado

## 📄 Navegación

| Acción          | Atajo              |
| --------------- | ------------------ |
| Abrir archivo   | `Ctrl + O`         |
| Ir a línea      | `Ctrl + G`         |
| Paleta comandos | `Ctrl + Shift + P` |

---

## ✏️ Edición

| Acción         | Atajo                |
| -------------- | -------------------- |
| Duplicar línea | `Shift + Alt + ↓`    |
| Mover línea    | `Alt + ↑ / ↓`        |
| Multicursor    | `Ctrl + Alt + ↑ / ↓` |

---

## 🧠 Productividad

| Acción             | Atajo        |
| ------------------ | ------------ |
| Modo Zen           | `Ctrl + K Z` |
| Terminal integrada | `Ctrl + J`   |
| Comentar línea     | `Ctrl + /`   |

---

# 🧩 Snippets

Plantillas reutilizables.

---

## 📦 Ejemplo

```json id="4al91o"
{
  "Console Log": {
    "prefix": "clg",
    "body": ["console.log(${1});"]
  }
}
```

---

## 🔢 Variables especiales

| Variable         | Función        |
| ---------------- | -------------- |
| `${1}`           | Primer cursor  |
| `${2}`           | Segundo cursor |
| `${TM_FILENAME}` | Nombre archivo |

---

# ⚡ Emmet

Sistema de abreviaciones para HTML y CSS.

---

## 🏗️ HTML

```txt
ul>li*5>a
```

Resultado:

```html id="0s2ldu"
<ul>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
  <li><a href=""></a></li>
</ul>
```

---

## 🎨 CSS

```txt
m10
```

Resultado:

```css id="3cl82v"
margin: 10px;
```

---

# 💻 Terminal integrada

VSCode incluye terminal integrada.

Acceso:

```txt
Ctrl + `
```

---

## 🖥️ Terminales compatibles

- PowerShell
- CMD
- Bash
- Zsh

---

# 🧠 IntelliSense

Sistema inteligente basado en:

- Tipado
- Contexto
- Extensiones
- Lenguaje

---

## Compatible con:

- JavaScript
- TypeScript
- Python
- C#
- Java
- Go
- Rust

y básicamente cualquier lenguaje que alguien haya decidido torturar profesionalmente.

---

# 🤝 Pair Programming

Dos desarrolladores trabajando juntos.

---

## Roles

| Rol         | Función            |
| ----------- | ------------------ |
| 👨‍✈️ Piloto   | Escribe código     |
| 🧠 Copiloto | Analiza y optimiza |

---

## Variante moderna

Uso de asistentes IA como:

- [GitHub Copilot](https://github.com/features/copilot?utm_source=chatgpt.com)
- [Cursor](https://cursor.com?utm_source=chatgpt.com)
- [Codeium](https://codeium.com?utm_source=chatgpt.com)

---

# 🧼 Buenas prácticas

## ✅ Haz esto

- Usa Git siempre
- Aprende atajos
- Organiza carpetas
- Mantén consistencia
- Usa Prettier/ESLint
- Configura auto guardado

---

## ❌ Evita esto

- Instalar extensiones innecesarias
- Mezclar tabs y espacios
- Ignorar errores del linter
- Trabajar sin control de versiones
- Guardar archivos como `final_final_ahora_si.js`

La informática está llena de tragedias evitables.

---

# 🏁 Conclusión

VSCode se volvió estándar porque logra un equilibrio extremadamente raro:

- Ligero
- Potente
- Flexible
- Extensible
- Fácil de usar

No es perfecto. Ninguna herramienta lo es.  
Pero para desarrollo moderno, pocas ofrecen tanta productividad con tan poca fricción.

Y considerando cómo suele comportarse el software en general, eso ya roza la ingeniería milagrosa.
