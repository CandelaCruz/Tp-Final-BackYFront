# 🛒 Proyecto Final - CRUD de Productos con Búsqueda 🔍

**Autor:** Candela Cruz  
**Repositorio:** [Tp-Final-BackYFront](https://github.com/CandelaCruz/Tp-Final-BackYFront.git)

## ✨ Descripción

Este proyecto es una aplicación full stack desarrollada como **Trabajo final**. Permite gestionar productos mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar) e incorpora una nueva funcionalidad destacada:  
🔍 **Búsqueda dinámica de productos por nombre**, insensible a mayúsculas, minúsculas y parcialmente coincidente.

---

## 🧪 Tecnologías utilizadas

### 🔧 Backend:
- Node.js
- Express
- MongoDB + Mongoose
- TypeScript
- JWT para autenticación

### 🎨 Frontend:
- React
- Vite
- Context API
- CSS (estilos personalizados)

---

## ⚙️ Instrucciones para ejecutar el proyecto

### 1️⃣ Cloná el repositorio:

```bash
git clone https://github.com/CandelaCruz/Tp-Final-BackYFront.git
cd Tp-Final-BackYFront
```

### 2️⃣ Configurar Backend:

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

> El servidor correrá en: `http://localhost:1234`

### 3️⃣ Configurar Frontend:

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

> La app se abrirá en: `http://localhost:5173`

---

## 🌟 Ejemplos de uso de la nueva funcionalidad

- 📥 Escribí parte del nombre de un producto en la barra de búsqueda:  
  Ejemplo: si escribís **"mesa"**, te mostrará todos los productos que contengan esa palabra, como `Mesa ratona`, `Mesada cocina`, etc.

- 🔁 Si no hay coincidencias, se muestra el mensaje: **"No se encontraron productos."**

- 🔄 Al hacer clic en **"Ver todos"**, vuelve a listar todos los productos disponibles.

---

## 📁 Variables de entorno

A continuación un ejemplo de lo que deberías tener en tu archivo `.env` para que el proyecto funcione correctamente:

### 📂 backend/.env.example

```env
PORT=
URI_DB=
JWT_SECRET=clave-super-secreta
```

### 📂 frontend/.env.example

```env
VITE_API_URL=
```

---

## 🎓 Proyecto Final

Este trabajo fue realizado como entrega final de la cursada de backend con TypeScript, Express y MongoDB.  
¡Gracias por leer! 💜