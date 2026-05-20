# 🖥️ MyPanel - Dashboard Personnel & Gestionnaire de Fichiers

**MyPanel** est une application web de type "Cloud Desktop" permettant de gérer ses fichiers en ligne tout en profitant d'un espace de travail entièrement personnalisable grâce à un système de widgets et de thèmes.

## 🌟 Concept

L'objectif de MyPanel est d'offrir un bureau virtuel accessible depuis n'importe quel navigateur. L'utilisateur peut non seulement stocker et éditer ses documents, mais aussi organiser son flux de travail via des outils intégrés (widgets) dans une interface interactive.

### 🛠️ Fonctionnalités Clés

* **Gestion de Fichiers :** Système de Drive permettant l'upload, la création de dossiers et l'édition de fichiers en ligne.
* **Interface "Drag & Drop" :** Personnalisation totale de l'espace de travail : déplacez vos fichiers et vos widgets où vous le souhaitez.
* **Système de Widgets :**
    * 📅 Calendrier & Date
    * 🎵 Lecteur de musique
    * ☁️ Météo en temps réel
    * 🔗 Raccourcis vers des sites favoris
* **Sécurité & Authentification :** Interface de connexion sécurisée avec chiffrement des données utilisateurs.
* **Customisation visuelle :** Changement de thèmes et de fonds d'écran à la volée.

## ⚙️ Stack Technique

* **Frontend :** HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+) pour l'interactivité.
* **Backend :** PHP (Gestion de la logique serveur et du système de fichiers).
* **Base de données :** MySQL (Stockage sécurisé des utilisateurs et des configurations).
* **Sécurité :** Chiffrement des données sensibles et hachage des mots de passe.



## 🏗️ Architecture du Projet

Le projet repose sur une communication fluide entre le client et le serveur :
- **Logique Client (JS) :** Gestion du déplacement des éléments (Drag & Drop), mises à jour des widgets via API (Météo) et gestion de l'interface.
- **Logique Serveur (PHP) :** Traitement des requêtes d'upload, manipulation du répertoire de stockage sur le serveur et gestion des sessions.
- **Base de données (SQL) :** Tables dédiées aux utilisateurs, à leurs paramètres de personnalisation et à l'arborescence des dossiers.

## 💡 Défis Techniques Relevés

### 1. Persistance de la Personnalisation
Le plus grand défi a été de rendre l'interface "mémorable". Chaque fois qu'un utilisateur déplace un widget ou change de thème, les nouvelles coordonnées et préférences sont envoyées au serveur et sauvegardées en base de données pour être restaurées à la prochaine connexion.

### 2. Sécurité des Données
Mise en place d'un système de gestion de fichiers sécurisé pour empêcher l'accès aux dossiers d'un utilisateur par un autre, combiné à un chiffrement des informations en base MySQL pour garantir la confidentialité.

## 📸 Aperçu de MyPanel

> ![Bureau Virtuel](lien_vers_image_dashboard.png)

