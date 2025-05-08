# 🛍️ FakeStore App (React + Zustand + Vite)

Aplicación de consumo de productos desde la API de [FakeStore](https://fakestoreapi.com), que permite autenticación de usuario, navegación protegida y visualización de productos con sus detalles.

---

## 🚀 Tecnologías usadas

- ⚛️ **React 19** + **TypeScript**
- ⚡ **Vite**
- 📦 **Zustand** (manejo de estado)
- 🎯 **React Hook Form** + **Zod** (validación de formularios)
- 🧭 **React Router DOM**
- 💨 **Tailwind CSS**
- 🔐 Persistencia con `localStorage`
- 🌐 API externa: [fakestoreapi.com](https://fakestoreapi.com)

---

## 📱 Funcionalidades

### ✅ Login
- Autenticación con nombre de usuario y contraseña
- Llamada a `POST /auth/login`
- Manejo de errores y validación de campos

### 🛒 Listado de productos
- Carga de productos desde `GET /products`
- Manejo de estados de carga y error
- Vista en grilla responsiva

### 🔍 Detalle de producto
- Navegación a `/product/:id`
- Carga por ID directo desde `GET /products/:id`
- Renderizado protegido contra acceso sin datos

### 🔐 Rutas protegidas
- Acceso bloqueado si no hay token válido
- Redirección automática a `/login`

---

## 📂 Estructura de carpetas

<pre><code>```bash src/ ├── api/ # Llamadas a la API externa ├── components/ # Componentes reutilizables ├── features/ │ ├── auth/ # Login y auth store │ └── products/ # Product list, details y store ├── pages/ # Rutas protegidas ├── App.tsx # Routing principal └── main.tsx # Entry point ```</code></pre>
