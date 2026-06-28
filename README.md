# inHAUS — Clon de sitio web

Réplica fiel del concepto y la estructura de [casasinhaus.com](https://casasinhaus.com/):
un sitio de **casas modulares de hormigón de alta gama** con estética minimalista de lujo.

> ⚠️ **Proyecto de demostración / educativo.** No está afiliado a Casas inHAUS.
> El contenido textual y las imágenes son originales o de stock (Unsplash): no se
> reproduce texto ni fotografía con copyright del sitio original. Marca y nombres
> se usan únicamente con fines ilustrativos.

## Estructura

```
.
├── index.html          # Home: hero, colecciones, método llave en mano, stats, galería
├── colecciones.html    # Catálogo: colecciones 111 / Lite / By, modelos y FAQ
├── on-demand.html      # Diseño a medida (proyecto personalizado, 6 pasos)
├── professional.html   # B2B: promotores, arquitectos, inversores
├── nosotros.html       # Sobre inHAUS: historia, valores, eficiencia energética
├── contacto.html       # Formulario de contacto + datos
├── css/styles.css      # Sistema de diseño completo (tokens, componentes, responsive)
└── js/main.js          # Header dinámico, menú móvil, scroll-reveal, contadores, acordeón, form
```

## Características

- **100% estático** — HTML + CSS + JS, sin dependencias ni build.
- **Responsive** — móvil, tablet y escritorio.
- Header transparente que se vuelve sólido al hacer scroll; menú móvil a pantalla completa.
- Animaciones de aparición al hacer scroll y contadores animados.
- Acordeón de FAQ y formulario de contacto con validación (demo, no envía datos).
- Tipografías Jost + Manrope (Google Fonts) e imágenes de Unsplash.

## Cómo verlo en local

Basta con abrir `index.html` en el navegador. O sirviéndolo:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Despliegue

Listo para Vercel, Netlify o GitHub Pages (sitio estático, sin configuración).
Incluye `vercel.json` para despliegue directo.
