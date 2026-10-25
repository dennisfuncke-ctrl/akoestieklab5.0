export type FamilySite = {
  name: string;
  href: string;
  role: string;
  text: string;
  here?: boolean;
};

export const family: FamilySite[] = [
  {
    name: "Akoestiek360",
    href: "https://akoestiek360.nl/",
    role: "Advies en oplossingen",
    text: "Het huis van het merk. Akoestisch advies, producten en de lijn waar scan, lab en Geluidzaken bij horen.",
  },
  {
    name: "AkoestiekLab",
    href: "https://akoestieklab.nl/",
    role: "Kennis en begrippen",
    text: "Uitleg, woordenlijst en rekenhulpen. Zodat een rapport, een norm of een klacht te volgen is.",
    here: true,
  },
  {
    name: "Akoestiekscan",
    href: "https://akoestiekscan.nl/",
    role: "Meten in kantoor en project",
    text: "Nagalmtijd, verstaanbaarheid en privacy op locatie. Voor eindgebruikers, inrichters en AV-integrators.",
  },
  {
    name: "Geluidzaken",
    href: "https://geluidzaken.nl/",
    role: "Bouwakoestiek en omgeving",
    text: "Luchtgeluid, contactgeluid, gevels en installaties. Onafhankelijke metingen, ook rond de Omgevingswet.",
  },
];

export const contact = {
  phoneDisplay: "06 12 21 94 63",
  phoneHref: "tel:+31612219463",
  email: "info@akoestiek360.nl",
  street: "Wilhelminastraat 66",
  postal: "9611 JX Sappemeer",
  kvk: "42169317",
};
