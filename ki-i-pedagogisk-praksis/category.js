
(function(){'use strict';
const s=window.DigSkoleStage, root=window.GENKI_DATA;
const slug=document.body.dataset.category;
const cat=root.categories[slug], target=document.getElementById('category-detail');
if(!cat||!target)return;
function render(){const stage=s.get(), view=s.text, e=s.fmt, ctx=cat.contexts[stage];
const blocks=cat.blocks.map((b,i)=>`<article class="content-panel"><span class="card-number">${String(i+1).padStart(2,'0')}</span><h3>${view(b[0])}</h3><p>${view(b[1])}</p></article>`).join('');
let schoolCase=`<div class="content-panel rose"><div class="kicker">Eksempel · ${view(root.stages[stage].label)}</div><h3>${view(ctx[0])}</h3><p>${view(ctx[1])}</p><hr class="module-rule"><div class="cols2"><div><h4>Tegn på læring og engasjement</h4><p>${view(ctx[2])}</p></div><div><h4>Mulig formativ oppfølging</h4><p>${view(ctx[3])}</p></div></div></div>`;
let note=(stage==='sma'||stage==='mellom')?'<p class="notice">På 1.–7. trinn skal elever i all hovedsak ikke gis tilgang til generativ KI. Eksemplet viser hvordan læreren kan bruke KI i forberedelsen, eller hvordan elevene arbeider uten egen KI-tilgang.</p>':'';
if(stage==='voksen')note='<p class="notice">Eksemplet er tilpasset voksenopplæring. Bruk av KI forutsetter godkjente løsninger og vurdering av deltakernes behov og personvern.</p>';
target.innerHTML=`<section class="section"><div class="container"><div class="section-header"><div class="kicker">${cat.group==='teacher'?'Lærerens profesjonelle bruk':'KI i læringsarbeidet'}</div><h2 class="section-title">${view(cat.title)}</h2><p class="section-sub">${view(cat.intro)}</p></div><h3 class="section-heading-minor">Faglige perspektiver</h3><div class="cols2">${blocks}</div><h3 class="section-heading-minor">I ${view(root.stages[stage].label).toLowerCase()}</h3>${schoolCase}${note}<div class="content-panel green"><h3>Til refleksjon</h3><p>${view(cat.tension)}</p><p><strong>${view(cat.question)}</strong></p></div></div></section>`;
}
window.addEventListener('digskole-stagechange',render); render();})();
