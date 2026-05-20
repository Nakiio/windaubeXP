🧩 Hollie

Un jeu de précision et de réflexion développé en **Java**, où le joueur doit naviguer à travers des labyrinthes de plus en plus complexes pour atteindre la sortie.

## 🚀 Aperçu du Projet

Ce projet est une application desktop interactive. L'objectif est simple : guider le personnage vers la sortie sans jamais toucher les murs. La moindre collision avec les parois du labyrinthe entraîne un échec immédiat (Game Over).

### 🕹️ Fonctionnalités
* **Gameplay de Précision :** Déplacement fluide (au clavier ou à la souris selon ton implémentation).
* **Système de Progression :** Plusieurs niveaux avec une difficulté croissante (murs plus étroits, chemins plus longs).
* **Interface Graphique :** Menus interactifs (Accueil, Sélection de niveaux, Pause).
* **Gestion des Collisions :** Algorithme de détection en temps réel entre le joueur et les éléments du décor.

## 🛠️ Stack Technique

* **Langage :** Java (JDK 11+ recommandé)
* **GUI (Interface Graphique) :** Java Swing & AWT
* **Architecture :** Programmation Orientée Objet (POO)

## 💡 Défis Techniques Relevés

### 1. Gestion des Collisions
L'un des principaux défis a été de gérer la collision précise du joueur avec les murs. J'ai utilisé des formes géométriques (`Rectangle` ou `Area`) pour comparer la position du joueur avec les limites du labyrinthe à chaque frame.

### 2. Gestion des Menus avec Swing
J'ai implémenté un système de "CardLayout" ou de changement de `JPanel` pour passer de manière fluide du menu principal au jeu, puis à l'écran de fin de niveau.