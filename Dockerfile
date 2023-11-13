# Usa la imagen oficial de Node como base
FROM node:14-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 4200 para acceder a la aplicación
EXPOSE 4200

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "start"]
