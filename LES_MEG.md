# Læring i en digital tid – pedagogiske ressurser

En enkel ressursportal med fire **selvstendige** innganger. Utviklet med utgangspunkt i materialet til Mari-Ann Letnes, NTNU / DigSkole.

## Mappestruktur

```
DigSkole_ressursportal_GitHub/
├── index.html                      Felles inngang – fire ressurser
├── style.css                       Design for felles inngang
├── ki-i-pedagogisk-praksis/
│   ├── index.html                  Åtte KI-kategorier
│   ├── rammer.html                  Nasjonale og lokale føringer
│   ├── [åtte-kategori-sider].html
│   └── [egne stil- og skriptfiler]
├── fagpraksiser/
│   ├── index.html                  Seks fagpraksiser og fire skoleslag
│   └── [egne stil- og skriptfiler]
├── a-se-laering/
│   ├── index.html                  Engasjement, vurdering og tegn på læring
│   └── verktoy/                    Fire refleksjonsaktiviteter
├── design-for-laering/
│   ├── index.html                  Klafki, Selander og Kress
│   └── verktoy/                    Fire interaktive planleggingsverktøy
├── .nojekyll
└── LES_MEG.md
```

**Filene skal ligge samlet i samme relative mappestruktur.** Ikke legg alle HTML-filene flatt i én mappe. Hver ressurs har egen `index.html` og egne tilhørende skript og stiler.

## Bruke lokalt

1. Pakk ut ZIP-filen.
2. Åpne `index.html` i den ytterste mappen i en nettleser.
3. Velg en av de fire ressursene. Du kan navigere tilbake til oversikten.

Kategorisider og valg for skoleslag fungerer lokalt uten server. Noen funksjoner i de interaktive verktøyene (for eksempel eksport til PDF) kan være avhengige av internett og biblioteker fra eksterne nettsteder.

## Legge på GitHub Pages

1. Opprett et nytt GitHub-repositorium, for eksempel `laering-i-en-digital-tid`.
2. Last opp **innholdet** i denne mappen til repositoriets rot (`index.html` skal ligge øverst).
3. Gå til **Settings → Pages** og velg **Deploy from a branch**, `main`, `/(root)`.
4. Etter publisering vil adressen normalt ha formen `https://DITTBRUKERNAVN.github.io/laering-i-en-digital-tid/`.
5. Test alle de fire kortene på forsiden og kontrollér valg av skoleslag og lenker.

Hvis du ønsker å legge portalen i et eksisterende GitHub Pages-repositorium, kan hele mappen legges som en undermappe og åpnes via den undermappens `index.html`.

## Redigere senere

- Endre tekst på forsiden: `index.html`.
- Endre fagtekst i KI-kategorier: `ki-i-pedagogisk-praksis/content.js`.
- Endre de seks fagpraksisene: `fagpraksiser/fagpraksiser.js` og `fagpraksiser/trinnsperspektiver.js`.
- Endre vurderingsressursen: `a-se-laering/index.html` og `a-se-laering/assessment.js`.
- Endre planleggingsressursen: `design-for-laering/index.html` eller de fire filene i `verktoy/`.
- Endre utseende: `style.css` i aktuell ressursmappe. Ressursene har egne stiler for å kunne videreutvikles uavhengig.

## Faglige presiseringer

- Skoleslagsvalget gjelder kun innenfor den enkelte ressursen.
- For småskole og mellomtrinn legges det til grunn at elever på 1.–7. trinn i all hovedsak **ikke** skal gis tilgang til generativ KI. Dette er en nasjonal hovedanbefaling. Les gjeldende råd og skolens lokale regler.
- De seks fagpraksisene er analytiske didaktiske forslag, ikke en validert taksonomi eller forskningsfunn fra DIGIT.
- I voksenopplæringen brukes `deltager`/`deltagere` i eksemplene og i verktøyene der dette er oppdatert.
- Nettressursene er selvstendige og krever ikke kjennskap til en forelesning eller fortellingen om Ingrid og Bjørn.
- Kontroller faglige kilder, rettigheter og eventuelle vilkår før offentlig publisering.

## Utgangspunkt

Bygger videre på det eksisterende GenKI-/DigSkole-materialet, inkludert den reviderte nettressursen, refleksjonsverktøy og interaktive planleggingsressurser. Nettressursene er nå organisert slik at hver del kan endres og publiseres selvstendig.
