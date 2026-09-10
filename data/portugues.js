// ============================================================
// DADOS DA MATÉRIA: PORTUGUÊS - 600 PERGUNTAS BASE
// 8º ano · 3º Bimestre · Gramática e Pontuação
// ============================================================

window.MATERIA_ATUAL = {
    id: 'portugues',
    nome: 'Português',
    subtitulo: '8º ano · 3º Bimestre',
    emoji: '📖',
    descricaoFooter: '🧠 Estude com calma · 600 perguntas disponíveis',

    topicos: [
        // ============================================================
        // TÓPICO 1: ORAÇÕES SUBORDINADAS ADVERBIAIS
        // ============================================================
        {
            id: 'oracoesAdverbiais',
            nome: 'Orações Subordinadas Adverbiais',
            emoji: '🔗',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Adverbial = função de advérbio"</strong><br>
                    <span style="font-size:0.9rem;">Indica circunstância: tempo, causa, condição, fim...</span>
                </div>

                <p><strong>📌 O que é uma oração subordinada adverbial?</strong></p>
                <p>É uma oração que <strong>depende de outra</strong> (a principal) e funciona como um <strong>advérbio</strong>, indicando uma circunstância.</p>

                <div class="exemplo-box">
                    <div class="en">📘 Exemplo:</div>
                    <div class="pt">
                        <em>"<strong>Quando cheguei</strong>, todos saíram."</em><br>
                        → "Quando cheguei" é a oração subordinada adverbial (indica <strong>tempo</strong>)<br>
                        → "todos saíram" é a oração principal
                    </div>
                </div>

                <p><strong>📌 Os 9 tipos de orações adverbiais:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Tipo</th><th>Conjunções</th><th>Ideia</th></tr>
                        <tr><td><strong>Causal</strong></td><td>porque, pois, como, já que</td><td>Causa</td></tr>
                        <tr><td><strong>Condicional</strong></td><td>se, caso, desde que</td><td>Condição</td></tr>
                        <tr><td><strong>Temporal</strong></td><td>quando, enquanto, antes que</td><td>Tempo</td></tr>
                        <tr><td><strong>Final</strong></td><td>para que, a fim de que</td><td>Finalidade</td></tr>
                        <tr><td><strong>Concessiva</strong></td><td>embora, ainda que, mesmo que</td><td>Concessão</td></tr>
                        <tr><td><strong>Comparativa</strong></td><td>como, mais que, menos que</td><td>Comparação</td></tr>
                        <tr><td><strong>Consecutiva</strong></td><td>tão... que, tanto... que</td><td>Consequência</td></tr>
                        <tr><td><strong>Conformativa</strong></td><td>conforme, segundo, como</td><td>Conformidade</td></tr>
                        <tr><td><strong>Proporcional</strong></td><td>à medida que, quanto mais</td><td>Proporção</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"C-C-T-F-C-C-C-C-P"</em><br>
                    <strong>C</strong>ausal · <strong>C</strong>ondicional · <strong>T</strong>emporal · <strong>F</strong>inal · <strong>C</strong>oncessiva · <strong>C</strong>omparativa · <strong>C</strong>onsecutiva · <strong>C</strong>onformativa · <strong>P</strong>roporcional
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Confundir causa com consequência.<br>
                    ❌ <em>"Estudei porque passei" (causa invertida)</em><br>
                    ✅ <em>"Passei porque estudei" (causa = estudei)</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Identificar o tipo de oração adverbial</li>
                    <li>Reconhecer as conjunções</li>
                    <li>Diferenciar causa de consequência</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 2: COLOCAÇÃO PRONOMINAL
        // ============================================================
        {
            id: 'colocacaoPronominal',
            nome: 'Colocação Pronominal',
            emoji: '📌',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Próclise, Ênclise e Mesóclise"</strong><br>
                    <span style="font-size:0.9rem;">Posição do pronome em relação ao verbo</span>
                </div>

                <p><strong>📌 O que é colocação pronominal?</strong></p>
                <p>É a <strong>posição do pronome oblíquo átono</strong> (me, te, se, o, a, lhe, nos, vos) em relação ao verbo.</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Posição</th><th>Onde fica</th><th>Exemplo</th></tr>
                        <tr><td><strong>Próclise</strong></td><td>Antes do verbo</td><td><strong>Me</strong> empresta o livro.</td></tr>
                        <tr><td><strong>Ênclise</strong></td><td>Depois do verbo</td><td>Empresta-<strong>me</strong> o livro.</td></tr>
                        <tr><td><strong>Mesóclise</strong></td><td>No meio do verbo</td><td>Emprestar-<strong>te</strong>-ei o livro.</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong><br>
                    <strong>PRÓ</strong>clise = <strong>PRÓ</strong>ximo (antes)<br>
                    <strong>ÊN</strong>clise = d<strong>EPOIS</strong> (gruda no fim)<br>
                    <strong>MESO</strong>clise = no <strong>MEIO</strong>
                </div>

                <p><strong>📌 Quando usar PRÓCLISE (antes do verbo)?</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li>Com palavras negativas: <em><strong>Não me</strong> disse nada.</em></li>
                    <li>Com advérbios: <em><strong>Sempre me</strong> ajuda.</em></li>
                    <li>Com pronomes relativos: <em>O livro <strong>que me</strong> deu.</em></li>
                    <li>Com conjunções subordinativas: <em><strong>Quando me</strong> viu, sorriu.</em></li>
                    <li>Com gerúndio precedido de "em": <em><strong>Em se</strong> tratando de...</em></li>
                </ul>

                <p><strong>📌 Quando usar ÊNCLISE (depois do verbo)?</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li>No início da frase: <em><strong>Diga-me</strong> a verdade.</em></li>
                    <li>Com verbos no imperativo afirmativo: <em><strong>Ajude-me</strong>!</em></li>
                    <li>Com verbos no infinitivo: <em>É preciso <strong>ajudá-lo</strong>.</em></li>
                    <li>Com verbos no gerúndio sem "em": <em>Ele saiu <strong>cantando-a</strong>.</em></li>
                </ul>

                <p><strong>📌 Quando usar MESÓCLISE (no meio do verbo)?</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li>Com verbos no futuro do presente: <em><strong>Dir-te-ei</strong> a verdade.</em></li>
                    <li>Com verbos no futuro do pretérito: <em><strong>Dir-te-ia</strong> a verdade.</em></li>
                </ul>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Começar frase com pronome (próclise).<br>
                    ❌ <em>Me empresta o livro.</em> (errado na norma culta)<br>
                    ✅ <em>Empresta-me o livro.</em> (correto)
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Identificar próclise, ênclise e mesóclise</li>
                    <li>Regras de cada posição</li>
                    <li>Corrigir frases com colocação errada</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 3: PONTUAÇÃO
        // ============================================================
        {
            id: 'pontuacao',
            nome: 'Pontuação',
            emoji: '❗',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Pontuação muda o sentido da frase"</strong>
                </div>

                <p><strong>📌 Principais sinais de pontuação:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Sinal</th><th>Uso</th><th>Exemplo</th></tr>
                        <tr><td><strong>Ponto (.)</strong></td><td>Fim de frase declarativa</td><td>Eu estudo.</td></tr>
                        <tr><td><strong>Vírgula (,)</strong></td><td>Separar elementos</td><td>Comprei pão, leite e ovos.</td></tr>
                        <tr><td><strong>Ponto e vírgula (;)</strong></td><td>Pausa maior que a vírgula</td><td>Estudei; passei.</td></tr>
                        <tr><td><strong>Dois pontos (:)</strong></td><td>Introduzir fala, lista, explicação</td><td>Ela disse: "Vou viajar."</td></tr>
                        <tr><td><strong>Interrogação (?)</strong></td><td>Pergunta</td><td>Você vem?</td></tr>
                        <tr><td><strong>Exclamação (!)</strong></td><td>Emoção</td><td>Que lindo!</td></tr>
                        <tr><td><strong>Reticências (...)</strong></td><td>Interrupção, dúvida</td><td>Eu pensei que...</td></tr>
                        <tr><td><strong>Aspas (" ")</strong></td><td>Citação, ironia</td><td>Ele disse "sim".</td></tr>
                        <tr><td><strong>Travessão (—)</strong></td><td>Diálogo, aparte</td><td>— Você vem? — perguntou.</td></tr>
                        <tr><td><strong>Parênteses ( )</strong></td><td>Explicação, observação</td><td>Ele (meu amigo) chegou.</td></tr>
                    </table>
                </div>

                <p><strong>📌 Usos da VÍRGULA:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li>Separar itens de uma lista: <em>Comprei arroz, feijão, carne.</em></li>
                    <li>Separar aposto: <em>Pedro, meu amigo, chegou.</em></li>
                    <li>Separar vocativo: <em>Maria, venha aqui!</em></li>
                    <li>Separar orações coordenadas: <em>Estudei, mas não passei.</em></li>
                    <li>Após adjunto adverbial deslocado: <em>Ontem, fui à escola.</em></li>
                </ul>

                <p><strong>📌 Quando NÃO usar vírgula:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li>Entre sujeito e verbo: ❌ <em>O aluno, estudou.</em></li>
                    <li>Entre verbo e complemento: ❌ <em>Ele comprou, um carro.</em></li>
                </ul>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Nunca separe sujeito de verbo, nem verbo de complemento!"</em>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Usar vírgula onde não deve.<br>
                    ❌ <em>Eu, comprei, um livro.</em><br>
                    ✅ <em>Eu comprei um livro.</em>
                </div>

                <p><strong>📣 O que mais cai na prova:</strong></p>
                <ul style="padding-left: 20px;">
                    <li>Usos da vírgula</li>
                    <li>Quando NÃO usar vírgula</li>
                    <li>Diferença entre os sinais de pontuação</li>
                </ul>
            `
        }
    ],

    // ============================================================
    // PERGUNTAS BASE - PARTE 1: ORAÇÕES SUBORDINADAS ADVERBIAIS (200)
    // ============================================================
    perguntasBase: {
        oracoesAdverbiais: [
            { p: 'O que é uma oração subordinada adverbial?', o: ['Oração que funciona como advérbio', 'Oração principal', 'Oração coordenada', 'Oração sem verbo'], c: 0 },
            { p: 'Quantos tipos de orações subordinadas adverbiais existem?', o: ['9', '5', '3', '12'], c: 0 },
            { p: 'Qual conjunção introduz a oração causal?', o: ['Porque', 'Se', 'Quando', 'Embora'], c: 0 },
            { p: 'Qual conjunção introduz a oração condicional?', o: ['Se', 'Porque', 'Quando', 'Para que'], c: 0 },
            { p: 'Qual conjunção introduz a oração temporal?', o: ['Quando', 'Porque', 'Se', 'Embora'], c: 0 },
            { p: 'Qual conjunção introduz a oração final?', o: ['Para que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção introduz a oração concessiva?', o: ['Embora', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção introduz a oração comparativa?', o: ['Como', 'Porque', 'Se', 'Para que'], c: 0 },
            { p: 'Qual conjunção introduz a oração consecutiva?', o: ['Tão... que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção introduz a oração conformativa?', o: ['Conforme', 'Porque', 'Se', 'Embora'], c: 0 },
            { p: 'Qual conjunção introduz a oração proporcional?', o: ['À medida que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Que tipo de oração é: "Porque choveu, não saímos."?', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'Que tipo de oração é: "Se estudar, você passa."?', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'Que tipo de oração é: "Quando cheguei, todos saíram."?', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'Que tipo de oração é: "Estudei para que passasse."?', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Que tipo de oração é: "Embora chova, vou sair."?', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Que tipo de oração é: "Ele é forte como um touro."?', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Que tipo de oração é: "Corri tanto que cansei."?', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Que tipo de oração é: "Conforme combinamos, cheguei cedo."?', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Que tipo de oração é: "Quanto mais estudo, mais aprendo."?', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração causal indica:', o: ['Causa', 'Condição', 'Tempo', 'Fim'], c: 0 },
            { p: 'A oração condicional indica:', o: ['Condição', 'Causa', 'Tempo', 'Fim'], c: 0 },
            { p: 'A oração temporal indica:', o: ['Tempo', 'Causa', 'Condição', 'Fim'], c: 0 },
            { p: 'A oração final indica:', o: ['Finalidade', 'Causa', 'Condição', 'Tempo'], c: 0 },
            { p: 'A oração concessiva indica:', o: ['Concessão', 'Causa', 'Condição', 'Tempo'], c: 0 },
            { p: 'A oração comparativa indica:', o: ['Comparação', 'Causa', 'Condição', 'Tempo'], c: 0 },
            { p: 'A oração consecutiva indica:', o: ['Consequência', 'Causa', 'Condição', 'Tempo'], c: 0 },
            { p: 'A oração conformativa indica:', o: ['Conformidade', 'Causa', 'Condição', 'Tempo'], c: 0 },
            { p: 'A oração proporcional indica:', o: ['Proporção', 'Causa', 'Condição', 'Tempo'], c: 0 },
            { p: 'Qual conjunção é causal?', o: ['Pois', 'Se', 'Quando', 'Embora'], c: 0 },
            { p: 'Qual conjunção é causal?', o: ['Já que', 'Se', 'Quando', 'Para que'], c: 0 },
            { p: 'Qual conjunção é causal?', o: ['Como', 'Se', 'Quando', 'Embora'], c: 0 },
            { p: 'Qual conjunção é condicional?', o: ['Caso', 'Porque', 'Quando', 'Embora'], c: 0 },
            { p: 'Qual conjunção é condicional?', o: ['Desde que', 'Porque', 'Quando', 'Para que'], c: 0 },
            { p: 'Qual conjunção é temporal?', o: ['Enquanto', 'Porque', 'Se', 'Embora'], c: 0 },
            { p: 'Qual conjunção é temporal?', o: ['Antes que', 'Porque', 'Se', 'Para que'], c: 0 },
            { p: 'Qual conjunção é temporal?', o: ['Depois que', 'Porque', 'Se', 'Embora'], c: 0 },
            { p: 'Qual conjunção é final?', o: ['A fim de que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é concessiva?', o: ['Ainda que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é concessiva?', o: ['Mesmo que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é comparativa?', o: ['Mais que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é comparativa?', o: ['Menos que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é consecutiva?', o: ['Tanto... que', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é conformativa?', o: ['Segundo', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Qual conjunção é proporcional?', o: ['Quanto mais', 'Porque', 'Se', 'Quando'], c: 0 },
            { p: 'Na frase "Como choveu, não fomos à praia", a oração é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'Na frase "Caso você venha, avise", a oração é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'Na frase "Enquanto estudo, ouço música", a oração é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'Na frase "Estudei para que fosse aprovado", a oração é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Na frase "Ainda que chova, vou sair", a oração é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Na frase "Ele é tão alto quanto o pai", a oração é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Na frase "Falei tanto que fiquei rouco", a oração é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Na frase "Conforme o professor disse, a prova é fácil", a oração é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'Na frase "À medida que envelheço, aprendo mais", a oração é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'O que é uma oração principal?', o: ['Oração que não depende de outra', 'Oração subordinada', 'Oração sem verbo', 'Oração coordenada'], c: 0 },
            { p: 'O que é uma oração subordinada?', o: ['Oração que depende da principal', 'Oração independente', 'Oração sem verbo', 'Oração coordenada'], c: 0 },
            { p: 'Qual a diferença entre causa e consequência?', o: ['Causa vem antes; consequência depois', 'São iguais', 'Causa é depois; consequência antes', 'Nenhuma'], c: 0 },
            { p: 'Na frase "Passei porque estudei", a causa é:', o: ['Estudei', 'Passei', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Na frase "Passei porque estudei", a consequência é:', o: ['Passei', 'Estudei', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Na frase "Não saí porque chovia", a causa é:', o: ['Chovia', 'Não saí', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'Na frase "Não saí porque chovia", a consequência é:', o: ['Não saí', 'Chovia', 'Ambas', 'Nenhuma'], c: 0 },
            { p: 'A oração "se estudar" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que eu passe" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "embora esteja cansado" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como você disse" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "quanto mais corre" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão forte que quebrou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mais alto que o irmão" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "quando ele chegou" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "porque estava doente" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "se você quiser" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a fim de que todos entendam" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mesmo que você não queira" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "segundo o livro" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "à proporção que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de modo que todos viram" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tal qual o pai" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "assim que chegou" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "visto que não estudou" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a menos que chova" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que todos vejam" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "por mais que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "consoante a lei" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "ao passo que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de tal forma que quebrou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como se fosse um rei" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "logo que saiu" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "posto que seja difícil" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "salvo se houver acordo" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "com o fim de que aprenda" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "se bem que seja tarde" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de acordo com o combinado" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "enquanto mais estuda" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de maneira que todos viram" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "que nem um passarinho" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "antes que seja tarde" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "dado que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "contanto que estude" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a fim de que todos saibam" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "por muito que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "conforme o combinado" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "à medida que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de modo que quebrou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "feito um leão" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mal chegou" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "uma vez que não estudou" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a não ser que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que não se esqueça" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "ainda quando tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como manda a lei" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "quanto mais se esforça" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão rápido que venceu" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como um herói" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "depois que saiu" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "porquanto não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "desde que estude" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "com o intuito de que aprenda" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "nem que me implore" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "conforme diz o ditado" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "na medida em que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de forma que quebrou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tal como o pai" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "sempre que chega" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "por isso que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "supondo que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que todos ouçam" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mesmo quando tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "segundo dizem" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "à proporção que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão grande que assustou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "igual a um anjo" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "todas as vezes que vem" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "por causa de que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a menos que chova" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que não falte" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mesmo que doa" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como consta no documento" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "quanto mais corre" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão forte que venceu" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como um rei" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "cada vez que vem" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "como não estudou" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "caso venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a fim de que passe" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "por mais que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "conforme o professor" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "ao passo que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de modo que assustou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "que nem um anjo" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "apenas chegou" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "visto que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "desde que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que não se perca" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "nem que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como disse o mestre" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "enquanto mais corre" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão rápido que ganhou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "feito um rei" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "sempre que vem" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "porquanto não estudou" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "contanto que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que todos vejam" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "se bem que seja difícil" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de acordo com a lei" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "à medida que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de tal modo que venceu" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tal qual o mestre" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "logo que saiu" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "dado que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "salvo se houver" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "com o fim de que saiba" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "por muito que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "conforme o combinado" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "quanto mais estuda" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão grande que quebrou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como um anjo" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "antes que saia" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "uma vez que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a não ser que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que não se esqueça" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "ainda quando tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como manda a lei" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "ao passo que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de modo que venceu" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "igual a um rei" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "depois que saiu" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "por causa de que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "supondo que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "com o intuito de que passe" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "nem que me implore" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "conforme diz o ditado" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "na medida em que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de forma que quebrou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tal como o pai" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "sempre que chega" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "por isso que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "desde que estude" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que todos ouçam" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mesmo quando tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "segundo dizem" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "à proporção que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão grande que assustou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "igual a um anjo" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "todas as vezes que vem" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "por causa de que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a menos que chova" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que não falte" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "mesmo que doa" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como consta no documento" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "quanto mais corre" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "tão forte que venceu" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como um rei" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "cada vez que vem" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "como não estudou" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "caso venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "a fim de que passe" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "por mais que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "conforme o professor" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "ao passo que cresce" é:', o: ['Proporcional', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "de modo que assustou" é:', o: ['Consecutiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "que nem um anjo" é:', o: ['Comparativa', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "apenas chegou" é:', o: ['Temporal', 'Causal', 'Condicional', 'Final'], c: 0 },
            { p: 'A oração "visto que não veio" é:', o: ['Causal', 'Condicional', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "desde que venha" é:', o: ['Condicional', 'Causal', 'Temporal', 'Final'], c: 0 },
            { p: 'A oração "para que não se perca" é:', o: ['Final', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "nem que tente" é:', o: ['Concessiva', 'Causal', 'Condicional', 'Temporal'], c: 0 },
            { p: 'A oração "como disse o mestre" é:', o: ['Conformativa', 'Causal', 'Condicional', 'Temporal'], c: 0 }
        ],
        colocacaoPronominal: [
            { p: 'O que é colocação pronominal?', o: ['Posição do pronome em relação ao verbo', 'Posição do verbo na frase', 'Posição do sujeito', 'Posição do adjetivo'], c: 0 },
            { p: 'Quais são os pronomes oblíquos átonos?', o: ['me, te, se, o, a, lhe, nos, vos', 'eu, tu, ele, nós', 'meu, teu, seu', 'este, esse, aquele'], c: 0 },
            { p: 'O que é próclise?', o: ['Pronome antes do verbo', 'Pronome depois do verbo', 'Pronome no meio do verbo', 'Pronome sem verbo'], c: 0 },
            { p: 'O que é ênclise?', o: ['Pronome depois do verbo', 'Pronome antes do verbo', 'Pronome no meio do verbo', 'Pronome sem verbo'], c: 0 },
            { p: 'O que é mesóclise?', o: ['Pronome no meio do verbo', 'Pronome antes do verbo', 'Pronome depois do verbo', 'Pronome sem verbo'], c: 0 },
            { p: 'Como se escreve "me" antes do verbo?', o: ['Me empresta o livro.', 'Empresta-me o livro.', 'Emprestar-me-ei o livro.', 'Emprestarei-me o livro.'], c: 0 },
            { p: 'Como se escreve "me" depois do verbo?', o: ['Empresta-me o livro.', 'Me empresta o livro.', 'Emprestar-me-ei o livro.', 'Emprestarei-me o livro.'], c: 0 },
            { p: 'Como se escreve "me" no meio do verbo?', o: ['Emprestar-me-ei o livro.', 'Me emprestará o livro.', 'Empresta-me o livro.', 'Emprestarei-me o livro.'], c: 0 },
            { p: 'Qual é a posição correta no início da frase?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta com palavra negativa?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta com advérbio antes do verbo?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta com conjunção subordinativa?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta com pronome relativo?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta no imperativo afirmativo?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta no infinitivo?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta no gerúndio sem "em"?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta no futuro do presente?', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a posição correta no futuro do pretérito?', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não me disse nada", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sempre me ajuda", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Quando me viu, sorriu", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Diga-me a verdade", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Empresta-me o livro", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Dir-te-ei a verdade", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Dir-te-ia a verdade", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "O livro que me deu", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Ajude-me", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "É preciso ajudá-lo", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Ele saiu cantando-a", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não te preocupes", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Aqui se faz, aqui se paga", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Contar-lhe-ei tudo", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Contei-lhe tudo", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Jamais me esquecerei", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Talvez se arrependa", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Aqui se trabalha muito", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Todos o aplaudiram", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Deus te abençoe", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Bendito seja o que me ajuda", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não me venha com desculpas", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Assim se resolve o problema", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Diga-se de passagem", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Vão-se os anéis, ficam os dedos", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Ninguém me disse nada", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Faça-me o favor", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Contar-te-ei a verdade", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sempre te amarei", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Levante-se", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não se preocupe", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Quando te vi, sorri", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Escreve-me uma carta", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Dir-lhe-ei a verdade", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "O aluno que se destacou", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sente-se, por favor", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Nunca me disse nada", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Todos se levantaram", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Calar-me-ei", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Falar-te-ei amanhã", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Nada me faz desistir", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Vá-se embora", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Empresta-me o livro.', 'Me empresta o livro.', 'Emprestar-me-ei o livro.', 'Emprestarei-me o livro.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Não me disse nada.', 'Não disse-me nada.', 'Não dizer-me-á nada.', 'Não dizerá-me nada.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Diga-me a verdade.', 'Me diga a verdade.', 'Dir-me-ei a verdade.', 'Direi-me a verdade.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Dir-te-ei a verdade.', 'Te direi a verdade.', 'Direi-te a verdade.', 'Dir-te-ia a verdade.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Sempre me ajuda.', 'Sempre ajuda-me.', 'Sempre ajudar-me-á.', 'Sempre ajudará-me.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Quando me viu, sorriu.', 'Quando viu-me, sorriu.', 'Quando ver-me-á, sorriu.', 'Quando verá-me, sorriu.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Ajude-me!', 'Me ajude!', 'Ajudar-me-ei!', 'Ajudarei-me!'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['É preciso ajudá-lo.', 'É preciso o ajudar.', 'É preciso ajudá-lo-ei.', 'É preciso ajudarei-o.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['O livro que me deu é bom.', 'O livro que deu-me é bom.', 'O livro que dar-me-á é bom.', 'O livro que dará-me é bom.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Nunca te esquecerei.', 'Nunca esquecer-te-ei.', 'Nunca esquecer-te-ei.', 'Nunca esquecer-te-ei.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Falar-te-ei amanhã.', 'Te falarei amanhã.', 'Falarei-te amanhã.', 'Falar-te-ia amanhã.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Calar-me-ei.', 'Me calarei.', 'Calarei-me.', 'Calar-me-ia.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Nada me faz desistir.', 'Nada faz-me desistir.', 'Nada fazer-me-á desistir.', 'Nada fará-me desistir.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Levante-se.', 'Se levante.', 'Levantar-se-á.', 'Levantará-se.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Não se preocupe.', 'Não preocupe-se.', 'Não preocupar-se-á.', 'Não preocupará-se.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Sente-se, por favor.', 'Se sente, por favor.', 'Sentar-se-á, por favor.', 'Sentará-se, por favor.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Deus te abençoe.', 'Deus abençoe-te.', 'Deus abençoar-te-á.', 'Deus abençoará-te.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Todos o aplaudiram.', 'Todos aplaudiram-o.', 'Todos aplaudir-lhe-ão.', 'Todos aplaudirão-o.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Aqui se trabalha muito.', 'Aqui trabalha-se muito.', 'Aqui trabalhar-se-á muito.', 'Aqui trabalhará-se muito.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Vão-se os anéis, ficam os dedos.', 'Vão os anéis-se, ficam os dedos.', 'Ir-se-ão os anéis, ficam os dedos.', 'Irão-se os anéis, ficam os dedos.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Ninguém me disse nada.', 'Ninguém disse-me nada.', 'Ninguém dizer-me-á nada.', 'Ninguém dirá-me nada.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Faça-me o favor.', 'Me faça o favor.', 'Fazer-me-á o favor.', 'Fará-me o favor.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Contar-te-ei a verdade.', 'Te contarei a verdade.', 'Contarei-te a verdade.', 'Contar-te-ia a verdade.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Sempre te amarei.', 'Sempre amar-te-ei.', 'Sempre amar-te-ei.', 'Sempre amar-te-ei.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Escreve-me uma carta.', 'Me escreve uma carta.', 'Escrever-me-á uma carta.', 'Escreverá-me uma carta.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Todos se levantaram.', 'Todos levantaram-se.', 'Todos levantar-se-ão.', 'Todos levantarão-se.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['O aluno que se destacou.', 'O aluno que destacou-se.', 'O aluno que destacar-se-á.', 'O aluno que destacará-se.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Me empresta o livro.', 'Empresta-me o livro.', 'Não me empresta o livro.', 'Empresta-me o livro, por favor.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Não disse-me nada.', 'Não me disse nada.', 'Nada me disse.', 'Nunca me disse nada.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Me diga a verdade.', 'Diga-me a verdade.', 'Não me diga a verdade.', 'Diga-me a verdade, por favor.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Te direi a verdade.', 'Dir-te-ei a verdade.', 'Não te direi a verdade.', 'Nunca te direi a verdade.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Sempre ajuda-me.', 'Sempre me ajuda.', 'Nunca me ajuda.', 'Sempre me ajudou.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Quando viu-me, sorriu.', 'Quando me viu, sorriu.', 'Quando me viu, não sorriu.', 'Sempre me viu sorrindo.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Me ajude!', 'Ajude-me!', 'Não me ajude!', 'Ajude-me, por favor!'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['É preciso o ajudar.', 'É preciso ajudá-lo.', 'Não é preciso ajudá-lo.', 'É preciso ajudá-lo sempre.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['O livro que deu-me é bom.', 'O livro que me deu é bom.', 'O livro que me deu não é bom.', 'O livro que me deu é ótimo.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Nunca esquecer-te-ei.', 'Nunca te esquecerei.', 'Nunca te esquecerei.', 'Nunca te esquecerei.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Te falarei amanhã.', 'Falar-te-ei amanhã.', 'Não te falarei amanhã.', 'Nunca te falarei amanhã.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Me calarei.', 'Calar-me-ei.', 'Não me calarei.', 'Nunca me calarei.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Nada faz-me desistir.', 'Nada me faz desistir.', 'Nada me fará desistir.', 'Nunca me fará desistir.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Se levante.', 'Levante-se.', 'Não se levante.', 'Levante-se, por favor.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Não preocupe-se.', 'Não se preocupe.', 'Nunca se preocupe.', 'Não se preocupe com isso.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Se sente, por favor.', 'Sente-se, por favor.', 'Não se sente, por favor.', 'Sente-se, por gentileza.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Deus abençoe-te.', 'Deus te abençoe.', 'Deus te abençoará.', 'Que Deus te abençoe.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Todos aplaudiram-o.', 'Todos o aplaudiram.', 'Todos o aplaudirão.', 'Todos o aplaudem.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Aqui trabalha-se muito.', 'Aqui se trabalha muito.', 'Aqui se trabalha pouco.', 'Aqui se trabalha bem.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Vão os anéis-se, ficam os dedos.', 'Vão-se os anéis, ficam os dedos.', 'Vão-se os anéis.', 'Ficam os dedos.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Ninguém disse-me nada.', 'Ninguém me disse nada.', 'Ninguém me dirá nada.', 'Ninguém me diz nada.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Me faça o favor.', 'Faça-me o favor.', 'Não me faça o favor.', 'Faça-me o favor, por favor.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Te contarei a verdade.', 'Contar-te-ei a verdade.', 'Não te contarei a verdade.', 'Nunca te contarei a verdade.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Sempre amar-te-ei.', 'Sempre te amarei.', 'Nunca te amarei.', 'Sempre te amei.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Me escreve uma carta.', 'Escreve-me uma carta.', 'Não me escreve uma carta.', 'Escreve-me uma carta, por favor.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Todos levantaram-se.', 'Todos se levantaram.', 'Todos se levantarão.', 'Todos se levantam.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['O aluno que destacou-se.', 'O aluno que se destacou.', 'O aluno que se destacará.', 'O aluno que se destaca.'], c: 0 },
            { p: 'Em "Não me venha com desculpas", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Assim se resolve o problema", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Diga-se de passagem", qual é a posição do pronome?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Ninguém me disse nada", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Faça-me o favor", qual é a posição do pronome?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Contar-te-ei a verdade", qual é a posição do pronome?', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sempre te amarei", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Levante-se", qual é a posição do pronome?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não se preocupe", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Quando te vi, sorri", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Escreve-me uma carta", qual é a posição do pronome?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Dir-lhe-ei a verdade", qual é a posição do pronome?', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "O aluno que se destacou", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sente-se, por favor", qual é a posição do pronome?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Nunca me disse nada", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Todos se levantaram", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Calar-me-ei", qual é a posição do pronome?', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Falar-te-ei amanhã", qual é a posição do pronome?', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Nada me faz desistir", qual é a posição do pronome?', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Vá-se embora", qual é a posição do pronome?', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual pronome é usado para a 1ª pessoa do singular?', o: ['me', 'te', 'se', 'lhe'], c: 0 },
            { p: 'Qual pronome é usado para a 2ª pessoa do singular?', o: ['te', 'me', 'se', 'lhe'], c: 0 },
            { p: 'Qual pronome é usado para a 3ª pessoa do singular?', o: ['se, o, a, lhe', 'me, te', 'nos, vos', 'eu, tu'], c: 0 },
            { p: 'Qual pronome é usado para a 1ª pessoa do plural?', o: ['nos', 'vos', 'se', 'lhe'], c: 0 },
            { p: 'Qual pronome é usado para a 2ª pessoa do plural?', o: ['vos', 'nos', 'se', 'lhe'], c: 0 },
            { p: 'Em "Dê-me o livro", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não lhe direi nada", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Dir-lhe-ei tudo", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Contei-lhe a verdade", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Jamais te esquecerei", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Talvez se arrependa", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Aqui se trabalha muito", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Todos o aplaudiram", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Deus te abençoe", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Bendito seja o que me ajuda", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não me venha com desculpas", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Assim se resolve o problema", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Diga-se de passagem", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Vão-se os anéis, ficam os dedos", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Ninguém me disse nada", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Faça-me o favor", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Contar-te-ei a verdade", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sempre te amarei", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Levante-se", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Não se preocupe", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Quando te vi, sorri", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Escreve-me uma carta", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Dir-lhe-ei a verdade", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "O aluno que se destacou", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Sente-se, por favor", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Nunca me disse nada", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Todos se levantaram", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Calar-me-ei", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Falar-te-ei amanhã", a colocação é:', o: ['Mesóclise', 'Próclise', 'Ênclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Nada me faz desistir", a colocação é:', o: ['Próclise', 'Ênclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Em "Vá-se embora", a colocação é:', o: ['Ênclise', 'Próclise', 'Mesóclise', 'Nenhuma'], c: 0 },
            { p: 'Qual é a regra para usar próclise?', o: ['Palavra atrativa antes do verbo', 'Verbo no início da frase', 'Verbo no futuro', 'Verbo no imperativo'], c: 0 },
            { p: 'Qual é a regra para usar ênclise?', o: ['Verbo no início da frase', 'Palavra negativa antes', 'Verbo no futuro', 'Advérbio antes'], c: 0 },
            { p: 'Qual é a regra para usar mesóclise?', o: ['Verbo no futuro do presente ou pretérito', 'Verbo no presente', 'Verbo no passado', 'Verbo no imperativo'], c: 0 },
            { p: 'O que é palavra atrativa?', o: ['Palavra que atrai o pronome para antes do verbo', 'Palavra que repele o pronome', 'Palavra que não influencia', 'Palavra sem função'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Não', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Sempre', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Nunca', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Quando', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Que', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Se', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Embora', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Conforme', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Qual é uma palavra atrativa?', o: ['Porque', 'Sim', 'Talvez', 'Aqui'], c: 0 },
            { p: 'Em "Nada me faz desistir", a palavra atrativa é:', o: ['Nada', 'Me', 'Faz', 'Desistir'], c: 0 },
            { p: 'Em "Nunca te esquecerei", a palavra atrativa é:', o: ['Nunca', 'Te', 'Esquecerei', 'Nenhuma'], c: 0 },
            { p: 'Em "Quando me viu, sorriu", a palavra atrativa é:', o: ['Quando', 'Me', 'Viu', 'Sorriu'], c: 0 },
            { p: 'Em "O livro que me deu", a palavra atrativa é:', o: ['Que', 'Me', 'Deu', 'Livro'], c: 0 },
            { p: 'Em "Não me disse nada", a palavra atrativa é:', o: ['Não', 'Me', 'Disse', 'Nada'], c: 0 },
            { p: 'Em "Sempre me ajuda", a palavra atrativa é:', o: ['Sempre', 'Me', 'Ajuda', 'Nenhuma'], c: 0 },
            { p: 'Em "Talvez se arrependa", a palavra atrativa é:', o: ['Talvez', 'Se', 'Arrependa', 'Nenhuma'], c: 0 }
        ],
        pontuacao: [
            { p: 'O que é pontuação?', o: ['Uso de sinais para organizar o texto', 'Uso de letras maiúsculas', 'Uso de acentos', 'Uso de vírgulas apenas'], c: 0 },
            { p: 'Qual sinal indica o fim de uma frase declarativa?', o: ['Ponto final (.)', 'Vírgula (,)', 'Interrogação (?)', 'Exclamação (!)'], c: 0 },
            { p: 'Qual sinal indica uma pergunta?', o: ['Interrogação (?)', 'Ponto final (.)', 'Vírgula (,)', 'Exclamação (!)'], c: 0 },
            { p: 'Qual sinal indica emoção?', o: ['Exclamação (!)', 'Ponto final (.)', 'Vírgula (,)', 'Interrogação (?)'], c: 0 },
            { p: 'Qual sinal separa itens de uma lista?', o: ['Vírgula (,)', 'Ponto final (.)', 'Interrogação (?)', 'Exclamação (!)'], c: 0 },
            { p: 'Qual sinal introduz uma fala?', o: ['Dois pontos (:)', 'Vírgula (,)', 'Ponto final (.)', 'Interrogação (?)'], c: 0 },
            { p: 'Qual sinal indica uma pausa maior que a vírgula?', o: ['Ponto e vírgula (;)', 'Ponto final (.)', 'Interrogação (?)', 'Exclamação (!)'], c: 0 },
            { p: 'Qual sinal indica interrupção ou dúvida?', o: ['Reticências (...)', 'Ponto final (.)', 'Vírgula (,)', 'Interrogação (?)'], c: 0 },
            { p: 'Qual sinal indica citação?', o: ['Aspas (" ")', 'Parênteses ( )', 'Travessão (—)', 'Vírgula (,)'], c: 0 },
            { p: 'Qual sinal indica diálogo?', o: ['Travessão (—)', 'Aspas (" ")', 'Parênteses ( )', 'Vírgula (,)'], c: 0 },
            { p: 'Qual sinal indica explicação ou observação?', o: ['Parênteses ( )', 'Aspas (" ")', 'Travessão (—)', 'Vírgula (,)'], c: 0 },
            { p: 'Quando usar a vírgula?', o: ['Para separar elementos de uma lista', 'Entre sujeito e verbo', 'Entre verbo e complemento', 'No fim da frase'], c: 0 },
            { p: 'Quando usar a vírgula?', o: ['Para separar o aposto', 'Entre sujeito e verbo', 'Entre verbo e complemento', 'No fim da frase'], c: 0 },
            { p: 'Quando usar a vírgula?', o: ['Para separar o vocativo', 'Entre sujeito e verbo', 'Entre verbo e complemento', 'No fim da frase'], c: 0 },
            { p: 'Quando usar a vírgula?', o: ['Para separar orações coordenadas', 'Entre sujeito e verbo', 'Entre verbo e complemento', 'No fim da frase'], c: 0 },
            { p: 'Quando usar a vírgula?', o: ['Após adjunto adverbial deslocado', 'Entre sujeito e verbo', 'Entre verbo e complemento', 'No fim da frase'], c: 0 },
            { p: 'Quando NÃO usar a vírgula?', o: ['Entre sujeito e verbo', 'Para separar itens de lista', 'Para separar aposto', 'Para separar vocativo'], c: 0 },
            { p: 'Quando NÃO usar a vírgula?', o: ['Entre verbo e complemento', 'Para separar itens de lista', 'Para separar aposto', 'Para separar vocativo'], c: 0 },
            { p: 'Qual é o vocativo em "Maria, venha aqui!"?', o: ['Maria', 'Venha', 'Aqui', 'Nenhum'], c: 0 },
            { p: 'Qual é o aposto em "Pedro, meu amigo, chegou."?', o: ['meu amigo', 'Pedro', 'Chegou', 'Nenhum'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Comprei pão, leite e ovos.', 'Comprei, pão, leite e ovos.', 'Comprei pão leite e ovos.', 'Comprei pão; leite e ovos.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Pedro, meu amigo, chegou.', 'Pedro meu amigo, chegou.', 'Pedro, meu amigo chegou.', 'Pedro meu amigo chegou.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Maria, venha aqui!', 'Maria venha aqui!', 'Maria, venha, aqui!', 'Maria venha, aqui!'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Estudei, mas não passei.', 'Estudei mas, não passei.', 'Estudei mas não, passei.', 'Estudei, mas não, passei.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Ontem, fui à escola.', 'Ontem fui, à escola.', 'Ontem, fui, à escola.', 'Ontem fui à escola.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['Eu comprei um livro.', 'Eu, comprei um livro.', 'Eu comprei, um livro.', 'Eu, comprei, um livro.'], c: 0 },
            { p: 'Qual frase está CORRETA?', o: ['O aluno estudou muito.', 'O aluno, estudou muito.', 'O aluno estudou, muito.', 'O aluno, estudou, muito.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Eu, comprei, um livro.', 'Eu comprei um livro.', 'Comprei um livro ontem.', 'Ontem comprei um livro.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['O aluno, estudou muito.', 'O aluno estudou muito.', 'O aluno estudou ontem.', 'Ontem o aluno estudou.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Comprei, pão, leite e ovos.', 'Comprei pão, leite e ovos.', 'Comprei pão e leite.', 'Comprei leite e ovos.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Pedro, meu amigo chegou.', 'Pedro, meu amigo, chegou.', 'Pedro, meu amigo, chegou ontem.', 'Meu amigo Pedro chegou.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Maria venha, aqui!', 'Maria, venha aqui!', 'Maria, venha aqui, por favor!', 'Venha aqui, Maria!'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Estudei mas, não passei.', 'Estudei, mas não passei.', 'Estudei, mas não passei ontem.', 'Não passei, mas estudei.'], c: 0 },
            { p: 'Qual frase está INCORRETA?', o: ['Ontem fui, à escola.', 'Ontem, fui à escola.', 'Ontem fui à escola.', 'Fui à escola ontem.'], c: 0 },
            { p: 'Em "Ela disse: Vou viajar", o sinal usado é:', o: ['Dois pontos', 'Vírgula', 'Ponto final', 'Ponto e vírgula'], c: 0 },
            { p: 'Em "Que lindo!", o sinal usado é:', o: ['Exclamação', 'Interrogação', 'Ponto final', 'Vírgula'], c: 0 },
            { p: 'Em "Você vem?", o sinal usado é:', o: ['Interrogação', 'Exclamação', 'Ponto final', 'Vírgula'], c: 0 },
            { p: 'Em "Eu pensei que...", o sinal usado é:', o: ['Reticências', 'Ponto final', 'Vírgula', 'Interrogação'], c: 0 },
            { p: 'Em "Ele disse "sim"", o sinal usado é:', o: ['Aspas', 'Parênteses', 'Travessão', 'Vírgula'], c: 0 },
            { p: 'Em "— Você vem? — perguntou", o sinal usado é:', o: ['Travessão', 'Aspas', 'Parênteses', 'Vírgula'], c: 0 },
            { p: 'Em "Ele (meu amigo) chegou", o sinal usado é:', o: ['Parênteses', 'Aspas', 'Travessão', 'Vírgula'], c: 0 },
            { p: 'Em "Estudei; passei", o sinal usado é:', o: ['Ponto e vírgula', 'Vírgula', 'Ponto final', 'Dois pontos'], c: 0 },
            { p: 'Em "Comprei arroz, feijão, carne", os sinais usados são:', o: ['Vírgulas', 'Pontos finais', 'Interrogações', 'Exclamações'], c: 0 },
            { p: 'Em "Pedro, meu amigo, chegou", os sinais usados são:', o: ['Vírgulas', 'Pontos finais', 'Interrogações', 'Exclamações'], c: 0 },
            { p: 'Em "Maria, venha aqui!", os sinais usados são:', o: ['Vírgula e exclamação', 'Vírgula e interrogação', 'Ponto final', 'Dois pontos'], c: 0 },
            { p: 'Em "Estudei, mas não passei", o sinal usado é:', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Em "Ontem, fui à escola", o sinal usado é:', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Quantas vírgulas tem "Pedro, meu amigo, chegou"?', o: ['2', '1', '3', '0'], c: 0 },
            { p: 'Quantas vírgulas tem "Comprei pão, leite e ovos"?', o: ['1', '2', '3', '0'], c: 0 },
            { p: 'Quantas vírgulas tem "Maria, venha aqui"?', o: ['1', '2', '3', '0'], c: 0 },
            { p: 'Quantas vírgulas tem "Estudei, mas não passei"?', o: ['1', '2', '3', '0'], c: 0 },
            { p: 'Quantas vírgulas tem "Ontem, fui à escola"?', o: ['1', '2', '3', '0'], c: 0 },
            { p: 'Qual a função dos dois pontos?', o: ['Introduzir fala, lista ou explicação', 'Separar itens', 'Indicar pergunta', 'Indicar emoção'], c: 0 },
            { p: 'Qual a função do ponto e vírgula?', o: ['Indicar pausa maior que a vírgula', 'Indicar pergunta', 'Indicar emoção', 'Indicar citação'], c: 0 },
            { p: 'Qual a função das reticências?', o: ['Indicar interrupção ou dúvida', 'Indicar pergunta', 'Indicar emoção', 'Indicar citação'], c: 0 },
            { p: 'Qual a função das aspas?', o: ['Indicar citação ou ironia', 'Indicar pergunta', 'Indicar emoção', 'Indicar pausa'], c: 0 },
            { p: 'Qual a função do travessão?', o: ['Indicar diálogo ou aparte', 'Indicar pergunta', 'Indicar emoção', 'Indicar pausa'], c: 0 },
            { p: 'Qual a função dos parênteses?', o: ['Indicar explicação ou observação', 'Indicar pergunta', 'Indicar emoção', 'Indicar pausa'], c: 0 },
            { p: 'Quando usar ponto final?', o: ['No fim de frase declarativa', 'No meio da frase', 'No início da frase', 'Nunca'], c: 0 },
            { p: 'Quando usar interrogação?', o: ['Em perguntas', 'Em afirmações', 'Em exclamações', 'Nunca'], c: 0 },
            { p: 'Quando usar exclamação?', o: ['Em emoções', 'Em perguntas', 'Em afirmações', 'Nunca'], c: 0 },
            { p: 'Quando usar dois pontos?', o: ['Para introduzir fala ou lista', 'Para separar itens', 'Para indicar pergunta', 'Para indicar emoção'], c: 0 },
            { p: 'Quando usar reticências?', o: ['Para indicar interrupção ou dúvida', 'Para indicar pergunta', 'Para indicar emoção', 'Para indicar citação'], c: 0 },
            { p: 'Quando usar aspas?', o: ['Para indicar citação ou ironia', 'Para indicar pergunta', 'Para indicar emoção', 'Para indicar pausa'], c: 0 },
            { p: 'Quando usar travessão?', o: ['Para indicar diálogo ou aparte', 'Para indicar pergunta', 'Para indicar emoção', 'Para indicar pausa'], c: 0 },
            { p: 'Quando usar parênteses?', o: ['Para indicar explicação ou observação', 'Para indicar pergunta', 'Para indicar emoção', 'Para indicar pausa'], c: 0 },
            { p: 'A vírgula pode separar sujeito e verbo?', o: ['Não', 'Sim', 'Às vezes', 'Sempre'], c: 0 },
            { p: 'A vírgula pode separar verbo e complemento?', o: ['Não', 'Sim', 'Às vezes', 'Sempre'], c: 0 },
            { p: 'A vírgula pode separar itens de uma lista?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula pode separar aposto?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula pode separar vocativo?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula pode separar orações coordenadas?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula pode ser usada após adjunto adverbial deslocado?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'Qual é o vocativo em "João, traga o livro"?', o: ['João', 'Traga', 'Livro', 'Nenhum'], c: 0 },
            { p: 'Qual é o aposto em "Ana, minha irmã, chegou"?', o: ['minha irmã', 'Ana', 'Chegou', 'Nenhum'], c: 0 },
            { p: 'Qual é o vocativo em "Professora, posso sair"?', o: ['Professora', 'Posso', 'Sair', 'Nenhum'], c: 0 },
            { p: 'Qual é o aposto em "Carlos, o professor, ensina bem"?', o: ['o professor', 'Carlos', 'Ensina', 'Nenhum'], c: 0 },
            { p: 'Em "Comprei arroz, feijão e carne", a vírgula separa:', o: ['Itens de uma lista', 'Sujeito e verbo', 'Verbo e complemento', 'Orações'], c: 0 },
            { p: 'Em "Pedro, meu amigo, chegou", a vírgula separa:', o: ['Aposto', 'Vocativo', 'Itens de lista', 'Orações'], c: 0 },
            { p: 'Em "Maria, venha aqui", a vírgula separa:', o: ['Vocativo', 'Aposto', 'Itens de lista', 'Orações'], c: 0 },
            { p: 'Em "Estudei, mas não passei", a vírgula separa:', o: ['Orações coordenadas', 'Aposto', 'Vocativo', 'Itens de lista'], c: 0 },
            { p: 'Em "Ontem, fui à escola", a vírgula separa:', o: ['Adjunto adverbial deslocado', 'Aposto', 'Vocativo', 'Itens de lista'], c: 0 },
            { p: 'Qual é o sinal usado em "Ele disse: "Vou viajar""?', o: ['Dois pontos e aspas', 'Vírgula e aspas', 'Ponto final e aspas', 'Travessão e aspas'], c: 0 },
            { p: 'Qual é o sinal usado em "— Você vem? — perguntou"?', o: ['Travessão e interrogação', 'Aspas e interrogação', 'Parênteses e interrogação', 'Vírgula e interrogação'], c: 0 },
            { p: 'Qual é o sinal usado em "Ele (meu amigo) chegou"?', o: ['Parênteses', 'Aspas', 'Travessão', 'Vírgula'], c: 0 },
            { p: 'Qual é o sinal usado em "Que lindo!"?', o: ['Exclamação', 'Interrogação', 'Ponto final', 'Vírgula'], c: 0 },
            { p: 'Qual é o sinal usado em "Você vem?"?', o: ['Interrogação', 'Exclamação', 'Ponto final', 'Vírgula'], c: 0 },
            { p: 'Qual é o sinal usado em "Eu pensei que..."?', o: ['Reticências', 'Ponto final', 'Vírgula', 'Interrogação'], c: 0 },
            { p: 'Qual é o sinal usado em "Estudei; passei"?', o: ['Ponto e vírgula', 'Vírgula', 'Ponto final', 'Dois pontos'], c: 0 },
            { p: 'Qual frase usa a vírgula CORRETAMENTE?', o: ['Comprei pão, leite e ovos.', 'Comprei, pão, leite e ovos.', 'Comprei pão leite e ovos.', 'Comprei pão; leite e ovos.'], c: 0 },
            { p: 'Qual frase usa a vírgula CORRETAMENTE?', o: ['Pedro, meu amigo, chegou.', 'Pedro meu amigo, chegou.', 'Pedro, meu amigo chegou.', 'Pedro meu amigo chegou.'], c: 0 },
            { p: 'Qual frase usa a vírgula CORRETAMENTE?', o: ['Maria, venha aqui!', 'Maria venha aqui!', 'Maria, venha, aqui!', 'Maria venha, aqui!'], c: 0 },
            { p: 'Qual frase usa a vírgula CORRETAMENTE?', o: ['Estudei, mas não passei.', 'Estudei mas, não passei.', 'Estudei mas não, passei.', 'Estudei, mas não, passei.'], c: 0 },
            { p: 'Qual frase usa a vírgula CORRETAMENTE?', o: ['Ontem, fui à escola.', 'Ontem fui, à escola.', 'Ontem, fui, à escola.', 'Ontem fui à escola.'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['Eu, comprei, um livro.', 'Eu comprei um livro.', 'Comprei um livro ontem.', 'Ontem comprei um livro.'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['O aluno, estudou muito.', 'O aluno estudou muito.', 'O aluno estudou ontem.', 'Ontem o aluno estudou.'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['Comprei, pão, leite e ovos.', 'Comprei pão, leite e ovos.', 'Comprei pão e leite.', 'Comprei leite e ovos.'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['Pedro, meu amigo chegou.', 'Pedro, meu amigo, chegou.', 'Pedro, meu amigo, chegou ontem.', 'Meu amigo Pedro chegou.'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['Maria venha, aqui!', 'Maria, venha aqui!', 'Maria, venha aqui, por favor!', 'Venha aqui, Maria!'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['Estudei mas, não passei.', 'Estudei, mas não passei.', 'Estudei, mas não passei ontem.', 'Não passei, mas estudei.'], c: 0 },
            { p: 'Qual frase usa a vírgula INCORRETAMENTE?', o: ['Ontem fui, à escola.', 'Ontem, fui à escola.', 'Ontem fui à escola.', 'Fui à escola ontem.'], c: 0 },
            { p: 'Qual é a diferença entre ponto e vírgula?', o: ['Ponto final encerra; ponto e vírgula dá pausa longa', 'São iguais', 'Ponto final dá pausa; ponto e vírgula encerra', 'Nenhuma'], c: 0 },
            { p: 'Qual é a diferença entre vírgula e ponto e vírgula?', o: ['Ponto e vírgula é pausa maior', 'São iguais', 'Vírgula é pausa maior', 'Nenhuma'], c: 0 },
            { p: 'Qual sinal usar em uma pergunta?', o: ['Interrogação', 'Exclamação', 'Ponto final', 'Vírgula'], c: 0 },
            { p: 'Qual sinal usar em uma emoção?', o: ['Exclamação', 'Interrogação', 'Ponto final', 'Vírgula'], c: 0 },
            { p: 'Qual sinal usar em uma citação?', o: ['Aspas', 'Parênteses', 'Travessão', 'Vírgula'], c: 0 },
            { p: 'Qual sinal usar em um diálogo?', o: ['Travessão', 'Aspas', 'Parênteses', 'Vírgula'], c: 0 },
            { p: 'Qual sinal usar em uma explicação?', o: ['Parênteses', 'Aspas', 'Travessão', 'Vírgula'], c: 0 },
            { p: 'Qual sinal usar em uma interrupção?', o: ['Reticências', 'Ponto final', 'Vírgula', 'Interrogação'], c: 0 },
            { p: 'Qual sinal usar para introduzir uma lista?', o: ['Dois pontos', 'Vírgula', 'Ponto final', 'Interrogação'], c: 0 },
            { p: 'Qual sinal usar para separar itens de uma lista?', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Qual sinal usar para separar o aposto?', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Qual sinal usar para separar o vocativo?', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Qual sinal usar para separar orações coordenadas?', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Qual sinal usar após adjunto adverbial deslocado?', o: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], c: 0 },
            { p: 'Em "Ele chegou, e nós saímos", a vírgula separa:', o: ['Orações coordenadas', 'Aposto', 'Vocativo', 'Itens de lista'], c: 0 },
            { p: 'Em "O livro, que comprei, é bom", as vírgulas separam:', o: ['Oração adjetiva explicativa', 'Aposto', 'Vocativo', 'Itens de lista'], c: 0 },
            { p: 'Em "O livro que comprei é bom" (sem vírgula), a oração é:', o: ['Restritiva', 'Explicativa', 'Apositiva', 'Vocativa'], c: 0 },
            { p: 'Qual a diferença entre oração restritiva e explicativa?', o: ['Restritiva sem vírgula; explicativa com vírgula', 'São iguais', 'Restritiva com vírgula; explicativa sem vírgula', 'Nenhuma'], c: 0 },
            { p: 'Em "Meu pai, que é médico, chegou", a oração é:', o: ['Explicativa', 'Restritiva', 'Apositiva', 'Vocativa'], c: 0 },
            { p: 'Em "O homem que me ajudou saiu", a oração é:', o: ['Restritiva', 'Explicativa', 'Apositiva', 'Vocativa'], c: 0 },
            { p: 'Em "Rio de Janeiro, cidade maravilhosa, é linda", o termo entre vírgulas é:', o: ['Aposto', 'Vocativo', 'Oração', 'Adjunto'], c: 0 },
            { p: 'Em "Garoto, venha cá!", o termo "Garoto" é:', o: ['Vocativo', 'Aposto', 'Oração', 'Adjunto'], c: 0 },
            { p: 'Em "Nós, os alunos, estudamos", o termo "os alunos" é:', o: ['Aposto', 'Vocativo', 'Oração', 'Adjunto'], c: 0 },
            { p: 'Em "Amanhã, iremos viajar", o termo "Amanhã" é:', o: ['Adjunto adverbial deslocado', 'Aposto', 'Vocativo', 'Oração'], c: 0 },
            { p: 'Em "No domingo, fomos à praia", o termo "No domingo" é:', o: ['Adjunto adverbial deslocado', 'Aposto', 'Vocativo', 'Oração'], c: 0 },
            { p: 'Em "Comprei maçã, banana, uva", as vírgulas separam:', o: ['Itens de lista', 'Aposto', 'Vocativo', 'Orações'], c: 0 },
            { p: 'Em "Estudou muito, mas não passou", a vírgula separa:', o: ['Orações coordenadas', 'Aposto', 'Vocativo', 'Itens'], c: 0 },
            { p: 'Qual o sinal correto em "Ela disse ___ Vou viajar"?', o: [':', ',', '.', ';'], c: 0 },
            { p: 'Qual o sinal correto em "Que lindo___"?', o: ['!', '?', '.', ','], c: 0 },
            { p: 'Qual o sinal correto em "Você vem___"?', o: ['?', '!', '.', ','], c: 0 },
            { p: 'Qual o sinal correto em "Eu pensei que___"?', o: ['...', '.', ',', '?'], c: 0 },
            { p: 'Qual o sinal correto em "Ele disse ___sim___"?', o: ['aspas', 'parênteses', 'travessão', 'vírgula'], c: 0 },
            { p: 'Qual o sinal correto em "___ Você vem? ___ perguntou"?', o: ['travessão', 'aspas', 'parênteses', 'vírgula'], c: 0 },
            { p: 'Qual o sinal correto em "Ele ___ meu amigo ___ chegou"?', o: ['parênteses', 'aspas', 'travessão', 'vírgula'], c: 0 },
            { p: 'Qual o sinal correto em "Estudei___ passei"?', o: [';', ',', '.', ':'], c: 0 },
            { p: 'Qual o sinal correto em "Comprei arroz___ feijão___ carne"?', o: ['vírgula', 'ponto final', 'interrogação', 'exclamação'], c: 0 },
            { p: 'Qual o sinal correto em "Pedro___ meu amigo___ chegou"?', o: ['vírgula', 'ponto final', 'interrogação', 'exclamação'], c: 0 },
            { p: 'Qual o sinal correto em "Maria___ venha aqui___"?', o: ['vírgula e exclamação', 'vírgula e interrogação', 'ponto final', 'dois pontos'], c: 0 },
            { p: 'Qual o sinal correto em "Estudei___ mas não passei"?', o: ['vírgula', 'ponto final', 'interrogação', 'exclamação'], c: 0 },
            { p: 'Qual o sinal correto em "Ontem___ fui à escola"?', o: ['vírgula', 'ponto final', 'interrogação', 'exclamação'], c: 0 },
            { p: 'Qual o sinal correto em "Eu comprei um livro___"?', o: ['.', ',', '?', '!'], c: 0 },
            { p: 'Qual o sinal correto em "O aluno estudou muito___"?', o: ['.', ',', '?', '!'], c: 0 },
            { p: 'Em "Vou à escola, depois ao mercado", a vírgula separa:', o: ['Termos com mesma função', 'Sujeito e verbo', 'Verbo e complemento', 'Orações'], c: 0 },
            { p: 'Em "Ele é inteligente, mas preguiçoso", a vírgula separa:', o: ['Orações coordenadas', 'Aposto', 'Vocativo', 'Itens'], c: 0 },
            { p: 'Em "Comprei um livro, uma caneta e um caderno", a vírgula separa:', o: ['Itens de lista', 'Aposto', 'Vocativo', 'Orações'], c: 0 },
            { p: 'Em "Meu amigo, o João, chegou", a vírgula separa:', o: ['Aposto', 'Vocativo', 'Itens', 'Orações'], c: 0 },
            { p: 'Em "João, venha aqui", a vírgula separa:', o: ['Vocativo', 'Aposto', 'Itens', 'Orações'], c: 0 },
            { p: 'Em "Ontem, à noite, choveu", as vírgulas separam:', o: ['Adjunto adverbial deslocado', 'Aposto', 'Vocativo', 'Itens'], c: 0 },
            { p: 'Em "A menina, que estuda muito, passou", as vírgulas separam:', o: ['Oração explicativa', 'Oração restritiva', 'Aposto', 'Vocativo'], c: 0 },
            { p: 'Em "A menina que estuda muito passou" (sem vírgula), a oração é:', o: ['Restritiva', 'Explicativa', 'Apositiva', 'Vocativa'], c: 0 },
            { p: 'Qual a diferença entre "que" com vírgula e sem vírgula?', o: ['Com vírgula = explicativa; sem = restritiva', 'São iguais', 'Com vírgula = restritiva; sem = explicativa', 'Nenhuma'], c: 0 },
            { p: 'Em "Meu irmão, que mora em SP, chegou", a oração é:', o: ['Explicativa', 'Restritiva', 'Apositiva', 'Vocativa'], c: 0 },
            { p: 'Em "O livro que comprei é bom", a oração é:', o: ['Restritiva', 'Explicativa', 'Apositiva', 'Vocativa'], c: 0 },
            { p: 'A vírgula pode mudar o sentido da frase?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'Em "Não, espere" vs "Não espere", a vírgula muda:', o: ['O sentido', 'Nada', 'Apenas a pausa', 'Apenas a entonação'], c: 0 },
            { p: 'Em "Vou comer, mãe" vs "Vou comer mãe", a vírgula muda:', o: ['O sentido (vocativo)', 'Nada', 'Apenas a pausa', 'Apenas a entonação'], c: 0 },
            { p: 'Em "Vamos comer, crianças" vs "Vamos comer crianças", a vírgula muda:', o: ['O sentido (vocativo)', 'Nada', 'Apenas a pausa', 'Apenas a entonação'], c: 0 },
            { p: 'Qual é o uso do ponto final?', o: ['Encerrar frases declarativas', 'Indicar pergunta', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso da interrogação?', o: ['Indicar pergunta', 'Encerrar frases', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso da exclamação?', o: ['Indicar emoção', 'Indicar pergunta', 'Encerrar frases', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso das reticências?', o: ['Indicar interrupção ou dúvida', 'Indicar pergunta', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso das aspas?', o: ['Indicar citação ou ironia', 'Indicar pergunta', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso do travessão?', o: ['Indicar diálogo ou aparte', 'Indicar pergunta', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso dos parênteses?', o: ['Indicar explicação ou observação', 'Indicar pergunta', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso dos dois pontos?', o: ['Introduzir fala, lista ou explicação', 'Indicar pergunta', 'Indicar emoção', 'Separar itens'], c: 0 },
            { p: 'Qual é o uso do ponto e vírgula?', o: ['Indicar pausa maior que a vírgula', 'Indicar pergunta', 'Indicar emoção', 'Indicar citação'], c: 0 },
            { p: 'Qual é o uso da vírgula?', o: ['Separar elementos da frase', 'Indicar pergunta', 'Indicar emoção', 'Indicar citação'], c: 0 },
            { p: 'A vírgula é obrigatória em "Pedro, meu amigo, chegou"?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula é obrigatória em "Maria, venha aqui"?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula é obrigatória em "Comprei pão, leite e ovos"?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula é obrigatória em "Estudei, mas não passei"?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula é obrigatória em "Ontem, fui à escola"?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula é proibida entre sujeito e verbo?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'A vírgula é proibida entre verbo e complemento?', o: ['Sim', 'Não', 'Às vezes', 'Nunca'], c: 0 },
            { p: 'Em "O menino comprou um sorvete", a vírgula:', o: ['Não deve ser usada', 'Deve ser usada', 'É opcional', 'É obrigatória'], c: 0 },
            { p: 'Em "A menina bonita sorriu", a vírgula:', o: ['Não deve ser usada', 'Deve ser usada', 'É opcional', 'É obrigatória'], c: 0 },
            { p: 'Em "Pedro, meu amigo, chegou", as vírgulas são:', o: ['Obrigatórias', 'Opcionais', 'Proibidas', 'Erradas'], c: 0 },
            { p: 'Em "Maria, venha aqui", a vírgula é:', o: ['Obrigatória', 'Opcional', 'Proibida', 'Errada'], c: 0 },
            { p: 'Em "Comprei pão, leite e ovos", a vírgula é:', o: ['Obrigatória', 'Opcional', 'Proibida', 'Errada'], c: 0 },
            { p: 'Em "Estudei, mas não passei", a vírgula é:', o: ['Obrigatória', 'Opcional', 'Proibida', 'Errada'], c: 0 },
            { p: 'Em "Ontem, fui à escola", a vírgula é:', o: ['Obrigatória', 'Opcional', 'Proibida', 'Errada'], c: 0 },
            { p: 'Em "Eu, comprei, um livro", as vírgulas são:', o: ['Erradas', 'Corretas', 'Opcionais', 'Obrigatórias'], c: 0 },
            { p: 'Em "O aluno, estudou muito", a vírgula é:', o: ['Errada', 'Correta', 'Opcional', 'Obrigatória'], c: 0 },
            { p: 'Em "Comprei, pão, leite e ovos", as vírgulas são:', o: ['Erradas', 'Corretas', 'Opcionais', 'Obrigatórias'], c: 0 },
            { p: 'Em "Pedro, meu amigo chegou", a vírgula é:', o: ['Errada', 'Correta', 'Opcional', 'Obrigatória'], c: 0 },
            { p: 'Em "Maria venha, aqui", a vírgula é:', o: ['Errada', 'Correta', 'Opcional', 'Obrigatória'], c: 0 },
            { p: 'Em "Estudei mas, não passei", a vírgula é:', o: ['Errada', 'Correta', 'Opcional', 'Obrigatória'], c: 0 },
            { p: 'Em "Ontem fui, à escola", a vírgula é:', o: ['Errada', 'Correta', 'Opcional', 'Obrigatória'], c: 0 },
            { p: 'A pontuação correta é importante para:', o: ['Clareza e sentido do texto', 'Apenas estética', 'Nada', 'Apenas gramática'], c: 0 },
            { p: 'A falta de pontuação pode:', o: ['Mudar o sentido da frase', 'Nada', 'Melhorar o texto', 'Apenas deixar feio'], c: 0 },
            { p: 'Em "Vou comer, mãe", o sentido é:', o: ['Chamando a mãe (vocativo)', 'Comendo a mãe', 'Nada', 'Errado'], c: 0 },
            { p: 'Em "Vou comer mãe" (sem vírgula), o sentido é:', o: ['Ambíguo/engraçado', 'Chamando a mãe', 'Normal', 'Errado'], c: 0 },
            { p: 'Em "Não, espere", o sentido é:', o: ['Pedindo para esperar', 'Pedindo para não esperar', 'Nada', 'Errado'], c: 0 },
            { p: 'Em "Não espere" (sem vírgula), o sentido é:', o: ['Pedindo para não esperar', 'Pedindo para esperar', 'Nada', 'Errado'], c: 0 }
        ]
    },

    config: {
        totalPerguntasExpandidas: 800,
        perguntasPorSimulado: 20,
        minPorMateria: 3,
        maxPorMateria: 4
    }
};