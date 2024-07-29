# How it Works

Cette section explique le fonctionnement de Digipairs en quatre grandes parties : le langage PINS, le moteur, la factory et l'éditeur no-code.

## Langage PINS

### Qu'est-ce que le langage PINS ?

Le langage PINS est un langage de programmation spécialement conçu pour la création et la gestion des agents d'intelligence artificielle (IA) appelés Digipairs.

### À quoi sert le langage PINS ?

Le langage PINS est utilisé pour programmer les agents IA, leur permettant de percevoir leur environnement, de prendre des décisions autonomes et d'exécuter des tâches complexes. Il est la base sur laquelle les capacités des Digipairs sont construites et étendues.

### Points forts du langage PINS

- **Programmable par des agents IA** : PINS est conçu pour être facilement utilisé par des agents IA, permettant une programmation efficace et adaptable.
- **Contexte maîtrisé** : Le langage offre un contrôle total sur le contexte dans lequel les agents opèrent, garantissant une compréhension et une gestion précises des situations.
- **Périmètre sans limite** : PINS permet une extensibilité infinie, offrant la possibilité de développer des agents IA avec des capacités variées et évolutives.

### Les moustaches

Les moustaches sont une caractéristique syntaxique du langage PINS qui permet d'intégrer des variables directement dans les chaînes de caractères. Elles facilitent la personnalisation et l'adaptabilité des scripts en insérant dynamiquement des valeurs au moment de l'exécution.

#### Exemple d'utilisation des moustaches

```pins
{
  "message": "Bonjour, {{name}}! Bienvenue dans notre service."
}
```

Dans cet exemple, la variable `{{name}}` sera remplacée par la valeur réelle du nom au moment de l'exécution.

### Le langage FEEL

FEEL (Friendly Enough Expression Language) est un langage d'expression utilisé dans PINS pour évaluer des conditions, manipuler des données et définir des logiques complexes de manière intuitive et lisible.

#### Exemple d'utilisation de FEEL

```pins
{
  "condition": "EVALUATE: if (age > 18) then 'adulte' else 'mineur'"
}
```

Dans cet exemple, l'expression FEEL évalue si l'âge est supérieur à 18 pour déterminer si l'individu est adulte ou mineur. Le mot-clé `EVALUATE:` est utilisé pour indiquer que l'expression FEEL doit être évaluée.

## Moteur

### Qu'est-ce que le moteur ?

Le moteur de Digipairs est un interpréteur du langage PINS. Il sert de cerveau aux Digipairs, permettant l'exécution des programmes écrits en PINS.

### À quoi sert le moteur ?

Le moteur exécute les raisonnements et les actions définies par le langage PINS, permettant aux Digipairs de fonctionner de manière autonome et intelligente. C'est l'élément central qui transforme les instructions programmées en actions concrètes.

## Factory

### Qu'est-ce que la factory ?

La factory est une sorte d'école pour les Digipairs, similaire à une version Pokémon pour les agents IA. C'est l'endroit où les Digipairs sont formés et configurés.

### À quoi sert la factory ?

La factory permet de former et de donner vie aux Digipairs. Elle fournit un environnement contrôlé où les agents peuvent apprendre, être testés et perfectionnés avant d'être déployés dans des environnements réels.

## Éditeur No-Code

### Qu'est-ce que l'éditeur no-code ?

L'éditeur no-code est un outil intuitif qui permet aux utilisateurs de créer et de gérer des Digipairs sans avoir besoin de compétences en programmation.

### Avantages de l'éditeur no-code

- **Facile à utiliser** : L'interface de l'éditeur est conçue pour être accessible, même pour les utilisateurs sans expérience technique.
- **Pas de connaissances complexes requises** : Les utilisateurs peuvent créer des applications et des sites web sans écrire de code, rendant le processus de développement accessible à tous.
- **Création et gestion des Digipairs** : Grâce à l'éditeur no-code, les utilisateurs peuvent facilement configurer, personnaliser et gérer leurs Digipairs, facilitant l'intégration de l'IA dans leurs opérations quotidiennes.

En résumé, Digipairs utilise une combinaison de technologies avancées pour offrir des solutions IA puissantes et personnalisables. Le langage PINS, le moteur, la factory et l'éditeur no-code travaillent ensemble pour simplifier la création, la formation et la gestion des agents IA, rendant ces technologies accessibles et efficaces pour les entreprises.
