# 🚀 AllApps - Hub de Productivité Personnel

**AllApps** est une application desktop développée en **Java** conçue pour centraliser vos outils quotidiens en une seule interface. Plutôt que de jongler entre plusieurs logiciels, AllApps regroupe vos applications locales, vos tâches et vos médias.

## 🌟 Concept

L'idée principale est de créer un écosystème local unique. L'utilisateur peut lancer ses applications favorites, gérer son emploi du temps et écouter sa musique sans quitter l'interface.

### 🛠️ Fonctionnalités Clés

* **Lanceur d'Applications :** Un système permettant d'ajouter des raccourcis vers des logiciels locaux (.exe, .app) pour les exécuter directement depuis Java.
* **Système de Todo List :** Un gestionnaire de tâches complet permettant d'ajouter, de barrer et de supprimer des objectifs quotidiens.
* **Lecteur de Musique (Playlist) :** * Importation de fichiers audio locaux.
    * Création et gestion de listes de lecture personnalisées.
    * Contrôles de lecture (Play, Pause, Stop).
* **Interface Unifiée :** Développée avec **Java Swing**, offrant une navigation fluide entre les différents modules.

## ⚙️ Stack Technique

* **Langage :** Java
* **Interface Graphique :** Java Swing / AWT (Look & Feel personnalisé)
* **Gestion Audio :** Java Sound API (ou librairie type JLayer pour le MP3)
* **Persistance des données :** Stockage des listes (Todo & Musique) via fichiers (JSON).

## 💡 Défis Techniques Relevés

### 1. Gestion du Multithreading (Audio)
Pour éviter que l'interface Swing ne "freeze" (ne réponde plus) pendant la lecture d'une musique, j'ai implémenté des **Threads** séparés pour le moteur audio. Cela permet de continuer à utiliser la Todo List tout en écoutant de la musique.

### 2. Persistance des Données
Il a fallu mettre en place un système de sauvegarde pour que l'utilisateur retrouve sa liste de tâches et sa playlist à chaque redémarrage. J'ai utilisé [choisis ta méthode : l'écriture de fichiers texte / la sérialisation d'objets] pour stocker ces informations localement.

## 📸 Aperçu de l'interface

> ![Menu Principal](lien_vers_image_accueil.png)
> ![Lecteur Audio](lien_vers_image_musique.png)
