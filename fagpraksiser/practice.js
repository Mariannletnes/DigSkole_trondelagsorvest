(function(){
'use strict';
const stage=window.DigSkoleStage;
const data=window.DIGSKOLE_DIGITAL_PRACTICES;
const refs=window.GENKI_PRACTICES;
const tabs=document.getElementById('practice-choices');
const panel=document.getElementById('practice-detail');
if(!stage||!data||!refs||!tabs||!panel)return;
const list=refs.order;
let selected='undersoke';
const fromUrl=new URLSearchParams(location.search).get('praksis');
if(data[fromUrl])selected=fromUrl;
function esc(x){return stage.text(x);}
function render(){
 const kind=stage.get();
 const d=data[selected]&&data[selected][kind];
 if(!d)return;
 const [subject,title,scene,change,choices,teacher,question]=d;
 tabs.innerHTML=list.map(id=>'<button type="button" class="practice-choice" data-practice="'+id+'" aria-pressed="'+(id===selected)+'">'+esc(refs.items[id].title)+'</button>').join('');
 tabs.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
  selected=b.dataset.practice;
  try{const u=new URL(location.href);u.searchParams.set('praksis',selected);history.replaceState(null,'',u.pathname+u.search+u.hash)}catch(e){}
  render();
 }));
 panel.innerHTML=`<div class="digi-example">
  <div class="digi-eyebrow">Et undervisningseksempel · ${esc(stage.stages[kind].label)} <span aria-hidden="true">·</span> ${esc(subject)}</div>
  <h3>${esc(title)}</h3>
  <p class="digi-lead">${esc(scene)}</p>
  <div class="digi-example-grid">
   <section class="digi-subcard"><h4>Hva gjør digitaliseringen mulig?</h4><p>${esc(change)}</p></section>
   <section class="digi-subcard"><h4>Hvilke faglige valg gjør elevene?</h4><p>${esc(choices)}</p></section>
  </div>
  <section class="digi-teacher"><h4>Lærerens didaktiske tilrettelegging</h4><p>${esc(teacher)}</p></section>
  <div class="digi-reflect"><span>Spørsmål til faglig samtale</span><p>${esc(question)}</p></div>
 </div>`;
 window.dispatchEvent(new CustomEvent('digskole-practicechange',{detail:selected}));
}
window.DigSkolePractice={get:()=>selected};
window.addEventListener('digskole-stagechange',render);
render();
})();
