/* Ressursspesifikke skoleslagsvalg – uten kobling til KI-ressursen */
(function(){
  'use strict';
  const contexts={
    sma:{label:'Småskolen',grades:'1.–4. trinn',strap:'Lek, handling, samtale og utforsking',context:'Barn kan vise engasjement gjennom materialarbeid, forsøk, kroppslige handlinger, spørsmål og lek. Læreren undersøker sammen med barnet hva handlingene betyr.'},
    mellom:{label:'Mellomtrinnet',grades:'5.–7. trinn',strap:'Samarbeid, utforsking og faglige forklaringer',context:'Felles aktivitet kan gi mange tegn på engasjement. Læreren følger også den enkelte elevens utforsking, begrunnelser og bidrag i gruppa.'},
    ungdom:{label:'Ungdomstrinnet',grades:'8.–10. trinn',strap:'Egne spørsmål, kritisk prøving og faglig fordypning',context:'Elevenes deltakelse kan komme til uttrykk gjennom spørsmål, stille tankearbeid, uenighet og kritisk refleksjon. Læreren undersøker hvordan de utvikler og begrunner egne standpunkter.'},
    voksen:{label:'Voksenopplæringen',grades:'Voksne deltagere',strap:'Erfaring, relevans og ulike måter å delta på',context:'Deltagernes erfaringer, språk og livssituasjoner preger hvordan engasjement kommer til uttrykk. Læreren gir rom for ulike måter å undersøke, bidra og vise forståelse på.'}
  };
  const order=['sma','mellom','ungdom','voksen'];
  const key='DigSkole-engasjement-trinn';
  const q=new URLSearchParams(location.search).get('trinn');
  let saved='';try{saved=localStorage.getItem(key)||''}catch(e){}
  let chosen=order.includes(q)?q:order.includes(saved)?saved:'sma';
  const byId=x=>document.getElementById(x);
  function fmt(v){return String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function adult(text){return chosen==='voksen'?String(text).replace(/\b(elevene|elevenes|eleven|elevens|elever|elev|barna|barnas|deltakere|deltakernes|deltakeren|deltakerens|deltaker)\b/gi,function(w){const d={'elevene':'deltagerne','elevenes':'deltagernes','eleven':'deltageren','elevens':'deltagerens','elever':'deltagere','elev':'deltager','barna':'deltagerne','barnas':'deltagernes','deltakere':'deltagere','deltakernes':'deltagernes','deltakeren':'deltageren','deltakerens':'deltagerens','deltaker':'deltager'};const v=d[w.toLowerCase()]||w;return w.charAt(0)===w.charAt(0).toUpperCase()?v.charAt(0).toUpperCase()+v.slice(1):v;}):String(text);}
  function stageNav(){const d=byId('stage-choices');if(!d)return;
    d.innerHTML=order.map(id=>`<button type="button" class="stage-choice" data-stage="${id}" aria-pressed="${id===chosen}">${fmt(contexts[id].label)}</button>`).join('');
    d.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.stage)));
    const e=byId('stage-context');if(e)e.innerHTML=`<strong>${fmt(contexts[chosen].label)} (${fmt(contexts[chosen].grades)})</strong><div><span class="stage-strap">${fmt(contexts[chosen].strap)}</span><br>${fmt(contexts[chosen].context)}</div>`;
  }
  function choose(id){if(!order.includes(id))return;chosen=id;try{localStorage.setItem(key,id)}catch(e){};try{const u=new URL(location.href);u.searchParams.set('trinn',id);history.replaceState(null,'',u.pathname+u.search+u.hash)}catch(e){};stageNav();window.dispatchEvent(new CustomEvent('digskole-stagechange',{detail:chosen}));}
  window.DigSkoleStage={get:()=>chosen,text:x=>fmt(adult(x)),raw:adult,fmt:fmt,set:choose,stages:contexts};
  stageNav();window.dispatchEvent(new CustomEvent('digskole-stagechange',{detail:chosen}));
})();
