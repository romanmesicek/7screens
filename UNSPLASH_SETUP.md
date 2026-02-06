# Unsplash API Setup

## Was wird benötigt?

Für die Hintergrundbilder der Hook-Cards wird die Unsplash API verwendet.

## Schritte zur Einrichtung

### 1. Unsplash Developer Account erstellen

1. Gehe zu https://unsplash.com/developers
2. Klicke auf "Register as a developer"
3. Erstelle einen Account oder logge dich ein

### 2. Application erstellen

1. Gehe zu https://unsplash.com/oauth/applications
2. Klicke auf "New Application"
3. Akzeptiere die API Guidelines
4. Fülle das Formular aus:
   - **Application name:** SCOPE Schnellcheck
   - **Description:** Micro-learning app for AI sustainability assessment
5. Klicke auf "Create application"

### 3. Access Key kopieren

Nach dem Erstellen der Application siehst du:
- **Access Key** ← Diese brauchen wir
- Secret Key (nicht benötigt für öffentliche API-Aufrufe)

### 4. Environment Variable setzen

**Lokal (.env Datei):**
```bash
cp .env.example .env
# Dann .env öffnen und VITE_UNSPLASH_ACCESS_KEY einfügen
```

**Netlify (Production):**
1. Netlify Dashboard → Site Settings → Environment Variables
2. Add Variable:
   - Key: `VITE_UNSPLASH_ACCESS_KEY`
   - Value: Dein Access Key

## API Nutzung im Code

```javascript
// Beispiel: Bild für Hook-Card laden
const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

async function fetchHookImage(query) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    }
  )
  const data = await response.json()
  return data.urls.regular // oder .small für schnelleres Laden
}
```

## Empfohlene Queries pro Modul

| Modul | Query-Vorschläge |
|-------|-----------------|
| S – Sufficiency | `technology,simplicity` oder `minimalism,tools` |
| C – Carbon | `data-center,energy` oder `power-plant,electricity` |
| O – Outcomes | `balance,scale` oder `diversity,crowd` |
| P – Power | `lock,chain` oder `control,security` |
| E – Endurance | `horizon,future` oder `compass,long-road` |

## Rate Limits

- **Demo Mode:** 50 Requests/Stunde
- **Production:** 5000 Requests/Stunde (nach Genehmigung)

Für einen statischen Build mit vorausgewählten Bildern reicht Demo Mode.

## Alternative: Statische Bilder

Statt dynamischer API-Aufrufe können auch statische Bilder verwendet werden:
1. Bilder manuell auf Unsplash suchen
2. Download in `/public/images/hooks/`
3. Im Code referenzieren: `/images/hooks/s-hook.jpg`

Dies spart API-Aufrufe und verbessert die Ladezeit.
