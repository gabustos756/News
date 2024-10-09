# News App

## Descripción

News App es una aplicación React que permite a los usuarios buscar y visualizar noticias de diversas fuentes. La aplicación cuenta con un diseño intuitivo y una experiencia de usuario fluida, permitiendo navegar entre diferentes artículos de manera eficiente.

## Funcionalidades

- **Búsqueda de Noticias**: Los usuarios pueden buscar noticias utilizando palabras clave.
- **Visualización de Artículos**: Cada noticia se presenta en una tarjeta que incluye un título, una breve descripción, la fecha de publicación y un enlace para leer más.
- **Despliegue en GitHub Pages**: La aplicación se encuentra alojada en GitHub Pages, lo que permite un acceso fácil y rápido.

## Componentes Principales

- **Header**: Contiene el logo de la aplicación y un campo de búsqueda que permite filtrar las noticias.
- **Home**: Componente principal donde se cargan y muestran las noticias. Administra la lógica de búsqueda y paginación.
- **NewsCard**: Representa cada artículo de noticia, mostrando su contenido y un enlace a la fuente original.

## Dockerfile

El proyecto incluye un `Dockerfile` que permite construir una imagen de Docker para la aplicación utilizando Nginx como servidor. A continuación se describen las etapas del `Dockerfile`:

1. **Construcción**: Utiliza una imagen de Node.js para instalar las dependencias y construir la aplicación.
2. **Servidor**: Copia los archivos construidos a una imagen de Nginx para servir la aplicación.

### Contenido del Dockerfile

```dockerfile
# Etapa de construcción
FROM node:16 AS build

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
