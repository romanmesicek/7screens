# SCOPE Schnellcheck – Unsplash Bilder für Hook-Cards

**Erstellt:** 2025-02-06
**API Status:** ✅ Funktioniert

---

## Unsplash API Zugang

### Credentials

```
Application ID: 855717
Application Name: Claude Code
Access Key: iOBaVySS3O2WkfuPfQwlnbrhy-b7lUsLTBUixTcImsw
Secret Key: 0ZLuiGnpxVqIjJZpEiMXnbUe6X2f5yTT6UxvgBbaa8c
```

**Speicherort:** `.env` (nicht committen!)

### API Endpoints

```bash
# Zufälliges Bild
GET https://api.unsplash.com/photos/random?query={keywords}&orientation=landscape

# Suche
GET https://api.unsplash.com/search/photos?query={keywords}&orientation=landscape&per_page=10

# Header
Authorization: Client-ID {ACCESS_KEY}
```

### Beispiel-Request

```bash
curl -s "https://api.unsplash.com/search/photos?query=data+center&orientation=landscape&per_page=3" \
  -H "Authorization: Client-ID iOBaVySS3O2WkfuPfQwlnbrhy-b7lUsLTBUixTcImsw"
```

### Rate Limits

- **Demo Mode:** 50 Requests/Stunde
- **Production:** 5000 Requests/Stunde (nach Genehmigung)

---

## Ausgewählte Bilder pro Modul

### Modul S – Sufficiency (Blau)

**Query:** `simple solution minimalist tool`

| Option | ID | Fotograf | Beschreibung | URL |
|--------|-----|----------|--------------|-----|
| **1** | `-xufIYaGu-Y` | Kelly Sikkema | A black table topped with a pencil and paper | [Link](https://images.unsplash.com/photo-1729710877209-1d2f9df0c8c8?w=1080) |
| 2 | `0GywLiHMUTU` | Al Amin Mir | A blank white rectangular sign | [Link](https://images.unsplash.com/photo-1762325393954-5300a6e35f5b?w=1080) |
| 3 | `1ixT36dfuSQ` | Diana Polekhina | White notebook with pen on top | [Link](https://images.unsplash.com/photo-1611079830811-865ff4428d17?w=1080) |

**Empfehlung:** Option 1 – passt zur "einfache Lösung" Metapher

---

### Modul C – Carbon (Grün)

**Query:** `data center server room`

| Option | ID | Fotograf | Beschreibung | URL |
|--------|-----|----------|--------------|-----|
| **1** | `nA1MoDfGY14` | Elimende Inagella | Black and white electronic device (Server) | [Link](https://images.unsplash.com/photo-1614508569207-3295ac89d75f?w=1080) |
| 2 | `yhJVLxcquEY` | Albert Stoynov | Yellow and green cables neatly connected | [Link](https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=1080) |

**Empfehlung:** Option 1 – zeigt Rechenzentrum-Atmosphäre

---

### Modul O – Outcomes (Orange)

**Query:** `balance scale justice`

| Option | ID | Fotograf | Beschreibung | URL |
|--------|-----|----------|--------------|-----|
| 1 | `kIM48Mpp9iY` | Albert Stoynov | Statue of lady justice holding scales indoors | [Link](https://images.unsplash.com/photo-1764113697577-b5899b9a339d?w=1080) |
| 2 | `yCdPU73kGSc` | Tingey Injury Law Firm | Woman in dress holding sword figurine | [Link](https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1080) |
| **3** | `zbQ5UaREHx4` | Sasun Bughdaryan | Statue of justice holding scales against blue background | [Link](https://images.unsplash.com/photo-1768839719921-6a554fb3e847?w=1080) |

**Empfehlung:** Option 3 – cleaner Hintergrund, bessere Lesbarkeit

---

### Modul P – Power (Violett)

**Query:** `lock chain security`

| Option | ID | Fotograf | Beschreibung | URL |
|--------|-----|----------|--------------|-----|
| **1** | `E1KYiq2RqZY` | Ben Marler | A vintage padlock secured to a rusty chain | [Link](https://images.unsplash.com/photo-1765623821464-420b318e9e58?w=1080) |
| 2 | `KTWlcViVDT8` | Zoshua Colah | A padlock secures an old wooden door | [Link](https://images.unsplash.com/photo-1763370356082-124761e8c989?w=1080) |
| 3 | `_71DenFLOoI` | Ben Marler | Close-up of an old padlock on a chain | [Link](https://images.unsplash.com/photo-1765623821741-d4a5e82d3868?w=1080) |

**Empfehlung:** Option 1 – starke Schloss+Kette Metapher

---

### Modul E – Endurance (Cyan)

**Query:** `horizon road future path`

| Option | ID | Fotograf | Beschreibung | URL |
|--------|-----|----------|--------------|-----|
| **1** | `ldQh3wZNW5M` | Kevin Schmid | A long, straight road through a dry, open landscape | [Link](https://images.unsplash.com/photo-1760773766915-9a656de8a037?w=1080) |
| 2 | `Q0VMOhbYz10` | Charlota Blunarova | Sand dune landscape | [Link](https://images.unsplash.com/photo-1544478046-b4eb63bf82c8?w=1080) |
| 3 | `7GwBkDD3neg` | Travis Chen | A long wooden walkway in a large field | [Link](https://images.unsplash.com/photo-1646212034190-f88193bd4a9a?w=1080) |

**Empfehlung:** Option 1 – perfekte "langer Weg" / "Zukunft" Metapher

---

## Zusammenfassung: Empfohlene Bilder

| Modul | Unsplash ID | Fotograf | Download-URL |
|-------|-------------|----------|--------------|
| S | `-xufIYaGu-Y` | Kelly Sikkema | [1080px](https://images.unsplash.com/photo-1729710877209-1d2f9df0c8c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080) |
| C | `nA1MoDfGY14` | Elimende Inagella | [1080px](https://images.unsplash.com/photo-1614508569207-3295ac89d75f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080) |
| O | `zbQ5UaREHx4` | Sasun Bughdaryan | [1080px](https://images.unsplash.com/photo-1768839719921-6a554fb3e847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080) |
| P | `E1KYiq2RqZY` | Ben Marler | [1080px](https://images.unsplash.com/photo-1765623821464-420b318e9e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080) |
| E | `ldQh3wZNW5M` | Kevin Schmid | [1080px](https://images.unsplash.com/photo-1760773766915-9a656de8a037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080) |

---

## Lizenz & Attribution

Unsplash-Bilder sind lizenzfrei (Unsplash License). Attribution ist empfohlen und sollte im Format erfolgen:

```
Photo by [Fotograf] on Unsplash
```

### Pflicht-Attributionen für dieses Projekt

| Modul | Fotograf | Unsplash-Profil | Attribution |
|-------|----------|-----------------|-------------|
| S | Kelly Sikkema | [@kellysikkema](https://unsplash.com/@kellysikkema) | Photo by Kelly Sikkema on Unsplash |
| C | Elimende Inagella | [@elimendeinagella](https://unsplash.com/@elimendeinagella) | Photo by Elimende Inagella on Unsplash |
| O | Sasun Bughdaryan | [@sasun1990](https://unsplash.com/@sasun1990) | Photo by Sasun Bughdaryan on Unsplash |
| P | Ben Marler | [@benmarler](https://unsplash.com/@benmarler) | Photo by Ben Marler on Unsplash |
| E | Kevin Schmid | [@kevinschmid](https://unsplash.com/@kevinschmid) | Photo by Kevin Schmid on Unsplash |

### Wo die Attribution erscheinen muss

Die Attribution sollte entweder:
1. **Im Footer der App** – z.B. "Bilder: Unsplash"
2. **Auf einer Credits-Seite** – mit vollständiger Liste aller Fotografen
3. **In den Hook-Cards selbst** – klein unten rechts

---

## Nächster Schritt: Bilder einbinden

### Option A: Statisch (empfohlen für Production)

1. Bilder herunterladen in `public/images/hooks/`
2. In HookCard.jsx als Background referenzieren

### Option B: Dynamisch (API)

1. `.env` mit `VITE_UNSPLASH_ACCESS_KEY` konfigurieren
2. In HookCard.jsx via fetch() laden
3. Fallback-Bild für Offline-Modus

---

*Recherche durchgeführt am 2025-02-06*
