(function(){
'use strict';
const container=document.getElementById('sk-model');if(!container)return;
const steps=[
{topic:'01 · FØRSTE TRANSFORMASJONSSYKLUS',title:'Iscenesetting og arbeid med ressurser',explanation:'Læreren iscenesetter et faglig arbeidsrom med mål, oppgaver, ressurser og rammer. Elevene møter fagstoffet, posisjonerer seg og begynner å velge og omforme tilgjengelige ressurser. Iscenesettingen er her vist som inngangen til den første transformasjonssyklusen.',question:'Hvilke tegnsystemer, materialer og verktøy gjør det mulig for elevene å utforske fagstoffet?'},
{topic:'02 · FØRSTE TRANSFORMASJONSSYKLUS',title:'Bearbeiding og representasjon',explanation:'Elevene undersøker, velger, kombinerer og bearbeider ressurser. Forståelsen får form gjennom en representasjon – for eksempel en tegning, forklaring, modell, tekst, lyd eller et praktisk produkt. Dette gir et grunnlag for å arbeide videre med faglig mening.',question:'Hvordan kan elevene bruke forskjellige uttrykksformer når de bearbeider og viser sin forståelse?'},
{topic:'03 · ANDRE TRANSFORMASJONSSYKLUS',title:'Diskusjon og metarefleksjon',explanation:'Representasjonene presenteres, fortolkes og drøftes. Elevene kan sette ord på faglige valg, sammenligne perspektiver og videreutvikle forståelsen gjennom diskusjon og metarefleksjon. Lærerens spørsmål og elevbidrag påvirker hvordan samtalen utvikler seg.',question:'Hvordan legger vi til rette for at elevene reflekterer over egen forståelse og bidrar til samtalen med egne spørsmål?'},
{topic:'04 · LÆRERENS FORMATIVE BLIKK',title:'Hva blir synlig av læringen?',explanation:'Læreren følger elevenes arbeid i begge transformasjonssyklusene: hva de prøver ut, hvilke ressurser de velger, hvordan de begrunner valg og hvordan forståelsen utvikles i representasjoner og samtaler. Observasjonene gir grunnlag for spørsmål, støtte og videre didaktiske valg.',question:'Hvilke tegn på faglig forståelse kan vi undersøke underveis, og hvilke får vi øye på når elevene presenterer og reflekterer over arbeidet?'}
];
let current=0;
const get=id=>document.getElementById(id);
const next=get('sk-next'),back=get('sk-back'),tabs=[...container.querySelectorAll('[data-sk-step]')];
function render(){
 container.querySelectorAll('[data-sk-reveal]').forEach(el=>{el.classList.toggle('sk-visible',Number(el.dataset.skReveal)<=current);});
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
})();
