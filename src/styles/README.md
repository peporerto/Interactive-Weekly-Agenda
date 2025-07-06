# Estructura de Estilos CSS

Esta carpeta contiene todos los estilos CSS organizados de manera modular y mantenible.

## 📁 Estructura de Carpetas

```
src/styles/
├── index.css              # Archivo principal que importa todos los estilos
├── themes/
│   └── variables.css      # Variables CSS para temas (claro/oscuro)
├── utils/
│   └── classes.css        # Clases CSS utilitarias
└── components/
    ├── RoleSelector.css   # Estilos específicos del componente RoleSelector
    ├── TaskCard.css       # Estilos específicos del componente TaskCard
    └── ...                # Otros componentes
```

## 🎨 Sistema de Variables CSS

### Variables de Colores
- `--color-primary`: Color principal (#007bff)
- `--color-success`: Color de éxito (#28a745)
- `--color-danger`: Color de peligro (#dc3545)
- `--bg-primary`: Fondo principal
- `--text-primary`: Texto principal
- `--border-primary`: Borde principal

### Variables de Espaciado
- `--spacing-xs`: 4px
- `--spacing-sm`: 8px
- `--spacing-md`: 16px
- `--spacing-lg`: 24px
- `--spacing-xl`: 32px

### Variables de Tipografía
- `--font-size-xs`: 12px
- `--font-size-sm`: 14px
- `--font-size-md`: 16px
- `--font-size-lg`: 18px
- `--font-size-xl`: 20px
- `--font-size-xxl`: 24px

## 🌙 Sistema de Temas

El sistema de temas funciona mediante el atributo `data-theme` en el elemento `body`:

```css
/* Tema claro (por defecto) */
:root {
  --bg-primary: #fff;
  --text-primary: #333;
}

/* Tema oscuro */
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #fff;
}
```

## 🧩 Clases Utilitarias

### Layout
- `.container`: Contenedor centrado con ancho máximo
- `.flex`: Display flex
- `.flex-center`: Flex con centrado
- `.grid`: Display grid
- `.grid-auto-fit`: Grid responsive

### Espaciado
- `.gap-xs`, `.gap-sm`, `.gap-md`, `.gap-lg`, `.gap-xl`
- `.p-xs`, `.p-sm`, `.p-md`, `.p-lg`, `.p-xl`
- `.m-xs`, `.m-sm`, `.m-md`, `.m-lg`, `.m-xl`

### Texto
- `.text-center`, `.text-left`, `.text-right`
- `.text-primary`, `.text-secondary`, `.text-muted`
- `.font-xs`, `.font-sm`, `.font-md`, `.font-lg`, `.font-xl`

### Componentes
- `.btn`, `.btn-primary`, `.btn-success`
- `.input`
- `.card`
- `.modal`, `.modal-overlay`

## 📝 Convenciones de Nomenclatura

### BEM (Block Element Modifier)
```css
.task-card              /* Bloque */
.task-card__title       /* Elemento */
.task-card__item        /* Elemento */
.task-card__item--active /* Modificador */
```

### Clases Utilitarias
```css
.flex                   /* Display flex */
.flex-center           /* Flex con centrado */
.text-primary          /* Color de texto primario */
.p-md                  /* Padding medio */
```

## 🔧 Cómo Usar

### 1. Importar en el componente
```jsx
import '../styles/components/MiComponente.css';
```

### 2. Usar clases CSS
```jsx
<div className="task-card">
  <h4 className="task-card__title">Título</h4>
  <button className="btn btn-primary">Botón</button>
</div>
```

### 3. Combinar clases utilitarias
```jsx
<div className="flex flex-center gap-md">
  <div className="card p-lg">
    Contenido
  </div>
</div>
```

## 🚀 Ventajas de esta Estructura

✅ **Mantenibilidad**: Estilos organizados por componente
✅ **Reutilización**: Clases utilitarias reutilizables
✅ **Consistencia**: Variables CSS para colores y espaciado
✅ **Temas**: Sistema de temas automático
✅ **Responsive**: Clases responsive incluidas
✅ **Performance**: CSS modular y optimizado

## 📱 Responsive Design

Las clases incluyen breakpoints para dispositivos móviles:

```css
@media (max-width: 768px) {
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  .grid-auto-fit {
    grid-template-columns: 1fr;
  }
}
```

## 🎯 Próximos Pasos

1. Refactorizar todos los componentes para usar CSS separado
2. Crear archivos CSS para cada componente
3. Implementar CSS Modules si es necesario
4. Agregar más clases utilitarias según necesidades
5. Optimizar el bundle de CSS 