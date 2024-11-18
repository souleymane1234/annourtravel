# Étape 1 : Builder l'application
FROM node:18 AS builder

WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Générer le build de l'application
RUN npm run build

# Étape 2 : Lancer l'application en production
FROM node:18-alpine AS runner

WORKDIR /app

# Installer uniquement les dépendances nécessaires en production
COPY package.json package-lock.json ./
RUN npm install --production

# Copier le build de l'étape précédente
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

EXPOSE 8080

# Commande pour démarrer le serveur Next.js
CMD ["npm", "run", "start"]
