# Installation de l'application Digipair

Cette section décrit les étapes nécessaires pour installer et configurer l'application Digipair.

## Prérequis

- Node.js doit être installé sur votre machine. Vous pouvez télécharger et installer Node.js depuis le site officiel : [Node.js](https://nodejs.org/).

## Installation

Il existe deux façons d'installer Digipair : en utilisant `npm` ou `npx`.

### Installation avec `npm`

Pour installer Digipair globalement sur votre système, exécutez la commande suivante :

```sh
npm install -g digipair
```

### Utilisation avec `npx`

Si vous préférez utiliser Digipair sans l'installer globalement, vous pouvez utiliser `npx` :

```sh
npx digipair
```

## Lancement du serveur

Une fois Digipair installé, vous pouvez lancer le serveur web en exécutant la commande suivante :

```sh
digipair
```

Par défaut, le serveur web sera lancé sur le port `8080`.

## Configuration initiale

Lors du premier lancement du serveur, Digipair va créer un répertoire appelé `factory` dans le répertoire d'exécution du serveur s'il n'existe pas déjà. Ce répertoire `factory` contiendra :

- L'équipe de Digipair
- La configuration du serveur

Le serveur lui-même est également appelé `factory`.

Assurez-vous d'avoir les permissions nécessaires pour créer des répertoires et des fichiers dans le répertoire d'exécution du serveur.

## Accès au serveur

Une fois le serveur lancé, vous pouvez accéder à l'application Digipair via votre navigateur web à l'adresse suivante :

```
http://localhost:8080
```

# TO DO

## Conclusion

Vous avez maintenant installé et configuré Digipair. Si vous rencontrez des problèmes ou avez des questions, veuillez consulter la documentation complète ou contacter le support technique de Digipair.
