# Utilise Node.js 22 basé sur Alpine 
FROM node:22-alpine

# Définir le dossier de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json d'abord
COPY package*.json ./

# Installer uniquement les dépendances de prod
RUN npm install --production

# Copier le reste du code
COPY . .

# Exposer le port utilisé par Express
EXPOSE 5000

# Commande par défaut pour démarrer ton backend
CMD ["node", "server.js"]
