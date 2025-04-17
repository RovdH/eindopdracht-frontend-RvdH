# LazyChef Frontend Eindopdracht
<p><img src="./public/screenshots/LazyChef-app-screenshot-2.png" alt="Logo Screenshot" width="300"/></p>

## Inleiding

LazyChef is een interactieve webapplicatie die op basis van stemming, eetgezelschap en beschikbaarheid van ingrediënten passende kookrecepten voorstelt. Daarnaast kun je zoeken in alle recepten, favoriete recepten opslaan en recepten filteren op ingrediënten in je koelkast.

<p><img src="./public/screenshots/LazyChef-app-screenshot-4.png" alt="Home Screenshot" width="200"/><img src="./public/screenshots/LazyChef-app-screenshot-1.png" alt="Recipes Screenshot" width="600"/></p>

## Benodigdheden
Voordat je de applicatie kunt draaien, heb je het volgende nodig:

- **Node.js** (v18 of hoger) en npm als package manager
- **WebStorm** als IDE (of een andere met gelijke functies, zoals VS Code)
- Een **Spoonacular API key** (deze is al meegeleverd)
- De GIT Repository link:
  ```
  https://github.com/RovdH/eindopdracht-frontend-RvdH
  ```  
- Een `.env`-bestand in de root van het project met daarin:
  ```env
  VITE_SPOONACULAR_API_KEY=7eb864d7e7564dd59bab7cdec64d7812
  ```
  > Kopieer de sleutel en plak deze precies zoals hierboven in je `.env`-bestand.

## Installatie en gebruik

1. **Repository klonen via WebStorm**
   1. Open WebStorm.
   2. Kies **File > New > Project from Version Control...**.
   3. Selecteer **Git** als versiebeheer.
   4. Gebruik de volgende SSH URL:
      ```
      git@github.com:RovdH/eindopdracht-frontend-RvdH.git
      ```
   5. Kies een lokale directory en klik op **Clone**.
   6. WebStorm laadt automatisch het project in na het klonen.

2. **Dependencies installeren via WebStorm-terminal**
   1. Open de terminal binnen WebStorm (linksonder of via `Alt+F12`).
   2. Voer het volgende commando uit:
      ```bash
      npm install
      ```

3. **.env bestand aanmaken**
   1. Klik met de rechtermuisknop op de hoofdmap van het project.
   2. Kies **New > File** en noem het bestand `.env`.
   3. Voeg deze regel toe:
      ```env
      VITE_SPOONACULAR_API_KEY=7eb864d7e7564dd59bab7cdec64d7812
      ```

4. **Applicatie starten (ontwikkelmodus)**
   1. Ga naar de terminal en voer stap 2 uit.
   2. Start de ontwikkelserver:
      ```bash
      npm run dev
      ```
   3. De applicatie is nu bereikbaar via:
      ```
      http://localhost:5173
      ```

## Inloggen
De website is gekoppeld aan de NOVI backend. De backend werkt zonder API-key en dus kan je direct registreren en inloggen met een verzonnen account, zoals bijvoorbeeld:

- **Username:** Banaan
- **Email:** Bananen@inpyjamas.com
- **Wachtwoord:** 12341234

## Beschikbare npm-commando's

| Commando          | Functie                                               |
| ---------------- | ----------------------------------------------------- |
| `npm run dev`     | Start de Vite-ontwikkelserver met hot-reload         |
| `npm run build`   | Maakt een geoptimaliseerde productiebuild             |
| `npm run preview` | Preview van de productieversie lokaal                |
| `npm run lint`    | Controleert de codebase met ESLint op stijl en fouten |


## Demo build stappen:

5. **Build maken voor productie**
   - Terminal: `npm run build`
   - WebStorm npm-paneel: dubbelklik op **build**

6. **Preview van de productieversie**
   - Terminal: `npm run preview`
   - WebStorm npm-paneel: dubbelklik op **preview**


## Dependencies

Zie hieronder de belangrijkste dependencies:

```json
"dependencies": {
  "axios": "^1.8.4",
  "jwt-decode": "^4.0.0",
  "prop-types": "^15.8.1",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^6.30.0",
  "react-select": "^5.10.1"
},
"devDependencies": {
  "@eslint/js": "^9.21.0",
  "@types/react": "^19.0.10",
  "@types/react-dom": "^19.0.4",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.21.0",
  "eslint-plugin-react-hooks": "^5.1.0",
  "eslint-plugin-react-refresh": "^0.4.19",
  "globals": "^15.15.0",
  "vite": "^6.2.0",
  "vite-plugin-svgr": "^4.3.0"
}
```

