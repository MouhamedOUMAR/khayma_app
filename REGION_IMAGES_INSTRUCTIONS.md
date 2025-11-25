# Instructions pour ajouter les images des régions

## Images à télécharger et placer dans `public/images/regions/`

Téléchargez les 6 images que vous avez fournies et nommez-les comme suit :

### Image 1 - Chinguetti (Mosquée historique)
- **Nom du fichier**: `adrar-chinguetti.jpg`
- **Description**: Mosquée historique de Chinguetti avec architecture traditionnelle
- **Destination**: `public/images/regions/adrar-chinguetti.jpg`

### Image 2 - Structure traditionnelle (Sable)
- **Nom du fichier**: `tagant-1.jpg`
- **Description**: Structure traditionnelle avec le sable du désert
- **Destination**: `public/images/regions/tagant-1.jpg`

### Image 3 - Vue aérienne du village
- **Nom du fichier**: `hodh-village.jpg`
- **Description**: Vue aérienne d'un village mauritanien traditionnel
- **Destination**: `public/images/regions/hodh-village.jpg`

### Image 4 - Agriculture/Irrigation
- **Nom du fichier**: `gorgol-agriculture.jpg`
- **Description**: Scène d'agriculture avec irrigation traditionnelle
- **Destination**: `public/images/regions/gorgol-agriculture.jpg`

### Image 5 - Oasis avec rochers et eau
- **Nom du fichier**: `tagant-oasis.jpg`
- **Description**: Oasis luxuriante avec formations rocheuses et points d'eau
- **Destination**: `public/images/regions/tagant-oasis.jpg`

### Image 6 - Rue de ville
- **Nom du fichier**: `trarza-ville.jpg`
- **Description**: Rue d'une ville mauritanienne
- **Destination**: `public/images/regions/trarza-ville.jpg`

## Images additionnelles (optionnel)

Si vous avez des images supplémentaires pour ces régions, ajoutez-les avec ces noms :

- `adrar-1.jpg`, `adrar-2.jpg` - Plus d'images de la région Adrar
- `inchiri-desert.jpg` - Paysage désertique de l'Inchiri
- `gorgol-1.jpg` - Image supplémentaire de Gorgol
- `hodh-1.jpg` - Image supplémentaire de Hodh

## Étapes pour ajouter les images

1. Téléchargez les 6 images depuis les URLs que vous avez fournies
2. Renommez-les selon le tableau ci-dessus
3. Placez-les toutes dans le dossier : `public/images/regions/`
4. Assurez-vous que les noms de fichiers correspondent exactement (sensible à la casse)
5. Les images seront automatiquement disponibles dans l'application

## Format des images recommandé

- **Format**: JPG ou JPEG
- **Résolution minimale**: 1200x800 pixels
- **Taille maximale**: 2 MB par image
- **Ratio d'aspect**: 3:2 ou 4:3 recommandé

## Vérification

Après avoir ajouté les images :
1. Exécutez `npm run build` pour vérifier qu'il n'y a pas d'erreurs
2. Lancez `ng serve` pour voir le site en développement
3. Naviguez vers la page "Régions"
4. Cliquez sur "Explorer la galerie" pour chaque région
5. Vérifiez que toutes les images s'affichent correctement dans l'explorateur

## Fonctionnalités de l'explorateur d'images

✅ Modal plein écran pour visualiser les images
✅ Navigation avec les flèches gauche/droite
✅ Miniatures cliquables en bas pour navigation rapide
✅ Compteur d'images (Image X sur Y)
✅ Badge indiquant le nombre de photos par région
✅ Fermeture avec le bouton X ou ESC (à implémenter)
✅ Effet de zoom au survol des cartes de région
✅ Design responsive pour mobile

## URLs des images originales

Image 1: https://i.imgur.com/[ID-image-1].jpg (Chinguetti)
Image 2: https://i.imgur.com/[ID-image-2].jpg (Structure traditionnelle)
Image 3: https://i.imgur.com/[ID-image-3].jpg (Vue aérienne)
Image 4: https://i.imgur.com/[ID-image-4].jpg (Agriculture)
Image 5: https://i.imgur.com/[ID-image-5].jpg (Oasis)
Image 6: https://i.imgur.com/[ID-image-6].jpg (Rue de ville)
