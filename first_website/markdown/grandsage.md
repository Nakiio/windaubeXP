# 🔍 GrandSage - Moteur de Recherche OSINT (CLI)

**GrandSage** est un outil d'investigation numérique en ligne de commande (CLI) développé en **Python**. Il permet de centraliser la recherche d'informations sur une personne à partir d'un identifiant unique (email, pseudonyme ou numéro de téléphone).

## 🌟 Concept

L'outil agit comme un orchestrateur de données. Au lieu de lancer manuellement des dizaines de scripts, GrandSage automatise la collecte d'informations à travers diverses sources du web (réseaux sociaux, annuaires, bases de données publiques) et consolide les résultats dans un rapport structuré.

### 🛠️ Fonctionnalités & Intégrations

* **Recherche Multi-Critères :** Analyse via Email, Pseudo (Username) ou Numéro de téléphone.
* **Orchestration d'Outils OSINT :**
    * **Sherlock & Mr Holmes :** Recherche de comptes sur plus de 400 réseaux sociaux.
    * **Holehe :** Vérification de l'existence de comptes liés à une adresse mail via les endpoints de récupération.
* **Web Scraping & APIs :**
    * Extraction de données sur des sites comme **Meetic** ou les **Pages Jaunes**.
    * Consultation de bases de données nationales et listes de naissances (USA/International).
* **Export de Données :** Génération automatique d'un fichier **JSON "Clean"** regroupant toutes les preuves trouvées.

## ⚙️ Stack Technique

* **Langage :** Python 3.x
* **Librairies :** `requests`, `BeautifulSoup4` (Scraping), `subprocess` (pour l'appel des outils tiers).
* **Format de sortie :** JSON structuré.
* **Architecture :** Modulaire (chaque source/outil est un module indépendant).

## 🏗️ Architecture du Projet

Le programme fonctionne selon un pipeline précis :
1. **Input :** L'utilisateur saisit une cible (ex: `python grandsage.py --email target@example.com`).
2. **Dispatch :** Le moteur distribue la requête aux différents modules (Holehe, Sherlock, Scrapers).
3. **Parsing :** Chaque outil renvoie des données brutes qui sont nettoyées et normalisées par GrandSage.
4. **Aggregation :** Fusion des doublons et création du profil final dans un fichier JSON unique.

## 💡 Défis Techniques Relevés

### 1. Orchestration d'outils hétérogènes
Chaque outil (Sherlock, Holehe, etc.) possède son propre format de sortie et sa propre gestion d'erreurs. J'ai dû créer des **wrappers** en Python pour uniformiser les réponses et garantir que le script ne s'arrête pas si un outil échoue.

### 2. Gestion du Rate-Limiting & Scraping
Le scraping de sites comme les Pages Jaunes nécessite une gestion fine des headers et des délais pour éviter le bannissement d'IP. J'ai implémenté des mécanismes de rotation et des délais aléatoires pour assurer la stabilité des recherches.

## 🖥️ Aperçu (CLI)

```bash
$ python grandsage.py --username "john_doe"

[+] Searching on Social Media... (Sherlock)
[+] Checking Email Leaks... (Holehe)
[+] Scraping Public Records...
[+] 42 matches found.
[+] Results exported to: reports/john_doe_profile.json