const categories=["🎵 Música","⚽ Esportes","🎬 Filmes","📺 Séries","🎮 Jogos digitais","📱 Redes sociais","💬 Comunicação","🧠 Personalidade","❤️ Relacionamento","🌎 Estilo de vida","🎨 Hobbies","🍔 Alimentação"];

// Q(índice da categoria, pergunta, "opção:valor|opção:valor")
const Q=(c,q,o)=>({category:categories[c],question:q,options:o.split("|").map(s=>{const i=s.lastIndexOf(":");return [s.slice(0,i),+s.slice(i+1)]})});

const questions=[
Q(0,"Que tipo de música você mais costuma ouvir?","Sertanejo:80|Pop:70|Rock:60|Rap/Trap:90|Eletrônica:75|MPB:65"),
Q(0,"Você costuma descobrir músicas novas?","Sempre:95|Frequentemente:80|Às vezes:60|Raramente:40|Quase nunca:25"),
Q(0,"O quanto a música faz parte do seu dia?","Muito:95|Bastante:80|Moderadamente:60|Pouco:40|Quase nada:20"),
Q(0,"Você prefere ouvir música sozinho ou acompanhado?","Sozinho:70|Com outras pessoas:80|Depende do momento:90|Tanto faz:60"),

Q(1,"Qual sua relação com esportes?","Adoro:95|Gosto bastante:80|Gosto um pouco:60|Não acompanho muito:40|Não gosto:20"),
Q(1,"Você prefere praticar ou assistir esportes?","Praticar:90|Assistir:75|Os dois:95|Nenhum:25"),
Q(1,"Qual ambiente esportivo você prefere?","Estádio:85|Em casa:65|Academia:75|Ao ar livre:90|Não tenho preferência:55"),
Q(1,"Você acompanha campeonatos?","Sempre:95|Às vezes:65|Raramente:40|Nunca:20"),

Q(2,"Qual gênero de filme você prefere?","Comédia:80|Ação:85|Terror:70|Romance:65|Ficção científica:90|Drama:55"),
Q(2,"Você prefere filmes longos ou curtos?","Longos:75|Curtos:65|Tanto faz:90"),
Q(2,"Você gosta de assistir filmes repetidos?","Sim, bastante:90|Às vezes:70|Raramente:45|Nunca:25"),
Q(2,"Onde você prefere assistir filmes?","Cinema:90|Streaming:85|TV:60|Computador:70|Celular:50"),

Q(3,"Quantas séries você costuma acompanhar?","Muitas:90|Algumas:75|Poucas:55|Quase nenhuma:30"),
Q(3,"Você prefere assistir vários episódios seguidos?","Sim:90|Às vezes:70|Não:40"),
Q(3,"Qual tipo de série mais chama sua atenção?","Comédia:80|Drama:65|Ação:90|Terror:70|Mistério:85"),
Q(3,"Você termina as séries que começa?","Quase sempre:90|Na maioria das vezes:75|Às vezes:55|Raramente:35"),

Q(4,"Qual sua relação com jogos digitais?","Jogo muito:95|Jogo bastante:80|Jogo às vezes:60|Jogo pouco:40|Não jogo:20"),
Q(4,"Que tipo de jogo você prefere?","Ação:85|RPG:90|Esportes:75|Estratégia:80|Casual:65"),
Q(4,"Você prefere jogar sozinho ou com outras pessoas?","Sozinho:70|Online:90|Com amigos presencialmente:85|Os dois:95"),
Q(4,"Você costuma terminar os jogos?","Sim:90|Muitos:80|Alguns:65|Quase nunca:35"),

Q(5,"Quanto tempo você passa nas redes sociais?","Muito:90|Bastante:80|Moderado:65|Pouco:40|Quase nada:20"),
Q(5,"Qual tipo de conteúdo você mais consome?","Humor:80|Notícias:70|Vídeos curtos:90|Tecnologia:85|Entretenimento:75"),
Q(5,"Você costuma publicar coisas?","Muito:90|Às vezes:70|Raramente:45|Nunca:25"),
Q(5,"Você prefere conversar por mensagens ou pessoalmente?","Mensagens:80|Pessoalmente:75|Os dois:95|Depende:85"),

Q(6,"Quando acontece um problema, você prefere:","Conversar imediatamente:90|Pensar antes de conversar:80|Esperar a outra pessoa falar:60|Evitar conversar:30"),
Q(6,"Você costuma falar diretamente o que pensa?","Sempre:90|Na maioria das vezes:80|Às vezes:60|Raramente:40"),
Q(6,"Você prefere conversas longas?","Sim:90|Depende:75|Não muito:55|Prefiro mensagens curtas:40"),
Q(6,"Como você demonstra que está interessado em uma conversa?","Faço perguntas:90|Presto bastante atenção:85|Converso bastante:80|Demonstro pouco:50"),

Q(7,"Você se considera uma pessoa mais:","Extrovertida:90|Um pouco extrovertida:75|Equilibrada:65|Um pouco introvertida:50|Introvertida:35"),
Q(7,"Você costuma tomar decisões rapidamente?","Sim:90|Geralmente:75|Depende:65|Demoro bastante:45"),
Q(7,"Como você reage a mudanças?","Adoro mudanças:90|Gosto:80|Depende:65|Prefiro estabilidade:45"),
Q(7,"Você se considera mais:","Calmo:70|Animado:90|Intenso:85|Reservado:50|Variável:80"),

Q(8,"Em um relacionamento, o que mais importa para você?","Confiança:95|Carinho:85|Companheirismo:90|Liberdade:75|Diversão:80"),
Q(8,"Você gosta de passar bastante tempo junto?","Sim:90|Bastante:80|Depende:65|Prefiro espaço:45"),
Q(8,"Como você prefere demonstrar carinho?","Palavras:75|Atitudes:90|Presentes:65|Contato físico:85|Tempo juntos:80"),
Q(8,"Você prefere resolver conflitos:","Conversando:95|Depois de pensar:80|Com tempo:65|Evitando discussão:40"),

Q(9,"Como é sua rotina normalmente?","Muito agitada:90|Agitada:80|Equilibrada:70|Tranquila:55"),
Q(9,"Você prefere sair ou ficar em casa?","Sair:90|Mais sair:80|Os dois:95|Mais ficar em casa:65|Casa:50"),
Q(9,"Você gosta de planejar as coisas?","Muito:90|Bastante:80|Às vezes:65|Prefiro improvisar:50"),
Q(9,"Você prefere:","Rotina:60|Novidades:90|Um pouco dos dois:85|Depende:75"),

Q(10,"O que você prefere fazer no tempo livre?","Assistir filmes/séries:80|Jogar:90|Ouvir música:85|Sair:75|Ler:65|Criar coisas:88"),
Q(10,"Você gosta de aprender coisas novas por hobby?","Muito:95|Bastante:85|Às vezes:70|Pouco:45"),
Q(10,"Você prefere hobbies individuais ou em grupo?","Individuais:65|Em grupo:85|Os dois:95|Depende:80"),
Q(10,"Com que frequência você pratica seus hobbies?","Todos os dias:95|Várias vezes por semana:85|Algumas vezes por mês:65|Raramente:40"),

Q(11,"Qual tipo de comida você prefere?","Fast food:80|Comida caseira:90|Comida saudável:75|Massas:85|Comida japonesa:70"),
Q(11,"Você gosta de experimentar comidas novas?","Muito:95|Bastante:85|Às vezes:70|Prefiro o conhecido:50"),
Q(11,"Você prefere comer em:","Restaurante:85|Casa:75|Delivery:90|Tanto faz:95"),
Q(11,"Como você se considera com comida?","Muito exigente:50|Um pouco exigente:65|Tranquilo:85|Como praticamente tudo:95")
];

let currentQuestion=0,currentPerson=1,selectedValue=null,answers=[];
const names={1:"",2:""},results={1:{},2:{}};
const $=id=>document.getElementById(id);

function showScreen(id){
  document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden"));
  $(id).classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function normalizarNome(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase()}

function begin(person,inputId){
  const name=$(inputId).value.trim();
  if(!name){alert("Digite seu nome para continuar.");return}
  names[person]=name;currentPerson=person;currentQuestion=0;answers=[];
  showScreen("quiz");showQuestion();
}
function startQuiz(){begin(1,"nameInput")}
function startSecondQuiz(){begin(2,"secondNameInput")}

document.addEventListener("keydown",e=>{
  if(e.key!=="Enter")return;
  if(e.target.id==="nameInput")startQuiz();
  if(e.target.id==="secondNameInput")startSecondQuiz();
});

function showQuestion(){
  const q=questions[currentQuestion];
  $("progress").textContent=`Pergunta ${currentQuestion+1} de ${questions.length}`;
  $("who").textContent=names[currentPerson];
  $("bar").style.width=(currentQuestion/questions.length*100)+"%";
  $("category").textContent=q.category;
  $("question").textContent=q.question;
  const box=$("options");box.innerHTML="";
  selectedValue=null;$("nextButton").disabled=true;
  $("nextButton").textContent=currentQuestion===questions.length-1?"Ver resultado":"Próxima";
  q.options.forEach(opt=>{
    const b=document.createElement("button");
    b.className="option";b.textContent=opt[0];
    b.onclick=()=>{
      box.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));
      b.classList.add("selected");selectedValue=opt[1];$("nextButton").disabled=false;
    };
    box.appendChild(b);
  });
}

function nextQuestion(){
  if(selectedValue===null)return;
  answers.push({category:questions[currentQuestion].category,value:selectedValue});
  currentQuestion++;
  if(currentQuestion<questions.length){showQuestion()}
  else{calculateResults();showIndividualResult()}
}

function calculateResults(){
  const by={};
  answers.forEach(a=>{(by[a.category]=by[a.category]||[]).push(a.value)});
  categories.forEach(c=>{
    const v=by[c]||[];
    if(v.length)results[currentPerson][c]=Math.round(v.reduce((s,x)=>s+x,0)/v.length);
  });
}

function showIndividualResult(){
  $("resultName").textContent=names[currentPerson];
  $("individualTable").innerHTML=categories.map(c=>{
    const v=results[currentPerson][c];
    return `<div class="row"><div class="top"><span>${c}</span><b>${v}</b></div><div class="track"><i style="width:${v}%"></i></div></div>`;
  }).join("");

  $("esterSurprise").classList.add("hidden");
  $("esterLetter").classList.add("hidden");
  $("letterBtn").classList.remove("hidden");
  if(normalizarNome(names[currentPerson])==="ester")$("esterSurprise").classList.remove("hidden");

  $("nextPersonButton").textContent=currentPerson===1?"Continuar para a outra pessoa":"Ver comparação";
  showScreen("individualResult");
}

function openEsterLetter(){
  $("letterBtn").classList.add("hidden");
  const l=$("esterLetter");l.classList.remove("hidden");
  l.scrollIntoView({behavior:"smooth",block:"start"});
}

function nextPerson(){currentPerson===1?showScreen("secondPerson"):showFinalResult()}

function showFinalResult(){
  $("finalName1").textContent=names[1];
  $("finalName2").textContent=names[2];
  $("finalTable").innerHTML=categories.map(c=>{
    const a=results[1][c],b=results[2][c];
    const n1=names[1].replace(/</g,"&lt;"),n2=names[2].replace(/</g,"&lt;");
    return `<div><div class="cat">${c}</div>
      <div class="pair"><span>${n1}</span><div class="track"><i style="width:${a}%"></i></div><b>${a}</b></div>
      <div class="pair"><span>${n2}</span><div class="track"><i class="b2" style="width:${b}%"></i></div><b>${b}</b></div></div>`;
  }).join("");
  showScreen("finalResult");
}

function downloadImage(){
  html2canvas($("captureArea"),{backgroundColor:"#ffffff",scale:2}).then(canvas=>{
    const a=document.createElement("a");
    a.download=`comparacao-${names[1]}-${names[2]}.png`;
    a.href=canvas.toDataURL("image/png");a.click();
  });
}
