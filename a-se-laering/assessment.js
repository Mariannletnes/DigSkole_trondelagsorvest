/* Eksempler knyttet til engasjement, observasjon og vurdering. */
(function(){
 const st=window.DigSkoleStage;
 const situations={
  "sma": {
    "title": "Når eleven lytter til sin egen fortelling",
    "field": "Norsk · 2. trinn · foto og lydopptak på iPad",
    "example": "I norsk tar elevene bilder av steder i skolegården med iPad. De spiller inn korte beskrivelser for en mottaker som ikke har sett stedene. En elev lytter til opptaket sitt og oppdager at hun flere ganger sier «der borte». Hun spiller inn på nytt og foreslår å ta et bilde fra en annen vinkel for å gjøre forklaringen tydeligere. Læreren lar elevene prøve hvordan bilder og ord virker sammen.",
    "dimensions": {
      "beh": "Eleven fotograferer, lytter til opptaket og bearbeider den muntlige beskrivelsen. Handlingene viser deltakelse i arbeidet.",
      "emo": "Eleven smiler når hun hører stemmen sin og sier at det er vanskelig å forklare nøyaktig hvor stedet er. Læreren undersøker hvordan hun opplever arbeidet med ordene.",
      "cog": "Når eleven bytter ut «der borte» med konkrete stedsord, får læreren innblikk i hvordan hun utvikler en mer presis beskrivelse til mottakeren.",
      "age": "Eleven foreslår et nytt bildeutsnitt og en ny lydinnspilling. Forslaget påvirker hvordan klassen arbeider videre med samspillet mellom bilde og språk."
    },
    "inference": "Opptaket og bildene gjør det mulig å høre og se revisjoner underveis. For å vurdere den muntlige språkkompetansen undersøker læreren hvilke ord og beskrivelser eleven velger, og hvordan hun tilpasser dem til mottakeren. Et ferdig lydprodukt forteller bare deler av historien om valgene hun gjorde.",
    "investigate": "La eleven vise det første og det reviderte opptaket. Be henne forklare hvilken informasjon en ukjent mottaker trenger, og la henne beskrive et nytt sted med egne ord.",
    "question": "Hvordan kan bilder og lydopptak på iPad gjøre elevenes språklige valg og utvikling synlige?"
  },
  "mellom": {
    "title": "Når elevene gransker sitt eget forsøk",
    "field": "Naturfag · 6. trinn · tidsforkortet film og registrering på iPad",
    "example": "I naturfag undersøker grupper hvordan to isbiter smelter på ulike steder. De tar tidsforkortet film med iPad og registrerer tid og temperatur. Når de ser opptakene, oppdager en elev at isbitene kanskje var ulike i størrelse fra starten. Hun foreslår å gjenta forsøket med like store isbiter. Gruppa diskuterer hva de faktisk kan slutte av observasjonene.",
    "dimensions": {
      "beh": "Elevene setter opp forsøket, registrerer målinger, ser opptaket flere ganger og arbeider videre med resultatene.",
      "emo": "Noen blir overrasket over forskjellen mellom opptakene. Læreren undersøker hva som vakte interessen, og hvordan de opplever usikkerheten rundt resultatet.",
      "cog": "Elevene sammenholder video, tid og temperatur og drøfter hvordan isbitenes størrelse påvirker muligheten til å sammenligne resultatene.",
      "age": "En elev foreslår en ny gjennomføring med bedre kontroll på startbetingelsene. Læreren lar innspillet påvirke forsøksplanen."
    },
    "inference": "Filmen gjør forandringen synlig og mulig å undersøke flere ganger. Vurderingsfaglig blir det interessant hvordan hver elev skiller observasjon fra forklaring, drøfter variabler og begrunner en forbedret undersøkelse.",
    "investigate": "Be hver elev bruke et klipp og målingene til å forklare hva dataene viser, hvilken usikkerhet som finnes, og hva et nytt forsøk kan bidra med.",
    "question": "Hvordan ser vi den enkeltes naturfaglige tenkning når en gruppe undersøker og dokumenterer med iPad?"
  },
  "ungdom": {
    "title": "Når digitale kilder gir nye spørsmål",
    "field": "Samfunnsfag · 9. trinn · digitale kart og flyfoto på iPad",
    "example": "I samfunnsfag sammenligner elever historiske flyfoto med nyere digitale kart over nærområdet på iPad. De markerer endringer i bebyggelse og veier og lager en kort, kildebasert forklaring. En elev oppdager at utsnittene har ulike målestokker og foreslår å bruke et fast landemerke for å sammenligne bildene. Gruppa reviderer både markeringene og en foreløpig påstand.",
    "dimensions": {
      "beh": "Elevene navigerer mellom kart, markerer funn, noterer og diskuterer. Læreren følger med på hvordan de arbeider med kildene.",
      "emo": "En elev uttrykker overraskelse over endringene og usikkerhet om bildene kan sammenlignes. Læreren spør hva hun vil undersøke nærmere.",
      "cog": "Eleven vurderer målestokk og utsnitt, knytter en påstand til konkrete observasjoner og reviderer forklaringen i lys av kildene.",
      "age": "Eleven foreslår et felles landemerke som ny sammenligningsmetode. Gruppa og læreren tar forslaget inn i undersøkelsen."
    },
    "inference": "Digitale kart gjør det mulig å zoome, sammenligne og markere kilder i det samme arbeidsforløpet. Læreren undersøker hvordan elevene begrunner hva en kilde faktisk viser, hva de tolker, og hvordan de vurderer kildegrunnlaget for egne påstander.",
    "investigate": "La eleven vise to kartutsnitt og forklare hvilken endring de dokumenterer, hvordan sammenligningen ble gjort, og hvilke opplysninger hun trenger for å begrunne forklaringen bedre.",
    "question": "Hvordan kan digital kildebruk synliggjøre elevenes samfunnsfaglige resonnementer og kildekritikk?"
  },
  "voksen": {
    "title": "Når en digital beskjed skal forstås og besvares",
    "field": "Voksenopplæring · norsk i arbeidslivet · digital kommunikasjon på iPad",
    "example": "Deltagerne arbeider med fiktive arbeidsmeldinger og en enkel vaktplan på iPad. Oppgaven er å finne hva som er endret i vakta og formulere et passende svar til en arbeidsleder. En deltager bruker opplesningsfunksjonen, markerer tidspunktet og spiller inn et muntlig svar før hun skriver en kort melding. Hun foreslår at gruppa også prøver meldinger fra forskjellige yrker.",
    "dimensions": {
      "beh": "Deltageren lytter til beskjeden, finner fram i vaktplanen, markerer informasjon og bearbeider svaret.",
      "emo": "Deltageren sier at denne typen beskjeder er relevant i arbeidslivet, samtidig som noen formuleringer oppleves vanskelige. Læreren undersøker hvilken støtte som hjelper.",
      "cog": "Deltageren identifiserer endret vakttid, skiller nødvendig informasjon fra tilleggsopplysninger og tilpasser svaret til mottakeren.",
      "age": "Deltageren foreslår meldinger fra ulike yrker. Forslaget gir gruppa nye situasjoner å øve på og påvirker lærerens videre opplegg."
    },
    "inference": "Den digitale meldingen ligner kommunikasjon deltagerne kan møte utenfor opplæringen. Læreren får innsikt i forståelsen når deltageren forklarer hva beskjeden betyr og utformer et svar. Opplesning og andre tilgjengelighetsfunksjoner inngår i arbeidsmåten og tas med når kompetansen fortolkes.",
    "investigate": "Gi en ny fiktiv beskjed med en annen endring i vaktplanen. La deltageren vise hva som er viktig, forklare hva hun vil gjøre, og formulere et svar muntlig eller skriftlig.",
    "question": "Hvordan kan arbeid med digitale beskjeder vise deltagernes språkforståelse og evne til å kommunisere i arbeidslivet?"
  }
};
 const types=[['beh','Atferdsmessig'],['emo','Emosjonelt'],['cog','Kognitivt'],['age','Agentisk']];
 function render(){const k=st.get(),o=situations[k];const stage=st.stages[k].label;
  const el=document.getElementById('assessment-local');
  if(el)el.innerHTML=`<div class="situated-example">
    <div class="situated-head"><span class="card-number">Eksempel · ${st.text(stage)}</span><h3>${st.text(o.title)}</h3><p>${st.text(o.field)}</p></div>
    <div class="situated-body"><p class="case-narrative">${st.text(o.example)}</p>
      <h4>Hva kan læreren få øye på gjennom de fire dimensjonene?</h4>
      <div class="four-situated">${types.map(([id,title])=>`<article><strong>${title}</strong><p>${st.text(o.dimensions[id])}</p></article>`).join('')}</div>
      <div class="situation-bridge"><h4>Fra engasjement til vurdering</h4><p>${st.text(o.inference)}</p><h4>Undersøk videre</h4><p>${st.text(o.investigate)}</p></div>
    </div></div>`;
  const s=document.getElementById('tool-school');if(s)s.textContent='Refleksjonsoppgave · '+stage;
  const d=document.getElementById('tool-desc');if(d)d.textContent=st.raw(o.question);
  const link=document.getElementById('assessment-tool-link');if(link)link.href='verktoy/refleksjon-engasjement-'+({sma:'smaskole',mellom:'mellomtrinn',ungdom:'ungdomsskole',voksen:'voksenopplaering'}[k])+'.html';
 }
 window.addEventListener('digskole-stagechange',render);render();
})();
