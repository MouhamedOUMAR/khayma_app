# Instructions pour ajouter les images des Kheymas

J'ai mis à jour votre application pour utiliser de vraies images au lieu des dégradés de couleur. Voici comment ajouter vos photos de kheymas :

## Structure des dossiers

Les images doivent être placées dans : `src/assets/images/kheymas/`

## Images requises

Vous devez enregistrer les 6 images que vous m'avez partagées avec les noms suivants :

### 1. kheyma-nema.jpg
- **Image à utiliser** : Photo avec vue aérienne de l'oasis OU la tente blanche
- **Description** : Pour Kheyma Néma (Oasis)
- **Emplacement** : `src/assets/images/kheymas/kheyma-nema.jpg`

### 2. kheyma-qualata.jpg
- **Image à utiliser** : Photo de la tente avec les chameaux
- **Description** : Pour Kheyma Qualâta (Semi-Désert)
- **Emplacement** : `src/assets/images/kheymas/kheyma-qualata.jpg`

### 3. kheyma-atar.jpg
- **Image à utiliser** : Photo de la tente blanche sur les dunes de sable
- **Description** : Pour Kheyma Atar (Désert - POPULAIRE)
- **Emplacement** : `src/assets/images/kheymas/kheyma-atar.jpg`

### 4. kheyma-tichit.jpg
- **Image à utiliser** : Photo de la tente avec clôture (avec l'étiquette "iStock")
- **Description** : Pour Kheyma Tichit (Oasis)
- **Emplacement** : `src/assets/images/kheymas/kheyma-tichit.jpg`

### 5. kheyma-chinguetti.jpg
- **Image à utiliser** : Une des photos de tente que vous préférez
- **Description** : Pour Kheyma Chinguetti (Désert)
- **Emplacement** : `src/assets/images/kheymas/kheyma-chinguetti.jpg`

### 6. kheyma-rosso.jpg
- **Image à utiliser** : Une des photos de tente restantes
- **Description** : Pour Kheyma Rosso (Rivière - NOUVEAU)
- **Emplacement** : `src/assets/images/kheymas/kheyma-rosso.jpg`

## Image pour l'intérieur (optionnel)

La photo avec le bol en laiton et les textiles colorés peut être utilisée pour :
- Une section "À l'intérieur" sur la page kheymas
- Une galerie de photos
- La page de détails d'un kheyma

Enregistrez-la comme : `src/assets/images/kheymas/kheyma-interior.jpg`

## Étapes pour ajouter les images

1. **Téléchargez vos photos** depuis votre conversation ou source
2. **Ouvrez le dossier du projet** :
   ```
   C:\Users\HP\Desktop\mahjouba_project\ma-vacance-mauritanie
   ```
3. **Naviguez vers** : `src/assets/images/kheymas/`
4. **Copiez vos images** dans ce dossier avec les noms exacts listés ci-dessus
5. **Format recommandé** : JPG ou JPEG
6. **Taille recommandée** : 800-1200 pixels de largeur pour de bonnes performances

## Vérification

Une fois les images ajoutées :
1. Assurez-vous que l'application est en cours d'exécution (`ng serve`)
2. Ouvrez http://localhost:4200/kheymas
3. Vous devriez voir vos vraies photos de kheymas !

## Si les images ne s'affichent pas

- Vérifiez que les noms de fichiers correspondent exactement (sensible à la casse)
- Vérifiez que les images sont dans le bon dossier
- Redémarrez le serveur de développement (`Ctrl+C` puis `ng serve`)
- Actualisez votre navigateur (Ctrl+F5)

## Note

Les images seront automatiquement redimensionnées pour s'adapter aux cartes grâce à la classe CSS `object-cover`, donc ne vous inquiétez pas si vos photos ont des dimensions différentes !
