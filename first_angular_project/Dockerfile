#Etapa 1: Construir el proyecto Angular.
#Usa la imagen base node:alpine,
#que es una versión ligera de Node.js y alpine versión ligera de linux.
#La palabra clave AS builder etiqueta esta etapa de construcción como builder,
#permitiendo que podamos referenciarla en etapas posteriores.
FROM node:alpine AS builder


#Establece el directorio de trabajo dentro del contenedor en /app.
#Todos los comandos posteriores se ejecutarán en este directorio.
WORKDIR /app

#Copia todos los archivos y carpetas del directorio actual
#(donde se encuentra el Dockerfile) al directorio /app en el contenedor.
COPY . /app

#Ejecuta el comando yarn install para instalar todas las dependencias (yarn es más rápido y factible que npm)
#listadas en el archivo package.json.
RUN yarn install

#Ejecuta un script llamado ilocalize definido en el package.json para compilar la aplicación Angular
#con soporte para múltiples idiomas.
RUN yarn run ilocalize

# Etapa 2: Servir con Nginx.
#Usa la imagen base nginx:alpine, una versión ligera de Nginx, para servir la aplicación.
FROM nginx:alpine

#Copia los archivos compilados del idioma inglés (en-US) desde la etapa de construcción builder a la carpeta
#/usr/share/nginx/html/en-US en el contenedor Nginx.
COPY --from=builder /app/dist/first_angular_project/browser/en-US /usr/share/nginx/html/en-US
#Copia los archivos compilados del idioma español (es-MX) desde la etapa de construcción builder a la carpeta
#/usr/share/nginx/html/es-MX en el contenedor Nginx.
COPY --from=builder /app/dist/first_angular_project/browser/es-MX /usr/share/nginx/html/es-MX

#Copia un archivo de configuración personalizado de Nginx llamado nginx.conf desde tu máquina local al
#contenedor en la ruta /etc/nginx/nginx.conf.
COPY nginx.conf /etc/nginx/nginx.conf

#Indica que el contenedor escuchará en el puerto 80. Esto es útil para la configuración de red del contenedor.
EXPOSE 80

#Define el comando predeterminado para ejecutar Nginx en primer plano cuando se inicie el contenedor.
#La opción -g 'daemon off;' es necesaria para que Nginx se ejecute en primer plano en lugar
#de como un daemon (proceso en segundo plano), lo cual es estándar en contenedores Docker.
#CMD: Define el comando predeterminado que se ejecutará cuando se inicie un contenedor a partir de la imagen.
CMD ["nginx", "-g", "daemon off;"]
