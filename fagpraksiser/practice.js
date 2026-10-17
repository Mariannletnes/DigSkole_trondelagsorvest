
(function(){'use strict';
const stage=window.DigSkoleStage, db=window.GENKI_PRACTICES, specs=window.GENKI_TRINN;
const elt=document.getElementById('practice-choices'), box=document.getElementById('practice-detail');
if(!db||!elt||!box)return;
let selected='undersoke';const prm=new URLSearchParams(location.search).get('praksis');if(db.items[prm])selected=prm;
const text=t=>stage.text(t);
function render(){let val=stage.get(), p=db.items[selected], c=p.contexts[val], extra=(specs[selected]||{})[val];
elt.innerHTML=db.order.map(id=>`<button type="button" class="practice-choice" data-practice="${id}" aria-pressed="${id===selected}">${text(db.items[id].title)}</button>`).join('');
elt.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.practice;try{let u=new URL(location.href);u.searchParams.set('praksis',selected);history.replaceState(null,'',u.pathname+u.search+u.hash)}catch(e){}render();}));
let note=(val==='sma'||val==='mellom')?'<p class="notice">På 1.–7. trinn er KI her en mulig lærerressurs. Elevene arbeider i hovedsak uten egen tilgang til generativ KI.</p>':'';
box.innerHTML=`<h3 class="section-heading-minor">${text(p.title)}</h3><p class="resource-intro">${text(p.core)}</p><p class="meta">Praksisen kan blant annet inngå i: ${text(p.fields)}.</p>
<div class="content-panel rose"><div class="kicker">Eksempel · ${text(stage.stages[val].label)}</div><h3>${text(c[0])}</h3><p>${text(c[1])}</p><div class="cols2" style="margin-top:1.2rem"><div><h4>KI-rolle</h4><p>${text(c[2])}</p></div><div><h4>Tegn på læring</h4><p>${text(c[3])}</p></div></div><hr class="module-rule"><h4>Lærerens formative oppfølging</h4><p>${text(c[4])}</p></div>
${extra?`<div class="content-panel green"><h3>${text(extra[0])}</h3><div class="cols2"><div><h4>Hva skal den lærende arbeide med?</h4><p>${text(extra[1])}</p></div><div><h4>Hva undersøker læreren?</h4><p>${text(extra[2])}</p></div></div></div>`:''}${note}
<div class="cols2"><div class="content-panel"><h3>Faglig kompetanse</h3><p>${text(p.goal)}</p><h4>Vurderingsgrunnlag</h4><p>${text(p.validity)}</p></div><div class="content-panel"><h3>Digitalisering og KI</h3><p>${text(p.ai)}</p><h4>Mulige tegn</h4><p>${text(p.evidence)}</p></div></div>`;
}
window.addEventListener('digskole-stagechange',render);render();})();
