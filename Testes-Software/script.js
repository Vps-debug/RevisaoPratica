const questions=[
["1","Agendar consultas é classificado como requisito funcional e o tempo de carregamento em até 3 segundos como:",["Funcional","Não funcional","Ambos funcionais","Ambos não funcionais","Nenhum pode ser testado"],0,"Agendar consultas descreve uma ação do sistema; tempo de carregamento é uma característica de desempenho."],
["2","O requisito 'permitir que o funcionário cadastre novos clientes' não informa campos obrigatórios nem quando o cadastro termina. O que fazer?",["Solicitar esclarecimentos e definir condições verificáveis","Deixar o desenvolvedor escolher","Testar qualquer dado","Considerar não funcional","Remover o requisito"],0,"Um requisito precisa permitir uma verificação objetiva."],
["3","Um CPF já existente é cadastrado novamente, contrariando uma regra definida. Qual interpretação?",["Comportamento correto","Descartar o teste","Problema de desempenho","Há indício de defeito","Problema somente de interface"],3,"O comportamento contradiz uma regra definida no requisito."],
["4","Quais primeiros casos de teste são mais adequados para o login?",["Somente válidos","Somente inválidos","Somente campos vazios","Somente cadastrados","Válidos, senha inválida, usuário inválido e campos vazios"],4,"O conjunto cobre situações válidas e inválidas."],
["5","Consultar notas e suportar 3.000 usuários simultâneos são, respectivamente:",["Não funcional / funcional","Funcional / não funcional","Ambos funcionais","Ambos não funcionais","Nenhum pode ser testado"],1,"Consultar notas é uma funcionalidade; capacidade simultânea é uma característica de desempenho."],
["6","Para verificar produtos no endpoint GET /api/produtos, qual configuração?",["POST com produtos no Body","GET conforme o endpoint","POST com endpoint no Body","GET obrigatoriamente com JSON no Body","POST no Headers"],1,"O endpoint informado usa GET para a consulta."],
["7","A API POST /api/clientes espera JSON, mas o tester envia formato diferente. O que verificar?",["Mudar para GET","Remover Body","Verificar Body e estrutura no formato esperado","Colocar JSON no nome","Trocar POST"],2,"O Body deve estar configurado e estruturado conforme a documentação."],
["8","POST retorna 400 porque o campo email é obrigatório e não foi enviado. O que fazer primeiro?",["Verificar a ausência do campo obrigatório","Trocar POST por GET","Excluir endpoint","Considerar servidor indisponível","Reinstalar Postman"],0,"Primeiro deve-se verificar se o próprio teste está correto."],
["9","GET /api/produtos/10 retorna outro produto. Melhor atitude?",["Aprovar","Alterar o código até funcionar","Excluir requisição","Comparar esperado x obtido e registrar evidências","Trocar GET por POST"],3,"A resposta deve ser comparada com o comportamento esperado e a inconsistência documentada."],
["10","Livro indisponível pode ser emprestado, contrariando o requisito. Interpretação?",["Aprovado","Analisar contra o requisito; pode ser defeito","Problema necessariamente no usuário","Teste inválido","Somente não funcional"],1,"O comportamento contradiz uma regra funcional e deve ser investigado."],
["11","Compra concluída, mas o número do pedido não aparece. O que fazer?",["Aprovar","Repetir indefinidamente","Alterar requisito","Registrar evidência e comparar com critério de aceite","Testar somente banco"],3,"O resultado obtido não atende ao resultado esperado."],
["12","Nome e preço são obrigatórios, mas cadastro com preço vazio é concluído. Conclusão?",["Teste inválido","Pode indicar defeito","Somente desempenho","Aprovado","Necessariamente banco"],1,"O sistema permitiu uma situação proibida pelo requisito."],
["13","Para reproduzir um problema posteriormente, qual prática ajuda?",["Registrar endpoint, método, dados, resposta e evidências","Não guardar informações","Alterar dados sem registrar","Só captura da tela inicial","Só nome da API"],0,"Essas informações permitem compreender e reproduzir o cenário."],
["14","Pedidos aparecem, mas alguns valores diferem dos armazenados. O tester deve:",["Aprovar","Ignorar valores","Comparar esperado e investigar divergência","Alterar banco","Testar só velocidade"],2,"A divergência entre dados armazenados e exibidos precisa ser investigada."],
["15","Para tornar 'acompanhar o status do pedido' testável, o que esclarecer?",["Framework","Computador","Desenvolvedores","Quais status aparecem e em quais condições","Editor de código"],3,"É necessário saber quais estados são esperados e quando cada um deve aparecer."]
];

let answered=0,score=0;
function renderQuiz(){
 const q=document.getElementById("quiz"); q.innerHTML="";
 questions.forEach((x,i)=>{
  const el=document.createElement("div"); el.className="question";
  el.innerHTML=`<b>Questão ${x[0]}</b><p>${x[1]}</p><div class="options">${x[2].map((o,j)=>`<div class="option" data-i="${i}" data-j="${j}">${String.fromCharCode(65+j)}) ${o}</div>`).join("")}</div><div class="explain" id="e${i}">💡 ${x[4]}</div>`;
  q.appendChild(el);
 });
 document.querySelectorAll(".option").forEach(o=>o.onclick=choose);
}
function choose(e){
 const o=e.currentTarget, i=+o.dataset.i,j=+o.dataset.j, box=o.parentElement;
 if(box.dataset.done)return; box.dataset.done="1"; answered++;
 const correct=questions[i][3];
 box.querySelectorAll(".option")[correct].classList.add("correct");
 if(j!==correct){o.classList.add("wrong")}else score++;
 document.getElementById("e"+i).classList.add("show");
 document.getElementById("bar").style.width=(answered/questions.length*100)+"%";
 if(answered===questions.length){
  const p=Math.round(score/questions.length*100);
  const r=document.getElementById("result");r.style.display="block";
  r.innerHTML=`<b>Resultado: ${score}/${questions.length} (${p}%)</b><br>${p>=70?"Boa! Continue revisando os pontos em que errou.":"Revise o Resumão e tente novamente."}`;
 }
}
function resetQuiz(){answered=0;score=0;document.getElementById("result").style.display="none";document.getElementById("bar").style.width="0";renderQuiz();}

const disc=[
["16","Transforme a necessidade 'o paciente deverá conseguir marcar consultas e o sistema precisa funcionar rapidamente' em um requisito funcional e um não funcional.","Modelo enviado: funcional — o sistema deverá permitir que o paciente consiga marcar consultas/agendamentos. Não funcional — a confirmação do agendamento deve ser processada em até 3 segundos."],
["17","Explique como testar GET /api/produtos e POST /api/produtos no Postman.","Modelo enviado: GET sem Body e verificar status 200 OK e lista correta. POST com JSON dos dados do produto e verificar status e se o produto foi salvo com ID."],
["18","Elabore quatro casos de teste para o cadastro que exige nome, e-mail e senha.","Modelo enviado: 1) todos preenchidos e cadastro aprovado; 2) nome vazio e cadastro bloqueado; 3) e-mail vazio e cadastro bloqueado; 4) senha vazia e cadastro bloqueado."],
["19","Antes de registrar um defeito em um POST de cadastro de cliente, cite pelo menos quatro verificações.","Modelo enviado: conferir POST; endpoint/ambiente; campos obrigatórios no Body; estrutura e tipos do JSON; código e mensagem de resposta."],
["20","No sistema bancário, o usuário pode consultar saldo, mas somente autenticado. Identifique os requisitos e proponha critérios de aceite.","Resposta enviada no simulado: apenas 'Requisito funcional: Consulta de saldo pelo usuário'. <b>Para estudo, falta completar os critérios de aceite:</b> usuário autenticado deve conseguir consultar o saldo; usuário não autenticado deve ter o acesso negado. Esses critérios tornam a regra verificável."]
];
document.getElementById("disc").innerHTML=disc.map(x=>`<div class="question"><b>Questão ${x[0]}</b><p>${x[1]}</p><textarea placeholder="Tente responder aqui antes de revelar..."></textarea><p><button class="btn" onclick="this.nextElementSibling.classList.toggle('show')">👁 Ver resposta</button></p><div class="callout challenge-answer">${x[2]}</div></div>`).join("");

const cards=[
["Requisito funcional","O que o sistema deve fazer."],["Requisito não funcional","Característica ou restrição, como desempenho."],["Critério de aceite","Condição verificável para aceitar uma funcionalidade."],["Caso de teste","Cenário usado para verificar um comportamento."],["GET","Consulta/obtenção de informações."],["POST","Envio de dados; no simulado, usado para criar registros."],["Endpoint","Endereço da API que será acessado."],["Body","Local onde os dados da requisição podem ser enviados."],["JSON","Formato esperado para os dados quando a API assim determina."],["400 Bad Request","Resposta de requisição inválida; deve ser analisada junto com a causa."],["Defeito","Comportamento que contradiz o resultado/requisito esperado."],["Evidência","Informação que ajuda a comprovar e reproduzir o problema."],["Postman","Ferramenta usada para executar e analisar requisições de API."],["Resultado esperado","Aquilo que deveria acontecer segundo o requisito/critério."],["Resultado obtido","Aquilo que realmente aconteceu no teste."],["Teste negativo","Verificação usando uma condição inválida ou não permitida."]
];
const cardsEl = document.getElementById("cards");
cardsEl.innerHTML = cards.map((c, i) => `<div class="card flash" data-card="${i}"><div class="front"><span class="card-label">TERMOS</span><b>${c[0]}</b><small>↻ Clique para virar</small></div><div class="back"><span class="card-label">RESPOSTA</span><b>${c[1]}</b><small>↻ Clique para voltar</small></div></div>`).join("");
cardsEl.querySelectorAll(".flash").forEach(card => {
  card.addEventListener("click", () => card.classList.toggle("flipped"));
});

function show(id){
 ["resumo","simulado","discursivas","flashcards"].forEach(x=>document.getElementById(x).style.display=x===id?"block":"none");
 window.scrollTo({top:0,behavior:"smooth"});
}
renderQuiz();
