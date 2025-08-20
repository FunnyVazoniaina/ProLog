# Système d'Enquête Policière - Prolog & React

## 📋 Table des matières
- [Système d'Enquête Policière - Prolog \& React](#système-denquête-policière---prolog--react)
  - [📋 Table des matières](#-table-des-matières)
  - [Introduction](#introduction)
  - [🚀 Fonctionnalités](#-fonctionnalités)
  - [🛠️ Technologies utilisées](#️-technologies-utilisées)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Logique Métier](#logique-métier)
  - [📦 Installation et déploiement](#-installation-et-déploiement)
    - [Prérequis](#prérequis)
    - [Installation](#installation)
- [Cloner le repository](#cloner-le-repository)
- [Installer les dépendances backend](#installer-les-dépendances-backend)
- [Installer les dépendances frontend](#installer-les-dépendances-frontend)
    - [Structure du projet](#structure-du-projet)
    - [Membres de l'équipe](#membres-de-léquipe)
    - [Guide d'utilisation](#guide-dutilisation)
    - [Règles Prolog](#règles-prolog)

---

## Introduction
Ce projet est une application web interactive qui simule un système d'enquête policière utilisant **Prolog** comme moteur de raisonnement.  
Développé dans le cadre du cours *Intelligence Artificielle (M1 GB 16)*, ce système permet d’analyser des crimes, d’examiner des suspects et de déterminer leur culpabilité basée sur des preuves et des règles logiques.

L’application combine la puissance du raisonnement symbolique de Prolog avec une interface moderne et intuitive développée avec **React**, **Vite** et **TailwindCSS**.

---

## 🚀 Fonctionnalités
- Gestion de multiples types de crimes : **vol, assassinat, escroquerie**  
- Système de suspects : **5 suspects avec différents motifs et preuves**  
- Moteur d'inférence Prolog : **détermination automatique de la culpabilité**  
- Interface visuelle intuitive : navigation entre crimes, suspects et preuves  
- Système de preuves détaillé : visualisation des éléments incriminants  
- Verdict automatisé : décision basée sur les règles logiques définies  
- Design responsive : compatible desktop et mobile  

---

## 🛠️ Technologies utilisées

### Backend
- **Node.js** : Environnement d'exécution JavaScript  
- **Express.js** : Framework web pour l’API REST  
- **Tau-Prolog** : Interpréteur Prolog pour JavaScript  
- **CORS** : Gestion des requêtes cross-origin  

### Frontend
- **React 18** : Librairie pour l’interface utilisateur  
- **Vite** : Outil de build et développement  
- **TailwindCSS** : Framework CSS utilitaire  
- **Axios** : Client HTTP pour les appels API  

### Logique Métier
- **Prolog** : Langage logique pour le moteur d’inférence  

---

## 📦 Installation et déploiement

### Prérequis
- Node.js (v16+)  
- npm ou yarn  

### Installation
```bash
# Cloner le repository
git clone <repository-url>
cd enquete-policiere

# Installer les dépendances backend
cd backend
npm install

# Installer les dépendances frontend
cd ../frontend
npm install

### Structure du projet

enquete-policiere/
├── backend/
│   ├── prolog/
│   │   └── crime_engine.pl          # Moteur de règles Prolog
│   ├── server.js                    # Serveur Express principal
│   └── package.json                 # Dépendances backend
├── frontend/
│   ├── src/
│   │   ├── components/              # Composants React
│   │   │   ├── CrimeSelector.jsx
│   │   │   ├── SuspectList.jsx
│   │   │   ├── EvidencePanel.jsx
│   │   │   └── VerdictPanel.jsx
│   │   ├── hooks/
│   │   │   └── useApi.js            # Hook API personnalisé
│   │   ├── App.jsx                  # Composant principal
│   │   ├── main.jsx                 # Point d’entrée React
│   │   └── index.css                # Styles Tailwind
│   ├── index.html
│   ├── vite.config.js               # Config Vite
│   ├── tailwind.config.js           # Config Tailwind
│   └── package.json                 # Dépendances frontend
└── README.md

### Membres de l'équipe

- VAZONIAINA Funny Bienvenu
-

### Guide d'utilisation

1- Sélection du crime → Choisir vol, assassinat ou escroquerie

2- Consultation des suspects → Liste dynamique selon le crime choisi

3- Examen des preuves → Sélectionner un suspect pour voir ses preuves

4- Vérification de culpabilité → Cliquer Vérifier la culpabilité

5- Analyse des résultats → Verdict basé sur les règles Prolog


### Règles Prolog


Types de crimes
crime_type(vol).
crime_type(assassinat).
crime_type(escroquerie).

Suspects
suspect(john).
suspect(mary).
suspect(alice).
suspect(bruno).
suspect(sophie).

Règles de culpabilité

Vol

is_guilty(Suspect, vol) :-
    has_motive(Suspect, vol),
    was_near_crime_scene(Suspect, vol),
    has_fingerprint_on_weapon(Suspect, vol).


Assassinat

is_guilty(Suspect, assassinat) :-
    has_motive(Suspect, assassinat),
    was_near_crime_scene(Suspect, assassinat),
    (has_fingerprint_on_weapon(Suspect, assassinat);
     eyewitness_identification(Suspect, assassinat)).


Escroquerie

is_guilty(Suspect, escroquerie) :-
    (has_motive(Suspect, escroquerie), has_bank_transaction(Suspect, escroquerie));
    owns_fake_identity(Suspect, escroquerie).

Faits criminels

Vol

has_motive(john, vol).
was_near_crime_scene(john, vol).
has_fingerprint_on_weapon(john, vol).


Assassinat

has_motive(mary, assassinat).
was_near_crime_scene(mary, assassinat).
has_fingerprint_on_weapon(mary, assassinat).


Escroquerie

has_motive(alice, escroquerie).
has_bank_transaction(alice, escroquerie).
has_bank_transaction(bruno, escroquerie).
owns_fake_identity(sophie, escroquerie).

📞 Support

Pour toute question, contactez :
📧 equipe.enquete@projet-ia.fr

⚠️ Note : Ce projet est développé à des fins éducatives (cours d’IA - M1 GB 16). Tous les personnages et scénarios sont fictifs.