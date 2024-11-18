# 1. Utilisez une image Node.js optimisée
FROM node:22.11-alpine AS builder

# 2. Définir le répertoire de travail
WORKDIR /app

# 3. Copier les fichiers nécessaires pour installer les dépendances
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier le reste du code source
COPY . .

# 6. Construire l'application Next.js en production
RUN npm run build

# 7. Réduire la taille de l'image avec une étape multi-stage
FROM node:22.11-alpine

# 8. Copier uniquement les fichiers nécessaires pour exécuter l'application
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# 9. Définir la variable d'environnement pour la production
ENV NODE_ENV=production

# 10. Exposer le port 3000
EXPOSE 3000

# 11. Lancer l'application Next.js
CMD ["npm", "run", "start"]
