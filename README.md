# AkoestiekLab

Kenniswebsite over geluid en akoestiek: begrippen, uitleg en rekenhulpen. Onderdeel van de familie [Akoestiek360](https://akoestiek360.nl/), naast [Akoestiekscan](https://akoestiekscan.nl/) en [Geluidzaken](https://geluidzaken.nl/).

## GitHub

1. Maak een lege repository op GitHub.
2. Push deze map als `main`.
3. Zet geen `.env` in de repository. De site heeft geen database of geheimen nodig.

## Netlify

1. New site from Git → kies de GitHub-repository.
2. Build command en publish directory komen uit `netlify.toml` (`npm run build`, map `dist`).
3. Node 22 en `NETLIFY=true` staan daar ook. Die variabele zet de server-build op het Netlify-formaat.
4. Domein: `akoestieklab.nl` koppelen onder Domain management, inclusief `www` als redirect naar de kale domeinnaam.
5. Na elke push naar `main` publiceert Netlify opnieuw.

De sitemap staat op `/sitemap.xml`. Robots verwijst ernaar.

## Lokaal

```bash
npm install
npm run dev
```

## Inhoud

- `/` uitleg, het verschil absorptie/isolatie en een Sabine-rekenhulp
- `/begrippen` woordenlijst met zoeken
- `/kennis` vier verdiepende stukken
- `/lab` nagalm, decibel en STI
- `/netwerk` hoe de vier sites elkaar aanvullen
