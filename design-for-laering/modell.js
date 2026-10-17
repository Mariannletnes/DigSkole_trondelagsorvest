(function(){
'use strict';
const container=document.getElementById('sk-model');if(!container)return;
const steps=[
{topic:'01 · RAMMER OG DELTAKELSE',title:'Hva setter rammene for læringssekvensen?',explanation:'En formell læringssekvens springer ut av mål, potensielle ressurser og institusjonelle mønstre. Elevenes posisjonering, interesse og sosiale interaksjon preger hvordan de går inn i arbeidet, mens lærerens intervensjoner følger prosessen hele veien.',question:'Hvilke mål, ressurser og institusjonelle mønstre setter rammene for denne læringssekvensen?'},
{topic:'02 · FØRSTE TRANSFORMASJONSSYKLUS',title:'Iscenesetting og arbeid med ressurser',explanation:'Læreren iscenesetter et faglig arbeidsrom med mål, oppgaver, ressurser og rammer. Elevene møter fagstoffet, posisjonerer seg og begynner å velge, prøve og omforme tilgjengelige ressurser. Iscenesettingen er her vist som inngangen til den første transformasjonssyklusen.',question:'Hvilke tegnsystemer, materialer og verktøy gjør det mulig for elevene å utforske fagstoffet?'},
{topic:'03 · FØRSTE TRANSFORMASJONSSYKLUS',title:'Bearbeiding og representasjon',explanation:'Elevene undersøker, velger, kombinerer og bearbeider ressurser. Forståelsen får form gjennom en representasjon – for eksempel en tegning, forklaring, modell, tekst, lyd eller et praktisk produkt. Dette gir et grunnlag for å arbeide videre med faglig mening.',question:'Hvordan kan elevene bruke forskjellige uttrykksformer når de bearbeider og viser sin forståelse?'},
{topic:'04 · ANDRE TRANSFORMASJONSSYKLUS',title:'Diskusjon og metarefleksjon',explanation:'Representasjonene presenteres, fortolkes og drøftes. Elevene kan sette ord på faglige valg, sammenligne perspektiver og videreutvikle forståelsen gjennom diskusjon og metarefleksjon. Lærerens spørsmål og elevbidrag påvirker hvordan samtalen utvikler seg.',question:'Hvordan legger vi til rette for at elevene reflekterer over egen forståelse og bidrar til samtalen med egne spørsmål?'},
{topic:'05 · FORMATIV OG SUMMATIV VURDERING',title:'Å følge læringen og vurdere kompetansen',explanation:'Formativ vurdering inngår i læringsprosessen. Læreren observerer, lytter, undersøker elevenes resonnementer og bruker innsikten til respons og videre didaktiske valg. Summativ vurdering innebærer å sammenfatte et tilstrekkelig og faglig relevant grunnlag for å vurdere kompetansen på et gitt tidspunkt. Både prosessen, representasjonene og elevenes begrunnelser kan bidra til vurderingsgrunnlaget.',question:'Hvilke tegn på faglig forståelse kan vi bruke til å støtte læringen underveis, og hvilket samlet grunnlag trenger vi for å vurdere elevenes kompetanse?'}
];
let current=0;
const get=id=>document.getElementById(id);
const next=get('sk-next'),back=get('sk-back'),tabs=[...container.querySelectorAll('[data-sk-step]')];


const glossary={
 rammer:{title:'Rammer for læringssekvensen',text:'Mål, potensielle ressurser og institusjonelle mønstre setter betingelsene for elevenes læringsarbeid.'},
 iscenesetting:{title:'Iscenesetting',text:'Læreren iscenesetter et rom for læring ved å åpne fagstoffet og skape muligheter for utforsking, deltakelse og faglig arbeid.'},
 transformasjon:{title:'Transformasjon',text:'Elevene velger, prøver ut, kombinerer og omformer tilgjengelige ressurser når de utvikler mening og faglig forståelse.'},
 bearbeiding:{title:'Bearbeiding',text:'Elevene videreutvikler forståelsen gjennom å undersøke, prøve ut og omforme innholdet med ulike tegnsystemer og medier.'},
 representasjon:{title:'Representasjon',text:'Elevene gir forståelsen form gjennom uttrykk som tekst, bilde, lyd, modeller, handlinger eller praktiske produkter.'},
 andre_syklus:{title:'Andre transformasjonssyklus',text:'Elevenes representasjoner blir utgangspunkt for deling, diskusjon og metarefleksjon, slik at forståelsen kan bearbeides videre.'},
 refleksjon:{title:'Diskusjon og metarefleksjon',text:'Elevene setter ord på hva de har gjort, begrunner faglige valg og undersøker hvordan forståelsen kan videreutvikles.'},
 larer:{title:'Lærerens posisjonering og intervensjon',text:'Læreren følger læringsprosessen, stiller spørsmål, støtter og utfordrer elevenes faglige arbeid gjennom hele sekvensen.'},
 formativ:{title:'Formativ vurdering',text:'Lærer og elever bruker tegn på forståelse underveis til å gi respons, justere arbeidet og støtte videre læring.'},
 summativ:{title:'Summativ vurdering',text:'Læreren sammenfatter et relevant og tilstrekkelig grunnlag for å vurdere elevenes kompetanse på et gitt tidspunkt.'}
};
const hotspots=[...container.querySelectorAll('[data-sk-tip]')];
let selectedTip='rammer';
function showGlossary(key){
 const data=glossary[key]; if(!data)return;
 selectedTip=key;
 get('sk-glossary-title').textContent=data.title;
 get('sk-glossary-text').textContent=data.text;
 hotspots.forEach(el=>el.classList.toggle('sk-selected',el.dataset.skTip===key));
}
hotspots.forEach(el=>{
 el.addEventListener('pointerenter',()=>showGlossary(el.dataset.skTip));
 el.addEventListener('focus',()=>showGlossary(el.dataset.skTip));
 el.addEventListener('click',()=>showGlossary(el.dataset.skTip));
 el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showGlossary(el.dataset.skTip);}});
});

function render(){
 container.querySelectorAll('[data-sk-reveal]').forEach(el=>{el.classList.toggle('sk-visible',Number(el.dataset.skReveal)<=current);});
 if(!hotspots.some(el=>el.dataset.skTip===selectedTip&&(!el.closest('[data-sk-reveal]')||el.closest('[data-sk-reveal]').classList.contains('sk-visible')))){showGlossary(current===0?'rammer':current===1?'iscenesetting':current===2?'representasjon':current===3?'andre_syklus':'formativ');}
 tabs.forEach((t,i)=>{t.setAttribute('aria-pressed',String(i===current));t.setAttribute('aria-label','Vis del '+(i+1)+': '+steps[i].title);});
 get('sk-progress').textContent=(current+1)+' av '+steps.length;
 get('sk-topic').textContent=steps[current].topic;
 get('sk-title').textContent=steps[current].title;
 get('sk-explanation').textContent=steps[current].explanation;
 get('sk-question').textContent=steps[current].question;
 back.disabled=current===0;next.disabled=current===steps.length-1;
 next.textContent=current===steps.length-1?'Hele modellen vist':'Neste del →';
}
function setStep(v){current=Math.max(0,Math.min(steps.length-1,v));render();}
tabs.forEach((t,i)=>t.addEventListener('click',()=>setStep(i)));
next.addEventListener('click',()=>setStep(current+1));back.addEventListener('click',()=>setStep(current-1));
container.addEventListener('keydown',e=>{if(e.target.tagName==='BUTTON')return;if(e.key==='ArrowRight'){e.preventDefault();setStep(current+1)}else if(e.key==='ArrowLeft'){e.preventDefault();setStep(current-1)}});
render();
showGlossary('rammer');
})();
