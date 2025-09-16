
<div align="center">
   <h1>Proyecto Next.js - E-commerce de Muebles</h1>
  
   <p>
      <img src="https://img.shields.io/badge/Next.js-15-blue?logo=nextdotjs" alt="Next.js"/>
      <img src="https://img.shields.io/badge/React-19-61dafb?logo=react" alt="React"/>
      <img src="https://img.shields.io/badge/TailwindCSS-4-38bdf8?logo=tailwindcss" alt="Tailwind CSS"/>
      <img src="https://img.shields.io/badge/Firebase-11-ffca28?logo=firebase" alt="Firebase"/>
      <img src="https://img.shields.io/badge/License-MIT-green" alt="MIT License"/>
   </p>
   <p>
      <b>Aplicación web de e-commerce moderna, escalable y lista para producción.</b>
   </p>
</div>

---

## Tabla de Contenidos
- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Descripción

Este proyecto es una aplicación web de e-commerce desarrollada con Next.js, orientada a la venta de muebles. Incluye funcionalidades modernas y una arquitectura escalable, ideal para proyectos de aprendizaje, portafolios o como base para tiendas online.

<p align="center">
   <img src="public/assets/sofa1.jpg" alt="Ejemplo visual" width="400"/>
</p>

## Tecnologías principales

- **Next.js 15**: Framework de React para aplicaciones web modernas, con soporte SSR y rutas app.
- **React 19**: Librería principal para la construcción de interfaces de usuario.
- **Tailwind CSS**: Utilizado para el diseño responsivo y estilos modernos.
- **Firebase**: Backend para autenticación, base de datos y almacenamiento de productos.
- **Lucide React** y **React Icons**: Iconografía moderna y personalizable.
- **Sass**: Preprocesador CSS para estilos avanzados.
- **PostCSS**: Procesamiento de CSS moderno.
- **ESLint**: Linter para mantener la calidad del código.

## Estructura del proyecto

- `/app` - Rutas principales de la aplicación (home, admin, carrito, checkout, favoritos, login, productos, etc.).
- `/components` - Componentes reutilizables como Header, Footer, ProductList, ProductDetailsClient, etc.
- `/actions` - Lógica para obtención y migración de productos.
- `/providers` - Contextos globales como AuthProvider y CartProvider.
- `/assets` y `/public/assets` - Imágenes y recursos estáticos.
- `firebase.js` - Configuración de Firebase.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Configura tus credenciales de Firebase en `firebase.js`.
4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

## Uso

- Navega por los productos, agrégalos al carrito y realiza compras.
- Administra productos desde el panel de administración.
- Autentícate y gestiona favoritos.

## Contribuir

¿Quieres colaborar? Lee el archivo [CONTRIBUTING.md](CONTRIBUTING.md) para conocer las pautas y el flujo de trabajo recomendado.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

Proyecto realizado como entrega final para CoderHouse. Puedes personalizarlo y expandirlo según tus necesidades.
