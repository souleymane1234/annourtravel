# Documentation API - Slider d'Images Dynamique

## Endpoint API

Le slider charge les données depuis l'endpoint suivant :
```
GET /api/slides
```

Ou si vous utilisez une variable d'environnement :
```
GET ${NEXT_PUBLIC_API_URL}/api/slides
```

Par défaut, il utilise : `https://api.annour-travel.com/api/slides`

## Structure de Données Attendue

L'API doit retourner un tableau JSON d'objets slides avec la structure suivante :

```json
[
  {
    "id": "string (unique)",
    "imageUrl": "string (URL complète de l'image principale)",
    "thumbnailUrl": "string (URL complète de l'image miniature, optionnel - utilise imageUrl si absent)",
    "subtitle": "string (ex: 'DUBAI', 'FRANCE', etc.)",
    "title": "string (ex: 'Voyager simplement')",
    "description": "string (texte optionnel affiché sous le titre)",
    "thumbnailTitle": "string (titre affiché sur la miniature, optionnel - utilise subtitle si absent)",
    "buttonText": "string (texte du bouton, optionnel - défaut: 'Contactez nous')",
    "buttonLink": "string (lien du bouton, optionnel - défaut: '#contact')",
    "order": "number (ordre d'affichage, optionnel - défaut: 0)",
    "isActive": "boolean (si le slide est actif, optionnel - défaut: true)"
  }
]
```

### Exemple de Réponse API

```json
[
  {
    "id": "1",
    "imageUrl": "https://votre-domaine.com/images/slider/dubai.jpg",
    "thumbnailUrl": "https://votre-domaine.com/images/slider/thumbs/dubai-thumb.jpg",
    "subtitle": "DUBAI",
    "title": "Voyager simplement",
    "description": "Découvrez nos offres spéciales pour Dubaï",
    "thumbnailTitle": "DUBAI",
    "buttonText": "Contactez nous",
    "buttonLink": "#contact",
    "order": 1,
    "isActive": true
  },
  {
    "id": "2",
    "imageUrl": "https://votre-domaine.com/images/slider/france.jpg",
    "thumbnailUrl": "https://votre-domaine.com/images/slider/thumbs/france-thumb.jpg",
    "subtitle": "FRANCE",
    "title": "Voyager simplement",
    "description": "",
    "thumbnailTitle": "FRANCE",
    "buttonText": "Contactez nous",
    "buttonLink": "#contact",
    "order": 2,
    "isActive": true
  }
]
```

## Dimensions d'Images Recommandées

### Image Principale (imageUrl)
- **Dimension recommandée** : **1920 x 1080 pixels** (format 16:9)
- **Format** : JPG, PNG ou WebP
- **Poids maximum** : 500 KB (optimisé pour le web)
- **Utilisation** : Utilisée comme background-image avec `background-size: cover`
- **Ratio** : Le slider fait 100vh de hauteur (hauteur de l'écran), donc l'image doit être assez large pour couvrir tous les écrans

**Note** : Pour les écrans 4K, vous pouvez utiliser 3840 x 2160 pixels, mais assurez-vous de compresser l'image.

### Image Miniature (thumbnailUrl)
- **Dimension recommandée** : **400 x 300 pixels** (format 4:3)
- **Format** : JPG, PNG ou WebP
- **Poids maximum** : 100 KB
- **Utilisation** : Affichée dans le slider vertical de miniatures

### Optimisation des Images

Pour de meilleures performances :
1. Compressez les images avec des outils comme TinyPNG, ImageOptim, ou Squoosh
2. Utilisez le format WebP pour une meilleure compression
3. Fournissez plusieurs tailles d'images si possible (responsive images)
4. Lazy load les images si nécessaire

## Gestion des Erreurs

Si l'API ne répond pas ou retourne une erreur, le slider utilisera automatiquement des images par défaut (les images statiques actuelles).

## Configuration Backend

Dans votre backoffice, vous devez implémenter :

1. **GET /api/slides** : Retourne la liste des slides actifs, triés par ordre
2. **POST /api/slides** : Créer un nouveau slide
3. **PUT /api/slides/:id** : Mettre à jour un slide
4. **DELETE /api/slides/:id** : Supprimer un slide
5. **PATCH /api/slides/:id** : Activer/Désactiver un slide (toggle isActive)

### Exemple de Structure de Base de Données (SQL)

```sql
CREATE TABLE slides (
  id VARCHAR(255) PRIMARY KEY,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  subtitle VARCHAR(255),
  title VARCHAR(255),
  description TEXT,
  thumbnail_title VARCHAR(255),
  button_text VARCHAR(100),
  button_link VARCHAR(255),
  slide_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Variables d'Environnement

Pour configurer l'URL de l'API, ajoutez dans votre fichier `.env.local` :

```env
NEXT_PUBLIC_API_URL=https://api.annour-travel.com
```

Ou pour la production :
```env
NEXT_PUBLIC_API_URL=https://api.annour-travel.com
```

