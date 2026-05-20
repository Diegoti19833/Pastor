import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Devocionais.module.css'
import pastorPhoto from '../assets/pastor.jpg'
import imgSolteiros from '../assets/solteiros_theme_1775152713719.png'
import imgCasais from '../assets/casais_theme_1775152729546.png'
import imgViuvos from '../assets/viuvos_theme_1775152746470.png'
import imgEmpresarios from '../assets/empresarios_theme_1775152764701.png'

// ── CONTEÚDO REAL DAS PRÉVIAS ──
const previewContent = {
  // ── SOLTEIROS — Dias 1-8 ──
  's1': {
    title: 'Dia 1 — Quando a espera parece ser longa demais',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Esperei com paciência no Senhor…" — Salmos 40:1',
    texto: `Um dos maiores desafios da vida de um solteiro(a) não é a solidão em si, mas o tempo de espera. Há momentos em que surgem perguntas silenciosas: "Será que algo está errado comigo?" "Por que ainda não aconteceu o que tanto espero?" "Porventura, Deus se esqueceu de mim?"

A cultura ao redor frequentemente exerce pressões através de padrões e comparações. Relacionamentos parecem acontecer ao redor, enquanto a própria história parece estagnada. Mas a espera, à luz da Palavra, nunca é um tempo vazio.

O salmista declara: "Esperei com paciência no Senhor." Isso revela algo profundo: esperar em Deus não é de forma alguma passividade — é uma plena e ativa confiança. Enquanto o mundo valoriza a pressa, Deus opera através de processos. O tempo de espera não é um tempo perdido, mas um tempo de formação.

Deus não está apenas preparando alguém para você — Ele está também preparando você. O caráter, a maturidade emocional, a dependência de Deus e a clareza de propósito são frequentemente moldados nesse período. A ansiedade tenta antecipar o tempo. A fé aprende a confiar no tempo de Deus.

**Reflexão Prática:**
• Tenho lidado com a espera com paciência ou com ansiedade?
• Tenho me comparado com outras pessoas?
• Tenho compreendido que este tempo também é formativo?

**Exercício espiritual:** Separe hoje alguns minutos para agradecer a Deus pelo tempo presente, reconhecendo que Ele está trabalhando em você, mesmo na espera.`,
    oracao: 'Senhor, ajuda-me a confiar no Teu tempo. Mesmo quando a espera parece longa, ensina-me a descansar em Ti. Trabalha em meu coração, prepara-me por completo e mantenha firme a minha fé. Em nome de Jesus, Amém.'
  },
  's2': {
    title: 'Dia 2 — A solidão não pode e nem deve ser vazia',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Deus é o nosso refúgio e fortaleza…" — Salmos 46:1',
    texto: `A solidão é uma das experiências mais comuns na vida do solteiro(a), porém com muita frequência não é compreendida corretamente. Existe uma diferença importante entre estar só e estar vazio. Muitas pessoas associam solidão à ausência de algo ou alguém, como se a vida só fosse completa quando acompanhada.

No entanto, a Escritura revela uma verdade profunda: Deus não apenas preenche espaços externos — Ele se torna presença real no interior. O salmista declara que Deus é refúgio e fortaleza. Isso significa que, nos momentos em que a sensação de solidão aparece, não estamos necessariamente desamparados. A presença de Deus não depende de companhia humana para existir.

Quando Deus é reconhecido como refúgio, a solidão deixa de ser um vazio ameaçador e passa a ser um espaço de encontro com o Senhor. É nesse lugar que muitos aprendem a ouvir melhor, a depender mais, e a crescer em intimidade com Deus. A solidão, quando bem compreendida, não é apenas ausência — mas pode se tornar o propício ambiente para uma maior profundidade espiritual.

**Reflexão Prática:**
• Como tenho lidado com os meus momentos de solidão?
• Tenho buscado preencher esse espaço com distrações ou com Deus?
• Tenho reconhecido a presença de Deus mesmo quando estou só?

**Exercício espiritual:** Separe um momento do seu dia para estar em silêncio na presença de Deus, sem distrações, apenas reconhecendo Sua presença.`,
    oracao: 'Senhor, em momentos de solidão, lembra-me que não estou sozinho. Tu és o meu refúgio e minha fortaleza. Ensina-me a encontrar descanso na Tua presença e a perceber que contigo nunca estou vazio. Em nome de Jesus, Amém.'
  },
  's3': {
    title: 'Dia 3 — O coração precisa ser curado (Parte 1)',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Ele cura os de coração quebrantado e trata das suas feridas." — Salmos 147:3',
    texto: `Nem sempre a jornada da solteirice é marcada apenas por expectativa e esperança. Muitas vezes, ela traz consigo histórias de dor. Relacionamentos que não deram certo. Expectativas frustradas. Promessas não cumpridas. Rejeições que deixaram marcas profundas.

Todo esse acúmulo pode gerar feridas profundas no coração. E um coração ferido, se não tratado, tende a influenciar decisões futuras, gerar medo de novos envolvimentos e criar barreiras emocionais.

Porém a Palavra de Deus nos revela algo essencial: Deus não apenas observa o coração quebrado — Ele o trata. A cura de Deus não é superficial. Ela é profunda, progressiva e restauradora. Muitas pessoas entram em novos relacionamentos sem terem sido curadas do passado. Isso pode gerar insegurança, temor, desconfiança e padrões emocionais distorcidos.

Por isso, o tempo de solteirice também pode ser um tempo de cura. Deus, em Sua graça, trabalha no interior antes de conduzir ao exterior. Antes de preparar alguém para você, Ele deseja restaurar plenamente o seu coração. Um coração curado não reage apenas com base em experiências passadas, mas responde com maturidade, segurança e confiança em Deus.

**Aplicação Prática:**
• Existem feridas emocionais que ainda não entreguei a Deus?
• Tenho permitido que experiências do passado influenciem o meu presente?
• Meu coração está honestamente aberto e disponível para ser tratado por Deus?

**Exercício espiritual:** Traga diante de Deus memórias ou situações que ainda lhe causam dor e peça que Ele comece um processo de cura interior.`,
    oracao: 'Senhor, Tu conheces o meu coração em profundidade. Trata das feridas dentro de mim, eu as entrego a Ti. Cura-me onde fui ferido(a), restaura aquilo que foi quebrado e prepara meu coração para viver segundo a Tua vontade. Em nome de Jesus, Amém.'
  },
  's4': {
    title: 'Dia 4 — Expectativas precisam ser alinhadas com as de Deus (Parte 1)',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Entrega o teu caminho ao Senhor; confia nele, e o mais ele fará." — Salmos 37:5',
    texto: `Uma das maiores fontes de frustração na vida de um solteiro(a) não é apenas a ausência de um relacionamento, mas expectativas não alinhadas com a realidade e com a vontade de Deus. Tantas vezes criamos imagens mentais sobre como a vida deveria ser, quando algo deveria acontecer, como deveria acontecer e com quem deveria acontecer.

Essas expectativas, quando não submetidas a Deus, podem gerar ansiedade, comparação e constante insatisfação. A expectativa não é o problema em si — o problema surge quando ela não está alinhada com a vontade de Deus.

O salmista nos ensina a entregar o caminho ao Senhor. Isso inclui não apenas ações, mas também desejos, sonhos e expectativas. Confiar em Deus significa abrir mão da necessidade de controlar o tempo e o formato das respostas. Deus trabalha de forma perfeita, ainda que diferente das nossas projeções.

Quando nossas expectativas são moldadas pela Palavra, passamos a desejar aquilo que Deus deseja, e não apenas aquilo que desejamos em um determinado momento. Isso traz descanso ao coração e clareza à jornada. Expectativas desalinhadas geram frustração. Expectativas entregues a Deus geram profunda e plena paz.

**Aplicação Prática:**
• Minhas expectativas estão baseadas na vontade de Deus ou na minha vontade pessoal?
• Tenho me frustrado por não ver as minhas expectativas sendo cumpridas?
• Estou disposto(a) a alinhar meus desejos com os propósitos de Deus?

**Exercício espiritual:** Escreva suas expectativas relacionadas à área afetiva e entregue cada uma delas a Deus em oração, pedindo que Ele alinhe seu coração com a vontade dEle.`,
    oracao: 'Senhor, eu entrego a Ti as minhas expectativas. Ajuda-me a não viver guiado apenas pelos meus desejos, mas pela Tua perfeita vontade. Alinha meu coração com o Teu propósito e ensina-me a confiar no Teu tempo e no Teu caminho. Em nome de Jesus, Amém.'
  },
  's5': {
    title: 'Dia 5 — Quando o tempo de Deus é diferente do meu',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Tudo tem o seu tempo determinado…" — Eclesiastes 3:1',
    texto: `Uma das maiores tensões na vida do solteiro(a) é lidar com o tempo. Existe um desejo legítimo por avanço, por relacionamento, por construção de uma nova fase da vida. No entanto, nem sempre o tempo interior coincide com o tempo externo.

Enquanto o coração deseja respostas rápidas, Deus trabalha com processos que envolvem maturação, alinhamento e preparo. A Escritura afirma que tudo tem um tempo determinado. Isso significa que a vida não é aleatória — ela é conduzida por uma ordem previamente estabelecida por Deus.

O desafio não é apenas aceitar que existe um tempo, mas confiar que o tempo de Deus é perfeito, ainda que diferente do nosso. Muitas vezes, a ansiedade surge quando tentamos acelerar aquilo que Deus ainda está amadurecendo. Relacionamentos apressados podem ignorar processos fundamentalmente importantes. Decisões precipitadas podem gerar consequências desnecessárias que poderiam ser evitadas.

Deus jamais se atrasa — Deus trabalha sempre com precisão. O tempo de espera, quando vivido com Deus, não é tempo perdido, mas tempo de preparação. Ele prepara o coração, ajusta a perspectiva e alinha circunstâncias para que o resultado final seja saudável e plenamente duradouro.

**Aplicação Prática:**
• Tenho me sentido pressionado(a) pelo tempo?
• Tenho comparado a minha jornada com a de outras pessoas?
• Tenho conseguido confiar que Deus está em pleno controle do meu tempo?

**Exercício espiritual:** Reflita sobre sua linha do tempo pessoal e entregue a Deus o desejo de acelerar processos, pedindo paz para confiar plenamente no tempo dEle.`,
    oracao: 'Senhor, Tu conheces o tempo de todas as coisas. Ajuda-me a descansar no Teu tempo e a não viver ansioso pelo futuro. Ensina-me a confiar que o que vem de Ti virá no momento certo. Em nome de Jesus, Amém.'
  },
  's6': {
    title: 'Dia 6 — Lidando com a influência da pressão social',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Não se amoldem ao padrão deste mundo…" — Romanos 12:2',
    texto: `A pressão social é uma realidade constante na vida de muitos solteiros. Perguntas de familiares. Expectativas de amigos. Comparações com pessoas da mesma idade. E, em alguns contextos, até comentários que sugerem que há algo "fora do lugar".

Essa pressão, quando não tratada corretamente, pode gerar decisões precipitadas, ansiedade e insegurança pessoal. O desejo de corresponder às expectativas externas pode se tornar tão forte que começa a influenciar escolhas importantes, de forma equivocada.

A Palavra de Deus nos chama a não nos amoldarmos ao padrão deste mundo. Isso significa que nossa identidade, decisões e valores não devem ser definidos pela cultura ao redor, mas pela vontade de Deus. O mundo estabelece cronogramas, padrões e expectativas. Deus estabelece propósito, direção e tempo definitivamente certo.

Nem toda pressão deve ser atendida. Nem toda expectativa externa deve ser seguida. Viver de acordo com a vontade de Deus exige firmeza interior e clareza espiritual para não ser conduzido por opiniões alheias. Quando a identidade está firmada em Deus, a pressão externa perde força e a plena paz é encontrada.

**Aplicação Prática:**
• Tenho tomado decisões influenciado(a) pela pressão de outras pessoas?
• Tenho me sentido cobrado(a) por padrões sociais?
• Minha identidade está firmada em Deus ou na opinião dos outros?

**Exercício espiritual:** Identifique áreas onde você sente pressão externa e entregue essas áreas a Deus, pedindo firmeza para viver segundo a vontade dEle.`,
    oracao: 'Senhor, ajuda-me a não viver guiado(a) pela pressão das pessoas, mesmo aquelas cheias de boas intenções. Renova minha mente e firma minha identidade em Ti. Que minhas decisões sejam conduzidas pela Tua vontade e não pelas expectativas deste mundo. Em nome de Jesus, Amém.'
  },
  's7': {
    title: 'Dia 7 — A espera que envolve propósito',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus…" — Romanos 8:28',
    texto: `A espera, na vida do solteiro(a), muitas vezes é interpretada apenas como um intervalo entre o presente e o futuro desejado. No entanto, à luz das Escrituras, a espera não é um "tempo neutro" — é um tempo carregado de propósito. Deus não apenas permite a espera; Ele a utiliza como parte ativa do Seu processo de formação.

Romanos 8:28 nos lembra que todas as coisas cooperam para o bem daqueles que amam a Deus. Isso inclui os períodos de silêncio, os momentos de incerteza e até as perguntas sem resposta imediata.

A cooperação de todas as coisas não significa que tudo será confortável, mas que tudo pode ser redimido por Deus para um propósito maior. Durante a espera, Deus trabalha de maneiras que muitas vezes não são visíveis: Ele ajusta o caráter, fortalece a fé, amplia a maturidade emocional e alinha o coração com a Sua vontade.

A ansiedade tenta interpretar a espera como ausência de ação de Deus. Mas a fé reconhece que Deus está trabalhando, mesmo quando não há sinais aparentes. A espera com propósito transforma o coração de alguém que apenas deseja algo em alguém que está sendo moldado para algo.

**Aplicação Prática:**
• Tenho encarado a minha espera como um tempo vazio ou como um tempo com propósito?
• Em que áreas tenho percebido que Deus está trabalhando no meu caráter?
• Tenho conseguido confiar que Deus está agindo mesmo quando não consigo ver resultados imediatos?

**Exercício espiritual:** Reflita sobre os aprendizados que este tempo de espera tem produzido em sua vida e agradeça a Deus por cada processo.`,
    oracao: 'Senhor, ajuda-me a enxergar propósito na minha espera. Mesmo quando não entendo o que estás fazendo, eu decido confiar em Tua Palavra que afirma que todas as coisas cooperam para o meu bem. Forma em mim aquilo que precisa ser formado e prepara-me para o que está por vir. Em nome de Jesus, Amém.'
  },
  's8': {
    title: 'Dia 8 — O valor não depende de estar casado (Parte 1)',
    serie: 'De Pastor para Solteiros',
    versiculo: '"Vede que grande amor nos tem concedido o Pai, a ponto de sermos chamados filhos de Deus…" — 1 João 3:1',
    texto: `Uma das lutas silenciosas de muitos solteiros(as) está relacionada à identidade e ao valor pessoal. Em um mundo onde relacionamentos são frequentemente vistos como um marcador de realização, é fácil cair na armadilha de pensar que estar casado define o valor de alguém.

No entanto, a Palavra de Deus aponta para uma verdade muito maior: o seu valor não é determinado pelo seu estado civil, mas pela sua posição em Cristo. Você é chamado(a) filho(a) de Deus — e essa identidade não precisa de um relacionamento para ser completa.

O amor do Pai não está condicionado à sua situação afetiva. Antes mesmo de qualquer relacionamento humano, Deus já declarou o Seu amor por você de forma plena e definitiva. Seu valor foi estabelecido na cruz — não no altar de um casamento.

Viver a partir dessa verdade transforma a forma como você se enxerga e como você busca relacionamentos. Quando a identidade está firmada em Cristo, você não busca um relacionamento para se completar — você entra em um relacionamento como alguém já completo.

**Aplicação Prática:**
• Tenho baseado meu valor pessoal no meu estado civil?
• Como a verdade de ser filho(a) de Deus muda a forma como me vejo?
• Estou buscando um relacionamento para me completar ou como alguém já completo(a) em Cristo?

**Exercício espiritual:** Leia 1 João 3:1-3 e medite sobre o que significa ser chamado(a) filho(a) de Deus. Escreva como essa verdade pode transformar sua perspectiva sobre si mesmo(a).`,
    oracao: 'Senhor, ajuda-me a enxergar meu valor através dos Teus olhos, e não pelos olhos do mundo. Que minha identidade esteja firmada em Ti. Que eu viva como alguém que já é amado(a) e completo(a) em Cristo, independentemente do meu estado civil. Em nome de Jesus, Amém.'
  },
  // ── DEVOCIONAIS ANTERIORES (mantidos) ──
  1: {
    title: 'Devocional 1 — A verdadeira completude',
    serie: 'Solteiro, mas Completo',
    versiculo: '"Pois em Cristo habita corporalmente toda a plenitude da divindade, e em vocês essa plenitude se torna realidade..." — Colossenses 2:9-10',
    texto: `Existe uma mentira silenciosa que circula dentro da própria Igreja: a de que a completude humana depende do relacionamento conjugal. Como se Deus, ao criar Eva, tivesse admitido que Adão estava incompleto sem ela.

Mas leia novamente. Antes de Eva existir, Deus disse que tudo era "muito bom". A incompletude que Deus identificou não era espiritual — era vocacional. Adão precisava de uma auxiliadora para cumprir o mandato cultural, não para ser um ser humano inteiro.

Em Cristo, você já é pleno. Não parcialmente, não provisionalmente — completamente. O apóstolo Paulo escolheu a solteirice não como resignação, mas como expressão de liberdade em Cristo. "É bom que o homem permaneça assim", ele disse — e não estava falando de algo temporário.

**Reflexão:** Que decisão hoje você está adiando esperando por uma pessoa, quando Deus já lhe deu em Cristo tudo o que você precisa para dar esse passo?`,
    oracao: 'Senhor, que eu experimente hoje a plenitude que só encontro em Ti. Que eu pare de procurar em outros o que só Tu podes dar. Que a minha solteirice seja uma declaração pública da minha completude em Cristo. Amém.'
  },
  2: {
    title: 'Devocional 2 — Solidão vs. Solitude',
    serie: 'Solteiro, mas Completo',
    versiculo: '"Mas Jesus retirava-se frequentemente para lugares ermos e orava." — Lucas 5:16',
    texto: `Há uma diferença enorme entre solidão e solitude — e saber distingui-las pode transformar sua vida espiritual.

A solidão é uma ausência que dói. É sentir-se esquecido em meio a uma multidão, é o silêncio do apartamento que parece pesar toneladas às sextas-feiras à noite.

A solitude é uma presença escolhida. É o recuo intencional para encontrar-se com Deus em silêncio — exatamente o que Jesus fazia repetidamente mesmo sendo o filho de Deus encarnado.

O problema de muitos solteiros não é que estão sós — é que confundiram solidão com solitude. Onde poderia haver um encontro transformador com Deus, há apenas a fuga para o ruído das redes sociais, das séries e dos grupos de WhatsApp.

**Reflexão:** Quando foi a última vez que você escolheu o silêncio não como punição, mas como encontro?`,
    oracao: 'Pai, ensina-me a habitar nos espaços de silêncio sem medo. Que o tempo que estou "sozinho" se torne tempo que estou "contigo". Que a minha solidão se converta em solitude. Amém.'
  },
  3: {
    title: 'Devocional 3 — O tempo de preparo',
    serie: 'Solteiro, mas Completo',
    versiculo: '"Aquele que encontra uma esposa encontra uma coisa boa e recebe uma bênção do Senhor." — Provérbios 18:22',
    texto: `Davi foi ungido rei quando tinha uns dezesseis anos. Assumiu o trono quando tinha trinta. Entre a unção e a coroação, havia um deserto, uma caverna, guerras e perseguições.

O período de espera não era desperdício — era formação.

Se você está solteiro e quer se casar, há algo que Deus está trabalhando em você agora que não pode ser apressado. Caráter não se desenvolve na urgência. Maturidade emocional não brota do desespero.

O mesmo Deus que preparou José para o palácio está te preparando para o que vem. Mas a pergunta não é "quando vai vir?" A pergunta é: "Quem estou me tornando enquanto espero?"

**Reflexão:** Liste três áreas da sua vida que ainda precisam de amadurecimento antes de você estar pronto para o que você pede a Deus.`,
    oracao: 'Senhor, que eu não desperdice o tempo de preparo. Que eu coopere com a Tua obra em mim em vez de resistir a ela. Que quando a bênção chegar, eu seja capaz de sustentá-la. Amém.'
  },
  4: {
    title: 'Devocional 1 — O propósito do casamento',
    serie: 'Aliança Renovada',
    versiculo: '"Por isso o homem deixará pai e mãe e se unirá à sua mulher, e os dois serão uma só carne." — Gênesis 2:24',
    texto: `Você se casou por amor. Mas o amor que te levou ao altar é apenas o começo de algo muito maior do que você imaginava.

O casamento bíblico não foi projetado primariamente para sua felicidade — foi projetado para refletir a aliança entre Cristo e a Igreja. Isso significa que quando o casamento está difícil, não é sinal de que você escolheu errado. Pode ser sinal de que você está sendo chamado a amar de um jeito que não vem naturalmente.

A palavra "deixar" em Gênesis não é apenas geográfica. É psicológica, emocional, espiritual. Muitos casamentos sofrem não porque as pessoas se desuniram, mas porque nunca completaram o processo de "deixar".

**Reflexão:** O que você ainda precisa "deixar" — hábito, expectativa, padrão familiar — para que sua união possa florescer?`,
    oracao: 'Senhor, que nosso casamento seja um reflexo da Tua aliança. Que aprendamos a nos amar como Tu nos amastes — sem mérito, sem condição, sem fim. Amém.'
  },
  5: {
    title: 'Devocional 2 — Graça nas imperfeições',
    serie: 'Aliança Renovada',
    versiculo: '"Sede bondosos e compassivos uns para com os outros, perdoando-vos mutuamente, assim como Deus vos perdoou em Cristo." — Efésios 4:32',
    texto: `Há um momento em todos os casamentos em que a máscara cai. O encanto do namoro dá lugar à realidade cotidiana, e você se vê casado com alguém que é — surpreendentemente — humano.

Aqui está onde a graça entra. Não como resignação passiva, mas como escolha ativa de ver a outra pessoa através dos olhos de Cristo — imperfeita, sim, mas profundamente amada e em processo.

O perdão no casamento não é fraqueza. É a força mais madura que existe. Guardar rancor dentro de casa é como beber veneno esperando que o outro sofra.

**Reflexão:** Há algum rancor que você está carregando no casamento que ainda não entregou verdadeiramente a Deus?`,
    oracao: 'Pai, que eu aprenda a estender ao meu cônjuge a mesma graça que recebo de Ti todos os dias. Que o perdão seja o idioma da nossa casa. Amém.'
  },
  6: {
    title: 'Devocional 1 — A presença na ausência',
    serie: 'Caminhos de Consolo',
    versiculo: '"O Senhor está perto dos que têm o coração quebrantado e salva os de espírito abatido." — Salmos 34:18',
    texto: `Existe uma mentira particular que o luto instala na mente: a de que Deus estava ausente quando aconteceu. Que se Ele estivesse presente, não teria permitido.

Mas o Salmo 34 não diz "O Senhor vai aparecer depois que você se recuperar". Ele diz "O Senhor está perto dos que têm o coração quebrantado." Presente. Agora. No meio da dor.

Deus não é o Deus das certezas confortáveis. Ele é o Deus que desce ao vale escuro com você. Não para explicar, mas para acompanhar.

**Reflexão:** O que você precisa dizer a Deus hoje que tem guardado por não saber como colocar em palavras?`,
    oracao: 'Senhor, mesmo não entendendo, creio que estás aqui. Mesmo sem sentir, escolho confiar. Sustenta-me não com respostas, mas com a Tua presença. Amém.'
  },
  7: {
    title: 'Devocional 2 — Permitindo-se lamentar',
    serie: 'Caminhos de Consolo',
    versiculo: '"Jesus chorou." — João 11:35',
    texto: `O versículo mais curto da Bíblia é também um dos mais poderosos: "Jesus chorou."

Ele sabia que iria ressuscitar Lázaro. Tinha o poder para reverter a situação em segundos. E ainda assim chorou. Por quê?

Porque a dor de Maria e Marta era real, e Ele a honrou com lágrimas. Porque o luto tem dignidade. Porque chorar não é falta de fé — é uma forma de confiar em Deus com as partes de você que não têm resposta.

A Igreja muitas vezes faz mal ao ensinar que a fé exige que você extinga rapidamente a dor. Mas os Salmos, o Livro de Jó e as Lamentações de Jeremias existem exatamente para nos mostrar que o lamento tem lugar sagrado diante de Deus.

**Reflexão:** Você se permitiu lamentar de verdade, ou tem pressionado seus sentimentos para baixo com espiritualidade superficial?`,
    oracao: 'Senhor, recebe as minhas lágrimas. Elas também são oração. Amém.'
  },
  8: {
    title: 'Devocional 1 — Mordomia dos negócios',
    serie: 'Fé no Mercado',
    versiculo: '"Ao seu servo deu cinco talentos, a outro dois, e a outro um..." — Mateus 25:15',
    texto: `A parábola dos talentos não é sobre dinheiro — é sobre responsabilidade com o que Deus confiou a você. E o empresário cristão tem talvez a responsabilidade mais evidente de todas.

Cada empresa é uma maiordoma. Você não é dono do negócio — você é gestor do que Deus colocou em suas mãos. Isso muda completamente a pergunta que você faz toda manhã. Não é "como vou crescer?" mas "como vou honrar?"

O servo que recebeu cinco talentos e guardou não foi elogiado. Foi chamado de preguiçoso. A negligência com o que Deus nos confia não é neutralidade — é infidelidade.

**Reflexão:** Se Deus fosse auditar sua empresa hoje, o que Ele encontraria — fidelidade, crescimento, negligência ou desonestidade?`,
    oracao: 'Senhor, que eu seja um mordomo fiel dos recursos, relacionamentos e talentos que puseste em minhas mãos. Que meu negócio seja um instrumento do Teu Reino. Amém.'
  },
  9: {
    title: 'Devocional 2 — Ética do Reino',
    serie: 'Fé no Mercado',
    versiculo: '"Não façais nada por rivalidade ou vanglória..." — Filipenses 2:3',
    texto: `O mercado tem suas próprias regras. Alguns são regras boas — eficiência, inovação, resultados. Outros são venenos embalados como virtudes — "faça o que for necessário", "o vencedor leva tudo", "se não for você, será outro".

O empresário cristão é chamado a viver por outra lógica — a lógica do Reino. Não porque seja ingênuo sobre como o mundo funciona, mas porque serve a um Rei que tem padrões diferentes.

Isso significa negociar com transparência mesmo quando seria mais fácil omitir. Tratar funcionários como pessoas, não como recursos. Recusar contratos que exigem compromissos com a sua integridade.

A ética do Reino não é desvantagem competitiva. É a única base sobre a qual se constrói algo que dura.

**Reflexão:** Há alguma área do seu negócio onde você está seguindo as regras do mercado em vez de os princípios do Reino?`,
    oracao: 'Senhor, dá-me coragem de ser diferente no mercado. Que minha empresa seja conhecida não apenas pelo sucesso, mas pelo caráter. Amém.'
  }
}

const devSeries = [
  {
    featured: true,
    badge: 'Novo',
    gradient: 'linear-gradient(135deg, #1A3A5C 0%, #C8973A 100%)',
    image: imgSolteiros,
    tag: 'Solteiros',
    title: 'Solteiro, mas Completo',
    desc: 'Um mergulho bíblico na completude que temos em Cristo, independentemente do estado civil.',
    previas: [
      { id: 's1', title: 'Dia 1 — Quando a espera parece ser longa demais', free: true },
      { id: 's2', title: 'Dia 2 — A solidão não pode e nem deve ser vazia', free: true },
      { id: 's3', title: 'Dia 3 — O coração precisa ser curado (Parte 1)', free: true },
      { id: 's4', title: 'Dia 4 — Expectativas precisam ser alinhadas com as de Deus', free: true },
      { id: 's5', title: 'Dia 5 — Quando o tempo de Deus é diferente do meu', free: true },
      { id: 's6', title: 'Dia 6 — Lidando com a influência da pressão social', free: false },
      { id: 's7', title: 'Dia 7 — A espera que envolve propósito', free: false },
      { id: 's8', title: 'Dia 8 — O valor não depende de estar casado (Parte 1)', free: false }
    ],
    cta: 'Adquirir o Devocionário Completo',
    ctaWhatsApp: 'https://wa.me/5541999999999?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20Devocion%C3%A1rio%20%22Solteiro%2C%20mas%20Completo%22'
  },
  {
    featured: false,
    gradient: 'linear-gradient(135deg, #C8973A 0%, #1A3A5C 100%)',
    image: imgCasais,
    tag: 'Casais',
    title: 'Aliança Renovada',
    desc: 'Princípios fundamentais para uma vida a dois sustentada pela graça, renúncia e perdão.',
    previas: [
      { id: 4, title: '📖 Devocional 1 — O propósito do casamento' },
      { id: 5, title: '📖 Devocional 2 — Graça nas imperfeições' },
    ],
    ctaText: 'Ver prévias →',
    ctaWhatsApp: 'https://wa.me/5541999999999?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20Devocion%C3%A1rio%20%22Alian%C3%A7a%20Renovada%22'
  },
  {
    featured: false,
    gradient: 'linear-gradient(135deg, #0F1E2E 0%, #6B7280 100%)',
    image: imgViuvos,
    tag: 'Viúvos / Luto',
    title: 'Caminhos de Consolo',
    desc: 'Reflexões para encontrar esperança, cura e conforto nos momentos de perda.',
    previas: [
      { id: 6, title: '📖 Devocional 1 — A presença na ausência' },
      { id: 7, title: '📖 Devocional 2 — Permitindo-se lamentar' },
    ],
    ctaText: 'Ver prévias →',
    ctaWhatsApp: 'https://wa.me/5541999999999?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20Devocion%C3%A1rio%20%22Caminhos%20de%20Consolo%22'
  },
  {
    featured: false,
    gradient: 'linear-gradient(135deg, #1A3A5C 0%, #0F2A40 100%)',
    image: imgEmpresarios,
    tag: 'Empresários cristãos',
    title: 'Fé no Mercado',
    desc: 'Como honrar a Deus no mundo dos talentos, da liderança e dos negócios.',
    previas: [
      { id: 8, title: '📖 Devocional 1 — Mordomia dos negócios' },
      { id: 9, title: '📖 Devocional 2 — Ética do Reino' },
    ],
    ctaText: 'Ver prévias →',
    ctaWhatsApp: 'https://wa.me/5541999999999?text=Ol%C3%A1%2C%20gostaria%20de%20adquirir%20o%20Devocion%C3%A1rio%20%22F%C3%A9%20no%20Mercado%22'
  }
]

// ── MODAL DE PRÉVIA ──
function PreviewModal({ previewId, onClose }) {
  const data = previewContent[previewId]
  const [checkoutStep, setCheckoutStep] = useState('preview')

  // IDs dos devocionais gratuitos (Dias 1–5 de Solteiros)
  const freeIds = ['s1', 's2', 's3', 's4', 's5']
  const isFree = freeIds.includes(previewId)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handlePayment = (e) => {
    e.preventDefault()
    setCheckoutStep('processing')
    setTimeout(() => setCheckoutStep('success'), 2000)
  }

  if (!data) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className={styles.modalClose} onClick={onClose} aria-label="Fechar">✕</button>
        
        {checkoutStep === 'preview' && (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderTop}>
                <span className={styles.modalSerie}>✦ {data.serie}</span>
                {isFree && (
                  <span className={styles.freeBadge}>✦ Gratuito</span>
                )}
              </div>
              <h2 className={styles.modalTitle}>{data.title}</h2>
            </div>

            <div className={styles.modalVersiculo}>
              <p>{data.versiculo}</p>
            </div>

            <div className={styles.modalBody}>
              {data.texto.split('\n\n').map((para, i) => (
                para.startsWith('**') 
                  ? <p key={i} className={styles.modalDestaque}>{para.replace(/\*\*/g, '')}</p>
                  : <p key={i}>{para}</p>
              ))}
            </div>

            <div className={styles.modalOracao}>
              <span className={styles.oracaoLabel}>🙏 Oração</span>
              <p>{data.oracao}</p>
            </div>

            <div className={styles.modalFooter}>
              <p>Gostou desta prévia? Adquira o devocionário completo.</p>
              <button onClick={() => setCheckoutStep('checkout')} className={styles.btnPrimary}>
                Adquirir o devocionário completo
              </button>
            </div>
          </>
        )}

        {checkoutStep === 'checkout' && (
          <div className={styles.checkoutBox}>
            <span className={styles.modalSerie}>✦ Compra Segura</span>
            <h2 className={styles.modalTitle}>Adquirir Devocionário</h2>
            <p className={styles.checkoutSubtitle}>Série: <strong>{data.serie}</strong></p>
            
            <form onSubmit={handlePayment} className={styles.checkoutForm}>
              <div className={styles.formGroup}>
                <label>Nome Completo</label>
                <input type="text" placeholder="Ex: João da Silva" required />
              </div>
              <div className={styles.formGroup}>
                <label>E-mail</label>
                <input type="email" placeholder="joao@email.com" required />
              </div>
              <div className={styles.formGroup}>
                <label>Número do Cartão</label>
                <input type="text" placeholder="0000 0000 0000 0000" required />
              </div>
              <div className={styles.cardRow}>
                <div className={styles.formGroup}>
                  <label>Validade</label>
                  <input type="text" placeholder="MM/AA" required />
                </div>
                <div className={styles.formGroup}>
                  <label>CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
              <button type="submit" className={styles.btnPrimary}>Pagar R$ 29,90</button>
            </form>
          </div>
        )}

        {checkoutStep === 'processing' && (
          <div className={styles.checkoutBox}>
            <div className={styles.spinner}></div>
            <h2 className={styles.modalTitle}>Processando...</h2>
            <p className={styles.checkoutSubtitle}>Aguarde a confirmação do pagamento.</p>
          </div>
        )}

        {checkoutStep === 'success' && (
          <div className={styles.checkoutBox}>
            <div className={styles.successIconCheckout}>✓</div>
            <h2 className={styles.modalTitle}>Pagamento Aprovado!</h2>
            <p className={styles.checkoutSubtitle}>Obrigado por investir no seu coração.</p>
            
            <div className={styles.contentLinkBox}>
              <p>O devocionário completo da série <strong>{data.serie}</strong> já está disponível.</p>
              <a href="#" onClick={(e) => e.preventDefault()} className={styles.btnPrimary}>
                ⬇ Baixar Devocionário (PDF)
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Devocionais() {
  const [expandedSeries, setExpandedSeries] = useState(null)
  const [openPreview, setOpenPreview] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const handleLivros = useCallback((e) => {
    e.preventDefault()
    navigate('/')
    setTimeout(() => {
      const el = document.getElementById('livros')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }, [navigate])

  return (
    <section className={styles.page}>
      {/* ── MODAL ── */}
      {openPreview && (
        <PreviewModal previewId={openPreview} onClose={() => setOpenPreview(null)} />
      )}

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.photoWrapper}>
          <img src={pastorPhoto} alt="Pastor Nélio DaSilva" className={styles.photo} />
          <div className={styles.overlayLeft} />
          <div className={styles.overlayBottom} />
          <div className={styles.overlayTop} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Séries Devocionais</span>
          <h1 className={styles.heroTitle}>
            Por Estação<br />
            <em>da Vida</em>
          </h1>
          <p className={styles.heroSub}>
            Reflexões diárias para guiar seu coração em cada fase da jornada
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container} id="devocionais">
        
        <div className={styles.sectionHeader}>
          <p className={styles.lead}>
            A Palavra de Deus não muda, mas os momentos que atravessamos, sim.
          </p>
          <p className={styles.body}>
            Nossas séries devocionais foram desenhadas meticulosamente para dialogar 
            com a fase exata em que você se encontra. Seja enfrentando dores singulares, 
            construindo o alicerce de um casamento ou exercendo liderança, há um 
            encorajamento bíblico específico para você.
          </p>
        </div>

        {/* GRID DE SÉRIES */}
        <div className={styles.grid}>
          {devSeries.map((s, idx) => (
            <div key={idx} className={`${styles.card} ${s.featured ? styles.featured : ''}`}>
              
              {s.badge && <div className={styles.devBadge}>{s.badge}</div>}
              
              <div className={styles.devImg}>
                <img src={s.image} alt={s.title} className={styles.devImageElement} />
              </div>
              
              <div className={styles.devBody}>
                <span className={styles.devTag}>{s.tag}</span>
                <h3 className={styles.devTitle}>{s.title}</h3>
                <p className={styles.devDesc}>{s.desc}</p>
                
                {(s.featured || expandedSeries === idx) && s.previas && (
                  <div className={styles.devPrevias}>
                    <span className={styles.previasLabel}>Prévias disponíveis:</span>
                    <div className={styles.previasList}>
                      {s.previas.map(p => (
                        <button
                          key={p.id}
                          className={styles.previaItem}
                          onClick={() => setOpenPreview(p.id)}
                        >
                          <span className={styles.previaItemLeft}>
                            <span>{p.free !== undefined ? (p.free ? '📖' : '🔒') : '📖'}</span>
                            <span>{p.title}</span>
                          </span>
                          {p.free !== undefined && (
                            <span className={p.free ? styles.freeTag : styles.lockedTag}>
                              {p.free ? 'Gratuito' : 'Premium'}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {s.featured ? (
                  <a
                    href={s.ctaWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    {s.cta}
                  </a>
                ) : (
                  <button 
                    onClick={() => setExpandedSeries(expandedSeries === idx ? null : idx)} 
                    className={styles.btnOutline}
                    style={{ cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    {expandedSeries === idx ? 'Ocultar prévias' : s.ctaText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* RODAPÉ */}
        <div className={styles.ctaFooter}>
          <p>Todas as séries disponíveis também em formato impresso e e-book.</p>
          <a href="/#livros" onClick={handleLivros} className={styles.btnSecondary}>
            Ver todos os livros →
          </a>
        </div>

      </div>
    </section>
  )
}
