import { useEffect } from 'react'
import styles from './PastorParaPastor.module.css'

export default function PastorParaPastor() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Palavra Pastoral</span>
          <h1 className={styles.heroTitle}>
            De Pastor<br />
            <em>para Pastor</em>
          </h1>
          <p className={styles.heroSub}>
            Palavras de encorajamento, orientação e consolo de quem conhece
            as alegrias e os desafios do ministério pastoral.
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container} id="pastor-para-pastor">

        {/* Intro */}
        <div className={styles.sectionHeader}>
          <div className={styles.introContent}>
            <p>O ministério pastoral é, ao mesmo tempo, um dos chamados mais sublimes e uma das jornadas mais exigentes da vida cristã.</p>
            <p>Há uma beleza indescritível em servir pessoas, cuidar de almas e participar da obra de Deus na transformação de vidas. Mas há também um lado silencioso, muitas vezes invisível, marcado por lutas internas, pressões constantes e desafios que poucos realmente compreendem.</p>
            <p>Por trás do púlpito há um homem.<br />
            Por trás da mensagem há uma alma.<br />
            Por trás da liderança há um coração que também sangra.</p>
            <p>Esta série nasce exatamente nesse lugar — não da teoria, mas da realidade.</p>
            <p><strong>"De Pastor para Pastor"</strong> não é um conjunto de ideias distantes, mas um caminho de encorajamento construído a partir das dores, dúvidas e desafios que fazem parte do dia a dia ministerial.</p>
            <p>Ao longo desta jornada, abordaremos mais de 50 desafios reais que pastores enfrentam, como:</p>
            <ul>
              <li>a solidão no ministério</li>
              <li>o peso das expectativas</li>
              <li>o cansaço emocional e espiritual</li>
              <li>conflitos e divisões</li>
              <li>a dor de ver pessoas indo embora</li>
              <li>a pressão por resultados</li>
              <li>o desgaste familiar</li>
              <li>a luta com desânimo e frustração</li>
            </ul>
            <p>Esses desafios não são sinais de fracasso — são parte do campo onde Deus trabalha profundamente no coração daqueles que Ele chamou.</p>
            <p>Muitas vezes, o pastor é aquele que fortalece a todos, mas raramente encontra espaço para expor suas próprias fraquezas.</p>
            <p>Ele aconselha, mas nem sempre é aconselhado.<br />
            Ele sustenta, mas muitas vezes se sente sem apoio.<br />
            Ele encoraja, mas frequentemente luta para manter o próprio ânimo.</p>
            <p>Essa série é um lembrete de que <strong>você não está sozinho</strong>.</p>
            <p>Mais do que isso: é um chamado para voltar ao centro.</p>
            <p>Cada reflexão foi construída com base nas Escrituras, trazendo não apenas identificação com a dor, mas direção espiritual para enfrentá-la.</p>
            <p>Aqui, não oferecemos fórmulas rápidas. Oferecemos verdades eternas.<br />
            Não oferecemos soluções superficiais. Oferecemos fundamentos bíblicos.<br />
            Não oferecemos discursos motivacionais. Oferecemos encorajamento que nasce da Palavra de Deus.</p>
            <p>O objetivo desta série não é apenas ajudar você a suportar o ministério — é ajudar você a <strong>permanecer saudável</strong> nele.</p>
            <p>Porque não basta começar bem. É necessário permanecer fiel.<br />
            Não basta servir. É necessário permanecer inteiro.<br />
            Não basta liderar. É necessário permanecer perto de Deus.</p>
            <p>Se em algum momento você se sentiu cansado, desanimado, incompreendido ou sozinho, <strong>esta série é para você</strong>.</p>
            <p>Se você já pensou em desistir, mas continua porque sabe que foi chamado, <strong>esta série é para você</strong>.</p>
            <p>Se você ama o ministério, mas reconhece o peso que ele carrega, <strong>esta série é para você</strong>.</p>
            <p>Que cada palavra aqui seja como um companheiro de caminhada.<br />
            Que cada reflexão seja um sopro de esperança.</p>
            <p>E que, acima de tudo, você seja lembrado constantemente de uma verdade essencial:</p>
            <p><em>Aquele que o chamou é fiel para sustentar você até o fim.</em></p>
          </div>
        </div>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦ Reflexões ✦</span>
        </div>

        {/* ── ARTIGO 01: CANSAÇO EMOCIONAL (BURNOUT) ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>01</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Pastor para Pastor
              </span>
              <h2 className={styles.articleTitle}>Lidando com o Cansaço Emocional (Burnout)</h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <blockquote className={styles.articleVerse}>
              "E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos."
              <cite>— Gálatas 6:9</cite>
            </blockquote>

            <p>Existe um tipo de exaustão que não aparece no corpo, mas pesa profundamente na alma. É a exaustão de ter de continuar. Não estou me referindo à exaustão física, mas àquele desgaste silencioso de quem segue servindo, lutando, aconselhando, pregando, orando e sustentando pessoas… enquanto, por dentro, sente que está ficando sem forças.</p>
            <p>Esse é um dos cansaços mais perigosos no ministério pastoral. Porque ele não chega de uma vez. Ele se instala vagarosamente. Nas pequenas frustrações. Nas expectativas não correspondidas. Nas críticas repetidas. Nas batalhas invisíveis. Na sensação de que muito se faz e — aparentemente — pouco resultado é alcançado.</p>
            <p>Estou falando de esgotamento emocional. É o burnout silencioso do pastor. É quando o corpo continua presente, mas a alma começa a se retirar. Você continua pregando, mas sem alegria. Continua liderando, mas sem leveza. Continua aconselhando, mas internamente exausto. Continua sorrindo no culto, mas as lágrimas interiormente têm sido cada vez mais frequentes.</p>
            <p>E a parte mais difícil nisso é essa: ninguém percebe. Porque o pastor aprendeu a operar, seguindo a sua rotina mesmo exausto. Se acostumou na rotineira prática de emocionalmente sustentar os outros enquanto se enfraquece por dentro. Aprendeu a parecer forte enquanto luta para não desabar. E é exatamente aqui, dentro desse contexto, que Paulo escreve:</p>

            <p className={styles.pullQuote}>"E não nos cansemos de fazer o bem…"</p>

            <p>Isso significa que os homens de Deus são humanos, se desgastam, enfrentam até mesmo períodos longos de exaustão. Paulo não diz "se vocês se cansarem". Ele diz "não nos cansemos". Porque o cansaço faz parte da caminhada. O problema não é sentir cansaço. O perigo está em permitir que ele nos leve ao desencorajamento.</p>
            <p>Existe uma diferença entre estar cansado e estar vencido. O cansado ainda luta. O vencido já desistiu. Paulo está dizendo: não permita que o desgaste roube e anule sua perseverança. Não permita que a exaustão mate sua fidelidade. Não permita que o peso do processo faça você abandonar o propósito, porque há uma colheita a ser ceifada.</p>

            <p className={styles.pullQuote}>"…pois no tempo próprio colheremos…"</p>

            <p>Essa frase é profundamente pastoral. Porque uma das maiores dores do ministério é aparentemente semear sem ver resultados imediatos do labor investido. É quando você ora e não vê mudança. Você ensina e não vê transformação. Você investe e não vê retorno esperado. Você ama, se entrega e tantas e tantas vezes tudo o que você recebe é ingratidão.</p>
            <p>E o coração pergunta: "Vale a pena continuar?" Paulo responde: "Sim. Vale e vale muito!" Porque existe o tempo próprio para a colheita. Nem toda semente brota com rapidez. As sementes crescem no oculto antes de aparecerem no visível. Muitos pastores sofrem porque avaliam o ministério pela ótica do imediatismo. Mas Deus trabalha no invisível.</p>
            <p>Você não vê todas as lágrimas que sua pregação secou. Você não tem a mínima ideia sobre as decisões silenciosas e de impacto eterno que nasceram do seu ensino. Você não imagina quantas pessoas permaneceram firmes porque você não desistiu. O pastor — de um modo geral — quase nunca vê toda a colheita. Mas Deus vê. E Ele promete: "colheremos…". Não é possibilidade. É promessa. Não necessariamente no seu tempo. Não da forma que você deseja. E não com o reconhecimento que você esperava.</p>
            <p>Mas haverá colheita, porque toda fidelidade diante de Deus produz fruto. Todo sermão pregado com lágrimas. Toda oração feita em secreto. Toda visita pastoral cansativa. Toda madrugada de intercessão. Toda permanência quando seria mais fácil sair. Nada disso é em vão.</p>
            <p>O problema é que o inimigo também sabe disso. Por isso ele não precisa necessariamente destruir seu ministério. Basta tentar cansá-lo até ao ponto de atingir o pico do desencorajamento. Porque um líder exausto torna-se uma presa fácil para o inimigo, que não perde a mínima possibilidade de construir uma intensa e ferrenha dúvida no coração do pastor.</p>
            <p>Pastor exausto começa a se comparar. Pastor exausto começa a servir mecanicamente. Pastor exausto começa a perder a ternura. Pastor exausto começa a confundir exaustão com fracasso. E isso é muito, muito perigoso. Muitas vezes o pastor sente o ardente desejo de desistir do chamado… quando, na verdade, ele só precisa de um descanso, tomar novos ares ainda que por curto período de tempo.</p>
            <p>Nem toda vontade de parar é desistência. Tantas vezes é apenas a alma pedindo socorro. Jesus entendeu isso perfeitamente. Certa ocasião Ele disse aos seus exaustos discípulos: "Venham comigo para um lugar deserto e descansem um pouco." Isso é poderoso. Jesus não disse: "Trabalhem mais." "Orem mais." "Jejuem mais." Ele apenas disse: "Descansem."</p>
            <p>Alguns anos atrás coloquei à disposição de pastores e sua família a minha casa — uma casa muito confortável num condomínio muito agradável e a apenas três minutos de caminhada até as águas do mar. Dei o nome a essa casa, que tinha como objetivo promover uma sadia pausa ministerial, de Casa Renovo. Para minha surpresa e da minha esposa, fomos surpreendidos com a falta de interesse de pastores em investir tempo de descanso com toda sua família e em si mesmos. Umas férias — em um lugar de beleza exuberante que proporcionava descanso por duas semanas em uma casa com benefícios de renovo, acolhedora e com custo praticamente zero.</p>
            <p>A razão para isso é que — por mais paradoxal que seja — muitos pastores tentam vencer a exaustão com mais atividades. Mas exaustão não se cura com produtividade. Se cura com presença. Com descanso. Com honestidade diante de Deus. Com limites saudáveis. Com alma tratada.</p>
            <p>Pastor, você não é uma máquina ministerial. Você é um homem de Deus. Uma mulher de Deus. Uma alma que também precisa de pastoreio. E há uma frase final de Paulo que sintetiza e sustenta tudo isso: "…se não desanimarmos."</p>
            <p>Esse é o verdadeiro campo de batalha. O desânimo. Não é apenas sobre cansaço. É sobre esperança. Porque quando a esperança morre, o ministério se torna um peso imenso, praticamente insuportável.</p>
            <p>Mas quando a esperança permanece, até o vale se torna lugar de resistência. Ouça isso com atenção, com coração aberto e com profundidade: seu cansaço não é o fim da sua história. Seu esgotamento não cancela seu chamado. Seu vale não significa abandono de Deus. É imprescindível se lembrar de que muito possivelmente você esteja mais perto da colheita do que imagina. Deus — não tenho dúvida alguma — está sustentando raízes que você não consegue ver.</p>
            <p>Portanto, não pare no meio da sua jornada. Não desista no campo onde Deus mandou você semear. Ainda haverá fruto. Ainda haverá renovo. Ainda haverá alegria. Ainda haverá colheita.</p>

            <h3 className={styles.articleSubheading}>Aplicações Práticas</h3>
            <ol className={styles.articleSteps}>
              <li>Reconheça seu cansaço sem culpa.</li>
              <li>Diferencie exaustão de fracasso.</li>
              <li>Lembre-se de que existe tempo próprio.</li>
              <li>Aprenda a descansar sem culpa.</li>
              <li>Não permita que o desânimo governe sua alma.</li>
            </ol>
            <p>Cansaço pode ser inevitável. Desânimo permanente não precisa ser. Proteja sua esperança. Alimente sua fé. Permaneça perto da fonte.</p>
            <p>Quem permanece focado em Jesus Cristo, o real Senhor da Sua igreja, sempre enfrentará os embates, as adversidades, mas sempre também irá frutificar mesmo em meio às mais adversas estações da vida. Deixo agora com você alguns práticos desafios que estou chamando de "Desafios Práticos do Dia".</p>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia #1</span>
              <p className={styles.challengeTitle}>Faça um Inventário Honesto da Sua Alma</p>
              <p>Reserve hoje 30 minutos a sós com Deus. Apanhe uma folha de papel, escreva e responda, com absoluta honestidade:</p>
              <ul className={styles.articleQuestions}>
                <li>O que está me cansando emocionalmente neste momento?</li>
                <li>O que está roubando minha alegria no ministério?</li>
                <li>O que tenho carregado que Deus nunca me pediu para carregar?</li>
                <li>Em quais áreas estou funcionando no piloto automático?</li>
              </ul>
              <p>Depois de escrever, transforme cada resposta em oração, entregando conscientemente esses pesos ao Senhor.</p>
              <p className={styles.objetivo}><strong>Objetivo:</strong> identificar a verdadeira fonte da exaustão, em vez de apenas lidar com seus sintomas.</p>
            </div>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia #2</span>
              <p className={styles.challengeTitle}>Agende um Renovo, Não Apenas um Descanso</p>
              <p>Ainda hoje, marque na sua agenda um período específico de renovo para os próximos dias. Pode ser:</p>
              <ul className={styles.articleQuestions}>
                <li>Algumas horas a sós com Deus.</li>
                <li>Um dia de total descanso sem atividades ministeriais.</li>
                <li>Um passeio com sua esposa e família.</li>
                <li>Uma caminhada em silêncio e oração.</li>
                <li>Um encontro com um amigo ou mentor que fortaleça sua alma.</li>
              </ul>
              <p>O importante é que esse tempo seja protegido e inegociável. Lembre-se: Jesus disse: "Venham comigo para um lugar deserto e descansem um pouco." O descanso saudável não é falta de compromisso; é obediência.</p>
              <p className={styles.objetivo}><strong>Objetivo:</strong> reconhecer que sua alma precisa de manutenção espiritual antes de entrar em colapso.</p>
            </div>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia #3</span>
              <p className={styles.challengeTitle}>Relembre as Evidências da Fidelidade de Deus</p>
              <p>Escreva pelo menos cinco pessoas, situações ou frutos que Deus produziu através do seu ministério ao longo dos anos. Não pense apenas em grandes resultados. Lembre-se de:</p>
              <ul className={styles.articleQuestions}>
                <li>Uma vida restaurada.</li>
                <li>Um casamento fortalecido.</li>
                <li>Uma pessoa que voltou para Cristo.</li>
                <li>Um jovem discipulado.</li>
                <li>Uma família alcançada.</li>
                <li>Uma oração respondida.</li>
              </ul>
              <p>Leia essa lista em voz alta e agradeça a Deus por cada uma delas. Quando o cansaço aumenta, tendemos a enxergar apenas o que ainda não aconteceu. A gratidão nos ajuda a recordar, a claramente relembrar o que Deus já fez.</p>
              <p className={styles.objetivo}><strong>Objetivo:</strong> combater o desânimo lembrando-se de que sua semeadura não tem sido em vão.</p>
            </div>

            <p className={styles.closingQuestion}>Que Deus muito o abençoe e profundamente renove a sua alma em Cristo Jesus!</p>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── ARTIGO 02: ESPÍRITO DE CONTENDA ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>02</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Pastor para Pastor
              </span>
              <h2 className={styles.articleTitle}>Lidando com Espírito de Contenda</h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <blockquote className={styles.articleVerse}>
              "Evite as controvérsias tolas e inúteis, pois você sabe que acabam em brigas."
              <cite>— 2 Timóteo 2:23</cite>
            </blockquote>
            <blockquote className={styles.articleVerse}>
              "Ao servo do Senhor não convém brigar, mas ser amável para com todos, apto para ensinar, paciente."
              <cite>— 2 Timóteo 2:24</cite>
            </blockquote>

            <p>Um dos desgastes mais silenciosos no ministério pastoral não vem de fora — vem de dentro da própria igreja: pessoas com espírito de contenda. São aqueles que prosperam em discussões, alimentam conflitos, criam divisões sutis, questionam constantemente com intenções absolutamente nada saudáveis e, muitas vezes, encontram satisfação em tensionar até mesmo os mais sadios ambientes.</p>
            <p>Não se trata de alguém que discorda ocasionalmente. Mas de uma postura contínua, marcada por confronto improdutivo. E o mais desafiador: esse tipo de comportamento pode se disfarçar de zelo espiritual. A pessoa pode dizer: "Estou defendendo a verdade." "Estou apenas sendo sincero." "Alguém precisa falar." Mas, na realidade e na prática, o fruto não é edificação — é divisão.</p>
            <p>Paulo é direto com Timóteo ao dizer: evite esse tipo de ambiente. Isso não significa fugir da responsabilidade pastoral. Significa não se deixar prender em discussões que não produzem absolutamente nada de produtivo. Porque há debates que não edificam — apenas inflam. O espírito de contenda tem uma característica perigosa: é perigosamente contagioso.</p>
            <p>Se o líder não estiver atento, pode acabar respondendo no mesmo tom, entrando em disputas inúteis e desnecessárias, gastando energia onde não há fruto e, pior, permitindo que o ambiente da igreja seja contaminado. Por isso Paulo afirma:</p>

            <p className={styles.pullQuote}>"…ao servo do Senhor não convém brigar."</p>

            <p>Isso não é fraqueza. Isso é maturidade espiritual. O pastor não é chamado para vencer discussões — é chamado para ganhar pessoas. Mas isso não significa ser passivo. Existe uma diferença abismal entre ser pacífico e ser omisso; entre evitar contendas e ignorar o erro. O pastor precisa discernir quando corrigir com firmeza, silenciar com sabedoria e se afastar de discussões infrutíferas.</p>

            <blockquote className={styles.articleVerse}>
              "O começo da discussão é como a primeira brecha numa represa; por isso, abandone a questão antes que surja a contenda."
              <cite>— Provérbios 17:14 (NVI)</cite>
            </blockquote>

            <p>Ou seja, uma vez iniciada, as coisas podem sair do controle rapidamente. Por isso, muitas batalhas devem ser evitadas antes mesmo de começarem. Mas há algo ainda mais profundo: pessoas com espírito de contenda frequentemente revelam um coração não tratado. Ali pode estar presente orgulho, necessidade de atenção, feridas emocionais, imaturidade espiritual. Isso não justifica o comportamento, mas aponta para a necessidade de pastoreio e não apenas de confronto. Ainda assim, o pastor precisa proteger o rebanho.</p>
            <p>Porque contendas constantes enfraquecem a unidade, desgastam a liderança, desviam o foco da missão da Igreja e entristecem o Espírito. Aqui está uma verdade importante que muitos líderes ignoram: nem toda voz dentro da igreja merece palco. E nem toda discussão merece resposta. Sabedoria pastoral é saber onde investir energia. Porque quem vive para discutir… raramente está disposto a ser transformado.</p>
            <p>O pastor precisa aprender a discernir rapidamente ambientes e pessoas dominadas por espírito de contenda. Nem toda discussão deve ser abraçada, e nem toda provocação merece resposta. É fundamental manter a postura de mansidão, sem abrir mão da verdade, e agir com firmeza quando a unidade da igreja estiver sendo ameaçada.</p>
            <p>O pastor também deve proteger o ambiente espiritual da igreja, evitando que debates infrutíferos se tornem cultura. Além disso, é necessário investir em discipulado, ajudando pessoas a crescerem em maturidade e a abandonarem comportamentos contenciosos.</p>

            <h3 className={styles.articleSubheading}>Aplicações Práticas</h3>
            <ol className={styles.articleSteps}>
              <li>Recuse entrar em discussões que não produzem edificação.</li>
              <li>Responda sempre com tom manso, mesmo diante de provocações.</li>
              <li>Estabeleça limites claros para conversas improdutivas.</li>
              <li>Invista em discipulado para tratar raízes de comportamento contencioso.</li>
              <li>Priorize a unidade sem comprometer a verdade.</li>
            </ol>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia</span>
              <p>Identifique uma situação recente de contenda. Hoje você irá:</p>
              <ul className={styles.articleQuestions}>
                <li>Avaliar se vale a pena continuar investindo nessa discussão.</li>
                <li>Decidir interromper qualquer diálogo improdutivo.</li>
                <li>Orar por sabedoria antes de qualquer resposta.</li>
              </ul>
              <p className={styles.objetivo}>E firmemente decidir ser um agente de paz, e não de conflitos.</p>
            </div>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── ARTIGO 03: QUANDO ABANDONADO, DEUS PERMANECE ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>03</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Pastor para Pastor
              </span>
              <h2 className={styles.articleTitle}>Quando Abandonado, Deus Permanece</h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <blockquote className={styles.articleVerse}>
              "Na minha primeira defesa, ninguém apareceu para me apoiar; todos me abandonaram. Que isso não lhes seja cobrado. Mas o Senhor permaneceu ao meu lado e me deu forças, para que por mim a mensagem fosse plenamente proclamada e todos os gentios a ouvissem; e eu fui libertado da boca do leão."
              <cite>— 2 Timóteo 4:16-17</cite>
            </blockquote>

            <p>Poucas dores são tão silenciosas quanto a solidão pastoral. O pastor geralmente é cercado de pessoas, mas profundamente solitário por dentro. Ele ouve muitos, mas quase não é ouvido. Ele fortalece muitos, mas frequentemente se vê sem quem o fortaleça. Ele aconselha muitos, mas muitas vezes chora sozinho. Ele levanta famílias enquanto tenta sustentar a sua própria. Ele prega sobre esperança enquanto luta para não se desencorajar.</p>
            <p>A solidão ministerial não é ausência de gente — é ausência de amparo. E Paulo conheceu isso profundamente. Ao escrever sua última carta, ele não escreve como um herói invencível, mas como um homem ferido, cansado e real. Ele diz:</p>

            <p className={styles.pullQuote}>"Ninguém apareceu para me apoiar; todos me abandonaram."</p>

            <p>Isso dói. Não foi um desconhecido. Não foi um opositor distante. Foram pessoas próximas. Gente que caminhou com ele. Pessoas que conheciam sua história. Companheiros de jornada. Abandono vindo de longe machuca. Abandono vindo de perto machuca e fere com muito mais profundidade.</p>
            <p>Todo pastor conhece isso. Aquele líder que prometeu fidelidade e saiu criticando. Aquela ovelha cuidada por anos que se tornou acusadora. Aquele cooperador que desapareceu justamente na hora mais difícil. Aquela reunião onde você percebeu que estava sozinho. O púlpito ainda estava lá. O microfone ainda estava ligado. O culto continuava. Mas interiormente, algo havia quebrado.</p>
            <p>Paulo não romantiza essa dor. Ele não finge que não doeu. Ele a registra. Isso nos ensina algo de tremenda importância: espiritualidade madura não é negar a dor, é levar a dor até o Senhor. Muitos pastores adoecem porque aprenderam a ocultar a dor, mas não a tratá-la. Eles suportam a dor, mas não a processam. Continuam servindo, mas internamente estão sangrando. Paulo não faz isso.</p>
            <p>Ele reconhece a ferida. Mas ele não termina nela. Ele continua:</p>

            <p className={styles.pullQuote}>"Mas o Senhor permaneceu ao meu lado…"</p>

            <p>Essa conscientização profunda em sua alma muda absolutamente tudo! Todos foram embora. Mas o Senhor ficou. Ninguém apareceu. Mas Jesus permaneceu. A presença de Deus não é uma teoria bonita para um sermão — é sobrevivência para quem lidera.</p>
            <p>Há momentos em que o pastor descobre que sua maior sustentação não vem da estrutura da igreja, nem da fidelidade das pessoas, nem do reconhecimento ministerial. Vem da presença silenciosa e fiel de Deus. Há noites silenciosas em que o pastor necessita de alguém apenas para estar por perto em sinal de apoio e compreensão, mas não encontra ninguém. Isso porque há batalhas que ninguém vê, ninguém percebe.</p>

            <p className={styles.pullQuote}>Mas o Senhor vê, o Senhor percebe e o Senhor permanece.</p>

            <p>Ele permanece junto com você em seu carro após uma reunião longa e muito difícil. Permanece no domingo após aquele culto esvaziado. Permanece na madrugada da ansiedade. Permanece quando até você começa a duvidar. E Paulo diz mais: "…e me deu forças."</p>
            <p>Deus não apenas ficou presente — Ele fortaleceu. Porque presença sem sustento não bastaria. O Senhor não apenas diz "estou aqui". Ele diz "vou sustentar você nisso". Há uma força que não nasce da personalidade. Não vem do temperamento forte. Não vem da longa experiência ministerial. Ela vem do Senhor. É a força de continuar pregando quando o coração está cansado. De continuar servindo quando o reconhecimento e a gratidão não vêm. De continuar fiel quando seria mais fácil desistir.</p>
            <p>Essa força é graça. Paulo ainda revela o propósito:</p>

            <p className={styles.pullQuote}>"…para que por mim a mensagem fosse plenamente proclamada…"</p>

            <p>Deus o sustentou para que a missão continuasse. Isso é profundo. O sofrimento não interrompeu o chamado. A dor não anulou o propósito. O abandono não cancelou a vocação. Pastor, escute isso com o coração: o fato de você estar ferido não significa que Deus terminou com você. Seu cansaço não é seu fim. Sua solidão não é o funeral do seu ministério.</p>
            <p>Deus ainda pode usar sua voz. Aliás, muitas vezes é justamente no vale que a pregação ganha profundidade. Quem nunca sofreu fala sobre dor. Quem sofreu ministra cura. Quem nunca foi abandonado ensina teoria. Quem foi sustentado por Deus oferece testemunho. Seu deserto não é desperdício. Seu vale pode virar púlpito. Sua lágrima pode virar sermão. Sua perseverança silenciosa pode salvar alguém.</p>
            <p>E há algo ainda muito belo: Paulo diz:</p>

            <p className={styles.pullQuote}>"Que isso não lhes seja cobrado."</p>

            <p>Isso é maturidade espiritual. Ele foi abandonado, mas não ficou prisioneiro da amargura. Poucos pesos destroem tanto um pastor quanto o ressentimento. Ministério com ferida não tratada se transforma em dureza. E dureza constante destrói o coração pastoral.</p>
            <p>Paulo faz a opção de liberar perdão. Perdoar não apaga a dor. Mas impede que a dor governe sua alma. Pastor ferido precisa de cura, não de cinismo. Você não pode continuar pastoreando bem se sua alma endureceu. Há líderes que ainda estão pregando, mas já deixaram de amar. Isso é perigoso. Deus não quer apenas manter seu ministério vivo. Ele quer manter seu coração vivo.</p>
            <p>Por isso, às vezes, o maior milagre não é crescimento ministerial. É continuar com ternura depois da traição. É continuar com fé depois da decepção. É continuar com amor depois da solidão. Isso é milagre pastoral.</p>

            <h3 className={styles.articleSubheading}>Aplicações Práticas</h3>
            <ol className={styles.articleSteps}>
              <li>Reconheça sua solidão sem culpa.</li>
              <li>Não transforme abandono em amargura — "Que isso não lhes seja cobrado."</li>
              <li>Aprenda a descansar na presença, não apenas nos resultados.</li>
              <li>Continue pregando mesmo ferido.</li>
              <li>Permita que Deus cuide do pastor, não apenas do ministério.</li>
            </ol>

            <p className={styles.soulCall}>
              Você não é apenas alguém que serve.<br />
              Você é alguém que precisa ser cuidado.<br />
              Antes de ser pastor, você é filho.<br />
              Filhos descansam. Filhos choram. Filhos são sustentados.<br />
              Volte para esse lugar.
            </p>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia #1</span>
              <p className={styles.challengeTitle}>Troque a Autossuficiência pela Presença de Deus</p>
              <p>Reserve pelo menos 15 minutos hoje para estar sozinho com Deus — não para preparar sermão, resolver problemas ou fazer pedidos, mas simplesmente para derramar o coração diante dEle.</p>
            </div>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia #2</span>
              <p className={styles.challengeTitle}>Liberte Alguém da Dívida da Sua Alma</p>
              <p>Identifique uma pessoa que o feriu, decepcionou ou abandonou. Hoje, diante de Deus, escolha liberar perdão.</p>
            </div>

            <div className={styles.challenge}>
              <span className={styles.challengeLabel}>Desafio Prático do Dia #3</span>
              <p className={styles.challengeTitle}>Continue Servindo, Mesmo Cansado</p>
              <p>Faça hoje um ato concreto de fidelidade ao seu chamado.</p>
            </div>

            <p className={styles.closingQuestion}>Deus fortaleceu Paulo não apenas para que ele não desistisse, mas para que "a mensagem fosse plenamente proclamada".</p>
          </div>
        </article>

        {/* CTA Footer */}
        <div className={styles.ctaFooter}>
          <p>Novos textos são publicados regularmente. Acompanhe e fortaleça seu ministério.</p>
        </div>
      </div>
    </section>
  )
}
