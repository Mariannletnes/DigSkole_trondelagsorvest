/* Eksempler knyttet til engasjement, observasjon og vurdering. */
(function(){
 const st=window.DigSkoleStage;
 const situations={
  sma:{
    title:'Når barnet prøver på nytt',field:'Matematikk · 2. trinn',
    example:'Elevene undersøker hvordan en helhet kan deles i like store deler. En elev bretter og klipper papirsirkler, blir frustrert, prøver igjen og viser stolt fram fire deler.',
    dimensions:{
      beh:'Eleven blir i oppgaven, prøver flere ganger og arbeider med materialene.',
      emo:'Frustrasjonen, nysgjerrigheten og stoltheten kan fortelle noe om betydningen oppgaven har for barnet.',
      cog:'Eleven sammenligner delene, prøver en ny brettemåte og undersøker hva som gjør delene like store.',
      age:'Eleven foreslår å bruke en annen papirform og vil vise framgangsmåten til en medelev.'},
    inference:'Hva vet vi om elevens forståelse av «like store deler»? At eleven er utholdende og fornøyd, forteller oss noe om engasjementet. Måten eleven sammenligner, justerer og forklarer delene på, gir videre innsikt i begrepsforståelsen.',
    investigate:'Gi eleven en annen form å dele. Be henne vise og forklare hvordan hun kan vite at delene er like store.',
    question:'Hvilke handlinger og uttrykk gir oss innsikt i elevens forståelse av like store deler?'
  },
  mellom:{
    title:'Når gruppa arbeider ivrig',field:'Naturfag · 6. trinn',
    example:'En gruppe bygger en modell av vannets kretsløp. Elevene diskuterer, tegner piler og bruker fagbegrepene fordamping og kondensasjon. Alle er travelt opptatt, men bidrar på forskjellige måter.',
    dimensions:{
      beh:'Elevene samarbeider, fordeler arbeid og holder aktiviteten i gang.',
      emo:'Elevene viser stolthet, frustrasjon og tilhørighet når de forhandler om utformingen.',
      cog:'Noen elever forsøker å forklare hvorfor vannet skifter form og reviderer pilene i modellen.',
      age:'Elevene foreslår nye spørsmål og påvirker hvordan gruppa vil undersøke kretsløpet.'},
    inference:'Gruppas aktivitet gir mange tegn på engasjement. For å forstå den enkelte elevens læring undersøker læreren hvordan elevene bruker fagbegrepene og forklarer sammenhengene modellen viser.',
    investigate:'La hver elev bruke modellen til å forklare hva som skjer når vanndamp kjøles ned, og invitér til spørsmål og justeringer.',
    question:'Hvordan blir den enkeltes begrepsforståelse synlig i et engasjert gruppearbeid?'
  },
  ungdom:{
    title:'Når eleven utfordrer en påstand',field:'Samfunnsfag · 9. trinn',
    example:'Elevene undersøker påstander om klima og mulige tiltak. En elev sitter lenge stille med to kilder, skriver en innvending og stiller deretter et spørsmål som endrer retningen i gruppesamtalen.',
    dimensions:{
      beh:'Den synlige aktiviteten veksler mellom stille lesing, notater og muntlige bidrag.',
      emo:'Saken vekker engasjement og uenighet; eleven viser også usikkerhet når kildene peker i ulik retning.',
      cog:'Eleven sammenligner begrunnelser, vurderer kildene og utvikler et motargument.',
      age:'Eleven setter et nytt spørsmål på dagsordenen og ber gruppa undersøke påstanden nærmere.'},
    inference:'Det stille arbeidet kan romme faglig fordypning. Lærerens innsikt blir rikere når eleven setter ord på kildevurderingen og viser hvordan en opprinnelig oppfatning er bearbeidet.',
    investigate:'Be eleven forklare hvilket belegg som fikk henne til å revurdere påstanden, og hvordan hun ville undersøke den videre.',
    question:'Hvordan får vi innsikt i elevens faglige resonnementer bak både taushet og synlige bidrag?'
  },
  voksen:{
    title:'Når erfaringene gir mening til fagstoffet',field:'Voksenopplæring · praktisk tekst',
    example:'Deltagerne arbeider med en tekst om rettigheter og plikter i arbeidslivet. En deltager sier lite i fellessamtalen, men viser gjennom et eksempel fra egen arbeidserfaring hvordan en regel kan anvendes.',
    dimensions:{
      beh:'Deltageren leser, lytter, peker i teksten og bidrar med et praktisk eksempel.',
      emo:'Relevans og gjenkjennelse kan styrke opplevelsen av at fagstoffet angår eget liv.',
      cog:'Deltageren knytter et fagbegrep til en erfaring og prøver å anvende det i en ny situasjon.',
      age:'Deltageren bringer inn eget perspektiv, ber om presisering og påvirker samtalens videre retning.'},
    inference:'Deltagelse kan komme til uttrykk på ulike måter og gjennom ulike språk. Eksemplet fra arbeidslivet kan gi viktig informasjon om hvordan deltageren forstår og bruker fagstoffet.',
    investigate:'Presenter en ny arbeidssituasjon og la deltageren forklare eller vise hvordan regelen får betydning der.',
    question:'Hvordan kan deltagernes erfaringer og ulike uttrykksformer gi innsikt i den faglige forståelsen?'
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
