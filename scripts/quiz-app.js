(function () {
  'use strict';

  const POOL = [
    {
      id: 1,
      enunciado: "Na oração 'A população assistiu ao debate com atenção', o verbo assistir é classificado como:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. O verbo 'assistir' no sentido de 'ver/presenciar' exige a preposição 'a'." },
        { id: 'b', texto: 'Verbo Transitivo Indireto (VTI)', correta: true, explicacao: "Correto. O verbo 'assistir' (ver/presenciar) exige a preposição 'a' (ao debate)." },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. Quem assiste (vê), assiste A algo.' },
        { id: 'd', texto: 'Verbo Transitivo Direto e Indireto (VTDI)', correta: false, explicacao: 'Incorreto. Não há um objeto direto na oração.' }
      ]
    },
    {
      id: 2,
      enunciado: "Analise a frase: 'O professor entregou as provas aos alunos'. A classificação correta do verbo entregar é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. O verbo entregar pede complemento.' },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. Falta considerar 'aos alunos', que é o objeto indireto." },
        { id: 'c', texto: 'Verbo Transitivo Direto e Indireto (VTDI)', correta: true, explicacao: 'Correto. Entrega-se algo (as provas — OD) a alguém (aos alunos — OI).' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Entregar indica ação, não estado.' }
      ]
    },
    {
      id: 3,
      enunciado: "Em 'As crianças dormem tranquilamente', o verbo dormir classifica-se como:",
      alternativas: [
        { id: 'a', texto: 'Verbo Intransitivo (VI)', correta: true, explicacao: "Correto. A ação de dormir tem sentido completo ('tranquilamente' é adjunto adverbial de modo)." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: 'Incorreto. Não há objeto recebendo a ação diretamente.' },
        { id: 'c', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Dormir é ação, não estado.' },
        { id: 'd', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há objeto com preposição.' }
      ]
    },
    {
      id: 4,
      enunciado: "Na frase 'O céu continua nublado', o verbo continuar funciona como:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. 'Nublado' não é objeto, é característica do sujeito." },
        { id: 'b', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. Precisa de predicativo para ter sentido na frase.' },
        { id: 'c', texto: 'Verbo de Ligação (VL)', correta: true, explicacao: "Correto. 'Continuar' liga o sujeito (O céu) a um estado (nublado)." },
        { id: 'd', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há objeto indireto.' }
      ]
    },
    {
      id: 5,
      enunciado: "Identifique a classificação do verbo na oração: 'Nós compramos um carro novo.'",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto (VTD)', correta: true, explicacao: "Correto. Quem compra, compra algo ('um carro novo' — OD sem preposição obrigatória)." },
        { id: 'b', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há preposição ligando o verbo ao complemento.' },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. A frase ficaria incompleta sem o complemento.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Comprar é ação.' }
      ]
    },
    {
      id: 6,
      enunciado: "Em 'Ele aspirava ao cargo de gerente', o verbo aspirar é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. No sentido de desejar/almejar, 'aspirar' é VTI." },
        { id: 'b', texto: 'Verbo Transitivo Indireto (VTI)', correta: true, explicacao: "Correto. Aspirar no sentido de almejar exige a preposição 'a'." },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. Pede complemento (ao cargo).' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Indica ação de desejar.' }
      ]
    },
    {
      id: 7,
      enunciado: "Em 'Maria deu flores à mãe', o verbo 'deu' é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto e Indireto (VTDI)', correta: true, explicacao: "Correto. 'Flores' é OD e 'à mãe' é OI (com preposição)." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. Ignora o complemento indireto 'à mãe'." },
        { id: 'c', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: "Incorreto. Há também objeto direto ('flores')." },
        { id: 'd', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. O verbo exige dois complementos.' }
      ]
    },
    {
      id: 8,
      enunciado: "Na frase 'João leu o jornal ontem', o verbo ler é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto (VTD)', correta: true, explicacao: "Correto. 'O jornal' responde a 'leu o quê?' sem preposição." },
        { id: 'b', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: "Incorreto. Sem 'o jornal', a frase ficaria incompleta." },
        { id: 'c', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. O complemento não vem introduzido por preposição.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Ler expressa ação, não liga sujeito a predicativo.' }
      ]
    },
    {
      id: 9,
      enunciado: "Em 'Pedro gosta de chocolate', o verbo gostar classifica-se como:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Indireto (VTI)', correta: true, explicacao: "Correto. 'Gostar' exige preposição 'de' ('de chocolate')." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. O complemento vem com preposição 'de'." },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. O verbo precisa de complemento para fazer sentido.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Gostar indica sentimento mediante complemento, não ligação.' }
      ]
    },
    {
      id: 10,
      enunciado: "Na oração 'A menina sorriu alegremente', o verbo sorrir é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Intransitivo (VI)', correta: true, explicacao: "Correto. 'Alegremente' é adjunto adverbial; o verbo tem sentido completo." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: 'Incorreto. Não há objeto direto na oração.' },
        { id: 'c', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Sorrir é ação, não estado ou característica.' },
        { id: 'd', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há complemento preposicionado.' }
      ]
    },
    {
      id: 11,
      enunciado: "Em 'Ana é professora dedicada', o verbo 'é' funciona como:",
      alternativas: [
        { id: 'a', texto: 'Verbo de Ligação (VL)', correta: true, explicacao: "Correto. 'É' liga o sujeito (Ana) ao predicativo (professora dedicada)." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. 'Professora dedicada' não é objeto, é predicativo do sujeito." },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. O verbo de ligação exige predicativo para completar o sentido.' },
        { id: 'd', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há objeto indireto.' }
      ]
    },
    {
      id: 12,
      enunciado: "Em 'Ela obedeceu aos pais imediatamente', o verbo obedecer é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Indireto (VTI)', correta: true, explicacao: "Correto. 'Obedecer' exige complemento com preposição ('aos pais')." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. O complemento vem precedido de preposição 'a'." },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. A frase depende do complemento para fazer sentido.' },
        { id: 'd', texto: 'Verbo Transitivo Direto e Indireto (VTDI)', correta: false, explicacao: 'Incorreto. Há apenas um complemento (objeto indireto).' }
      ]
    },
    {
      id: 13,
      enunciado: "Na frase 'Nós vimos o filme no cinema', o verbo ver é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto (VTD)', correta: true, explicacao: "Correto. 'O filme' é objeto direto (vimos o quê?)." },
        { id: 'b', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: "Incorreto. 'No cinema' é adjunto adverbial, não complemento verbal." },
        { id: 'c', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. O complemento verbal não exige preposição.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Ver expressa ação de percepção.' }
      ]
    },
    {
      id: 14,
      enunciado: "Em 'O vento soprou forte durante a noite', o verbo soprar é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Intransitivo (VI)', correta: true, explicacao: "Correto. 'Forte' e 'durante a noite' são adjuntos; o verbo basta sozinho." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: 'Incorreto. Não há objeto direto.' },
        { id: 'c', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há complemento preposicionado.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Soprar indica ação do vento.' }
      ]
    },
    {
      id: 15,
      enunciado: "Na oração 'Ele parecia cansado após a viagem', o verbo parecer é:",
      alternativas: [
        { id: 'a', texto: 'Verbo de Ligação (VL)', correta: true, explicacao: "Correto. 'Parecer' liga o sujeito a 'cansado' (predicativo)." },
        { id: 'b', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. Depende do predicativo para completar o sentido.' },
        { id: 'c', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. 'Cansado' não recebe ação do verbo." },
        { id: 'd', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há objeto indireto.' }
      ]
    },
    {
      id: 16,
      enunciado: "Em 'Enviei uma carta ao meu amigo', o verbo enviar é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Direto e Indireto (VTDI)', correta: true, explicacao: "Correto. 'Uma carta' (OD) e 'ao meu amigo' (OI)." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. Ignora o complemento indireto 'ao meu amigo'." },
        { id: 'c', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: "Incorreto. Há também objeto direto ('uma carta')." },
        { id: 'd', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. O verbo exige complementos.' }
      ]
    },
    {
      id: 17,
      enunciado: "Na frase 'Falta água no reservatório', o verbo faltar é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Transitivo Indireto (VTI)', correta: true, explicacao: "Correto. 'Faltar' exige complemento com preposição implícita ('de água' / falta-lhe)." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. 'Água' funciona como sujeito; o verbo é impessoal e pede OI." },
        { id: 'c', texto: 'Verbo Intransitivo (VI)', correta: false, explicacao: 'Incorreto. Na construção impessoal, exige complemento indireto.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Faltar indica ausência, não ligação.' }
      ]
    },
    {
      id: 18,
      enunciado: "Em 'Os alunos estudaram muito para a prova', o verbo estudar é:",
      alternativas: [
        { id: 'a', texto: 'Verbo Intransitivo (VI)', correta: true, explicacao: "Correto. 'Muito' e 'para a prova' são adjuntos; o verbo tem sentido completo." },
        { id: 'b', texto: 'Verbo Transitivo Direto (VTD)', correta: false, explicacao: "Incorreto. 'Muito' não é objeto direto, é advérbio de intensidade." },
        { id: 'c', texto: 'Verbo Transitivo Indireto (VTI)', correta: false, explicacao: 'Incorreto. Não há complemento preposicionado exigido pelo verbo.' },
        { id: 'd', texto: 'Verbo de Ligação (VL)', correta: false, explicacao: 'Incorreto. Estudar é ação.' }
      ]
    }
  ];

  const GABARITO_QUADRO = [
    {
      id: 1,
      frase: 'Comprei o livro ontem à tarde.',
      verbo: 'comprei',
      tipo: 'VTD',
      complementos: [{ rotulo: 'OD', texto: 'o livro' }]
    },
    {
      id: 2,
      frase: 'Entreguei o dinheiro à funcionária.',
      verbo: 'entreguei',
      tipo: 'VTDI',
      complementos: [
        { rotulo: 'OD', texto: 'o dinheiro' },
        { rotulo: 'OI', texto: 'à funcionária' }
      ]
    },
    {
      id: 3,
      frase: 'Meu irmão gosta de frutos do mar.',
      verbo: 'gosta',
      tipo: 'VTI',
      complementos: [{ rotulo: 'OI', texto: 'de frutos do mar' }]
    },
    {
      id: 4,
      frase: 'Nós saímos mais cedo.',
      verbo: 'saímos',
      tipo: 'VI',
      complementos: []
    },
    {
      id: 5,
      frase: 'Depois de tudo, virou um santo na cidade.',
      verbo: 'virou',
      tipo: 'VL',
      complementos: [{ rotulo: 'PS', texto: 'um santo' }]
    },
    {
      id: 6,
      frase: 'Praticamos esportes na mesma academia.',
      verbo: 'praticamos',
      tipo: 'VTD',
      complementos: [{ rotulo: 'OD', texto: 'esportes' }]
    },
    {
      id: 7,
      frase: 'Mandei o e-mail para você ontem.',
      verbo: 'mandei',
      tipo: 'VTDI',
      complementos: [
        { rotulo: 'OD', texto: 'o e-mail' },
        { rotulo: 'OI', texto: 'para você' }
      ]
    },
    {
      id: 8,
      frase: 'Eu continuo atento ao trabalho.',
      verbo: 'continuo',
      tipo: 'VL',
      complementos: [{ rotulo: 'PS', texto: 'atento' }]
    },
    {
      id: 9,
      frase: 'Ele dormiu muito essa noite.',
      verbo: 'dormiu',
      tipo: 'VI',
      complementos: []
    },
    {
      id: 10,
      frase: 'Não devemos depender de nossos pais.',
      verbo: 'depender',
      tipo: 'VTI',
      complementos: [{ rotulo: 'OI', texto: 'de nossos pais' }]
    }
  ];

  const QUANTIDADE_QUESTOES = 5;

  const estado = {
    questoesAtuais: [],
    alternativasEmbaralhadas: [],
    respostas: {},
    fase: 'quiz',
    pontuacao: 0,
    acertouTudo: false,
    idsAnteriores: null
  };

  function embaralhar(array) {
    const copia = array.slice();
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function mesmoConjunto(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    const sa = a.slice().sort().join(',');
    const sb = b.slice().sort().join(',');
    return sa === sb;
  }

  function sortearQuestoes(pool, quantidade, idsEvitar) {
    let tentativas = 0;
    while (tentativas < 50) {
      const selecionadas = embaralhar(pool).slice(0, quantidade);
      const ids = selecionadas.map(function (q) { return q.id; });
      if (!idsEvitar || !mesmoConjunto(ids, idsEvitar) || pool.length <= quantidade) {
        return selecionadas;
      }
      tentativas++;
    }
    return embaralhar(pool).slice(0, quantidade);
  }

  function limparContainer(el) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  function criarElemento(tag, classes, texto) {
    const el = document.createElement(tag);
    if (classes) {
      classes.split(/\s+/).filter(Boolean).forEach(function (c) { el.classList.add(c); });
    }
    if (texto != null) el.textContent = texto;
    return el;
  }

  function criarIcone(nome, classesExtra) {
    const span = criarElemento('span', 'material-symbols-outlined ' + (classesExtra || ''));
    span.textContent = nome;
    span.setAttribute('data-icon', nome);
    return span;
  }

  function letraAlternativa(indice) {
    return String.fromCharCode(97 + indice);
  }

  function prepararAlternativas(questao) {
    return embaralhar(questao.alternativas).map(function (alt, i) {
      return Object.assign({}, alt, { letra: letraAlternativa(i) });
    });
  }

  function registrarRespostas() {
    if (Object.keys(estado.respostas).length < estado.questoesAtuais.length) {
      alert('Por favor, responda todas as questões antes de enviar.');
      return false;
    }
    return true;
  }

  function calcularPontuacao() {
    let pontos = 0;
    estado.questoesAtuais.forEach(function (_, indice) {
      const altId = estado.respostas[indice];
      const alts = estado.alternativasEmbaralhadas[indice];
      const escolhida = alts.find(function (a) { return a.id === altId; });
      if (escolhida && escolhida.correta) pontos++;
    });
    return pontos;
  }

  function corrigirEExibirFeedback() {
    if (!registrarRespostas()) return;
    estado.pontuacao = calcularPontuacao();
    estado.acertouTudo = estado.pontuacao === estado.questoesAtuais.length;
    estado.fase = 'resultado';
    renderizarQuiz();
  }

  function gerarNovaTentativa() {
    const idsAnteriores = estado.questoesAtuais.map(function (q) { return q.id; });
    estado.respostas = {};
    estado.fase = 'quiz';
    estado.pontuacao = 0;
    estado.acertouTudo = false;
    estado.questoesAtuais = sortearQuestoes(POOL, QUANTIDADE_QUESTOES, idsAnteriores);
    estado.alternativasEmbaralhadas = estado.questoesAtuais.map(prepararAlternativas);
    renderizarQuiz();
  }

  function selecionarAlternativa(indiceQuestao, altId) {
    if (estado.fase !== 'quiz') return;
    estado.respostas[indiceQuestao] = altId;
    renderizarQuiz();
  }

  function criarAlternativa(indiceQuestao, alt, selecionada, modo) {
    const div = criarElemento('div', 'quiz-option p-4 rounded-lg border flex items-start gap-4');
    if (modo === 'quiz') {
      div.classList.add(selecionada ? 'selected' : 'border-outline-variant');
      div.setAttribute('role', 'button');
      div.setAttribute('tabindex', '0');
      div.addEventListener('click', function () { selecionarAlternativa(indiceQuestao, alt.id); });
      div.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selecionarAlternativa(indiceQuestao, alt.id);
        }
      });
    } else {
      div.classList.add('disabled');
      if (modo === 'correta') div.classList.add('correct');
      else if (modo === 'incorreta') div.classList.add('incorrect');
      else if (modo === 'gabarito') div.classList.add('correct', 'border-dashed');
      else div.classList.add('border-outline-variant', 'opacity-50');
    }

    const indicador = criarElemento('div', 'w-6 h-6 rounded-full border-2 shrink-0 mt-0.5');
    if (selecionada || modo === 'correta' || modo === 'incorreta' || modo === 'gabarito') {
      indicador.classList.add(modo === 'quiz' && selecionada ? 'border-primary' : 'border-current', 'flex', 'items-center', 'justify-center');
      const ponto = criarElemento('div', 'w-3 h-3 rounded-full');
      ponto.classList.add(modo === 'quiz' && selecionada ? 'bg-primary' : 'bg-current');
      indicador.appendChild(ponto);
    } else {
      indicador.classList.add('border-outline-variant');
    }

    const conteudo = criarElemento('div');
    const rotulo = criarElemento('span', 'font-label-md text-label-md mr-2', alt.letra.toUpperCase() + '.');
    const texto = criarElemento('span', 'font-body-md text-body-md text-on-surface', alt.texto);
    conteudo.appendChild(rotulo);
    conteudo.appendChild(texto);

    div.appendChild(indicador);
    div.appendChild(conteudo);
    return div;
  }

  function renderizarBarraProgresso(container) {
    const respondidas = Object.keys(estado.respostas).length;
    const total = estado.questoesAtuais.length;
    const pct = total ? (respondidas / total) * 100 : 0;

    const topo = criarElemento('div', 'mb-8');
    const linha = criarElemento('div', 'flex justify-between items-center mb-2');
    linha.appendChild(criarElemento('h2', 'font-headline-md text-headline-md text-on-surface', 'Quiz Prático'));
    linha.appendChild(criarElemento('span', 'font-label-sm text-label-sm text-on-surface-variant', respondidas + '/' + total + ' respondidas'));
    topo.appendChild(linha);

    const trilha = criarElemento('div', 'w-full bg-surface-variant rounded-full h-2');
    const fill = criarElemento('div', 'bg-primary h-2 rounded-full transition-all duration-300');
    fill.style.width = pct + '%';
    trilha.appendChild(fill);
    topo.appendChild(trilha);
    container.appendChild(topo);
  }

  function renderizarFormularioQuiz(container) {
    renderizarBarraProgresso(container);
    const lista = criarElemento('div', 'space-y-12');

    estado.questoesAtuais.forEach(function (questao, indice) {
      const bloco = criarElemento('div', 'space-y-4');
      const titulo = criarElemento('h3', 'font-body-lg text-body-lg text-on-surface font-semibold');
      const num = criarElemento('span', 'text-primary mr-2', (indice + 1) + '.');
      titulo.appendChild(num);
      titulo.appendChild(document.createTextNode(questao.enunciado));
      bloco.appendChild(titulo);

      const opcoes = criarElemento('div', 'space-y-2 pl-6');
      const alts = estado.alternativasEmbaralhadas[indice];
      alts.forEach(function (alt) {
        opcoes.appendChild(criarAlternativa(indice, alt, estado.respostas[indice] === alt.id, 'quiz'));
      });
      bloco.appendChild(opcoes);
      lista.appendChild(bloco);
    });

    const rodape = criarElemento('div', 'pt-8 flex justify-end border-t border-outline-variant');
    const btn = criarElemento('button', 'bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-on-primary-fixed-variant transition-colors flex items-center gap-2');
    btn.type = 'button';
    btn.appendChild(document.createTextNode('Enviar Respostas'));
    btn.appendChild(criarIcone('send'));
    const incompleto = Object.keys(estado.respostas).length < estado.questoesAtuais.length;
    if (incompleto) {
      btn.classList.add('opacity-50', 'cursor-not-allowed');
      btn.disabled = true;
    } else {
      btn.addEventListener('click', corrigirEExibirFeedback);
    }
    rodape.appendChild(btn);
    lista.appendChild(rodape);
    container.appendChild(lista);
  }

  function classeCorTipo(tipo) {
    const mapa = {
      VTD: 'text-primary',
      VTI: 'text-secondary',
      VTDI: 'text-tertiary',
      VI: 'text-on-surface',
      VL: 'text-primary'
    };
    return mapa[tipo] || 'text-on-surface';
  }

  function renderizarGabaritoQuadro(container) {
    const secao = criarElemento('div', 'space-y-6');
    secao.appendChild(criarElemento(
      'h3',
      'font-headline-md text-headline-md text-on-surface border-b border-outline-variant pb-2',
      'Classifique os verbos (VTD, VTI, VTDI, VI ou VL) e os complementos'
    ));

    const lista = criarElemento('div', 'space-y-4');

    GABARITO_QUADRO.forEach(function (item) {
      const card = criarElemento('div', 'bg-surface-container rounded-xl p-4 md:p-6 border border-outline-variant');
      const cabecalho = criarElemento('div', 'flex gap-3 items-start mb-3');
      cabecalho.appendChild(criarElemento('span', 'font-label-md text-label-md text-primary shrink-0', item.id + '.'));
      cabecalho.appendChild(criarElemento('p', 'font-body-lg text-body-lg text-on-surface', item.frase));
      card.appendChild(cabecalho);

      const verboLinha = criarElemento('p', 'font-body-md text-body-md text-on-surface-variant ml-8 mb-2');
      verboLinha.appendChild(criarElemento('strong', '', 'Verbo: '));
      verboLinha.appendChild(criarElemento('span', 'font-semibold text-on-surface underline', item.verbo));
      verboLinha.appendChild(document.createTextNode(' — '));
      const badge = criarElemento('span', 'font-label-md text-label-md font-semibold ' + classeCorTipo(item.tipo), item.tipo);
      verboLinha.appendChild(badge);
      card.appendChild(verboLinha);

      const compLinha = criarElemento('p', 'font-body-md text-body-md text-on-surface-variant ml-8');
      compLinha.appendChild(criarElemento('strong', '', 'Complementos: '));
      if (item.complementos.length === 0) {
        compLinha.appendChild(document.createTextNode('Nenhum (VI)'));
      } else {
        item.complementos.forEach(function (comp, i) {
          if (i > 0) compLinha.appendChild(document.createTextNode('; '));
          compLinha.appendChild(criarElemento('span', 'font-label-md text-label-md', comp.rotulo + ': '));
          compLinha.appendChild(criarElemento('span', 'font-semibold text-on-surface', comp.texto));
        });
      }
      card.appendChild(compLinha);
      lista.appendChild(card);
    });

    secao.appendChild(lista);
    container.appendChild(secao);
  }

  function renderizarCabecalhoResultado(container) {
    const box = criarElemento('div', 'text-center p-8 rounded-xl mb-8');
    if (estado.acertouTudo) {
      box.classList.add('bg-surface-container-low');
      box.appendChild(criarIcone('workspace_premium', 'text-4xl text-secondary mb-4 block'));
      box.appendChild(criarElemento('h2', 'font-headline-lg text-headline-lg text-on-surface mb-2', 'Parabéns! ' + estado.pontuacao + '/' + QUANTIDADE_QUESTOES + ' acertos'));
      box.appendChild(criarElemento('p', 'font-body-md text-body-md text-on-surface-variant', 'Você desbloqueou o gabarito do exercício do quadro.'));
    } else {
      box.classList.add('bg-surface-variant');
      box.appendChild(criarIcone('analytics', 'text-4xl text-primary mb-4 block'));
      box.appendChild(criarElemento('h2', 'font-headline-lg text-headline-lg text-on-surface mb-2', 'Sua pontuação: ' + estado.pontuacao + '/' + QUANTIDADE_QUESTOES));
      box.appendChild(criarElemento('p', 'font-body-md text-body-md text-on-surface-variant', 'Revise as explicações dos erros abaixo e tente novamente.'));
    }
    container.appendChild(box);
  }

  function renderizarGabaritoCompleto(container) {
    renderizarCabecalhoResultado(container);
    renderizarGabaritoQuadro(container);
    container.appendChild(criarBotaoTentarNovamente());
  }

  function renderizarFeedbackErros(container) {
    renderizarCabecalhoResultado(container);
    const lista = criarElemento('div', 'space-y-8');

    estado.questoesAtuais.forEach(function (questao, indice) {
      const altId = estado.respostas[indice];
      const alts = estado.alternativasEmbaralhadas[indice];
      const escolhida = alts.find(function (a) { return a.id === altId; });
      if (!escolhida || escolhida.correta) return;

      const bloco = criarElemento('div', 'space-y-3 p-4 bg-error-container rounded-xl border border-error');
      const titulo = criarElemento('h3', 'font-body-lg text-body-lg text-on-surface font-semibold');
      const iconeWrap = criarElemento('span', 'text-error mr-2');
      iconeWrap.appendChild(criarIcone('cancel', 'align-middle'));
      titulo.appendChild(iconeWrap);
      titulo.appendChild(document.createTextNode(questao.enunciado));
      bloco.appendChild(titulo);

      const errada = criarAlternativa(indice, escolhida, true, 'incorreta');
      bloco.appendChild(errada);

      const explicacao = criarElemento('div', 'explicacao-erro ml-10 p-3 bg-surface-container-lowest rounded border border-outline-variant font-body-md text-on-error-container');
      const strong = criarElemento('strong', '', 'Explicação do erro: ');
      explicacao.appendChild(strong);
      explicacao.appendChild(document.createTextNode(escolhida.explicacao));
      bloco.appendChild(explicacao);

      const correta = alts.find(function (a) { return a.correta; });
      if (correta) {
        const dica = criarElemento('p', 'font-label-md text-label-md text-on-surface-variant ml-10 mt-2');
        dica.textContent = 'Resposta correta: ' + correta.texto;
        bloco.appendChild(dica);
      }

      lista.appendChild(bloco);
    });

    container.appendChild(lista);
    container.appendChild(criarBotaoTentarNovamente());
  }

  function criarBotaoTentarNovamente() {
    const wrap = criarElemento('div', 'pt-8 flex justify-center');
    const btn = criarElemento('button', 'border border-primary text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-primary-fixed transition-colors flex items-center gap-2');
    btn.type = 'button';
    btn.appendChild(document.createTextNode('Tentar novamente'));
    btn.appendChild(criarIcone('refresh'));
    btn.addEventListener('click', gerarNovaTentativa);
    wrap.appendChild(btn);
    return wrap;
  }

  function renderizarQuiz() {
    const container = document.getElementById('quiz-app');
    if (!container) return;
    limparContainer(container);

    if (estado.fase === 'quiz') {
      renderizarFormularioQuiz(container);
    } else if (estado.acertouTudo) {
      renderizarGabaritoCompleto(container);
    } else {
      renderizarFeedbackErros(container);
    }
  }

  function iniciarAplicacao() {
    estado.questoesAtuais = sortearQuestoes(POOL, QUANTIDADE_QUESTOES, null);
    estado.alternativasEmbaralhadas = estado.questoesAtuais.map(prepararAlternativas);
    estado.respostas = {};
    estado.fase = 'quiz';
    renderizarQuiz();
    inicializarNavegacao();
  }

  function inicializarNavegacao() {
    var offsetHeader = 72;
    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || href.charAt(0) !== '#') return;
        var alvo = document.querySelector(href);
        if (!alvo) return;
        e.preventDefault();
        var top = alvo.getBoundingClientRect().top + window.scrollY - offsetHeader;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', iniciarAplicacao);
})();
