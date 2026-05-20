# 🐍 Python Snake Game

Une réinterprétation moderne du classique **Snake**, développée en **Python**. Ce projet met l'accent sur une logique algorithmique efficace et une interface utilisateur fluide.

## 🚀 Présentation du Projet

Le but est simple : diriger le serpent pour manger de la nourriture, ce qui le fait grandir. Le jeu s'arrête si le serpent percute les bordures de la fenêtre ou son propre corps.

### 🕹️ Fonctionnalités
* **Mouvement Fluide :** Contrôles réactifs via les touches directionnelles du clavier.
* **Système de Score :** Affichage en temps réel du score actuel et suivi du record.
* **Difficulté Progressive :** (Optionnel : mentionne ici si la vitesse augmente au fil du temps).
* **Interface Graphique :** Développée intégralement avec la bibliothèque **Tkinter**.

## 🛠️ Stack Technique

* **Langage :** Python 3
* **GUI (Interface Graphique) :** Tkinter
* **Logique :** Gestion des vecteurs et rafraîchissement récursif.


### Extrait de logique (Snake Movement) :
Le corps du serpent est géré comme une liste de coordonnées. À chaque mouvement, une nouvelle tête est ajoutée et la queue est supprimée, sauf si de la nourriture est consommée.

## 💡 Défis Techniques Relevés

### 1. Gestion du "Framerate" avec Tkinter
Tkinter n'est pas un moteur de jeu natif. Le défi a été de synchroniser le déplacement du serpent avec la fonction `after` pour obtenir une animation fluide et constante, indépendamment de la puissance de l'ordinateur.

### 2. Algorithme de collision
Mise en place d'une logique rigoureuse pour empêcher le serpent de faire un demi-tour direct (interdire le passage de "Gauche" à "Droite" instantanément), évitant ainsi un Game Over injuste pour le joueur.

## 📸 Captures d'écran

> ![Aperçu du Jeu Snake](lien_vers_ton_image_snake.png)
