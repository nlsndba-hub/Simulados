// ============================================================
// DADOS DA MATÉRIA: MATEMÁTICA - 600 PERGUNTAS BASE
// 8º ano · 3º Bimestre · Conforme MEC
// ============================================================

window.MATERIA_ATUAL = {
    id: 'matematica',
    nome: 'Matemática',
    subtitulo: '8º ano · 3º Bimestre',
    emoji: '📐',
    descricaoFooter: '🧠 Estude com calma · 600 perguntas disponíveis',

    topicos: [
        // ============================================================
        // TÓPICO 1: EQUAÇÕES DO 2º GRAU
        // ============================================================
        {
            id: 'equacoes2grau',
            nome: 'Equações do 2º Grau',
            emoji: '🟰',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"ax² + bx + c = 0"</strong><br>
                    <span style="font-size:0.9rem;">Toda equação do 2º grau tem essa forma!</span>
                </div>

                <p><strong>📌 O que é uma equação do 2º grau?</strong></p>
                <p>É uma equação onde o <strong>maior expoente da incógnita é 2</strong>. Exemplo: <em>x² + 5x + 6 = 0</em>.</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Coeficiente</th><th>O que é</th><th>Exemplo em x² + 5x + 6 = 0</th></tr>
                        <tr><td><strong>a</strong></td><td>Número que multiplica x²</td><td>a = 1</td></tr>
                        <tr><td><strong>b</strong></td><td>Número que multiplica x</td><td>b = 5</td></tr>
                        <tr><td><strong>c</strong></td><td>Número sozinho (termo independente)</td><td>c = 6</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"A é o do x², B é o do x, C é o sozinho"</em>
                </div>

                <p><strong>📌 Fórmula de Bhaskara:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Passo</th><th>Fórmula</th></tr>
                        <tr><td>1. Calcula o delta (Δ)</td><td><strong>Δ = b² - 4ac</strong></td></tr>
                        <tr><td>2. Calcula as raízes</td><td><strong>x = (-b ± √Δ) / 2a</strong></td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE DO DELTA:</strong><br>
                    🟢 Δ > 0 → <strong>2 raízes diferentes</strong><br>
                    🟡 Δ = 0 → <strong>1 raiz (dupla)</strong><br>
                    🔴 Δ < 0 → <strong>Nenhuma raiz real</strong>
                </div>

                <div class="exemplo-box">
                    <div class="en">📘 Resolver x² - 5x + 6 = 0</div>
                    <div class="pt">
                        a = 1, b = -5, c = 6<br>
                        Δ = (-5)² - 4·1·6 = 25 - 24 = 1<br>
                        x = (5 ± √1) / 2 = (5 ± 1) / 2<br>
                        x₁ = 6/2 = <strong>3</strong> · x₂ = 4/2 = <strong>2</strong>
                    </div>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Esquecer o sinal de menos no b.<br>
                    ❌ <em>Δ = 5² - 4·1·6</em> (errado se b = -5)<br>
                    ✅ <em>Δ = (-5)² - 4·1·6</em> (correto!)
                </div>

                <p><strong>💡 Soma e Produto (atalho):</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>O que</th><th>Fórmula</th></tr>
                        <tr><td>Soma das raízes</td><td><strong>S = -b/a</strong></td></tr>
                        <tr><td>Produto das raízes</td><td><strong>P = c/a</strong></td></tr>
                    </table>
                </div>
                <p>Se <em>x² - 5x + 6 = 0</em>: S = 5 e P = 6. Quais números somam 5 e multiplicam 6? <strong>2 e 3</strong>! ✅</p>
            `
        },

        // ============================================================
        // TÓPICO 2: RAZÃO E PROPORÇÃO
        // ============================================================
        {
            id: 'razaoProporcao',
            nome: 'Razão e Proporção',
            emoji: '⚖️',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Razão = divisão · Proporção = igualdade de razões"</strong>
                </div>

                <p><strong>📌 O que é RAZÃO?</strong></p>
                <p>É a <strong>divisão entre dois números</strong>. Ex: a razão de 6 para 3 é 6/3 = 2.</p>

                <div class="exemplo-box">
                    <div class="en">📘 Em uma sala há 12 meninas e 8 meninos.</div>
                    <div class="pt">
                        Razão meninas/meninos = 12/8 = <strong>3/2</strong> (simplificando)<br>
                        Lê-se: "3 para 2"
                    </div>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Razão é fração! Sempre simplifique no final."</em>
                </div>

                <p><strong>📌 O que é PROPORÇÃO?</strong></p>
                <p>É uma <strong>igualdade entre duas razões</strong>: <strong>a/b = c/d</strong></p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Propriedade</th><th>Fórmula</th></tr>
                        <tr><td>Multiplicação cruzada</td><td><strong>a × d = b × c</strong></td></tr>
                    </table>
                </div>

                <div class="exemplo-box">
                    <div class="en">📘 Se 3/4 = x/8, qual o valor de x?</div>
                    <div class="pt">
                        Multiplicando cruzado: 3 × 8 = 4 × x<br>
                        24 = 4x → x = <strong>6</strong>
                    </div>
                </div>

                <p><strong>📌 Grandezas Diretamente Proporcionais:</strong></p>
                <p>Quando uma <strong>aumenta</strong>, a outra <strong>também aumenta</strong> na mesma proporção.</p>
                <p><em>Ex: Se 1 kg de arroz custa R$ 5, então 3 kg custam R$ 15.</em></p>

                <p><strong>📌 Grandezas Inversamente Proporcionais:</strong></p>
                <p>Quando uma <strong>aumenta</strong>, a outra <strong>diminui</strong> na mesma proporção.</p>
                <p><em>Ex: Se 2 pintores pintam em 6 dias, 4 pintores pintam em 3 dias.</em></p>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong><br>
                    🟢 Diretamente → <strong>multiplica em cruz</strong><br>
                    🔴 Inversamente → <strong>multiplica na horizontal</strong>
                </div>

                <p><strong>📌 Regra de Três Simples:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Passo</th><th>O que fazer</th></tr>
                        <tr><td>1</td><td>Monte a tabela com as grandezas</td></tr>
                        <tr><td>2</td><td>Verifique se é direta ou inversa</td></tr>
                        <tr><td>3</td><td>Multiplique cruzado (direta) ou na horizontal (inversa)</td></tr>
                    </table>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Não verificar se é direta ou inversa.<br>
                    ❌ Montar a regra de três sem analisar a relação<br>
                    ✅ Sempre perguntar: "Se aumento um, o outro aumenta ou diminui?"
                </div>
            `
        },

        // ============================================================
        // TÓPICO 3: GRANDEZAS E MEDIDAS
        // ============================================================
        {
            id: 'grandezasMedidas',
            nome: 'Grandezas e Medidas',
            emoji: '📏',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Medir é comparar com uma unidade padrão"</strong>
                </div>

                <p><strong>📌 O que são grandezas?</strong></p>
                <p>Tudo o que pode ser <strong>medido</strong>: comprimento, massa, tempo, área, volume, capacidade.</p>

                <p><strong>📌 Unidades de COMPRIMENTO (metro):</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Unidade</th><th>Símbolo</th><th>Relação</th></tr>
                        <tr><td>Quilômetro</td><td>km</td><td>1000 m</td></tr>
                        <tr><td>Hectômetro</td><td>hm</td><td>100 m</td></tr>
                        <tr><td>Decâmetro</td><td>dam</td><td>10 m</td></tr>
                        <tr><td><strong>Metro</strong></td><td><strong>m</strong></td><td>1 m</td></tr>
                        <tr><td>Decímetro</td><td>dm</td><td>0,1 m</td></tr>
                        <tr><td>Centímetro</td><td>cm</td><td>0,01 m</td></tr>
                        <tr><td>Milímetro</td><td>mm</td><td>0,001 m</td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"km hm dam M dm cm mm"</em><br>
                    Cada casa à direita <strong>multiplica por 10</strong><br>
                    Cada casa à esquerda <strong>divide por 10</strong>
                </div>

                <p><strong>📌 Unidades de MASSA (grama):</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Unidade</th><th>Símbolo</th><th>Relação</th></tr>
                        <tr><td>Quilograma</td><td>kg</td><td>1000 g</td></tr>
                        <tr><td><strong>Grama</strong></td><td><strong>g</strong></td><td>1 g</td></tr>
                        <tr><td>Miligrama</td><td>mg</td><td>0,001 g</td></tr>
                    </table>
                </div>
                <p><em>Lembre-se: 1 kg = 1000 g · 1 tonelada = 1000 kg</em></p>

                <p><strong>📌 Unidades de TEMPO:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Unidade</th><th>Relação</th></tr>
                        <tr><td>1 hora</td><td>60 minutos</td></tr>
                        <tr><td>1 minuto</td><td>60 segundos</td></tr>
                        <tr><td>1 dia</td><td>24 horas</td></tr>
                    </table>
                </div>

                <p><strong>📌 Área e Volume:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Grandeza</th><th>Unidade</th><th>Como calcular</th></tr>
                        <tr><td>Área do quadrado</td><td>m²</td><td>lado × lado</td></tr>
                        <tr><td>Área do retângulo</td><td>m²</td><td>base × altura</td></tr>
                        <tr><td>Volume do cubo</td><td>m³</td><td>aresta³</td></tr>
                        <tr><td>Volume do paralelepípedo</td><td>m³</td><td>comprimento × largura × altura</td></tr>
                    </table>
                </div>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Trocar m² por m ou esquecer de converter.<br>
                    ❌ <em>2 m² = 2 m</em> (ERRADO!)<br>
                    ✅ <em>1 m² = 10000 cm²</em> (a conversão de área é ao quadrado!)
                </div>

                <p><strong>💡 Conversões importantes:</strong></p>
                <ul style="padding-left: 20px; margin: 8px 0;">
                    <li>1 m = 100 cm</li>
                    <li>1 m² = 10.000 cm²</li>
                    <li>1 m³ = 1.000.000 cm³</li>
                    <li>1 km = 1000 m</li>
                    <li>1 kg = 1000 g</li>
                    <li>1 litro = 1000 mL</li>
                </ul>
            `
        },

        // ============================================================
        // TÓPICO 4: SEQUÊNCIAS
        // ============================================================
        {
            id: 'sequencias',
            nome: 'Sequências',
            emoji: '🔢',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Sequência é uma lista de números em ordem"</strong>
                </div>

                <p><strong>📌 O que é uma sequência?</strong></p>
                <p>É um conjunto de números organizados em uma <strong>ordem lógica</strong>, seguindo uma regra.</p>

                <div class="exemplo-box">
                    <div class="en">📘 2, 4, 6, 8, 10, ...</div>
                    <div class="pt">Regra: <strong>somar 2</strong> a cada termo</div>
                </div>
                <div class="exemplo-box">
                    <div class="en">📘 1, 3, 5, 7, 9, ...</div>
                    <div class="pt">Regra: <strong>somar 2</strong> (números ímpares)</div>
                </div>
                <div class="exemplo-box">
                    <div class="en">📘 1, 2, 4, 8, 16, ...</div>
                    <div class="pt">Regra: <strong>multiplicar por 2</strong></div>
                </div>

                <p><strong>📌 Progressão Aritmética (PA):</strong></p>
                <p>É uma sequência onde <strong>somamos sempre o mesmo número</strong> (chamado de <em>razão</em>).</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Termo</th><th>Fórmula</th></tr>
                        <tr><td>Termo geral</td><td><strong>aₙ = a₁ + (n - 1) · r</strong></td></tr>
                        <tr><td>Razão (r)</td><td><strong>a₂ - a₁</strong></td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Sempre soma o mesmo número = PA"</em><br>
                    Ex: 3, 7, 11, 15... (r = 4)
                </div>

                <div class="exemplo-box">
                    <div class="en">📘 Qual o 10º termo da PA (3, 7, 11, ...)?</div>
                    <div class="pt">
                        a₁ = 3 · r = 4 · n = 10<br>
                        a₁₀ = 3 + (10 - 1) × 4<br>
                        a₁₀ = 3 + 9 × 4 = 3 + 36 = <strong>39</strong>
                    </div>
                </div>

                <p><strong>📌 Progressão Geométrica (PG):</strong></p>
                <p>É uma sequência onde <strong>multiplicamos sempre pelo mesmo número</strong> (chamado de <em>razão</em>).</p>

                <div class="tabela-regra">
                    <table>
                        <tr><th>Termo</th><th>Fórmula</th></tr>
                        <tr><td>Termo geral</td><td><strong>aₙ = a₁ · q⁽ⁿ⁻¹⁾</strong></td></tr>
                        <tr><td>Razão (q)</td><td><strong>a₂ ÷ a₁</strong></td></tr>
                    </table>
                </div>

                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Sempre multiplica pelo mesmo número = PG"</em><br>
                    Ex: 2, 6, 18, 54... (q = 3)
                </div>

                <div class="exemplo-box">
                    <div class="en">📘 Qual o 5º termo da PG (2, 6, 18, ...)?</div>
                    <div class="pt">
                        a₁ = 2 · q = 3 · n = 5<br>
                        a₅ = 2 · 3⁴ = 2 · 81 = <strong>162</strong>
                    </div>
                </div>

                <p><strong>📌 Sequência de Fibonacci:</strong></p>
                <p>Cada termo é a <strong>soma dos dois anteriores</strong>: 1, 1, 2, 3, 5, 8, 13, 21...</p>

                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Confundir PA com PG.<br>
                    ❌ <em>2, 4, 8, 16 é PA</em> (ERRADO!)<br>
                    ✅ <em>2, 4, 8, 16 é PG</em> (multiplico por 2)<br>
                    ✅ <em>2, 4, 6, 8 é PA</em> (somo 2)
                </div>

                <div style="background: #e8f0fe; border-radius: 12px; padding: 12px 16px; margin-top: 10px;">
                    <strong>📣 O que mais cai na prova:</strong> Identificar se é PA ou PG, encontrar a razão e calcular um termo específico.
                </div>
            `
        }
    ],

    // ============================================================
    // PERGUNTAS BASE - PARTE 1: EQUAÇÕES DO 2º GRAU (150 perguntas)
    // ============================================================
    perguntasBase: {
        equacoes2grau: [
            { p: 'Qual é a forma geral de uma equação do 2º grau?', o: ['ax² + bx + c = 0', 'ax + b = 0', 'ax³ + bx² + c = 0', 'a/x + b = 0'], c: 0 },
            { p: 'Na equação x² + 5x + 6 = 0, qual é o valor de a?', o: ['1', '5', '6', '0'], c: 0 },
            { p: 'Na equação x² + 5x + 6 = 0, qual é o valor de b?', o: ['5', '1', '6', '0'], c: 0 },
            { p: 'Na equação x² + 5x + 6 = 0, qual é o valor de c?', o: ['6', '5', '1', '0'], c: 0 },
            { p: 'Qual a fórmula do delta (Δ)?', o: ['b² - 4ac', 'b² + 4ac', '-b + 4ac', 'b - 4ac'], c: 0 },
            { p: 'Qual a fórmula de Bhaskara?', o: ['x = (-b ± √Δ) / 2a', 'x = (b ± √Δ) / 2a', 'x = -b / 2a', 'x = b² - 4ac'], c: 0 },
            { p: 'Se Δ > 0, quantas raízes reais a equação tem?', o: ['2 raízes diferentes', '1 raiz', 'Nenhuma raiz', '3 raízes'], c: 0 },
            { p: 'Se Δ = 0, quantas raízes reais a equação tem?', o: ['1 raiz (dupla)', '2 raízes', 'Nenhuma', '3 raízes'], c: 0 },
            { p: 'Se Δ < 0, quantas raízes reais a equação tem?', o: ['Nenhuma', '2 raízes', '1 raiz', '3 raízes'], c: 0 },
            { p: 'Qual a soma das raízes de x² - 5x + 6 = 0?', o: ['5', '-5', '6', '-6'], c: 0 },
            { p: 'Qual o produto das raízes de x² - 5x + 6 = 0?', o: ['6', '5', '-5', '-6'], c: 0 },
            { p: 'Quais são as raízes de x² - 5x + 6 = 0?', o: ['2 e 3', '1 e 6', '-2 e -3', '0 e 5'], c: 0 },
            { p: 'Quais são as raízes de x² - 7x + 12 = 0?', o: ['3 e 4', '2 e 6', '1 e 12', '5 e 7'], c: 0 },
            { p: 'Quais são as raízes de x² - 9 = 0?', o: ['3 e -3', '9 e -9', '0 e 9', '1 e 9'], c: 0 },
            { p: 'Quais são as raízes de x² - 4x = 0?', o: ['0 e 4', '1 e 4', '0 e -4', '2 e 2'], c: 0 },
            { p: 'Calcule Δ de x² + 4x + 3 = 0.', o: ['4', '16', '12', '8'], c: 0 },
            { p: 'Calcule Δ de x² - 6x + 9 = 0.', o: ['0', '9', '36', '-36'], c: 0 },
            { p: 'Calcule Δ de x² + x + 1 = 0.', o: ['-3', '3', '1', '-1'], c: 0 },
            { p: 'Quais as raízes de x² + 4x + 3 = 0?', o: ['-1 e -3', '1 e 3', '-1 e 3', '1 e -3'], c: 0 },
            { p: 'Quais as raízes de x² - 6x + 9 = 0?', o: ['3 (dupla)', '2 e 4', '-3 e -3', '1 e 9'], c: 0 },
            { p: 'A equação x² + 5x + 6 = 0 tem raízes:', o: ['-2 e -3', '2 e 3', '-1 e -6', '1 e 6'], c: 0 },
            { p: 'Se a = 2, b = -3 e c = 1, qual o Δ?', o: ['1', '-1', '9', '-9'], c: 0 },
            { p: 'Se a = 1, b = -5 e c = 6, quais são as raízes?', o: ['2 e 3', '-2 e -3', '1 e 6', '-1 e -6'], c: 0 },
            { p: 'Qual o valor de x em x² = 16?', o: ['x = 4 ou x = -4', 'x = 4', 'x = -4', 'x = 8'], c: 0 },
            { p: 'Resolva x² - 25 = 0.', o: ['x = 5 ou x = -5', 'x = 5', 'x = -5', 'x = 25'], c: 0 },
            { p: 'Resolva x² - 2x = 0.', o: ['x = 0 ou x = 2', 'x = 2', 'x = 0', 'x = -2'], c: 0 },
            { p: 'Resolva x² + 3x = 0.', o: ['x = 0 ou x = -3', 'x = 3', 'x = 0', 'x = -3'], c: 0 },
            { p: 'Resolva x² - x - 6 = 0.', o: ['x = 3 ou x = -2', 'x = 2 ou x = -3', 'x = 6 ou x = -1', 'x = 1 ou x = -6'], c: 0 },
            { p: 'Resolva x² - 4x + 4 = 0.', o: ['x = 2 (dupla)', 'x = 2 ou x = -2', 'x = 4', 'x = 1'], c: 0 },
            { p: 'Resolva x² + 2x - 8 = 0.', o: ['x = 2 ou x = -4', 'x = 4 ou x = -2', 'x = 8 ou x = -1', 'x = 1 ou x = -8'], c: 0 },
            { p: 'Resolva x² - 3x - 10 = 0.', o: ['x = 5 ou x = -2', 'x = 2 ou x = -5', 'x = 10 ou x = -1', 'x = 1 ou x = -10'], c: 0 },
            { p: 'Resolva x² - 8x + 15 = 0.', o: ['x = 3 ou x = 5', 'x = 1 ou x = 15', 'x = 2 ou x = 7', 'x = 4 ou x = 4'], c: 0 },
            { p: 'Resolva x² - 6x + 5 = 0.', o: ['x = 1 ou x = 5', 'x = 2 ou x = 3', 'x = 1 ou x = 6', 'x = 5 ou x = 5'], c: 0 },
            { p: 'Resolva x² - 2x - 15 = 0.', o: ['x = 5 ou x = -3', 'x = 3 ou x = -5', 'x = 15 ou x = -1', 'x = 1 ou x = -15'], c: 0 },
            { p: 'Resolva x² - 4x - 5 = 0.', o: ['x = 5 ou x = -1', 'x = 1 ou x = -5', 'x = 5 ou x = 1', 'x = -5 ou x = -1'], c: 0 },
            { p: 'Resolva x² - 7x + 10 = 0.', o: ['x = 2 ou x = 5', 'x = 1 ou x = 10', 'x = 2 ou x = 7', 'x = 3 ou x = 5'], c: 0 },
            { p: 'Resolva x² - 9x + 20 = 0.', o: ['x = 4 ou x = 5', 'x = 2 ou x = 10', 'x = 1 ou x = 20', 'x = 3 ou x = 6'], c: 0 },
            { p: 'Resolva x² - 11x + 30 = 0.', o: ['x = 5 ou x = 6', 'x = 3 ou x = 10', 'x = 2 ou x = 15', 'x = 1 ou x = 30'], c: 0 },
            { p: 'Resolva x² - 12x + 32 = 0.', o: ['x = 4 ou x = 8', 'x = 2 ou x = 16', 'x = 6 ou x = 6', 'x = 1 ou x = 32'], c: 0 },
            { p: 'Resolva x² - 3x + 2 = 0.', o: ['x = 1 ou x = 2', 'x = -1 ou x = -2', 'x = 3 ou x = 2', 'x = 1 ou x = 3'], c: 0 },
            { p: 'Resolva x² + 7x + 12 = 0.', o: ['x = -3 ou x = -4', 'x = 3 ou x = 4', 'x = -1 ou x = -12', 'x = 1 ou x = 12'], c: 0 },
            { p: 'Resolva x² + 8x + 15 = 0.', o: ['x = -3 ou x = -5', 'x = 3 ou x = 5', 'x = -1 ou x = -15', 'x = 1 ou x = 15'], c: 0 },
            { p: 'Resolva x² + 6x + 8 = 0.', o: ['x = -2 ou x = -4', 'x = 2 ou x = 4', 'x = -1 ou x = -8', 'x = 1 ou x = 8'], c: 0 },
            { p: 'Resolva x² + 5x + 4 = 0.', o: ['x = -1 ou x = -4', 'x = 1 ou x = 4', 'x = -2 ou x = -3', 'x = 2 ou x = 3'], c: 0 },
            { p: 'Resolva x² + 10x + 21 = 0.', o: ['x = -3 ou x = -7', 'x = 3 ou x = 7', 'x = -1 ou x = -21', 'x = 1 ou x = 21'], c: 0 },
            { p: 'Resolva x² - 5x - 14 = 0.', o: ['x = 7 ou x = -2', 'x = 2 ou x = -7', 'x = 14 ou x = -1', 'x = 1 ou x = -14'], c: 0 },
            { p: 'Resolva x² - 4x - 12 = 0.', o: ['x = 6 ou x = -2', 'x = 2 ou x = -6', 'x = 4 ou x = -3', 'x = 3 ou x = -4'], c: 0 },
            { p: 'Resolva x² - 2x - 24 = 0.', o: ['x = 6 ou x = -4', 'x = 4 ou x = -6', 'x = 8 ou x = -3', 'x = 3 ou x = -8'], c: 0 },
            { p: 'Resolva x² + 3x - 10 = 0.', o: ['x = 2 ou x = -5', 'x = 5 ou x = -2', 'x = 10 ou x = -1', 'x = 1 ou x = -10'], c: 0 },
            { p: 'Resolva x² + 2x - 3 = 0.', o: ['x = 1 ou x = -3', 'x = 3 ou x = -1', 'x = -1 ou x = -3', 'x = 1 ou x = 3'], c: 0 },
            { p: 'Resolva x² + 4x - 5 = 0.', o: ['x = 1 ou x = -5', 'x = 5 ou x = -1', 'x = 1 ou x = 5', 'x = -1 ou x = -5'], c: 0 },
            { p: 'Resolva x² - 6x = 0.', o: ['x = 0 ou x = 6', 'x = 6', 'x = 0', 'x = -6'], c: 0 },
            { p: 'Resolva x² + 5x = 0.', o: ['x = 0 ou x = -5', 'x = 5', 'x = 0', 'x = -5'], c: 0 },
            { p: 'Resolva 2x² - 8 = 0.', o: ['x = 2 ou x = -2', 'x = 4', 'x = 8', 'x = -8'], c: 0 },
            { p: 'Resolva 3x² - 12 = 0.', o: ['x = 2 ou x = -2', 'x = 4', 'x = 3', 'x = -3'], c: 0 },
            { p: 'Resolva 4x² = 16.', o: ['x = 2 ou x = -2', 'x = 4', 'x = 8', 'x = 16'], c: 0 },
            { p: 'Resolva x² + 1 = 0.', o: ['Não tem raiz real', 'x = 1', 'x = -1', 'x = 0'], c: 0 },
            { p: 'Resolva x² + 4 = 0.', o: ['Não tem raiz real', 'x = 2', 'x = -2', 'x = 4'], c: 0 },
            { p: 'Se Δ = -9, quantas raízes reais tem a equação?', o: ['Nenhuma', '2', '1', '3'], c: 0 },
            { p: 'Se Δ = 25, quantas raízes reais tem a equação?', o: ['2', '1', 'Nenhuma', '3'], c: 0 },
            { p: 'Se Δ = 0, quantas raízes tem a equação?', o: ['1 (dupla)', '2', 'Nenhuma', '3'], c: 0 },
            { p: 'Qual o valor de Δ para x² - 4x + 4 = 0?', o: ['0', '4', '16', '-16'], c: 0 },
            { p: 'Qual o valor de Δ para x² - 5x + 6 = 0?', o: ['1', '5', '6', '-1'], c: 0 },
            { p: 'Qual o valor de Δ para x² + 6x + 9 = 0?', o: ['0', '9', '36', '-36'], c: 0 },
            { p: 'Qual o valor de Δ para x² + 2x + 5 = 0?', o: ['-16', '16', '4', '-4'], c: 0 },
            { p: 'Qual o valor de Δ para x² - 3x - 4 = 0?', o: ['25', '9', '16', '7'], c: 0 },
            { p: 'Qual o valor de Δ para x² - 7x + 12 = 0?', o: ['1', '49', '12', '-1'], c: 0 },
            { p: 'Qual o valor de Δ para 2x² - 4x + 2 = 0?', o: ['0', '4', '16', '-16'], c: 0 },
            { p: 'Qual o valor de Δ para x² + x - 12 = 0?', o: ['49', '1', '12', '48'], c: 0 },
            { p: 'Soma das raízes de x² - 6x + 5 = 0:', o: ['6', '-6', '5', '-5'], c: 0 },
            { p: 'Produto das raízes de x² - 6x + 5 = 0:', o: ['5', '6', '-5', '-6'], c: 0 },
            { p: 'Soma das raízes de x² + 8x + 15 = 0:', o: ['-8', '8', '15', '-15'], c: 0 },
            { p: 'Produto das raízes de x² + 8x + 15 = 0:', o: ['15', '8', '-15', '-8'], c: 0 },
            { p: 'Soma das raízes de x² - 9x + 20 = 0:', o: ['9', '-9', '20', '-20'], c: 0 },
            { p: 'Produto das raízes de x² - 9x + 20 = 0:', o: ['20', '9', '-20', '-9'], c: 0 },
            { p: 'Soma das raízes de 2x² - 6x + 4 = 0:', o: ['3', '-3', '2', '-2'], c: 0 },
            { p: 'Produto das raízes de 2x² - 6x + 4 = 0:', o: ['2', '3', '-2', '-3'], c: 0 },
            { p: 'Soma das raízes de x² + 5x + 6 = 0:', o: ['-5', '5', '6', '-6'], c: 0 },
            { p: 'Produto das raízes de x² + 5x + 6 = 0:', o: ['6', '5', '-6', '-5'], c: 0 },
            { p: 'Qual o valor de x em x² = 49?', o: ['x = 7 ou x = -7', 'x = 7', 'x = -7', 'x = 49'], c: 0 },
            { p: 'Qual o valor de x em x² = 100?', o: ['x = 10 ou x = -10', 'x = 10', 'x = -10', 'x = 100'], c: 0 },
            { p: 'Qual o valor de x em x² = 81?', o: ['x = 9 ou x = -9', 'x = 9', 'x = -9', 'x = 81'], c: 0 },
            { p: 'Se a equação é x² - 2x - 3 = 0, quais são as raízes?', o: ['3 e -1', '1 e -3', '3 e 1', '-3 e -1'], c: 0 },
            { p: 'Se a equação é x² + 4x + 4 = 0, quais são as raízes?', o: ['-2 (dupla)', '2 e -2', '-4', '2'], c: 0 },
            { p: 'Se a equação é x² - 10x + 25 = 0, quais são as raízes?', o: ['5 (dupla)', '5 e -5', '-5', '25'], c: 0 },
            { p: 'Se a equação é x² - x - 20 = 0, quais são as raízes?', o: ['5 e -4', '4 e -5', '10 e -2', '20 e -1'], c: 0 },
            { p: 'Se a equação é x² + 7x + 10 = 0, quais são as raízes?', o: ['-5 e -2', '5 e 2', '-10 e -1', '10 e 1'], c: 0 },
            { p: 'Se a equação é x² - 3x - 18 = 0, quais são as raízes?', o: ['6 e -3', '3 e -6', '9 e -2', '18 e -1'], c: 0 },
            { p: 'Se a equação é x² + 6x - 16 = 0, quais são as raízes?', o: ['2 e -8', '-2 e 8', '4 e -4', '16 e -1'], c: 0 },
            { p: 'Se a equação é x² - 7x = 0, quais são as raízes?', o: ['0 e 7', '7 e -7', '0 e -7', '1 e 7'], c: 0 },
            { p: 'Se a equação é 2x² - 8x = 0, quais são as raízes?', o: ['0 e 4', '0 e -4', '4 e -4', '2 e 8'], c: 0 },
            { p: 'Se a equação é 3x² - 27 = 0, quais são as raízes?', o: ['3 e -3', '9 e -9', '27 e -27', '1 e 27'], c: 0 },
            { p: 'Se a equação é x² - 12x + 35 = 0, quais são as raízes?', o: ['5 e 7', '1 e 35', '3 e 9', '2 e 10'], c: 0 },
            { p: 'Se a equação é x² + 9x + 20 = 0, quais são as raízes?', o: ['-4 e -5', '4 e 5', '-1 e -20', '1 e 20'], c: 0 },
            { p: 'Se a equação é x² - 4x - 21 = 0, quais são as raízes?', o: ['7 e -3', '3 e -7', '21 e -1', '1 e -21'], c: 0 },
            { p: 'Se a equação é x² + 11x + 30 = 0, quais são as raízes?', o: ['-5 e -6', '5 e 6', '-3 e -10', '3 e 10'], c: 0 },
            { p: 'Se a equação é x² - 13x + 42 = 0, quais são as raízes?', o: ['6 e 7', '1 e 42', '3 e 14', '2 e 21'], c: 0 },
            { p: 'Se a equação é x² - 8x + 12 = 0, quais são as raízes?', o: ['2 e 6', '3 e 4', '1 e 12', '4 e 4'], c: 0 },
            { p: 'Se a equação é x² + 5x - 14 = 0, quais são as raízes?', o: ['2 e -7', '-2 e 7', '14 e -1', '1 e -14'], c: 0 },
            { p: 'Se a equação é x² - 9x + 14 = 0, quais são as raízes?', o: ['2 e 7', '1 e 14', '3 e 6', '4 e 5'], c: 0 },
            { p: 'Se a equação é x² + 2x - 15 = 0, quais são as raízes?', o: ['3 e -5', '-3 e 5', '15 e -1', '1 e -15'], c: 0 },
            { p: 'Se a equação é x² - x - 30 = 0, quais são as raízes?', o: ['6 e -5', '5 e -6', '10 e -3', '30 e -1'], c: 0 },
            { p: 'Se a equação é x² - 5x - 24 = 0, quais são as raízes?', o: ['8 e -3', '3 e -8', '24 e -1', '1 e -24'], c: 0 },
            { p: 'Se a equação é x² + 8x + 7 = 0, quais são as raízes?', o: ['-1 e -7', '1 e 7', '-2 e -6', '2 e 6'], c: 0 },
            { p: 'Se a equação é x² - 11x + 24 = 0, quais são as raízes?', o: ['3 e 8', '4 e 6', '2 e 12', '1 e 24'], c: 0 },
            { p: 'Se a equação é x² + 4x - 32 = 0, quais são as raízes?', o: ['4 e -8', '-4 e 8', '8 e 4', '-8 e -4'], c: 0 },
            { p: 'Se a equação é x² - 15x + 56 = 0, quais são as raízes?', o: ['7 e 8', '1 e 56', '4 e 14', '2 e 28'], c: 0 },
            { p: 'Se a equação é x² + 10x + 25 = 0, quais são as raízes?', o: ['-5 (dupla)', '5 e -5', '5 (dupla)', '-25'], c: 0 },
            { p: 'Se a equação é x² - 6x - 7 = 0, quais são as raízes?', o: ['7 e -1', '1 e -7', '7 e 1', '-7 e -1'], c: 0 },
            { p: 'Se a equação é x² + 3x - 28 = 0, quais são as raízes?', o: ['4 e -7', '-4 e 7', '7 e 4', '-7 e -4'], c: 0 },
            { p: 'Se a equação é x² - 2x - 35 = 0, quais são as raízes?', o: ['7 e -5', '5 e -7', '35 e -1', '1 e -35'], c: 0 },
            { p: 'Se a equação é x² + 12x + 35 = 0, quais são as raízes?', o: ['-5 e -7', '5 e 7', '-1 e -35', '1 e 35'], c: 0 },
            { p: 'Se a equação é x² - 4x - 45 = 0, quais são as raízes?', o: ['9 e -5', '5 e -9', '15 e -3', '45 e -1'], c: 0 },
            { p: 'Se a equação é x² + 6x - 27 = 0, quais são as raízes?', o: ['3 e -9', '-3 e 9', '27 e -1', '1 e -27'], c: 0 },
            { p: 'Se a equação é x² - 14x + 48 = 0, quais são as raízes?', o: ['6 e 8', '4 e 12', '2 e 24', '3 e 16'], c: 0 },
            { p: 'Se a equação é x² + 7x - 18 = 0, quais são as raízes?', o: ['2 e -9', '-2 e 9', '18 e -1', '1 e -18'], c: 0 },
            { p: 'Se a equação é x² - 8x - 9 = 0, quais são as raízes?', o: ['9 e -1', '1 e -9', '9 e 1', '-9 e -1'], c: 0 },
            { p: 'Se a equação é x² + 2x - 48 = 0, quais são as raízes?', o: ['6 e -8', '-6 e 8', '8 e -6', '-8 e -6'], c: 0 },
            { p: 'Se a equação é x² - 3x - 40 = 0, quais são as raízes?', o: ['8 e -5', '5 e -8', '10 e -4', '40 e -1'], c: 0 },
            { p: 'Se a equação é x² + 9x - 22 = 0, quais são as raízes?', o: ['2 e -11', '-2 e 11', '22 e -1', '1 e -22'], c: 0 },
            { p: 'Se a equação é x² - 5x - 36 = 0, quais são as raízes?', o: ['9 e -4', '4 e -9', '12 e -3', '36 e -1'], c: 0 },
            { p: 'Se a equação é x² + 8x - 20 = 0, quais são as raízes?', o: ['2 e -10', '-2 e 10', '20 e -1', '1 e -20'], c: 0 },
            { p: 'Se a equação é x² - 16x + 60 = 0, quais são as raízes?', o: ['6 e 10', '5 e 12', '4 e 15', '3 e 20'], c: 0 },
            { p: 'Se a equação é x² + 5x - 36 = 0, quais são as raízes?', o: ['4 e -9', '-4 e 9', '9 e -4', '-9 e -4'], c: 0 },
            { p: 'Se a equação é x² - 7x - 30 = 0, quais são as raízes?', o: ['10 e -3', '3 e -10', '15 e -2', '30 e -1'], c: 0 },
            { p: 'Se a equação é x² + 13x + 42 = 0, quais são as raízes?', o: ['-6 e -7', '6 e 7', '-3 e -14', '3 e 14'], c: 0 },
            { p: 'Se a equação é x² - 2x - 63 = 0, quais são as raízes?', o: ['9 e -7', '7 e -9', '21 e -3', '63 e -1'], c: 0 },
            { p: 'Se a equação é x² + 4x - 60 = 0, quais são as raízes?', o: ['6 e -10', '-6 e 10', '5 e -12', '60 e -1'], c: 0 },
            { p: 'Se a equação é x² - 10x - 24 = 0, quais são as raízes?', o: ['12 e -2', '2 e -12', '6 e -4', '24 e -1'], c: 0 },
            { p: 'Se a equação é x² + x - 42 = 0, quais são as raízes?', o: ['6 e -7', '-6 e 7', '7 e -6', '-7 e -6'], c: 0 },
            { p: 'Se a equação é x² - 6x - 40 = 0, quais são as raízes?', o: ['10 e -4', '4 e -10', '8 e -5', '40 e -1'], c: 0 },
            { p: 'Se a equação é x² + 3x - 54 = 0, quais são as raízes?', o: ['6 e -9', '-6 e 9', '9 e -6', '-9 e -6'], c: 0 },
            { p: 'Se a equação é x² - 8x - 20 = 0, quais são as raízes?', o: ['10 e -2', '2 e -10', '5 e -4', '20 e -1'], c: 0 },
            { p: 'Se a equação é x² + 11x + 24 = 0, quais são as raízes?', o: ['-3 e -8', '3 e 8', '-2 e -12', '2 e 12'], c: 0 },
            { p: 'Se a equação é x² - x - 72 = 0, quais são as raízes?', o: ['9 e -8', '8 e -9', '12 e -6', '72 e -1'], c: 0 },
            { p: 'Se a equação é x² + 2x - 80 = 0, quais são as raízes?', o: ['8 e -10', '-8 e 10', '10 e -8', '-10 e -8'], c: 0 },
            { p: 'Se a equação é x² - 4x - 77 = 0, quais são as raízes?', o: ['11 e -7', '7 e -11', '77 e -1', '1 e -77'], c: 0 },
            { p: 'Se a equação é x² + 9x + 14 = 0, quais são as raízes?', o: ['-2 e -7', '2 e 7', '-1 e -14', '1 e 14'], c: 0 },
            { p: 'Se a equação é x² - 15x + 50 = 0, quais são as raízes?', o: ['5 e 10', '2 e 25', '1 e 50', '4 e 12'], c: 0 },
            { p: 'Se a equação é x² + 7x + 6 = 0, quais são as raízes?', o: ['-1 e -6', '1 e 6', '-2 e -3', '2 e 3'], c: 0 },
            { p: 'Se a equação é x² - 3x - 88 = 0, quais são as raízes?', o: ['11 e -8', '8 e -11', '88 e -1', '1 e -88'], c: 0 },
            { p: 'Se a equação é x² + 5x - 50 = 0, quais são as raízes?', o: ['5 e -10', '-5 e 10', '10 e -5', '-10 e -5'], c: 0 },
            { p: 'Se a equação é x² - 12x + 27 = 0, quais são as raízes?', o: ['3 e 9', '1 e 27', '4 e 8', '2 e 14'], c: 0 },
            { p: 'Se a equação é x² + 15x + 56 = 0, quais são as raízes?', o: ['-7 e -8', '7 e 8', '-4 e -14', '4 e 14'], c: 0 },
            { p: 'Se a equação é x² - 2x - 99 = 0, quais são as raízes?', o: ['11 e -9', '9 e -11', '99 e -1', '1 e -99'], c: 0 }
        ],
        razaoProporcao: [
            { p: 'O que é uma razão?', o: ['Divisão entre dois números', 'Soma de dois números', 'Multiplicação de dois números', 'Subtração de dois números'], c: 0 },
            { p: 'Qual a razão de 6 para 3?', o: ['2', '3', '6', '18'], c: 0 },
            { p: 'Qual a razão de 10 para 5?', o: ['2', '5', '10', '50'], c: 0 },
            { p: 'Qual a razão de 8 para 4?', o: ['2', '4', '8', '32'], c: 0 },
            { p: 'Qual a razão de 12 para 4?', o: ['3', '4', '12', '48'], c: 0 },
            { p: 'Qual a razão de 15 para 5?', o: ['3', '5', '15', '75'], c: 0 },
            { p: 'Qual a razão de 20 para 4?', o: ['5', '4', '20', '80'], c: 0 },
            { p: 'Qual a razão de 18 para 6?', o: ['3', '6', '18', '108'], c: 0 },
            { p: 'Qual a razão de 24 para 8?', o: ['3', '8', '24', '192'], c: 0 },
            { p: 'Qual a razão de 30 para 6?', o: ['5', '6', '30', '180'], c: 0 },
            { p: 'Simplifique a razão 12/8:', o: ['3/2', '2/3', '6/4', '1/2'], c: 0 },
            { p: 'Simplifique a razão 15/25:', o: ['3/5', '5/3', '1/5', '5/1'], c: 0 },
            { p: 'Simplifique a razão 20/30:', o: ['2/3', '3/2', '1/3', '2/5'], c: 0 },
            { p: 'Simplifique a razão 18/24:', o: ['3/4', '4/3', '2/3', '6/8'], c: 0 },
            { p: 'Simplifique a razão 100/25:', o: ['4/1', '1/4', '25/1', '2/5'], c: 0 },
            { p: 'Simplifique a razão 45/60:', o: ['3/4', '4/3', '5/6', '9/12'], c: 0 },
            { p: 'Simplifique a razão 16/24:', o: ['2/3', '3/2', '4/6', '8/12'], c: 0 },
            { p: 'Simplifique a razão 14/21:', o: ['2/3', '3/2', '7/10', '1/2'], c: 0 },
            { p: 'Simplifique a razão 25/100:', o: ['1/4', '4/1', '1/2', '2/5'], c: 0 },
            { p: 'Simplifique a razão 36/48:', o: ['3/4', '4/3', '6/8', '9/12'], c: 0 },
            { p: 'O que é uma proporção?', o: ['Igualdade entre duas razões', 'Soma de razões', 'Divisão de razões', 'Multiplicação de razões'], c: 0 },
            { p: 'Na proporção a/b = c/d, qual a propriedade fundamental?', o: ['a × d = b × c', 'a + d = b + c', 'a × b = c × d', 'a - d = b - c'], c: 0 },
            { p: 'Se 2/3 = x/9, qual o valor de x?', o: ['6', '3', '9', '4'], c: 0 },
            { p: 'Se 3/4 = x/12, qual o valor de x?', o: ['9', '4', '12', '6'], c: 0 },
            { p: 'Se 5/7 = x/21, qual o valor de x?', o: ['15', '7', '21', '10'], c: 0 },
            { p: 'Se 1/2 = x/10, qual o valor de x?', o: ['5', '2', '10', '20'], c: 0 },
            { p: 'Se 4/5 = x/20, qual o valor de x?', o: ['16', '5', '20', '8'], c: 0 },
            { p: 'Se 2/5 = x/15, qual o valor de x?', o: ['6', '5', '15', '3'], c: 0 },
            { p: 'Se 7/8 = x/24, qual o valor de x?', o: ['21', '8', '24', '14'], c: 0 },
            { p: 'Se 3/9 = x/27, qual o valor de x?', o: ['9', '3', '27', '18'], c: 0 },
            { p: 'Se 6/8 = x/16, qual o valor de x?', o: ['12', '8', '16', '6'], c: 0 },
            { p: 'Se 10/15 = x/30, qual o valor de x?', o: ['20', '15', '30', '5'], c: 0 },
            { p: 'Se x/5 = 4/10, qual o valor de x?', o: ['2', '5', '10', '4'], c: 0 },
            { p: 'Se x/8 = 3/12, qual o valor de x?', o: ['2', '8', '12', '4'], c: 0 },
            { p: 'Se x/6 = 5/15, qual o valor de x?', o: ['2', '6', '15', '5'], c: 0 },
            { p: 'Se x/9 = 2/6, qual o valor de x?', o: ['3', '9', '6', '2'], c: 0 },
            { p: 'Se x/12 = 3/4, qual o valor de x?', o: ['9', '12', '4', '3'], c: 0 },
            { p: 'Se x/10 = 7/5, qual o valor de x?', o: ['14', '10', '5', '7'], c: 0 },
            { p: 'Se x/4 = 9/12, qual o valor de x?', o: ['3', '4', '12', '9'], c: 0 },
            { p: 'Se x/15 = 4/5, qual o valor de x?', o: ['12', '15', '5', '4'], c: 0 },
            { p: 'Se x/20 = 3/4, qual o valor de x?', o: ['15', '20', '4', '3'], c: 0 },
            { p: 'Se x/7 = 6/21, qual o valor de x?', o: ['2', '7', '21', '6'], c: 0 },
            { p: 'Qual a razão entre 15 e 45?', o: ['1/3', '3/1', '1/5', '5/1'], c: 0 },
            { p: 'Qual a razão entre 24 e 36?', o: ['2/3', '3/2', '4/6', '1/2'], c: 0 },
            { p: 'Qual a razão entre 50 e 100?', o: ['1/2', '2/1', '1/5', '5/1'], c: 0 },
            { p: 'Qual a razão entre 32 e 8?', o: ['4', '8', '32', '1/4'], c: 0 },
            { p: 'Qual a razão entre 100 e 25?', o: ['4', '25', '100', '1/4'], c: 0 },
            { p: 'Qual a razão entre 81 e 27?', o: ['3', '27', '81', '1/3'], c: 0 },
            { p: 'Qual a razão entre 64 e 16?', o: ['4', '16', '64', '1/4'], c: 0 },
            { p: 'Qual a razão entre 72 e 9?', o: ['8', '9', '72', '1/8'], c: 0 },
            { p: 'Qual a razão entre 90 e 30?', o: ['3', '30', '90', '1/3'], c: 0 },
            { p: 'Qual a razão entre 45 e 9?', o: ['5', '9', '45', '1/5'], c: 0 },
            { p: 'Duas grandezas são diretamente proporcionais quando:', o: ['Uma aumenta e a outra também aumenta', 'Uma aumenta e a outra diminui', 'Uma é zero', 'Nenhuma muda'], c: 0 },
            { p: 'Duas grandezas são inversamente proporcionais quando:', o: ['Uma aumenta e a outra diminui', 'Uma aumenta e a outra aumenta', 'Ambas são iguais', 'Nenhuma muda'], c: 0 },
            { p: 'Se 1 kg de arroz custa R$ 5, quanto custam 3 kg?', o: ['R$ 15', 'R$ 8', 'R$ 5', 'R$ 10'], c: 0 },
            { p: 'Se 1 kg de carne custa R$ 30, quanto custam 2 kg?', o: ['R$ 60', 'R$ 32', 'R$ 30', 'R$ 90'], c: 0 },
            { p: 'Se 1 litro de leite custa R$ 4, quanto custam 5 litros?', o: ['R$ 20', 'R$ 9', 'R$ 4', 'R$ 25'], c: 0 },
            { p: 'Se 1 dúzia de ovos custa R$ 12, quanto custam 3 dúzias?', o: ['R$ 36', 'R$ 15', 'R$ 12', 'R$ 24'], c: 0 },
            { p: 'Se 1 metro de tecido custa R$ 8, quanto custam 5 metros?', o: ['R$ 40', 'R$ 13', 'R$ 8', 'R$ 45'], c: 0 },
            { p: 'Se 2 cadernos custam R$ 10, quanto custam 6 cadernos?', o: ['R$ 30', 'R$ 20', 'R$ 10', 'R$ 60'], c: 0 },
            { p: 'Se 3 canetas custam R$ 6, quanto custam 9 canetas?', o: ['R$ 18', 'R$ 12', 'R$ 6', 'R$ 24'], c: 0 },
            { p: 'Se 4 balas custam R$ 2, quanto custam 12 balas?', o: ['R$ 6', 'R$ 4', 'R$ 2', 'R$ 8'], c: 0 },
            { p: 'Se 5 kg de açúcar custam R$ 15, quanto custam 10 kg?', o: ['R$ 30', 'R$ 20', 'R$ 15', 'R$ 45'], c: 0 },
            { p: 'Se 3 livros custam R$ 45, quanto custam 5 livros?', o: ['R$ 75', 'R$ 60', 'R$ 45', 'R$ 90'], c: 0 },
            { p: 'Se 4 pessoas comem 8 pizzas, quantas pizzas 6 pessoas comem?', o: ['12', '10', '8', '14'], c: 0 },
            { p: 'Se 2 máquinas produzem 100 peças, quantas peças 4 máquinas produzem?', o: ['200', '150', '100', '400'], c: 0 },
            { p: 'Se 3 horas rendem 15 páginas, quantas páginas 5 horas rendem?', o: ['25', '20', '15', '30'], c: 0 },
            { p: 'Se 5 trabalhadores constroem um muro em 10 dias, 10 trabalhadores constroem em quantos dias?', o: ['5', '10', '20', '15'], c: 0 },
            { p: 'Se 4 torneiras enchem um tanque em 6 horas, 2 torneiras enchem em quantas horas?', o: ['12', '6', '8', '3'], c: 0 },
            { p: 'Se 6 pessoas fazem um trabalho em 4 dias, 3 pessoas fazem em quantos dias?', o: ['8', '4', '6', '2'], c: 0 },
            { p: 'Se 10 máquinas fazem um serviço em 2 horas, 5 máquinas fazem em quantas horas?', o: ['4', '2', '10', '1'], c: 0 },
            { p: 'Se 8 pintores pintam uma casa em 5 dias, 4 pintores pintam em quantos dias?', o: ['10', '5', '8', '2'], c: 0 },
            { p: 'Se 12 operários constroem em 6 dias, 6 operários constroem em quantos dias?', o: ['12', '6', '3', '18'], c: 0 },
            { p: 'Se 3 carros fazem o percurso em 4 horas, 6 carros fazem em quantas horas?', o: ['2', '4', '6', '8'], c: 0 },
            { p: 'Se 5 kg custam R$ 25, quanto custam 8 kg?', o: ['R$ 40', 'R$ 30', 'R$ 25', 'R$ 45'], c: 0 },
            { p: 'Se 7 metros custam R$ 21, quanto custam 10 metros?', o: ['R$ 30', 'R$ 21', 'R$ 28', 'R$ 35'], c: 0 },
            { p: 'Se 4 kg custam R$ 20, quanto custam 7 kg?', o: ['R$ 35', 'R$ 28', 'R$ 20', 'R$ 40'], c: 0 },
            { p: 'Se 6 metros custam R$ 18, quanto custam 9 metros?', o: ['R$ 27', 'R$ 18', 'R$ 24', 'R$ 30'], c: 0 },
            { p: 'Se 9 kg custam R$ 45, quanto custam 12 kg?', o: ['R$ 60', 'R$ 45', 'R$ 54', 'R$ 65'], c: 0 },
            { p: 'Se 5 litros custam R$ 20, quanto custam 8 litros?', o: ['R$ 32', 'R$ 28', 'R$ 20', 'R$ 36'], c: 0 },
            { p: 'Se 12 metros custam R$ 36, quanto custam 15 metros?', o: ['R$ 45', 'R$ 36', 'R$ 40', 'R$ 50'], c: 0 },
            { p: 'Se 2 kg custam R$ 10, quanto custam 9 kg?', o: ['R$ 45', 'R$ 30', 'R$ 20', 'R$ 50'], c: 0 },
            { p: 'Se 3 metros custam R$ 15, quanto custam 11 metros?', o: ['R$ 55', 'R$ 45', 'R$ 50', 'R$ 60'], c: 0 },
            { p: 'Se 8 kg custam R$ 32, quanto custam 13 kg?', o: ['R$ 52', 'R$ 48', 'R$ 42', 'R$ 56'], c: 0 },
            { p: 'Se 4 metros custam R$ 12, quanto custam 10 metros?', o: ['R$ 30', 'R$ 24', 'R$ 36', 'R$ 40'], c: 0 },
            { p: 'Se 5 kg custam R$ 30, quanto custam 12 kg?', o: ['R$ 72', 'R$ 60', 'R$ 65', 'R$ 75'], c: 0 },
            { p: 'Se 6 metros custam R$ 24, quanto custam 15 metros?', o: ['R$ 60', 'R$ 54', 'R$ 48', 'R$ 66'], c: 0 },
            { p: 'Se 7 kg custam R$ 35, quanto custam 11 kg?', o: ['R$ 55', 'R$ 45', 'R$ 50', 'R$ 60'], c: 0 },
            { p: 'Se 3 metros custam R$ 9, quanto custam 14 metros?', o: ['R$ 42', 'R$ 36', 'R$ 45', 'R$ 48'], c: 0 },
            { p: 'Se 9 kg custam R$ 54, quanto custam 14 kg?', o: ['R$ 84', 'R$ 72', 'R$ 78', 'R$ 90'], c: 0 },
            { p: 'Se 2 metros custam R$ 8, quanto custam 13 metros?', o: ['R$ 52', 'R$ 48', 'R$ 56', 'R$ 60'], c: 0 },
            { p: 'Se 4 kg custam R$ 16, quanto custam 15 kg?', o: ['R$ 60', 'R$ 54', 'R$ 64', 'R$ 68'], c: 0 },
            { p: 'Se 5 metros custam R$ 25, quanto custam 17 metros?', o: ['R$ 85', 'R$ 75', 'R$ 80', 'R$ 90'], c: 0 },
            { p: 'Se 6 kg custam R$ 42, quanto custam 11 kg?', o: ['R$ 77', 'R$ 72', 'R$ 66', 'R$ 84'], c: 0 },
            { p: 'Em uma turma, a razão entre meninos e meninas é 2/3. Se há 12 meninas, quantos meninos há?', o: ['8', '6', '12', '18'], c: 0 },
            { p: 'A razão entre dois números é 3/5. Se o menor é 15, qual o maior?', o: ['25', '20', '30', '45'], c: 0 },
            { p: 'A razão entre dois números é 2/7. Se o maior é 28, qual o menor?', o: ['8', '14', '7', '4'], c: 0 },
            { p: 'A razão entre as idades de dois irmãos é 3/4. Se o mais novo tem 9 anos, quantos anos tem o mais velho?', o: ['12', '10', '15', '16'], c: 0 },
            { p: 'A razão entre o número de mulheres e homens em uma festa é 5/3. Se há 15 mulheres, quantos homens há?', o: ['9', '12', '15', '20'], c: 0 },
            { p: 'Em uma receita, a razão entre farinha e açúcar é 4/1. Se uso 8 xícaras de farinha, quantas de açúcar preciso?', o: ['2', '4', '8', '1'], c: 0 },
            { p: 'A escala de um mapa é 1:1000. Se no mapa a distância é 5 cm, qual a distância real em metros?', o: ['50 m', '5 m', '500 m', '5000 m'], c: 0 },
            { p: 'A escala de um mapa é 1:500. Se no mapa a distância é 4 cm, qual a distância real?', o: ['20 m', '2 m', '200 m', '2000 m'], c: 0 },
            { p: 'Em uma escala 1:200, uma parede de 6 cm no papel representa quantos metros?', o: ['12 m', '1,2 m', '120 m', '1200 m'], c: 0 },
            { p: 'A razão entre a idade de pai e filho é 5/1. Se o pai tem 40 anos, quantos anos tem o filho?', o: ['8', '5', '10', '40'], c: 0 },
            { p: 'Em uma turma, a razão entre alunos que gostam de matemática e os que não gostam é 3/2. Se há 30 alunos, quantos gostam de matemática?', o: ['18', '12', '15', '20'], c: 0 },
            { p: 'A razão entre homens e mulheres em uma empresa é 4/5. Se há 45 mulheres, quantos homens há?', o: ['36', '40', '45', '30'], c: 0 },
            { p: 'Em uma mistura, a razão entre água e suco é 3/1. Se uso 9 litros de água, quantos de suco preciso?', o: ['3', '6', '9', '1'], c: 0 },
            { p: 'Em uma turma, a razão entre meninos e meninas é 3/2. Se há 20 alunos, quantos meninos?', o: ['12', '10', '8', '15'], c: 0 },
            { p: 'A razão entre a altura de duas torres é 2/5. Se a menor tem 10 m, qual a altura da maior?', o: ['25 m', '20 m', '15 m', '50 m'], c: 0 },
            { p: 'A razão entre o número de carros e motos em um estacionamento é 5/3. Se há 30 carros, quantas motos há?', o: ['18', '20', '15', '25'], c: 0 },
            { p: 'A razão entre a quantidade de livros de duas estantes é 2/7. Se a primeira tem 8 livros, quantos tem a segunda?', o: ['28', '14', '21', '35'], c: 0 },
            { p: 'Em uma prova, a razão entre acertos e erros é 4/1. Se houve 40 acertos, quantos erros?', o: ['10', '4', '8', '12'], c: 0 },
            { p: 'A razão entre o preço de dois produtos é 3/4. Se o mais barato custa R$ 30, qual o preço do mais caro?', o: ['R$ 40', 'R$ 35', 'R$ 45', 'R$ 50'], c: 0 },
            { p: 'Em uma cesta, a razão entre maçãs e laranjas é 2/5. Se há 10 maçãs, quantas laranjas?', o: ['25', '20', '15', '30'], c: 0 },
            { p: 'A razão entre dois números é 7/2. Se o maior é 49, qual o menor?', o: ['14', '7', '21', '28'], c: 0 },
            { p: 'A razão entre idade de duas pessoas é 4/7. Se a mais nova tem 20 anos, quantos anos tem a mais velha?', o: ['35', '28', '40', '30'], c: 0 },
            { p: 'Em uma turma, a razão entre aprovados e reprovados é 7/1. Se 35 foram aprovados, quantos reprovados?', o: ['5', '7', '10', '3'], c: 0 },
            { p: 'A razão entre litros de tinta azul e branca é 2/3. Se uso 6 litros de tinta azul, quantos de branca preciso?', o: ['9', '6', '4', '12'], c: 0 },
            { p: 'Em uma estante, a razão entre livros de matemática e português é 3/4. Se há 21 de matemática, quantos de português?', o: ['28', '24', '21', '32'], c: 0 },
            { p: 'A razão entre homens e mulheres em uma sala é 5/4. Se há 20 homens, quantas mulheres?', o: ['16', '15', '20', '25'], c: 0 },
            { p: 'A razão entre a idade de João e Maria é 2/3. Se João tem 14 anos, quantos tem Maria?', o: ['21', '18', '24', '28'], c: 0 },
            { p: 'Se 3/5 dos alunos são meninas e há 30 alunos, quantas meninas há?', o: ['18', '12', '15', '20'], c: 0 },
            { p: 'Se 2/7 de uma quantia é R$ 20, qual o total?', o: ['R$ 70', 'R$ 60', 'R$ 50', 'R$ 80'], c: 0 },
            { p: 'Se 3/4 de um número é 15, qual é o número?', o: ['20', '12', '18', '25'], c: 0 },
            { p: 'Se 5/8 de uma quantia é R$ 100, qual o total?', o: ['R$ 160', 'R$ 140', 'R$ 120', 'R$ 180'], c: 0 },
            { p: 'Se 2/5 de um número é 8, qual é o número?', o: ['20', '16', '10', '25'], c: 0 },
            { p: 'Se 7/9 de uma quantia é R$ 63, qual o total?', o: ['R$ 81', 'R$ 72', 'R$ 90', 'R$ 99'], c: 0 },
            { p: 'Se 4/7 de uma quantia é R$ 80, qual o total?', o: ['R$ 140', 'R$ 120', 'R$ 160', 'R$ 100'], c: 0 },
            { p: 'Se 3/10 de um número é 30, qual é o número?', o: ['100', '90', '80', '120'], c: 0 },
            { p: 'Se 5/6 de uma quantia é R$ 50, qual o total?', o: ['R$ 60', 'R$ 55', 'R$ 65', 'R$ 70'], c: 0 },
            { p: 'Se 1/4 de um número é 7, qual é o número?', o: ['28', '21', '14', '35'], c: 0 },
            { p: 'Se 2/3 de um número é 18, qual é o número?', o: ['27', '24', '30', '36'], c: 0 },
            { p: 'Se 5/9 de uma quantia é R$ 45, qual o total?', o: ['R$ 81', 'R$ 72', 'R$ 90', 'R$ 63'], c: 0 },
            { p: 'Se 4/5 de uma quantia é R$ 100, qual o total?', o: ['R$ 125', 'R$ 120', 'R$ 100', 'R$ 150'], c: 0 },
            { p: 'Se 3/8 de um número é 24, qual é o número?', o: ['64', '56', '72', '48'], c: 0 },
            { p: 'Se 7/10 de uma quantia é R$ 140, qual o total?', o: ['R$ 200', 'R$ 180', 'R$ 210', 'R$ 160'], c: 0 },
            { p: 'Se 2/9 de um número é 14, qual é o número?', o: ['63', '54', '72', '45'], c: 0 },
            { p: 'Se 5/12 de uma quantia é R$ 100, qual o total?', o: ['R$ 240', 'R$ 200', 'R$ 220', 'R$ 260'], c: 0 },
            { p: 'Se 6/7 de um número é 42, qual é o número?', o: ['49', '48', '56', '54'], c: 0 },
            { p: 'Se 3/11 de uma quantia é R$ 30, qual o total?', o: ['R$ 110', 'R$ 100', 'R$ 90', 'R$ 120'], c: 0 },
            { p: 'Se 8/9 de uma quantia é R$ 72, qual o total?', o: ['R$ 81', 'R$ 80', 'R$ 72', 'R$ 90'], c: 0 },
            { p: 'Se 5/7 de um número é 35, qual é o número?', o: ['49', '42', '56', '45'], c: 0 },
            { p: 'Se 2/11 de um número é 8, qual é o número?', o: ['44', '22', '33', '55'], c: 0 },
            { p: 'Se 9/10 de uma quantia é R$ 180, qual o total?', o: ['R$ 200', 'R$ 190', 'R$ 210', 'R$ 180'], c: 0 },
            { p: 'Se 4/13 de um número é 16, qual é o número?', o: ['52', '48', '56', '44'], c: 0 },
            { p: 'Se 7/8 de uma quantia é R$ 84, qual o total?', o: ['R$ 96', 'R$ 92', 'R$ 88', 'R$ 100'], c: 0 },
            { p: 'Se 3/4 de um número é 21, qual é o número?', o: ['28', '24', '32', '27'], c: 0 },
            { p: 'Se 6/11 de um número é 30, qual é o número?', o: ['55', '50', '60', '45'], c: 0 },
            { p: 'Se 5/16 de uma quantia é R$ 50, qual o total?', o: ['R$ 160', 'R$ 150', 'R$ 140', 'R$ 170'], c: 0 }
        ],
        grandezasMedidas: [
            { p: 'O que é uma grandeza?', o: ['Tudo o que pode ser medido', 'Apenas o comprimento', 'Apenas o peso', 'Apenas o tempo'], c: 0 },
            { p: 'Qual a unidade padrão de comprimento?', o: ['Metro (m)', 'Quilograma (kg)', 'Segundo (s)', 'Litro (L)'], c: 0 },
            { p: 'Qual a unidade padrão de massa?', o: ['Quilograma (kg)', 'Metro (m)', 'Segundo (s)', 'Litro (L)'], c: 0 },
            { p: 'Qual a unidade padrão de tempo?', o: ['Segundo (s)', 'Metro (m)', 'Quilograma (kg)', 'Litro (L)'], c: 0 },
            { p: 'Qual a unidade padrão de capacidade?', o: ['Litro (L)', 'Metro (m)', 'Quilograma (kg)', 'Segundo (s)'], c: 0 },
            { p: 'Quantos metros tem 1 km?', o: ['1000 m', '100 m', '10 m', '10000 m'], c: 0 },
            { p: 'Quantos metros tem 1 hm?', o: ['100 m', '10 m', '1000 m', '10000 m'], c: 0 },
            { p: 'Quantos metros tem 1 dam?', o: ['10 m', '100 m', '1000 m', '1 m'], c: 0 },
            { p: 'Quantos centímetros tem 1 metro?', o: ['100 cm', '10 cm', '1000 cm', '10000 cm'], c: 0 },
            { p: 'Quantos milímetros tem 1 metro?', o: ['1000 mm', '100 mm', '10 mm', '10000 mm'], c: 0 },
            { p: 'Quantos milímetros tem 1 centímetro?', o: ['10 mm', '100 mm', '1 mm', '1000 mm'], c: 0 },
            { p: 'Quantos decímetros tem 1 metro?', o: ['10 dm', '100 dm', '1 dm', '1000 dm'], c: 0 },
            { p: 'Quantos metros tem 5 km?', o: ['5000 m', '500 m', '50 m', '50000 m'], c: 0 },
            { p: 'Quantos metros tem 3,5 km?', o: ['3500 m', '350 m', '35 m', '35000 m'], c: 0 },
            { p: 'Quantos centímetros tem 2,5 m?', o: ['250 cm', '25 cm', '2500 cm', '25000 cm'], c: 0 },
            { p: 'Quantos milímetros tem 4,2 cm?', o: ['42 mm', '420 mm', '4,2 mm', '4200 mm'], c: 0 },
            { p: 'Quantos metros tem 250 cm?', o: ['2,5 m', '25 m', '0,25 m', '2500 m'], c: 0 },
            { p: 'Quantos metros tem 3500 mm?', o: ['3,5 m', '35 m', '0,35 m', '350 m'], c: 0 },
            { p: 'Quantos km tem 4500 m?', o: ['4,5 km', '45 km', '0,45 km', '450 km'], c: 0 },
            { p: 'Quantos cm tem 0,8 m?', o: ['80 cm', '8 cm', '800 cm', '8000 cm'], c: 0 },
            { p: 'Quantos gramas tem 1 kg?', o: ['1000 g', '100 g', '10 g', '10000 g'], c: 0 },
            { p: 'Quantos gramas tem 1,5 kg?', o: ['1500 g', '150 g', '15 g', '15000 g'], c: 0 },
            { p: 'Quantos kg tem 2500 g?', o: ['2,5 kg', '25 kg', '0,25 kg', '250 kg'], c: 0 },
            { p: 'Quantos mg tem 1 g?', o: ['1000 mg', '100 mg', '10 mg', '10000 mg'], c: 0 },
            { p: 'Quantos kg tem 1 tonelada?', o: ['1000 kg', '100 kg', '10 kg', '10000 kg'], c: 0 },
            { p: 'Quantos gramas tem 2,5 kg?', o: ['2500 g', '250 g', '25 g', '25000 g'], c: 0 },
            { p: 'Quantos kg tem 5000 g?', o: ['5 kg', '50 kg', '0,5 kg', '500 kg'], c: 0 },
            { p: 'Quantos minutos tem 1 hora?', o: ['60 min', '100 min', '30 min', '24 min'], c: 0 },
            { p: 'Quantos segundos tem 1 minuto?', o: ['60 s', '100 s', '30 s', '24 s'], c: 0 },
            { p: 'Quantos segundos tem 1 hora?', o: ['3600 s', '600 s', '60 s', '360 s'], c: 0 },
            { p: 'Quantas horas tem 1 dia?', o: ['24 h', '12 h', '60 h', '48 h'], c: 0 },
            { p: 'Quantos minutos tem 2 horas?', o: ['120 min', '100 min', '60 min', '200 min'], c: 0 },
            { p: 'Quantos segundos tem 5 minutos?', o: ['300 s', '500 s', '50 s', '30 s'], c: 0 },
            { p: 'Quantos minutos tem 2,5 horas?', o: ['150 min', '120 min', '250 min', '100 min'], c: 0 },
            { p: 'Quantas horas tem 180 minutos?', o: ['3 h', '2 h', '1 h', '4 h'], c: 0 },
            { p: 'Quantos dias tem 72 horas?', o: ['3 dias', '2 dias', '4 dias', '5 dias'], c: 0 },
            { p: 'Quantos segundos tem 2 horas?', o: ['7200 s', '720 s', '120 s', '3600 s'], c: 0 },
            { p: 'Quantas horas tem 1 semana?', o: ['168 h', '120 h', '100 h', '200 h'], c: 0 },
            { p: 'Quantos minutos tem 1 dia?', o: ['1440 min', '1200 min', '2400 min', '600 min'], c: 0 },
            { p: 'Quantos segundos tem 1 dia?', o: ['86400 s', '3600 s', '7200 s', '1440 s'], c: 0 },
            { p: 'Como se calcula a área de um quadrado?', o: ['lado × lado', 'base × altura', '2 × lado', 'lado³'], c: 0 },
            { p: 'Como se calcula a área de um retângulo?', o: ['base × altura', 'lado × lado', '2 × (base + altura)', 'base + altura'], c: 0 },
            { p: 'Como se calcula a área de um triângulo?', o: ['(base × altura) / 2', 'base × altura', 'base + altura', 'lado × lado'], c: 0 },
            { p: 'Qual a área de um quadrado de lado 5 cm?', o: ['25 cm²', '10 cm²', '20 cm²', '15 cm²'], c: 0 },
            { p: 'Qual a área de um quadrado de lado 8 cm?', o: ['64 cm²', '16 cm²', '32 cm²', '48 cm²'], c: 0 },
            { p: 'Qual a área de um retângulo de base 6 cm e altura 4 cm?', o: ['24 cm²', '10 cm²', '20 cm²', '12 cm²'], c: 0 },
            { p: 'Qual a área de um retângulo de base 10 m e altura 5 m?', o: ['50 m²', '15 m²', '30 m²', '25 m²'], c: 0 },
            { p: 'Qual a área de um triângulo de base 8 cm e altura 6 cm?', o: ['24 cm²', '48 cm²', '14 cm²', '28 cm²'], c: 0 },
            { p: 'Qual a área de um triângulo de base 10 m e altura 4 m?', o: ['20 m²', '40 m²', '14 m²', '30 m²'], c: 0 },
            { p: 'Qual a área de um quadrado de lado 12 cm?', o: ['144 cm²', '24 cm²', '48 cm²', '100 cm²'], c: 0 },
            { p: 'Qual a área de um retângulo de base 7 m e altura 3 m?', o: ['21 m²', '10 m²', '14 m²', '24 m²'], c: 0 },
            { p: 'Qual a área de um quadrado de lado 9 cm?', o: ['81 cm²', '18 cm²', '36 cm²', '72 cm²'], c: 0 },
            { p: 'Qual a área de um retângulo de base 15 cm e altura 4 cm?', o: ['60 cm²', '19 cm²', '40 cm²', '30 cm²'], c: 0 },
            { p: 'Qual a área de um triângulo de base 12 cm e altura 5 cm?', o: ['30 cm²', '60 cm²', '17 cm²', '24 cm²'], c: 0 },
            { p: 'Qual a área de um quadrado de lado 6 m?', o: ['36 m²', '12 m²', '24 m²', '18 m²'], c: 0 },
            { p: 'Qual a área de um retângulo de base 20 m e altura 10 m?', o: ['200 m²', '30 m²', '100 m²', '150 m²'], c: 0 },
            { p: 'Qual a área de um triângulo de base 14 cm e altura 8 cm?', o: ['56 cm²', '112 cm²', '22 cm²', '64 cm²'], c: 0 },
            { p: 'Como se calcula o volume de um cubo?', o: ['aresta³', 'aresta²', '6 × aresta', 'aresta × 2'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 3 cm?', o: ['27 cm³', '9 cm³', '18 cm³', '6 cm³'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 4 cm?', o: ['64 cm³', '16 cm³', '32 cm³', '12 cm³'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 5 cm?', o: ['125 cm³', '25 cm³', '75 cm³', '15 cm³'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 2 cm?', o: ['8 cm³', '4 cm³', '6 cm³', '2 cm³'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 6 cm?', o: ['216 cm³', '36 cm³', '108 cm³', '18 cm³'], c: 0 },
            { p: 'Como se calcula o volume de um paralelepípedo?', o: ['comprimento × largura × altura', 'comprimento + largura + altura', 'comprimento × altura', 'aresta³'], c: 0 },
            { p: 'Qual o volume de um paralelepípedo de 5 × 4 × 3 cm?', o: ['60 cm³', '12 cm³', '20 cm³', '45 cm³'], c: 0 },
            { p: 'Qual o volume de um paralelepípedo de 8 × 3 × 2 cm?', o: ['48 cm³', '13 cm³', '24 cm³', '36 cm³'], c: 0 },
            { p: 'Qual o volume de um paralelepípedo de 10 × 5 × 2 cm?', o: ['100 cm³', '17 cm³', '50 cm³', '80 cm³'], c: 0 },
            { p: 'Qual o volume de um paralelepípedo de 6 × 6 × 4 cm?', o: ['144 cm³', '16 cm³', '72 cm³', '96 cm³'], c: 0 },
            { p: 'Quantos cm² tem 1 m²?', o: ['10000 cm²', '100 cm²', '1000 cm²', '100000 cm²'], c: 0 },
            { p: 'Quantos cm³ tem 1 m³?', o: ['1.000.000 cm³', '1000 cm³', '10000 cm³', '100 cm³'], c: 0 },
            { p: 'Quantos mm² tem 1 cm²?', o: ['100 mm²', '10 mm²', '1000 mm²', '10000 mm²'], c: 0 },
            { p: 'Quantos mL tem 1 litro?', o: ['1000 mL', '100 mL', '10 mL', '10000 mL'], c: 0 },
            { p: 'Quantos litros tem 1 m³?', o: ['1000 L', '100 L', '10 L', '10000 L'], c: 0 },
            { p: 'Quantos mL tem 0,5 L?', o: ['500 mL', '50 mL', '5000 mL', '5 mL'], c: 0 },
            { p: 'Quantos litros tem 2500 mL?', o: ['2,5 L', '25 L', '0,25 L', '250 L'], c: 0 },
            { p: 'Qual a unidade de medida de área?', o: ['m²', 'm', 'm³', 'kg'], c: 0 },
            { p: 'Qual a unidade de medida de volume?', o: ['m³', 'm²', 'm', 'L'], c: 0 },
            { p: 'Qual a unidade de medida de comprimento?', o: ['m', 'm²', 'm³', 'kg'], c: 0 },
            { p: 'Quantos segundos tem 1 hora e meia?', o: ['5400 s', '3600 s', '1800 s', '7200 s'], c: 0 },
            { p: 'Quantos minutos tem 1 hora e 15 minutos?', o: ['75 min', '60 min', '90 min', '105 min'], c: 0 },
            { p: 'Quantas horas tem 90 minutos?', o: ['1,5 h', '2 h', '1 h', '3 h'], c: 0 },
            { p: 'Quantos dias tem 48 horas?', o: ['2 dias', '1 dia', '3 dias', '4 dias'], c: 0 },
            { p: 'Quantos minutos tem 3 horas?', o: ['180 min', '300 min', '120 min', '240 min'], c: 0 },
            { p: 'Quantos segundos tem 10 minutos?', o: ['600 s', '100 s', '1000 s', '60 s'], c: 0 },
            { p: 'Quantos segundos tem 1/2 hora?', o: ['1800 s', '3600 s', '900 s', '5400 s'], c: 0 },
            { p: 'Quantos minutos tem 1/4 de hora?', o: ['15 min', '30 min', '45 min', '60 min'], c: 0 },
            { p: 'Quantos minutos tem 3/4 de hora?', o: ['45 min', '30 min', '15 min', '60 min'], c: 0 },
            { p: 'Quantas horas tem 300 minutos?', o: ['5 h', '3 h', '4 h', '6 h'], c: 0 },
            { p: 'Quantos cm tem 3 m?', o: ['300 cm', '30 cm', '3000 cm', '30000 cm'], c: 0 },
            { p: 'Quantos mm tem 5 cm?', o: ['50 mm', '500 mm', '5 mm', '5000 mm'], c: 0 },
            { p: 'Quantos m tem 7000 mm?', o: ['7 m', '70 m', '0,7 m', '700 m'], c: 0 },
            { p: 'Quantos km tem 2500 m?', o: ['2,5 km', '25 km', '0,25 km', '250 km'], c: 0 },
            { p: 'Quantos g tem 3,2 kg?', o: ['3200 g', '320 g', '32 g', '32000 g'], c: 0 },
            { p: 'Quantos kg tem 7500 g?', o: ['7,5 kg', '75 kg', '0,75 kg', '750 kg'], c: 0 },
            { p: 'Quantos mg tem 2,5 g?', o: ['2500 mg', '250 mg', '25 mg', '25000 mg'], c: 0 },
            { p: 'Quantas toneladas tem 3000 kg?', o: ['3 toneladas', '30 toneladas', '0,3 toneladas', '300 toneladas'], c: 0 },
            { p: 'Quantos kg tem 0,5 tonelada?', o: ['500 kg', '50 kg', '5000 kg', '5 kg'], c: 0 },
            { p: 'Qual o perímetro de um quadrado de lado 7 cm?', o: ['28 cm', '14 cm', '49 cm', '21 cm'], c: 0 },
            { p: 'Qual o perímetro de um quadrado de lado 9 m?', o: ['36 m', '18 m', '81 m', '27 m'], c: 0 },
            { p: 'Qual o perímetro de um retângulo de 8 × 5 cm?', o: ['26 cm', '40 cm', '13 cm', '30 cm'], c: 0 },
            { p: 'Qual o perímetro de um retângulo de 12 × 7 m?', o: ['38 m', '84 m', '19 m', '40 m'], c: 0 },
            { p: 'Qual o perímetro de um triângulo de lados 5, 6 e 7 cm?', o: ['18 cm', '15 cm', '21 cm', '30 cm'], c: 0 },
            { p: 'Qual o perímetro de um quadrado de lado 11 cm?', o: ['44 cm', '22 cm', '121 cm', '33 cm'], c: 0 },
            { p: 'Qual o perímetro de um retângulo de 15 × 10 cm?', o: ['50 cm', '150 cm', '25 cm', '75 cm'], c: 0 },
            { p: 'Qual o perímetro de um triângulo equilátero de lado 6 cm?', o: ['18 cm', '12 cm', '36 cm', '24 cm'], c: 0 },
            { p: 'Qual o perímetro de um quadrado de lado 2,5 m?', o: ['10 m', '5 m', '6,25 m', '7,5 m'], c: 0 },
            { p: 'Qual o perímetro de um retângulo de 20 × 15 m?', o: ['70 m', '300 m', '35 m', '80 m'], c: 0 },
            { p: 'Qual o perímetro de um triângulo isósceles com lados 7, 7 e 4 cm?', o: ['18 cm', '14 cm', '21 cm', '11 cm'], c: 0 },
            { p: 'Qual o perímetro de um quadrado de lado 3,5 cm?', o: ['14 cm', '7 cm', '12,25 cm', '10,5 cm'], c: 0 },
            { p: 'Quantos mL tem 2,5 L?', o: ['2500 mL', '250 mL', '25 mL', '25000 mL'], c: 0 },
            { p: 'Quantos L tem 3500 mL?', o: ['3,5 L', '35 L', '0,35 L', '350 L'], c: 0 },
            { p: 'Quantos L tem 1,5 m³?', o: ['1500 L', '150 L', '15 L', '15000 L'], c: 0 },
            { p: 'Quantos cm² tem 2 m²?', o: ['20000 cm²', '200 cm²', '2000 cm²', '200000 cm²'], c: 0 },
            { p: 'Quantos cm³ tem 0,5 m³?', o: ['500000 cm³', '5000 cm³', '50000 cm³', '500 cm³'], c: 0 },
            { p: 'Qual a área de um quadrado de lado 20 cm?', o: ['400 cm²', '40 cm²', '80 cm²', '200 cm²'], c: 0 },
            { p: 'Qual a área de um retângulo de base 25 m e altura 4 m?', o: ['100 m²', '29 m²', '50 m²', '80 m²'], c: 0 },
            { p: 'Qual a área de um triângulo de base 20 cm e altura 15 cm?', o: ['150 cm²', '300 cm²', '35 cm²', '100 cm²'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 7 cm?', o: ['343 cm³', '49 cm³', '147 cm³', '21 cm³'], c: 0 },
            { p: 'Qual o volume de um paralelepípedo de 12 × 5 × 4 cm?', o: ['240 cm³', '21 cm³', '120 cm³', '200 cm³'], c: 0 },
            { p: 'Qual o volume de um cubo de aresta 10 cm?', o: ['1000 cm³', '100 cm³', '300 cm³', '30 cm³'], c: 0 },
            { p: 'Se 1 m² = 10.000 cm², quantos cm² tem 3 m²?', o: ['30000 cm²', '3000 cm²', '300 cm²', '300000 cm²'], c: 0 },
            { p: 'Quantos mm tem 1,2 m?', o: ['1200 mm', '120 mm', '12 mm', '12000 mm'], c: 0 },
            { p: 'Quantos cm tem 0,5 m?', o: ['50 cm', '5 cm', '500 cm', '5000 cm'], c: 0 },
            { p: 'Quantos m tem 250 cm?', o: ['2,5 m', '25 m', '0,25 m', '2500 m'], c: 0 },
            { p: 'Quantas horas tem 1 dia e meio?', o: ['36 h', '24 h', '12 h', '48 h'], c: 0 },
            { p: 'Quantos minutos tem 2 dias?', o: ['2880 min', '1440 min', '1200 min', '2400 min'], c: 0 },
            { p: 'Quantos segundos tem 3 minutos?', o: ['180 s', '300 s', '30 s', '60 s'], c: 0 },
            { p: 'Se um carro percorre 60 km em 1 hora, quantos km percorre em 2,5 horas?', o: ['150 km', '120 km', '180 km', '100 km'], c: 0 },
            { p: 'Se uma torneira enche 20 L em 1 minuto, quantos litros enche em 5 minutos?', o: ['100 L', '50 L', '25 L', '200 L'], c: 0 },
            { p: 'Se um atleta corre 400 m em 1 minuto, quantos metros corre em 3 minutos?', o: ['1200 m', '800 m', '600 m', '1600 m'], c: 0 },
            { p: 'Se um elevador sobe 3 andares em 6 segundos, quantos andares sobe em 18 segundos?', o: ['9 andares', '6 andares', '12 andares', '18 andares'], c: 0 },
            { p: 'Se uma máquina produz 50 peças por minuto, quantas produz em 10 minutos?', o: ['500 peças', '100 peças', '200 peças', '1000 peças'], c: 0 },
            { p: 'Se 1 kg de queijo custa R$ 40, quanto custa 250 g?', o: ['R$ 10', 'R$ 20', 'R$ 15', 'R$ 5'], c: 0 },
            { p: 'Se 1 kg de café custa R$ 30, quanto custa 500 g?', o: ['R$ 15', 'R$ 20', 'R$ 10', 'R$ 25'], c: 0 },
            { p: 'Se 1 litro de suco custa R$ 8, quanto custa 250 mL?', o: ['R$ 2', 'R$ 4', 'R$ 1', 'R$ 3'], c: 0 },
            { p: 'Se 1 m de fita custa R$ 5, quanto custa 50 cm?', o: ['R$ 2,50', 'R$ 5', 'R$ 1,50', 'R$ 3'], c: 0 },
            { p: 'Um terreno retangular tem 20 m de comprimento e 15 m de largura. Qual sua área?', o: ['300 m²', '70 m²', '150 m²', '250 m²'], c: 0 },
            { p: 'Uma sala quadrada tem 8 m de lado. Qual sua área?', o: ['64 m²', '32 m²', '16 m²', '48 m²'], c: 0 },
            { p: 'Uma caixa cúbica tem 5 cm de aresta. Qual seu volume?', o: ['125 cm³', '25 cm³', '75 cm³', '100 cm³'], c: 0 },
            { p: 'Um aquário tem 60 cm × 30 cm × 40 cm. Qual seu volume?', o: ['72000 cm³', '130 cm³', '36000 cm³', '7200 cm³'], c: 0 },
            { p: 'Uma piscina tem 10 m × 5 m × 2 m. Quantos litros cabem?', o: ['100000 L', '10000 L', '50000 L', '5000 L'], c: 0 }
        ],
        sequencias: [
            { p: 'O que é uma sequência?', o: ['Lista de números em ordem lógica', 'Soma de números', 'Multiplicação de números', 'Divisão de números'], c: 0 },
            { p: 'Qual a regra da sequência 2, 4, 6, 8, ...?', o: ['Somar 2', 'Multiplicar por 2', 'Somar 4', 'Multiplicar por 4'], c: 0 },
            { p: 'Qual a regra da sequência 1, 2, 4, 8, ...?', o: ['Multiplicar por 2', 'Somar 2', 'Somar 4', 'Multiplicar por 4'], c: 0 },
            { p: 'Qual a regra da sequência 3, 6, 9, 12, ...?', o: ['Somar 3', 'Multiplicar por 3', 'Somar 6', 'Multiplicar por 2'], c: 0 },
            { p: 'Qual a regra da sequência 5, 10, 15, 20, ...?', o: ['Somar 5', 'Multiplicar por 5', 'Somar 10', 'Multiplicar por 2'], c: 0 },
            { p: 'Qual o próximo termo de 2, 4, 6, 8, ...?', o: ['10', '9', '12', '16'], c: 0 },
            { p: 'Qual o próximo termo de 1, 3, 5, 7, ...?', o: ['9', '8', '10', '11'], c: 0 },
            { p: 'Qual o próximo termo de 5, 10, 15, 20, ...?', o: ['25', '30', '22', '24'], c: 0 },
            { p: 'Qual o próximo termo de 10, 20, 30, 40, ...?', o: ['50', '45', '55', '60'], c: 0 },
            { p: 'Qual o próximo termo de 1, 2, 4, 8, ...?', o: ['16', '12', '10', '14'], c: 0 },
            { p: 'Qual o próximo termo de 2, 6, 18, ...?', o: ['54', '36', '24', '48'], c: 0 },
            { p: 'Qual o próximo termo de 3, 9, 27, ...?', o: ['81', '54', '36', '72'], c: 0 },
            { p: 'Qual o próximo termo de 1, 4, 9, 16, ...?', o: ['25', '20', '24', '36'], c: 0 },
            { p: 'Qual o próximo termo de 1, 8, 27, 64, ...?', o: ['125', '100', '81', '64'], c: 0 },
            { p: 'Qual o próximo termo de 2, 3, 5, 8, 12, ...?', o: ['17', '16', '15', '18'], c: 0 },
            { p: 'O que é uma PA?', o: ['Progressão Aritmética', 'Progressão Algébrica', 'Progressão Angular', 'Progressão Absoluta'], c: 0 },
            { p: 'O que é uma PG?', o: ['Progressão Geométrica', 'Progressão Geral', 'Progressão Gradativa', 'Progressão Global'], c: 0 },
            { p: 'Na PA, o que é a razão?', o: ['O número somado a cada termo', 'O número multiplicado a cada termo', 'O primeiro termo', 'A soma dos termos'], c: 0 },
            { p: 'Na PG, o que é a razão?', o: ['O número multiplicado a cada termo', 'O número somado a cada termo', 'O primeiro termo', 'A soma dos termos'], c: 0 },
            { p: 'Qual a razão da PA (3, 7, 11, 15, ...)?', o: ['4', '3', '7', '5'], c: 0 },
            { p: 'Qual a razão da PA (5, 8, 11, 14, ...)?', o: ['3', '5', '8', '2'], c: 0 },
            { p: 'Qual a razão da PA (10, 20, 30, ...)?', o: ['10', '20', '5', '15'], c: 0 },
            { p: 'Qual a razão da PA (2, 5, 8, 11, ...)?', o: ['3', '2', '5', '4'], c: 0 },
            { p: 'Qual a razão da PA (100, 90, 80, ...)?', o: ['-10', '10', '-20', '20'], c: 0 },
            { p: 'Qual a razão da PG (2, 6, 18, ...)?', o: ['3', '2', '6', '4'], c: 0 },
            { p: 'Qual a razão da PG (3, 9, 27, ...)?', o: ['3', '9', '27', '6'], c: 0 },
            { p: 'Qual a razão da PG (1, 5, 25, ...)?', o: ['5', '1', '25', '10'], c: 0 },
            { p: 'Qual a razão da PG (2, 4, 8, 16, ...)?', o: ['2', '4', '8', '1'], c: 0 },
            { p: 'Qual a razão da PG (100, 50, 25, ...)?', o: ['1/2', '2', '50', '25'], c: 0 },
            { p: 'A sequência (2, 4, 6, 8) é:', o: ['PA de razão 2', 'PG de razão 2', 'PA de razão 4', 'PG de razão 4'], c: 0 },
            { p: 'A sequência (2, 4, 8, 16) é:', o: ['PG de razão 2', 'PA de razão 2', 'PA de razão 4', 'PG de razão 4'], c: 0 },
            { p: 'A sequência (5, 10, 15, 20) é:', o: ['PA de razão 5', 'PG de razão 5', 'PA de razão 10', 'PG de razão 10'], c: 0 },
            { p: 'A sequência (3, 9, 27, 81) é:', o: ['PG de razão 3', 'PA de razão 3', 'PA de razão 9', 'PG de razão 9'], c: 0 },
            { p: 'A sequência (10, 20, 30, 40) é:', o: ['PA de razão 10', 'PG de razão 10', 'PA de razão 20', 'PG de razão 20'], c: 0 },
            { p: 'A sequência (1, 3, 9, 27) é:', o: ['PG de razão 3', 'PA de razão 3', 'PA de razão 2', 'PG de razão 2'], c: 0 },
            { p: 'A sequência (7, 14, 21, 28) é:', o: ['PA de razão 7', 'PG de razão 7', 'PA de razão 14', 'PG de razão 14'], c: 0 },
            { p: 'A sequência (2, 10, 50, 250) é:', o: ['PG de razão 5', 'PA de razão 5', 'PA de razão 8', 'PG de razão 8'], c: 0 },
            { p: 'A sequência (100, 80, 60, 40) é:', o: ['PA de razão -20', 'PG de razão -20', 'PA de razão 20', 'PG de razão 20'], c: 0 },
            { p: 'A sequência (81, 27, 9, 3) é:', o: ['PG de razão 1/3', 'PA de razão 1/3', 'PA de razão 3', 'PG de razão 3'], c: 0 },
            { p: 'Fórmula do termo geral da PA:', o: ['aₙ = a₁ + (n-1)r', 'aₙ = a₁ · rⁿ⁻¹', 'aₙ = a₁ + n', 'aₙ = a₁ · n'], c: 0 },
            { p: 'Fórmula do termo geral da PG:', o: ['aₙ = a₁ · qⁿ⁻¹', 'aₙ = a₁ + (n-1)r', 'aₙ = a₁ + q', 'aₙ = a₁ · n'], c: 0 },
            { p: 'Qual o 5º termo da PA (2, 5, 8, ...)?', o: ['14', '11', '17', '20'], c: 0 },
            { p: 'Qual o 6º termo da PA (3, 7, 11, ...)?', o: ['23', '19', '27', '15'], c: 0 },
            { p: 'Qual o 10º termo da PA (1, 4, 7, ...)?', o: ['28', '25', '31', '30'], c: 0 },
            { p: 'Qual o 8º termo da PA (5, 10, 15, ...)?', o: ['40', '35', '45', '50'], c: 0 },
            { p: 'Qual o 7º termo da PA (2, 6, 10, ...)?', o: ['26', '22', '30', '24'], c: 0 },
            { p: 'Qual o 5º termo da PG (2, 6, 18, ...)?', o: ['162', '54', '108', '486'], c: 0 },
            { p: 'Qual o 4º termo da PG (3, 9, 27, ...)?', o: ['81', '243', '54', '108'], c: 0 },
            { p: 'Qual o 6º termo da PG (1, 2, 4, ...)?', o: ['32', '16', '64', '8'], c: 0 },
            { p: 'Qual o 5º termo da PG (5, 10, 20, ...)?', o: ['80', '40', '160', '100'], c: 0 },
            { p: 'Qual o 4º termo da PG (2, 8, 32, ...)?', o: ['128', '64', '256', '512'], c: 0 },
            { p: 'Qual a soma dos 5 primeiros termos da PA (1, 3, 5, 7, ...)?', o: ['25', '20', '30', '15'], c: 0 },
            { p: 'Qual a soma dos 4 primeiros termos da PA (2, 4, 6, 8, ...)?', o: ['20', '18', '22', '16'], c: 0 },
            { p: 'Qual a soma dos 6 primeiros termos da PA (1, 2, 3, 4, ...)?', o: ['21', '18', '24', '20'], c: 0 },
            { p: 'Qual a soma dos 3 primeiros termos da PA (5, 10, 15, ...)?', o: ['30', '25', '35', '40'], c: 0 },
            { p: 'Qual a soma dos 5 primeiros termos da PG (1, 2, 4, 8, ...)?', o: ['31', '30', '32', '16'], c: 0 },
            { p: 'Sequência de Fibonacci é:', o: ['Cada termo é a soma dos dois anteriores', 'Cada termo é o dobro do anterior', 'Cada termo é o triplo do anterior', 'Cada termo é a metade do anterior'], c: 0 },
            { p: 'Qual o próximo número da sequência de Fibonacci (1, 1, 2, 3, 5, ...)?', o: ['8', '7', '9', '10'], c: 0 },
            { p: 'Qual o próximo número da sequência de Fibonacci (1, 1, 2, 3, 5, 8, ...)?', o: ['13', '11', '12', '14'], c: 0 },
            { p: 'Qual o próximo número da sequência de Fibonacci (2, 2, 4, 6, 10, ...)?', o: ['16', '14', '12', '18'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 4, 9, 16, 25, ...)?', o: ['36', '30', '42', '49'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 8, 27, 64, ...)?', o: ['125', '100', '81', '216'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 4, 6, 8, ...)?', o: ['10', '9', '12', '11'], c: 0 },
            { p: 'Qual o próximo número da sequência (10, 20, 30, ...)?', o: ['40', '50', '35', '45'], c: 0 },
            { p: 'Qual o próximo número da sequência (100, 90, 80, ...)?', o: ['70', '60', '75', '65'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 3, 5, 7, ...)?', o: ['9', '8', '10', '11'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 3, 5, 7, 11, ...)?', o: ['13', '12', '14', '15'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 2, 4, 7, 11, ...)?', o: ['16', '15', '14', '17'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 2, 6, 24, ...)?', o: ['120', '48', '72', '96'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 6, 12, 20, ...)?', o: ['30', '28', '24', '32'], c: 0 },
            { p: 'Qual o próximo número da sequência (3, 6, 12, 24, ...)?', o: ['48', '36', '42', '54'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 5, 25, 125, ...)?', o: ['625', '500', '750', '1000'], c: 0 },
            { p: 'Qual o próximo número da sequência (81, 27, 9, 3, ...)?', o: ['1', '0', '2', '6'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 4, 8, 16, ...)?', o: ['32', '24', '20', '30'], c: 0 },
            { p: 'Qual o próximo número da sequência (5, 25, 125, ...)?', o: ['625', '500', '750', '125'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 10, 100, 1000, ...)?', o: ['10000', '100000', '1000', '100'], c: 0 },
            { p: 'Qual o próximo número da sequência (7, 14, 21, 28, ...)?', o: ['35', '30', '40', '42'], c: 0 },
            { p: 'Qual o próximo número da sequência (9, 18, 27, ...)?', o: ['36', '35', '40', '45'], c: 0 },
            { p: 'Qual o próximo número da sequência (11, 22, 33, ...)?', o: ['44', '40', '45', '50'], c: 0 },
            { p: 'Qual o próximo número da sequência (4, 8, 16, 32, ...)?', o: ['64', '48', '56', '40'], c: 0 },
            { p: 'Qual o próximo número da sequência (100, 50, 25, ...)?', o: ['12,5', '10', '15', '20'], c: 0 },
            { p: 'Qual o próximo número da sequência (64, 32, 16, ...)?', o: ['8', '4', '12', '6'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 9, 25, 49, ...)?', o: ['81', '64', '100', '72'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 8, 18, 32, ...)?', o: ['50', '42', '48', '40'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 4, 9, 16, 25, 36, ...)?', o: ['49', '42', '48', '56'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 3, 6, 10, 15, ...)?', o: ['21', '18', '20', '24'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 2, 4, 8, 16, ...)?', o: ['32', '24', '20', '64'], c: 0 },
            { p: 'Qual o próximo número da sequência (3, 6, 9, 12, ...)?', o: ['15', '14', '16', '18'], c: 0 },
            { p: 'Qual o próximo número da sequência (5, 10, 20, 40, ...)?', o: ['80', '60', '50', '100'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 1, 2, 3, 5, 8, 13, ...)?', o: ['21', '20', '22', '24'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 5, 10, 17, ...)?', o: ['26', '24', '28', '30'], c: 0 },
            { p: 'Qual o próximo número da sequência (1000, 100, 10, ...)?', o: ['1', '0', '5', '0,1'], c: 0 },
            { p: 'Qual o 20º termo da PA (1, 3, 5, ...)?', o: ['39', '41', '37', '40'], c: 0 },
            { p: 'Qual o 15º termo da PA (2, 5, 8, ...)?', o: ['44', '47', '41', '50'], c: 0 },
            { p: 'Qual o 12º termo da PA (10, 20, 30, ...)?', o: ['120', '110', '130', '100'], c: 0 },
            { p: 'Qual o 10º termo da PA (5, 8, 11, ...)?', o: ['32', '30', '35', '29'], c: 0 },
            { p: 'Qual o 8º termo da PA (1, 5, 9, ...)?', o: ['29', '33', '25', '31'], c: 0 },
            { p: 'Qual o 6º termo da PG (1, 3, 9, ...)?', o: ['243', '729', '81', '162'], c: 0 },
            { p: 'Qual o 5º termo da PG (4, 8, 16, ...)?', o: ['64', '32', '128', '48'], c: 0 },
            { p: 'Qual o 4º termo da PG (5, 15, 45, ...)?', o: ['405', '135', '405', '270'], c: 0 },
            { p: 'Qual o 3º termo da PG (7, 14, ...)?', o: ['28', '21', '35', '56'], c: 0 },
            { p: 'Qual o 7º termo da PG (1, 2, 4, ...)?', o: ['64', '32', '128', '16'], c: 0 },
            { p: 'Se aₙ = 2n + 1, qual o 5º termo?', o: ['11', '9', '13', '10'], c: 0 },
            { p: 'Se aₙ = 3n - 1, qual o 4º termo?', o: ['11', '10', '12', '9'], c: 0 },
            { p: 'Se aₙ = n², qual o 6º termo?', o: ['36', '12', '24', '30'], c: 0 },
            { p: 'Se aₙ = 2n, qual o 8º termo?', o: ['16', '14', '18', '10'], c: 0 },
            { p: 'Se aₙ = n + 5, qual o 10º termo?', o: ['15', '14', '16', '20'], c: 0 },
            { p: 'Se aₙ = 5n - 2, qual o 3º termo?', o: ['13', '12', '15', '10'], c: 0 },
            { p: 'Se aₙ = 2ⁿ, qual o 5º termo?', o: ['32', '16', '64', '10'], c: 0 },
            { p: 'Se aₙ = 3ⁿ, qual o 3º termo?', o: ['27', '9', '81', '6'], c: 0 },
            { p: 'Se aₙ = n(n+1)/2, qual o 4º termo?', o: ['10', '12', '15', '8'], c: 0 },
            { p: 'Se aₙ = 2n², qual o 3º termo?', o: ['18', '12', '24', '6'], c: 0 },
            { p: 'Qual a soma dos 10 primeiros números naturais?', o: ['55', '50', '45', '60'], c: 0 },
            { p: 'Qual a soma dos 5 primeiros números ímpares?', o: ['25', '15', '20', '30'], c: 0 },
            { p: 'Qual a soma dos 4 primeiros números pares?', o: ['20', '18', '22', '16'], c: 0 },
            { p: 'Quantos termos tem a PA (1, 3, 5, ..., 19)?', o: ['10', '9', '11', '8'], c: 0 },
            { p: 'Quantos termos tem a PA (2, 4, 6, ..., 20)?', o: ['10', '9', '11', '12'], c: 0 },
            { p: 'Quantos termos tem a PA (5, 10, 15, ..., 50)?', o: ['10', '9', '11', '8'], c: 0 },
            { p: 'Quantos termos tem a PA (1, 4, 7, ..., 28)?', o: ['10', '9', '11', '8'], c: 0 },
            { p: 'Quantos termos tem a PA (3, 6, 9, ..., 30)?', o: ['10', '9', '11', '12'], c: 0 },
            { p: 'Qual a soma dos termos da PA (1, 2, 3, ..., 10)?', o: ['55', '50', '45', '60'], c: 0 },
            { p: 'Qual a soma dos termos da PA (2, 4, 6, ..., 20)?', o: ['110', '100', '120', '90'], c: 0 },
            { p: 'Qual a soma dos termos da PA (1, 3, 5, ..., 19)?', o: ['100', '90', '110', '95'], c: 0 },
            { p: 'Qual a soma dos termos da PA (5, 10, 15, ..., 50)?', o: ['275', '250', '300', '325'], c: 0 },
            { p: 'Qual a soma dos termos da PA (10, 20, 30, ..., 100)?', o: ['550', '500', '600', '450'], c: 0 },
            { p: 'Em uma PA, a₁ = 3 e r = 4. Qual o 10º termo?', o: ['39', '43', '35', '40'], c: 0 },
            { p: 'Em uma PA, a₁ = 5 e r = 3. Qual o 8º termo?', o: ['26', '29', '23', '32'], c: 0 },
            { p: 'Em uma PA, a₁ = 10 e r = -2. Qual o 6º termo?', o: ['0', '2', '-2', '4'], c: 0 },
            { p: 'Em uma PA, a₁ = 100 e r = -10. Qual o 5º termo?', o: ['60', '70', '50', '80'], c: 0 },
            { p: 'Em uma PA, a₁ = 1 e r = 5. Qual o 12º termo?', o: ['56', '61', '51', '66'], c: 0 },
            { p: 'Em uma PG, a₁ = 2 e q = 3. Qual o 5º termo?', o: ['162', '54', '108', '486'], c: 0 },
            { p: 'Em uma PG, a₁ = 1 e q = 2. Qual o 8º termo?', o: ['128', '64', '256', '32'], c: 0 },
            { p: 'Em uma PG, a₁ = 3 e q = 2. Qual o 6º termo?', o: ['96', '48', '192', '24'], c: 0 },
            { p: 'Em uma PG, a₁ = 100 e q = 1/2. Qual o 3º termo?', o: ['25', '50', '12,5', '75'], c: 0 },
            { p: 'Em uma PG, a₁ = 5 e q = 2. Qual o 4º termo?', o: ['40', '20', '80', '10'], c: 0 },
            { p: 'O que é uma sequência recursiva?', o: ['Cada termo depende do anterior', 'Cada termo é independente', 'Todos os termos são iguais', 'Não tem regra'], c: 0 },
            { p: 'A sequência de Fibonacci começa com:', o: ['1, 1', '1, 2', '0, 1', '2, 3'], c: 0 },
            { p: 'Qual o 9º termo da sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13, 21, ...)?', o: ['34', '30', '36', '28'], c: 0 },
            { p: 'Qual o 10º termo da sequência de Fibonacci?', o: ['55', '50', '60', '45'], c: 0 },
            { p: 'Qual o 11º termo da sequência de Fibonacci?', o: ['89', '80', '90', '95'], c: 0 },
            { p: 'Na sequência 1, 4, 9, 16, ..., qual o 6º termo?', o: ['36', '25', '30', '49'], c: 0 },
            { p: 'Na sequência 1, 8, 27, ..., qual o 5º termo?', o: ['125', '64', '100', '216'], c: 0 },
            { p: 'Na sequência 2, 4, 8, 16, ..., qual o 7º termo?', o: ['128', '64', '32', '256'], c: 0 },
            { p: 'Na sequência 3, 9, 27, ..., qual o 6º termo?', o: ['729', '243', '81', '2187'], c: 0 },
            { p: 'A sequência (2, 4, 8, 16) é uma:', o: ['PG crescente de razão 2', 'PA crescente de razão 2', 'PG decrescente', 'PA decrescente'], c: 0 },
            { p: 'A sequência (100, 50, 25) é uma:', o: ['PG decrescente de razão 1/2', 'PA decrescente de razão 1/2', 'PG crescente', 'PA crescente'], c: 0 },
            { p: 'A sequência (5, 5, 5, 5) é uma:', o: ['PA constante de razão 0', 'PG de razão 1', 'Ambas estão corretas', 'Nenhuma das anteriores'], c: 2 },
            { p: 'Quantos termos tem a sequência (1, 2, 3, ..., 50)?', o: ['50', '49', '51', '48'], c: 0 },
            { p: 'Quantos números pares existem de 1 a 100?', o: ['50', '49', '51', '48'], c: 0 },
            { p: 'Quantos números ímpares existem de 1 a 100?', o: ['50', '49', '51', '48'], c: 0 },
            { p: 'A soma dos números de 1 a 100 é:', o: ['5050', '5000', '5100', '4900'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 5, 11, 23, ...)?', o: ['47', '45', '46', '48'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 2, 6, 24, 120, ...)?', o: ['720', '600', '480', '840'], c: 0 },
            { p: 'Qual o próximo número da sequência (2, 3, 5, 9, 17, ...)?', o: ['33', '31', '35', '29'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 3, 7, 15, ...)?', o: ['31', '29', '33', '27'], c: 0 },
            { p: 'Qual o próximo número da sequência (1, 2, 4, 8, 16, 32, ...)?', o: ['64', '48', '56', '40'], c: 0 }
        ]
    },

    config: {
        totalPerguntasExpandidas: 800,
        perguntasPorSimulado: 20,
        minPorMateria: 3,
        maxPorMateria: 4
    }
};