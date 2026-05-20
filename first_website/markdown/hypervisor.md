# 🛠️ Custom Hypervisor & Container Engine (C)

Un moteur de virtualisation et de conteneurisation haute performance développé en **C**. Ce projet permet de déployer, gérer et orchestrer des machines virtuelles (VM) et des conteneurs à partir d'images compressées, avec une gestion fine du noyau et du réseau.

## 🌟 Concept

L'objectif était de créer une solution hybride capable de lancer soit des VM (isolation complète via hyperviseur), soit des conteneurs (isolation via namespaces/cgroups), tout en utilisant un format d'image unifié basé sur **SquashFS**.

### 🛠️ Fonctionnalités Clés

* **Gestion d'Images unifiée :** Utilisation de **SquashFS** pour créer des images système compressées en lecture seule, réutilisables instantanément pour des VM ou des conteneurs.
* **Virtualisation & Conteneurisation :**
    * Support de VM avec **Kernel** et **Initrd** personnalisés.
    * Déploiement de conteneurs légers partageant le noyau hôte.
* **Clustering :** Capacité à créer des clusters de nœuds pour orchestrer plusieurs instances simultanément.
* **Network Stack :** Gestion avancée du réseau (Bridge, NAT, interfaces virtuelles) via un fichier de configuration dédié.
* **Performance :** Développé intégralement en **C** pour une empreinte mémoire minimale et une exécution ultra-rapide.

## ⚙️ Stack Technique

* **Langage :** C (Standard ISO)
* **Système de fichiers :** SquashFS (Compression d'image)
* **Virtualisation :** [Précise ici si tu as utilisé KVM, QEMU lib ou du pur syscall]
* **Isolation :** Namespaces, Chroot, Cgroups (pour la partie conteneurs)
* **Boot :** Kernel Linux custom & Initrd (Initial Ramdisk)

## 🏗️ Architecture Système

Le projet est découpé en plusieurs modules critiques :
- **Image Manager :** Gère le montage et la superposition (OverlayFS) des images SquashFS.
- **Core Engine :** Responsable du fork des processus, de la configuration des limites de ressources et de l'initialisation du hardware virtuel.
- **Network Manager :** Configure les interfaces réseau de l'hôte et les relie aux invités (VM/Containers).
- **Config Parser :** Analyse les fichiers de configuration pour définir les paramètres de chaque instance (CPU, RAM, Réseau).

## 💡 Défis Techniques Relevés

### 1. Gestion des images SquashFS
L'implémentation de la copie brute et de la réutilisation des images a nécessité une compréhension profonde des systèmes de fichiers. J'ai mis en place un système où l'image de base reste immuable, tandis que les modifications sont stockées dans une couche d'écriture temporaire (Copy-on-Write).

### 2. Bootstrapping avec Kernel/Initrd Custom
Développer la logique permettant de charger un noyau spécifique et un disque virtuel (Initrd) au démarrage de la VM a été un défi majeur de programmation système, nécessitant une gestion précise des arguments de boot et des points de montage.

### 3. Orchestration de Cluster
Passer d'une instance unique à un système de cluster a demandé la mise en place d'une logique de communication entre les instances pour assurer la cohérence du réseau et des ressources partagées.

