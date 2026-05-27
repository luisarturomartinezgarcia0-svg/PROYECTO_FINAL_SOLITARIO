# 🌼 Jardín de Seño Daisiry

Sistema web administrativo desarrollado para el **Jardín de Seño Daisiry**, institución enfocada en la educación preescolar, estimulación temprana y atención inclusiva para niños con necesidades especiales.

El proyecto tiene como objetivo automatizar y organizar los procesos administrativos del centro educativo mediante una plataforma web conectada a una base de datos MySQL.

---

# 📌 Características Principales

- Registro de citas desde la página web
- Gestión de estudiantes y padres/tutores
- Control de pagos escolares
- Gestión de artículos escolares e inventario
- Registro de ventas y detalle de ventas
- Gestión de proveedores y suministros
- Administración de empleados y nómina
- Testimonios dinámicos desde la página web
- Diseño responsive adaptable a móviles
- Sistema conectado a MySQL
- Automatización mediante triggers y procedures

---

# 🛠 Tecnologías Utilizadas

## Backend
- Node.js
- Express.js
- MySQL2
- Express Handlebars (HBS)
- dotenv

## Frontend
- HTML5
- CSS3
- JavaScript
- Handlebars (.hbs)

## Base de Datos
- MySQL

---

# 📂 Estructura del Proyecto

```txt
PROYECTO_FINAL_SOLITARIO-main/
│
├── config/
│   └── db.js
│
├── routes/
│   └── index.routes.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── img/
│
├── views/
│   ├── layouts/
│   ├── partials/
│   └── home.hbs
│
├── .env
├── index.js
├── package.json
└── README.md
```

---

# ⚙️ Instalación del Proyecto

## 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tuusuario/jardin-daisiry.git
```

---

## 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 3️⃣ Configurar archivo `.env`

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=9000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=TU_PASSWORD
DB_NAME=jardin_daisiry
```

---

## 4️⃣ Ejecutar el proyecto

```bash
npm run dev
```

Servidor:

```txt
http://localhost:9000
```

---

# 🗄 Base de Datos

La base de datos contiene las siguientes tablas:

- citas
- padres
- estudiantes
- pagos
- articulos
- ventas
- detalle_venta
- proveedores
- suministros
- empleados
- roles
- nomina
- testimonios

---

# 🔗 Relaciones Principales

- Un padre puede tener varios estudiantes
- Un estudiante puede tener múltiples pagos
- Una venta puede contener varios artículos
- Un proveedor puede suministrar múltiples artículos
- Un empleado pertenece a un rol
- Un empleado puede tener múltiples registros de nómina

---

# ⚡ Triggers Implementados

## Disminuir stock automáticamente

Cuando se realiza una venta, el sistema reduce automáticamente el inventario.

## Verificar stock disponible

Evita ventas si no hay suficiente inventario disponible.

## Fecha automática en pagos

Asigna automáticamente la fecha del pago.

---

# 📦 Procedures Implementados

## Registrar pagos

Permite insertar pagos automáticamente.

## Cambiar estado del estudiante

Permite cambiar entre:

- Activo
- Inactivo

---

# 👨‍💻 Funcionalidades Web

## Página Principal
- Hero section
- Información institucional
- Misión, visión y valores
- Fechas importantes
- Preguntas frecuentes

## Formulario de citas
Los padres pueden solicitar información y agendar citas.

## Testimonios
Los usuarios pueden enviar testimonios desde la web y estos se almacenan en MySQL.

## Menú semanal
El menú escolar se carga dinámicamente desde la base de datos.

## Footer profesional
Incluye:
- contactos
- ubicación
- redes sociales
- mapa

---

# 📱 Responsive Design

La página fue diseñada para funcionar correctamente en:

- celulares
- tablets
- laptops
- pantallas grandes

Se implementó:
- menú hamburguesa
- tablas responsive
- imágenes optimizadas en formato `.webp`

---

# 🔒 Seguridad y Validaciones

- Uso de `required` en formularios
- Restricción de stock negativo
- Relaciones con claves foráneas
- Integridad referencial en MySQL

---

# 🚀 Futuras Mejoras

- Panel administrativo
- Inicio de sesión
- Gestión de usuarios
- Reportes PDF
- Exportación XML
- Dashboard estadístico
- Calendario académico dinámico

---

# 👨‍🎓 Proyecto Académico

Proyecto desarrollado como práctica final de:

- Diseño de Base de Datos
- Desarrollo Web
- Integración Frontend y Backend

---

# ❤️ Jardín de Seño Daisiry

> “Más que un colegio: un hogar, una comunidad y un jardín.”