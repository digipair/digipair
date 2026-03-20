# 📚 Documentation — Créer une nouvelle librairie DIGIPAIR (Skill)

Une **librairie DIGIPAIR** est une compétence (ou _skill_) qui expose des fonctions utilisables par les agents via le moteur d’exécution `@digipair/engine`. Elle est définie par deux éléments :

1. Une **implémentation TypeScript** qui suit le contrat attendu par le moteur.
2. Un **fichier OpenAPI** décrivant les fonctions exposées, leur usage et leurs paramètres, à destination de l’éditeur nocode DIGIPAIR.

---

## 🛠 Structure d’une librairie

### 1. Fichier TypeScript `xxx.skill.ts`

**But** : Implémenter des fonctions appelables par les agents DIGIPAIR.

**Structure recommandée** :

```ts
import { PinsSettings } from '@digipair/engine';

export class NomService {
  async fonction1(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    // votre logique ici
    return ...;
  }

  async fonction2(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    // autre logique
    return ...;
  }
}

export const fonction1 = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NomService().fonction1(params, pinsSettingsList, context);

export const fonction2 = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new NomService().fonction2(params, pinsSettingsList, context);
```

**Convention de nommage** :

- `NomService` = nom de la librairie (`JsonService`, `StringService`, `ExcelService`, etc.)
- chaque fonction exportée doit correspondre à une entrée du fichier OpenAPI

---

### 2. Fichier OpenAPI `skill-xxx.json`

**But** : Fournir une description standardisée pour l’éditeur nocode DIGIPAIR.

**Structure recommandée** :

```json
{
  "openapi": "3.0.0",
  "info": {
    "title": "@namespace/skill-nom",
    "summary": "Résumé lisible",
    "description": "Description de ce que permet cette compétence",
    "version": "0.1.0",
    "x-icon": "🧠"
  },
  "paths": {
    "/fonction1": {
      "post": {
        "tags": ["service"],
        "summary": "Nom de la fonction 1",
        "description": "Description plus complète",
        "parameters": [
          {
            "name": "param1",
            "summary": "Résumé du paramètre",
            "required": true,
            "description": "Description du paramètre attendu",
            "schema": {
              "type": "string"
            }
          }
        ],
        "x-events": []
      }
    },
    "/fonction2": {
      "post": {
        "tags": ["service"],
        "summary": "Nom de la fonction 2",
        "description": "Description plus complète",
        "parameters": [...],
        "x-events": []
      }
    }
  },
  "components": {
    "schemas": {}
  }
}
```

**Bonnes pratiques** :

- Le nom de l’endpoint (`/fonction1`) doit correspondre au nom de la fonction exportée dans `.skill.ts`.
- Le tag "service" est utilisé pour les fonctions appelables coté factory (serveur) et "boost" pour celles qui sont appelables depuis un chatbot.
- L'éditeur DIGIPAIR affichera les icônes, descriptions et paramètres en fonction de ce fichier.

---

## 📁 Arborescence type

```
apps/backend/src/feature/chatbot/skills/
├── json.skill.ts
├── string.skill.ts
├── ...

apps/backend/src/assets/schemas/
├── skill-json.json
├── skill-string.json

libs/chatbot/assistant/src/lib/pins/
├── string.skill.ts
├── http.skill.ts
```

---

## ✅ Checklist pour ajouter une nouvelle librairie

| Étape | Description                                                                 | OK  |
| ----- | --------------------------------------------------------------------------- | --- |
| 1     | Créer le fichier `.skill.ts` avec vos fonctions                             | ✅  |
| 2     | Implémenter une classe de service dédiée                                    | ✅  |
| 3     | Exporter les fonctions une par une                                          | ✅  |
| 4     | Créer un fichier `.json` OpenAPI dans `assets/schemas`                      | ✅  |
| 5     | Renseigner les `parameters` avec les bons `type`, `description`, `summary`  | ✅  |
| 6     | Ajouter un `x-icon` pour illustrer la skill dans l'éditeur                  | ✅  |
| 7     | Ajouter la librairie dans la configuration (`LIBRARIES`) côté front ou back | ✅  |
| 8     | Tester l'appel via un agent DIGIPAIR ou l'éditeur nocode                    | ⬜  |

---

## 📌 Exemple de noms de skills à créer

- `string.skill.ts` : manipulation de chaînes (concaténation, split, regex, etc.)
- `excel.skill.ts` : lecture/écriture de fichiers Excel
- `http.skill.ts` : appels d’API externes
- `crypto.skill.ts` : génération de hash ou d’UUID
- `date.skill.ts` : opérations de formatage ou de calcul sur des dates
