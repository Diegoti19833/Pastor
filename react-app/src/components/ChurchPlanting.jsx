import { useEffect } from 'react'
import styles from './ChurchPlanting.module.css'
import pastorPhoto from '../assets/pastor.jpg'

const keyPhrases = [
  'Foram as lutas que forjaram o homem.',
  'Foram os desafios que moldaram o líder.',
  'Foi a dependência de Deus que formou o plantador.',
]

const pillars = [
  {
    icon: '✦',
    title: 'Chamado Inabalável',
    desc: 'Não é estratégia — é convicção. Plantar igrejas começa com a certeza do chamado que sustenta nos momentos de crise.',
  },
  {
    icon: '✦',
    title: 'Caráter Forjado',
    desc: 'Os desafios moldam o plantador. Cada vale é uma escola de perseverança, fé e dependência total de Deus.',
  },
  {
    icon: '✦',
    title: 'Território Espiritual',
    desc: 'Plantar igrejas é entrar em conflito real. Oposição, escassez e solidão são parte do processo — e Deus está em cada etapa.',
  },
  {
    icon: '✦',
    title: 'Milagres Silenciosos',
    desc: 'Uma sala pequena se tornando lugar de adoração. Vidas do zero sendo discipuladas. Comunidades alcançadas pelo Evangelho.',
  },
]

const encouragements = [
  'Você não precisa ter tudo pronto.',
  'Você não precisa ter todos os recursos.',
  'Você não precisa ter todas as respostas.',
  'Mas você precisa estar disponível.',
  'Precisa depender de Deus.',
  'E precisa dar o primeiro passo.',
]

const lessons = [
  {
    title: 'Deus trabalha primeiro no plantador',
    text: 'Antes de estabelecer uma igreja, Deus estabelece o coração do líder. A plantação revelou minhas limitações, confrontou meu orgulho, expôs minhas inseguranças e me ensinou a depender diariamente da graça de Deus.',
  },
  {
    title: 'Pequenos começos nunca devem ser desprezados',
    text: 'Começamos com apenas nove pessoas. Aos olhos humanos parecia insignificante. Mas o Reino de Deus frequentemente começa como uma pequena semente antes de se tornar uma árvore frondosa. Deus ama começar pequeno para que a glória seja inteiramente dEle.',
  },
  {
    title: 'Plantar igreja exige fé contínua',
    text: 'Houve momentos de incerteza financeira, desgaste emocional e perguntas sem respostas. Muitas vezes senti que estava dando três passos à frente e dois para trás. Mas foi exatamente nesses momentos que aprendi a confiar verdadeiramente no Senhor.',
  },
  {
    title: 'Oração não é apoio — é sobrevivência',
    text: 'Nenhuma estratégia substitui uma vida de oração. A plantação me ensinou que oração não é um complemento do ministério; ela é o próprio oxigênio da obra.',
  },
  {
    title: 'Pessoas são mais importantes do que estruturas',
    text: 'É fácil se preocupar com programas, números e crescimento. Porém, Deus me ensinou que igrejas saudáveis são construídas através de relacionamentos profundos, cuidado pastoral sincero e discipulado intencional.',
  },
  {
    title: 'Nenhum plantador sobrevive sozinho',
    text: 'Plantadores precisam de amigos, mentores, parceiros ministeriais e igrejas que caminhem ao lado deles. O isolamento é perigoso. Deus nunca nos chamou para carregar o peso da missão sozinhos.',
  },
  {
    title: 'A família do plantador precisa ser protegida',
    text: 'O ministério jamais pode custar a saúde da família. Proteger o tempo, o coração e a espiritualidade da esposa e dos filhos é parte essencial da obra — não um acessório dela.',
  },
  {
    title: 'Contextualizar não significa comprometer a verdade',
    text: 'Cada comunidade possui sua cultura, desafios e linguagem. Aprendi que o Evangelho é imutável, mas os métodos podem e devem ser adaptados para alcançar pessoas de maneira relevante e amorosa.',
  },
  {
    title: 'Multiplicação deve fazer parte da visão desde o início',
    text: 'Uma igreja saudável não existe apenas para crescer, mas para gerar outras igrejas, formar novos líderes e expandir o Reino de Deus além de suas próprias paredes.',
  },
  {
    title: 'Nada se compara à alegria de ver vidas transformadas',
    text: 'Todo esforço, lágrima, renúncia e sacrifício encontram sentido quando vemos pessoas sendo alcançadas por Cristo, famílias restauradas e novos discípulos caminhando na fé.',
  },
]

const ponderQuestions1 = [
  'Como o conceito de participar da missão de Deus transforma sua perspectiva sobre plantação de igrejas — deixando de ser apenas o início de uma nova igreja para se tornar a construção de uma comunidade de discípulos?',
  'De que maneiras nós, como igreja ou comunidade, podemos derrubar as divisões entre sagrado e secular, evangelismo e justiça, e outras dicotomias semelhantes?',
  'Como aprendemos a depender dos outros em nossa jornada espiritual, e de que forma isso reflete a missão mais ampla da igreja?',
]

const ponderQuestions2 = [
  'Que emoções você já experimentou ao entrar em um novo papel ou ministério, e como lida com a mistura de entusiasmo e medo?',
  'Como você reage quando se sente além da sua capacidade ou como um "impostor" em sua fé ou liderança?',
  'Como podemos cultivar um equilíbrio saudável entre uma santa insatisfação (desejo de mudança) e contentamento em nossa vida pessoal e comunitária?',
]

const emotions = [
  {
    lead: 'A plantação de igrejas reúne muitas experiências e emoções ao mesmo tempo.',
    body: [
      'Ela é empolgante e assustadora, prazerosa e cansativa, inspiradora e desanimadora, de crescimento e de declínio, relacional e solitária, pioneira e pastoral, significativa e dolorosa — e muito mais.',
      'A plantação de igrejas frequentemente faz você se sentir além da sua capacidade, fora da sua zona de conforto e até mesmo fora de si.',
      'Você tenta muitas coisas que falham. Algumas dão certo. Assume inúmeros riscos. Alguns trazem bons resultados; outros se tornam verdadeiros desastres. Em certos momentos, você se pergunta se perdeu a razão. Ainda assim, continua avançando, agarrado à visão que Deus colocou em seu coração, ao amor pelo povo de Deus e à paixão pela comunidade ao seu redor.',
    ],
  },
  {
    lead: 'A plantação de igrejas faz você se sentir como um impostor.',
    body: [
      'No fundo, você teme que as pessoas descubram que talvez não esteja à altura da tarefa. Que lhe faltam habilidades, visão, preparo, temperamento ou sabedoria. E parece que todos estão prestes a perceber isso. Mas você não é um impostor.',
      'Então, o Espírito Santo continua confrontando essa insegurança. O Espírito o convida a uma nova compreensão de si mesmo, a uma identidade firmada em Cristo. O Espírito continua sussurrando: "Você está disposto a deixar isso e confiar em Mim?"',
    ],
  },
  {
    lead: 'A plantação de igrejas é marcada por uma santa insatisfação.',
    body: [
      'Você não consegue se conformar com o estado atual das coisas e continua clamando a Deus para trazer mudança, esperança e renovação. Essa santa inquietação arde em seu coração e molda muito do que você faz, de como ora, fala e age.',
    ],
  },
  {
    lead: 'A plantação de igrejas é uma experiência e uma história profundamente pessoal.',
    body: [
      'Algumas experiências são comuns a todos os plantadores, mas muitas histórias e vivências são profundamente pessoais e únicas. Todos nós precisamos de espaços seguros para compartilhar essas histórias, encorajar uns aos outros e oferecer apoio mútuo.',
    ],
  },
  {
    lead: 'A plantação de igrejas exige um espírito pioneiro, apostólico e empreendedor.',
    body: [
      'Muitas vezes pensamos nisso como um espírito "independente" ou "solitário". Mas não é assim. Os tipos apostólicos e pioneiros das Escrituras não eram aventureiros isolados. Eles serviam em equipe. Caminhavam em comunidade com apóstolos, profetas, pastores, mestres e evangelistas. Aceitavam prestação de contas e responsabilidade mútua. Assumiam riscos, abriam novos caminhos, iniciavam novas comunidades e se recusavam a viver limitados por pensamentos pequenos.',
      'Os pioneiros não são rebeldes solitários, mas desbravadores — essenciais para o futuro da igreja.',
      'E frequentemente se envolvem também com empreendedorismo social e empresarial. Muitos conciliam a plantação de igrejas com um ministério bivocacional (ou covocacional), levantamento de recursos, criação de projetos, iniciativas missionárias, organizações beneficentes e outras formas de serviço.',
    ],
  },
]

const community = [
  {
    lead: 'A plantação de igrejas precisa de uma comunidade de discípulos, uma comunidade de líderes, uma comunidade de vizinhos e uma comunidade de igrejas.',
    body: [
      'Esses elementos são essenciais para que uma igreja plantada floresça — e cada um deles está profundamente interligado: discípulos, líderes e vizinhos.',
      'As igrejas plantadas precisam de uma comunidade de discípulos que celebre a Ceia do Senhor, ore, jejue, leia as Escrituras, compartilhe refeições, divida recursos materiais e sirva e ame uns aos outros e também aos seus vizinhos.',
      'As igrejas plantadas precisam de uma comunidade de líderes que nos liberte da ideia de que uma ou duas pessoas conseguem construir uma igreja sozinhas. Essa comunidade de líderes expressa os dons ministeriais quíntuplos: pioneiros, profetas, pastores, mestres e evangelistas.',
      'As igrejas plantadas precisam de uma comunidade de vizinhos que nos lembre que Deus já estava agindo naquela cidade, naquele bairro muito antes de nossa chegada e continuará agindo muito depois da nossa partida. Nossos vizinhos nos ajudam a perceber o Reino de Deus presente entre nós. Junto deles descobrimos a presença de Deus, a reconciliação, a esperança, o amor e a restauração.',
      'As igrejas plantadas precisam de uma comunidade de igrejas que as conecte ao Corpo de Cristo mais amplo. Essa rede de igrejas e líderes deve apoiá-las, caminhar ao lado delas, encorajá-las, corrigi-las quando necessário e ajudá-las a enxergar seu papel dentro do quadro maior do Reino de Deus.',
    ],
  },
  {
    lead: 'A plantação de igrejas é um esporte coletivo, não individual.',
    body: [
      'Talvez "esporte" não seja a melhor metáfora, mas o ponto é claro: pessoas carismáticas, dinâmicas, talentosas, individualistas, egoístas, narcisistas ou extraordinariamente dotadas não são necessariamente grandes plantadores de igrejas.',
      'Grandes plantadores demonstram uma humildade confiante. Eles entendem que a saúde, a vitalidade e a missão da igreja dependem de trabalho em equipe, inclusão, comunidade, humildade, relacionamentos e, acima de tudo, amor — tanto dentro da igreja quanto em direção aos seus vizinhos.',
    ],
  },
  {
    lead: 'A plantação de igrejas precisa de grandes doses de leveza e descanso.',
    body: [
      'Depois de algum tempo, fiquei cansado e sobrecarregado. Esqueci como descansar e desfrutar da vida e, com toda sinceridade, quase destruí minha própria família. Concluí que um ministério sustentável a longo prazo exige momentos intencionais de descanso e alegria.',
      'Para mim, isso significa passar dias na praia, ir à academia, praticar um esporte ou hobby, participar de grupos comunitários, caminhar com meu cachorro, ler romances e ir ao cinema com amigos. Toda essa conversa sobre "autocuidado" pode parecer cansativa às vezes — mas eu escolho valorizar momentos saudáveis de descanso e renovação.',
    ],
  },
  {
    lead: 'A plantação de igrejas revela o poder do perdão.',
    body: [
      'Cometi muitos erros. Feri pessoas, quebrei promessas, agi sem integridade em alguns momentos e demonstrei falhas de liderança.',
      'Mas também fiz muitas coisas certas. Ajudei pessoas, mantive compromissos, busquei a ajuda de Deus e procurei refletir a verdadeira natureza da liderança cristã semelhante à de Cristo.',
      'E, em meio a tudo isso, aprendi o poder do perdão. Vi a profundidade da graça, da paciência, do amor e da esperança das pessoas.',
    ],
  },
]

const ponderQuestions3 = [
  'Como é um equilíbrio saudável entre liderança e discipulado em uma plantação de igreja, e como podemos cultivar esse equilíbrio?',
  'De que maneira o envolvimento com os amigos, vizinhos molda a missão de uma igreja plantada? Como aprendemos a perceber a obra de Deus já presente em nossas comunidades?',
  'De que formas o descanso, a alegria e momentos de recreação podem se tornar essenciais para sustentar um ministério e uma liderança de longo prazo?',
]

const nouwenQuote = `Nossa identidade, nosso senso de quem somos, está em jogo. A secularização é uma maneira de viver dependente das respostas do ambiente ao nosso redor. O eu secular ou falso eu é aquele fabricado pelas compulsões sociais. "Compulsivo" é, de fato, o melhor adjetivo para o falso eu. Ele aponta para a necessidade constante e crescente de afirmação. Quem sou eu? Sou aquele que é apreciado, elogiado, admirado, rejeitado, odiado ou desprezado. Seja eu pianista, empresário ou ministro, o que importa é como sou percebido pelo meu mundo. Se estar ocupado é algo valorizado, então preciso estar ocupado. Se ter dinheiro é sinal de liberdade, então preciso buscar mais dinheiro. Se conhecer muitas pessoas prova minha importância, então preciso fazer os contatos necessários. A compulsão se manifesta no medo oculto do fracasso e na necessidade contínua de evitar isso acumulando sempre mais — mais trabalho, mais dinheiro, mais amizades.`

const practices = [
  {
    lead: 'A plantação de igrejas envolve um engajamento reflexivo.',
    body: [
      'Na plantação de igrejas, você descobre o quanto ação, comunidade, teologia e missão estão profundamente interligadas. Cada uma fortalece e depende da outra. Ação e reflexão caminham juntas, e aqueles que não procuram equilibrar essas duas dimensões rapidamente enfrentam dificuldades.',
    ],
  },
  {
    lead: 'A plantação de igrejas é aprender a orar como nunca antes.',
    body: [
      'Você se sente tão além da sua capacidade, enfrenta tantas necessidades e depende tanto de Deus que começa a orar e jejuar intensamente. Passa a compreender, de maneira prática e real, que é totalmente dependente de Deus e da oração.',
    ],
  },
  {
    lead: 'A plantação de igrejas depende da hospitalidade.',
    body: [
      'Parece que as pessoas passam a entrar em todas as áreas da sua vida. Você aprende a desenvolver um compromisso mais profundo com acolhimento e hospitalidade — sempre com limites saudáveis — ou acabará enfrentando sérios problemas. Descobre que praticamente tudo depende da hospitalidade: comunidade, adoração, missão, discipulado, liderança, testemunho e muito mais.',
      'E essa hospitalidade não é de mão única. Pessoas da igreja e da vizinhança também acolhem você e sua família de maneiras humildes e surpreendentes. Assim, você descobre a centralidade da hospitalidade para a vida, a fé, a comunhão e o testemunho cristão.',
    ],
  },
  {
    lead: 'A plantação de igrejas exige uma vida espiritual contemplativa.',
    body: [
      'Recentemente li o livro The Way of the Heart: Desert Spirituality and Contemporary Ministry, de Henri Nouwen. Em seu estilo característico, Nouwen mostra como três elementos da espiritualidade do deserto — solitude, silêncio e oração — podem renovar nossa vida espiritual e servir como antídotos para os problemas modernos da correria, do excesso de ruído e da ausência de oração.',
      'O Espírito Santo confronta nossos desejos e compulsões à medida que encontramos Jesus na solitude, no silêncio e na oração. Em uma era secularizada, superficial, agitada e egoísta, nossas compulsões ameaçam nos afastar de Deus e corroer nossa identidade, humildade e capacidade de demonstrar generosidade, compaixão e amor.',
      'Os pais do deserto nos inspiram a resistir às tendências da nossa época, em vez de simplesmente seguir o fluxo passivamente, refletindo as enfermidades e disfunções do coração que consomem a sociedade moderna.',
      'Como escreveu Nouwen:',
      { quote: nouwenQuote, author: 'Henri Nouwen' },
      'Deus realiza uma obra interior transformando nossos desejos desordenados, neuroses, narcisismo e compulsões, conduzindo-nos a um ministério mais humilde e contemplativo.',
    ],
  },
  {
    lead: 'A plantação de igrejas precisa de uma comunidade de líderes e discípulos.',
    body: [
      'Para que uma igreja plantada floresça, ela necessita de três comunidades interligadas: discípulos, líderes e vizinhos.',
      'Uma plantação saudável precisa de uma comunidade de discípulos comprometidos em viver a fé em conjunto. Isso inclui celebrar a Ceia do Senhor, orar, jejuar, estudar as Escrituras, compartilhar refeições, dividir recursos e servir uns aos outros e aos vizinhos com amor.',
      'Igualmente importante é uma comunidade de líderes que compreenda que construir uma igreja não é responsabilidade de apenas uma ou duas pessoas. Esses líderes expressam os dons ministeriais quíntuplos — pioneiros, profetas, pastores, mestres e evangelistas — trabalhando juntos para guiar e fortalecer a igreja.',
      'As igrejas plantadas também precisam de uma comunidade de vizinhos que nos lembre que Deus já estava operando naquela região muito antes da nossa chegada e continuará operando muito depois da nossa partida. Ao nos relacionarmos com nossos vizinhos, desenvolvemos uma percepção maior da presença de Deus e da obra contínua de reconciliação, esperança, amor e restauração na comunidade.',
      'Além disso, uma plantação de igreja necessita do apoio de uma comunidade mais ampla de igrejas. Essas igrejas conectam a nova plantação ao Corpo de Cristo maior, oferecendo encorajamento, orientação e prestação de contas, além de ajudá-la a encontrar seu lugar dentro da missão maior do Reino de Deus.',
    ],
  },
]

const ponderQuestions4 = [
  'Como a hospitalidade reflete o coração da missão de Jesus, e de que maneira podemos praticá-la com limites saudáveis em nossas comunidades?',
  'Reflita sobre o papel da oração e do jejum em uma relação profundamente dependente de Deus. Como essas práticas podem ser revitalizadas em sua vida pessoal ou em seu contexto comunitário?',
  'Como a solitude, o silêncio e a contemplação podem transformar a liderança na plantação de igrejas ou em outras áreas do ministério?',
]

export default function ChurchPlanting() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />

        {/* Foto do pastor — lado direito, igual à home */}
        <div className={styles.photoWrapper}>
          <img src={pastorPhoto} alt="Pastor Nélio DaSilva" className={styles.photo} />
          <div className={styles.overlayLeft} />
          <div className={styles.overlayBottom} />
          <div className={styles.overlayTop} />
        </div>

        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Plantação de Igrejas</span>
          <h1 className={styles.heroTitle}>
            Plantar Igrejas<br />
            <em>Mudou a Minha Vida</em>
          </h1>
          <p className={styles.heroSub}>
            Uma Jornada de Fé, Chamado e Obediência
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── INTRO ── */}
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.sectionTitle}>Uma Santa Convocação aos Plantadores de Igrejas</h2>
          <p className={styles.lead}>
            Em 1986, no vigor dos meus 35 anos, ouvi claramente o chamado de Deus
            para plantar uma igreja. Não havia garantias humanas. Não havia
            estruturas prontas. Não havia multidões aguardando. Havia apenas um
            chamado ardendo no coração, uma convicção profunda da direção de Deus
            e uma disposição sincera de obedecer.
          </p>
          <p className={styles.body}>
            Começamos pequenos. Éramos apenas nove pessoas — eu, minha esposa e
            nossos três filhos ainda crianças, juntamente com alguns irmãos que
            abraçaram conosco aquele sonho nascido no coração de Deus. No dia{' '}
            <strong>21 de setembro de 1986</strong> realizamos o primeiro culto
            daquela que se tornaria a primeira igreja presbiteriana de língua
            portuguesa nos Estados Unidos.
          </p>
          <p className={styles.body}>
            O que vimos depois pertence somente à graça de Deus.
          </p>
          <p className={styles.body}>
            Aquela pequena semente se transformou em uma igreja viva, missionária
            e multiplicadora. Uma igreja que se tornou mãe de muitas outras igrejas.
            Uma igreja que alcançou vidas, restaurou famílias, levantou líderes e
            proclamou o Evangelho além das fronteiras que um dia parecíamos
            incapazes de imaginar.
          </p>
          <p className={styles.body}>
            Mas a maior transformação não aconteceu apenas ao redor de nós.{' '}
            <strong>Ela aconteceu dentro de nós.</strong>
          </p>
          <p className={styles.body}>
            Plantação de igrejas não é apenas um projeto ministerial. É uma escola
            profunda de fé, dependência, perseverança e quebrantamento. É um caminho
            onde Deus trabalha no plantador antes de trabalhar através dele. Quem
            planta igrejas aprende a confiar quando os recursos são pequenos, a
            perseverar quando os resultados parecem lentos e a caminhar pela fé
            quando não há outra segurança além da presença de Deus.
          </p>
          <p className={styles.body}>
            Por isso escrevo estas palavras como uma <strong>santa convocação</strong>.
          </p>
          <p className={styles.body}>
            Talvez exista em seu coração um chamado que você vem adiando. Talvez
            Deus já tenha colocado dentro de você uma visão, um peso missionário,
            um amor por almas e um desejo santo de ver o Reino avançar. Talvez o
            que esteja faltando não seja mais confirmação, mas apenas coragem para
            dar o primeiro passo.
          </p>
          <p className={styles.body}>
            <strong>Se este for o seu momento, não ignore a voz de Deus.</strong>
          </p>
          <p className={styles.body}>
            O mundo continua cheio de cidades sem testemunho vivo, bairros sem
            esperança, famílias sem direção espiritual e multidões que jamais
            ouvirão o Evangelho a menos que alguém decida obedecer ao chamado.
          </p>
          <p className={styles.body}>
            A plantação de igrejas continua sendo uma das experiências mais
            emocionantes, desafiadoras e transformadoras do ministério cristão.
            Não porque seja fácil, mas porque nela temos o privilégio de cooperar
            diretamente com aquilo que está no coração de Cristo: buscar e salvar
            os perdidos e estabelecer comunidades vivas do Reino de Deus.
          </p>
          <p className={styles.body}>
            Minha oração é que este portal seja um lugar de encorajamento, direção
            e renovação para homens e mulheres chamados por Deus. Que aqui você
            encontre não apenas princípios ministeriais, mas também coragem
            espiritual para avançar.
          </p>
          <p className={styles.body}>
            O Reino de Deus ainda está se expandindo.<br />
            O Evangelho ainda transforma vidas.<br />
            E Deus ainda continua chamando plantadores.
          </p>
          <p className={styles.body}>
            <em>Talvez o próximo seja você.</em>
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>

        {/* ── PULL QUOTES ── */}
        <div className={styles.pullQuotes}>
          {keyPhrases.map((phrase, i) => (
            <div key={i} className={styles.pullQuote}>
              <span className={styles.pullLine} aria-hidden />
              <p>{phrase}</p>
            </div>
          ))}
        </div>

        {/* ── TERRITORY BLOCK ── */}
        <div className={styles.territoryBlock}>
          <h2 className={styles.sectionTitle}>Entrar em Território Espiritual</h2>
          <p className={styles.body}>
            O que eu não sabia, mas imediatamente ganhei essa convicção:{' '}
            <strong>Plantar igrejas é entrar fortemente em um efervescente território espiritual.</strong>
          </p>
          <p className={styles.body}>
            É lidar com oposição, escassez, solidão e, incontáveis vezes, com
            incompreensão. Mas também é testemunhar milagres silenciosos, vidas
            transformadas e comunidades sendo alcançadas pelo maravilhoso poder
            do Evangelho.
          </p>
          <blockquote className={styles.blockquote}>
            "É ver uma sala pequena se tornar um lugar de adoração. É discipular
            pessoas do ponto zero. É chorar, orar, persistir… e ver Deus fazer
            aquilo que só Ele pode fazer."
          </blockquote>
        </div>

        {/* ── 4 PILLARS ── */}
        <div className={styles.pillarsSection}>
          <h2 className={styles.sectionTitle}>O Que Aprendi ao Longo da Caminhada</h2>
          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <div key={i} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ENCOURAGEMENT BLOCK ── */}
        <div className={styles.encourageBlock}>
          <h2 className={styles.sectionTitle}>Se Deus Está Chamando Você…</h2>
          <p className={styles.body}>
            O Senhor Jesus, o Senhor da Igreja, continua procurando por aqueles
            dispostos a dizer: <em>"Eis-me aqui, envia-me a mim."</em>
          </p>
          <p className={styles.body}>
            Se você sente que o Senhor o está chamando para plantar uma igreja,
            deixe-me encorajá-lo:
          </p>
          <ul className={styles.encourageList}>
            {encouragements.map((item, i) => (
              <li
                key={i}
                className={`${styles.encourageItem} ${i >= 3 ? styles.encouragePositive : ''}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── LESSONS BLOCK ── */}
        <div className={styles.lessonsBlock}>
          <h2 className={styles.sectionTitle}>Lições que Aprendi no Processo de Plantação de Igrejas</h2>
          <p className={styles.body}>
            Plantar uma igreja foi muito mais do que iniciar uma congregação. Foi
            uma jornada de transformação espiritual, dependência de Deus e
            amadurecimento ministerial. Ao longo dessa caminhada, aprendi lições
            que nenhum seminário poderia ensinar completamente e que somente o
            campo missionário é capaz de gravar profundamente na alma de um
            plantador.
          </p>
          <ol className={styles.lessonsList}>
            {lessons.map((l, i) => (
              <li key={i} className={styles.lessonItem}>
                <span className={styles.lessonNum}>{i + 1}</span>
                <h3 className={styles.lessonTitle}>{l.title}</h3>
                <p className={styles.lessonText}>{l.text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.body} style={{ marginTop: '2rem' }}>
            Plantar igrejas continua sendo uma das experiências mais desafiadoras
            e extraordinárias que alguém pode viver no Reino de Deus. Não porque
            o caminho seja fácil, mas porque nele temos o privilégio de participar
            daquilo que está no coração de Cristo: buscar os perdidos, fazer
            discípulos e estabelecer comunidades vivas do Evangelho.
          </p>
          <p className={styles.body}>
            Minha oração é que estas lições encorajem uma nova geração de
            plantadores a obedecer ao chamado de Deus com coragem, humildade e
            perseverança.
          </p>
        </div>

        {/* ── PONDER — PARTE 1 ── */}
        <div className={styles.ponderBlock}>
          <h2 className={styles.sectionTitle}>Conceitos para Ponderar</h2>
          <ol className={styles.ponderList}>
            {ponderQuestions1.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </div>

        {/* ── EMOTIONS BLOCK ── */}
        <div className={styles.lessonsBlock}>
          <h2 className={styles.sectionTitle}>A Experiência e as Emoções da Plantação de Igrejas</h2>
          {emotions.map((s, i) => (
            <div key={i} style={{ marginBottom: '1.75rem' }}>
              <p className={styles.lessonTitle} style={{ marginBottom: '0.75rem' }}>{s.lead}</p>
              {s.body.map((p, j) => (
                <p key={j} className={styles.body}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* ── PONDER — PARTE 2 ── */}
        <div className={styles.ponderBlock}>
          <h2 className={styles.sectionTitle}>Conceitos para Ponderar — Parte 2</h2>
          <ol className={styles.ponderList}>
            {ponderQuestions2.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </div>

        {/* ── COMMUNITY BLOCK ── */}
        <div className={styles.lessonsBlock}>
          <h2 className={styles.sectionTitle}>A Importância da Comunidade</h2>
          {community.map((s, i) => (
            <div key={i} style={{ marginBottom: '1.75rem' }}>
              <p className={styles.lessonTitle} style={{ marginBottom: '0.75rem' }}>{s.lead}</p>
              {s.body.map((p, j) => (
                <p key={j} className={styles.body}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* ── PONDER — PARTE 3 ── */}
        <div className={styles.ponderBlock}>
          <h2 className={styles.sectionTitle}>Conceitos para Ponderar — Parte 3</h2>
          <ol className={styles.ponderList}>
            {ponderQuestions3.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </div>

        {/* ── PRACTICES BLOCK ── */}
        <div className={styles.lessonsBlock}>
          <h2 className={styles.sectionTitle}>Práticas Espirituais e Liderança</h2>
          {practices.map((s, i) => (
            <div key={i} style={{ marginBottom: '1.75rem' }}>
              <p className={styles.lessonTitle} style={{ marginBottom: '0.75rem' }}>{s.lead}</p>
              {s.body.map((p, j) => (
                typeof p === 'string'
                  ? <p key={j} className={styles.body}>{p}</p>
                  : (
                    <blockquote key={j} className={styles.blockquote}>
                      {p.quote}
                      {p.author && <footer style={{ marginTop: '0.75rem', fontSize: '0.9rem', opacity: 0.75 }}>— {p.author}</footer>}
                    </blockquote>
                  )
              ))}
            </div>
          ))}
        </div>

        {/* ── PONDER — PARTE 4 ── */}
        <div className={styles.ponderBlock}>
          <h2 className={styles.sectionTitle}>Conceitos para Ponderar — Parte 4</h2>
          <ol className={styles.ponderList}>
            {ponderQuestions4.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
        </div>

        {/* ── PORTAL BLOCK ── */}
        <div className={styles.portalBlock}>
          <p className={styles.body}>
            A plantação de igrejas continua sendo uma das ferramentas mais poderosas
            para a expansão do Reino de Deus. Ainda hoje, existem cidades, comunidades
            e povos esperando por uma igreja viva, relevante e cheia da vitalidade
            insubstituível da ação do Espírito.
          </p>
          <p className={styles.body}>
            O <strong>Portal do Encorajamento</strong> nasce com esse propósito:
            caminhar ao seu lado, compartilhar princípios, erros, aprendizados e
            estratégias que foram refinadas ao longo de décadas de ministério.
          </p>
          <p className={styles.body}>
            Se Deus está colocando esse desejo em seu coração, não ignore.
            Pode ser o início de algo muito maior do que você possa imaginar.
          </p>
        </div>

        {/* ── CLOSING STATEMENT ── */}
        <div className={styles.closingBlock}>
          <p className={styles.closingStrong}>
            Plantar igrejas é difícil — mas é glorioso.
          </p>
          <p className={styles.closingText}>
            E não há nada mais extraordinário do que ser instrumento nas mãos de
            Deus para levantar uma comunidade que exalta o nome de Cristo e
            espalha o Seu perfume e Glória!
          </p>
          <p className={styles.closingText}>
            Vamos juntos. Conte conosco aqui no Portal do Encorajamento. Não temos
            todas as respostas. Mas sabemos Quem as tem — e Ele está pronto para
            nos estender a Mão ao assumirmos o compromisso de depender única e
            tão somente da Sua imensa Graça.
          </p>
          <div className={styles.seara}>
            <span className={styles.searaLine} aria-hidden />
            <p>A Seara é imensa e a Colheita está pronta para a Ceifa!</p>
            <span className={styles.searaLine} aria-hidden />
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.ctaBlock}>
          <h2 className={styles.ctaTitle}>Deus Está Chamando Você?</h2>
          <p className={styles.ctaDesc}>
            Se esse chamado está crescendo no seu coração, não caminhe sozinho.
            O Portal do Encorajamento está aqui para apoiá-lo.
          </p>
          <div className={styles.ctaBtns}>
            <a href="#contato" className={styles.btnPrimary}>Fale com o Pastor Nélio</a>
            <a href="#inicio" className={styles.btnSecondary}>Conheça o Ministério ✦</a>
          </div>
        </div>

      </div>
    </section>
  )
}
