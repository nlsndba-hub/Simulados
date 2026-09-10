// ============================================================
// DADOS DA MATÉRIA: CIÊNCIAS - 600 PERGUNTAS BASE
// 8º ano · 3º Bimestre · Reprodução e Sistema Reprodutor
// ============================================================

window.MATERIA_ATUAL = {
    id: 'ciencias',
    nome: 'Ciências',
    subtitulo: '8º ano · 3º Bimestre',
    emoji: '🧬',
    descricaoFooter: '🧠 Estude com calma · 600 perguntas disponíveis',

    topicos: [
        // ============================================================
        // TÓPICO 1: REPRODUÇÃO SEXUADA E ASSEXUADA
        // ============================================================
        {
            id: 'reproducao',
            nome: 'Reprodução Sexuada e Assexuada',
            emoji: '🧬',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Sexuada = 2 pais · Assexuada = 1 pai"</strong><br>
                    <span style="font-size:0.9rem;">A forma como os seres vivos se reproduzem</span>
                </div>

                <p><strong>📌 O que é reprodução?</strong></p>
                <p>É o processo pelo qual os seres vivos <strong>geram descendentes</strong>, garantindo a continuidade da espécie.</p>

                <p><strong>📌 Reprodução Assexuada:</strong></p>
                <p>Ocorre <strong>sem a união de gametas</strong>. Um único indivíduo gera descendentes <strong>idênticos a ele</strong> (clones).</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Tipo</th><th>Como funciona</th><th>Exemplos</th></tr>
                        <tr><td><strong>Bipartição (divisão binária)</strong></td><td>O ser se divide em dois</td><td>Bactérias, amebas</td></tr>
                        <tr><td><strong>Brotamento</strong></td><td>Surge um broto que se separa</td><td>Leveduras, hidras</td></tr>
                        <tr><td><strong>Fragmentação</strong></td><td>Partes do corpo geram novos indivíduos</td><td>Estrela-do-mar, planárias</td></tr>
                        <tr><td><strong>Esporulação</strong></td><td>Formação de esporos</td><td>Fungos, musgos</td></tr>
                        <tr><td><strong>Estaquia</strong></td><td>Um pedaço da planta gera outra</td><td>Roseira, mandioca</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Assexuada = clone · Sem variabilidade genética"</em>
                </div>

                <p><strong>📌 Reprodução Sexuada:</strong></p>
                <p>Ocorre com a <strong>união de gametas</strong> (óvulo + espermatozoide), formando um <strong>zigoto</strong>. Os descendentes são <strong>diferentes dos pais</strong>.</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Vantagem</th><th>Desvantagem</th></tr>
                        <tr><td>Maior variabilidade genética</td><td>Mais lenta</td></tr>
                        <tr><td>Adaptação ao ambiente</td><td>Precisa de dois indivíduos</td></tr>
                        <tr><td>Evolução das espécies</td><td>Gasta mais energia</td></tr>
                    </table>
                </div>

                <div class="exemplo-box">
                    <div class="en">🧬 Exemplos de reprodução sexuada:</div>
                    <div class="pt">Seres humanos, animais, plantas com flores, peixes, aves</div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Achar que a reprodução assexuada é "pior".<br>
                    ❌ <em>Assexuada é ruim</em><br>
                    ✅ <em>Assexuada é rápida e eficiente para ambientes estáveis!</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Diferença entre sexuada e assexuada</li>
                    <li>Tipos de reprodução assexuada</li>
                    <li>Vantagens e desvantagens de cada uma</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 2: REPRODUÇÃO DAS PLANTAS
        // ============================================================
        {
            id: 'reproducaoPlantas',
            nome: 'Reprodução das Plantas',
            emoji: '🌱',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Flor → Fruto → Semente → Nova planta"</strong>
                </div>

                <p><strong>📌 Como as plantas se reproduzem?</strong></p>
                <p>As plantas podem se reproduzir de forma <strong>sexuada</strong> (com flores e sementes) ou <strong>assexuada</strong> (por brotamento, estaquia, etc.).</p>

                <p><strong>📌 Partes da flor:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Parte</th><th>Função</th></tr>
                        <tr><td><strong>Sépalas</strong></td><td>Protegem o botão floral</td></tr>
                        <tr><td><strong>Pétalas</strong></td><td>Atraem polinizadores</td></tr>
                        <tr><td><strong>Estames</strong></td><td>Órgão masculino (produz pólen)</td></tr>
                        <tr><td><strong>Carpelo/Pistilo</strong></td><td>Órgão feminino (produz óvulos)</td></tr>
                        <tr><td><strong>Ovário</strong></td><td>Onde ficam os óvulos (vira fruto)</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Estame = masculino (pólen) · Pistilo = feminino (óvulo)"</em>
                </div>

                <p><strong>📌 Etapas da reprodução sexuada das plantas:</strong></p>
                <ol style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Polinização</strong> — o pólen chega ao pistilo</li>
                    <li><strong>Fecundação</strong> — o pólen encontra o óvulo</li>
                    <li><strong>Formação do fruto</strong> — o ovário se transforma em fruto</li>
                    <li><strong>Formação da semente</strong> — o óvulo fecundado vira semente</li>
                    <li><strong>Dispersão</strong> — a semente é espalhada</li>
                    <li><strong>Germinação</strong> — a semente gera uma nova planta</li>
                </ol>

                <div class="exemplo-box">
                    <div class="en">🌱 Exemplo prático:</div>
                    <div class="pt">Flor do tomateiro → polinização → fruto (tomate) → semente → nova planta</div>
                </div>

                <p><strong>📌 Reprodução assexuada em plantas:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Estaquia</strong> — plantar um pedaço do caule</li>
                    <li><strong>Enxertia</strong> — juntar duas plantas</li>
                    <li><strong>Alporquia</strong> — criar raízes em um galho</li>
                    <li><strong>Brotamento</strong> — surgem brotos laterais</li>
                </ul>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Achar que toda planta tem flor.<br>
                    ❌ <em>Toda planta tem flor</em><br>
                    ✅ <em>Plantas sem flor (musgos, samambaias) se reproduzem por esporos!</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Partes da flor</li>
                    <li>Etapas da reprodução</li>
                    <li>Diferença entre sexuada e assexuada nas plantas</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 3: TIPOS DE POLINIZAÇÃO
        // ============================================================
        {
            id: 'polinizacao',
            nome: 'Tipos de Polinização',
            emoji: '🐝',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Polinização = transporte do pólen"</strong><br>
                    <span style="font-size:0.9rem;">Pode ser feita por vento, animais, água ou pelo homem</span>
                </div>

                <p><strong>📌 O que é polinização?</strong></p>
                <p>É o <strong>transporte do pólen</strong> da parte masculina (estame) para a parte feminina (pistilo) da flor.</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Tipo</th><th>Agente</th><th>Exemplos</th></tr>
                        <tr><td><strong>Anemofilia</strong></td><td>Vento</td><td>Capim, pinheiro, trigo</td></tr>
                        <tr><td><strong>Entomofilia</strong></td><td>Insetos</td><td>Abelhas, borboletas</td></tr>
                        <tr><td><strong>Ornitofilia</strong></td><td>Aves</td><td>Beija-flor</td></tr>
                        <tr><td><strong>Quiropterofilia</strong></td><td>Morcegos</td><td>Plantas noturnas</td></tr>
                        <tr><td><strong>Hidrofilia</strong></td><td>Água</td><td>Plantas aquáticas</td></tr>
                        <tr><td><strong>Artificial</strong></td><td>Ser humano</td><td>Agricultura</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Anemo = vento · Entomos = inseto · Ornithos = pássaro"</em>
                </div>

                <p><strong>📌 Importância das abelhas:</strong></p>
                <p>As abelhas são os <strong>principais polinizadores</strong> do mundo. Sem elas, a produção de alimentos diminuiria drasticamente.</p>

                <div class="exemplo-box">
                    <div class="en">🐝 Curiosidade:</div>
                    <div class="pt">Cerca de 70% dos alimentos que consumimos dependem da polinização das abelhas!</div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Achar que polinização é só com abelhas.<br>
                    ❌ <em>Só abelhas polinizam</em><br>
                    ✅ <em>Vento, aves, morcegos, água e o homem também polinizam!</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Tipos de polinização</li>
                    <li>Agentes polinizadores</li>
                    <li>Importância das abelhas</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 4: REPRODUÇÃO DOS ANIMAIS
        // ============================================================
        {
            id: 'reproducaoAnimais',
            nome: 'Reprodução dos Animais',
            emoji: '🦁',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Ovíparos = ovos · Vivíparos = barriga da mãe"</strong>
                </div>

                <p><strong>📌 Como os animais se reproduzem?</strong></p>
                <p>Os animais podem ser <strong>ovíparos</strong> (botam ovos) ou <strong>vivíparos</strong> (desenvolvem dentro da mãe).</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Tipo</th><th>Como funciona</th><th>Exemplos</th></tr>
                        <tr><td><strong>Ovíparos</strong></td><td>Desenvolvem dentro de ovos</td><td>Aves, répteis, peixes, anfíbios</td></tr>
                        <tr><td><strong>Vivíparos</strong></td><td>Desenvolvem dentro da mãe</td><td>Mamíferos, alguns répteis</td></tr>
                        <tr><td><strong>Ovovivíparos</strong></td><td>Ovo dentro da mãe, mas sem placenta</td><td>Tubarões, algumas serpentes</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"OVO = fora · VIVO = dentro"</em>
                </div>

                <p><strong>📌 Fecundação:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Tipo</th><th>Onde ocorre</th><th>Exemplos</th></tr>
                        <tr><td><strong>Externa</strong></td><td>Fora do corpo da fêmea</td><td>Peixes, anfíbios</td></tr>
                        <tr><td><strong>Interna</strong></td><td>Dentro do corpo da fêmea</td><td>Mamíferos, aves, répteis</td></tr>
                    </table>
                </div>

                <p><strong>📌 Desenvolvimento:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Direto</strong> — o filhote já nasce parecido com o adulto (mamíferos)</li>
                    <li><strong>Indireto</strong> — passa por metamorfose (borboleta, sapo)</li>
                </ul>

                <div class="exemplo-box">
                    <div class="en">🦋 Metamorfose da borboleta:</div>
                    <div class="pt">Ovo → lagarta → pupa (casulo) → borboleta adulta</div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Achar que todo mamífero é vivíparo.<br>
                    ❌ <em>Todo mamífero é vivíparo</em><br>
                    ✅ <em>O ornitorrinco é mamífero e OVÍPARO!</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Ovíparos, vivíparos e ovovivíparos</li>
                    <li>Fecundação externa e interna</li>
                    <li>Desenvolvimento direto e indireto</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 5: SISTEMA REPRODUTOR MASCULINO E FEMININO
        // ============================================================
        {
            id: 'sistemaReprodutor',
            nome: 'Sistema Reprodutor M e F',
            emoji: '⚥',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Masculino = espermatozoide · Feminino = óvulo"</strong>
                </div>

                <p><strong>📌 Sistema Reprodutor Masculino:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Órgão</th><th>Função</th></tr>
                        <tr><td><strong>Testículos</strong></td><td>Produzem espermatozoides e testosterona</td></tr>
                        <tr><td><strong>Epidídimo</strong></td><td>Armazena e amadurece os espermatozoides</td></tr>
                        <tr><td><strong>Canal deferente</strong></td><td>Transporta os espermatozoides</td></tr>
                        <tr><td><strong>Vesícula seminal</strong></td><td>Produz líquido seminal</td></tr>
                        <tr><td><strong>Próstata</strong></td><td>Produz líquido prostático</td></tr>
                        <tr><td><strong>Uretra</strong></td><td>Elimina urina e sêmen</td></tr>
                        <tr><td><strong>Pênis</strong></td><td>Órgão de cópula</td></tr>
                    </table>
                </div>

                <p><strong>📌 Sistema Reprodutor Feminino:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Órgão</th><th>Função</th></tr>
                        <tr><td><strong>Ovários</strong></td><td>Produzem óvulos e estrogênio/progesterona</td></tr>
                        <tr><td><strong>Tubas uterinas</strong></td><td>Local da fecundação</td></tr>
                        <tr><td><strong>Útero</strong></td><td>Desenvolvimento do feto</td></tr>
                        <tr><td><strong>Vagina</strong></td><td>Canal do parto e cópula</td></tr>
                        <tr><td><strong>Vulva</strong></td><td>Conjunto de órgãos externos</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Ovário = óvulo · Testículo = espermatozoide"</em>
                </div>

                <p><strong>📌 Ciclo menstrual:</strong></p>
                <p>Dura em média <strong>28 dias</strong> e é dividido em:</p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>Menstruação</strong> — descamação do endométrio (1-5 dias)</li>
                    <li><strong>Fase folicular</strong> — amadurecimento do óvulo</li>
                    <li><strong>Ovulação</strong> — liberação do óvulo (dia 14)</li>
                    <li><strong>Fase lútea</strong> — preparação do útero</li>
                </ul>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Achar que a mulher produz óvulos a vida toda.<br>
                    ❌ <em>Produz sempre</em><br>
                    ✅ <em>A mulher nasce com todos os óvulos que terá (cerca de 400 mil)!</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Órgãos e funções</li>
                    <li>Gametas masculinos e femininos</li>
                    <li>Ciclo menstrual</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 6: GRAVIDEZ E DESENVOLVIMENTO
        // ============================================================
        {
            id: 'gravidez',
            nome: 'Gravidez e Desenvolvimento',
            emoji: '🤰',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Zigoto → Embrião → Feto → Bebê"</strong>
                </div>

                <p><strong>📌 O que é gravidez?</strong></p>
                <p>É o período em que o <strong>feto se desenvolve no útero</strong> da mulher, desde a fecundação até o nascimento.</p>

                <p><strong>📌 Etapas da gravidez:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Etapa</th><th>Quando</th><th>O que acontece</th></tr>
                        <tr><td><strong>Zigoto</strong></td><td>1º dia</td><td>Óvulo fecundado</td></tr>
                        <tr><td><strong>Mórula</strong></td><td>3-4 dias</td><td>Divisões celulares</td></tr>
                        <tr><td><strong>Blástula</strong></td><td>5-6 dias</td><td>Esfera oca</td></tr>
                        <tr><td><strong>Nidação</strong></td><td>6-10 dias</td><td>Fixação no útero</td></tr>
                        <tr><td><strong>Embrião</strong></td><td>2-8 semanas</td><td>Formação dos órgãos</td></tr>
                        <tr><td><strong>Feto</strong></td><td>9 semanas ao parto</td><td>Crescimento e maturação</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"2 meses = embrião · 9 meses = feto"</em>
                </div>

                <p><strong>📌 Semanas de desenvolvimento:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li><strong>4 semanas</strong> — coração começa a bater</li>
                    <li><strong>8 semanas</strong> — dedos, olhos e ouvidos</li>
                    <li><strong>12 semanas</strong> — sexo identificável</li>
                    <li><strong>16 semanas</strong> — movimentos perceptíveis</li>
                    <li><strong>20 semanas</strong> — cabelo e unhas</li>
                    <li><strong>28 semanas</strong> — pulmões quase prontos</li>
                    <li><strong>40 semanas</strong> — nascimento</li>
                </ul>

                <p><strong>📌 Gravidez Ectópica:</strong></p>
                <p>É quando o embrião se implanta <strong>fora do útero</strong> (geralmente nas tubas uterinas). É uma <strong>emergência médica</strong> e pode ser fatal.</p>

                <div class="exemplo-box">
                    <div class="en">⚠️ Sintomas da gravidez ectópica:</div>
                    <div class="pt">Dor intensa no abdômen, sangramento, tontura. Precisa de atendimento urgente!</div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Achar que gravidez ectópica é normal.<br>
                    ❌ <em>É só uma gravidez diferente</em><br>
                    ✅ <em>É uma emergência médica que oferece risco de morte!</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Etapas do desenvolvimento (zigoto, embrião, feto)</li>
                    <li>Semanas de desenvolvimento</li>
                    <li>Gravidez ectópica</li>
                </ul>
            `
        }
    ],

    // ============================================================
    // PERGUNTAS BASE - PARTE 1
    // ============================================================
    perguntasBase: {
        reproducao: [
            { p: 'O que é reprodução?', o: ['Processo de gerar descendentes', 'Processo de morrer', 'Processo de crescer', 'Processo de respirar'], c: 0 },
            { p: 'Quais são os dois tipos de reprodução?', o: ['Sexuada e assexuada', 'Rápida e lenta', 'Simples e complexa', 'Animal e vegetal'], c: 0 },
            { p: 'O que é reprodução assexuada?', o: ['Sem união de gametas', 'Com união de gametas', 'Com dois pais', 'Com fecundação'], c: 0 },
            { p: 'O que é reprodução sexuada?', o: ['Com união de gametas', 'Sem união de gametas', 'Com um só pai', 'Sem fecundação'], c: 0 },
            { p: 'Quantos pais a reprodução assexuada precisa?', o: ['Um', 'Dois', 'Três', 'Nenhum'], c: 0 },
            { p: 'Quantos pais a reprodução sexuada precisa?', o: ['Dois', 'Um', 'Três', 'Nenhum'], c: 0 },
            { p: 'Os descendentes da reprodução assexuada são:', o: ['Idênticos ao pai (clones)', 'Diferentes do pai', 'Sempre machos', 'Sempre fêmeas'], c: 0 },
            { p: 'Os descendentes da reprodução sexuada são:', o: ['Diferentes dos pais', 'Idênticos ao pai', 'Clones', 'Sempre iguais'], c: 0 },
            { p: 'Qual a vantagem da reprodução sexuada?', o: ['Maior variabilidade genética', 'Mais rápida', 'Não precisa de dois pais', 'Gasta menos energia'], c: 0 },
            { p: 'Qual a vantagem da reprodução assexuada?', o: ['Mais rápida e eficiente', 'Maior variabilidade', 'Evolução das espécies', 'Adaptação ao ambiente'], c: 0 },
            { p: 'O que é bipartição?', o: ['Divisão do ser em dois', 'União de gametas', 'Formação de esporos', 'Brotamento'], c: 0 },
            { p: 'Qual ser se reproduz por bipartição?', o: ['Bactéria', 'Ser humano', 'Ave', 'Mamífero'], c: 0 },
            { p: 'Qual ser se reproduz por bipartição?', o: ['Ameba', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é brotamento?', o: ['Surge um broto que se separa', 'Divisão em dois', 'União de gametas', 'Formação de esporos'], c: 0 },
            { p: 'Qual ser se reproduz por brotamento?', o: ['Levedura', 'Ser humano', 'Cachorro', 'Ave'], c: 0 },
            { p: 'Qual ser se reproduz por brotamento?', o: ['Hidra', 'Leão', 'Gato', 'Baleia'], c: 0 },
            { p: 'O que é fragmentação?', o: ['Partes do corpo geram novos indivíduos', 'Divisão em dois', 'Brotamento', 'Esporulação'], c: 0 },
            { p: 'Qual ser se reproduz por fragmentação?', o: ['Estrela-do-mar', 'Ser humano', 'Cachorro', 'Ave'], c: 0 },
            { p: 'Qual ser se reproduz por fragmentação?', o: ['Planária', 'Leão', 'Gato', 'Baleia'], c: 0 },
            { p: 'O que é esporulação?', o: ['Formação de esporos', 'Divisão em dois', 'Brotamento', 'Fragmentação'], c: 0 },
            { p: 'Qual ser se reproduz por esporulação?', o: ['Fungos', 'Ser humano', 'Cachorro', 'Ave'], c: 0 },
            { p: 'Qual ser se reproduz por esporulação?', o: ['Musgos', 'Leão', 'Gato', 'Baleia'], c: 0 },
            { p: 'O que é estaquia?', o: ['Um pedaço da planta gera outra', 'Divisão em dois', 'Brotamento', 'Esporulação'], c: 0 },
            { p: 'Qual planta se reproduz por estaquia?', o: ['Roseira', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'Qual planta se reproduz por estaquia?', o: ['Mandioca', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'O que é gameta?', o: ['Célula reprodutiva', 'Célula do corpo', 'Célula do sangue', 'Célula do osso'], c: 0 },
            { p: 'Qual o gameta masculino?', o: ['Espermatozoide', 'Óvulo', 'Zigoto', 'Embrião'], c: 0 },
            { p: 'Qual o gameta feminino?', o: ['Óvulo', 'Espermatozoide', 'Zigoto', 'Embrião'], c: 0 },
            { p: 'O que é zigoto?', o: ['Óvulo fecundado', 'Gameta', 'Embrião', 'Feto'], c: 0 },
            { p: 'O que é fecundação?', o: ['União de gametas', 'Divisão celular', 'Nascimento', 'Morte'], c: 0 },
            { p: 'Onde ocorre a fecundação humana?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'O que é variabilidade genética?', o: ['Diferença entre indivíduos', 'Igualdade entre indivíduos', 'Clone', 'Mutação'], c: 0 },
            { p: 'Qual reprodução gera variabilidade?', o: ['Sexuada', 'Assexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual reprodução gera clones?', o: ['Assexuada', 'Sexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'A reprodução assexuada é comum em:', o: ['Seres simples', 'Mamíferos', 'Aves', 'Répteis'], c: 0 },
            { p: 'A reprodução sexuada é comum em:', o: ['Seres complexos', 'Bactérias', 'Amebas', 'Fungos'], c: 0 },
            { p: 'Qual a desvantagem da reprodução sexuada?', o: ['Mais lenta', 'Menos variabilidade', 'Gera clones', 'Não evolui'], c: 0 },
            { p: 'Qual a desvantagem da reprodução assexuada?', o: ['Menor variabilidade', 'Mais lenta', 'Precisa de dois pais', 'Gasta mais energia'], c: 0 },
            { p: 'O que é clone?', o: ['Indivíduo geneticamente idêntico', 'Indivíduo diferente', 'Gameta', 'Zigoto'], c: 0 },
            { p: 'O que é reprodução?', o: ['Processo de gerar descendentes', 'Processo de morrer', 'Processo de crescer', 'Processo de respirar'], c: 0 },
            { p: 'Quais são os dois tipos de reprodução?', o: ['Sexuada e assexuada', 'Rápida e lenta', 'Simples e complexa', 'Animal e vegetal'], c: 0 },
            { p: 'O que é reprodução assexuada?', o: ['Sem união de gametas', 'Com união de gametas', 'Com dois pais', 'Com fecundação'], c: 0 },
            { p: 'O que é reprodução sexuada?', o: ['Com união de gametas', 'Sem união de gametas', 'Com um só pai', 'Sem fecundação'], c: 0 },
            { p: 'Quantos pais a reprodução assexuada precisa?', o: ['Um', 'Dois', 'Três', 'Nenhum'], c: 0 },
            { p: 'Quantos pais a reprodução sexuada precisa?', o: ['Dois', 'Um', 'Três', 'Nenhum'], c: 0 },
            { p: 'Os descendentes da reprodução assexuada são:', o: ['Idênticos ao pai (clones)', 'Diferentes do pai', 'Sempre machos', 'Sempre fêmeas'], c: 0 },
            { p: 'Os descendentes da reprodução sexuada são:', o: ['Diferentes dos pais', 'Idênticos ao pai', 'Clones', 'Sempre iguais'], c: 0 },
            { p: 'Qual a vantagem da reprodução sexuada?', o: ['Maior variabilidade genética', 'Mais rápida', 'Não precisa de dois pais', 'Gasta menos energia'], c: 0 },
            { p: 'Qual a vantagem da reprodução assexuada?', o: ['Mais rápida e eficiente', 'Maior variabilidade', 'Evolução das espécies', 'Adaptação ao ambiente'], c: 0 },
            { p: 'O que é bipartição?', o: ['Divisão do ser em dois', 'União de gametas', 'Formação de esporos', 'Brotamento'], c: 0 },
            { p: 'Qual ser se reproduz por bipartição?', o: ['Bactéria', 'Ser humano', 'Ave', 'Mamífero'], c: 0 },
            { p: 'Qual ser se reproduz por bipartição?', o: ['Ameba', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é brotamento?', o: ['Surge um broto que se separa', 'Divisão em dois', 'União de gametas', 'Formação de esporos'], c: 0 },
            { p: 'Qual ser se reproduz por brotamento?', o: ['Levedura', 'Ser humano', 'Cachorro', 'Ave'], c: 0 },
            { p: 'Qual ser se reproduz por brotamento?', o: ['Hidra', 'Leão', 'Gato', 'Baleia'], c: 0 },
            { p: 'O que é fragmentação?', o: ['Partes do corpo geram novos indivíduos', 'Divisão em dois', 'Brotamento', 'Esporulação'], c: 0 },
            { p: 'Qual ser se reproduz por fragmentação?', o: ['Estrela-do-mar', 'Ser humano', 'Cachorro', 'Ave'], c: 0 },
            { p: 'Qual ser se reproduz por fragmentação?', o: ['Planária', 'Leão', 'Gato', 'Baleia'], c: 0 },
            { p: 'O que é esporulação?', o: ['Formação de esporos', 'Divisão em dois', 'Brotamento', 'Fragmentação'], c: 0 },
            { p: 'Qual ser se reproduz por esporulação?', o: ['Fungos', 'Ser humano', 'Cachorro', 'Ave'], c: 0 },
            { p: 'Qual ser se reproduz por esporulação?', o: ['Musgos', 'Leão', 'Gato', 'Baleia'], c: 0 },
            { p: 'O que é estaquia?', o: ['Um pedaço da planta gera outra', 'Divisão em dois', 'Brotamento', 'Esporulação'], c: 0 },
            { p: 'Qual planta se reproduz por estaquia?', o: ['Roseira', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'Qual planta se reproduz por estaquia?', o: ['Mandioca', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'O que é gameta?', o: ['Célula reprodutiva', 'Célula do corpo', 'Célula do sangue', 'Célula do osso'], c: 0 },
            { p: 'Qual o gameta masculino?', o: ['Espermatozoide', 'Óvulo', 'Zigoto', 'Embrião'], c: 0 },
            { p: 'Qual o gameta feminino?', o: ['Óvulo', 'Espermatozoide', 'Zigoto', 'Embrião'], c: 0 },
            { p: 'O que é zigoto?', o: ['Óvulo fecundado', 'Gameta', 'Embrião', 'Feto'], c: 0 },
            { p: 'O que é fecundação?', o: ['União de gametas', 'Divisão celular', 'Nascimento', 'Morte'], c: 0 },
            { p: 'Onde ocorre a fecundação humana?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'O que é variabilidade genética?', o: ['Diferença entre indivíduos', 'Igualdade entre indivíduos', 'Clone', 'Mutação'], c: 0 },
            { p: 'Qual reprodução gera variabilidade?', o: ['Sexuada', 'Assexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual reprodução gera clones?', o: ['Assexuada', 'Sexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'A reprodução assexuada é comum em:', o: ['Seres simples', 'Mamíferos', 'Aves', 'Répteis'], c: 0 },
            { p: 'A reprodução sexuada é comum em:', o: ['Seres complexos', 'Bactérias', 'Amebas', 'Fungos'], c: 0 },
            { p: 'Qual a desvantagem da reprodução sexuada?', o: ['Mais lenta', 'Menos variabilidade', 'Gera clones', 'Não evolui'], c: 0 },
            { p: 'Qual a desvantagem da reprodução assexuada?', o: ['Menor variabilidade', 'Mais lenta', 'Precisa de dois pais', 'Gasta mais energia'], c: 0 },
            { p: 'O que é clone?', o: ['Indivíduo geneticamente idêntico', 'Indivíduo diferente', 'Gameta', 'Zigoto'], c: 0 },
            { p: 'Qual tipo de reprodução é mais rápida?', o: ['Assexuada', 'Sexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual tipo de reprodução gasta mais energia?', o: ['Sexuada', 'Assexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual tipo de reprodução é mais vantajosa em ambientes instáveis?', o: ['Sexuada', 'Assexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual tipo de reprodução é mais vantajosa em ambientes estáveis?', o: ['Assexuada', 'Sexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual ser se reproduz por cissiparidade?', o: ['Bactéria', 'Ser humano', 'Leão', 'Ave'], c: 0 },
            { p: 'O que é cissiparidade?', o: ['Divisão binária', 'Brotamento', 'Esporulação', 'Fragmentação'], c: 0 },
            { p: 'Qual reprodução não precisa de gametas?', o: ['Assexuada', 'Sexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Qual reprodução precisa de gametas?', o: ['Sexuada', 'Assexuada', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'O que é reprodução vegetativa?', o: ['Assexuada em plantas', 'Sexuada em plantas', 'Sexuada em animais', 'Assexuada em animais'], c: 0 },
            { p: 'Qual planta se reproduz por estolho?', o: ['Morango', 'Roseira', 'Samambaia', 'Musgo'], c: 0 },
            { p: 'O que é estolho?', o: ['Caule rastejante que gera novas plantas', 'Flor', 'Fruto', 'Semente'], c: 0 },
            { p: 'Qual planta se reproduz por bulbo?', o: ['Cebola', 'Roseira', 'Samambaia', 'Musgo'], c: 0 },
            { p: 'Qual planta se reproduz por tubérculo?', o: ['Batata', 'Roseira', 'Samambaia', 'Musgo'], c: 0 },
            { p: 'Qual planta se reproduz por rizoma?', o: ['Bananeira', 'Roseira', 'Samambaia', 'Musgo'], c: 0 },
            { p: 'O que é enxertia?', o: ['Junção de duas plantas', 'Divisão em dois', 'Brotamento', 'Esporulação'], c: 0 },
            { p: 'O que é alporquia?', o: ['Criar raízes em um galho', 'Divisão em dois', 'Brotamento', 'Esporulação'], c: 0 },
            { p: 'Qual reprodução é usada na agricultura?', o: ['Assexuada (estaquia, enxertia)', 'Sexuada apenas', 'Nenhuma', 'Ambas'], c: 0 },
            { p: 'Qual a importância da reprodução para os seres vivos?', o: ['Continuidade da espécie', 'Nenhuma', 'Apenas crescimento', 'Apenas alimentação'], c: 0 },
            { p: 'O que é reprodução?', o: ['Processo de gerar descendentes', 'Processo de morrer', 'Processo de crescer', 'Processo de respirar'], c: 0 },
            { p: 'Quais são os dois tipos de reprodução?', o: ['Sexuada e assexuada', 'Rápida e lenta', 'Simples e complexa', 'Animal e vegetal'], c: 0 },
            { p: 'O que é reprodução assexuada?', o: ['Sem união de gametas', 'Com união de gametas', 'Com dois pais', 'Com fecundação'], c: 0 },
            { p: 'O que é reprodução sexuada?', o: ['Com união de gametas', 'Sem união de gametas', 'Com um só pai', 'Sem fecundação'], c: 0 },
            { p: 'Quantos pais a reprodução assexuada precisa?', o: ['Um', 'Dois', 'Três', 'Nenhum'], c: 0 },
            { p: 'Quantos pais a reprodução sexuada precisa?', o: ['Dois', 'Um', 'Três', 'Nenhum'], c: 0 }
        ],
        reproducaoPlantas: [
            { p: 'Como as plantas se reproduzem?', o: ['Sexuada e assexuada', 'Apenas sexuada', 'Apenas assexuada', 'Não se reproduzem'], c: 0 },
            { p: 'Qual a parte masculina da flor?', o: ['Estame', 'Pistilo', 'Sépala', 'Pétala'], c: 0 },
            { p: 'Qual a parte feminina da flor?', o: ['Pistilo', 'Estame', 'Sépala', 'Pétala'], c: 0 },
            { p: 'Qual a função das pétalas?', o: ['Atrair polinizadores', 'Produzir pólen', 'Produzir óvulo', 'Proteger o botão'], c: 0 },
            { p: 'Qual a função das sépalas?', o: ['Proteger o botão floral', 'Atrair polinizadores', 'Produzir pólen', 'Produzir óvulo'], c: 0 },
            { p: 'Qual a função dos estames?', o: ['Produzir pólen', 'Produzir óvulo', 'Atrair polinizadores', 'Proteger'], c: 0 },
            { p: 'Qual a função do pistilo?', o: ['Produzir óvulo', 'Produzir pólen', 'Atrair polinizadores', 'Proteger'], c: 0 },
            { p: 'O que o ovário se transforma?', o: ['Fruto', 'Semente', 'Flor', 'Raiz'], c: 0 },
            { p: 'O que o óvulo fecundado se transforma?', o: ['Semente', 'Fruto', 'Flor', 'Raiz'], c: 0 },
            { p: 'O que é polinização?', o: ['Transporte do pólen', 'Formação do fruto', 'Formação da semente', 'Germinação'], c: 0 },
            { p: 'O que é fecundação nas plantas?', o: ['União do pólen com o óvulo', 'Transporte do pólen', 'Formação do fruto', 'Germinação'], c: 0 },
            { p: 'O que é germinação?', o: ['Semente gera nova planta', 'Flor gera fruto', 'Fruto gera semente', 'Planta morre'], c: 0 },
            { p: 'Qual a ordem da reprodução das plantas?', o: ['Flor → Fruto → Semente → Nova planta', 'Semente → Fruto → Flor → Planta', 'Fruto → Flor → Semente → Planta', 'Planta → Semente → Flor → Fruto'], c: 0 },
            { p: 'Qual a importância das flores?', o: ['Reprodução das plantas', 'Apenas decoração', 'Apenas alimentação', 'Apenas sombra'], c: 0 },
            { p: 'Qual a importância dos frutos?', o: ['Proteger e dispersar sementes', 'Apenas alimentação', 'Apenas decoração', 'Apenas sombra'], c: 0 },
            { p: 'Qual a importância das sementes?', o: ['Gerar novas plantas', 'Apenas alimentação', 'Apenas decoração', 'Apenas sombra'], c: 0 },
            { p: 'O que é dispersão de sementes?', o: ['Espalhamento das sementes', 'Formação do fruto', 'Formação da flor', 'Germinação'], c: 0 },
            { p: 'Qual agente dispersa sementes?', o: ['Vento', 'Apenas chuva', 'Apenas sol', 'Apenas lua'], c: 0 },
            { p: 'Qual agente dispersa sementes?', o: ['Animais', 'Apenas chuva', 'Apenas sol', 'Apenas lua'], c: 0 },
            { p: 'Qual agente dispersa sementes?', o: ['Água', 'Apenas sol', 'Apenas lua', 'Apenas vento'], c: 0 },
            { p: 'O que é reprodução assexuada em plantas?', o: ['Sem união de gametas', 'Com união de gametas', 'Com sementes', 'Com flores'], c: 0 },
            { p: 'O que é estaquia?', o: ['Plantar um pedaço do caule', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'O que é enxertia?', o: ['Juntar duas plantas', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'O que é alporquia?', o: ['Criar raízes em um galho', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'O que é brotamento em plantas?', o: ['Surgem brotos laterais', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'Qual planta se reproduz por estolho?', o: ['Morango', 'Roseira', 'Cebola', 'Batata'], c: 0 },
            { p: 'Qual planta se reproduz por bulbo?', o: ['Cebola', 'Morango', 'Roseira', 'Batata'], c: 0 },
            { p: 'Qual planta se reproduz por tubérculo?', o: ['Batata', 'Morango', 'Roseira', 'Cebola'], c: 0 },
            { p: 'Qual planta se reproduz por rizoma?', o: ['Bananeira', 'Morango', 'Roseira', 'Cebola'], c: 0 },
            { p: 'Plantas sem flor se reproduzem por:', o: ['Esporos', 'Sementes', 'Flores', 'Frutos'], c: 0 },
            { p: 'Qual planta não tem flor?', o: ['Samambaia', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta não tem flor?', o: ['Musgo', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta não tem flor?', o: ['Alga', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta tem flor?', o: ['Roseira', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'Qual planta tem flor?', o: ['Tomateiro', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'Qual planta tem flor?', o: ['Laranjeira', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'O que é pólen?', o: ['Célula masculina da planta', 'Célula feminina da planta', 'Fruto', 'Semente'], c: 0 },
            { p: 'O que é óvulo na planta?', o: ['Célula feminina da planta', 'Célula masculina da planta', 'Fruto', 'Semente'], c: 0 },
            { p: 'Onde fica o óvulo na flor?', o: ['No ovário', 'No estame', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'Onde fica o pólen na flor?', o: ['No estame', 'No ovário', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'Como as plantas se reproduzem?', o: ['Sexuada e assexuada', 'Apenas sexuada', 'Apenas assexuada', 'Não se reproduzem'], c: 0 },
            { p: 'Qual a parte masculina da flor?', o: ['Estame', 'Pistilo', 'Sépala', 'Pétala'], c: 0 },
            { p: 'Qual a parte feminina da flor?', o: ['Pistilo', 'Estame', 'Sépala', 'Pétala'], c: 0 },
            { p: 'Qual a função das pétalas?', o: ['Atrair polinizadores', 'Produzir pólen', 'Produzir óvulo', 'Proteger o botão'], c: 0 },
            { p: 'Qual a função das sépalas?', o: ['Proteger o botão floral', 'Atrair polinizadores', 'Produzir pólen', 'Produzir óvulo'], c: 0 },
            { p: 'Qual a função dos estames?', o: ['Produzir pólen', 'Produzir óvulo', 'Atrair polinizadores', 'Proteger'], c: 0 },
            { p: 'Qual a função do pistilo?', o: ['Produzir óvulo', 'Produzir pólen', 'Atrair polinizadores', 'Proteger'], c: 0 },
            { p: 'O que o ovário se transforma?', o: ['Fruto', 'Semente', 'Flor', 'Raiz'], c: 0 },
            { p: 'O que o óvulo fecundado se transforma?', o: ['Semente', 'Fruto', 'Flor', 'Raiz'], c: 0 },
            { p: 'O que é polinização?', o: ['Transporte do pólen', 'Formação do fruto', 'Formação da semente', 'Germinação'], c: 0 },
            { p: 'O que é fecundação nas plantas?', o: ['União do pólen com o óvulo', 'Transporte do pólen', 'Formação do fruto', 'Germinação'], c: 0 },
            { p: 'O que é germinação?', o: ['Semente gera nova planta', 'Flor gera fruto', 'Fruto gera semente', 'Planta morre'], c: 0 },
            { p: 'Qual a ordem da reprodução das plantas?', o: ['Flor → Fruto → Semente → Nova planta', 'Semente → Fruto → Flor → Planta', 'Fruto → Flor → Semente → Planta', 'Planta → Semente → Flor → Fruto'], c: 0 },
            { p: 'Qual a importância das flores?', o: ['Reprodução das plantas', 'Apenas decoração', 'Apenas alimentação', 'Apenas sombra'], c: 0 },
            { p: 'Qual a importância dos frutos?', o: ['Proteger e dispersar sementes', 'Apenas alimentação', 'Apenas decoração', 'Apenas sombra'], c: 0 },
            { p: 'Qual a importância das sementes?', o: ['Gerar novas plantas', 'Apenas alimentação', 'Apenas decoração', 'Apenas sombra'], c: 0 },
            { p: 'O que é dispersão de sementes?', o: ['Espalhamento das sementes', 'Formação do fruto', 'Formação da flor', 'Germinação'], c: 0 },
            { p: 'Qual agente dispersa sementes?', o: ['Vento', 'Apenas chuva', 'Apenas sol', 'Apenas lua'], c: 0 },
            { p: 'Qual agente dispersa sementes?', o: ['Animais', 'Apenas chuva', 'Apenas sol', 'Apenas lua'], c: 0 },
            { p: 'Qual agente dispersa sementes?', o: ['Água', 'Apenas sol', 'Apenas lua', 'Apenas vento'], c: 0 },
            { p: 'O que é reprodução assexuada em plantas?', o: ['Sem união de gametas', 'Com união de gametas', 'Com sementes', 'Com flores'], c: 0 },
            { p: 'O que é estaquia?', o: ['Plantar um pedaço do caule', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'O que é enxertia?', o: ['Juntar duas plantas', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'O que é alporquia?', o: ['Criar raízes em um galho', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'O que é brotamento em plantas?', o: ['Surgem brotos laterais', 'Plantar semente', 'Plantar flor', 'Plantar fruto'], c: 0 },
            { p: 'Qual planta se reproduz por estolho?', o: ['Morango', 'Roseira', 'Cebola', 'Batata'], c: 0 },
            { p: 'Qual planta se reproduz por bulbo?', o: ['Cebola', 'Morango', 'Roseira', 'Batata'], c: 0 },
            { p: 'Qual planta se reproduz por tubérculo?', o: ['Batata', 'Morango', 'Roseira', 'Cebola'], c: 0 },
            { p: 'Qual planta se reproduz por rizoma?', o: ['Bananeira', 'Morango', 'Roseira', 'Cebola'], c: 0 },
            { p: 'Plantas sem flor se reproduzem por:', o: ['Esporos', 'Sementes', 'Flores', 'Frutos'], c: 0 },
            { p: 'Qual planta não tem flor?', o: ['Samambaia', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta não tem flor?', o: ['Musgo', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta não tem flor?', o: ['Alga', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta tem flor?', o: ['Roseira', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'Qual planta tem flor?', o: ['Tomateiro', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'Qual planta tem flor?', o: ['Laranjeira', 'Samambaia', 'Musgo', 'Alga'], c: 0 },
            { p: 'O que é pólen?', o: ['Célula masculina da planta', 'Célula feminina da planta', 'Fruto', 'Semente'], c: 0 },
            { p: 'O que é óvulo na planta?', o: ['Célula feminina da planta', 'Célula masculina da planta', 'Fruto', 'Semente'], c: 0 },
            { p: 'Onde fica o óvulo na flor?', o: ['No ovário', 'No estame', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'Onde fica o pólen na flor?', o: ['No estame', 'No ovário', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'Como as plantas se reproduzem?', o: ['Sexuada e assexuada', 'Apenas sexuada', 'Apenas assexuada', 'Não se reproduzem'], c: 0 },
            { p: 'Qual a parte masculina da flor?', o: ['Estame', 'Pistilo', 'Sépala', 'Pétala'], c: 0 },
            { p: 'Qual a parte feminina da flor?', o: ['Pistilo', 'Estame', 'Sépala', 'Pétala'], c: 0 },
            { p: 'Qual a função das pétalas?', o: ['Atrair polinizadores', 'Produzir pólen', 'Produzir óvulo', 'Proteger o botão'], c: 0 },
            { p: 'Qual a função das sépalas?', o: ['Proteger o botão floral', 'Atrair polinizadores', 'Produzir pólen', 'Produzir óvulo'], c: 0 },
            { p: 'Qual a função dos estames?', o: ['Produzir pólen', 'Produzir óvulo', 'Atrair polinizadores', 'Proteger'], c: 0 },
            { p: 'Qual a função do pistilo?', o: ['Produzir óvulo', 'Produzir pólen', 'Atrair polinizadores', 'Proteger'], c: 0 },
            { p: 'O que o ovário se transforma?', o: ['Fruto', 'Semente', 'Flor', 'Raiz'], c: 0 },
            { p: 'O que o óvulo fecundado se transforma?', o: ['Semente', 'Fruto', 'Flor', 'Raiz'], c: 0 },
            { p: 'O que é polinização?', o: ['Transporte do pólen', 'Formação do fruto', 'Formação da semente', 'Germinação'], c: 0 },
            { p: 'O que é fecundação nas plantas?', o: ['União do pólen com o óvulo', 'Transporte do pólen', 'Formação do fruto', 'Germinação'], c: 0 },
            { p: 'O que é germinação?', o: ['Semente gera nova planta', 'Flor gera fruto', 'Fruto gera semente', 'Planta morre'], c: 0 },
            { p: 'Qual a ordem da reprodução das plantas?', o: ['Flor → Fruto → Semente → Nova planta', 'Semente → Fruto → Flor → Planta', 'Fruto → Flor → Semente → Planta', 'Planta → Semente → Flor → Fruto'], c: 0 },
            { p: 'Qual a importância das flores?', o: ['Reprodução das plantas', 'Apenas decoração', 'Apenas alimentação', 'Apenas sombra'], c: 0 },
            { p: 'Qual a importância dos frutos?', o: ['Proteger e dispersar sementes', 'Apenas alimentação', 'Apenas decoração', 'Apenas sombra'], c: 0 },
            { p: 'Qual a importância das sementes?', o: ['Gerar novas plantas', 'Apenas alimentação', 'Apenas decoração', 'Apenas sombra'], c: 0 }
        ],
        polinizacao: [
            { p: 'O que é polinização?', o: ['Transporte do pólen', 'Formação do fruto', 'Germinação', 'Fecundação'], c: 0 },
            { p: 'Qual a função da polinização?', o: ['Levar o pólen ao pistilo', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'Quais são os tipos de polinização?', o: ['Direta e indireta', 'Rápida e lenta', 'Simples e complexa', 'Curta e longa'], c: 0 },
            { p: 'O que é autopolinização?', o: ['Pólen da mesma flor', 'Pólen de outra flor', 'Pólen de outro vegetal', 'Sem pólen'], c: 0 },
            { p: 'O que é polinização cruzada?', o: ['Pólen de outra flor', 'Pólen da mesma flor', 'Sem pólen', 'Pólen artificial'], c: 0 },
            { p: 'O que é anemofilia?', o: ['Polinização pelo vento', 'Polinização por insetos', 'Polinização por aves', 'Polinização pela água'], c: 0 },
            { p: 'O que é entomofilia?', o: ['Polinização por insetos', 'Polinização pelo vento', 'Polinização por aves', 'Polinização pela água'], c: 0 },
            { p: 'O que é ornitofilia?', o: ['Polinização por aves', 'Polinização por insetos', 'Polinização pelo vento', 'Polinização pela água'], c: 0 },
            { p: 'O que é quiropterofilia?', o: ['Polinização por morcegos', 'Polinização por insetos', 'Polinização pelo vento', 'Polinização pela água'], c: 0 },
            { p: 'O que é hidrofilia?', o: ['Polinização pela água', 'Polinização pelo vento', 'Polinização por insetos', 'Polinização por aves'], c: 0 },
            { p: 'O que é polinização artificial?', o: ['Feita pelo ser humano', 'Feita pelo vento', 'Feita por insetos', 'Feita por aves'], c: 0 },
            { p: 'Qual o principal agente polinizador?', o: ['Abelha', 'Vento', 'Água', 'Morcego'], c: 0 },
            { p: 'Qual planta é polinizada pelo vento?', o: ['Capim', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta é polinizada pelo vento?', o: ['Pinheiro', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta é polinizada pelo vento?', o: ['Trigo', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta é polinizada por insetos?', o: ['Girassol', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por insetos?', o: ['Margarida', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por insetos?', o: ['Laranjeira', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por aves?', o: ['Beija-flor atrai flores vermelhas', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por morcegos?', o: ['Plantas noturnas', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada pela água?', o: ['Plantas aquáticas', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual a importância das abelhas?', o: ['Principais polinizadoras', 'Produzem mel apenas', 'Nenhuma', 'Apenas decoração'], c: 0 },
            { p: 'Quanto dos alimentos depende da polinização?', o: ['Cerca de 70%', '10%', '30%', '100%'], c: 0 },
            { p: 'O que acontece sem polinizadores?', o: ['Menos alimentos', 'Mais alimentos', 'Nada', 'Mais flores'], c: 0 },
            { p: 'Qual o nome do pólen?', o: ['Grão de pólen', 'Grão de óvulo', 'Grão de semente', 'Grão de fruto'], c: 0 },
            { p: 'Onde o pólen é produzido?', o: ['No estame', 'No pistilo', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'Onde o pólen é depositado?', o: ['No pistilo', 'No estame', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'O que é o tubo polínico?', o: ['Estrutura que leva o pólen ao óvulo', 'Uma flor', 'Um fruto', 'Uma semente'], c: 0 },
            { p: 'Qual a importância do tubo polínico?', o: ['Permitir a fecundação', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'O que é fecundação?', o: ['União do pólen com o óvulo', 'Transporte do pólen', 'Formação do fruto', 'Germinação'], c: 0 },
            { p: 'O que é polinização direta?', o: ['Na mesma flor', 'Em outra flor', 'Em outra planta', 'Artificial'], c: 0 },
            { p: 'O que é polinização indireta?', o: ['Entre flores diferentes', 'Na mesma flor', 'Sem pólen', 'Artificial'], c: 0 },
            { p: 'Qual a vantagem da polinização cruzada?', o: ['Maior variabilidade genética', 'Menos variabilidade', 'Mais rápida', 'Gasta menos energia'], c: 0 },
            { p: 'Qual a vantagem da autopolinização?', o: ['Garantia de reprodução', 'Maior variabilidade', 'Mais flores', 'Mais frutos'], c: 0 },
            { p: 'Qual a desvantagem da autopolinização?', o: ['Menor variabilidade', 'Mais lenta', 'Precisa de insetos', 'Precisa de vento'], c: 0 },
            { p: 'Qual flor atrai beija-flores?', o: ['Flores vermelhas e tubulares', 'Flores brancas', 'Flores verdes', 'Flores sem cor'], c: 0 },
            { p: 'Qual flor atrai morcegos?', o: ['Flores noturnas e claras', 'Flores diurnas', 'Flores escuras', 'Flores sem cheiro'], c: 0 },
            { p: 'Qual flor atrai abelhas?', o: ['Flores coloridas e perfumadas', 'Flores sem cor', 'Flores sem cheiro', 'Flores noturnas'], c: 0 },
            { p: 'Qual flor é polinizada pelo vento?', o: ['Flores sem pétalas vistosas', 'Flores coloridas', 'Flores perfumadas', 'Flores grandes'], c: 0 },
            { p: 'O que é néctar?', o: ['Líquido açucarado que atrai animais', 'Pólen', 'Óvulo', 'Semente'], c: 0 },
            { p: 'Qual a função do néctar?', o: ['Atrair polinizadores', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'O que é polinização?', o: ['Transporte do pólen', 'Formação do fruto', 'Germinação', 'Fecundação'], c: 0 },
            { p: 'Qual a função da polinização?', o: ['Levar o pólen ao pistilo', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'Quais são os tipos de polinização?', o: ['Direta e indireta', 'Rápida e lenta', 'Simples e complexa', 'Curta e longa'], c: 0 },
            { p: 'O que é autopolinização?', o: ['Pólen da mesma flor', 'Pólen de outra flor', 'Pólen de outro vegetal', 'Sem pólen'], c: 0 },
            { p: 'O que é polinização cruzada?', o: ['Pólen de outra flor', 'Pólen da mesma flor', 'Sem pólen', 'Pólen artificial'], c: 0 },
            { p: 'O que é anemofilia?', o: ['Polinização pelo vento', 'Polinização por insetos', 'Polinização por aves', 'Polinização pela água'], c: 0 },
            { p: 'O que é entomofilia?', o: ['Polinização por insetos', 'Polinização pelo vento', 'Polinização por aves', 'Polinização pela água'], c: 0 },
            { p: 'O que é ornitofilia?', o: ['Polinização por aves', 'Polinização por insetos', 'Polinização pelo vento', 'Polinização pela água'], c: 0 },
            { p: 'O que é quiropterofilia?', o: ['Polinização por morcegos', 'Polinização por insetos', 'Polinização pelo vento', 'Polinização pela água'], c: 0 },
            { p: 'O que é hidrofilia?', o: ['Polinização pela água', 'Polinização pelo vento', 'Polinização por insetos', 'Polinização por aves'], c: 0 },
            { p: 'O que é polinização artificial?', o: ['Feita pelo ser humano', 'Feita pelo vento', 'Feita por insetos', 'Feita por aves'], c: 0 },
            { p: 'Qual o principal agente polinizador?', o: ['Abelha', 'Vento', 'Água', 'Morcego'], c: 0 },
            { p: 'Qual planta é polinizada pelo vento?', o: ['Capim', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta é polinizada pelo vento?', o: ['Pinheiro', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta é polinizada pelo vento?', o: ['Trigo', 'Roseira', 'Tomateiro', 'Laranjeira'], c: 0 },
            { p: 'Qual planta é polinizada por insetos?', o: ['Girassol', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por insetos?', o: ['Margarida', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por insetos?', o: ['Laranjeira', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por aves?', o: ['Beija-flor atrai flores vermelhas', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada por morcegos?', o: ['Plantas noturnas', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual planta é polinizada pela água?', o: ['Plantas aquáticas', 'Capim', 'Pinheiro', 'Trigo'], c: 0 },
            { p: 'Qual a importância das abelhas?', o: ['Principais polinizadoras', 'Produzem mel apenas', 'Nenhuma', 'Apenas decoração'], c: 0 },
            { p: 'Quanto dos alimentos depende da polinização?', o: ['Cerca de 70%', '10%', '30%', '100%'], c: 0 },
            { p: 'O que acontece sem polinizadores?', o: ['Menos alimentos', 'Mais alimentos', 'Nada', 'Mais flores'], c: 0 },
            { p: 'Qual o nome do pólen?', o: ['Grão de pólen', 'Grão de óvulo', 'Grão de semente', 'Grão de fruto'], c: 0 },
            { p: 'Onde o pólen é produzido?', o: ['No estame', 'No pistilo', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'Onde o pólen é depositado?', o: ['No pistilo', 'No estame', 'Na pétala', 'Na sépala'], c: 0 },
            { p: 'O que é o tubo polínico?', o: ['Estrutura que leva o pólen ao óvulo', 'Uma flor', 'Um fruto', 'Uma semente'], c: 0 },
            { p: 'Qual a importância do tubo polínico?', o: ['Permitir a fecundação', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'O que é fecundação?', o: ['União do pólen com o óvulo', 'Transporte do pólen', 'Formação do fruto', 'Germinação'], c: 0 },
            { p: 'O que é polinização direta?', o: ['Na mesma flor', 'Em outra flor', 'Em outra planta', 'Artificial'], c: 0 },
            { p: 'O que é polinização indireta?', o: ['Entre flores diferentes', 'Na mesma flor', 'Sem pólen', 'Artificial'], c: 0 },
            { p: 'Qual a vantagem da polinização cruzada?', o: ['Maior variabilidade genética', 'Menos variabilidade', 'Mais rápida', 'Gasta menos energia'], c: 0 },
            { p: 'Qual a vantagem da autopolinização?', o: ['Garantia de reprodução', 'Maior variabilidade', 'Mais flores', 'Mais frutos'], c: 0 },
            { p: 'Qual a desvantagem da autopolinização?', o: ['Menor variabilidade', 'Mais lenta', 'Precisa de insetos', 'Precisa de vento'], c: 0 },
            { p: 'Qual flor atrai beija-flores?', o: ['Flores vermelhas e tubulares', 'Flores brancas', 'Flores verdes', 'Flores sem cor'], c: 0 },
            { p: 'Qual flor atrai morcegos?', o: ['Flores noturnas e claras', 'Flores diurnas', 'Flores escuras', 'Flores sem cheiro'], c: 0 },
            { p: 'Qual flor atrai abelhas?', o: ['Flores coloridas e perfumadas', 'Flores sem cor', 'Flores sem cheiro', 'Flores noturnas'], c: 0 },
            { p: 'Qual flor é polinizada pelo vento?', o: ['Flores sem pétalas vistosas', 'Flores coloridas', 'Flores perfumadas', 'Flores grandes'], c: 0 },
            { p: 'O que é néctar?', o: ['Líquido açucarado que atrai animais', 'Pólen', 'Óvulo', 'Semente'], c: 0 },
            { p: 'Qual a função do néctar?', o: ['Atrair polinizadores', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'Qual animal é importante polinizador?', o: ['Abelha', 'Leão', 'Tigre', 'Elefante'], c: 0 },
            { p: 'Qual animal é importante polinizador?', o: ['Borboleta', 'Leão', 'Tigre', 'Elefante'], c: 0 },
            { p: 'Qual animal é importante polinizador?', o: ['Beija-flor', 'Leão', 'Tigre', 'Elefante'], c: 0 },
            { p: 'Qual animal é importante polinizador?', o: ['Morcego', 'Leão', 'Tigre', 'Elefante'], c: 0 },
            { p: 'Qual inseto é o principal polinizador?', o: ['Abelha', 'Mosquito', 'Barata', 'Formiga'], c: 0 },
            { p: 'O que é polinização?', o: ['Transporte do pólen', 'Formação do fruto', 'Germinação', 'Fecundação'], c: 0 },
            { p: 'Qual a função da polinização?', o: ['Levar o pólen ao pistilo', 'Formar o fruto', 'Formar a semente', 'Germinar'], c: 0 },
            { p: 'Quais são os tipos de polinização?', o: ['Direta e indireta', 'Rápida e lenta', 'Simples e complexa', 'Curta e longa'], c: 0 },
            { p: 'O que é autopolinização?', o: ['Pólen da mesma flor', 'Pólen de outra flor', 'Pólen de outro vegetal', 'Sem pólen'], c: 0 },
            { p: 'O que é polinização cruzada?', o: ['Pólen de outra flor', 'Pólen da mesma flor', 'Sem pólen', 'Pólen artificial'], c: 0 },
            { p: 'O que é anemofilia?', o: ['Polinização pelo vento', 'Polinização por insetos', 'Polinização por aves', 'Polinização pela água'], c: 0 },
            { p: 'O que é entomofilia?', o: ['Polinização por insetos', 'Polinização pelo vento', 'Polinização por aves', 'Polinização pela água'], c: 0 },
            { p: 'O que é ornitofilia?', o: ['Polinização por aves', 'Polinização por insetos', 'Polinização pelo vento', 'Polinização pela água'], c: 0 },
            { p: 'O que é quiropterofilia?', o: ['Polinização por morcegos', 'Polinização por insetos', 'Polinização pelo vento', 'Polinização pela água'], c: 0 },
            { p: 'O que é hidrofilia?', o: ['Polinização pela água', 'Polinização pelo vento', 'Polinização por insetos', 'Polinização por aves'], c: 0 },
            { p: 'O que é polinização artificial?', o: ['Feita pelo ser humano', 'Feita pelo vento', 'Feita por insetos', 'Feita por aves'], c: 0 },
            { p: 'Qual o principal agente polinizador?', o: ['Abelha', 'Vento', 'Água', 'Morcego'], c: 0 }
        ],
        reproducaoAnimais: [
            { p: 'O que é reprodução sexuada nos animais?', o: ['Com união de gametas', 'Sem união de gametas', 'Por brotamento', 'Por fragmentação'], c: 0 },
            { p: 'O que é reprodução assexuada nos animais?', o: ['Sem união de gametas', 'Com união de gametas', 'Com fecundação', 'Com dois pais'], c: 0 },
            { p: 'O que são animais ovíparos?', o: ['Botam ovos', 'Desenvolvem na barriga', 'Fazem fotossíntese', 'Não se reproduzem'], c: 0 },
            { p: 'O que são animais vivíparos?', o: ['Desenvolvem na barriga da mãe', 'Botam ovos', 'Fazem fotossíntese', 'Não se reproduzem'], c: 0 },
            { p: 'O que são animais ovovivíparos?', o: ['Ovo dentro da mãe, sem placenta', 'Botam ovos', 'Desenvolvem na barriga', 'Não se reproduzem'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Galinha', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Pato', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Tartaruga', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Peixe', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Cachorro', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Gato', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Leão', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Ser humano', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Baleia', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é ovovivíparo?', o: ['Tubarão', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovovivíparo?', o: ['Algumas serpentes', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual mamífero é ovíparo?', o: ['Ornitorrinco', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual mamífero é ovíparo?', o: ['Equidna', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é fecundação externa?', o: ['Fora do corpo da fêmea', 'Dentro do corpo da fêmea', 'Sem gametas', 'Artificial'], c: 0 },
            { p: 'O que é fecundação interna?', o: ['Dentro do corpo da fêmea', 'Fora do corpo da fêmea', 'Sem gametas', 'Artificial'], c: 0 },
            { p: 'Qual animal tem fecundação externa?', o: ['Peixe', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem fecundação externa?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem fecundação interna?', o: ['Cachorro', 'Peixe', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem fecundação interna?', o: ['Gato', 'Peixe', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem fecundação interna?', o: ['Leão', 'Peixe', 'Sapo', 'Rã'], c: 0 },
            { p: 'O que é desenvolvimento direto?', o: ['Filhote parecido com adulto', 'Passa por metamorfose', 'Vira outro animal', 'Não cresce'], c: 0 },
            { p: 'O que é desenvolvimento indireto?', o: ['Passa por metamorfose', 'Filhote parecido com adulto', 'Não cresce', 'Não muda'], c: 0 },
            { p: 'Qual animal tem desenvolvimento direto?', o: ['Cachorro', 'Borboleta', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem desenvolvimento direto?', o: ['Gato', 'Borboleta', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem desenvolvimento direto?', o: ['Leão', 'Borboleta', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem desenvolvimento indireto?', o: ['Borboleta', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem desenvolvimento indireto?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem desenvolvimento indireto?', o: ['Rã', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é metamorfose?', o: ['Transformação do animal', 'Nascimento', 'Morte', 'Crescimento apenas'], c: 0 },
            { p: 'Qual animal passa por metamorfose?', o: ['Borboleta', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal passa por metamorfose?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual a ordem da metamorfose da borboleta?', o: ['Ovo → lagarta → pupa → borboleta', 'Ovo → borboleta → lagarta → pupa', 'Lagarta → ovo → pupa → borboleta', 'Pupa → ovo → lagarta → borboleta'], c: 0 },
            { p: 'Qual a ordem da metamorfose do sapo?', o: ['Ovo → girino → sapo', 'Ovo → sapo → girino', 'Girino → ovo → sapo', 'Sapo → ovo → girino'], c: 0 },
            { p: 'O que é girino?', o: ['Fase larval do sapo', 'Sapo adulto', 'Ovo de sapo', 'Peixe'], c: 0 },
            { p: 'O que é lagarta?', o: ['Fase larval da borboleta', 'Borboleta adulta', 'Ovo de borboleta', 'Pupa'], c: 0 },
            { p: 'O que é pupa?', o: ['Fase de transformação da borboleta', 'Lagarta', 'Borboleta adulta', 'Ovo'], c: 0 },
            { p: 'O que é casulo?', o: ['Proteção da pupa', 'Borboleta', 'Lagarta', 'Ovo'], c: 0 },
            { p: 'O que é reprodução assexuada em animais?', o: ['Sem união de gametas', 'Com união de gametas', 'Com fecundação', 'Com dois pais'], c: 0 },
            { p: 'Qual animal se reproduz por brotamento?', o: ['Hidra', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal se reproduz por fragmentação?', o: ['Estrela-do-mar', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal se reproduz por fragmentação?', o: ['Planária', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal se reproduz por partenogênese?', o: ['Abelha', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é partenogênese?', o: ['Óvulo sem fecundação', 'Óvulo fecundado', 'Sem gametas', 'Com dois pais'], c: 0 },
            { p: 'O que é hermafrodita?', o: ['Tem os dois sexos', 'Só macho', 'Só fêmea', 'Sem sexo'], c: 0 },
            { p: 'Qual animal é hermafrodita?', o: ['Minhoca', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é hermafrodita?', o: ['Caracol', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é reprodução sexuada nos animais?', o: ['Com união de gametas', 'Sem união de gametas', 'Por brotamento', 'Por fragmentação'], c: 0 },
            { p: 'O que é reprodução assexuada nos animais?', o: ['Sem união de gametas', 'Com união de gametas', 'Com fecundação', 'Com dois pais'], c: 0 },
            { p: 'O que são animais ovíparos?', o: ['Botam ovos', 'Desenvolvem na barriga', 'Fazem fotossíntese', 'Não se reproduzem'], c: 0 },
            { p: 'O que são animais vivíparos?', o: ['Desenvolvem na barriga da mãe', 'Botam ovos', 'Fazem fotossíntese', 'Não se reproduzem'], c: 0 },
            { p: 'O que são animais ovovivíparos?', o: ['Ovo dentro da mãe, sem placenta', 'Botam ovos', 'Desenvolvem na barriga', 'Não se reproduzem'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Galinha', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Pato', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Tartaruga', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Peixe', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovíparo?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Cachorro', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Gato', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Leão', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Ser humano', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é vivíparo?', o: ['Baleia', 'Galinha', 'Pato', 'Tartaruga'], c: 0 },
            { p: 'Qual animal é ovovivíparo?', o: ['Tubarão', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é ovovivíparo?', o: ['Algumas serpentes', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual mamífero é ovíparo?', o: ['Ornitorrinco', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual mamífero é ovíparo?', o: ['Equidna', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é fecundação externa?', o: ['Fora do corpo da fêmea', 'Dentro do corpo da fêmea', 'Sem gametas', 'Artificial'], c: 0 },
            { p: 'O que é fecundação interna?', o: ['Dentro do corpo da fêmea', 'Fora do corpo da fêmea', 'Sem gametas', 'Artificial'], c: 0 },
            { p: 'Qual animal tem fecundação externa?', o: ['Peixe', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem fecundação externa?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem fecundação interna?', o: ['Cachorro', 'Peixe', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem fecundação interna?', o: ['Gato', 'Peixe', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem fecundação interna?', o: ['Leão', 'Peixe', 'Sapo', 'Rã'], c: 0 },
            { p: 'O que é desenvolvimento direto?', o: ['Filhote parecido com adulto', 'Passa por metamorfose', 'Vira outro animal', 'Não cresce'], c: 0 },
            { p: 'O que é desenvolvimento indireto?', o: ['Passa por metamorfose', 'Filhote parecido com adulto', 'Não cresce', 'Não muda'], c: 0 },
            { p: 'Qual animal tem desenvolvimento direto?', o: ['Cachorro', 'Borboleta', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem desenvolvimento direto?', o: ['Gato', 'Borboleta', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem desenvolvimento direto?', o: ['Leão', 'Borboleta', 'Sapo', 'Rã'], c: 0 },
            { p: 'Qual animal tem desenvolvimento indireto?', o: ['Borboleta', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem desenvolvimento indireto?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal tem desenvolvimento indireto?', o: ['Rã', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é metamorfose?', o: ['Transformação do animal', 'Nascimento', 'Morte', 'Crescimento apenas'], c: 0 },
            { p: 'Qual animal passa por metamorfose?', o: ['Borboleta', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal passa por metamorfose?', o: ['Sapo', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual a ordem da metamorfose da borboleta?', o: ['Ovo → lagarta → pupa → borboleta', 'Ovo → borboleta → lagarta → pupa', 'Lagarta → ovo → pupa → borboleta', 'Pupa → ovo → lagarta → borboleta'], c: 0 },
            { p: 'Qual a ordem da metamorfose do sapo?', o: ['Ovo → girino → sapo', 'Ovo → sapo → girino', 'Girino → ovo → sapo', 'Sapo → ovo → girino'], c: 0 },
            { p: 'O que é girino?', o: ['Fase larval do sapo', 'Sapo adulto', 'Ovo de sapo', 'Peixe'], c: 0 },
            { p: 'O que é lagarta?', o: ['Fase larval da borboleta', 'Borboleta adulta', 'Ovo de borboleta', 'Pupa'], c: 0 },
            { p: 'O que é pupa?', o: ['Fase de transformação da borboleta', 'Lagarta', 'Borboleta adulta', 'Ovo'], c: 0 },
            { p: 'O que é casulo?', o: ['Proteção da pupa', 'Borboleta', 'Lagarta', 'Ovo'], c: 0 },
            { p: 'O que é reprodução assexuada em animais?', o: ['Sem união de gametas', 'Com união de gametas', 'Com fecundação', 'Com dois pais'], c: 0 },
            { p: 'Qual animal se reproduz por brotamento?', o: ['Hidra', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal se reproduz por fragmentação?', o: ['Estrela-do-mar', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal se reproduz por fragmentação?', o: ['Planária', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal se reproduz por partenogênese?', o: ['Abelha', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'O que é partenogênese?', o: ['Óvulo sem fecundação', 'Óvulo fecundado', 'Sem gametas', 'Com dois pais'], c: 0 },
            { p: 'O que é hermafrodita?', o: ['Tem os dois sexos', 'Só macho', 'Só fêmea', 'Sem sexo'], c: 0 },
            { p: 'Qual animal é hermafrodita?', o: ['Minhoca', 'Cachorro', 'Gato', 'Leão'], c: 0 },
            { p: 'Qual animal é hermafrodita?', o: ['Caracol', 'Cachorro', 'Gato', 'Leão'], c: 0 }
        ],
        sistemaReprodutor: [
            { p: 'Qual é a função do sistema reprodutor masculino?', o: ['Produzir espermatozoides e hormônios', 'Produzir óvulos', 'Produzir leite', 'Produzir urina apenas'], c: 0 },
            { p: 'Qual é a função do sistema reprodutor feminino?', o: ['Produzir óvulos e hormônios', 'Produzir espermatozoides', 'Produzir leite apenas', 'Produzir urina apenas'], c: 0 },
            { p: 'Qual órgão produz espermatozoides?', o: ['Testículos', 'Ovários', 'Útero', 'Próstata'], c: 0 },
            { p: 'Qual órgão produz óvulos?', o: ['Ovários', 'Testículos', 'Útero', 'Vagina'], c: 0 },
            { p: 'Qual órgão armazena e amadurece os espermatozoides?', o: ['Epidídimo', 'Testículo', 'Próstata', 'Uretra'], c: 0 },
            { p: 'Qual órgão produz o líquido seminal?', o: ['Vesícula seminal', 'Testículo', 'Epidídimo', 'Uretra'], c: 0 },
            { p: 'Qual órgão produz o líquido prostático?', o: ['Próstata', 'Testículo', 'Epidídimo', 'Uretra'], c: 0 },
            { p: 'Qual órgão elimina urina e sêmen?', o: ['Uretra', 'Testículo', 'Epidídimo', 'Próstata'], c: 0 },
            { p: 'Qual é o órgão de cópula masculino?', o: ['Pênis', 'Testículo', 'Epidídimo', 'Próstata'], c: 0 },
            { p: 'Qual é o hormônio masculino principal?', o: ['Testosterona', 'Estrogênio', 'Progesterona', 'Insulina'], c: 0 },
            { p: 'Qual é o hormônio feminino principal?', o: ['Estrogênio', 'Testosterona', 'Insulina', 'Adrenalina'], c: 0 },
            { p: 'Qual é o hormônio que prepara o útero para a gravidez?', o: ['Progesterona', 'Testosterona', 'Insulina', 'Adrenalina'], c: 0 },
            { p: 'Qual é o local da fecundação?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'Qual é o local de desenvolvimento do feto?', o: ['Útero', 'Tubas uterinas', 'Ovário', 'Vagina'], c: 0 },
            { p: 'Qual é o canal do parto?', o: ['Vagina', 'Útero', 'Ovário', 'Tuba uterina'], c: 0 },
            { p: 'O que é a vulva?', o: ['Conjunto de órgãos externos femininos', 'Órgão interno', 'Hormônio', 'Célula'], c: 0 },
            { p: 'O que é o endométrio?', o: ['Revestimento interno do útero', 'Órgão externo', 'Hormônio', 'Célula'], c: 0 },
            { p: 'O que acontece com o endométrio na menstruação?', o: ['É descamado', 'É formado', 'É fecundado', 'É implantado'], c: 0 },
            { p: 'Quantos dias tem o ciclo menstrual em média?', o: ['28 dias', '14 dias', '7 dias', '40 dias'], c: 0 },
            { p: 'Em que dia ocorre a ovulação em um ciclo de 28 dias?', o: ['14º dia', '1º dia', '28º dia', '21º dia'], c: 0 },
            { p: 'O que é ovulação?', o: ['Liberação do óvulo', 'Formação do óvulo', 'Fecundação', 'Menstruação'], c: 0 },
            { p: 'O que é menstruação?', o: ['Descamação do endométrio', 'Liberação do óvulo', 'Fecundação', 'Nidação'], c: 0 },
            { p: 'Quantos óvulos a mulher nasce com?', o: ['Cerca de 400 mil', '1', '100', '10 milhões'], c: 0 },
            { p: 'Quantos óvulos são liberados por ciclo?', o: ['Geralmente 1', '10', '100', 'Nenhum'], c: 0 },
            { p: 'O que é menopausa?', o: ['Fim da ovulação', 'Início da ovulação', 'Fecundação', 'Menstruação'], c: 0 },
            { p: 'Com quantos anos ocorre a menopausa geralmente?', o: ['45-55 anos', '20-30 anos', '15-20 anos', '60-70 anos'], c: 0 },
            { p: 'O que é puberdade?', o: ['Fase de mudanças no corpo', 'Fase adulta', 'Fase infantil', 'Fase idosa'], c: 0 },
            { p: 'Em que idade começa a puberdade feminina?', o: ['8-13 anos', '1-5 anos', '20-25 anos', '30-40 anos'], c: 0 },
            { p: 'Em que idade começa a puberdade masculina?', o: ['9-14 anos', '1-5 anos', '20-25 anos', '30-40 anos'], c: 0 },
            { p: 'O que é espermatozoide?', o: ['Gameta masculino', 'Gameta feminino', 'Hormônio', 'Célula do corpo'], c: 0 },
            { p: 'O que é óvulo?', o: ['Gameta feminino', 'Gameta masculino', 'Hormônio', 'Célula do corpo'], c: 0 },
            { p: 'O que é sêmen?', o: ['Líquido com espermatozoides', 'Apenas espermatozoides', 'Apenas líquido', 'Urina'], c: 0 },
            { p: 'Qual a função do prepúcio?', o: ['Proteger a glande', 'Produzir sêmen', 'Produzir urina', 'Produzir hormônios'], c: 0 },
            { p: 'O que é glande?', o: ['Cabeça do pênis', 'Corpo do pênis', 'Base do pênis', 'Saco escrotal'], c: 0 },
            { p: 'O que é escroto?', o: ['Saco que protege os testículos', 'Órgão interno', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Qual a função do escroto?', o: ['Regular a temperatura dos testículos', 'Produzir espermatozoides', 'Produzir hormônios', 'Produzir urina'], c: 0 },
            { p: 'Qual a temperatura ideal para os testículos?', o: ['Abaixo da temperatura corporal', 'Igual à corporal', 'Acima da corporal', 'Muito alta'], c: 0 },
            { p: 'O que é vasectomia?', o: ['Corte do canal deferente', 'Corte do epidídimo', 'Corte da uretra', 'Corte do pênis'], c: 0 },
            { p: 'O que é laqueadura?', o: ['Corte das tubas uterinas', 'Corte do útero', 'Corte do ovário', 'Corte da vagina'], c: 0 },
            { p: 'Qual método impede a passagem dos espermatozoides?', o: ['Vasectomia', 'Laqueadura', 'Camisinha', 'DIU'], c: 0 },
            { p: 'Qual método impede a passagem do óvulo?', o: ['Laqueadura', 'Vasectomia', 'Camisinha', 'DIU'], c: 0 },
            { p: 'O que é camisinha?', o: ['Método de barreira', 'Método hormonal', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'O que é pílula anticoncepcional?', o: ['Método hormonal', 'Método de barreira', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'O que é DIU?', o: ['Dispositivo intrauterino', 'Método hormonal', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'O que é preservativo feminino?', o: ['Método de barreira', 'Método hormonal', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'Qual método previne ISTs?', o: ['Camisinha', 'Pílula', 'DIU', 'Laqueadura'], c: 0 },
            { p: 'O que é IST?', o: ['Infecção Sexualmente Transmissível', 'Instituto de Saúde', 'Imposto', 'Doença cardíaca'], c: 0 },
            { p: 'Qual é uma IST?', o: ['HIV/AIDS', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['Sífilis', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['Gonorreia', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['Herpes genital', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['HPV', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é a função do sistema reprodutor masculino?', o: ['Produzir espermatozoides e hormônios', 'Produzir óvulos', 'Produzir leite', 'Produzir urina apenas'], c: 0 },
            { p: 'Qual é a função do sistema reprodutor feminino?', o: ['Produzir óvulos e hormônios', 'Produzir espermatozoides', 'Produzir leite apenas', 'Produzir urina apenas'], c: 0 },
            { p: 'Qual órgão produz espermatozoides?', o: ['Testículos', 'Ovários', 'Útero', 'Próstata'], c: 0 },
            { p: 'Qual órgão produz óvulos?', o: ['Ovários', 'Testículos', 'Útero', 'Vagina'], c: 0 },
            { p: 'Qual órgão armazena e amadurece os espermatozoides?', o: ['Epidídimo', 'Testículo', 'Próstata', 'Uretra'], c: 0 },
            { p: 'Qual órgão produz o líquido seminal?', o: ['Vesícula seminal', 'Testículo', 'Epidídimo', 'Uretra'], c: 0 },
            { p: 'Qual órgão produz o líquido prostático?', o: ['Próstata', 'Testículo', 'Epidídimo', 'Uretra'], c: 0 },
            { p: 'Qual órgão elimina urina e sêmen?', o: ['Uretra', 'Testículo', 'Epidídimo', 'Próstata'], c: 0 },
            { p: 'Qual é o órgão de cópula masculino?', o: ['Pênis', 'Testículo', 'Epidídimo', 'Próstata'], c: 0 },
            { p: 'Qual é o hormônio masculino principal?', o: ['Testosterona', 'Estrogênio', 'Progesterona', 'Insulina'], c: 0 },
            { p: 'Qual é o hormônio feminino principal?', o: ['Estrogênio', 'Testosterona', 'Insulina', 'Adrenalina'], c: 0 },
            { p: 'Qual é o hormônio que prepara o útero para a gravidez?', o: ['Progesterona', 'Testosterona', 'Insulina', 'Adrenalina'], c: 0 },
            { p: 'Qual é o local da fecundação?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'Qual é o local de desenvolvimento do feto?', o: ['Útero', 'Tubas uterinas', 'Ovário', 'Vagina'], c: 0 },
            { p: 'Qual é o canal do parto?', o: ['Vagina', 'Útero', 'Ovário', 'Tuba uterina'], c: 0 },
            { p: 'O que é a vulva?', o: ['Conjunto de órgãos externos femininos', 'Órgão interno', 'Hormônio', 'Célula'], c: 0 },
            { p: 'O que é o endométrio?', o: ['Revestimento interno do útero', 'Órgão externo', 'Hormônio', 'Célula'], c: 0 },
            { p: 'O que acontece com o endométrio na menstruação?', o: ['É descamado', 'É formado', 'É fecundado', 'É implantado'], c: 0 },
            { p: 'Quantos dias tem o ciclo menstrual em média?', o: ['28 dias', '14 dias', '7 dias', '40 dias'], c: 0 },
            { p: 'Em que dia ocorre a ovulação em um ciclo de 28 dias?', o: ['14º dia', '1º dia', '28º dia', '21º dia'], c: 0 },
            { p: 'O que é ovulação?', o: ['Liberação do óvulo', 'Formação do óvulo', 'Fecundação', 'Menstruação'], c: 0 },
            { p: 'O que é menstruação?', o: ['Descamação do endométrio', 'Liberação do óvulo', 'Fecundação', 'Nidação'], c: 0 },
            { p: 'Quantos óvulos a mulher nasce com?', o: ['Cerca de 400 mil', '1', '100', '10 milhões'], c: 0 },
            { p: 'Quantos óvulos são liberados por ciclo?', o: ['Geralmente 1', '10', '100', 'Nenhum'], c: 0 },
            { p: 'O que é menopausa?', o: ['Fim da ovulação', 'Início da ovulação', 'Fecundação', 'Menstruação'], c: 0 },
            { p: 'Com quantos anos ocorre a menopausa geralmente?', o: ['45-55 anos', '20-30 anos', '15-20 anos', '60-70 anos'], c: 0 },
            { p: 'O que é puberdade?', o: ['Fase de mudanças no corpo', 'Fase adulta', 'Fase infantil', 'Fase idosa'], c: 0 },
            { p: 'Em que idade começa a puberdade feminina?', o: ['8-13 anos', '1-5 anos', '20-25 anos', '30-40 anos'], c: 0 },
            { p: 'Em que idade começa a puberdade masculina?', o: ['9-14 anos', '1-5 anos', '20-25 anos', '30-40 anos'], c: 0 },
            { p: 'O que é espermatozoide?', o: ['Gameta masculino', 'Gameta feminino', 'Hormônio', 'Célula do corpo'], c: 0 },
            { p: 'O que é óvulo?', o: ['Gameta feminino', 'Gameta masculino', 'Hormônio', 'Célula do corpo'], c: 0 },
            { p: 'O que é sêmen?', o: ['Líquido com espermatozoides', 'Apenas espermatozoides', 'Apenas líquido', 'Urina'], c: 0 },
            { p: 'Qual a função do prepúcio?', o: ['Proteger a glande', 'Produzir sêmen', 'Produzir urina', 'Produzir hormônios'], c: 0 },
            { p: 'O que é glande?', o: ['Cabeça do pênis', 'Corpo do pênis', 'Base do pênis', 'Saco escrotal'], c: 0 },
            { p: 'O que é escroto?', o: ['Saco que protege os testículos', 'Órgão interno', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Qual a função do escroto?', o: ['Regular a temperatura dos testículos', 'Produzir espermatozoides', 'Produzir hormônios', 'Produzir urina'], c: 0 },
            { p: 'Qual a temperatura ideal para os testículos?', o: ['Abaixo da temperatura corporal', 'Igual à corporal', 'Acima da corporal', 'Muito alta'], c: 0 },
            { p: 'O que é vasectomia?', o: ['Corte do canal deferente', 'Corte do epidídimo', 'Corte da uretra', 'Corte do pênis'], c: 0 },
            { p: 'O que é laqueadura?', o: ['Corte das tubas uterinas', 'Corte do útero', 'Corte do ovário', 'Corte da vagina'], c: 0 },
            { p: 'Qual método impede a passagem dos espermatozoides?', o: ['Vasectomia', 'Laqueadura', 'Camisinha', 'DIU'], c: 0 },
            { p: 'Qual método impede a passagem do óvulo?', o: ['Laqueadura', 'Vasectomia', 'Camisinha', 'DIU'], c: 0 },
            { p: 'O que é camisinha?', o: ['Método de barreira', 'Método hormonal', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'O que é pílula anticoncepcional?', o: ['Método hormonal', 'Método de barreira', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'O que é DIU?', o: ['Dispositivo intrauterino', 'Método hormonal', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'O que é preservativo feminino?', o: ['Método de barreira', 'Método hormonal', 'Método cirúrgico', 'Método natural'], c: 0 },
            { p: 'Qual método previne ISTs?', o: ['Camisinha', 'Pílula', 'DIU', 'Laqueadura'], c: 0 },
            { p: 'O que é IST?', o: ['Infecção Sexualmente Transmissível', 'Instituto de Saúde', 'Imposto', 'Doença cardíaca'], c: 0 },
            { p: 'Qual é uma IST?', o: ['HIV/AIDS', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['Sífilis', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['Gonorreia', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['Herpes genital', 'Gripe', 'Sarampo', 'Catapora'], c: 0 },
            { p: 'Qual é uma IST?', o: ['HPV', 'Gripe', 'Sarampo', 'Catapora'], c: 0 }
        ],
        gravidez: [
            { p: 'O que é gravidez?', o: ['Período de desenvolvimento do feto no útero', 'Período de menstruação', 'Período de ovulação', 'Período de amamentação'], c: 0 },
            { p: 'Quanto tempo dura a gravidez humana?', o: ['Cerca de 40 semanas', '20 semanas', '60 semanas', '10 semanas'], c: 0 },
            { p: 'Quanto tempo dura a gravidez em meses?', o: ['9 meses', '6 meses', '12 meses', '3 meses'], c: 0 },
            { p: 'O que é zigoto?', o: ['Óvulo fecundado', 'Óvulo', 'Espermatozoide', 'Embrião'], c: 0 },
            { p: 'O que é mórula?', o: ['Fase de divisões celulares', 'Óvulo fecundado', 'Feto', 'Bebê'], c: 0 },
            { p: 'O que é blástula?', o: ['Esfera oca de células', 'Óvulo', 'Espermatozoide', 'Feto'], c: 0 },
            { p: 'O que é nidação?', o: ['Fixação do embrião no útero', 'Fecundação', 'Ovulação', 'Menstruação'], c: 0 },
            { p: 'Onde ocorre a nidação?', o: ['No útero', 'Na tuba uterina', 'No ovário', 'Na vagina'], c: 0 },
            { p: 'O que é embrião?', o: ['Fase inicial do desenvolvimento', 'Feto', 'Bebê', 'Óvulo'], c: 0 },
            { p: 'O que é feto?', o: ['Fase após 9 semanas', 'Fase inicial', 'Óvulo', 'Espermatozoide'], c: 0 },
            { p: 'A partir de quantas semanas é chamado de feto?', o: ['9 semanas', '1 semana', '20 semanas', '40 semanas'], c: 0 },
            { p: 'O que é gestação?', o: ['Período de desenvolvimento do bebê', 'Menstruação', 'Ovulação', 'Fecundação'], c: 0 },
            { p: 'O que é gravidez ectópica?', o: ['Embrião fora do útero', 'Embrião no útero', 'Gravidez normal', 'Gravidez de gêmeos'], c: 0 },
            { p: 'Onde geralmente ocorre a gravidez ectópica?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'A gravidez ectópica é perigosa?', o: ['Sim, é emergência médica', 'Não', 'Um pouco', 'Nunca'], c: 0 },
            { p: 'Quais os sintomas da gravidez ectópica?', o: ['Dor abdominal e sangramento', 'Náusea apenas', 'Febre apenas', 'Nenhum'], c: 0 },
            { p: 'O que é placenta?', o: ['Órgão que nutre o feto', 'Órgão do bebê', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Qual a função da placenta?', o: ['Nutrir e oxigenar o feto', 'Produzir leite', 'Produzir urina', 'Produzir hormônios apenas'], c: 0 },
            { p: 'O que é cordão umbilical?', o: ['Ligação entre feto e placenta', 'Ligação entre mãe e bebê', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Qual a função do cordão umbilical?', o: ['Levar nutrientes ao feto', 'Produzir leite', 'Produzir urina', 'Produzir hormônios'], c: 0 },
            { p: 'O que é líquido amniótico?', o: ['Líquido que protege o feto', 'Líquido da placenta', 'Sangue', 'Urina'], c: 0 },
            { p: 'Qual a função do líquido amniótico?', o: ['Proteger e amortecer o feto', 'Nutrir o feto', 'Oxigenar o feto', 'Produzir hormônios'], c: 0 },
            { p: 'O que é saco amniótico?', o: ['Bolsa que contém o líquido amniótico', 'Órgão do bebê', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Quando o coração do feto começa a bater?', o: ['4 semanas', '12 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quando os dedos do feto se formam?', o: ['8 semanas', '4 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quando o sexo do bebê é identificável?', o: ['12 semanas', '4 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quando a mãe começa a sentir os movimentos?', o: ['16-20 semanas', '4 semanas', '30 semanas', '40 semanas'], c: 0 },
            { p: 'Quando o cabelo e as unhas do feto aparecem?', o: ['20 semanas', '4 semanas', '30 semanas', '40 semanas'], c: 0 },
            { p: 'Quando os pulmões do feto estão quase prontos?', o: ['28 semanas', '4 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quantas semanas tem uma gravidez a termo?', o: ['37-42 semanas', '20-30 semanas', '30-36 semanas', '43-50 semanas'], c: 0 },
            { p: 'O que é parto prematuro?', o: ['Antes de 37 semanas', 'Após 42 semanas', 'Com 40 semanas', 'Com 38 semanas'], c: 0 },
            { p: 'O que é parto normal?', o: ['Pela vagina', 'Por cirurgia', 'Por cesárea', 'Por fórceps'], c: 0 },
            { p: 'O que é cesárea?', o: ['Parto cirúrgico', 'Parto normal', 'Parto natural', 'Parto prematuro'], c: 0 },
            { p: 'O que é pós-parto?', o: ['Período após o nascimento', 'Período antes do parto', 'Período de gravidez', 'Período de amamentação'], c: 0 },
            { p: 'O que é amamentação?', o: ['Alimentar o bebê com leite materno', 'Alimentar o bebê com fórmula', 'Dar água ao bebê', 'Dar comida ao bebê'], c: 0 },
            { p: 'Qual a importância do leite materno?', o: ['Nutre e protege o bebê', 'Apenas mata a sede', 'Apenas alimenta', 'Nenhuma'], c: 0 },
            { p: 'O que é colostro?', o: ['Primeiro leite materno', 'Leite artificial', 'Água', 'Suco'], c: 0 },
            { p: 'O que é ultrassom?', o: ['Exame que mostra o feto', 'Exame de sangue', 'Exame de urina', 'Exame de fezes'], c: 0 },
            { p: 'Qual a importância do pré-natal?', o: ['Acompanhar a gravidez', 'Apenas estética', 'Nenhuma', 'Apenas para a mãe'], c: 0 },
            { p: 'O que é pré-natal?', o: ['Acompanhamento médico da gravidez', 'Exame de sangue', 'Exame de urina', 'Exame de fezes'], c: 0 },
            { p: 'Quantas consultas de pré-natal são recomendadas?', o: ['Pelo menos 6', '1', '2', '3'], c: 0 },
            { p: 'O que é ácido fólico?', o: ['Vitamina importante na gravidez', 'Hormônio', 'Mineral', 'Proteína'], c: 0 },
            { p: 'Qual a importância do ácido fólico?', o: ['Previne malformações', 'Apenas vitaminas', 'Nenhuma', 'Apenas para a mãe'], c: 0 },
            { p: 'O que é gravidez de gêmeos?', o: ['Dois fetos no útero', 'Um feto', 'Três fetos', 'Nenhum'], c: 0 },
            { p: 'O que é gravidez de trigêmeos?', o: ['Três fetos no útero', 'Dois fetos', 'Um feto', 'Nenhum'], c: 0 },
            { p: 'O que é gravidez gemelar?', o: ['Dois ou mais fetos', 'Um feto', 'Três fetos', 'Nenhum'], c: 0 },
            { p: 'O que é gêmeos idênticos?', o: ['Mesmo óvulo fecundado', 'Óvulos diferentes', 'Mesmo espermatozoide', 'Nenhum'], c: 0 },
            { p: 'O que é gêmeos fraternos?', o: ['Óvulos diferentes', 'Mesmo óvulo', 'Mesmo espermatozoide', 'Nenhum'], c: 0 },
            { p: 'O que é gravidez ectópica?', o: ['Embrião fora do útero', 'Embrião no útero', 'Gravidez normal', 'Gravidez de gêmeos'], c: 0 },
            { p: 'Onde geralmente ocorre a gravidez ectópica?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'O que é gravidez?', o: ['Período de desenvolvimento do feto no útero', 'Período de menstruação', 'Período de ovulação', 'Período de amamentação'], c: 0 },
            { p: 'Quanto tempo dura a gravidez humana?', o: ['Cerca de 40 semanas', '20 semanas', '60 semanas', '10 semanas'], c: 0 },
            { p: 'Quanto tempo dura a gravidez em meses?', o: ['9 meses', '6 meses', '12 meses', '3 meses'], c: 0 },
            { p: 'O que é zigoto?', o: ['Óvulo fecundado', 'Óvulo', 'Espermatozoide', 'Embrião'], c: 0 },
            { p: 'O que é mórula?', o: ['Fase de divisões celulares', 'Óvulo fecundado', 'Feto', 'Bebê'], c: 0 },
            { p: 'O que é blástula?', o: ['Esfera oca de células', 'Óvulo', 'Espermatozoide', 'Feto'], c: 0 },
            { p: 'O que é nidação?', o: ['Fixação do embrião no útero', 'Fecundação', 'Ovulação', 'Menstruação'], c: 0 },
            { p: 'Onde ocorre a nidação?', o: ['No útero', 'Na tuba uterina', 'No ovário', 'Na vagina'], c: 0 },
            { p: 'O que é embrião?', o: ['Fase inicial do desenvolvimento', 'Feto', 'Bebê', 'Óvulo'], c: 0 },
            { p: 'O que é feto?', o: ['Fase após 9 semanas', 'Fase inicial', 'Óvulo', 'Espermatozoide'], c: 0 },
            { p: 'A partir de quantas semanas é chamado de feto?', o: ['9 semanas', '1 semana', '20 semanas', '40 semanas'], c: 0 },
            { p: 'O que é gestação?', o: ['Período de desenvolvimento do bebê', 'Menstruação', 'Ovulação', 'Fecundação'], c: 0 },
            { p: 'O que é gravidez ectópica?', o: ['Embrião fora do útero', 'Embrião no útero', 'Gravidez normal', 'Gravidez de gêmeos'], c: 0 },
            { p: 'Onde geralmente ocorre a gravidez ectópica?', o: ['Tubas uterinas', 'Útero', 'Ovário', 'Vagina'], c: 0 },
            { p: 'A gravidez ectópica é perigosa?', o: ['Sim, é emergência médica', 'Não', 'Um pouco', 'Nunca'], c: 0 },
            { p: 'Quais os sintomas da gravidez ectópica?', o: ['Dor abdominal e sangramento', 'Náusea apenas', 'Febre apenas', 'Nenhum'], c: 0 },
            { p: 'O que é placenta?', o: ['Órgão que nutre o feto', 'Órgão do bebê', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Qual a função da placenta?', o: ['Nutrir e oxigenar o feto', 'Produzir leite', 'Produzir urina', 'Produzir hormônios apenas'], c: 0 },
            { p: 'O que é cordão umbilical?', o: ['Ligação entre feto e placenta', 'Ligação entre mãe e bebê', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Qual a função do cordão umbilical?', o: ['Levar nutrientes ao feto', 'Produzir leite', 'Produzir urina', 'Produzir hormônios'], c: 0 },
            { p: 'O que é líquido amniótico?', o: ['Líquido que protege o feto', 'Líquido da placenta', 'Sangue', 'Urina'], c: 0 },
            { p: 'Qual a função do líquido amniótico?', o: ['Proteger e amortecer o feto', 'Nutrir o feto', 'Oxigenar o feto', 'Produzir hormônios'], c: 0 },
            { p: 'O que é saco amniótico?', o: ['Bolsa que contém o líquido amniótico', 'Órgão do bebê', 'Hormônio', 'Célula'], c: 0 },
            { p: 'Quando o coração do feto começa a bater?', o: ['4 semanas', '12 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quando os dedos do feto se formam?', o: ['8 semanas', '4 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quando o sexo do bebê é identificável?', o: ['12 semanas', '4 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quando a mãe começa a sentir os movimentos?', o: ['16-20 semanas', '4 semanas', '30 semanas', '40 semanas'], c: 0 },
            { p: 'Quando o cabelo e as unhas do feto aparecem?', o: ['20 semanas', '4 semanas', '30 semanas', '40 semanas'], c: 0 },
            { p: 'Quando os pulmões do feto estão quase prontos?', o: ['28 semanas', '4 semanas', '20 semanas', '40 semanas'], c: 0 },
            { p: 'Quantas semanas tem uma gravidez a termo?', o: ['37-42 semanas', '20-30 semanas', '30-36 semanas', '43-50 semanas'], c: 0 },
            { p: 'O que é parto prematuro?', o: ['Antes de 37 semanas', 'Após 42 semanas', 'Com 40 semanas', 'Com 38 semanas'], c: 0 },
            { p: 'O que é parto normal?', o: ['Pela vagina', 'Por cirurgia', 'Por cesárea', 'Por fórceps'], c: 0 },
            { p: 'O que é cesárea?', o: ['Parto cirúrgico', 'Parto normal', 'Parto natural', 'Parto prematuro'], c: 0 },
            { p: 'O que é pós-parto?', o: ['Período após o nascimento', 'Período antes do parto', 'Período de gravidez', 'Período de amamentação'], c: 0 },
            { p: 'O que é amamentação?', o: ['Alimentar o bebê com leite materno', 'Alimentar o bebê com fórmula', 'Dar água ao bebê', 'Dar comida ao bebê'], c: 0 },
            { p: 'Qual a importância do leite materno?', o: ['Nutre e protege o bebê', 'Apenas mata a sede', 'Apenas alimenta', 'Nenhuma'], c: 0 },
            { p: 'O que é colostro?', o: ['Primeiro leite materno', 'Leite artificial', 'Água', 'Suco'], c: 0 },
            { p: 'O que é ultrassom?', o: ['Exame que mostra o feto', 'Exame de sangue', 'Exame de urina', 'Exame de fezes'], c: 0 },
            { p: 'Qual a importância do pré-natal?', o: ['Acompanhar a gravidez', 'Apenas estética', 'Nenhuma', 'Apenas para a mãe'], c: 0 },
            { p: 'O que é pré-natal?', o: ['Acompanhamento médico da gravidez', 'Exame de sangue', 'Exame de urina', 'Exame de fezes'], c: 0 },
            { p: 'Quantas consultas de pré-natal são recomendadas?', o: ['Pelo menos 6', '1', '2', '3'], c: 0 },
            { p: 'O que é ácido fólico?', o: ['Vitamina importante na gravidez', 'Hormônio', 'Mineral', 'Proteína'], c: 0 },
            { p: 'Qual a importância do ácido fólico?', o: ['Previne malformações', 'Apenas vitaminas', 'Nenhuma', 'Apenas para a mãe'], c: 0 },
            { p: 'O que é gravidez de gêmeos?', o: ['Dois fetos no útero', 'Um feto', 'Três fetos', 'Nenhum'], c: 0 },
            { p: 'O que é gravidez de trigêmeos?', o: ['Três fetos no útero', 'Dois fetos', 'Um feto', 'Nenhum'], c: 0 },
            { p: 'O que é gravidez gemelar?', o: ['Dois ou mais fetos', 'Um feto', 'Três fetos', 'Nenhum'], c: 0 },
            { p: 'O que é gêmeos idênticos?', o: ['Mesmo óvulo fecundado', 'Óvulos diferentes', 'Mesmo espermatozoide', 'Nenhum'], c: 0 },
            { p: 'O que é gêmeos fraternos?', o: ['Óvulos diferentes', 'Mesmo óvulo', 'Mesmo espermatozoide', 'Nenhum'], c: 0 }
        ]
    },

    config: {
        totalPerguntasExpandidas: 800,
        perguntasPorSimulado: 20,
        minPorMateria: 3,
        maxPorMateria: 4
    }
};