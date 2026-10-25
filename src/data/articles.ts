export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "terms"; slugs: string[] };

export type Article = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  minutes: number;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "nagalmtijd",
    title: "Wat nagalmtijd wel en niet vertelt",
    kicker: "Ruimteakoestiek",
    description:
      "Nagalmtijd is de tijd waarin het geluid in een ruimte 60 dB zakt. Waarom een kantoor een ander getal hoort dan een gymzaal, en waarom een paneel geen isolatie is.",
    minutes: 5,
    blocks: [
      {
        type: "p",
        text: "Nagalmtijd, vaak T of RT60, is de tijd die nodig is om het geluidsniveau met 60 decibel te laten dalen nadat de bron stopt. Zestig decibel is veel: van een stevig gesprek naar bijna stil. In een kale gymzaal kan dat meer dan twee seconden duren. In een goed ingerichte vergaderruimte eerder rond een halve seconde.",
      },
      {
        type: "p",
        text: "Die tijd zegt iets over hoeveel geluid de oppervlakken terugkaatsen. Harde vloer, glas en een kaal plafond houden energie lang in de ruimte. Stof, open plafonds, mensen en absorptie halen energie weg. De formule van Sabine maakt dat rekenbaar: groter volume verlengt de nagalm, meer absorptie verkort hem.",
      },
      {
        type: "h2",
        text: "Wat je ervan merkt",
      },
      {
        type: "ul",
        items: [
          "Te lange nagalm maakt spraak wazig. Lettergrepen lopen door elkaar.",
          "Heel korte nagalm kan droog en ongezellig klinken, zeker in een grote zaal.",
          "Early decay time (EDT) ligt dichter bij wat je in de eerste fractie van een seconde hoort. RT60 is de langere staart.",
          "Een flutter-echo — dat ratelen tussen twee evenwijdige wanden — verdwijnt niet vanzelf als het gemiddelde getal ‘wel meevalt’.",
        ],
      },
      {
        type: "h2",
        text: "Wat het getal niet is",
      },
      {
        type: "p",
        text: "Nagalmtijd is geen geluidsisolatie. Een paneel dat de galm in een kamer tempert, houdt het gesprek niet tegen naar de kamer ernaast. Daarvoor moet de constructie het geluid tegenhouden: massa, ontkoppeling en kierdichting. Wie alleen op nagalm stuurt, lost een privacyprobleem meestal niet op.",
      },
      {
        type: "p",
        text: "Het getal hangt ook af van waar en hoe je meet. Meubels, mensen en een open deur veranderen de uitkomst. Een berekening geeft orde van grootte. Een besluit over een project hoort bij een meting in de echte ruimte.",
      },
      {
        type: "terms",
        slugs: ["nagalmtijd", "formule-van-sabine", "early-decay-time-edt", "galm", "flutterecho"],
      },
    ],
  },
  {
    slug: "spraak-en-privacy",
    title: "Verstaanbaar waar het moet, privé waar het hoort",
    kicker: "Spraak",
    description:
      "Spraakverstaanbaarheid en spraakprivacy zijn elkaars spiegel. STI, achtergrondgeluid en nagalm bepalen of een vergadering werkt en of de buren meeluisteren.",
    minutes: 5,
    blocks: [
      {
        type: "p",
        text: "In een goede vergaderruimte versta je de persoon aan tafel zonder moeite. Op de gang of aan het bureau ernaast hoor je liever niet wát er gezegd wordt. Dat zijn twee verschillende opgaven, en ze vragen andere ingrepen.",
      },
      {
        type: "h2",
        text: "Verstaanbaarheid in de ruimte",
      },
      {
        type: "p",
        text: "De Speech Transmission Index (STI) drukt spraakverstaanbaarheid uit tussen 0 en 1. Onder ongeveer 0,45 wordt een gesprek lastig. Vanaf ongeveer 0,60 noemt men de verstaanbaarheid doorgaans goed. Nagalm, afstand en achtergrondgeluid drukken de score. Alcons kijkt naar hetzelfde verschijnsel via de medeklinkers die je mist: juist die klanken dragen de betekenis.",
      },
      {
        type: "h2",
        text: "Privacy tussen plekken",
      },
      {
        type: "p",
        text: "Privacy is hoog als spraak bij de ontvanger onverstaanbaar is. Drie dingen helpen. Isolatie, zodat er minder van het gesprek doorkomt. Afstand en afscherming, zodat het directe pad zwakker is. En een passend achtergrondniveau, dat de rest maskeert. Te veel achtergrondgeluid maakt het eigen gesprek weer vermoeiend. Stilte is dus niet automatisch beter.",
      },
      {
        type: "ul",
        items: [
          "Een belcel faalt vaak door kieren en een lichte wand, niet door ‘te weinig vilt’.",
          "Een open kantoor faalt vaak door een lange nagalm plus een te stil of juist te rommelig achtergrondveld.",
          "Een videosysteem klinkt pas goed als de ruimte zelf klopt. Techniek compenseert een holle zaal maar beperkt.",
        ],
      },
      {
        type: "terms",
        slugs: ["speech-transmission-index-sti", "spraakprivacy", "spraakverstaanbaarheid", "achtergrondgeluid", "alcons"],
      },
    ],
  },
  {
    slug: "geluidsisolatie",
    title: "Luchtgeluid, contactgeluid en de omweg",
    kicker: "Isolatie",
    description:
      "Geluid tussen ruimtes gaat door de wand, maar ook via vloer, plafond en gevel. Het verschil tussen luchtgeluid, contactgeluid en flankerend geluid bepaalt welke maatregel zin heeft.",
    minutes: 6,
    blocks: [
      {
        type: "p",
        text: "Luchtgeluid is geluid dat door de lucht reist: stemmen, muziek, een televisie. De wand, de deur, het raam en elke naad bepalen hoeveel ervan aan de andere kant aankomt. Een eengetalswaarde zoals Dn,w vat die prestatie samen. Hoger betekent doorgaans minder doorspraak — mits de waarden op dezelfde manier zijn gemeten.",
      },
      {
        type: "p",
        text: "Contactgeluid ontstaat doordat iets de constructie zelf aanstoot. Voetstappen, een schuivende stoel, een wasmachine. De trilling loopt door de vloer en straalt in de ruimte eronder af als geluid. Een absorberend plafond in die ondergelegen ruimte dempt de nagalm daar, maar stopt de bron niet. Een zwevende vloer of een ontkoppelde opbouw pakt de overdracht eerder aan.",
      },
      {
        type: "h2",
        text: "De omweg telt vaak zwaarder dan de wand",
      },
      {
        type: "p",
        text: "Flankerend geluid gaat om de scheiding heen: via een doorgaand plafond, een lichte gevel of een gedeelde vloer. Een zware voorzetwand helpt weinig als het plafond de twee kamers akoestisch aan elkaar knoopt. Daarom kijkt een serieuze meting niet alleen naar ‘de muur’, maar naar het hele pad. De massawet — zwaarder isoleert beter — geldt voor enkelvoudige constructies. Een lichte, ontkoppelde opbouw (massa-veer-massa) kan slimmer zijn dan alleen massa stapelen.",
      },
      {
        type: "ul",
        items: [
          "Kieren en een geluidsbrug (een hard contact dat de ontkoppeling kortsluit) bederven een verder goede opbouw.",
          "Een geluidslek is vaak een deur zonder valdorpel, een niet-afgekitte leiding of een rooster.",
          "Installaties — een warmtepomp, een kanaal, een lift — vragen een ander spoor dan een scheidingswand.",
        ],
      },
      {
        type: "terms",
        slugs: ["luchtgeluid", "contactgeluid", "flankerend-geluid", "dn-w-waarde", "massa-veer-massa-principe"],
      },
    ],
  },
  {
    slug: "meten-en-normen",
    title: "ISO 16283 en NEN 5077 in gewone taal",
    kicker: "Meten",
    description:
      "Een meting op locatie is iets anders dan een laboratoriumblad van een product. Wat ISO 16283 en NEN 5077 vastleggen, en wanneer een kantoorscan volstaat.",
    minutes: 5,
    blocks: [
      {
        type: "p",
        text: "ISO 16283 beschrijft hoe je de geluidisolatie in een bestaand gebouw meet: luchtgeluid, contactgeluid en gevelgeluidwering, ter plaatse. Het resultaat hoort bij díe ruimtes, inclusief deuren, naden en flankerende paden. Het is niet hetzelfde als een laboratoriumwaarde van een losse wand, gemeten zonder de rest van het gebouw.",
      },
      {
        type: "p",
        text: "NEN 5077 is de Nederlandse norm om de geluidwering van gebouwen te meten en te beoordelen. Luchtgeluid, contactgeluid en installatiegeluid komen erin samen. Wie een uitspraak doet over een woning of een verblijfsruimte in de Nederlandse praktijk, heeft deze norm meestal nodig naast de internationale meetmethode.",
      },
      {
        type: "h2",
        text: "Welke vraag hoort bij welke meting",
      },
      {
        type: "ul",
        items: [
          "De ruimte klinkt hol, een overleg is slecht te verstaan, of een belcel lekt spraak naar de vloer: dat begint bij nagalm en vaak bij een kantoorscan.",
          "Buren, een woning, horeca, een gevel of een installatie: dat is bouwakoestiek, met de normen hierboven.",
          "Een productblad met absorptieklasse zegt hoe een paneel in een meetopstelling scoort. Het zegt niet vanzelf wat jouw kamer daarna doet.",
        ],
      },
      {
        type: "p",
        text: "Kalibratie hoort erbij. Een meter die niet is gecontroleerd, levert een getal dat er precies uitziet en toch naast de werkelijkheid kan liggen. Vraag bij een rapport dus niet alleen naar het getal, maar naar de norm, de situatie en wat er níet is gemeten.",
      },
      {
        type: "terms",
        slugs: ["iso-16283", "nen-5077", "kalibratie", "nagalmtijd", "bouwakoestiek"],
      },
    ],
  },
];

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticle(slug: string) {
  return bySlug.get(slug);
}
