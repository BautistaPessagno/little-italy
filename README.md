# Little Italy

Sitio web de una sola página para **Little Italy**, un emprendimiento de pastas
y salsas proteicas congeladas. La propuesta: comida simple, rica y saludable,
lista para pasar del freezer a la mesa en minutos.

Construido con **Next.js (App Router)** y **Tailwind CSS v4**.

## Estructura de la página

- **Hero** — la idea principal: comé rico, sano y en minutos.
- **Propuesta** — las líneas de producto (pastas, salsas y packs semanales) y
  por qué elegirlas.
- **Contacto** — cómo hacer el pedido (WhatsApp, email, redes y zona de entrega).

## Requisitos

- Node.js 18.18 o superior.

## Cómo usarlo

```bash
npm install
npm run dev      # entorno de desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # servir el build de producción
```

## Personalizar el contenido

Todo el texto y los datos de contacto viven en `app/page.tsx`. Editá ese
archivo para actualizar productos, precios o medios de contacto. Los colores y
tipografías se configuran en `app/globals.css`.
