# Actividad 3 - Calculadora Web | UTM

Calculadora web básica con **HTML, CSS y JavaScript**. Se utiliza **Vite** únicamente para facilitar el desarrollo local. El proyecto también se puede publicar directamente en **GitHub Pages** sin servicios externos ni configuraciones especiales.

## Integrantes

- Juan Geovanny Bailón Reyes
- Lisbeth Dayanna Monroy Zamora
- Leidy Irene Párraga Reina
- Jhonny Oscar Vélez Chávez

Carrera / materia: Desarrollo de Aplicaciones Web, paralelo A. Universidad Técnica de Manabí.

## Funciones

Suma, resta, multiplicación, división, porcentajes, cambio de signo, decimales, borrado de último dígito y reinicio. Funciona con botones y teclado físico. La división entre cero muestra un mensaje de error.

## 1. Ejecutar en el computador

Requisito: Node.js 20.19 o superior (o Node.js 22.12 o superior) y npm.

Abrir la terminal en la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abrir la dirección que muestra Vite (normalmente `http://localhost:5173/`).

Para detenerlo: `Ctrl + C`.

La compilación es opcional y se ejecuta con:

```bash
npm run build
npm run preview
```

## 2. Publicar subiendo los archivos MANUALMENTE a GitHub

1. En https://github.com/new crear un repositorio **público**, por ejemplo `calculadora-web-utm`.
2. Entrar al repositorio y seleccionar **Add file > Upload files**.
3. Subir los cinco archivos de esta carpeta: `index.html`, `style.css`, `script.js`, `package.json` y `README.md`. **No subir** `node_modules` ni `dist`.
4. Pulsar **Commit changes**. Los archivos deben quedar en la **raíz** de la rama `main`, no dentro de una carpeta adicional.
5. Abrir **Settings > Pages**. En **Build and deployment**, seleccionar **Source: Deploy from a branch**, **Branch: main**, **Folder: /(root)**, y guardar.
6. Esperar a que GitHub Pages termine de desplegar y abrir el enlace generado en Settings > Pages.

La dirección será similar a:

`https://USUARIO.github.io/calculadora-web-utm/`

Reemplazar `USUARIO` por el nombre de la cuenta y `calculadora-web-utm` por el nombre real del repositorio. Esta es una dirección **de ejemplo**, no un enlace ya publicado.

**Importante:** GitHub Pages publica los archivos originales desde la raíz, por lo que no necesita instalar Vite en GitHub ni subir la carpeta `dist`.

## 3. Pruebas rápidas

- `8 + 5 =` → `13`
- `9 - 4 =` → `5`
- `7 × 6 =` → `42`
- `8 ÷ 2 =` → `4`
- `0.1 + 0.2 =` → `0.3`
- `10 ÷ 0 =` → mensaje de error
- `50 %` → `0.5`

## 4. Guion orientativo para el video (por grabar)

- **Juan:** abrir la página, explicar el HTML y la pantalla.
- **Lisbeth:** explicar los estilos CSS y la adaptación a celular.
- **Leidy:** explicar cómo JavaScript calcula las cuatro operaciones.
- **Jhonny:** mostrar los eventos de botones y teclado, ejecutar pruebas y enseñar GitHub Pages.

Esta división es **una sugerencia de exposición**, no una afirmación sobre quién realizó realmente el código. En los comentarios se indican las mismas secciones para encontrarlas fácilmente.

## 5. Evidencias para el informe PDF

Guardar capturas del proyecto abierto localmente, operaciones realizadas, archivos en el repositorio, configuración de GitHub Pages y sitio publicado. Añadir los enlaces reales del repositorio y del video cuando estén disponibles.
