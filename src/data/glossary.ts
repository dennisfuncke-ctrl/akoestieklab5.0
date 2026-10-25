/* Generated glossary for AkoestiekLab. Definitions follow the begrippen of Akoestiek360, cleaned and completed. */

export const categories = {
  basis: "Basisbegrippen",
  ruimte: "Ruimteakoestiek",
  isolatie: "Isolatie en bouw",
  spraak: "Spraak en privacy",
  meten: "Meten en normen",
  materiaal: "Materialen",
  gehoor: "Gehoor en hinder",
} as const;

export type CategoryId = keyof typeof categories;

export type Term = {
  slug: string;
  title: string;
  category: CategoryId;
  summary: string;
  practice?: string;
  keywords: string[];
  related: string[];
  see: { label: string; href: string; note: string };
};

export const terms: Term[] = [
  {
    "slug": "a-weging-en-d-b-a",
    "title": "A-weging en dB(A)",
    "category": "basis",
    "summary": "A-weging is een filter waarmee een geluidsmeting rekening houdt met de gevoeligheid van het menselijk oor bij verschillende frequenties. Het resultaat wordt uitgedrukt in dB(A) en is de gebruikelijke maat voor hinder en omgevingsgeluid.",
    "keywords": [
      "dba",
      "db(a)",
      "a-weging"
    ],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "absorptieklasse",
    "title": "Absorptieklasse",
    "category": "ruimte",
    "summary": "De absorptieklasse geeft aan hoe goed een akoestisch materiaal geluid absorbeert. Volgens EN ISO 11654 worden absorbers ingedeeld van klasse A tot en met E, waarbij klasse A de hoogste absorptie aangeeft.",
    "keywords": [],
    "practice": "Klasse A absorbeert over een breed frequentiegebied het sterkst. Een product met alleen een mooi α bij één frequentie kan in de klasse lager uitvallen dan de brochure suggereert.",
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "achtergrondgeluid",
    "title": "Achtergrondgeluid",
    "category": "gehoor",
    "summary": "Achtergrondgeluid is geluid dat voortdurend of regelmatig in een ruimte aanwezig is. Denk aan gesprekken, ventilatiesystemen, verkeer, machines, apparatuur en geluid uit aangrenzende ruimtes. Een hoog achtergrondgeluid kan de spraakverstaanbaarheid en concentratie verminderen.",
    "keywords": [],
    "practice": "Een laag, stabiel achtergrondniveau kan spraak maskeren en zo de privacy helpen. Te veel achtergrondgeluid maakt een gesprek juist vermoeiend. Het gaat om het juiste niveau, niet om stilte of lawaai.",
    "related": [
      "lawaai",
      "psychoakoestiek",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "akoestiek",
    "title": "Akoestiek",
    "category": "ruimte",
    "summary": "Akoestiek is het vakgebied dat zich bezighoudt met geluid, geluidsbeleving en de manier waarop geluid zich in een ruimte of omgeving gedraagt. Goede akoestiek helpt onder andere bij het verminderen van galm en geluidsoverlast en het verbeteren van de spraakverstaanbaarheid.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "akoestisch-fotopaneel",
    "title": "Akoestisch fotopaneel",
    "category": "materiaal",
    "summary": "Een akoestisch fotopaneel is een geluidsabsorberend paneel met een geprinte foto of afbeelding. Het combineert demping met een visuele functie en wordt toegepast in kantoren, horeca, scholen en vergaderruimtes.",
    "keywords": [],
    "related": [
      "akoestisch-plafondeiland",
      "akoestische-baffle",
      "basstrap",
      "passieve-absorber"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "akoestisch-plafondeiland",
    "title": "Akoestisch plafondeiland",
    "category": "materiaal",
    "summary": "Een akoestisch plafondeiland is een vrijhangend geluidsabsorberend paneel dat aan het plafond wordt bevestigd. Het vermindert geluidsreflecties en nagalm en wordt veel toegepast voor een betere kantoorakoestiek en ruimteakoestiek.",
    "keywords": [],
    "related": [
      "akoestische-baffle",
      "basstrap",
      "passieve-absorber"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "akoestische-baffle",
    "title": "Akoestische baffle",
    "category": "materiaal",
    "summary": "Een akoestische baffle is een verticaal hangend geluidsabsorberend element dat aan of onder een plafond wordt geplaatst. Baffles zijn effectief voor het verminderen van galm en geluidsoverlast, vooral in grote, hoge ruimtes.",
    "keywords": [],
    "related": [
      "akoestisch-plafondeiland",
      "basstrap",
      "passieve-absorber"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "akoestische-ontkoppeling",
    "title": "Akoestische ontkoppeling",
    "category": "isolatie",
    "summary": "Akoestische ontkoppeling betekent dat constructies fysiek van elkaar worden gescheiden om de overdracht van geluid en trillingen te beperken. Het principe wordt veel gebruikt bij geluidsisolatie van wanden, plafonds en vloeren.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "alcons",
    "title": "Alcons",
    "category": "spraak",
    "summary": "Alcons is een methode om de spraakverstaanbaarheid te beoordelen door te kijken naar de mate waarin medeklinkers verkeerd of niet worden verstaan. De methode wordt gebruikt voor akoestische analyses.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "amplitude",
    "title": "Amplitude",
    "category": "basis",
    "summary": "Amplitude is de maximale uitslag van een trillingsgolf. Bij geluid hangt de amplitude samen met de sterkte van de geluidsgolf en daarmee met onder andere het geluidsdrukniveau.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "anechoisch",
    "title": "Anechoïsch",
    "category": "ruimte",
    "summary": "Anechoïsch betekent vrijwel zonder terugkaatsing. Een anechoïsch oppervlak of veld kaatst geluid nauwelijks terug, zodat vooral het directe geluid overblijft.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "anechoische-kamer",
    "title": "Anechoïsche kamer",
    "category": "ruimte",
    "summary": "Een anechoïsche kamer, ook wel dode kamer genoemd, is een ruimte waarin geluidsreflecties tot een minimum worden beperkt met sterk geluidsabsorberende materialen. De ruimte wordt gebruikt voor nauwkeurige akoestische en geluidsmetingen.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "articulatie-index-ai",
    "title": "Articulatie-index (AI)",
    "category": "spraak",
    "summary": "De articulatie-index is een maat voor de spraakverstaanbaarheid en wordt uitgedrukt op een schaal van 0 tot 1. Een hogere waarde betekent doorgaans dat gesproken woorden beter verstaanbaar zijn.",
    "keywords": [
      "ai"
    ],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "articulatieklasse-ac",
    "title": "Articulatieklasse (AC)",
    "category": "spraak",
    "summary": "De articulatieklasse is een classificatie voor verlaagde plafondsystemen die aangeeft hoe goed een plafond de overdracht van spraakgeluid tussen aangrenzende werkplekken beperkt. Een hogere articulatieklasse draagt bij aan meer akoestische privacy.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "audiogram",
    "title": "Audiogram",
    "category": "meten",
    "summary": "Een audiogram is een grafiek waarin het gehoorverlies op verschillende frequenties wordt weergegeven. Het wordt opgesteld met behulp van een audiometer tijdens een gehoortest.",
    "keywords": [],
    "related": [
      "iso-16283",
      "nen-5077",
      "kalibratie",
      "frequentieanalyse"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "audiometer",
    "title": "Audiometer",
    "category": "meten",
    "summary": "Een audiometer is een instrument waarmee het gehoor wordt getest. Het apparaat meet onder andere bij welke frequenties en geluidsniveaus iemand geluiden kan waarnemen.",
    "keywords": [],
    "related": [
      "iso-16283",
      "nen-5077",
      "kalibratie",
      "frequentieanalyse"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "audiometrische-ruimte",
    "title": "Audiometrische ruimte",
    "category": "meten",
    "summary": "Een audiometrische ruimte is een speciaal ingerichte ruimte voor gehoortests. De ruimte is geïsoleerd tegen geluid van buitenaf en heeft een gecontroleerde akoestiek.",
    "keywords": [],
    "related": [
      "iso-16283",
      "nen-5077",
      "kalibratie",
      "frequentieanalyse"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "auditieve-maskering",
    "title": "Auditieve maskering",
    "category": "spraak",
    "summary": "Auditieve maskering ontstaat wanneer de waarneming van een geluid wordt beïnvloed of gedeeltelijk wordt afgeschermd door een ander geluid. Dit principe speelt onder andere een rol bij geluidsmaskering en spraakprivacy.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "basstrap",
    "title": "Basstrap",
    "category": "materiaal",
    "summary": "Een basstrap is een akoestische absorber die speciaal is ontworpen om lage frequenties en diepe bastonen te verminderen. Basstraps worden veel toegepast in muziekstudio's, thuisbioscopen en luisterruimtes.",
    "keywords": [],
    "related": [
      "akoestisch-plafondeiland",
      "akoestische-baffle",
      "passieve-absorber"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "bouwakoestiek",
    "title": "Bouwakoestiek",
    "category": "isolatie",
    "summary": "Bouwakoestiek houdt zich bezig met de verspreiding en beheersing van geluid in en tussen gebouwen. Onderwerpen zijn onder andere luchtgeluid, contactgeluid, geluidsisolatie, trillingen en geluidsoverdracht.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "breedbandruis",
    "title": "Breedbandruis",
    "category": "basis",
    "summary": "Breedbandruis is geluid waarvan de energie over een breed gedeelte van het hoorbare frequentiebereik is verdeeld. Breedbandruis kan onder andere worden gebruikt voor akoestische metingen en geluidsmaskering.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "c-weging",
    "title": "C-weging",
    "category": "basis",
    "summary": "C-weging is een filter voor geluidsmetingen dat, anders dan A-weging, beter rekening houdt met hogere geluidsniveaus en lage frequenties. De meetwaarde wordt uitgedrukt in dB(C).",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "ceiling-attenuation-class-cac",
    "title": "Ceiling Attenuation Class (CAC)",
    "category": "isolatie",
    "summary": "De Ceiling Attenuation Class (CAC) is een classificatie voor de geluidsisolatie van een verlaagd plafond tussen twee ruimtes. De waarde geeft aan hoeveel geluidsoverdracht via het plafond wordt beperkt.",
    "keywords": [
      "cac"
    ],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "contactgeluid",
    "title": "Contactgeluid",
    "category": "isolatie",
    "summary": "Contactgeluid ontstaat wanneer een constructie direct wordt aangeslagen, bijvoorbeeld door voetstappen, vallende voorwerpen of bewegende meubels. Het geluid kan via vloeren, wanden en plafonds worden overgedragen.",
    "keywords": [],
    "practice": "Voetstappen en schuivende stoelen brengen de constructie zelf in trilling. Een zwevende vloer of een ontkoppelde opbouw pakt dat anders aan dan een absorptiepaneel aan het plafond.",
    "related": [
      "zwevende-vloer",
      "trillingsoverdracht",
      "luchtgeluid",
      "massa-veer-massa-principe"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "dagelijkse-blootstelling-aan-lawaai",
    "title": "Dagelijkse blootstelling aan lawaai",
    "category": "gehoor",
    "summary": "Dagelijkse blootstelling aan lawaai is de gemiddelde blootstelling aan geluid gedurende een werkdag van acht uur. Deze blootstelling wordt onder andere uitgedrukt als LEX,8h en is belangrijk bij de beoordeling van risico's op gehoorschade.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "decibel-d-b",
    "title": "Decibel (dB)",
    "category": "basis",
    "summary": "Een decibel (dB) is een logaritmische eenheid waarmee onder andere geluidsdruk- en geluidsvermogenniveaus worden uitgedrukt. Decibel wordt veel gebruikt om de sterkte van geluid en geluidsoverlast te beschrijven.",
    "keywords": [
      "db",
      "decibel",
      "geluidsniveau"
    ],
    "practice": "Decibel is een verhouding, geen liniaal. Ongeveer 10 dB erbij klinkt voor veel mensen als een verdubbeling van de luidheid. Ongeveer 3 dB erbij is een verdubbeling van de geluidsenergie.",
    "related": [
      "a-weging-en-d-b-a",
      "geluidsdrukniveau",
      "luidheid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "diffractie",
    "title": "Diffractie",
    "category": "basis",
    "summary": "Diffractie is het afbuigen en verspreiden van geluidsgolven wanneer deze een obstakel of opening tegenkomen. Hierdoor kan geluid zich bijvoorbeeld gedeeltelijk om een geluidsscherm of kantoorscherm heen verspreiden.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "direct-geluid",
    "title": "Direct geluid",
    "category": "ruimte",
    "summary": "Direct geluid is geluid dat rechtstreeks van een geluidsbron naar de ontvanger gaat zonder eerst door een oppervlak te worden gereflecteerd.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "direct-veld",
    "title": "Direct veld",
    "category": "ruimte",
    "summary": "Het directe veld is het gebied rond een geluidsbron waarin het directe geluid sterker is dan gereflecteerd geluid. In een vrij veld neemt het geluidsniveau bij een verdubbeling van de afstand ongeveer 6 dB af.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "dn-f-w-waarde",
    "title": "Dn,f,w-waarde",
    "category": "isolatie",
    "summary": "De Dn,f,w-waarde is een eengetalswaarde voor de geluidsisolatie van een constructie, zoals een verlaagd plafond. Een hogere Dn,f,w-waarde betekent doorgaans een betere luchtgeluidsisolatie tussen ruimtes.",
    "keywords": [
      "dnf",
      "dn,f,w"
    ],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "dn-w-waarde",
    "title": "Dn,w-waarde",
    "category": "isolatie",
    "summary": "De Dn,w-waarde geeft de gewogen luchtgeluidsisolatie tussen twee ruimtes aan. De waarde wordt gebruikt om de akoestische prestaties van scheidingsconstructies te beoordelen; een hogere waarde betekent een betere geluidsisolatie.",
    "keywords": [
      "dnw",
      "dn,w"
    ],
    "practice": "Dn,w is een eengetalswaarde voor luchtgeluid tussen twee ruimtes. Hoger betekent doorgaans minder doorspraak. Vergelijk alleen waarden die op dezelfde manier zijn gemeten.",
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "early-decay-time-edt",
    "title": "Early Decay Time (EDT)",
    "category": "ruimte",
    "summary": "Early Decay Time (EDT) is de tijd die nodig is voor de eerste afname van het geluidsniveau in een ruimte. De EDT geeft informatie over de ervaren nagalm en kan invloed hebben op de spraakverstaanbaarheid.",
    "keywords": [
      "edt"
    ],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "echo",
    "title": "Echo",
    "category": "ruimte",
    "summary": "Een echo ontstaat wanneer geluidsgolven door harde oppervlakken worden teruggekaatst en de reflectie afzonderlijk hoorbaar is. Veel echo's kunnen de akoestiek en spraakverstaanbaarheid van een ruimte negatief beïnvloeden.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "galm"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "eigenfrequentie",
    "title": "Eigenfrequentie",
    "category": "ruimte",
    "summary": "De eigenfrequentie is de frequentie waarop een object of constructie van nature het gemakkelijkst gaat trillen. Wanneer een externe trilling hiermee overeenkomt, kan resonantie ontstaan.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "equivalent-absorptieoppervlak-aeq",
    "title": "Equivalent absorptieoppervlak (Aeq)",
    "category": "ruimte",
    "summary": "Het equivalente absorptieoppervlak geeft aan hoeveel geluidsabsorptie een object of constructie vertegenwoordigt. De waarde wordt onder andere gebruikt bij vrijhangende akoestische elementen en ruimte-absorbers.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "equivalent-geluidsdrukniveau",
    "title": "Equivalent geluidsdrukniveau",
    "category": "basis",
    "summary": "Het equivalente geluidsdrukniveau is het gemiddelde geluidsdrukniveau over een bepaalde periode. Het wordt gebruikt om variërende geluidsniveaus samen te vatten in één representatieve waarde.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "flankerend-geluid",
    "title": "Flankerend geluid",
    "category": "isolatie",
    "summary": "Flankerend geluid is geluid dat via aangrenzende constructies een andere ruimte bereikt in plaats van rechtstreeks door de scheidingsconstructie te gaan. Denk aan geluid via vloeren, plafonds, zijwanden of gevels.",
    "keywords": [],
    "practice": "Een zware wand helpt weinig als het geluid via het plafond, de gevel of de vloer om de wand heen loopt. Dat omlooppad heet flankerend geluid en is vaak de echte beperking.",
    "related": [
      "geluidsbrug",
      "geluidslek",
      "dn-w-waarde",
      "bouwakoestiek"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "flutterecho",
    "title": "Flutterecho",
    "category": "ruimte",
    "summary": "Flutterecho is een snelle opeenvolging van geluidsreflecties tussen twee parallelle, harde oppervlakken. Het verschijnsel klinkt vaak als een trillende of ratelende echo en kan de ruimteakoestiek verstoren.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "foneem",
    "title": "Foneem",
    "category": "spraak",
    "summary": "Een foneem is een afzonderlijke spraakklank waarmee woorden binnen een taal van elkaar kunnen worden onderscheiden. Fonemen spelen een belangrijke rol bij spraakverstaanbaarheid.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "formule-van-sabine",
    "title": "Formule van Sabine",
    "category": "ruimte",
    "summary": "De formule van Sabine berekent de nagalmtijd uit het volume van de ruimte en de totale geluidsabsorptie. In de gebruikelijke vorm is T = 0,161 · V / A, met V in kubieke meter en A in vierkante meter sabin.",
    "keywords": [
      "sabine",
      "rt60",
      "0,161"
    ],
    "practice": "De formule gaat uit van een diffuus geluidsveld. In een kale gymzaal komt hij dichterbij dan in een kantoor vol kasten. Gebruik hem als inzicht, en meet als het besluit ertoe doet.",
    "related": [
      "sabine",
      "nagalmtijd",
      "equivalent-absorptieoppervlak-aeq",
      "geluidsabsorptie"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "frequentie",
    "title": "Frequentie",
    "category": "basis",
    "summary": "Frequentie geeft aan hoeveel geluidsgolfcycli per seconde plaatsvinden en wordt uitgedrukt in Hertz (Hz). Een hogere frequentie betekent een hogere toon; lage frequenties worden ervaren als diepe tonen.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "geluid",
      "hertz-hz",
      "geluidsdrukniveau"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "frequentieanalyse",
    "title": "Frequentieanalyse",
    "category": "meten",
    "summary": "Frequentieanalyse brengt in kaart uit welke frequenties een geluid bestaat. De analyse wordt vaak uitgevoerd in octaafbanden of tertsbanden om akoestische problemen gericht te kunnen aanpakken.",
    "keywords": [],
    "related": [
      "iso-16283",
      "nen-5077",
      "kalibratie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "frequentieband",
    "title": "Frequentieband",
    "category": "basis",
    "summary": "Een frequentieband is een afgebakend bereik van frequenties tussen twee vaste punten. Frequentiebanden worden gebruikt om geluid en akoestische eigenschappen overzichtelijk te analyseren.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "frequentiespectrum",
    "title": "Frequentiespectrum",
    "category": "basis",
    "summary": "Het frequentiespectrum geeft weer welke frequenties in een geluid aanwezig zijn en hoe sterk deze zijn. Het is belangrijk voor het analyseren van bijvoorbeeld bastonen, middentonen en hoge tonen.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "galm",
    "title": "Galm",
    "category": "ruimte",
    "summary": "Galm is het voortduren van geluid nadat de geluidsbron is gestopt als gevolg van meerdere geluidsreflecties. Te veel galm zorgt voor een onrustige akoestiek en een slechtere spraakverstaanbaarheid.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "gebrom",
    "title": "Gebrom",
    "category": "ruimte",
    "summary": "Gebrom is een laagfrequent, vaak dreunend of grommend geluid. Het kan worden veroorzaakt door installaties, machines, ventilatiesystemen of andere bronnen met veel lage frequenties.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluid",
    "title": "Geluid",
    "category": "basis",
    "summary": "Geluid bestaat uit trillingen die zich door een medium zoals lucht, water of een constructie verplaatsen en door het gehoor kunnen worden waargenomen.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "hertz-hz",
      "geluidsdrukniveau"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsabsorber",
    "title": "Geluidsabsorber",
    "category": "ruimte",
    "summary": "Een geluidsabsorber is een materiaal, product of constructie die geluidsenergie opneemt en omzet in onder andere warmte. Geluidsabsorbers helpen om galm, echo en storende geluidsreflecties te verminderen.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsabsorptie",
    "title": "Geluidsabsorptie",
    "category": "ruimte",
    "summary": "Geluidsabsorptie is het opnemen van akoestische energie door een materiaal of constructie. Goede geluidsabsorptie vermindert geluidsreflecties, galm en nagalm en verbetert daardoor de ruimteakoestiek.",
    "keywords": [],
    "practice": "Absorptie haalt energie uit de reflecties in de ruimte. Het maakt een scheidingswand niet vanzelf een betere isolatie: daarvoor moet geluid de constructie niet kunnen passeren.",
    "related": [
      "geluidsabsorptiecoefficient",
      "absorptieklasse",
      "nagalmtijd",
      "geluidsabsorber"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsabsorptiecoefficient",
    "title": "Geluidsabsorptiecoëfficiënt",
    "category": "ruimte",
    "summary": "De geluidsabsorptiecoëfficiënt, vaak α, geeft aan welk deel van het invallende geluid door een materiaal wordt geabsorbeerd. 0 betekent geen absorptie en 1 betekent dat al het invallende geluid wordt opgenomen. De waarde hangt af van de frequentie.",
    "keywords": [
      "alpha",
      "alfa",
      "absorptiecoefficient"
    ],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsabsorptieklasse",
    "title": "Geluidsabsorptieklasse",
    "category": "ruimte",
    "summary": "De geluidsabsorptieklasse deelt akoestische materialen in van A tot en met E op basis van hun geluidsabsorberende eigenschappen. Klasse A staat voor de hoogste absorptieklasse.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsabsorptieklasse-a-e",
    "title": "Geluidsabsorptieklasse A-E",
    "category": "ruimte",
    "summary": "De classificatie A-E wordt gebruikt om de geluidsabsorptie van materialen volgens EN ISO 11654 te beoordelen. De classificatie is gebaseerd op de absorptiecoëfficiënt over een bepaald frequentiebereik.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsbeheersing-in-de-industrie",
    "title": "Geluidsbeheersing in de industrie",
    "category": "gehoor",
    "summary": "Industriële geluidsbeheersing omvat maatregelen om geluid en trillingen in industriële omgevingen te beperken. Voorbeelden zijn geluidsisolatie, geluidsabsorptie, omkastingen, geluidsschermen en trillingsisolatie rond machines.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsbrug",
    "title": "Geluidsbrug",
    "category": "isolatie",
    "summary": "Een geluidsbrug is een directe verbinding tussen bouwdelen waardoor geluid en trillingen gemakkelijker worden doorgegeven. Geluidsbruggen kunnen de werking van een geluidsisolerende constructie aanzienlijk verminderen.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidsdruk",
    "title": "Geluidsdruk",
    "category": "basis",
    "summary": "Geluidsdruk is de variatie in luchtdruk die door een geluidsgolf wordt veroorzaakt. De geluidsdruk vormt de basis voor het bepalen van het geluidsdrukniveau in decibel.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsdrukniveau",
    "title": "Geluidsdrukniveau",
    "category": "basis",
    "summary": "Het geluidsdrukniveau is een logaritmische maat voor de geluidsdruk en wordt uitgedrukt in dB. Het wordt gebruikt om het geluidsniveau op een specifieke locatie te meten en te beoordelen.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsgolf",
    "title": "Geluidsgolf",
    "category": "basis",
    "summary": "Een geluidsgolf is een verstoring die ontstaat door de beweging van geluidsenergie door een medium, zoals lucht, water of een constructie.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsisolatie",
    "title": "Geluidsisolatie",
    "category": "isolatie",
    "summary": "Geluidsisolatie is het beperken van geluidsoverdracht van de ene ruimte of omgeving naar de andere. Dit kan bijvoorbeeld met geïsoleerde wanden, plafonds, vloeren, ramen en deuren.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "bouwakoestiek"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidslek",
    "title": "Geluidslek",
    "category": "isolatie",
    "summary": "Een geluidslek is een kier, opening of zwakke plek waardoor geluid door een normaal gesproken geluidsisolerende constructie kan komen. Zelfs kleine openingen kunnen de totale geluidsisolatie sterk verminderen.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidslekkage",
    "title": "Geluidslekkage",
    "category": "isolatie",
    "summary": "Geluidslekkage is het ongewenst doorlaten van geluid via kleine openingen of niet goed afgedichte aansluitingen. Goede kierdichting is daarom een belangrijk onderdeel van effectieve geluidsisolatie.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidsreductie",
    "title": "Geluidsreductie",
    "category": "isolatie",
    "summary": "Geluidsreductie betekent het verminderen van het geluidsniveau of de geluidsoverdracht. Dit kan bijvoorbeeld door geluidsabsorptie, geluidsisolatie, geluidsschermen of trillingsisolatie.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidsreductie-nr",
    "title": "Geluidsreductie (NR)",
    "category": "isolatie",
    "summary": "Geluidsreductie (NR) is het verschil in geluidsdrukniveau tussen twee zijden van een scheidingsconstructie. Hiermee kan worden beoordeeld hoeveel geluid door een wand of andere constructie wordt tegengehouden.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidsreflectie",
    "title": "Geluidsreflectie",
    "category": "ruimte",
    "summary": "Geluidsreflectie ontstaat wanneer geluidsgolven tegen een oppervlak botsen en worden teruggekaatst. Harde materialen zoals beton, glas en steen veroorzaken doorgaans veel reflectie en kunnen daardoor galm versterken.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsreflectiecoefficient",
    "title": "Geluidsreflectiecoëfficiënt",
    "category": "ruimte",
    "summary": "De geluidsreflectiecoëfficiënt geeft aan welk deel van het invallende geluid door een oppervlak wordt gereflecteerd. De waarde geeft daarmee inzicht in de geluidsreflecterende eigenschappen van een materiaal.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "geluidsscherm",
    "title": "Geluidsscherm",
    "category": "isolatie",
    "summary": "Een geluidsscherm is een fysieke barrière die de directe overdracht van geluid tussen een geluidsbron en ontvanger vermindert. Geluidsschermen worden onder andere toegepast langs wegen, spoorlijnen en industriële terreinen.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "geluidssterkte",
    "title": "Geluidssterkte",
    "category": "basis",
    "summary": "Geluidssterkte is een maat voor hoe sterk of luid een geluid wordt waargenomen en wordt in de praktijk vaak gekoppeld aan het geluidsniveau in decibel.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsvermogen",
    "title": "Geluidsvermogen",
    "category": "basis",
    "summary": "Geluidsvermogen is de totale hoeveelheid akoestische energie die een geluidsbron per seconde uitstraalt. Het wordt uitgedrukt in watt (W) en is een eigenschap van de geluidsbron.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "geluidsverspreiding",
    "title": "Geluidsverspreiding",
    "category": "basis",
    "summary": "Geluidsverspreiding beschrijft hoe geluid zich via een medium, zoals lucht of water, door een omgeving verplaatst. De manier waarop geluid zich verspreidt heeft invloed op de akoestiek en geluidsbelasting.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "gemiddelde-geluidsabsorptie-saa",
    "title": "Gemiddelde geluidsabsorptie (SAA)",
    "category": "ruimte",
    "summary": "De SAA-waarde (Sound Absorption Average) is een eengetalswaarde voor de gemiddelde geluidsabsorptie van een materiaal. De waarde wordt gebruikt om akoestische materialen onderling te vergelijken.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "haas-effect",
    "title": "Haas-effect",
    "category": "spraak",
    "summary": "Het Haas-effect beschrijft hoe het menselijk gehoor twee vrijwel gelijktijdige geluiden waarneemt wanneer één geluid iets later arriveert. Het effect speelt een rol bij de waarneming van echo, richting en spraak.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "hertz-hz",
    "title": "Hertz (Hz)",
    "category": "basis",
    "summary": "Hertz (Hz) is de eenheid van frequentie en geeft aan hoeveel trillingen of geluidsgolfcycli er per seconde plaatsvinden. Eén Hertz staat voor één cyclus per seconde.",
    "keywords": [
      "hz",
      "frequentie"
    ],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "geluidsdrukniveau"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "hoorbaar-bereik",
    "title": "Hoorbaar bereik",
    "category": "basis",
    "summary": "Het hoorbare bereik is het frequentiegebied dat het menselijk oor kan waarnemen. Voor een gezond, jong gehoor ligt dat ongeveer tussen 20 Hz en 20.000 Hz.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "impuls",
    "title": "Impuls",
    "category": "basis",
    "summary": "Een impuls is een zeer kortdurend akoestisch signaal, zoals het knappen van een ballon, een klap of een ander plotseling geluid.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "initial-time-delay-gap",
    "title": "Initial Time-Delay Gap",
    "category": "ruimte",
    "summary": "De Initial Time-Delay Gap (ITDG) is het tijdsinterval tussen de aankomst van het directe geluid en de eerste belangrijke geluidsreflectie. De waarde speelt een rol bij de beoordeling van ruimteakoestiek.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "invalshoek",
    "title": "Invalshoek",
    "category": "basis",
    "summary": "De invalshoek is de hoek waaronder een geluidsgolf een oppervlak raakt. De invalshoek heeft invloed op de richting waarin het geluid na reflectie verdergaat.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "iso-16283",
    "title": "ISO 16283",
    "category": "meten",
    "summary": "ISO16283 is een internationale norm voor het in-situ meten van de geluidsisolatie van gebouwen. De norm beschrijft hoe onder andere luchtgeluidisolatie en contactgeluidisolatie tussen ruimtes in de praktijk worden gemeten. Kort gezegd: ISO 16283 beschrijft hoe je de geluidsisolatie van een gebouw ter plaatse betrouwbaar meet en beoordeelt.",
    "keywords": [
      "iso",
      "luchtgeluid",
      "contactgeluid"
    ],
    "practice": "ISO 16283 beschrijft hoe je lucht- en contactgeluidisolatie in een bestaand gebouw meet, niet hoe een laboratorium een losse wand test. Het resultaat hoort bij díe situatie, inclusief flankerende paden.",
    "related": [
      "nen-5077",
      "luchtgeluid",
      "contactgeluid",
      "bouwakoestiek"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "kalibratie",
    "title": "Kalibratie",
    "category": "meten",
    "summary": "Kalibratie is het controleren en afstellen van meetinstrumenten zodat deze betrouwbare en correcte geluidsmetingen uitvoeren.",
    "keywords": [],
    "related": [
      "iso-16283",
      "nen-5077",
      "frequentieanalyse"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "kantoorakoestiek",
    "title": "Kantoorakoestiek",
    "category": "ruimte",
    "summary": "Kantoorakoestiek gaat over het beheersen van geluid in kantoren en werkruimtes. Een goede kantoorakoestiek vermindert galm, achtergrondgeluid en afleiding en verbetert de concentratie, privacy en spraakverstaanbaarheid.",
    "keywords": [],
    "practice": "In een kantoor botsen twee wensen: verstaanbaar zijn in het eigen gesprek, en niet verstaanbaar zijn voor de buren. Daarom horen nagalm, achtergrondgeluid en isolatie bij elkaar.",
    "related": [
      "nagalmtijd",
      "spraakprivacy",
      "achtergrondgeluid",
      "speech-transmission-index-sti"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "k-hz",
    "title": "kHz",
    "category": "basis",
    "summary": "kHz staat voor kilohertz en betekent 1.000 Hertz. De eenheid wordt gebruikt voor hogere geluidsfrequenties, bijvoorbeeld bij het beschrijven van het frequentiebereik van het menselijk gehoor.",
    "keywords": [
      "khz",
      "kilohertz"
    ],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "kritische-afstand",
    "title": "Kritische afstand",
    "category": "ruimte",
    "summary": "De kritische afstand is de afstand tot een geluidsbron waarop het directe geluid en het diffuse, gereflecteerde geluid ongeveer even sterk zijn. Dit begrip is belangrijk bij het beoordelen van de akoestische eigenschappen van een ruimte.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "lawaai",
    "title": "Lawaai",
    "category": "gehoor",
    "summary": "Lawaai is ongewenst of hinderlijk geluid. De mate van hinder hangt onder andere af van het geluidsniveau, de frequentie, de duur en de persoonlijke omstandigheden.",
    "keywords": [],
    "related": [
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "lawaaidoofheid",
    "title": "Lawaaidoofheid",
    "category": "gehoor",
    "summary": "Lawaaidoofheid is gehoorverlies dat ontstaat door langdurige of herhaalde blootstelling aan harde geluiden. Het is een vorm van gehoorschade die onder andere op de werkplek kan ontstaan.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "luchtgeluid",
    "title": "Luchtgeluid",
    "category": "isolatie",
    "summary": "Luchtgeluid is geluid dat zich door de lucht voortplant, zoals stemmen, muziek, televisie en verkeersgeluid. Goede geluidsisolatie van wanden, plafonds, ramen en deuren helpt om luchtgeluid tussen ruimtes te beperken.",
    "keywords": [],
    "practice": "Stemmen, muziek en verkeer zijn luchtgeluid. Of dat bij de buren aankomt, hangt af van de wand, de naden, de deuren en de paden erlangs — niet alleen van een paneel aan de muur.",
    "related": [
      "geluidsisolatie",
      "dn-w-waarde",
      "contactgeluid",
      "flankerend-geluid"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "luchtweerstand",
    "title": "Luchtweerstand",
    "category": "basis",
    "summary": "Luchtweerstand is de weerstand die een poreus materiaal biedt tegen luchtstroming. Deze eigenschap speelt een belangrijke rol bij de geluidsabsorberende werking van poreuze akoestische materialen.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "luidheid",
    "title": "Luidheid",
    "category": "gehoor",
    "summary": "Luidheid is de subjectieve manier waarop een persoon de sterkte van een geluid ervaart. Luidheid is daarmee niet exact hetzelfde als het objectief gemeten geluidsniveau in decibel.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "massa-veer-massa-principe",
    "title": "Massa-veer-massa-principe",
    "category": "isolatie",
    "summary": "Het massa-veer-massa-principe is een belangrijk principe voor geluidsisolatie waarbij twee massa's van elkaar worden gescheiden door een verende of absorberende laag. Hierdoor wordt de overdracht van geluid beperkt.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "massawet",
    "title": "Massawet",
    "category": "isolatie",
    "summary": "De massawet beschrijft het verband tussen de massa van een constructie, de frequentie van het geluid en de luchtgeluidsisolatie. Zwaardere, enkelvoudige constructies isoleren doorgaans beter, vooral bij hogere frequenties.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "nagalm",
    "title": "Nagalm",
    "category": "ruimte",
    "summary": "Nagalm is het voortduren van geluid nadat een geluidsbron is gestopt door meerdere geluidsreflecties in een ruimte. Te veel nagalm kan leiden tot een slechte spraakverstaanbaarheid en een onrustige akoestiek.",
    "keywords": [
      "galm",
      "reverberation"
    ],
    "practice": "Nagalm is wat je hoort als een ruimte ‘blijft hangen’ nadat iemand is uitgesproken. Het is geen echo met een losse herhaling, maar een samensmelting van veel reflecties.",
    "related": [
      "nagalmtijd",
      "galm",
      "echo",
      "geluidsabsorptie"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "nagalmkamer",
    "title": "Nagalmkamer",
    "category": "ruimte",
    "summary": "Een nagalmkamer is een ruimte met sterk reflecterende oppervlakken en een diffuus geluidsveld. De ruimte wordt gebruikt om de geluidsabsorberende eigenschappen van materialen en objecten te meten.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "nagalmkamermethode",
    "title": "Nagalmkamermethode",
    "category": "ruimte",
    "summary": "De nagalmkamermethode is een gestandaardiseerde meetmethode voor het bepalen van de geluidsabsorptie van akoestische materialen en objecten. De methode wordt onder andere gebruikt voor het bepalen van absorptiecoëfficiënten.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "nagalmtijd",
    "title": "Nagalmtijd",
    "category": "ruimte",
    "summary": "De nagalmtijd is de tijd die nodig is om het geluidsdrukniveau in een ruimte met 60 dB te laten afnemen nadat de geluidsbron is gestopt. De nagalmtijd is een belangrijke indicator voor de akoestische kwaliteit van een ruimte.",
    "keywords": [
      "rt60",
      "t60",
      "reverberation time"
    ],
    "practice": "In kantoren en vergaderruimtes ligt een prettige nagalmtijd vaak rond een halve seconde. Langer maakt spraak wazig; veel korter kan een ruimte droog laten klinken. De tijd meet je in de ruimte zelf.",
    "related": [
      "nagalm",
      "formule-van-sabine",
      "early-decay-time-edt",
      "galm"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "nen-5077",
    "title": "NEN 5077",
    "category": "meten",
    "summary": "NEN 5077 is een Nederlandse norm voor het meten en beoordelen van de geluidswering van gebouwen. De norm beschrijft onder andere hoe luchtgeluid, contactgeluid en installatiegeluid worden gemeten en beoordeeld.",
    "keywords": [
      "nen",
      "geluidwering"
    ],
    "practice": "NEN 5077 is de Nederlandse meet- en beoordelingsnorm voor geluidwering in gebouwen. Wie een uitspraak doet over een woning of een verblijfsruimte, heeft deze norm meestal nodig naast de internationale meetnorm.",
    "related": [
      "iso-16283",
      "kalibratie",
      "frequentieanalyse"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Metingen volgens ISO en NEN"
    }
  },
  {
    "slug": "node",
    "title": "Node",
    "category": "ruimte",
    "summary": "Een node is een locatie in een trillings- of geluidsveld waar de geluidsdruk of beweging minimaal of theoretisch nul is. Nodes spelen onder andere een rol bij resonantie en staande golven.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "nrc-waarde",
    "title": "NRC-waarde",
    "category": "ruimte",
    "summary": "De NRC-waarde (Noise Reduction Coefficient) is een getal dat een indicatie geeft van de gemiddelde geluidsabsorptie van een akoestisch materiaal. De waarde wordt gebruikt om verschillende geluidsabsorbers met elkaar te vergelijken.",
    "keywords": [
      "nrc"
    ],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "octaafband",
    "title": "Octaafband",
    "category": "basis",
    "summary": "Een octaafband is een frequentiegebied waarbij de hoogste frequentie twee keer zo hoog is als de laagste. Octaafbanden worden veel gebruikt voor akoestische metingen en frequentieanalyses.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "omgevingsgeluid",
    "title": "Omgevingsgeluid",
    "category": "gehoor",
    "summary": "Omgevingsgeluid is de optelsom van alle geluiden die op een bepaalde plaats en op een bepaald moment worden waargenomen. Dit kan bijvoorbeeld bestaan uit verkeer, mensen, installaties, machines en andere geluidsbronnen.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "opencellig-schuim",
    "title": "Opencellig schuim",
    "category": "materiaal",
    "summary": "Opencellig schuim heeft een poreuze structuur waardoor geluidsgolven het materiaal kunnen binnendringen. Hierdoor kan het schuim geluid absorberen en bijdragen aan een betere ruimteakoestiek.",
    "keywords": [],
    "related": [
      "akoestisch-plafondeiland",
      "akoestische-baffle",
      "basstrap",
      "passieve-absorber"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "pascal-pa",
    "title": "Pascal (Pa)",
    "category": "basis",
    "summary": "Pascal (Pa) is de SI-eenheid voor druk en wordt in de akoestiek gebruikt om geluidsdruk uit te drukken. Het geluidsdrukniveau zelf wordt meestal weergegeven in decibel.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "passieve-absorber",
    "title": "Passieve absorber",
    "category": "materiaal",
    "summary": "Een passieve absorber is een geluidsabsorber die akoestische energie omzet in onder andere warmte. Poreuze absorbers zijn een veelvoorkomend voorbeeld.",
    "keywords": [],
    "related": [
      "akoestisch-plafondeiland",
      "akoestische-baffle",
      "basstrap"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "permanente-drempelverschuiving",
    "title": "Permanente drempelverschuiving",
    "category": "gehoor",
    "summary": "Een permanente drempelverschuiving is een blijvende verhoging van het geluidsniveau dat nodig is om een geluid te kunnen horen. Dit kan het gevolg zijn van blijvende gehoorschade door bijvoorbeeld langdurige blootstelling aan hard geluid.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "piekgeluid",
    "title": "Piekgeluid",
    "category": "basis",
    "summary": "Piekgeluid is een kortdurend geluid met een relatief hoog geluidsniveau, bijvoorbeeld een klap, vallend voorwerp of machinepiek. Dergelijke geluiden kunnen bijzonder hinderlijk zijn.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "precedence-effect",
    "title": "Precedence-effect",
    "category": "spraak",
    "summary": "Het precedence-effect beschrijft dat het eerste geluid dat het oor bereikt sterk bepalend is voor de waargenomen richting van de bron. Het wordt ook wel de wet van het eerste golffront genoemd.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "privacy-index",
    "title": "Privacy-index",
    "category": "spraak",
    "summary": "De Privacy Index (PI) is een maat waarmee akoestische privacy tussen bijvoorbeeld aangrenzende werkplekken kan worden beoordeeld. Een hogere waarde betekent doorgaans meer privacy.",
    "keywords": [
      "pi"
    ],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "spraakverstaanbaarheid",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "psychoakoestiek",
    "title": "Psychoakoestiek",
    "category": "gehoor",
    "summary": "Psychoakoestiek is de wetenschap die onderzoekt hoe mensen geluid waarnemen en ervaren. Hierbij wordt gekeken naar de relatie tussen fysieke eigenschappen van geluid en de subjectieve geluidsbeleving.",
    "keywords": [],
    "related": [
      "lawaai",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "reflectiecoefficient",
    "title": "Reflectiecoëfficiënt",
    "category": "ruimte",
    "summary": "De reflectiecoëfficiënt geeft aan welk deel van de invallende geluidsenergie door een oppervlak wordt teruggekaatst. Een waarde van 1 betekent volledige reflectie; een waarde dicht bij 0 betekent dat er bijna niets wordt teruggekaatst.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "resonantie",
    "title": "Resonantie",
    "category": "ruimte",
    "summary": "Resonantie ontstaat wanneer een object of constructie wordt aangeslagen met een frequentie die overeenkomt met zijn eigenfrequentie. Hierdoor kunnen trillingen en geluid sterk worden versterkt.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "resonantie-absorber",
    "title": "Resonantie-absorber",
    "category": "materiaal",
    "summary": "Een resonantie-absorber is een akoestische absorber die specifiek op bepaalde frequenties is afgestemd. Een Helmholtz-resonator is een bekend voorbeeld en wordt vooral gebruikt om lage frequenties gericht te absorberen.",
    "keywords": [],
    "related": [
      "akoestisch-plafondeiland",
      "akoestische-baffle",
      "basstrap",
      "passieve-absorber"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Akoestische oplossingen en producten bij Akoestiek360"
    }
  },
  {
    "slug": "saa-waarde",
    "title": "SAA-waarde",
    "category": "ruimte",
    "summary": "De SAA-waarde (Sound Absorption Average) geeft de gemiddelde geluidsabsorptie van een materiaal weer over een vastgesteld frequentiegebied. De waarde is nuttig voor het vergelijken van akoestische materialen.",
    "keywords": [
      "saa"
    ],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "sabine",
    "title": "Sabine",
    "category": "ruimte",
    "summary": "Wallace Clement Sabine legde het verband tussen het volume van een ruimte, de aanwezige geluidsabsorptie en de nagalmtijd. Zijn formule is nog steeds de basis van veel berekeningen in de ruimteakoestiek.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "speech-transmission-index-sti",
    "title": "Speech Transmission Index (STI)",
    "category": "spraak",
    "summary": "De Speech Transmission Index (STI) is een meetmethode om de spraakverstaanbaarheid in een ruimte te beoordelen. De methode analyseert onder andere verschillende frequentiebanden om inzicht te geven in de verstaanbaarheid van spraak.",
    "keywords": [
      "sti",
      "spraakverstaanbaarheid"
    ],
    "practice": "STI loopt van 0 tot 1. Onder ongeveer 0,45 is spraak lastig te volgen; vanaf ongeveer 0,60 wordt de verstaanbaarheid doorgaans goed genoemd. Nagalm én achtergrondgeluid drukken de score.",
    "related": [
      "spraakverstaanbaarheid",
      "alcons",
      "spraakprivacy",
      "nagalmtijd"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "spraakprivacy",
    "title": "Spraakprivacy",
    "category": "spraak",
    "summary": "Spraakprivacy geeft aan hoe moeilijk het is om gesprekken van anderen te horen en te verstaan. Goede spraakprivacy is belangrijk in kantoren, vergaderruimtes, zorginstellingen en andere ruimtes waar vertrouwelijke gesprekken plaatsvinden.",
    "keywords": [],
    "practice": "Privacy is het spiegelbeeld van verstaanbaarheid: wat jij in de ene ruimte niet wilt verstaan, mag in de andere ruimte niet helder aankomen. Absorptie, afstand en isolatie werken hier samen.",
    "related": [
      "privacy-index",
      "speech-transmission-index-sti",
      "achtergrondgeluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "spraakverstaanbaarheid",
    "title": "Spraakverstaanbaarheid",
    "category": "spraak",
    "summary": "Spraakverstaanbaarheid geeft aan hoe goed gesproken woorden in een ruimte kunnen worden verstaan. Achtergrondgeluid, nagalmtijd, ruimtevorm en geluidsreflecties hebben hier grote invloed op.",
    "keywords": [],
    "related": [
      "speech-transmission-index-sti",
      "spraakprivacy",
      "alcons"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Verstaanbaarheid en privacy in de ruimte laten meten"
    }
  },
  {
    "slug": "tertsband",
    "title": "Tertsband",
    "category": "basis",
    "summary": "Een tertsband is een frequentiegebied tussen twee vaste frequentiegrenzen. Een tertsbandanalyse geeft gedetailleerdere informatie over de verdeling van geluid over frequenties dan een octaafbandanalyse.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "toonhoogte",
    "title": "Toonhoogte",
    "category": "gehoor",
    "summary": "Toonhoogte is de subjectieve waarneming van hoe hoog of laag een geluid klinkt. De toonhoogte hangt voornamelijk samen met de frequentie van het geluid: een hogere frequentie klinkt als een hogere toon.",
    "keywords": [],
    "related": [
      "lawaai",
      "psychoakoestiek",
      "achtergrondgeluid",
      "luidheid"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Van begrip naar een concrete situatie bij Akoestiek360"
    }
  },
  {
    "slug": "trillingsisolatie",
    "title": "Trillingsisolatie",
    "category": "isolatie",
    "summary": "Trillingsisolatie is het beperken van de overdracht van trillingen van een bron naar een constructie of omgeving. Het wordt veel toegepast bij machines, pompen, ventilatiesystemen en technische installaties.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "trillingsoverdracht",
    "title": "Trillingsoverdracht",
    "category": "isolatie",
    "summary": "Trillingsoverdracht is het doorgeven van mechanische trillingen via bijvoorbeeld vloeren, wanden en andere constructies. Het beperken van trillingsoverdracht helpt om contactgeluid en constructiegeluid te verminderen.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "troebel-geluid",
    "title": "Troebel geluid",
    "category": "ruimte",
    "summary": "Troebel geluid is een onduidelijke of weinig gedefinieerde geluidsindruk. Een troebel basgeluid kan bijvoorbeeld dreunend of moeilijk te onderscheiden klinken.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "ultrasoon-geluid",
    "title": "Ultrasoon geluid",
    "category": "basis",
    "summary": "Ultrasoon geluid, ook wel ultrageluid genoemd, bestaat uit frequenties die boven het menselijke hoorbare bereik liggen. Bij mensen ligt deze grens doorgaans rond 20 kHz. Ultrasoon geluid wordt onder andere gebruikt in de industrie, techniek en medische toepassingen.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "verre-veld",
    "title": "Verre veld",
    "category": "ruimte",
    "summary": "Het verre veld is het gebied waarin gereflecteerd geluid sterker kan worden dan het directe geluid van de bron. De akoestische eigenschappen van de ruimte spelen hier een belangrijke rol.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "verspreiding",
    "title": "Verspreiding",
    "category": "basis",
    "summary": "Verspreiding beschrijft hoe gelijkmatig geluidsenergie over een ruimte wordt verdeeld. In een diffuus geluidsveld wordt geluid relatief gelijkmatig in verschillende richtingen verspreid.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "vervalsnelheid",
    "title": "Vervalsnelheid",
    "category": "ruimte",
    "summary": "De vervalsnelheid geeft aan hoe snel het geluidsniveau in een ruimte afneemt nadat een geluidsbron stopt. De waarde kan worden uitgedrukt in decibel per seconde (dB/s).",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "vrije-veld",
    "title": "Vrije veld",
    "category": "ruimte",
    "summary": "Een vrij veld is een situatie of ruimte waarin vrijwel geen geluidsreflecties van oppervlakken aanwezig zijn. Hierdoor kan het directe geluid van een bron afzonderlijk worden gemeten.",
    "keywords": [],
    "related": [
      "nagalmtijd",
      "geluidsabsorptie",
      "formule-van-sabine",
      "echo"
    ],
    "see": {
      "label": "Akoestiekscan",
      "href": "https://akoestiekscan.nl/",
      "note": "Nagalm en spraak in een kantoor of projectruimte laten meten"
    }
  },
  {
    "slug": "watt",
    "title": "Watt",
    "category": "basis",
    "summary": "Watt (W) is de eenheid voor vermogen. In de akoestiek wordt watt onder andere gebruikt om het geluidsvermogen van een geluidsbron uit te drukken.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "weerstand",
    "title": "Weerstand",
    "category": "basis",
    "summary": "Binnen de akoestiek kan weerstand betrekking hebben op de omzetting van geluidsenergie in warmte, bijvoorbeeld wanneer geluid door een poreuze geluidsabsorber dringt.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "white-noise",
    "title": "White noise",
    "category": "basis",
    "summary": "White noise, oftewel witte ruis, is een geluidssignaal waarin een breed frequentiebereik aanwezig is. Witte ruis kan worden gebruikt voor geluidsmaskering, concentratie en het verbeteren van spraakprivacy.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "zuivere-toon",
    "title": "Zuivere toon",
    "category": "basis",
    "summary": "Een zuivere toon is een geluid dat hoofdzakelijk uit één enkele frequentie bestaat. Een zuivere toon wordt vaak gebruikt bij akoestische metingen en onderzoek naar het menselijk gehoor.",
    "keywords": [],
    "related": [
      "decibel-d-b",
      "frequentie",
      "geluid",
      "hertz-hz"
    ],
    "see": {
      "label": "Akoestiek360",
      "href": "https://akoestiek360.nl/",
      "note": "Advies en uitleg bij Akoestiek360"
    }
  },
  {
    "slug": "zwevend-plafond",
    "title": "Zwevend plafond",
    "category": "isolatie",
    "summary": "Een zwevend plafond is een plafondconstructie die akoestisch of bouwkundig is ontkoppeld van de bovenliggende constructie. Dit kan helpen om geluidsoverdracht te beperken en tegelijkertijd de ruimteakoestiek te verbeteren.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  },
  {
    "slug": "zwevende-vloer",
    "title": "Zwevende vloer",
    "category": "isolatie",
    "summary": "Een zwevende vloer is een vloerconstructie die akoestisch is ontkoppeld van de onderliggende draagvloer. Daardoor wordt vooral de overdracht van contactgeluid naar onderliggende ruimtes beperkt.",
    "keywords": [],
    "related": [
      "luchtgeluid",
      "contactgeluid",
      "flankerend-geluid",
      "geluidsisolatie"
    ],
    "see": {
      "label": "Geluidzaken",
      "href": "https://geluidzaken.nl/",
      "note": "Luchtgeluid, contactgeluid en bouwakoestiek laten meten"
    }
  }
];

const bySlug = new Map(terms.map((term) => [term.slug, term]));

export function getTerm(slug: string): Term | undefined {
  return bySlug.get(slug);
}

export function normalizeQuery(value: string): string {
  return value
    .toLowerCase()
    .replaceAll('ë', 'e')
    .replaceAll('é', 'e')
    .replaceAll('è', 'e')
    .replaceAll('ê', 'e')
    .replaceAll('ï', 'i')
    .replaceAll('ö', 'o')
    .replaceAll('ü', 'u')
    .replaceAll('á', 'a')
    .replaceAll('à', 'a');
}

export function searchTerms(query: string): Term[] {
  const q = normalizeQuery(query).trim();
  if (!q) return terms;
  return terms.filter((term) => {
    const hay = normalizeQuery(
      [term.title, term.summary, term.practice ?? '', term.keywords.join(' ')].join(' '),
    );
    return hay.includes(q);
  });
}

export function letterOf(title: string): string {
  const c = normalizeQuery(title).charAt(0).toUpperCase();
  return /[A-Z]/.test(c) ? c : '#';
}

