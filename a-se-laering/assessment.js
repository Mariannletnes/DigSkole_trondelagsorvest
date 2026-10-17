
(function(){
 const st=window.DigSkoleStage;
 const scenarios={
  sma:['Lek, samtale og utforsking','Et barn bygger, endrer og prøver en løsning flere ganger. Læreren undersøker hva barnet legger merke til gjennom spørsmål, en ny situasjon og handlinger som viser forståelse.','Hvordan viser barnet forståelse gjennom det hun gjør, prøver og uttrykker?'],
  mellom:['Samarbeid og faglig forklaring','En gruppe utvikler en modell. Læreren undersøker hvordan hver elev begrunner sammenhenger og bruker modellen når forutsetningene endres.','Hvilke faglige sammenhenger kan den enkelte bruke og begrunne?'],
  ungdom:['Argumentasjon og selvstendig kunnskapsarbeid','En elev arbeider med en faglig påstand og bruker flere ressurser. Læreren undersøker hvordan eleven vurderer kilder, tar faglige valg og utvikler egne resonnementer.','Hvordan kommer elevens egne faglige vurderinger til uttrykk?'],
  voksen:['Erfaringsbasert og situert forståelse','En deltager kobler fagstoff til erfaringer fra arbeid og hverdagsliv. Læreren undersøker hvordan deltageren anvender begrepene i en relevant praktisk situasjon.','Hvordan får deltageren anledning til å vise faglig forståelse på flere måter?']
 };
 const tool={sma:'smaskole',mellom:'mellomtrinn',ungdom:'ungdomsskole',voksen:'voksenopplaering'};
 function render(){let k=st.get(),o=scenarios[k];document.getElementById('assessment-local').innerHTML=`<div class="content-panel rose"><span class="card-number">Konkret situasjon · ${st.text(st.stages[k].label)}</span><h3>${st.text(o[0])}</h3><p>${st.text(o[1])}</p><p><strong>${st.text(o[2])}</strong></p></div>`;
 document.getElementById('tool-school').textContent='Refleksjonsressurs for '+st.stages[k].label.toLowerCase();
 document.getElementById('tool-desc').textContent=st.raw(o[2]);
 document.getElementById('assessment-tool-link').href='verktoy/refleksjon-engasjement-'+tool[k]+'.html';}
 window.addEventListener('digskole-stagechange',render);render();
})();
