# 🗓️ E-T0D0

Une application de gestion de tâches (To-Do List) intuitive et sécurisée, conçue pour organiser votre quotidien en un clin d'œil en liant chaque mission à une date précise.

## 🚀 Aperçu du Projet

**E-T0D0** dépasse la simple liste de tâches papier. C'est une application web complète qui permet de planifier ses journées avec précision. L'utilisateur peut créer des tâches, leur attribuer une description détaillée et suivre leur état d'avancement (statut) en temps réel.

### 🕹️ Fonctionnalités
* **Planification Quotidienne :** Attachez chaque tâche à un jour spécifique pour une vision claire de votre emploi du temps.
* **Gestion Complète (CRUD) :** Création, lecture, modification et suppression de vos tâches et descriptions.
* **Suivi de Statut :** Visualisez instantanément ce qui est "À faire", "En cours" ou "Terminé".
* **Sécurité des Données :** Vos informations personnelles et vos tâches sont cryptées pour garantir une confidentialité totale.

## 🛠️ Stack Technique

* **Frontend :** HTML5, CSS3 et JavaScript (Interface dynamique et réactive).
* **Backend :** Node.js avec le framework **Express** (Architecture d'API RESTful).
* **Base de données :** **MySQL** (Stockage structuré et robuste).
* **Sécurité :** Algorithmes de chiffrement pour la protection des données.

## 💡 Défis Techniques Relevés

### 1. Architecture API RESTful
Le cœur du projet repose sur une séparation nette entre le client (le navigateur) et le serveur. J'ai mis en place une API REST qui permet de communiquer de manière fluide : le frontend envoie des requêtes et le backend traite les données en base, garantissant une application rapide et évolutive.

### 2. Sécurisation et Persistance
L'un des enjeux majeurs a été la protection des données utilisateurs. Au-delà de la simple gestion de base de données MySQL, j'ai intégré un système de chiffrement pour que les informations sensibles ne soient jamais stockées en clair, assurant ainsi une sécurité maximale contre les accès non autorisés.