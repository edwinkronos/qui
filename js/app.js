const CSV_URL="PEGA_AQUI_TU_CSV";
let gl=0,gv=0,data=[];
function c(d,t){if(t==0){gl=Math.max(0,gl+d);l.textContent=gl;}else{gv=Math.max(0,gv+d);v.textContent=gv;}paint();}
async function load(){
if(CSV_URL.startsWith("PEGA")){stats.innerHTML="Configure CSV_URL";return;}
const txt=await fetch(CSV_URL).then(r=>r.text());
const rows=txt.trim().split(/\r?\n/).map(r=>r.split(","));
data=[];
let total=0;
for(let i=1;i<rows.length;i++){
 let [nombre,monto,loc,vis]=rows[i];
 if(!nombre)continue;
 total+=parseFloat(monto)||0;
 data.push({nombre,monto,loc:+loc,vis:+vis});
}
stats.innerHTML=`Participantes: ${data.length} | Total Bs ${total.toFixed(2)}`;
paint();
}
function paint(){
tb.innerHTML="";
let n=1;
data.forEach(p=>{
 let w=p.loc===gl&&p.vis===gv;
 tb.innerHTML+=`<tr class="${w?'winner':''}"><td>${n++}</td><td>${w?'🏆 ':''}${p.nombre}</td><td>${p.monto}</td><td>${p.loc}</td><td>${p.vis}</td></tr>`;
});
}
load();