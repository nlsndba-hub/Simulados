// ============================================================
// DADOS DA MATÉRIA: INGLÊS - 600 PERGUNTAS BASE
// ============================================================

window.MATERIA_ATUAL = {
    id: 'ingles',
    nome: 'Inglês',
    subtitulo: '8º ano · Revisão completa',
    emoji: '📘',
    descricaoFooter: '🧠 Estude com calma · 600 perguntas disponíveis',

    topicos: [
        {
            id: 'past',
            nome: 'Past Continuous',
            emoji: '⏳',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Eu estava fazendo algo quando..."</strong><br>
                    <span style="font-size:0.9rem;">Ação que estava em andamento no passado</span>
                </div>
                <p><strong>📌 Como formar:</strong></p>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Sujeito</th><th>Verbo to be (passado)</th><th>Verbo + ING</th></tr>
                        <tr><td>I / He / She / It</td><td><strong>WAS</strong></td><td>playing / reading / studying</td></tr>
                        <tr><td>You / We / They</td><td><strong>WERE</strong></td><td>playing / reading / studying</td></tr>
                    </table>
                </div>
                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"WAS para EU, ELE, ELA, ISSO / WERE para VOCÊ, NÓS, ELES"</em>
                </div>
                <div class="exemplo-box">
                    <div class="en">📘 I <strong>was reading</strong> a book when he arrived.</div>
                    <div class="pt">🇧🇷 Eu <strong>estava lendo</strong> um livro quando ele chegou.</div>
                    <hr style="margin:8px 0;border:0;border-top:1px dashed #b0cce0;">
                    <div class="en">📘 They <strong>were playing</strong> soccer at 5 PM.</div>
                    <div class="pt">🇧🇷 Eles <strong>estavam jogando</strong> futebol às 17h.</div>
                </div>
                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Usar o passado simples quando deveria ser o contínuo.<br>
                    ❌ <em>I read a book when he arrived.</em><br>
                    ✅ <em>I was reading a book when he arrived.</em>
                </div>
            `
        },
        {
            id: 'transport',
            nome: 'Transportes',
            emoji: '🚌',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"The means of transportation"</strong><br>
                    <span style="font-size:0.9rem;">= Meios de transporte · Use <strong>BY</strong> + transporte</span>
                </div>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Português</th><th>Inglês</th><th>Exemplo</th></tr>
                        <tr><td>ônibus</td><td><strong>bus</strong></td><td>I go to school <strong>by bus</strong>.</td></tr>
                        <tr><td>trem</td><td><strong>train</strong></td><td>We travel <strong>by train</strong>.</td></tr>
                        <tr><td>avião</td><td><strong>plane</strong></td><td>She goes <strong>by plane</strong>.</td></tr>
                        <tr><td>metrô</td><td><strong>subway</strong></td><td>They take the <strong>subway</strong>.</td></tr>
                        <tr><td>barco</td><td><strong>ferry / ship</strong></td><td>We crossed <strong>by ferry</strong>.</td></tr>
                        <tr><td>bicicleta</td><td><strong>bicycle / bike</strong></td><td>I ride my <strong>bike</strong>.</td></tr>
                        <tr><td>carro</td><td><strong>car</strong></td><td>He goes <strong>by car</strong>.</td></tr>
                    </table>
                </div>
                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"BY + transporte SEM artigo"</em><br>
                    ✅ by car · by bus · by plane · by train<br>
                    ❌ by a car · by the bus
                </div>
            `
        },
        {
            id: 'phrasal',
            nome: 'Phrasal Verbs',
            emoji: '🔗',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Verbo + preposição = novo significado"</strong>
                </div>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Phrasal Verb</th><th>Significado</th></tr>
                        <tr><td><strong>turn on</strong></td><td>ligar</td></tr>
                        <tr><td><strong>turn off</strong></td><td>desligar</td></tr>
                        <tr><td><strong>give up</strong></td><td>desistir</td></tr>
                        <tr><td><strong>look after</strong></td><td>cuidar</td></tr>
                        <tr><td><strong>put off</strong></td><td>adiar</td></tr>
                        <tr><td><strong>pick up</strong></td><td>pegar / buscar</td></tr>
                        <tr><td><strong>run out of</strong></td><td>acabar</td></tr>
                        <tr><td><strong>find out</strong></td><td>descobrir</td></tr>
                        <tr><td><strong>get along</strong></td><td>se dar bem</td></tr>
                        <tr><td><strong>take off</strong></td><td>decolar / tirar</td></tr>
                        <tr><td><strong>break down</strong></td><td>quebrar</td></tr>
                        <tr><td><strong>look for</strong></td><td>procurar</td></tr>
                    </table>
                </div>
            `
        },
        {
            id: 'tag',
            nome: 'Tag Questions',
            emoji: '❓',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Não é mesmo?"</strong>
                </div>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Frase</th><th>Tag</th><th>Exemplo</th></tr>
                        <tr><td>Positiva</td><td>Negativa</td><td>You are a student, <strong>aren't you?</strong></td></tr>
                        <tr><td>Negativa</td><td>Positiva</td><td>You aren't a student, <strong>are you?</strong></td></tr>
                    </table>
                </div>
                <div class="dica-macet">
                    <strong>🎯 MACETE:</strong> <em>"Positivo + negativo = pergunta; Negativo + positivo = pergunta"</em>
                </div>
            `
        },
        {
            id: 'would',
            nome: 'Would Like To',
            emoji: '🍽️',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Gostaria de..." (forma educada)</strong>
                </div>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Sujeito</th><th>Would like</th><th>To + verbo</th></tr>
                        <tr><td>I / You / She / We / They</td><td><strong>would like</strong></td><td>to visit / to eat / to go</td></tr>
                    </table>
                </div>
                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Esquecer o <em>to</em>.<br>
                    ❌ <em>I would like visit Paris.</em><br>
                    ✅ <em>I would like <strong>to</strong> visit Paris.</em>
                </div>
            `
        },
        {
            id: 'modal',
            nome: 'Modal Verbs',
            emoji: '⚡',
            explicacao: `
                <div class="macete-box">
                    <span class="emoji-grande">🧠</span>
                    <strong>"Verbos que dão tom à frase"</strong>
                </div>
                <div class="tabela-regra">
                    <table>
                        <tr><th>Modal</th><th>Significado</th><th>Exemplo</th></tr>
                        <tr><td><strong>CAN</strong></td><td>habilidade</td><td>I <strong>can</strong> swim.</td></tr>
                        <tr><td><strong>COULD</strong></td><td>pedido educado</td><td><strong>Could</strong> you help me?</td></tr>
                        <tr><td><strong>MAY</strong></td><td>permissão</td><td><strong>May</strong> I come in?</td></tr>
                        <tr><td><strong>MUST</strong></td><td>obrigação</td><td>You <strong>must</strong> study.</td></tr>
                        <tr><td><strong>SHOULD</strong></td><td>conselho</td><td>You <strong>should</strong> eat well.</td></tr>
                    </table>
                </div>
                <div class="erro-comum">
                    <strong>⚠️ ERRO COMUM:</strong> Usar <em>to</em> depois do modal.<br>
                    ❌ <em>She can to play.</em><br>
                    ✅ <em>She can play.</em>
                </div>
            `
        }
    ],

    perguntasBase: {
        past: [
            { p: 'I ___ (read) a book when he arrived.', o: ['was reading', 'were reading', 'read', 'am reading'], c: 0 },
            { p: 'They ___ (play) soccer at 5 PM yesterday.', o: ['was playing', 'were playing', 'played', 'play'], c: 1 },
            { p: 'She ___ (study) for the test all night.', o: ['was studying', 'were studying', 'studied', 'study'], c: 0 },
            { p: 'We ___ (watch) TV when the power went out.', o: ['was watching', 'were watching', 'watched', 'watch'], c: 1 },
            { p: 'He ___ (work) on his project at 10 AM.', o: ['was working', 'were working', 'worked', 'work'], c: 0 },
            { p: 'The kids ___ (sleep) when I called.', o: ['was sleeping', 'were sleeping', 'slept', 'sleep'], c: 1 },
            { p: 'It ___ (rain) heavily this morning.', o: ['was raining', 'were raining', 'rained', 'rain'], c: 0 },
            { p: 'My parents ___ (cook) dinner when I arrived.', o: ['was cooking', 'were cooking', 'cooked', 'cook'], c: 1 },
            { p: 'The teacher ___ (explain) the rule when the bell rang.', o: ['was explaining', 'were explaining', 'explained', 'explain'], c: 0 },
            { p: 'I ___ (not do) my homework when you called.', o: ['was not doing', 'were not doing', 'did not do', 'do not'], c: 0 },
            { p: 'They ___ (travel) to London in 2019?', o: ['Was they travelling', 'Were they travelling', 'Did they travel', 'Do they travel'], c: 1 },
            { p: 'He ___ (run) in the park when he fell.', o: ['was running', 'were running', 'ran', 'run'], c: 0 },
            { p: 'We ___ (wait) for the bus when it started to rain.', o: ['was waiting', 'were waiting', 'waited', 'wait'], c: 1 },
            { p: 'I ___ (make) lunch when the phone rang.', o: ['was making', 'were making', 'made', 'make'], c: 0 },
            { p: 'The birds ___ (sing) outside my window.', o: ['was singing', 'were singing', 'sang', 'sing'], c: 1 },
            { p: 'She ___ (cook) dinner when I arrived.', o: ['was cooking', 'were cooking', 'cooked', 'cook'], c: 0 },
            { p: 'The students ___ (talk) when the teacher entered.', o: ['was talking', 'were talking', 'talked', 'talk'], c: 1 },
            { p: 'I ___ (walk) home when I saw him.', o: ['was walking', 'were walking', 'walked', 'walk'], c: 0 },
            { p: 'They ___ (dance) at the party all night.', o: ['was dancing', 'were dancing', 'danced', 'dance'], c: 1 },
            { p: 'He ___ (drive) too fast when the police stopped him.', o: ['was driving', 'were driving', 'drove', 'drive'], c: 0 },
            { p: 'We ___ (eat) dinner when the phone rang.', o: ['was eating', 'were eating', 'ate', 'eat'], c: 1 },
            { p: 'She ___ (write) a letter when I called her.', o: ['was writing', 'were writing', 'wrote', 'write'], c: 0 },
            { p: 'The cat ___ (sleep) on the sofa.', o: ['was sleeping', 'were sleeping', 'slept', 'sleep'], c: 0 },
            { p: 'They ___ (sing) when I entered the room.', o: ['was singing', 'were singing', 'sang', 'sing'], c: 1 },
            { p: 'I ___ (think) about you when you called.', o: ['was thinking', 'were thinking', 'thought', 'think'], c: 0 },
            { p: 'The baby ___ (cry) all night.', o: ['was crying', 'were crying', 'cried', 'cry'], c: 0 },
            { p: 'We ___ (plan) a trip when it started to rain.', o: ['was planning', 'were planning', 'planned', 'plan'], c: 1 },
            { p: 'He ___ (listen) to music when I arrived.', o: ['was listening', 'were listening', 'listened', 'listen'], c: 0 },
            { p: 'The dog ___ (bark) loudly at night.', o: ['was barking', 'were barking', 'barked', 'bark'], c: 0 },
            { p: 'You ___ (study) when I called you.', o: ['was studying', 'were studying', 'studied', 'study'], c: 1 },
            { p: 'The children ___ (play) in the garden.', o: ['was playing', 'were playing', 'played', 'play'], c: 1 },
            { p: 'She ___ (wash) the dishes when I arrived.', o: ['was washing', 'were washing', 'washed', 'wash'], c: 0 },
            { p: 'I ___ (watch) a movie when the power went out.', o: ['was watching', 'were watching', 'watched', 'watch'], c: 0 },
            { p: 'They ___ (build) a house last year.', o: ['was building', 'were building', 'built', 'build'], c: 1 },
            { p: 'He ___ (fix) his car when it started to rain.', o: ['was fixing', 'were fixing', 'fixed', 'fix'], c: 0 },
            { p: 'We ___ (have) dinner when he called.', o: ['was having', 'were having', 'had', 'have'], c: 1 },
            { p: 'The phone ___ (ring) while I was sleeping.', o: ['was ringing', 'were ringing', 'rang', 'ring'], c: 0 },
            { p: 'She ___ (read) a magazine when I saw her.', o: ['was reading', 'were reading', 'read', 'read'], c: 0 },
            { p: 'They ___ (swim) in the pool at 3 PM.', o: ['was swimming', 'were swimming', 'swam', 'swim'], c: 1 },
            { p: 'I ___ (clean) my room when she arrived.', o: ['was cleaning', 'were cleaning', 'cleaned', 'clean'], c: 0 },
            { p: 'The sun ___ (shine) brightly that morning.', o: ['was shining', 'were shining', 'shone', 'shine'], c: 0 },
            { p: 'We ___ (laugh) at his jokes all evening.', o: ['was laughing', 'were laughing', 'laughed', 'laugh'], c: 1 },
            { p: 'He ___ (teach) English at that school.', o: ['was teaching', 'were teaching', 'taught', 'teach'], c: 0 },
            { p: 'The workers ___ (paint) the house all day.', o: ['was painting', 'were painting', 'painted', 'paint'], c: 1 },
            { p: 'She ___ (dance) when the music stopped.', o: ['was dancing', 'were dancing', 'danced', 'dance'], c: 0 },
            { p: 'I ___ (cook) dinner when the guests arrived.', o: ['was cooking', 'were cooking', 'cooked', 'cook'], c: 0 },
            { p: 'They ___ (argue) about money last night.', o: ['was arguing', 'were arguing', 'argued', 'argue'], c: 1 },
            { p: 'He ___ (smoke) when the doctor arrived.', o: ['was smoking', 'were smoking', 'smoked', 'smoke'], c: 0 },
            { p: 'We ___ (travel) to Paris when we met them.', o: ['was travelling', 'were travelling', 'travelled', 'travel'], c: 1 },
            { p: 'She ___ (shop) when she lost her wallet.', o: ['was shopping', 'were shopping', 'shopped', 'shop'], c: 0 },
            { p: 'The students ___ (listen) to the teacher.', o: ['was listening', 'were listening', 'listened', 'listen'], c: 1 },
            { p: 'I ___ (prepare) dinner when the phone rang.', o: ['was preparing', 'were preparing', 'prepared', 'prepare'], c: 0 },
            { p: 'They ___ (watch) a movie when I arrived.', o: ['was watching', 'were watching', 'watched', 'watch'], c: 1 },
            { p: 'He ___ (run) when he fell and hurt his knee.', o: ['was running', 'were running', 'ran', 'run'], c: 0 },
            { p: 'We ___ (talk) about you when you called.', o: ['was talking', 'were talking', 'talked', 'talk'], c: 1 },
            { p: 'The bird ___ (fly) over the trees.', o: ['was flying', 'were flying', 'flew', 'fly'], c: 0 },
            { p: 'She ___ (sing) a beautiful song.', o: ['was singing', 'were singing', 'sang', 'sing'], c: 0 },
            { p: 'The kids ___ (jump) on the bed.', o: ['was jumping', 'were jumping', 'jumped', 'jump'], c: 1 },
            { p: 'I ___ (write) an email when he knocked.', o: ['was writing', 'were writing', 'wrote', 'write'], c: 0 },
            { p: 'They ___ (play) cards when I arrived.', o: ['was playing', 'were playing', 'played', 'play'], c: 1 },
            { p: 'The phone ___ (ring) when I was in the shower.', o: ['was ringing', 'were ringing', 'rang', 'ring'], c: 0 },
            { p: 'He ___ (read) the newspaper when I saw him.', o: ['was reading', 'were reading', 'read', 'read'], c: 0 },
            { p: 'We ___ (have) a picnic when it started raining.', o: ['was having', 'were having', 'had', 'have'], c: 1 },
            { p: 'She ___ (clean) the house all morning.', o: ['was cleaning', 'were cleaning', 'cleaned', 'clean'], c: 0 },
            { p: 'They ___ (build) a sandcastle on the beach.', o: ['was building', 'were building', 'built', 'build'], c: 1 },
            { p: 'The baby ___ (laugh) at the toy.', o: ['was laughing', 'were laughing', 'laughed', 'laugh'], c: 0 },
            { p: 'I ___ (wait) for the bus when it started to rain.', o: ['was waiting', 'were waiting', 'waited', 'wait'], c: 0 },
            { p: 'We ___ (walk) in the park when we saw a deer.', o: ['was walking', 'were walking', 'walked', 'walk'], c: 1 },
            { p: 'The chef ___ (prepare) a special dish.', o: ['was preparing', 'were preparing', 'prepared', 'prepare'], c: 0 },
            { p: 'She ___ (study) when her mother called.', o: ['was studying', 'were studying', 'studied', 'study'], c: 0 },
            { p: 'The dogs ___ (bark) at the mailman.', o: ['was barking', 'were barking', 'barked', 'bark'], c: 1 },
            { p: 'I ___ (listen) to music when he arrived.', o: ['was listening', 'were listening', 'listened', 'listen'], c: 0 },
            { p: 'They ___ (paint) the fence when I saw them.', o: ['was painting', 'were painting', 'painted', 'paint'], c: 1 },
            { p: 'He ___ (sleep) when the alarm rang.', o: ['was sleeping', 'were sleeping', 'slept', 'sleep'], c: 0 },
            { p: 'The children ___ (play) hide and seek.', o: ['was playing', 'were playing', 'played', 'play'], c: 1 },
            { p: 'She ___ (cook) when I got home.', o: ['was cooking', 'were cooking', 'cooked', 'cook'], c: 0 },
            { p: 'I ___ (watch) TV when the lights went out.', o: ['was watching', 'were watching', 'watched', 'watch'], c: 0 },
            { p: 'They ___ (dance) at the party when I arrived.', o: ['was dancing', 'were dancing', 'danced', 'dance'], c: 1 },
            { p: 'The teacher ___ (write) on the board.', o: ['was writing', 'were writing', 'wrote', 'write'], c: 0 },
            { p: 'We ___ (swim) in the sea when we saw a shark.', o: ['was swimming', 'were swimming', 'swam', 'swim'], c: 1 },
            { p: 'He ___ (drive) when the accident happened.', o: ['was driving', 'were driving', 'drove', 'drive'], c: 0 },
            { p: 'The cat ___ (chase) a mouse in the garden.', o: ['was chasing', 'were chasing', 'chased', 'chase'], c: 0 },
            { p: 'She ___ (talk) on the phone when I came in.', o: ['was talking', 'were talking', 'talked', 'talk'], c: 0 },
            { p: 'They ___ (study) for the exam all night.', o: ['was studying', 'were studying', 'studied', 'study'], c: 1 },
            { p: 'I ___ (eat) breakfast when the mail arrived.', o: ['was eating', 'were eating', 'ate', 'eat'], c: 0 },
            { p: 'The wind ___ (blow) strongly yesterday.', o: ['was blowing', 'were blowing', 'blew', 'blow'], c: 0 },
            { p: 'We ___ (wait) for you at the station.', o: ['was waiting', 'were waiting', 'waited', 'wait'], c: 1 },
            { p: 'He ___ (fix) the computer when I called.', o: ['was fixing', 'were fixing', 'fixed', 'fix'], c: 0 },
            { p: 'The students ___ (read) quietly in the library.', o: ['was reading', 'were reading', 'read', 'read'], c: 1 },
            { p: 'She ___ (wash) her car when it started to rain.', o: ['was washing', 'were washing', 'washed', 'wash'], c: 0 },
            { p: 'I ___ (think) about you when you texted.', o: ['was thinking', 'were thinking', 'thought', 'think'], c: 0 },
            { p: 'They ___ (laugh) when the teacher told a joke.', o: ['was laughing', 'were laughing', 'laughed', 'laugh'], c: 1 },
            { p: 'The sun ___ (set) when we arrived at the beach.', o: ['was setting', 'were setting', 'set', 'set'], c: 0 },
            { p: 'He ___ (eat) a sandwich when I saw him.', o: ['was eating', 'were eating', 'ate', 'eat'], c: 0 },
            { p: 'We ___ (play) chess when the lights went out.', o: ['was playing', 'were playing', 'played', 'play'], c: 1 },
            { p: 'She ___ (draw) a picture when I entered.', o: ['was drawing', 'were drawing', 'drew', 'draw'], c: 0 },
            { p: 'The phone ___ (ring) while I was cooking.', o: ['was ringing', 'were ringing', 'rang', 'ring'], c: 0 },
            { p: 'They ___ (argue) when I arrived at the party.', o: ['was arguing', 'were arguing', 'argued', 'argue'], c: 1 },
            { p: 'I ___ (sleep) when you called me last night.', o: ['was sleeping', 'were sleeping', 'slept', 'sleep'], c: 0 },
            { p: 'The bus ___ (arrive) when I got to the stop.', o: ['was arriving', 'were arriving', 'arrived', 'arrive'], c: 0 },
            { p: 'We ___ (have) fun at the beach yesterday.', o: ['was having', 'were having', 'had', 'have'], c: 1 }
        ],
        transport: [
            { p: 'Which means of transport travels on rails?', o: ['Bus', 'Train', 'Bicycle', 'Car'], c: 1 },
            { p: 'You can take a ___ to cross the river.', o: ['ferry', 'plane', 'taxi', 'subway'], c: 0 },
            { p: 'The fastest way to travel between countries is by ___.', o: ['ship', 'plane', 'bus', 'car'], c: 1 },
            { p: 'A ___ has two wheels and you pedal it.', o: ['motorcycle', 'bicycle', 'scooter', 'skateboard'], c: 1 },
            { p: 'In big cities, people often use the ___ to avoid traffic.', o: ['subway', 'bicycle', 'taxi', 'bus'], c: 0 },
            { p: 'A large ship that carries passengers is called a ___.', o: ['ferry', 'cruise ship', 'boat', 'yacht'], c: 1 },
            { p: 'You need a ticket to ride the ___.', o: ['bicycle', 'train', 'skateboard', 'walk'], c: 1 },
            { p: 'The ___ is used for short distances in the city.', o: ['taxi', 'plane', 'train', 'ship'], c: 0 },
            { p: 'Which of these is a means of air transport?', o: ['Helicopter', 'Subway', 'Ship', 'Truck'], c: 0 },
            { p: 'A vehicle that carries many people and follows a route is a ___.', o: ['taxi', 'bus', 'bicycle', 'car'], c: 1 },
            { p: 'I go to school ___ bus every day.', o: ['by', 'on', 'in', 'with'], c: 0 },
            { p: 'She travels to London ___ plane.', o: ['by', 'on', 'in', 'with'], c: 0 },
            { p: 'We crossed the river ___ ferry.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'He goes to work ___ car.', o: ['by', 'on', 'in', 'with'], c: 0 },
            { p: 'They went to the park ___ foot.', o: ['on', 'by', 'in', 'with'], c: 0 },
            { p: 'I ride my ___ to school.', o: ['bike', 'plane', 'ship', 'train'], c: 0 },
            { p: 'The ___ takes off from the airport.', o: ['plane', 'bus', 'car', 'bike'], c: 0 },
            { p: 'You can call a ___ if you need a ride.', o: ['taxi', 'ship', 'plane', 'train'], c: 0 },
            { p: 'The ___ travels under the city.', o: ['subway', 'plane', 'ship', 'helicopter'], c: 0 },
            { p: 'We took the ___ to travel to another country.', o: ['plane', 'bike', 'walk', 'foot'], c: 0 },
            { p: 'Which transport is the slowest?', o: ['Bicycle', 'Plane', 'Car', 'Train'], c: 0 },
            { p: 'Which transport is the fastest?', o: ['Plane', 'Bus', 'Bike', 'Ship'], c: 0 },
            { p: 'A ___ carries many passengers on water.', o: ['ship', 'bike', 'car', 'bus'], c: 0 },
            { p: 'You need a ___ to ride the subway.', o: ['ticket', 'helmet', 'license', 'key'], c: 0 },
            { p: 'What do you call a vehicle with two wheels?', o: ['Bicycle', 'Car', 'Truck', 'Bus'], c: 0 },
            { p: 'What transport travels on tracks?', o: ['Train', 'Car', 'Plane', 'Boat'], c: 0 },
            { p: 'What do you take to fly to another city?', o: ['Plane', 'Bus', 'Bike', 'Car'], c: 0 },
            { p: 'A ___ is a car with a driver you pay.', o: ['taxi', 'bus', 'train', 'bike'], c: 0 },
            { p: 'The ___ is a large vehicle that carries many people.', o: ['bus', 'bike', 'motorcycle', 'skateboard'], c: 0 },
            { p: 'Which of these is NOT a means of transport?', o: ['Chair', 'Car', 'Bus', 'Train'], c: 0 },
            { p: 'I usually go to school ___ foot.', o: ['on', 'by', 'in', 'at'], c: 0 },
            { p: 'She went to Paris ___ plane.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'They went to the beach ___ car.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'He travels ___ train every morning.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'We went to the island ___ ferry.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'The subway is a type of ___ transport.', o: ['urban', 'air', 'water', 'rail'], c: 0 },
            { p: 'A plane is a type of ___ transport.', o: ['air', 'water', 'land', 'rail'], c: 0 },
            { p: 'A ferry is a type of ___ transport.', o: ['water', 'air', 'land', 'rail'], c: 0 },
            { p: 'A bike is a type of ___ transport.', o: ['land', 'air', 'water', 'rail'], c: 0 },
            { p: 'Which of these travels on the road?', o: ['Car', 'Plane', 'Ship', 'Subway'], c: 0 },
            { p: 'Which of these flies?', o: ['Plane', 'Car', 'Bike', 'Bus'], c: 0 },
            { p: 'Which of these sails on water?', o: ['Ship', 'Car', 'Bus', 'Bike'], c: 0 },
            { p: 'I prefer to walk. I go ___ foot.', o: ['on', 'by', 'in', 'at'], c: 0 },
            { p: 'The bus ___ is crowded in the morning.', o: ['stop', 'station', 'port', 'airport'], c: 0 },
            { p: 'The plane lands at the ___.', o: ['airport', 'bus stop', 'port', 'station'], c: 0 },
            { p: 'The train arrives at the ___.', o: ['station', 'airport', 'port', 'stop'], c: 0 },
            { p: 'The ship docks at the ___.', o: ['port', 'airport', 'station', 'stop'], c: 0 },
            { p: 'I need to buy a ___ to travel by bus.', o: ['ticket', 'helmet', 'key', 'license'], c: 0 },
            { p: 'You must wear a ___ on a motorcycle.', o: ['helmet', 'ticket', 'key', 'license'], c: 0 },
            { p: 'You need a ___ to drive a car.', o: ['license', 'ticket', 'helmet', 'key'], c: 0 },
            { p: 'The ___ is the person who drives the bus.', o: ['driver', 'pilot', 'captain', 'conductor'], c: 0 },
            { p: 'The ___ flies the plane.', o: ['pilot', 'driver', 'captain', 'conductor'], c: 0 },
            { p: 'The ___ drives the ship.', o: ['captain', 'pilot', 'driver', 'conductor'], c: 0 },
            { p: 'The ___ checks tickets on the train.', o: ['conductor', 'pilot', 'driver', 'captain'], c: 0 },
            { p: 'How do you go to school?', o: ['By bus', 'By chair', 'By book', 'By phone'], c: 0 },
            { p: 'Which is a public transport?', o: ['Bus', 'Bicycle', 'Skateboard', 'Scooter'], c: 0 },
            { p: 'Which is a private transport?', o: ['Car', 'Bus', 'Subway', 'Train'], c: 0 },
            { p: 'Which transport is eco-friendly?', o: ['Bicycle', 'Car', 'Plane', 'Truck'], c: 0 },
            { p: 'Which transport pollutes the most?', o: ['Plane', 'Bike', 'Walk', 'Skateboard'], c: 0 },
            { p: 'The ___ is a two-wheeled motor vehicle.', o: ['motorcycle', 'car', 'truck', 'bus'], c: 0 },
            { p: 'A ___ is a large vehicle for carrying goods.', o: ['truck', 'bike', 'car', 'bus'], c: 0 },
            { p: 'The ___ is used to travel short distances in cities.', o: ['taxi', 'plane', 'ship', 'helicopter'], c: 0 },
            { p: 'The ___ travels between islands.', o: ['ferry', 'car', 'bus', 'train'], c: 0 },
            { p: 'I take the ___ to go to work every day.', o: ['subway', 'plane', 'ship', 'helicopter'], c: 0 },
            { p: 'We went to the mountains ___ car.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'She travels to Japan ___ plane.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'They went to the island ___ boat.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'He goes to school ___ bike.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'We went to the park ___ foot.', o: ['on', 'by', 'in', 'at'], c: 0 },
            { p: 'Which transport has no engine?', o: ['Bicycle', 'Car', 'Bus', 'Plane'], c: 0 },
            { p: 'Which transport travels on water?', o: ['Ship', 'Train', 'Car', 'Plane'], c: 0 },
            { p: 'Which transport travels on rails?', o: ['Train', 'Bus', 'Car', 'Plane'], c: 0 },
            { p: 'Which transport travels in the air?', o: ['Plane', 'Car', 'Bike', 'Bus'], c: 0 },
            { p: 'The ___ is a vehicle with four wheels.', o: ['car', 'bike', 'motorcycle', 'skateboard'], c: 0 },
            { p: 'The ___ is a large vehicle used for public transport.', o: ['bus', 'bike', 'car', 'skateboard'], c: 0 },
            { p: 'You can rent a ___ to explore the city.', o: ['bike', 'plane', 'ship', 'helicopter'], c: 0 },
            { p: 'The ___ is a fast means of transport.', o: ['plane', 'bike', 'walk', 'skateboard'], c: 0 },
            { p: 'The ___ is a slow means of transport.', o: ['bike', 'plane', 'car', 'train'], c: 0 },
            { p: 'A ___ is used to carry heavy loads.', o: ['truck', 'bike', 'car', 'motorcycle'], c: 0 },
            { p: 'The ___ is used by firefighters.', o: ['fire truck', 'bus', 'bike', 'car'], c: 0 },
            { p: 'The ___ is used by police officers.', o: ['police car', 'bus', 'bike', 'train'], c: 0 },
            { p: 'The ___ is used to transport patients.', o: ['ambulance', 'bus', 'bike', 'train'], c: 0 },
            { p: 'I like to travel ___ train because it is comfortable.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'She prefers to travel ___ plane.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'We went to the beach ___ car.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'He goes to work ___ subway.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'They went to the island ___ ferry.', o: ['by', 'on', 'in', 'at'], c: 0 },
            { p: 'The ___ is a place where trains stop.', o: ['station', 'airport', 'port', 'stop'], c: 0 },
            { p: 'The ___ is a place where planes land.', o: ['airport', 'station', 'port', 'stop'], c: 0 },
            { p: 'The ___ is a place where ships dock.', o: ['port', 'airport', 'station', 'stop'], c: 0 },
            { p: 'The ___ is a place where buses stop.', o: ['bus stop', 'airport', 'port', 'station'], c: 0 },
            { p: 'The ___ is a person who controls the train.', o: ['driver', 'pilot', 'captain', 'conductor'], c: 0 },
            { p: 'The ___ is a person who flies the plane.', o: ['pilot', 'driver', 'captain', 'conductor'], c: 0 },
            { p: 'The ___ is a person who drives the ship.', o: ['captain', 'pilot', 'driver', 'conductor'], c: 0 },
            { p: 'The ___ is a person who checks tickets.', o: ['conductor', 'pilot', 'driver', 'captain'], c: 0 }
        ],
        phrasal: [
            { p: 'What does "turn on" mean?', o: ['Ligar', 'Desligar', 'Aumentar', 'Diminuir'], c: 0 },
            { p: 'What does "turn off" mean?', o: ['Desligar', 'Ligar', 'Aumentar', 'Diminuir'], c: 0 },
            { p: 'To "give up" means to ___.', o: ['continuar', 'desistir', 'entregar', 'levantar'], c: 1 },
            { p: 'If you "look after" someone, you ___.', o: ['procurar', 'cuidar', 'encontrar', 'ignorar'], c: 1 },
            { p: '"Put off" means to ___.', o: ['colocar em', 'adiar', 'apagar', 'vestir'], c: 1 },
            { p: 'What is the meaning of "pick up"?', o: ['pegar / buscar', 'deixar', 'escolher', 'levantar'], c: 0 },
            { p: '"Run out of" means to ___.', o: ['esgotar', 'correr', 'sair', 'encontrar'], c: 0 },
            { p: 'To "find out" something is to ___.', o: ['descobrir', 'perder', 'esquecer', 'procurar'], c: 0 },
            { p: '"Get along" means to ___.', o: ['se dar bem', 'viajar', 'chegar', 'sair'], c: 0 },
            { p: 'What does "take off" mean?', o: ['decolar / tirar', 'colocar', 'descer', 'subir'], c: 0 },
            { p: '"Break down" refers to a machine that ___.', o: ['quebra', 'funciona', 'liga', 'acelera'], c: 0 },
            { p: 'What does "look for" mean?', o: ['procurar', 'cuidar', 'encontrar', 'olhar'], c: 0 },
            { p: '"Turn up" means to ___.', o: ['aumentar o volume', 'diminuir', 'desligar', 'ligar'], c: 0 },
            { p: '"Turn down" means to ___.', o: ['diminuir o volume', 'aumentar', 'ligar', 'desligar'], c: 0 },
            { p: 'What does "wake up" mean?', o: ['acordar', 'dormir', 'levantar', 'deitar'], c: 0 },
            { p: '"Get up" means to ___.', o: ['levantar da cama', 'dormir', 'sentar', 'deitar'], c: 0 },
            { p: 'What does "sit down" mean?', o: ['sentar-se', 'levantar', 'correr', 'pular'], c: 0 },
            { p: '"Stand up" means to ___.', o: ['levantar-se', 'sentar', 'deitar', 'correr'], c: 0 },
            { p: 'What does "come back" mean?', o: ['voltar', 'ir', 'sair', 'chegar'], c: 0 },
            { p: '"Go out" means to ___.', o: ['sair', 'entrar', 'voltar', 'chegar'], c: 0 },
            { p: 'What does "come in" mean?', o: ['entrar', 'sair', 'voltar', 'ir'], c: 0 },
            { p: '"Look at" means to ___.', o: ['olhar para', 'procurar', 'ignorar', 'ver'], c: 0 },
            { p: 'What does "listen to" mean?', o: ['escutar', 'falar', 'ver', 'olhar'], c: 0 },
            { p: '"Talk to" means to ___.', o: ['falar com', 'escutar', 'ver', 'ignorar'], c: 0 },
            { p: 'What does "wait for" mean?', o: ['esperar por', 'correr', 'sair', 'chegar'], c: 0 },
            { p: '"Look forward to" means to ___.', o: ['estar ansioso por', 'procurar', 'ignorar', 'esquecer'], c: 0 },
            { p: 'What does "put on" mean?', o: ['vestir', 'tirar', 'colocar fora', 'guardar'], c: 0 },
            { p: '"Take off" (roupa) means to ___.', o: ['tirar', 'vestir', 'colocar', 'guardar'], c: 0 },
            { p: 'What does "try on" mean?', o: ['experimentar', 'tirar', 'vestir', 'comprar'], c: 0 },
            { p: '"Throw away" means to ___.', o: ['jogar fora', 'guardar', 'comprar', 'usar'], c: 0 },
            { p: 'What does "give back" mean?', o: ['devolver', 'dar', 'pegar', 'guardar'], c: 0 },
            { p: '"Take back" means to ___.', o: ['levar de volta', 'trazer', 'dar', 'pegar'], c: 0 },
            { p: 'What does "bring back" mean?', o: ['trazer de volta', 'levar', 'dar', 'pegar'], c: 0 },
            { p: '"Call back" means to ___.', o: ['retornar a ligação', 'desligar', 'ligar', 'atender'], c: 0 },
            { p: 'What does "hang up" mean?', o: ['desligar o telefone', 'ligar', 'atender', 'chamar'], c: 0 },
            { p: '"Pick up the phone" means to ___.', o: ['atender o telefone', 'desligar', 'ignorar', 'chamar'], c: 0 },
            { p: 'What does "get on" mean?', o: ['entrar (em transporte)', 'sair', 'descer', 'subir'], c: 0 },
            { p: '"Get off" means to ___.', o: ['sair / descer', 'entrar', 'subir', 'chegar'], c: 0 },
            { p: 'What does "get in" mean?', o: ['entrar (em carro)', 'sair', 'descer', 'subir'], c: 0 },
            { p: '"Get out" means to ___.', o: ['sair', 'entrar', 'chegar', 'subir'], c: 0 },
            { p: 'What does "look out" mean?', o: ['cuidado / atenção', 'procurar', 'ignorar', 'olhar'], c: 0 },
            { p: '"Watch out" means to ___.', o: ['tomar cuidado', 'olhar', 'ignorar', 'procurar'], c: 0 },
            { p: 'What does "calm down" mean?', o: ['acalmar-se', 'agitar', 'correr', 'gritar'], c: 0 },
            { p: '"Hurry up" means to ___.', o: ['apressar-se', 'devagar', 'parar', 'sentar'], c: 0 },
            { p: 'What does "slow down" mean?', o: ['diminuir a velocidade', 'acelerar', 'parar', 'correr'], c: 0 },
            { p: '"Speed up" means to ___.', o: ['acelerar', 'frear', 'parar', 'devagar'], c: 0 },
            { p: 'What does "grow up" mean?', o: ['crescer', 'diminuir', 'envelhecer', 'morrer'], c: 0 },
            { p: '"Bring up" means to ___.', o: ['criar / educar', 'trazer', 'levar', 'pegar'], c: 0 },
            { p: 'What does "put up with" mean?', o: ['suportar / tolerar', 'colocar', 'tirar', 'guardar'], c: 0 },
            { p: '"Look up to" means to ___.', o: ['admirar', 'procurar', 'ignorar', 'olhar'], c: 0 },
            { p: 'What does "give in" mean?', o: ['ceder / desistir', 'dar', 'pegar', 'resistir'], c: 0 },
            { p: '"Work out" means to ___.', o: ['malhar / resolver', 'trabalhar', 'descansar', 'parar'], c: 0 },
            { p: 'What does "figure out" mean?', o: ['descobrir / entender', 'desenhar', 'esquecer', 'perder'], c: 0 },
            { p: '"Point out" means to ___.', o: ['apontar / destacar', 'ignorar', 'esconder', 'perder'], c: 0 },
            { p: 'What does "check in" mean?', o: ['fazer check-in', 'sair', 'chegar', 'partir'], c: 0 },
            { p: '"Check out" means to ___.', o: ['fazer check-out / sair', 'entrar', 'chegar', 'ficar'], c: 0 },
            { p: 'What does "log in" mean?', o: ['entrar no sistema', 'sair', 'desligar', 'ligar'], c: 0 },
            { p: '"Log out" means to ___.', o: ['sair do sistema', 'entrar', 'ligar', 'desligar'], c: 0 },
            { p: 'What does "set up" mean?', o: ['configurar / montar', 'desmontar', 'desligar', 'ligar'], c: 0 },
            { p: '"Shut down" means to ___.', o: ['desligar', 'ligar', 'abrir', 'fechar'], c: 0 },
            { p: 'What does "turn into" mean?', o: ['transformar-se em', 'ligar', 'desligar', 'girar'], c: 0 },
            { p: '"Come up with" means to ___.', o: ['ter uma ideia', 'subir', 'descer', 'chegar'], c: 0 },
            { p: 'What does "deal with" mean?', o: ['lidar com', 'comprar', 'vender', 'dar'], c: 0 },
            { p: '"Get rid of" means to ___.', o: ['livrar-se de', 'pegar', 'guardar', 'comprar'], c: 0 },
            { p: 'What does "take care of" mean?', o: ['cuidar de', 'descuido', 'ignorar', 'abandonar'], c: 0 },
            { p: '"Look after" is the same as ___.', o: ['take care of', 'look for', 'look at', 'look up'], c: 0 },
            { p: 'What does "run into" mean?', o: ['encontrar por acaso', 'correr', 'sair', 'chegar'], c: 0 },
            { p: '"Come across" means to ___.', o: ['encontrar por acaso', 'atravessar', 'chegar', 'sair'], c: 0 },
            { p: 'What does "get together" mean?', o: ['reunir-se', 'separar', 'sair', 'chegar'], c: 0 },
            { p: '"Hang out" means to ___.', o: ['sair com amigos', 'pendurar', 'dormir', 'trabalhar'], c: 0 },
            { p: 'What does "show up" mean?', o: ['aparecer / chegar', 'mostrar', 'esconder', 'sair'], c: 0 },
            { p: '"Turn out" means to ___.', o: ['revelar-se / acontecer', 'ligar', 'desligar', 'girar'], c: 0 },
            { p: 'What does "end up" mean?', o: ['acabar / terminar', 'começar', 'sair', 'chegar'], c: 0 },
            { p: '"Give away" means to ___.', o: ['doar / revelar', 'dar', 'pegar', 'guardar'], c: 0 },
            { p: 'What does "put away" mean?', o: ['guardar', 'colocar', 'tirar', 'jogar'], c: 0 },
            { p: '"Throw up" means to ___.', o: ['vomitar', 'jogar', 'pegar', 'comer'], c: 0 },
            { p: 'What does "pass away" mean?', o: ['falecer', 'passar', 'ir', 'sair'], c: 0 },
            { p: '"Pass out" means to ___.', o: ['desmaiar', 'passar', 'sair', 'entrar'], c: 0 },
            { p: 'What does "break up" mean?', o: ['terminar relacionamento', 'quebrar', 'separar', 'cair'], c: 0 },
            { p: '"Make up" means to ___.', o: ['inventar / reconciliar', 'fazer', 'criar', 'produzir'], c: 0 },
            { p: 'What does "give birth" mean?', o: ['dar à luz', 'dar', 'nascer', 'morrer'], c: 0 },
            { p: '"Fall asleep" means to ___.', o: ['adormecer', 'cair', 'acordar', 'dormir'], c: 0 },
            { p: 'What does "wake up" mean?', o: ['acordar', 'dormir', 'deitar', 'sonhar'], c: 0 },
            { p: '"Get married" means to ___.', o: ['casar-se', 'namorar', 'separar', 'conhecer'], c: 0 },
            { p: 'What does "break down" (carro) mean?', o: ['quebrar', 'funcionar', 'acelerar', 'parar'], c: 0 },
            { p: '"Fill in" means to ___.', o: ['preencher', 'encher', 'vazar', 'esvaziar'], c: 0 },
            { p: 'What does "fill out" mean?', o: ['preencher formulário', 'encher', 'completar', 'esvaziar'], c: 0 },
            { p: '"Hand in" means to ___.', o: ['entregar', 'pegar', 'dar', 'receber'], c: 0 },
            { p: 'What does "hand out" mean?', o: ['distribuir', 'entregar', 'pegar', 'dar'], c: 0 },
            { p: '"Put out" means to ___.', o: ['apagar (fogo)', 'colocar', 'acender', 'queimar'], c: 0 },
            { p: 'What does "break into" mean?', o: ['invadir / arrombar', 'quebrar', 'entrar', 'sair'], c: 0 },
            { p: '"Break out" means to ___.', o: ['escapar / surgir', 'quebrar', 'sair', 'entrar'], c: 0 },
            { p: 'What does "run away" mean?', o: ['fugir', 'correr', 'sair', 'chegar'], c: 0 },
            { p: '"Run after" means to ___.', o: ['perseguir', 'correr', 'fugir', 'chegar'], c: 0 },
            { p: 'What does "walk away" mean?', o: ['ir embora', 'andar', 'chegar', 'sair'], c: 0 },
            { p: '"Walk out" means to ___.', o: ['sair (em protesto)', 'andar', 'entrar', 'chegar'], c: 0 },
            { p: 'What does "get away" mean?', o: ['escapar / sair de férias', 'chegar', 'entrar', 'sair'], c: 0 },
            { p: '"Get back" means to ___.', o: ['voltar', 'chegar', 'sair', 'entrar'], c: 0 },
            { p: 'What does "come over" mean?', o: ['visitar', 'chegar', 'sair', 'entrar'], c: 0 },
            { p: '"Go over" means to ___.', o: ['revisar', 'ir', 'sair', 'chegar'], c: 0 },
            { p: 'What does "think over" mean?', o: ['pensar bem', 'pensar', 'esquecer', 'decidir'], c: 0 }
        ],
        tag: [
            { p: 'You are a student, ___?', o: ["aren't you", 'are you', "don't you", 'do you'], c: 0 },
            { p: 'She can swim, ___?', o: ['can she', "can't she", 'does she', "doesn't she"], c: 1 },
            { p: 'They will come, ___?', o: ['will they', "won't they", "don't they", 'do they'], c: 1 },
            { p: "It's raining, ___?", o: ['is it', "isn't it", 'does it', "doesn't it"], c: 1 },
            { p: "You don't eat meat, ___?", o: ["don't you", 'do you', 'are you', "aren't you"], c: 1 },
            { p: 'We had a test, ___?', o: ["didn't we", 'did we', 'had we', "hadn't we"], c: 0 },
            { p: 'He speaks English, ___?', o: ['does he', "doesn't he", 'is he', "isn't he"], c: 1 },
            { p: 'You were at home, ___?', o: ["weren't you", 'were you', 'did you', "didn't you"], c: 0 },
            { p: 'I am late, ___?', o: ["aren't I", 'am I', 'am not I', 'are I'], c: 0 },
            { p: 'She has a car, ___?', o: ['has she', "hasn't she", 'does she', "doesn't she"], c: 1 },
            { p: 'He is your brother, ___?', o: ["isn't he", 'is he', "doesn't he", 'does he'], c: 0 },
            { p: 'They are at school, ___?', o: ["aren't they", 'are they', "don't they", 'do they'], c: 0 },
            { p: 'We can go now, ___?', o: ["can't we", 'can we', "don't we", 'do we'], c: 0 },
            { p: 'She likes pizza, ___?', o: ["doesn't she", 'does she', "isn't she", 'is she'], c: 0 },
            { p: 'You have a pen, ___?', o: ["haven't you", 'have you', "don't you", 'do you'], c: 0 },
            { p: 'He was tired, ___?', o: ["wasn't he", 'was he', "didn't he", 'did he'], c: 0 },
            { p: 'They went home, ___?', o: ["didn't they", 'did they', "weren't they", 'were they'], c: 0 },
            { p: 'She is nice, ___?', o: ["isn't she", 'is she', "doesn't she", 'does she'], c: 0 },
            { p: 'You like coffee, ___?', o: ["don't you", 'do you', "aren't you", 'are you'], c: 0 },
            { p: 'We should go, ___?', o: ["shouldn't we", 'should we', "don't we", 'do we'], c: 0 },
            { p: 'He can drive, ___?', o: ["can't he", 'can he', "doesn't he", 'does he'], c: 0 },
            { p: 'It is cold, ___?', o: ["isn't it", 'is it', "doesn't it", 'does it'], c: 0 },
            { p: 'They are coming, ___?', o: ["aren't they", 'are they', "don't they", 'do they'], c: 0 },
            { p: 'You have seen it, ___?', o: ["haven't you", 'have you', "didn't you", 'did you'], c: 0 },
            { p: 'She was here, ___?', o: ["wasn't she", 'was she', "didn't she", 'did she'], c: 0 },
            { p: 'We are friends, ___?', o: ["aren't we", 'are we', "don't we", 'do we'], c: 0 },
            { p: 'He knows the answer, ___?', o: ["doesn't he", 'does he', "isn't he", 'is he'], c: 0 },
            { p: 'You will help me, ___?', o: ["won't you", 'will you', "don't you", 'do you'], c: 0 },
            { p: 'They can swim, ___?', o: ["can't they", 'can they', "don't they", 'do they'], c: 0 },
            { p: 'She has finished, ___?', o: ["hasn't she", 'has she', "didn't she", 'did she'], c: 0 },
            { p: 'It was fun, ___?', o: ["wasn't it", 'was it', "didn't it", 'did it'], c: 0 },
            { p: 'You don\'t smoke, ___?', o: ['do you', "don't you", 'are you', "aren't you"], c: 0 },
            { p: 'He isn\'t home, ___?', o: ['is he', "isn't he", 'does he', "doesn't he"], c: 0 },
            { p: 'They weren\'t late, ___?', o: ['were they', "weren't they", 'did they', "didn't they"], c: 0 },
            { p: 'She can\'t sing, ___?', o: ['can she', "can't she", 'does she', "doesn't she"], c: 0 },
            { p: 'We don\'t have time, ___?', o: ['do we', "don't we", 'are we', "aren't we"], c: 0 },
            { p: 'You won\'t tell, ___?', o: ['will you', "won't you", 'do you', "don't you"], c: 0 },
            { p: 'He didn\'t come, ___?', o: ['did he', "didn't he", 'was he', "wasn't he"], c: 0 },
            { p: 'She isn\'t ready, ___?', o: ['is she', "isn't she", 'does she', "doesn't she"], c: 0 },
            { p: 'They haven\'t left, ___?', o: ['have they', "haven't they", 'did they', "didn't they"], c: 0 },
            { p: 'You aren\'t tired, ___?', o: ['are you', "aren't you", 'do you', "don't you"], c: 0 },
            { p: 'I\'m not late, ___?', o: ['am I', "aren't I", "am not I", 'are I'], c: 0 },
            { p: 'It doesn\'t work, ___?', o: ['does it', "doesn't it", 'is it', "isn't it"], c: 0 },
            { p: 'We shouldn\'t go, ___?', o: ['should we', "shouldn't we", 'do we', "don't we"], c: 0 },
            { p: 'He wasn\'t there, ___?', o: ['was he', "wasn't he", 'did he', "didn't he"], c: 0 },
            { p: 'You can\'t drive, ___?', o: ['can you', "can't you", 'do you', "don't you"], c: 0 },
            { p: 'She doesn\'t know, ___?', o: ['does she', "doesn't she", 'is she', "isn't she"], c: 0 },
            { p: 'They won\'t come, ___?', o: ['will they', "won't they", 'do they', "don't they"], c: 0 },
            { p: 'We aren\'t lost, ___?', o: ['are we', "aren't we", 'do we', "don't we"], c: 0 },
            { p: 'He hasn\'t eaten, ___?', o: ['has he', "hasn't he", 'did he', "didn't he"], c: 0 },
            { p: 'You don\'t like fish, ___?', o: ['do you', "don't you", 'are you', "aren't you"], c: 0 },
            { p: 'She isn\'t here, ___?', o: ['is she', "isn't she", 'does she', "doesn't she"], c: 0 },
            { p: 'It isn\'t raining, ___?', o: ['is it', "isn't it", 'does it', "doesn't it"], c: 0 },
            { p: 'They don\'t care, ___?', o: ['do they', "don't they", 'are they', "aren't they"], c: 0 },
            { p: 'You weren\'t sleeping, ___?', o: ['were you', "weren't you", 'did you', "didn't you"], c: 0 },
            { p: 'He can\'t come, ___?', o: ['can he', "can't he", 'does he', "doesn't he"], c: 0 },
            { p: 'We didn\'t win, ___?', o: ['did we', "didn't we", 'were we', "weren't we"], c: 0 },
            { p: 'She won\'t tell, ___?', o: ['will she', "won't she", 'does she', "doesn't she"], c: 0 },
            { p: 'You aren\'t busy, ___?', o: ['are you', "aren't you", 'do you', "don't you"], c: 0 },
            { p: 'They can\'t stay, ___?', o: ['can they', "can't they", 'do they', "don't they"], c: 0 },
            { p: 'I\'m not wrong, ___?', o: ['am I', "aren't I", "am not I", 'are I'], c: 0 },
            { p: 'He doesn\'t smoke, ___?', o: ['does he', "doesn't he", 'is he', "isn't he"], c: 0 },
            { p: 'She didn\'t call, ___?', o: ['did she', "didn't she", 'was she', "wasn't she"], c: 0 },
            { p: 'You haven\'t seen it, ___?', o: ['have you', "haven't you", 'did you', "didn't you"], c: 0 },
            { p: 'We aren\'t ready, ___?', o: ['are we', "aren't we", 'do we', "don't we"], c: 0 },
            { p: 'It wasn\'t easy, ___?', o: ['was it', "wasn't it", 'did it', "didn't it"], c: 0 },
            { p: 'They aren\'t coming, ___?', o: ['are they', "aren't they", 'do they', "don't they"], c: 0 },
            { p: 'You shouldn\'t smoke, ___?', o: ['should you', "shouldn't you", 'do you', "don't you"], c: 0 },
            { p: 'He won\'t help, ___?', o: ['will he', "won't he", 'does he', "doesn't he"], c: 0 },
            { p: 'She hasn\'t arrived, ___?', o: ['has she', "hasn't she", 'did she', "didn't she"], c: 0 },
            { p: 'We don\'t need it, ___?', o: ['do we', "don't we", 'are we', "aren't we"], c: 0 },
            { p: 'You can\'t sing, ___?', o: ['can you', "can't you", 'do you', "don't you"], c: 0 },
            { p: 'It doesn\'t matter, ___?', o: ['does it', "doesn't it", 'is it', "isn't it"], c: 0 },
            { p: 'They didn\'t go, ___?', o: ['did they', "didn't they", 'were they', "weren't they"], c: 0 },
            { p: 'She won\'t mind, ___?', o: ['will she', "won't she", 'does she', "doesn't she"], c: 0 },
            { p: 'You aren\'t angry, ___?', o: ['are you', "aren't you", 'do you', "don't you"], c: 0 },
            { p: 'He isn\'t coming, ___?', o: ['is he', "isn't he", 'does he', "doesn't he"], c: 0 },
            { p: 'We haven\'t met, ___?', o: ['have we', "haven't we", 'did we', "didn't we"], c: 0 },
            { p: 'She can\'t cook, ___?', o: ['can she', "can't she", 'does she', "doesn't she"], c: 0 },
            { p: 'You don\'t mind, ___?', o: ['do you', "don't you", 'are you', "aren't you"], c: 0 },
            { p: 'They aren\'t ready, ___?', o: ['are they', "aren't they", 'do they', "don't they"], c: 0 },
            { p: 'He doesn\'t care, ___?', o: ['does he', "doesn't he", 'is he', "isn't he"], c: 0 },
            { p: 'It isn\'t true, ___?', o: ['is it', "isn't it", 'does it', "doesn't it"], c: 0 },
            { p: 'We won\'t fail, ___?', o: ['will we', "won't we", 'do we', "don't we"], c: 0 },
            { p: 'She wasn\'t there, ___?', o: ['was she', "wasn't she", 'did she', "didn't she"], c: 0 },
            { p: 'You haven\'t eaten, ___?', o: ['have you', "haven't you", 'did you', "didn't you"], c: 0 },
            { p: 'They shouldn\'t leave, ___?', o: ['should they', "shouldn't they", 'do they', "don't they"], c: 0 },
            { p: 'He can\'t swim, ___?', o: ['can he', "can't he", 'does he', "doesn't he"], c: 0 },
            { p: 'It won\'t rain, ___?', o: ['will it', "won't it", 'does it', "doesn't it"], c: 0 },
            { p: 'I\'m not sure, ___?', o: ['am I', "aren't I", "am not I", 'are I'], c: 0 },
            { p: 'We can\'t wait, ___?', o: ['can we', "can't we", 'do we', "don't we"], c: 0 },
            { p: 'She doesn\'t drive, ___?', o: ['does she', "doesn't she", 'is she', "isn't she"], c: 0 },
            { p: 'You weren\'t late, ___?', o: ['were you', "weren't you", 'did you', "didn't you"], c: 0 },
            { p: 'They haven\'t paid, ___?', o: ['have they', "haven't they", 'did they', "didn't they"], c: 0 },
            { p: 'He won\'t come back, ___?', o: ['will he', "won't he", 'does he', "doesn't he"], c: 0 },
            { p: 'We don\'t know, ___?', o: ['do we', "don't we", 'are we', "aren't we"], c: 0 },
            { p: 'She hasn\'t called, ___?', o: ['has she', "hasn't she", 'did she', "didn't she"], c: 0 }
        ],
        would: [
            { p: 'I ___ like to visit Paris.', o: ['would', 'will', 'should', 'could'], c: 0 },
            { p: 'What ___ you like to drink?', o: ['would', 'will', 'do', 'can'], c: 0 },
            { p: 'She ___ like to become a doctor.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'We ___ like to order pizza.', o: ['would', 'will', 'should', 'might'], c: 0 },
            { p: '___ you like to join us?', o: ['Would', 'Will', 'Can', 'Do'], c: 0 },
            { p: 'They ___ like to live near the beach.', o: ['would', 'will', 'could', 'shall'], c: 0 },
            { p: 'He ___ like to buy a new phone.', o: ['would', 'will', 'must', 'might'], c: 0 },
            { p: 'I ___ like to thank you for your help.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: '___ you like some coffee?', o: ['Would', 'Will', 'Can', 'May'], c: 0 },
            { p: 'My parents ___ like to travel more.', o: ['would', 'will', 'could', 'might'], c: 0 },
            { p: 'I ___ like to learn Japanese.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to work abroad.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'We ___ like to see that movie.', o: ['would', 'will', 'should', 'could'], c: 0 },
            { p: 'They ___ like to have a pet.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: '___ you like to dance with me?', o: ['Would', 'Will', 'Can', 'Do'], c: 0 },
            { p: 'I ___ like to be a teacher.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to speak French.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'We ___ like to live in the countryside.', o: ['would', 'will', 'could', 'might'], c: 0 },
            { p: 'He ___ like to play the guitar.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'They ___ like to visit Japan.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'I ___ like to try that restaurant.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: '___ she like to come with us?', o: ['Would', 'Will', 'Does', 'Can'], c: 0 },
            { p: 'We ___ like to buy a house.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'You ___ like to meet my family.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'He ___ like to change his job.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to travel around the world.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'She ___ like to have a big garden.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'They ___ like to learn how to cook.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'We ___ like to go to the beach.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: '___ you like to try some cake?', o: ['Would', 'Will', 'Can', 'Do'], c: 0 },
            { p: 'I ___ like to read that book.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'He ___ like to buy a new car.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'She ___ like to learn to swim.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'We ___ like to have a picnic.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'They ___ like to go camping.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'I ___ like to play tennis.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: '___ he like to join the club?', o: ['Would', 'Will', 'Does', 'Can'], c: 0 },
            { p: 'She ___ like to write a book.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'We ___ like to plant some flowers.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'You ___ like to see the photos.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'I ___ like to buy a new laptop.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'He ___ like to start a business.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'They ___ like to adopt a dog.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'We ___ like to visit the museum.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to be a singer.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to see a play.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: '___ they like to go with us?', o: ['Would', 'Will', 'Do', 'Can'], c: 0 },
            { p: 'He ___ like to learn Spanish.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'We ___ like to have dinner together.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'She ___ like to buy those shoes.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to be rich.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'They ___ like to move to another city.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'You ___ like to watch a movie.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'He ___ like to have a pet.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'We ___ like to try a new recipe.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'She ___ like to learn painting.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'I ___ like to see that band live.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'They ___ like to buy a farm.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'We ___ like to volunteer at the shelter.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'He ___ like to learn how to surf.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to go on a cruise.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to try skydiving.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: '___ you like to come over?', o: ['Would', 'Will', 'Can', 'Do'], c: 0 },
            { p: 'They ___ like to celebrate together.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'We ___ like to spend more time together.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to have a cup of tea.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'He ___ like to fix his old bike.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'I ___ like to learn how to play chess.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'They ___ like to explore the forest.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'You ___ like to see the sunrise.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'We ___ like to visit the zoo.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to learn how to knit.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to try that new café.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'He ___ like to travel by train.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'They ___ like to go to a concert.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'We ___ like to have a barbecue.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to buy a new dress.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to learn photography.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: '___ he like to try some juice?', o: ['Would', 'Will', 'Does', 'Can'], c: 0 },
            { p: 'They ___ like to visit their grandparents.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'We ___ like to build a treehouse.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to learn how to dance.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to see the Northern Lights.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'He ___ like to have a big family.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'They ___ like to go fishing.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'You ___ like to try rock climbing.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'We ___ like to go on a safari.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'She ___ like to have her own business.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'I ___ like to learn how to meditate.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'They ___ like to renovate their house.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'We ___ like to travel to Iceland.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'He ___ like to write a novel.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'She ___ like to become a chef.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'I ___ like to have a garden.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'They ___ like to learn how to ski.', o: ['would', 'will', 'can', 'may'], c: 0 },
            { p: 'We ___ like to adopt a cat.', o: ['would', 'will', 'can', 'should'], c: 0 },
            { p: 'She ___ like to speak Italian.', o: ['would', 'will', 'can', 'must'], c: 0 },
            { p: 'I ___ like to see the Eiffel Tower.', o: ['would', 'will', 'can', 'may'], c: 0 }
        ],
        modal: [
            { p: 'You ___ wear a seatbelt. (obrigação)', o: ['must', 'can', 'may', 'could'], c: 0 },
            { p: 'She ___ play the piano very well. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: '___ I open the window? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'You ___ not smoke here. (proibição)', o: ['must', 'may', 'can', 'could'], c: 0 },
            { p: 'He ___ arrive late. (possibilidade)', o: ['might', 'must', 'should', 'will'], c: 0 },
            { p: 'We ___ study more for the test. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: '___ you help me with this? (pedido)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'It ___ rain later. (possibilidade)', o: ['may', 'must', 'should', 'will'], c: 0 },
            { p: 'You ___ finish your homework. (obrigação)', o: ['must', 'can', 'may', 'could'], c: 0 },
            { p: 'They ___ speak three languages. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: '___ you pass me the salt? (pedido educado)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'She ___ be at home now. (possibilidade)', o: ['might', 'must', 'can', 'should'], c: 0 },
            { p: 'You ___ see a doctor. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'I ___ swim when I was five. (habilidade no passado)', o: ['could', 'can', 'must', 'should'], c: 0 },
            { p: 'You ___ not eat so much sugar. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: '___ I use your phone? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'He ___ be tired after the trip. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'We ___ leave early tomorrow. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'You ___ try this cake. It is delicious. (recomendação)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'She ___ not come to the party. (possibilidade negativa)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: '___ you speak English? (habilidade)', o: ['Can', 'Must', 'Should', 'May'], c: 0 },
            { p: 'Students ___ wear a uniform. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'You ___ park here. (proibição)', o: ['must not', 'can', 'may', 'should'], c: 0 },
            { p: '___ I come in? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'You ___ drink more water. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'It ___ be true. (possibilidade)', o: ['might', 'must', 'can', 'should'], c: 0 },
            { p: 'I ___ help you if you want. (oferta)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: 'You ___ not touch that. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'We ___ go to the beach tomorrow. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'She ___ play the violin. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: 'You ___ wear a helmet. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: '___ you close the door, please? (pedido)', o: ['Could', 'Must', 'Should', 'May'], c: 0 },
            { p: 'He ___ be at school now. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'You ___ eat more vegetables. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'I ___ speak three languages. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: '___ I borrow your pen? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'You ___ not be late. (obrigação negativa)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'It ___ snow tomorrow. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'We ___ help the environment. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'She ___ come to the meeting. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'You ___ study for the exam. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: '___ you give me a hand? (pedido)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'I ___ run fast when I was young. (habilidade no passado)', o: ['could', 'can', 'must', 'should'], c: 0 },
            { p: 'You ___ not worry about it. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'He ___ be the new teacher. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'You ___ try again. (recomendação)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: '___ I ask you a question? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'We ___ leave before it gets dark. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'You ___ be careful with that. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'They ___ be at the park. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'I ___ play the guitar. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: 'You ___ not use your phone in class. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'She ___ be tired. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'We ___ go now. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'You ___ drink water. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'He ___ not come today. (possibilidade negativa)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: '___ you help me, please? (pedido educado)', o: ['Could', 'Must', 'Should', 'May'], c: 0 },
            { p: 'You ___ pay attention. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'I ___ speak Japanese. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: 'You ___ not run in the hallways. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: '___ I go to the bathroom? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'You ___ eat breakfast. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'It ___ be cold tomorrow. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'You ___ wear a uniform at school. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'I ___ ride a bike. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: '___ you tell me the time? (pedido educado)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'He ___ be sleeping. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'You ___ practice every day. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'They ___ arrive soon. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'You ___ not smoke. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'She ___ dance very well. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: '___ I sit here? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'We ___ respect our parents. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'You ___ save money. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'It ___ rain later. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'I ___ cook very well. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: 'You ___ not be rude. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: '___ you lend me your book? (pedido educado)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'She ___ be at the library. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'You ___ sleep more. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'We ___ go out tonight. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'You ___ wear a coat. It is cold. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'They ___ finish the project today. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'I ___ swim when I was young. (habilidade no passado)', o: ['could', 'can', 'must', 'should'], c: 0 },
            { p: 'You ___ not litter. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: '___ you take a photo? (pedido educado)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'He ___ be at home. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'You ___ read more books. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'She ___ come later. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'You ___ not cheat. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: 'I ___ play the piano. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: '___ I borrow this? (permissão)', o: ['May', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'You ___ do your homework. (obrigação)', o: ['must', 'can', 'may', 'might'], c: 0 },
            { p: 'You ___ drink water every day. (conselho)', o: ['should', 'must', 'can', 'may'], c: 0 },
            { p: 'It ___ happen. (possibilidade)', o: ['might', 'must', 'should', 'can'], c: 0 },
            { p: 'They ___ speak French. (habilidade)', o: ['can', 'must', 'should', 'may'], c: 0 },
            { p: 'You ___ not be late again. (proibição)', o: ['must', 'can', 'may', 'should'], c: 0 },
            { p: '___ you help me carry this? (pedido educado)', o: ['Could', 'Must', 'Should', 'Will'], c: 0 },
            { p: 'She ___ be tired after work. (dedução)', o: ['must', 'can', 'may', 'should'], c: 0 }
        ],
    },
    config: {
        totalPerguntasExpandidas: 800,
        perguntasPorSimulado: 20,
        minPorMateria: 3,
        maxPorMateria: 4
    }
};