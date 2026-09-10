// ============================================================
// ENGINE.JS - Motor de simulados (reutilizável para qualquer matéria)
// ============================================================

window.iniciarMateria = function(materia) {
    console.log('🚀 Iniciando matéria:', materia.nome);

    // ============================================================
    // 1. CONFIGURA HEADER
    // ============================================================
    document.title = `${materia.nome} · Aulão`;
    document.getElementById('tituloMateria').innerHTML = 
        `${materia.emoji} ${materia.nome} <small>${materia.subtitulo}</small>`;
    document.getElementById('subtituloMateria').textContent = 
        `🇧🇷 Explicações em português · Macetes para memorizar`;
    document.getElementById('footerMateria').textContent = materia.descricaoFooter;

    // ============================================================
    // 2. RENDERIZA BOTÕES DOS TÓPICOS
    // ============================================================
    const topicosGrid = document.getElementById('topicosGrid');
    topicosGrid.innerHTML = '';
    
    materia.topicos.forEach(function(topico) {
        const btn = document.createElement('button');
        btn.className = 'btn-materia';
        btn.setAttribute('data-materia', topico.id);
        btn.textContent = `${topico.emoji} ${topico.nome}`;
        topicosGrid.appendChild(btn);
    });

    // ============================================================
    // 3. EXPANDE PERGUNTAS
    // ============================================================
    var todasPerguntas = [];
    
    for (var materiaKey in materia.perguntasBase) {
        materia.perguntasBase[materiaKey].forEach(function(q) {
            todasPerguntas.push({
                p: q.p,
                o: q.o.slice(),
                c: q.c,
                m: materiaKey
            });
        });
    }

    console.log('📚 Perguntas base:', todasPerguntas.length);

    var totalDesejado = materia.config.totalPerguntasExpandidas;
    var baseSize = todasPerguntas.length;
    var attempts = 0;
    var maxAttempts = 10000;

    function gerarVariacao(pergunta) {
        var sujeitos = ['I', 'You', 'He', 'She', 'We', 'They'];
        var novoTexto = pergunta.p;
        for (var i = 0; i < sujeitos.length; i++) {
            if (novoTexto.indexOf(sujeitos[i] + ' ') === 0) {
                var novoIndice = (i + 1) % sujeitos.length;
                novoTexto = novoTexto.replace(sujeitos[i] + ' ', sujeitos[novoIndice] + ' ');
                break;
            }
        }
        if (novoTexto === pergunta.p) {
            if (pergunta.p.indexOf('You ') === 0) novoTexto = pergunta.p.replace('You ', 'I ');
            else if (pergunta.p.indexOf('I ') === 0) novoTexto = pergunta.p.replace('I ', 'You ');
            else if (pergunta.p.indexOf('She ') === 0) novoTexto = pergunta.p.replace('She ', 'He ');
            else if (pergunta.p.indexOf('He ') === 0) novoTexto = pergunta.p.replace('He ', 'She ');
        }
        return { p: novoTexto, o: pergunta.o.slice(), c: pergunta.c, m: pergunta.m };
    }

    while (todasPerguntas.length < totalDesejado && attempts < maxAttempts) {
        attempts++;
        var idx = Math.floor(Math.random() * baseSize);
        var original = todasPerguntas[idx];
        var variacao = gerarVariacao(original);
        var existe = false;
        for (var j = 0; j < todasPerguntas.length; j++) {
            if (todasPerguntas[j].p === variacao.p && todasPerguntas[j].m === variacao.m) {
                existe = true;
                break;
            }
        }
        if (!existe && variacao.p !== original.p) {
            todasPerguntas.push(variacao);
        }
    }

    console.log('✅ Total de perguntas:', todasPerguntas.length);

    // ============================================================
    // 4. INTERFACE DE TÓPICOS
    // ============================================================
    var explicacaoTitulo = document.getElementById('explicacaoTitulo');
    var explicacaoConteudo = document.getElementById('explicacaoConteudo');
    var topicosBtns = document.querySelectorAll('.btn-materia');

    topicosBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var topicoId = this.getAttribute('data-materia');
            topicosBtns.forEach(function(b) { b.classList.remove('ativo'); });
            this.classList.add('ativo');
            
            var topico = materia.topicos.find(function(t) { return t.id === topicoId; });
            if (topico) {
                explicacaoTitulo.textContent = `${topico.emoji} ${topico.nome}`;
                explicacaoConteudo.innerHTML = topico.explicacao;
            }
            document.getElementById('explicacaoBox').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ============================================================
    // 5. SIMULADO
    // ============================================================
    var simuladoContainer = document.getElementById('simuladoContainer');
    var simuladoRender = document.getElementById('simuladoRender');
    var corrigirBtn = document.getElementById('corrigirBtn');
    var pularBtn = document.getElementById('pularNaoRespondidaBtn');
    var contador = document.getElementById('contadorSimulado');
    var perguntasAtuais = [];

    function gerarSimuladoMisturado() {
        var porTopico = {};
        materia.topicos.forEach(function(t) { porTopico[t.id] = []; });

        for (var i = 0; i < todasPerguntas.length; i++) {
            var q = todasPerguntas[i];
            if (porTopico[q.m]) porTopico[q.m].push(q);
        }

        var selecionadas = [];
        var topicosKeys = materia.topicos.map(function(t) { return t.id; });

        for (var j = 0; j < topicosKeys.length; j++) {
            var lista = porTopico[topicosKeys[j]];
            if (lista && lista.length > 0) {
                var shuffled = lista.slice();
                for (var k = shuffled.length - 1; k > 0; k--) {
                    var r = Math.floor(Math.random() * (k + 1));
                    var temp = shuffled[k];
                    shuffled[k] = shuffled[r];
                    shuffled[r] = temp;
                }
                var min = materia.config.minPorMateria;
                var max = materia.config.maxPorMateria;
                var qtd = Math.floor(Math.random() * (max - min + 1)) + min;
                if (qtd > shuffled.length) qtd = shuffled.length;
                for (var l = 0; l < qtd; l++) {
                    selecionadas.push(shuffled[l]);
                }
            }
        }

        var alvo = materia.config.perguntasPorSimulado;
        while (selecionadas.length < alvo) {
            var restantes = [];
            for (var m = 0; m < todasPerguntas.length; m++) {
                var encontrado = false;
                for (var n = 0; n < selecionadas.length; n++) {
                    if (selecionadas[n] === todasPerguntas[m]) { encontrado = true; break; }
                }
                if (!encontrado) restantes.push(todasPerguntas[m]);
            }
            if (restantes.length === 0) break;
            var rand = Math.floor(Math.random() * restantes.length);
            selecionadas.push(restantes[rand]);
        }

        for (var o = selecionadas.length - 1; o > 0; o--) {
            var r2 = Math.floor(Math.random() * (o + 1));
            var temp2 = selecionadas[o];
            selecionadas[o] = selecionadas[r2];
            selecionadas[r2] = temp2;
        }

        return selecionadas.slice(0, alvo);
    }

    function renderizarSimulado(perguntas) {
        perguntasAtuais = perguntas;
        var html = '<div style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">';
        html += '<span style="font-weight:700;font-size:1.1rem;">📌 Simulado · ' + perguntas.length + ' perguntas</span>';
        html += '<span style="font-size:0.8rem;background:#eef3fa;padding:4px 12px;border-radius:20px;">📚 Todas as matérias</span>';
        html += '</div>';

        for (var i = 0; i < perguntas.length; i++) {
            var p = perguntas[i];
            var letras = ['A', 'B', 'C', 'D'];
            var topico = materia.topicos.find(function(t) { return t.id === p.m; });
            var materiaLabel = topico ? topico.nome : p.m;
            
            html += '<div class="pergunta-item" data-idx="' + i + '">';
            html += '<div class="pergunta-texto">' + (i + 1) + '. ' + p.p + 
                    ' <span class="tag-materia">' + materiaLabel + '</span></div>';
            html += '<div class="opcoes" id="opcoes-' + i + '">';
            for (var j = 0; j < p.o.length; j++) {
                html += '<label class="opcao" id="opcao-' + i + '-' + j + '">';
                html += '<input type="radio" name="q' + i + '" value="' + j + '"> ';
                html += letras[j] + '. ' + p.o[j];
                html += '</label>';
            }
            html += '</div></div>';
        }

        simuladoRender.innerHTML = html;
        simuladoContainer.classList.remove('hide');

        var resultadoAntigo = document.querySelector('.resultado-box');
        if (resultadoAntigo) resultadoAntigo.remove();
        var avisoAntigo = document.querySelector('.aviso-faltando');
        if (avisoAntigo) avisoAntigo.remove();

        // Reset botão corrigir
        corrigirBtn.style.display = 'block';
        corrigirBtn.textContent = '🔍 Corrigir Simulado';
        corrigirBtn.style.background = '#28a745';
        corrigirBtn.style.cursor = 'pointer';
        corrigirBtn.disabled = false;

        // Esconde botão pular
        if (pularBtn) {
            pularBtn.style.display = 'none';
            pularBtn.textContent = '⏭️ Ir para questão não respondida';
            pularBtn.style.background = '#ffb347';
            pularBtn.style.color = '#1a2d5a';
            pularBtn.style.borderColor = '#f0a83a';
        }
    }

    // ============================================================
    // CORRIGIR
    // ============================================================
    function corrigirSimulado() {
        var total = perguntasAtuais.length;
        var naoRespondidas = [];

        // Verifica não respondidas
        for (var i = 0; i < total; i++) {
            var selecionado = document.querySelector('input[name="q' + i + '"]:checked');
            if (!selecionado) naoRespondidas.push(i + 1);
        }

        // Se faltam questões, mostra aviso e NÃO corrige
        if (naoRespondidas.length > 0) {
            var avisoAntigo = document.querySelector('.aviso-faltando');
            if (avisoAntigo) avisoAntigo.remove();

            var avisoHtml = '<div class="aviso-faltando">';
            avisoHtml += '⚠️ <strong>Faltam ' + naoRespondidas.length + ' questão(ões):</strong> ';
            avisoHtml += naoRespondidas.join(', ');
            avisoHtml += '<small>Responda todas ou clique em "⏭️ Ir para questão não respondida" abaixo.</small>';
            avisoHtml += '</div>';

            simuladoRender.insertAdjacentHTML('afterbegin', avisoHtml);

            // Mostra botão de pular
            if (pularBtn) {
                pularBtn.style.display = 'block';
                atualizarTextoPular(naoRespondidas.length);
            }

            // Rola para o aviso
            simuladoRender.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        // Corrige normalmente
        var acertos = 0;
        var avisoAntigo = document.querySelector('.aviso-faltando');
        if (avisoAntigo) avisoAntigo.remove();

        for (var i = 0; i < total; i++) {
            var opcoes = document.querySelectorAll('#opcoes-' + i + ' .opcao');
            var selecionado = document.querySelector('input[name="q' + i + '"]:checked');
            var correta = perguntasAtuais[i].c;

            for (var j = 0; j < opcoes.length; j++) {
                opcoes[j].classList.remove('correta', 'errada', 'mostrar-correta');
            }

            if (selecionado) {
                var escolha = parseInt(selecionado.value);
                if (escolha === correta) {
                    opcoes[correta].classList.add('correta');
                    acertos++;
                } else {
                    opcoes[escolha].classList.add('errada');
                    opcoes[correta].classList.add('mostrar-correta');
                }
            }
        }

        var resultadoHtml = '<div class="resultado-box">';
        resultadoHtml += '<div class="nota">' + acertos + '/' + total + '</div>';

        var percentual = (acertos / total) * 100;
        var mensagem = '';
        var classe = '';

        if (percentual >= 90) { mensagem = '🌟 Excelente! Você é um gênio!'; classe = 'muito-bom'; }
        else if (percentual >= 70) { mensagem = '👏 Muito bom! Continue praticando!'; classe = 'bom'; }
        else if (percentual >= 50) { mensagem = '📚 Bom! Revise os tópicos que errou.'; classe = 'regular'; }
        else { mensagem = '💪 Continue estudando! Você vai melhorar!'; classe = 'ruim'; }

        resultadoHtml += '<div class="mensagem ' + classe + '">' + mensagem + '</div>';
        resultadoHtml += '</div>';

        var resultadoAntigo = document.querySelector('.resultado-box');
        if (resultadoAntigo) resultadoAntigo.remove();

        simuladoRender.insertAdjacentHTML('beforeend', resultadoHtml);

        if (pularBtn) pularBtn.style.display = 'none';

        corrigirBtn.textContent = '✅ Já corrigido';
        corrigirBtn.style.background = '#6c757d';
        corrigirBtn.style.cursor = 'default';
        corrigirBtn.disabled = true;
    }

    // ============================================================
    // PULAR PARA NÃO RESPONDIDA
    // ============================================================
    function atualizarTextoPular(restantes) {
        if (pularBtn && restantes > 0) {
            pularBtn.textContent = '⏭️ Ir para não respondida (' + restantes + ' restante' + (restantes > 1 ? 's' : '') + ')';
        }
    }

    function pularParaNaoRespondida() {
        var total = perguntasAtuais.length;
        var primeiraNaoRespondida = -1;
        var restantes = 0;

        for (var i = 0; i < total; i++) {
            var sel = document.querySelector('input[name="q' + i + '"]:checked');
            if (!sel) {
                restantes++;
                if (primeiraNaoRespondida === -1) primeiraNaoRespondida = i;
            }
        }

        if (primeiraNaoRespondida === -1) {
            // Todas respondidas
            if (pularBtn) {
                pularBtn.textContent = '✅ Todas respondidas!';
                pularBtn.style.background = '#28a745';
                pularBtn.style.color = 'white';
                pularBtn.style.borderColor = '#28a745';
            }
            setTimeout(function() {
                if (pularBtn) {
                    pularBtn.textContent = '⏭️ Ir para questão não respondida';
                    pularBtn.style.background = '#ffb347';
                    pularBtn.style.color = '#1a2d5a';
                    pularBtn.style.borderColor = '#f0a83a';
                }
            }, 2000);
            return;
        }

        // Remove destaque de todos
        var todosItens = document.querySelectorAll('.pergunta-item');
        for (var j = 0; j < todosItens.length; j++) {
            todosItens[j].classList.remove('destaque');
        }

        // Destaque na pergunta alvo
        var itemAlvo = todosItens[primeiraNaoRespondida];
        if (itemAlvo) {
            itemAlvo.classList.add('destaque');
            itemAlvo.scrollIntoView({ behavior: 'smooth', block: 'center' });

            setTimeout(function() {
                var primeiroRadio = itemAlvo.querySelector('input[type="radio"]');
                if (primeiroRadio) primeiroRadio.focus();
            }, 400);

            setTimeout(function() {
                itemAlvo.classList.remove('destaque');
            }, 2500);
        }

        // Atualiza o texto do botão
        atualizarTextoPular(restantes);
    }

    // ============================================================
    // EVENTOS
    // ============================================================
    document.getElementById('gerarSimuladoBtn').addEventListener('click', function() {
        var perguntas = gerarSimuladoMisturado();
        renderizarSimulado(perguntas);
        simuladoContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    corrigirBtn.addEventListener('click', function() {
        if (!this.disabled) corrigirSimulado();
    });

    if (pularBtn) {
        pularBtn.addEventListener('click', pularParaNaoRespondida);
    }

    document.getElementById('novoSimuladoBtn').addEventListener('click', function() {
        var perguntas = gerarSimuladoMisturado();
        renderizarSimulado(perguntas);
    });

    // ============================================================
    // INICIALIZAÇÃO
    // ============================================================
    contador.textContent = '🎯 ' + todasPerguntas.length + ' perguntas disponíveis';

    if (materia.topicos.length > 0) {
        var primeiroBtn = document.querySelector('.btn-materia[data-materia="' + materia.topicos[0].id + '"]');
        if (primeiroBtn) {
            primeiroBtn.classList.add('ativo');
            explicacaoTitulo.textContent = `${materia.topicos[0].emoji} ${materia.topicos[0].nome}`;
            explicacaoConteudo.innerHTML = materia.topicos[0].explicacao;
        }
    }

    console.log('✅ Matéria iniciada com sucesso!');
};