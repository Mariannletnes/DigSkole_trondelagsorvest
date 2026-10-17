
(function(){const st=window.DigSkoleStage;const files={sma:'smaskole',mellom:'mellomtrinn',ungdom:'ungdomstrinn',voksen:'voksenopplaering'};
const desc={sma:'Planlegg for lærerstyrt bruk av KI i forberedelsen og elevenes utforsking uten egen KI-tilgang.',mellom:'Planlegg faglig bearbeiding, ulike representasjoner og vurderingssituasjoner med læreren som ansvarlig for eventuell KI-bruk.',ungdom:'Planlegg elevens faglige valg og ansvar i læringsprosesser der KI eventuelt kan inngå som ressurs.',voksen:'Planlegg ut fra deltagernes erfaringer, språklige ressurser og faglige læringsmål.'};
function render(){let k=st.get();document.getElementById('design-tool-heading').textContent='Planleggingsverktøy for '+st.stages[k].label.toLowerCase();document.getElementById('design-tool-desc').textContent=desc[k];document.getElementById('design-tool-link').href='verktoy/planlegging-design-for-laering-ki-'+files[k]+'.html';}
window.addEventListener('digskole-stagechange',render);render();})();
