
(function(){
 'use strict';
 const contexts=window.GENKI_DATA.stages;
 const order=['sma','mellom','ungdom','voksen'];
 const key='DigSkole-'+(document.body.dataset.module||'resource')+'-trinn';
 const q=new URLSearchParams(location.search).get('trinn');
 let saved='';try{saved=localStorage.getItem(key)||''}catch(e){}
 let chosen=order.includes(q)?q:order.includes(saved)?saved:'sma';
 const byId=x=>document.getElementById(x);
 function fmt(v){return String(v||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function adult(text){return chosen==='voksen'?String(text).replace(/\b(elevene|elevenes|eleven|elevens|elever|elev|barna|barnas|deltakere|deltakernes|deltakeren|deltakerens|deltaker)\b/gi,function(w){const d={'elevene':'deltagerne','elevenes':'deltagernes','eleven':'deltageren','elevens':'deltagerens','elever':'deltagere','elev':'deltager','barna':'deltagerne','barnas':'deltagernes','deltakere':'deltagere','deltakernes':'deltagernes','deltakeren':'deltageren','deltakerens':'deltagerens','deltaker':'deltager'};const v=d[w.toLowerCase()]||w;return w.charAt(0)===w.charAt(0).toUpperCase()?v.charAt(0).toUpperCase()+v.slice(1):v; }):String(text);}
 const view = x=>fmt(adult(x));
 function stageNav(){const d=byId('stage-choices');if(!d)return;
 d.innerHTML=order.map(id=>`<button type="button" class="stage-choice" data-stage="${id}" aria-pressed="${id===chosen}">${fmt(contexts[id].label)}</button>`).join('');
 d.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.stage)));
 const e=byId('stage-context');if(e)e.innerHTML=`<strong>${view(contexts[chosen].label)} (${view(contexts[chosen].grades)})</strong><div>${view(contexts[chosen].strap)}. ${view(contexts[chosen].policy)}</div>`;
 document.querySelectorAll('[data-stage-local-link]').forEach(a=>{const base=a.getAttribute('data-base')||a.getAttribute('href').split('?')[0];a.dataset.base=base;a.href=base+'?trinn='+chosen;});
 }
 function choose(id){chosen=id;try{localStorage.setItem(key,id)}catch(e){}
 try{const u=new URL(location.href);u.searchParams.set('trinn',id);history.replaceState(null,'',u.pathname+u.search+u.hash)}catch(e){}
 stageNav();window.dispatchEvent(new CustomEvent('digskole-stagechange',{detail:chosen}));}
 stageNav();
 window.DigSkoleStage={ get:()=>chosen, text:view, raw:adult, fmt:fmt, set:choose, stages:contexts };
 window.dispatchEvent(new CustomEvent('digskole-stagechange',{detail:chosen}));
})();
