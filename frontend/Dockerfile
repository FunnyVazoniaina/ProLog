FROM node:22-alpine

WORKDIR /app

# Installer dépendances
COPY package*.json ./
RUN npm install

# Copier le code
COPY . .

# Exposer le port de Vite 
EXPOSE 5173

# Démarrer en mode dev
CMD ["npm", "run", "dev", "--", "--host"]
