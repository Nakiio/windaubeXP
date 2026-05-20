
const skillsContent = `
# 🛠️ Mes Compétences Techniques
### 🐳 Virtualisation & Conteneurisation

**Docker** : Création d'images optimisées, gestion de containers, Docker Compose et orchestration de services.

---

**VirtualBox / Qemu** : Configuration de machines virtuelles, émulation de hardware et environnements de test isolés.

### 💻 Programmation & Scripting

**Langage C** : Programmation système, gestion bas niveau de la mémoire, pointeurs et optimisation algorithmique.

---

**Python** : Automatisation, scripts OSINT, traitement de données (Pandas) et IA (NLP, RAG).

---

**Java** : Développement d'applications desktop (Swing/AWT), Programmation Orientée Objet (POO) et multithreading.

### 🌐 Développement Web
**JavaScript / HTML / CSS** : Création d'interfaces dynamiques, manipulation du DOM, design responsive et animations.

---

**PHP** : Développement backend, gestion de formulaires, sessions et interactions serveurs.

### 📊 Bases de Données
**SQL & MySQL** : Conception de schémas relationnels, requêtes complexes (JOIN, INDEX) et optimisation de bases.

---

**phpMyAdmin** : Administration d'interfaces de bases de données et gestion des privilèges.

### 🔧 Outils & Workflow
**Git / GitHub** : Versioning de code, gestion de branches (Git Flow), Pull Requests et CI/CD de base.

---

**Structure de projet** : Organisation modulaire, respect des design patterns et maintenance de code propre (Clean Code).

---

**Coopération** : Travail en équipe via des méthodologies agiles, relecture de code et communication technique.

---

**Notion** : Documentation technique, suivi de projet et organisation de roadmaps.

### 🐧 Systèmes d'Exploitation (Linux)
**Linux (Général)** : Maîtrise de la ligne de commande (Bash), gestion des permissions et administration système.

---

**Arch Linux** : Installation "from scratch", configuration avancée et gestion fine des paquets (Pacman/AUR).

---

**Ubuntu / Debian** : Déploiement de serveurs stables, gestion APT et maintenance d'environnements de production.
`;

export const profileContent = `## -- Chauve Eliot
# 👋 Bienvenue sur mon Portfolio

| À propos de moi | Profil |
| :--- | :---: |
| Passionné d'**informatique** depuis mon plus jeune âge, mon aventure technologique a commencé très tôt : j'ai eu mon **premier ordinateur dès le CE1**. 🖥️<br><br>Depuis ce jour, je n'ai jamais arrêté d'explorer. Véritable touche-à-tout, j'enchaîne les **projets variés** pour approfondir mes connaissances, que ce soit en programmation, en système ou en réseau.<br><br>> "Apprendre, tester, créer : c'est ce qui définit mon quotidien." | <img src="/first_website/assets/profile.png" alt="Profile" width="90%"> |

---

*Actuellement étudiant en 1ère année de Bachelor à Epitech.*

---

## 🚀 Mes Passions & Centres d'intérêt

Au-delà des lignes de code et des terminaux Linux, voici ce qui anime mon quotidien :

### 🏃‍♂️ Sport & Dépassement de soi
Pour garder l'équilibre et vider l'esprit après de longues heures devant les écrans, je pratique régulièrement du **sport**. C'est mon moment pour me challenger, développer ma discipline et recharger les batteries.

### 🎬 Cinéma & Séries
Grand amateur de pop-culture, j'adore me plonger dans des univers captivants. 
*   **Mes genres de prédilection :** La science-fiction (forcément !), les thrillers psychologiques et les univers dystopiques.
*   **Ce que j'aime :** Les scénarios bien ficelés qui font réfléchir et les réalisations visuelles marquantes.

### 🎵 Musique
La musique accompagne chacune de mes sessions de code. Mes playlists sont éclectiques : du son bien rythmé pour rester focus aux mélodies plus calmes pour concevoir l'architecture d'un projet. 

### 📚 Lecture
Curieux de nature, la lecture est pour moi un excellent moyen de m'évader ou d'apprendre. J'oscille entre des **romans de fiction** (notamment de la SF et de la fantasy) et des **livres plus techniques ou de développement personnel** pour continuer de grandir, une page après l'autre.`;

const allAppsContent = `# AllApps - Hub de Productivité Personnel

## Description
Un espace de travail local complet conçu pour centraliser les applications quotidiennes, le suivi des tâches et l'écoute musicale au sein d'un tableau de bord unique.

**AllApps** est une application desktop développée en **Java** conçue pour centraliser vos outils quotidiens en une seule interface.

## Concept

L'idée principale est de créer un écosystème local unique. L'utilisateur peut lancer ses applications favorites, gérer son emploi du temps et écouter sa musique sans quitter l'interface.

### Fonctionnalités Clés

* **Lanceur d'Applications :** Un système permettant d'ajouter des raccourcis vers des logiciels locaux (.exe, .app).
* **Système de Todo List :** Un gestionnaire de tâches complet.
* **Lecteur de Musique (Playlist) :**
    * Importation de fichiers audio locaux.
    * Création et gestion de listes de lecture.
* **Interface Unifiée :** Développée avec **Java Swing**.

## Stack Technique

* **Langage :** Java
* **Interface Graphique :** Java Swing / AWT
* **Gestion Audio :** Java Sound API
* **Persistance des données :** Fichiers (JSON).

## Défis Techniques Relevés

### 1. Gestion du Multithreading (Audio)
Pour éviter que l'interface Swing ne "freeze", j'ai implémenté des **Threads** séparés pour le moteur audio.

### 2. Persistance des Données
Utilisation de la sérialisation d'objets pour stocker les informations localement.

## Gallery 

---

![screen](./assets/screens/allapps1.png)
![screen](./assets/screens/allapps2.png)
![screen](./assets/screens/allapps3.png)

`;

const musicTrackerContent = `# Music Release Tracker

## Description
Une plateforme de veille musicale permettant aux utilisateurs de suivre les calendriers de sortie des albums et de s'abonner à des alertes nouveautés.

Une application web dédiée aux passionnés de musique pour notifier des prochaines sorties d'albums.

## Présentation du Projet

L'objectif était de créer un hub d'actualités musicales simple et efficace.

### Fonctionnalités
* **Calendrier des Sorties :** Affichage chronologique.
* **Système de "Newsletter" :** Inscription des utilisateurs.
* **Interface Responsive :** Adapté aux mobiles.

## Stack Technique

* **Frontend :** HTML5, CSS3, JavaScript (ES6)
* **Backend :** PHP
* **Stockage des données :** Fichiers **JSON**

## Défis Techniques Relevés

### 1. Parsing et Affichage Dynamique
Transformer un fichier JSON en une interface utilisateur esthétique et triée par date automatiquement.

## Gallery 

---

![screen](./assets/screens/musictracker.png)

`;


const bookwormContent = `# Bookworm

## Description
Une solution d'analyse textuelle avancée utilisant le traitement automatique du langage naturel pour extraire des résumés, des thèmes et des fiches de lecture à partir de longs documents.

Outil d'analyse de texte basé sur le NLP pour transformer des livres bruts en informations synthétiques.

## Aperçu du Projet
L'objectif est de convertir un texte très long en "book cards".

### Fonctionnalités
* **Mesure de diversité lexicale :** Analyse du style.
* **Topic Modeling :** Identification automatique des thèmes.
* **Reconnaissance d'Entités (NER) :** Identification des personnages.
* **Résumé Automatique :** Via modèle d'IA.
* **Recommandation :** Calcul de similarité cosinus.

## Stack Technique
* **Langage :** Python
* **IA & NLP :** spaCy, NLTK, et Llama 3.2 via Ollama
* **Data :** Pandas & Scikit-learn`;

const cineBotContent = `# CineBot

## Description
Un agent conversationnel intelligent spécialisé dans le cinéma, exploitant l'architecture RAG pour interroger des bases de données de films et proposer des recommandations sur mesure.

Chatbot intelligent spécialisé dans la recommandation de films et séries (Projet ELIZA).

## Aperçu du Projet
CineBot utilise la technologie RAG (Retrieval-Augmented Generation) pour analyser un dataset de films.

### Fonctionnalités
* **Recherche Contextuelle :** Recommandations basées sur l'humeur.
* **Système RAG :** Analyse de catalogues (Netflix, Disney, Animes).
* **Interface Multi-canal :** Web et Discord.

## Stack Technique
* **IA / RAG :** LlamaIndex & LLaMA 3.2 (Ollama)
* **Backend :** Python & Flask
* **Frontend :** HTML, CSS, JavaScript
* **Déploiement :** Docker & Docker Compose

## Gallery 

---

![screen](./assets/screens/cinebot1.png)
![screen](./assets/screens/cinebot2.png)

`;

const eTodoContent = `# E-T0D0

## Description
Une application de planification quotidienne sécurisée permettant d'organiser ses tâches selon un calendrier précis grâce à une API structurée.

Application de gestion de tâches intuitive et sécurisée liée à une date précise.

## Aperçu du Projet
Permet de planifier ses journées avec précision (CRUD complet).

### Fonctionnalités
* **Planification Quotidienne :** Tâche par jour.
* **Suivi de Statut :** À faire / En cours / Terminé.
* **Sécurité :** Données cryptées.

## Stack Technique
* **Frontend :** JS / HTML / CSS
* **Backend :** Node.js (Express)
* **Base de données :** MySQL

## Défis Techniques Relevés

### 1. Architecture API RESTful
Séparation nette entre client et serveur avec une API REST fluide.

### 2. Sécurisation et Persistance
Chiffrement des données pour que les informations sensibles ne soient jamais stockées en clair.

## Gallery 

---

![screen](./assets/screens/etodo1.png)
![screen](./assets/screens/etodo2.png)

`;

const grandSageContent = `# GrandSage - OSINT CLI

## Description
Un outil d'investigation numérique en ligne de commande automatisant la collecte d'informations publiques à partir de pseudonymes, d'e-mails ou de numéros de téléphone.

Outil d'investigation numérique en ligne de commande développé en **Python**.

## 🌟 Concept
Centraliser la recherche d'informations sur une personne via email, pseudo ou téléphone.

### Fonctionnalités
* **Orchestration OSINT :** Intégration Sherlock & Holehe (400+ réseaux sociaux).
* **Web Scraping :** Extraction Meetic / Pages Jaunes.
* **Export :** Rapport JSON structuré.

## Stack Technique
* **Langage :** Python 3.x
* **Librairies :** requests, BeautifulSoup4, subprocess

## Défis
Gestion du Rate-Limiting et orchestration d'outils hétérogènes via wrappers Python.`;

const greenStreetContent = `# GreenStreet

## Description
Une application citoyenne comparative permettant d'évaluer et de localiser les infrastructures écologiques et les équipements publics entre différentes municipalités.

Comparateur citoyen d'infrastructures écologiques et équipements publics.

## Aperçu du Projet
Aide les familles et citadins à localiser les points d'intérêt (parcs, fontaines, bancs) et comparer objectivement deux villes.

### Fonctionnalités
* **Comparaison Inter-Communale :** Analyse des infrastructures ville à ville.
* **Localisation d'Infrastructures :** Parcs, bancs, fontaines à proximité.
* **Indicateurs de Vie :** Évaluation selon les équipements de loisirs.

## Gallery 

---

![screen](./assets/screens/greenstreet.png)
`;

const hollieContent = `# Hollie

## Description
Un jeu de précision en vue du dessus axé sur le contrôle d'un personnage à travers des labyrinthes complexes où le moindre contact avec les parois est éliminatoire.

Jeu de précision en **Java** de navigation dans des labyrinthes.

## Aperçu du Projet
Guider le personnage vers la sortie sans toucher les murs — Game Over immédiat à la moindre collision.

### Fonctionnalités
* **Gameplay de Précision :** Déplacement fluide au clavier.
* **Système de Progression :** Plusieurs niveaux de difficulté croissante.
* **Gestion des Collisions :** Algorithme de détection en temps réel.

## Stack Technique
* **Langage :** Java (JDK 11+)
* **GUI :** Java Swing & AWT
* **Architecture :** POO

## Défis Techniques
### 1. Gestion des Collisions
Utilisation de formes géométriques (Rectangle/Area) comparées à chaque frame.
### 2. Gestion des Menus
Système CardLayout pour passer fluidement du menu au jeu.`;

const hypervisorContent = `# Custom Hypervisor & Container Engine (C)

## Description
Un moteur hybride de virtualisation de bas niveau écrit en C, combinant l'isolation de machines virtuelles et de conteneurs légers avec un système de fichiers unifié.

Solution hybride capable de lancer des VM (isolation complète) ou des conteneurs (namespaces/cgroups), avec un format d'image unifié basé sur **SquashFS**.

### Fonctionnalités
* **SquashFS :** Images système compressées en lecture seule et réutilisables.
* **Clustering :** Orchestration de plusieurs nœuds simultanément.
* **Network Stack :** Bridge, NAT, interfaces virtuelles.
* **Performance :** Empreinte mémoire minimale en C pur.

## Stack Technique
* **Langage :** C (Standard ISO)
* **Système :** Kernel Linux custom & Initrd
* **Isolation :** Namespaces, Chroot, Cgroups

## Défis Techniques
### 1. Gestion des images SquashFS
Système Copy-on-Write : image de base immuable, modifications dans une couche d'écriture temporaire.
### 2. Bootstrapping Kernel/Initrd Custom
Gestion précise des arguments de boot et des points de montage.
### 3. Orchestration de Cluster
Logique de communication inter-instances pour la cohérence réseau.`;

const meloVibeContent = `# Melovibe

## Description
Une application web sociale axée sur la musique, reprenant les codes des flux vidéo verticaux pour faire découvrir des titres musicaux de manière interactive.

Application web de découverte musicale inspirée des réseaux sociaux à défilement vertical.

## Aperçu du Projet
Flux continu de musique permettant d'écouter, liker et commenter des titres en temps réel.

### Fonctionnalités
* **Infinite Scrolling :** Thread musical sans coupure.
* **Intégration API Deezer :** Catalogue immense avec extraits audio haute qualité.
* **Interactions Sociales :** Système de likes et commentaires.
* **Gestion de Profil :** Authentification sécurisée (JWT).

## Stack Technique
* **Frontend :** HTML5, CSS, JavaScript
* **Backend :** Node.js (Express)
* **Base de données :** MySQL
* **API :** Deezer API

## Gallery 

---

![screen](./assets/screens/melovibe.png)

`;

const myPanelContent = `# MyPanel - Dashboard Personnel & Gestionnaire de Fichiers

## Description
Un espace de stockage en ligne personnalisé sous forme de bureau virtuel interactif, intégrant l'édition de documents et des widgets configurables.

Application web "Cloud Desktop" pour gérer ses fichiers en ligne avec widgets et thèmes personnalisables.

## Concept
Bureau virtuel accessible depuis n'importe quel navigateur : stockage, édition de documents et organisation via widgets.

### Fonctionnalités
* **Gestion de Fichiers :** Upload, création de dossiers, édition en ligne.
* **Drag & Drop :** Personnalisation totale de l'espace de travail.
* **Widgets :** Calendrier, lecteur de musique, météo, raccourcis favoris.
* **Sécurité :** Authentification sécurisée et chiffrement des données.
* **Customisation :** Thèmes et fonds d'écran à la volée.

## Stack Technique
* **Frontend :** HTML5, CSS3, JavaScript (ES6+)
* **Backend :** PHP
* **Base de données :** MySQL

## Défis Techniques
### 1. Persistance de la Personnalisation
Chaque déplacement de widget ou changement de thème est sauvegardé en BDD et restauré à la reconnexion.
### 2. Sécurité des Données
Cloisonnement des dossiers par utilisateur et chiffrement des informations en MySQL.

## Gallery 

---

![screen](./assets/screens/mypanel.png)
`;

const nextBuyContent = `# NextBuy

## Description
Un projet d'analyse prédictive axé sur le commerce électronique, utilisant l'apprentissage automatique pour anticiper les besoins d'approvisionnement et les comportements des clients.

Projet d'analyse de données et de machine learning pour prédire les comportements d'achat.

## Aperçu du Projet
Transforme des données transactionnelles brutes en insights business exploitables.

### Fonctionnalités
* **Prédiction de Réachat :** Modèle RandomForest pour prédire les commandes futures.
* **Analyse Exploratoire (EDA) :** Visualisation de la popularité des produits.
* **Prédiction de Stock :** Estimation des quantités pour optimiser la logistique.

## Stack Technique
* **Langage :** Python
* **Machine Learning :** Scikit-learn (RandomForest)
* **Visualisation :** Matplotlib, Seaborn, Streamlit
* **Data :** Pandas & NumPy

## Gallery 

---

![screen](./assets/screens/nextbuy1.png)
![screen](./assets/screens/nextbuy2.png)

`;

const snakeContent = `# Python Snake Game

## Description
Une réécriture moderne et fluide du célèbre jeu d'arcade Snake développée en Python avec une logique de gestion de vitesse adaptative.

Réinterprétation moderne du classique **Snake**, développée en **Python**.

## Aperçu du Projet
Diriger le serpent pour manger de la nourriture — Game Over si collision avec les bordures ou son propre corps.

### Fonctionnalités
* **Mouvement Fluide :** Contrôles réactifs via touches directionnelles.
* **Système de Score :** Affichage en temps réel et suivi du record.
* **Difficulté Progressive :** Vitesse croissante au fil du temps.

## Stack Technique
* **Langage :** Python 3
* **GUI :** Tkinter

## Défis Techniques
### 1. Gestion du Framerate avec Tkinter
Synchronisation du déplacement via la fonction after pour une animation fluide et constante.
### 2. Algorithme de collision
Interdiction du demi-tour direct (Gauche → Droite instantané) pour éviter un Game Over injuste.

## Gallery 

---

![screen](./assets/screens/snake.png)
`;

const tardisContent = `# SNCF TARDIS Project

## Description
Un outil d'analyse et de visualisation de données ferroviaires combinant cartographie interactive et modèles de machine learning pour anticiper les retards sur le réseau.

Tableau de bord interactif d'analyse et de prédiction des retards de trains sur le réseau SNCF.

## Aperçu du Projet
TARDIS (Train Delay Analysis & Prediction) analyse les causes des retards sur de nombreuses routes françaises et internationales.

### Fonctionnalités
* **Analyse de Retard :** Étude des motifs (départ vs arrivée) et de leurs causes.
* **Dashboard Interactif :** Sélection de gares pour visualiser les statistiques mensuelles.
* **Cartographie :** Affichage des gares sur une carte interactive.
* **Modèle Prédictif :** Machine learning pour anticiper les comportements de retard.

## Stack Technique
* **Interface :** Streamlit
* **Analyse de données :** Python, Pandas
* **Machine Learning :** Scikit-learn & Pickle

## Gallery 

---

![screen](./assets/screens/tardis1.png)
![screen](./assets/screens/tardis2.png)

`;

const shcoolContent = `# Parcours Scolaire
## Études Supérieures

### **Epitech**
**Bachelor (Cloud / Cybersécurité / Dev Web)**
*Actuellement en 1ère année*

---

## Enseignement Secondaire

### **Lycée Saint-Just (Lyon 5ème)**
**Baccalauréat Général** | *Obtenu en 2024*

* **Spécialité NSI** (Numérique et Sciences Informatiques)
* **Spécialité Mathématiques**

### **Collège Christiane Bernardin**
**Diplôme National du Brevet** | *Obtenu en 2021*

* **Stage de découverte :** Décorateur d'extérieur.`;

export const desktop = [
    {
        "type": "file",
        "date": "10/07/2000",
        "img": "assets/project.png",
        "content": skillsContent,
        "windX": 1000,
        "windY": 500,
        "name": "Compétences"
    },
    {
        "type": "exe",
        "date": "10/07/2000",
        "img": "assets/cmd.png",
        "content": "",
        "name": "contact.exe"
    },
    {
        "type": "file",
        "date": "10/07/2000",
        "img": "assets/experience.png",
        "content": profileContent,
        "windX": 1000,
        "windY": 500,
        "name": "profile.txt"
    },
    {
        "type": "file",
        "date": "10/07/2000",
        "img": "assets/skill.png",
        "content": shcoolContent,
        "windX": 620,
        "windY": 650,
        "name": "Scolarité"
    },
    {
        "type": "folder",
        "date": "10/07/2000",
        "img": "assets/folder.png",
        "content": [
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": allAppsContent,
                "windX": 850,
                "windY": 500,
                "name": "AllApps"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": musicTrackerContent,
                "windX": 550,
                "windY": 500,
                "name": "MusicTracker"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": bookwormContent,
                "windX": 550,
                "windY": 500,
                "name": "Bookworm"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": cineBotContent,
                "windX": 1400,
                "windY": 600,
                "name": "CineBot"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": eTodoContent,
                "windX": 1400,
                "windY": 600,
                "name": "ETodo"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": grandSageContent,
                "windX": 550,
                "windY": 500,
                "name": "GrandSage"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": greenStreetContent,
                "windX": 1400,
                "windY": 500,
                "name": "GreenStreet"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": hollieContent,
                "windX": 550,
                "windY": 500,
                "name": "Hollie"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": hypervisorContent,
                "windX": 700,
                "windY": 400,
                "name": "Hypervisor"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": meloVibeContent,
                "windX": 1200,
                "windY": 600,
                "name": "Melovibe"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": myPanelContent,
                "windX": 650,
                "windY": 600,
                "name": "MyPanel"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": nextBuyContent,
                "windX": 1000,
                "windY": 600,
                "name": "NextBuy"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": snakeContent,
                "windX": 900,
                "windY": 600,
                "name": "Snake"
            },
            {
                "type": "file",
                "date": "10/07/2000",
                "img": "assets/file.png",
                "content": tardisContent,
                "windX": 1400,
                "windY": 600,
                "name": "Tardis"
            },
        ],
        "windX": 850,
        "windY": 500,
        "name": "Projets"
    },
    {
        "type": "link",
        "date": "10/07/2000",
        "img": "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "content": "https://github.com/Nakiio",

        "name": "Github"
    },
    {
        "type": "link",
        "date": "10/07/2000",
        "img": "https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png",
        "content": "https://www.linkedin.com/in/eliot-chauve-59061232a/",
        "name": "LinkedIn"
    },
    {
        "type": "link",
        "date": "10/07/2000",
        "img": "https://huggingface.co/front/assets/huggingface_logo.svg",
        "content": "https://huggingface.co/nakiio",
        "name": "HugginFace"
    },
    {
        "type": "link",
        "date": "10/07/2000",
        "img": "https://cdn.prod.website-files.com/6737568a4ac417efeb387e5a/67448913f56a5a3f0c278d15_6703db3b9e63211cee764c64_Gmail_Logo.svg",
        "content": "mailto:eliot.chauve@epitech.eu",
        "name": "Mail"
    },
    {
        "type": "link",
        "date": "10/07/2000",
        "img": "https://www.root-me.org/IMG/logo/siteon0.svg?1637496509",
        "content": "https://www.root-me.org/Nakiio",
        "name": "RootMe"
    },
    {
        "type": "link",
        "date": "10/07/2000",
        "img": "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/tryhackme-vpbxyth62mbot3imfcpb08.png/tryhackme-anodupj9mqt3ekhc90qmo9.png?_a=DATAiZAAZAA0",
        "content": "https://tryhackme.com/Nakiio",
        "name": "TryHackMe"
    },
];
