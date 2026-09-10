// ============================================================
// DADOS DA MATÉRIA: REDAÇÃO
// 8º ano · 3º Bimestre · Gêneros textuais e ortografia
// ============================================================

window.MATERIA_ATUAL = {
    id: 'redacao',
    nome: 'Redação',
    subtitulo: '8º ano · 3º Bimestre',
    emoji: '✍️',
    descricaoFooter: '🧠 Estude com calma · Foque nas regras de cada gênero',

    topicos: [
        // ============================================================
        // TÓPICO 1: RECEITA
        // ============================================================
        {
            id: 'receita',
            nome: 'Receita',
            emoji: '🍰',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Receita = Ingredientes + Modo de preparo"</strong><br>
                    <span style="font-size:0.9rem;">Texto instrucional culinário</span>
                </div>

                <p><strong>📌 O que é uma receita?</strong></p>
                <p>É um <strong>texto instrucional</strong> que ensina como preparar um alimento. Tem uma estrutura fixa e linguagem clara.</p>

                <p><strong>📌 Estrutura da receita:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Parte</th><th>O que contém</th></tr>
                        <tr><td><strong>Título</strong></td><td>Nome do prato</td></tr>
                        <tr><td><strong>Rendimento</strong></td><td>Quantas porções a receita faz</td></tr>
                        <tr><td><strong>Tempo de preparo</strong></td><td>Quanto tempo leva</td></tr>
                        <tr><td><strong>Ingredientes</strong></td><td>Lista com quantidades</td></tr>
                        <tr><td><strong>Modo de preparo</strong></td><td>Passo a passo numerado</td></tr>
                        <tr><td><strong>Dicas (opcional)</strong></td><td>Sugestões extras</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"T-R-T-I-M"</em><br>
                    <strong>T</strong>ítulo · <strong>R</strong>endimento · <strong>T</strong>empo · <strong>I</strong>ngredientes · <strong>M</strong>odo de preparo
                </div>

                <p><strong>📌 Características da linguagem:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Verbos no imperativo</strong> — "misture", "asse", "bata"</li>
                    <li><strong>Clareza e objetividade</strong> — sem enrolação</li>
                    <li><strong>Ordem cronológica</strong> — passo 1, 2, 3...</li>
                    <li><strong>Unidades de medida</strong> — xícaras, gramas, mL</li>
                </ul>

                <div class="exemplo-box">
                    <div class="en">📘 Exemplo de início de receita:</div>
                    <div class="pt">
                        <strong>Bolo de chocolate</strong><br>
                        <em>Rendimento: 8 porções</em><br>
                        <em>Tempo de preparo: 40 minutos</em><br><br>
                        <strong>Ingredientes:</strong><br>
                        • 2 xícaras de farinha<br>
                        • 1 xícara de açúcar<br>
                        • 3 ovos<br><br>
                        <strong>Modo de preparo:</strong><br>
                        1. Bata os ovos com o açúcar.<br>
                        2. Acrescente a farinha e misture.
                    </div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Esquecer as quantidades.<br>
                    ❌ <em>"Coloque farinha e ovos"</em><br>
                    ✅ <em>"Coloque 2 xícaras de farinha e 3 ovos"</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Estrutura da receita</li>
                    <li>Verbos no imperativo</li>
                    <li>Importância das quantidades</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 2: BULA
        // ============================================================
        {
            id: 'bula',
            nome: 'Bula',
            emoji: '💊',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Bula = Informação + Instrução sobre medicamento"</strong>
                </div>

                <p><strong>📌 O que é uma bula?</strong></p>
                <p>É um <strong>texto instrucional</strong> que acompanha medicamentos, com informações sobre <strong>como usar, efeitos e cuidados</strong>.</p>

                <p><strong>📌 Estrutura da bula:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Parte</th><th>O que contém</th></tr>
                        <tr><td><strong>Identificação</strong></td><td>Nome do remédio, princípio ativo</td></tr>
                        <tr><td><strong>Indicação</strong></td><td>Para que serve</td></tr>
                        <tr><td><strong>Contraindicação</strong></td><td>Quando NÃO deve ser usado</td></tr>
                        <tr><td><strong>Modo de uso</strong></td><td>Como e quanto tomar</td></tr>
                        <tr><td><strong>Posologia</strong></td><td>Dose e frequência</td></tr>
                        <tr><td><strong>Efeitos colaterais</strong></td><td>O que pode acontecer</td></tr>
                        <tr><td><strong>Advertências</strong></td><td>Cuidados e alertas</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"I-I-C-M-P-E-A"</em><br>
                    <strong>I</strong>dentificação · <strong>I</strong>ndicação · <strong>C</strong>ontraindicação · <strong>M</strong>odo de uso · <strong>P</strong>osologia · <strong>E</strong>feitos · <strong>A</strong>dvertências
                </div>

                <p><strong>📌 Características da linguagem:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Linguagem técnica</strong> — termos médicos</li>
                    <li><strong>Clareza</strong> — para o paciente entender</li>
                    <li><strong>Organizada em seções</strong> — com títulos</li>
                    <li><strong>Tom de advertência</strong> — "não use se..."</li>
                </ul>

                <div class="exemplo-box">
                    <div class="en">📘 Exemplo de trecho de bula:</div>
                    <div class="pt">
                        <strong>Paracetamol 500 mg</strong><br><br>
                        <strong>Indicação:</strong> alívio de dores e febre.<br>
                        <strong>Contraindicação:</strong> não use em caso de alergia.<br>
                        <strong>Posologia:</strong> 1 comprimido a cada 6 horas.
                    </div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Confundir bula com receita médica.<br>
                    ❌ <em>Bula é a receita do médico</em><br>
                    ✅ <em>Bula = informação do remédio · Receita = prescrição do médico</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Estrutura da bula</li>
                    <li>Diferença entre bula e receita médica</li>
                    <li>Importância das contraindicações</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 3: REGRAS DO JOGO
        // ============================================================
        {
            id: 'regrasJogo',
            nome: 'Regras do Jogo',
            emoji: '🎲',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Regras do jogo = Como jogar + Como vencer"</strong>
                </div>

                <p><strong>📌 O que são regras de jogo?</strong></p>
                <p>É um <strong>texto instrucional</strong> que explica como jogar, com <strong>objetivo, participantes, materiais e regras</strong>.</p>

                <p><strong>📌 Estrutura das regras do jogo:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Parte</th><th>O que contém</th></tr>
                        <tr><td><strong>Nome do jogo</strong></td><td>Título</td></tr>
                        <tr><td><strong>Objetivo</strong></td><td>Como ganhar</td></tr>
                        <tr><td><strong>Participantes</strong></td><td>Quantos jogadores</td></tr>
                        <tr><td><strong>Materiais</strong></td><td>O que precisa</td></tr>
                        <tr><td><strong>Regras</strong></td><td>O que pode e o que não pode</td></tr>
                        <tr><td><strong>Como jogar</strong></td><td>Passo a passo</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"N-O-P-M-R-C"</em><br>
                    <strong>N</strong>ome · <strong>O</strong>bjetivo · <strong>P</strong>articipantes · <strong>M</strong>ateriais · <strong>R</strong>egras · <strong>C</strong>omo jogar
                </div>

                <p><strong>📌 Características da linguagem:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Verbos no imperativo</strong> — "escolha", "jogue", "avance"</li>
                    <li><strong>Linguagem clara</strong> — sem ambiguidade</li>
                    <li><strong>Organização em tópicos</strong> — fácil de consultar</li>
                    <li><strong>Uso de "pode" e "não pode"</strong> — regras objetivas</li>
                </ul>

                <div class="exemplo-box">
                    <div class="en">📘 Exemplo de início de regras:</div>
                    <div class="pt">
                        <strong>Jogo da Velha</strong><br><br>
                        <strong>Objetivo:</strong> formar uma linha com 3 símbolos iguais.<br>
                        <strong>Participantes:</strong> 2 jogadores.<br>
                        <strong>Materiais:</strong> papel e caneta.<br>
                        <strong>Como jogar:</strong><br>
                        1. Um jogador usa X, o outro usa O.<br>
                        2. Cada um marca uma casa por vez.
                    </div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Esquecer o objetivo do jogo.<br>
                    ❌ <em>Só listar regras sem dizer como ganhar</em><br>
                    ✅ <em>Sempre informar o objetivo no início</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Estrutura das regras</li>
                    <li>Importância do objetivo</li>
                    <li>Linguagem imperativa</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 4: MANUAL DE INSTRUÇÃO
        // ============================================================
        {
            id: 'manualInstrucao',
            nome: 'Manual de Instrução',
            emoji: '📋',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Manual = Como usar um produto"</strong>
                </div>

                <p><strong>📌 O que é um manual de instrução?</strong></p>
                <p>É um <strong>texto instrucional</strong> que ensina como <strong>montar, usar ou cuidar</strong> de um produto (eletrônico, móvel, brinquedo...).</p>

                <p><strong>📌 Estrutura do manual:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Parte</th><th>O que contém</th></tr>
                        <tr><td><strong>Identificação</strong></td><td>Nome e modelo do produto</td></tr>
                        <tr><td><strong>Componentes</strong></td><td>Lista de peças</td></tr>
                        <tr><td><strong>Instruções de montagem</strong></td><td>Passo a passo</td></tr>
                        <tr><td><strong>Modo de uso</strong></td><td>Como usar</td></tr>
                        <tr><td><strong>Cuidados</strong></td><td>Manutenção e segurança</td></tr>
                        <tr><td><strong>Solução de problemas</strong></td><td>O que fazer se der errado</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"I-C-I-M-C-S"</em><br>
                    <strong>I</strong>dentificação · <strong>C</strong>omponentes · <strong>I</strong>nstruções · <strong>M</strong>odo de uso · <strong>C</strong>uidados · <strong>S</strong>olução de problemas
                </div>

                <p><strong>📌 Características da linguagem:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Verbos no imperativo</strong> — "conecte", "aperte", "instale"</li>
                    <li><strong>Linguagem técnica</strong> — termos específicos</li>
                    <li><strong>Uso de imagens/diagramas</strong> — para facilitar</li>
                    <li><strong>Numeração dos passos</strong> — ordem clara</li>
                </ul>

                <div class="exemplo-box">
                    <div class="en">📘 Exemplo de trecho de manual:</div>
                    <div class="pt">
                        <strong>Manual do celular XYZ</strong><br><br>
                        <strong>Componentes:</strong> celular, carregador, cabo USB.<br>
                        <strong>Como ligar:</strong><br>
                        1. Conecte o carregador à tomada.<br>
                        2. Pressione o botão lateral por 3 segundos.<br>
                        <strong>Cuidados:</strong> não molhe o aparelho.
                    </div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Esquecer os cuidados/segurança.<br>
                    ❌ <em>Só explicar como usar</em><br>
                    ✅ <em>Sempre incluir advertências e cuidados</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Estrutura do manual</li>
                    <li>Importância dos cuidados</li>
                    <li>Linguagem imperativa</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 5: ORTOGRAFIA
        // ============================================================
        {
            id: 'ortografia',
            nome: 'Ortografia',
            emoji: '🔤',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Escrever certo é essencial em qualquer texto"</strong>
                </div>

                <p><strong>📌 Principais regras de ortografia:</strong></p>

                <p><strong>1. Uso de X e CH</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Usa X</th><th>Usa CH</th></tr>
                        <tr><td>Depois de ditongo: <em>caixa, beixo</em></td><td>Palavras de origem latina: <em>chave, chefe</em></td></tr>
                        <tr><td>Depois de "en": <em>enxame, enxoval</em></td><td>Depois de "an": <em>ancho, anchova</em></td></tr>
                        <tr><td>Palavras indígenas/africanas: <em>xavante, xingar</em></td><td>Palavras de origem inglesa: <em>chute, cheque</em></td></tr>
                    </table>
                </div>

                <p><strong>2. Uso de S e Z</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Usa S</th><th>Usa Z</th></tr>
                        <tr><td>Depois de ditongo: <em>coisa, causa</em></td><td>Substantivos abstratos: <em>beleza, riqueza</em></td></tr>
                        <tr><td>Adjetivos com "oso": <em>formoso, belo</em></td><td>Verbos com "izar": <em>organizar, realizar</em></td></tr>
                    </table>
                </div>

                <p><strong>3. Uso de G e J</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Usa G</th><th>Usa J</th></tr>
                        <tr><td>Palavras com "gem": <em>viagem, garagem</em></td><td>Palavras de origem indígena/africana: <em>jiló, jibóia</em></td></tr>
                        <tr><td>Palavras com "gio": <em>relógio, colégio</em></td><td>Verbos com "jar": <em>viajar, despejar</em></td></tr>
                    </table>
                </div>

                <p><strong>4. Uso de Ç, SS, SC, SÇ</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Regra</th><th>Exemplos</th></tr>
                        <tr><td><strong>Ç</strong> antes de A, O, U</td><td>caça, poço, açúcar</td></tr>
                        <tr><td><strong>SS</strong> entre vogais</td><td>passo, assunto, missa</td></tr>
                        <tr><td><strong>SC</strong> antes de E, I</td><td>nascer, crescer, descer</td></tr>
                        <tr><td><strong>SÇ</strong> antes de A, O</td><td>desça, cresço</td></tr>
                    </table>
                </div>

                <p><strong>5. Uso de "Mal" e "Mau"</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Palavra</th><th>Significado</th><th>Exemplo</th></tr>
                        <tr><td><strong>Mal</strong></td><td>Oposto de bem</td><td>Ele passou <strong>mal</strong>.</td></tr>
                        <tr><td><strong>Mau</strong></td><td>Oposto de bom</td><td>Ele é um <strong>mau</strong> aluno.</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"MAL = BEM · MAU = BOM"</em>
                </div>

                <p><strong>6. Uso de "Mas" e "Mais"</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Palavra</th><th>Significado</th><th>Exemplo</th></tr>
                        <tr><td><strong>Mas</strong></td><td>Porém, contudo</td><td>Estudei, <strong>mas</strong> não passei.</td></tr>
                        <tr><td><strong>Mais</strong></td><td>Quantidade maior</td><td>Quero <strong>mais</strong> bolo.</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"MAS = PORÉM · MAIS = QUANTIDADE"</em>
                </div>

                <p><strong>7. Uso de "Porque", "Por que", "Por quê", "Porquê"</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Forma</th><th>Uso</th><th>Exemplo</th></tr>
                        <tr><td><strong>Porque</strong></td><td>Resposta/explicação</td><td>Não fui <strong>porque</strong> choveu.</td></tr>
                        <tr><td><strong>Por que</strong></td><td>Pergunta</td><td><strong>Por que</strong> você não foi?</td></tr>
                        <tr><td><strong>Por quê</strong></td><td>Fim de frase</td><td>Você não foi <strong>por quê</strong>?</td></tr>
                        <tr><td><strong>Porquê</strong></td><td>Substantivo</td><td>Não sei o <strong>porquê</strong>.</td></tr>
                    </table>
                </div>

                <div class="exemplo-box">
                    <div class="en">📘 Exemplos práticos:</div>
                    <div class="pt">
                        • <strong>Porque</strong> = junto (resposta)<br>
                        • <strong>Por que</strong> = separado (pergunta)<br>
                        • <strong>Por quê</strong> = separado com acento (fim de frase)<br>
                        • <strong>Porquê</strong> = junto com acento (substantivo)
                    </div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Trocar "mais" por "mas".<br>
                    ❌ <em>Estudei, mais não passei.</em><br>
                    ✅ <em>Estudei, <strong>mas</strong> não passei.</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Uso de X/CH, S/Z, G/J</li>
                    <li>Mal/Mau, Mas/Mais</li>
                    <li>Porque/Por que/Por quê/Porquê</li>
                    <li>Uso de Ç, SS, SC, SÇ</li>
                </ul>
            `
        }
    ],

    // ============================================================
    // PERGUNTAS BASE - ENXUTO (Foco em fixar as REGRAS)
    // Total: ~100 perguntas (20 por tópico)
    // ============================================================
    perguntasBase: {
        receita: [
            { p: 'O que é uma receita?', o: ['Texto instrucional culinário', 'Texto narrativo', 'Texto poético', 'Texto jornalístico'], c: 0 },
            { p: 'Qual é a estrutura de uma receita?', o: ['Título, rendimento, tempo, ingredientes e modo de preparo', 'Introdução, desenvolvimento e conclusão', 'Personagens, tempo e espaço', 'Tese, argumento e conclusão'], c: 0 },
            { p: 'Qual verbo é típico de uma receita?', o: ['Misture', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual verbo é típico de uma receita?', o: ['Asse', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual verbo é típico de uma receita?', o: ['Bata', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'O que é o rendimento de uma receita?', o: ['Quantas porções ela faz', 'Quanto tempo leva', 'Quanto custa', 'Quantas calorias tem'], c: 0 },
            { p: 'O que é o tempo de preparo?', o: ['Quanto tempo leva para fazer', 'Quanto custa', 'Quantas porções', 'Quantas calorias'], c: 0 },
            { p: 'Qual a importância das quantidades na receita?', o: ['Garantir o resultado correto', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'Qual parte da receita vem primeiro?', o: ['Título', 'Ingredientes', 'Modo de preparo', 'Dicas'], c: 0 },
            { p: 'Qual parte da receita vem depois dos ingredientes?', o: ['Modo de preparo', 'Título', 'Rendimento', 'Tempo'], c: 0 },
            { p: 'Qual a linguagem usada na receita?', o: ['Clara e objetiva', 'Poética', 'Subjetiva', 'Ambígua'], c: 0 },
            { p: 'Qual a ordem do modo de preparo?', o: ['Cronológica (passo a passo)', 'Aleatória', 'Alfabética', 'Por importância'], c: 0 },
            { p: 'O que NÃO deve ter em uma receita?', o: ['Ambiguidade', 'Ingredientes', 'Quantidades', 'Modo de preparo'], c: 0 },
            { p: 'Qual unidade de medida é comum em receitas?', o: ['Xícaras', 'Quilômetros', 'Litros de gasolina', 'Metros'], c: 0 },
            { p: 'Qual unidade de medida é comum em receitas?', o: ['Gramas', 'Quilômetros', 'Metros', 'Segundos'], c: 0 },
            { p: 'Qual unidade de medida é comum em receitas?', o: ['mL', 'Km', 'm', 's'], c: 0 },
            { p: 'Qual o tempo verbal predominante na receita?', o: ['Imperativo', 'Pretérito perfeito', 'Futuro do presente', 'Subjuntivo'], c: 0 },
            { p: 'Por que a receita usa verbos no imperativo?', o: ['Para dar instruções diretas', 'Para narrar', 'Para descrever', 'Para argumentar'], c: 0 },
            { p: 'Qual o público-alvo de uma receita?', o: ['Quem vai preparar o prato', 'Crianças apenas', 'Cientistas', 'Políticos'], c: 0 },
            { p: 'O que uma receita bem escrita garante?', o: ['Que o leitor consiga fazer o prato', 'Que o leitor fique confuso', 'Que o leitor desista', 'Que o leitor erre'], c: 0 }
        ],
        bula: [
            { p: 'O que é uma bula?', o: ['Texto instrucional sobre medicamento', 'Texto narrativo', 'Texto poético', 'Texto publicitário'], c: 0 },
            { p: 'Qual é a estrutura de uma bula?', o: ['Identificação, indicação, contraindicação, modo de uso, posologia, efeitos e advertências', 'Introdução, desenvolvimento e conclusão', 'Personagens e cenário', 'Tese e argumento'], c: 0 },
            { p: 'O que é a indicação em uma bula?', o: ['Para que serve o remédio', 'Quem fabrica', 'Quanto custa', 'Onde comprar'], c: 0 },
            { p: 'O que é a contraindicação?', o: ['Quando NÃO deve ser usado', 'Quando usar', 'Quanto tomar', 'Onde comprar'], c: 0 },
            { p: 'O que é a posologia?', o: ['Dose e frequência do medicamento', 'Preço', 'Fabricante', 'Validade'], c: 0 },
            { p: 'O que são efeitos colaterais?', o: ['Reações indesejadas do remédio', 'Benefícios', 'Preço', 'Fabricante'], c: 0 },
            { p: 'O que são advertências?', o: ['Cuidados e alertas', 'Benefícios', 'Preço', 'Fabricante'], c: 0 },
            { p: 'Qual a diferença entre bula e receita médica?', o: ['Bula informa sobre o remédio; receita é a prescrição do médico', 'São iguais', 'Bula é do médico; receita é do remédio', 'Nenhuma'], c: 0 },
            { p: 'Qual a linguagem usada na bula?', o: ['Técnica e clara', 'Poética', 'Subjetiva', 'Ambígua'], c: 0 },
            { p: 'Por que a bula deve ser clara?', o: ['Para o paciente entender', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'O que vem primeiro na bula?', o: ['Identificação do medicamento', 'Efeitos colaterais', 'Advertências', 'Preço'], c: 0 },
            { p: 'O que NÃO deve ter em uma bula?', o: ['Ambiguidade', 'Indicação', 'Contraindicação', 'Posologia'], c: 0 },
            { p: 'Qual a importância da contraindicação?', o: ['Evitar uso indevido e perigoso', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'Qual a importância da posologia?', o: ['Garantir a dose correta', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'Qual o público-alvo da bula?', o: ['Pacientes e profissionais de saúde', 'Crianças apenas', 'Cientistas apenas', 'Políticos'], c: 0 },
            { p: 'O que a bula deve informar sobre o medicamento?', o: ['Como usar, efeitos e cuidados', 'Apenas o preço', 'Apenas o nome', 'Apenas o fabricante'], c: 0 },
            { p: 'O que é o princípio ativo?', o: ['Substância que faz efeito no remédio', 'Corante', 'Açúcar', 'Água'], c: 0 },
            { p: 'Por que é importante ler a bula?', o: ['Para usar o remédio corretamente', 'Apenas curiosidade', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'O que pode acontecer se não ler a bula?', o: ['Uso incorreto e riscos à saúde', 'Nada', 'Melhora', 'Cura garantida'], c: 0 },
            { p: 'Qual a diferença entre bula e manual?', o: ['Bula é de remédio; manual é de produto', 'São iguais', 'Bula é de produto; manual é de remédio', 'Nenhuma'], c: 0 }
        ],
        regrasJogo: [
            { p: 'O que são regras de jogo?', o: ['Texto instrucional sobre como jogar', 'Texto narrativo', 'Texto poético', 'Texto publicitário'], c: 0 },
            { p: 'Qual é a estrutura das regras do jogo?', o: ['Nome, objetivo, participantes, materiais, regras e como jogar', 'Introdução, desenvolvimento e conclusão', 'Personagens e cenário', 'Tese e argumento'], c: 0 },
            { p: 'O que é o objetivo do jogo?', o: ['Como ganhar', 'Quem criou', 'Quanto custa', 'Onde comprar'], c: 0 },
            { p: 'O que são os participantes?', o: ['Quantos jogadores', 'Onde jogar', 'Quando jogar', 'Por que jogar'], c: 0 },
            { p: 'O que são os materiais?', o: ['O que precisa para jogar', 'Quem criou', 'Quanto custa', 'Onde comprar'], c: 0 },
            { p: 'Qual verbo é típico de regras de jogo?', o: ['Escolha', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual verbo é típico de regras de jogo?', o: ['Jogue', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual verbo é típico de regras de jogo?', o: ['Avance', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual a linguagem usada nas regras?', o: ['Clara e objetiva', 'Poética', 'Subjetiva', 'Ambígua'], c: 0 },
            { p: 'O que NÃO deve ter nas regras?', o: ['Ambiguidade', 'Objetivo', 'Participantes', 'Materiais'], c: 0 },
            { p: 'Qual a importância do objetivo no início?', o: ['Orientar o jogador', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'Qual a ordem das regras?', o: ['Lógica e organizada', 'Aleatória', 'Alfabética', 'Por importância'], c: 0 },
            { p: 'O que o "como jogar" deve conter?', o: ['Passo a passo', 'Apenas o nome', 'Apenas o preço', 'Apenas os materiais'], c: 0 },
            { p: 'Por que as regras devem ser claras?', o: ['Para evitar confusão', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'Qual o tempo verbal predominante?', o: ['Imperativo', 'Pretérito perfeito', 'Futuro do presente', 'Subjuntivo'], c: 0 },
            { p: 'Qual o público-alvo das regras?', o: ['Quem vai jogar', 'Crianças apenas', 'Cientistas', 'Políticos'], c: 0 },
            { p: 'O que as regras devem informar?', o: ['O que pode e o que não pode', 'Apenas o nome', 'Apenas o preço', 'Apenas os materiais'], c: 0 },
            { p: 'Qual a diferença entre regras e manual?', o: ['Regras são de jogo; manual é de produto', 'São iguais', 'Regras são de produto; manual é de jogo', 'Nenhuma'], c: 0 },
            { p: 'O que pode acontecer se as regras forem confusas?', o: ['O jogo não funciona', 'Nada', 'Melhora', 'Cura'], c: 0 },
            { p: 'Qual a importância do passo a passo?', o: ['Facilitar o entendimento', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 }
        ],
        manualInstrucao: [
            { p: 'O que é um manual de instrução?', o: ['Texto instrucional sobre como usar um produto', 'Texto narrativo', 'Texto poético', 'Texto publicitário'], c: 0 },
            { p: 'Qual é a estrutura do manual?', o: ['Identificação, componentes, instruções, modo de uso, cuidados e solução de problemas', 'Introdução, desenvolvimento e conclusão', 'Personagens e cenário', 'Tese e argumento'], c: 0 },
            { p: 'O que é a identificação no manual?', o: ['Nome e modelo do produto', 'Preço', 'Fabricante', 'Validade'], c: 0 },
            { p: 'O que são os componentes?', o: ['Lista de peças do produto', 'Preço', 'Fabricante', 'Validade'], c: 0 },
            { p: 'O que são as instruções de montagem?', o: ['Passo a passo para montar', 'Preço', 'Fabricante', 'Validade'], c: 0 },
            { p: 'O que são os cuidados?', o: ['Manutenção e segurança', 'Preço', 'Fabricante', 'Validade'], c: 0 },
            { p: 'O que é a solução de problemas?', o: ['O que fazer se der errado', 'Preço', 'Fabricante', 'Validade'], c: 0 },
            { p: 'Qual verbo é típico de manual?', o: ['Conecte', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual verbo é típico de manual?', o: ['Aperte', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual verbo é típico de manual?', o: ['Instale', 'Era', 'Foi', 'Será'], c: 0 },
            { p: 'Qual a linguagem usada no manual?', o: ['Técnica e clara', 'Poética', 'Subjetiva', 'Ambígua'], c: 0 },
            { p: 'O que NÃO deve ter no manual?', o: ['Ambiguidade', 'Identificação', 'Componentes', 'Instruções'], c: 0 },
            { p: 'Qual a importância dos cuidados no manual?', o: ['Garantir segurança e durabilidade', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 },
            { p: 'Qual a ordem das instruções?', o: ['Cronológica (passo a passo)', 'Aleatória', 'Alfabética', 'Por importância'], c: 0 },
            { p: 'O que o manual deve informar sobre o produto?', o: ['Como usar, montar e cuidar', 'Apenas o preço', 'Apenas o nome', 'Apenas o fabricante'], c: 0 },
            { p: 'Qual o tempo verbal predominante?', o: ['Imperativo', 'Pretérito perfeito', 'Futuro do presente', 'Subjuntivo'], c: 0 },
            { p: 'Qual o público-alvo do manual?', o: ['Quem vai usar o produto', 'Crianças apenas', 'Cientistas', 'Políticos'], c: 0 },
            { p: 'Qual a diferença entre manual e bula?', o: ['Manual é de produto; bula é de remédio', 'São iguais', 'Manual é de remédio; bula é de produto', 'Nenhuma'], c: 0 },
            { p: 'O que pode acontecer se não ler o manual?', o: ['Uso incorreto e danos', 'Nada', 'Melhora', 'Cura'], c: 0 },
            { p: 'Qual a importância das imagens no manual?', o: ['Facilitar o entendimento', 'Apenas estética', 'Nenhuma', 'Deixar bonito'], c: 0 }
        ],
        ortografia: [
            { p: 'Quando usar X em vez de CH?', o: ['Depois de ditongo', 'Depois de vogal', 'No início da palavra', 'No fim da palavra'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Caixa', 'Caicha', 'Caicha', 'Cacha'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Enxame', 'Enchame', 'Enxame', 'Enchame'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Chave', 'Xave', 'Chave', 'Xave'], c: 0 },
            { p: 'Quando usar S em vez de Z?', o: ['Depois de ditongo', 'Em substantivos abstratos', 'Em verbos com izar', 'No início'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Coisa', 'Coiza', 'Coisa', 'Coiza'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Beleza', 'Belesa', 'Beleza', 'Belesa'], c: 0 },
            { p: 'Quando usar G em vez de J?', o: ['Palavras com "gem"', 'Palavras indígenas', 'Verbos com "jar"', 'No início'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Viagem', 'Viajem', 'Viagem', 'Viajem'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Jiló', 'Giló', 'Jiló', 'Giló'], c: 0 },
            { p: 'Quando usar Ç?', o: ['Antes de A, O, U', 'Antes de E, I', 'No início', 'No fim'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Caça', 'Cassa', 'Casa', 'Caza'], c: 0 },
            { p: 'Quando usar SS?', o: ['Entre vogais', 'No início', 'No fim', 'Antes de consoante'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Passo', 'Paso', 'Passo', 'Paso'], c: 0 },
            { p: 'Quando usar SC?', o: ['Antes de E, I', 'Antes de A, O, U', 'No início', 'No fim'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Nascer', 'Nacer', 'Nascer', 'Nacer'], c: 0 },
            { p: 'Quando usar MAL?', o: ['Oposto de bem', 'Oposto de bom', 'Quantidade maior', 'Porém'], c: 0 },
            { p: 'Quando usar MAU?', o: ['Oposto de bom', 'Oposto de bem', 'Quantidade maior', 'Porém'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Ele passou mal.', 'Ele passou mau.', 'Ele passou mais.', 'Ele passou mas.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Ele é um mau aluno.', 'Ele é um mal aluno.', 'Ele é um mais aluno.', 'Ele é um mas aluno.'], c: 0 },
            { p: 'Quando usar MAS?', o: ['Porém, contudo', 'Quantidade maior', 'Oposto de bem', 'Oposto de bom'], c: 0 },
            { p: 'Quando usar MAIS?', o: ['Quantidade maior', 'Porém', 'Oposto de bem', 'Oposto de bom'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Estudei, mas não passei.', 'Estudei, mais não passei.', 'Estudei, mal não passei.', 'Estudei, mau não passei.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Quero mais bolo.', 'Quero mas bolo.', 'Quero mal bolo.', 'Quero mau bolo.'], c: 0 },
            { p: 'Quando usar PORQUE (junto)?', o: ['Resposta/explicação', 'Pergunta', 'Fim de frase', 'Substantivo'], c: 0 },
            { p: 'Quando usar POR QUE (separado)?', o: ['Pergunta', 'Resposta', 'Fim de frase', 'Substantivo'], c: 0 },
            { p: 'Quando usar POR QUÊ (separado com acento)?', o: ['Fim de frase', 'Início de frase', 'Meio de frase', 'Substantivo'], c: 0 },
            { p: 'Quando usar PORQUÊ (junto com acento)?', o: ['Substantivo', 'Pergunta', 'Resposta', 'Fim de frase'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Não fui porque choveu.', 'Não fui por que choveu.', 'Não fui por quê choveu.', 'Não fui porquê choveu.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Por que você não foi?', 'Porque você não foi?', 'Por quê você não foi?', 'Porquê você não foi?'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Você não foi por quê?', 'Você não foi porque?', 'Você não foi por que?', 'Você não foi porquê?'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Não sei o porquê.', 'Não sei o porque.', 'Não sei o por que.', 'Não sei o por quê.'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Exceção', 'Excessão', 'Esceção', 'Exceção'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Pesquisa', 'Pequisa', 'Pesquiza', 'Pequiza'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Privilégio', 'Previlegio', 'Privilejio', 'Previlejio'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Beneficiente', 'Beneficente', 'Benificiente', 'Benificente'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Mendigo', 'Mendingo', 'Mendiguo', 'Mendigo'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Metade', 'Meitade', 'Metadi', 'Metade'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Através', 'Atravez', 'Através', 'Atravez'], c: 0 },
            { p: 'Qual palavra está escrita corretamente?', o: ['Trouxe', 'Trousse', 'Trouxe', 'Trousse'], c: 0 }
        ]
    },

    config: {
        totalPerguntasExpandidas: 200,
        perguntasPorSimulado: 20,
        minPorMateria: 3,
        maxPorMateria: 5
    }
};