# Clínica Familiar Tidwell — Sitio Web Oficial

Sitio web corporativo moderno en React para la Clínica Familiar Tidwell ubicada en Houston, TX.

## Estructura del Proyecto

```
clinica-tidwell/
├── public/
│   └── index.html          # HTML base con SEO meta tags y JSON-LD
├── src/
│   ├── contexts/
│   │   └── LanguageContext.jsx   # Contexto de idioma (ES/EN) + traducciones
│   ├── components/
│   │   ├── Header.jsx / .css     # Navbar responsive con toggle de idioma
│   │   ├── Hero.jsx / .css       # Sección hero con CTA y teléfono
│   │   ├── About.jsx / .css      # Historia y estadísticas de la clínica
│   │   ├── Services.jsx / .css   # 8 servicios médicos con íconos SVG
│   │   ├── Testimonials.jsx/.css # 3 reseñas reales con tarjetas interactivas
│   │   ├── Hours.jsx / .css      # Horarios + estado abierto/cerrado en tiempo real
│   │   ├── Contact.jsx / .css    # Formulario + mapa + datos de contacto
│   │   ├── Careers.jsx / .css    # Sección de empleo con posiciones disponibles
│   │   ├── Blog.jsx / .css       # Blog de salud con 3 artículos
│   │   └── Footer.jsx / .css     # Footer con redes sociales y navegación
│   ├── App.jsx                   # Componente raíz que ensambla todo
│   ├── index.js                  # Entry point React
│   └── index.css                 # Variables CSS globales + tipografía
└── package.json
```

## Instalación y Uso

### Requisitos
- Node.js 16+ 
- npm o yarn

### Pasos

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm start

# 3. Abrir en el navegador
http://localhost:3000

# 4. Construir para producción
npm run build
```

## Personalización

### Logo
El espacio del logo está reservado en `Header.jsx` dentro del componente `.logo-placeholder`.
Para insertar el logo real:
1. Coloque el archivo de imagen en `/public/logo.png` (o `.svg`)
2. En `Header.jsx`, reemplace el bloque `<div className="logo-icon-area">` con:
   ```jsx
   <img src="/logo.png" alt="Clínica Familiar Tidwell" height="48" />
   ```

### Imágenes
Las imágenes actuales usan URLs de wsimg.com. Para usar imágenes propias:
1. Coloque sus imágenes en `/public/images/`
2. Referencie como `/images/nombre-imagen.jpg`

### Colores
Edite las variables CSS en `src/index.css`:
```css
:root {
  --red: #C21E23;      /* Rojo principal (CTA críticos) */
  --blue: #1E59A8;     /* Azul principal (encabezados, íconos) */
  --blue-dark: #154080; /* Azul oscuro (hover, footer) */
  ...
}
```

### Traducciones
Todas las cadenas de texto están centralizadas en `src/contexts/LanguageContext.jsx`.
Edite el objeto `translations.es` para español y `translations.en` para inglés.

### Formulario de Contacto
El formulario abre el cliente de correo nativo con los datos prellenados dirigidos a:
`clinicafamiliartidwell@gmail.com`

Para integrar un servicio de formularios real (Formspree, EmailJS, etc.):
Edite la función `handleSubmit` en `src/components/Contact.jsx`.

**Ejemplo con Formspree:**
```jsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Google Maps
Reemplace el `src` del `<iframe>` en `Contact.jsx` con su embed URL real de Google Maps:
1. Vaya a Google Maps y busque su dirección
2. Haga clic en "Compartir" > "Insertar un mapa"
3. Copie el URL del iframe y reemplácelo en el componente

## SEO
El archivo `public/index.html` incluye:
- Meta tags primarios (title, description, keywords)
- Open Graph para redes sociales
- Twitter Card
- Geo tags para SEO local
- JSON-LD Schema.org MedicalClinic

## Despliegue

### Netlify (recomendado)
```bash
npm run build
# Arrastra la carpeta /build a netlify.com
```

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Agrega en package.json: "homepage": "https://usuario.github.io/clinica-tidwell"
npm run build
npx gh-pages -d build
```

## Contacto Técnico
Para soporte o modificaciones al sitio:
- Email: clinicafamiliartidwell@gmail.com
- Teléfono: 281-741-4838
