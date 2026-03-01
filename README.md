# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

1. Módulo: Crear nuevo plan (Cuotas / Membresías / Planes)

Justificación:

Desarrollé este módulo siguiendo exactamente la estructura proporcionada en el material de la prueba. Me aseguré de respetar la organización original (datos generales, precios, accesos, beneficios y observaciones), manteniendo tanto la distribución visual como la lógica del diseño entregado.

Conservé la división por secciones porque permite ordenar la información por tipo y facilita que el usuario avance de forma clara y estructurada al crear un plan. También implementé las tarjetas plegables tal como estaban definidas, ya que ayudan a gestionar mejor la información y mantener la interfaz limpia.

En resumen, me aseguré de reproducir fielmente el layout original, garantizando coherencia visual, funcionalidad correcta en cada sección y una experiencia alineada con la intención del diseño suministrado.

2. Módulo: Sidebar Container (Vista intermedia / contenedor neutro)

Justificación:

Este componente lo desarrollé respetando completamente la estructura planteada en la prueba. Me aseguré de mantener su función como contenedor neutro y reutilizable, con un espacio lateral fijo capaz de cargar distintos contenidos sin modificar su base estructural.

Conservé la separación entre contenedor y contenido interno, ya que esto mejora la mantenibilidad y evita duplicación de estilos o comportamientos. Además, respeté la lógica original para que el sidebar gestione acciones generales como apertura, cierre, tamaños y animaciones, permitiendo que cada módulo se enfoque únicamente en su propio contenido.

En resumen, me aseguré de que el componente fuera flexible, reutilizable y coherente con el diseño original.

3. Módulo: Perfil de Usuario / Técnico

Justificación:

Desarrollé este módulo siguiendo exactamente la estructura entregada en la prueba. Me aseguré de mantener la vista compacta enfocada en mostrar identidad, estado y etiquetas del usuario/técnico, respetando la organización visual original.

Centralicé la información en un solo contenedor para cumplir con la intención del diseño: permitir una consulta rápida sin sobrecargar la interfaz. También conservé la distribución de componentes para que el perfil pudiera integrarse fácilmente dentro de otros sidebars del sistema, como en vistas de incidencias u órdenes de trabajo.

La sección de etiquetas fue implementada tal como estaba definida, con una estructura modular y preparada para manejar contenido dinámico, asegurando flexibilidad y escalabilidad.

En resumen, me aseguré de que el módulo fuera fiel al diseño original, compacto, claro y fácilmente integrable con el resto del sistema.
