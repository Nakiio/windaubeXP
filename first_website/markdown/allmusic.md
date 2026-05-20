# 🎵 Music Release Tracker - Newsletter Interactive

Une application web dédiée aux passionnés de musique, conçue pour centraliser et notifier les utilisateurs des prochaines sorties d'albums et de singles.

## 🚀 Présentation du Projet

L'objectif de ce projet était de créer un hub d'actualités musicales simple et efficace. Contrairement aux plateformes de streaming classiques, cette application se concentre sur l'anticipation et la découverte des futures sorties.

### 🕹️ Fonctionnalités
* **Calendrier des Sorties :** Affichage chronologique des prochains albums et titres à venir.
* **Système de "Newsletter" :** Possibilité pour les utilisateurs de s'abonner pour rester informés des nouveautés.
* **Fiches Artistes :** Présentation synthétique des artistes et des genres musicaux.
* **Interface Responsive :** Design moderne et fluide, adapté aux mobiles et ordinateurs.

## 🛠️ Stack Technique

* **Frontend :** HTML5, CSS3, JavaScript (ES6)
* **Backend :** PHP (Traitement des données et logique serveur)
* **Stockage des données :** Fichiers **JSON** (Architecture légère et performante)

## 🏗️ Architecture et Choix Techniques

### Pourquoi le format JSON ?
Pour ce projet, j'ai opté pour un stockage via des fichiers **JSON** plutôt qu'une base de données SQL classique. Ce choix permet :
1.  **Une rapidité d'accès :** Lecture directe des données sans surcharge de connexion à une DB.
2.  **Une portabilité accrue :** Facilité de mise à jour des sorties musicales via un simple fichier structuré.
3.  **Une maintenance simplifiée :** Idéal pour un système de flux d'actualités.


## 💡 Défis Techniques Relevés

### 1. Parsing et Affichage Dynamique
Le défi a été de transformer un fichier de données brut (JSON) en une interface utilisateur esthétique et triée par date de sortie automatique, garantissant que les sorties les plus proches apparaissent en premier.

## 📸 Aperçu de l'Application

> ![Dashboard des sorties](lien_vers_ton_image.png)
