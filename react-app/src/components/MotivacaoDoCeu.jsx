import { useEffect, useState } from 'react'
import styles from './MotivacaoDoCeu.module.css'

// ── MENSAGENS DA SÉRIE ──
const mensagens = [
  {
    id: 1,
    numero: '01',
    titulo: 'Chamados e Guiados por um Propósito Eterno',
    versiculo: '"Porque somos feitura dele, criados em Cristo Jesus para boas obras, as quais Deus de antemão preparou para que andássemos nelas." — Efésios 2:10',
    temas: ['Propósito', 'Identidade', 'Chamado'],
    corpo: [
      'Existe algo dentro da alma humana que não se satisfaz com o vazio. Nem com distrações. Nem com fama passageira. Nem com conquistas sem significado. Porque o coração foi criado para um propósito eterno.',
      'O mundo tenta oferecer substitutos: sucesso sem sentido, prazer sem profundidade, ocupação sem direção. Mas nada disso preenche o lugar que só o propósito de Deus pode ocupar.',
      'Em Cristo, propósito não é invenção humana — é revelação divina. Deus não apenas salva você. Ele também direciona você.',
      '"Antes que te formasse no ventre, eu te conheci…" — Jeremias 1:5',
      'Isso significa que sua existência não é aleatória. Você não está aqui por acaso. Há uma intenção celestial por trás da sua vida. Mas o propósito de Deus não é encontrado na superficialidade da vida. Ele é discernido na profundidade da comunhão com o Senhor.',
      'Muitas vozes tentarão definir quem você deve ser. O mundo tentará moldar sua identidade através de padrões passageiros. Mas o Espírito Santo te chama para uma vida de discernimento: aprender a distinguir o eterno do temporário, o verdadeiro do ilusório, o essencial do distraído.',
      'O propósito se revela quando o coração começa a se desapegar do que é vazio e se apegar ao que é eterno. Foi assim que Jesus viveu: não guiado pela aprovação das multidões, não guiado pela glória momentânea, mas plenamente alinhado à vontade do Pai.',
      '"Eu desci do céu não para fazer a minha vontade, mas a vontade daquele que me enviou." — João 6:38',
      'Há algo poderoso quando uma pessoa encontra o propósito de Deus: sua vida ganha direção, sua alma ganha firmeza, seus passos ganham significado. Não se trata apenas do que você faz, mas de quem você se torna em Deus.',
      'O propósito verdadeiro sempre produz fruto eterno: amor que transforma, sabedoria que edifica, serviço que restaura, e uma vida que glorifica ao Senhor.',
      'Talvez você tenha procurado sentido em muitas direções. Mas o chamado de Deus continua o mesmo: voltar o coração para o que é real, profundo e eterno.',
      'Quando você se conecta com o propósito de Deus, a vida deixa de ser dispersa e passa a ser direcionada. E aquilo que antes era confusão se torna clareza. Aquilo que antes era vazio se torna plenitude. Aquilo que antes era apenas existência se torna missão.',
    ],
    gratuito: true,
  },
  {
    id: 2,
    numero: '02',
    titulo: 'Firmes em Deus em Meio às Mudanças',
    versiculo: '"Ora, o mundo passa, bem como a sua cobiça; aquele, porém, que faz a vontade de Deus permanece eternamente." — I João 2:17',
    temas: ['Fé', 'Perseverança', 'Confiança'],
    corpo: [
      'Tudo ao nosso redor muda constantemente. Estações mudam. Pessoas mudam. Planos mudam. Caminhos se reorganizam sem aviso. E, diante disso, o coração humano pode facilmente se abalar — tentando se apegar ao que já não permanece.',
      'Mas há uma verdade espiritual que sustenta a alma: Deus não muda.',
      '"Jesus Cristo é o mesmo ontem, hoje e eternamente." — Hebreus 13:8',
      'É por isso que, mesmo em meio às mudanças inevitáveis da vida, existe estabilidade para aqueles que estão firmados no Senhor. Adaptar-se, na perspectiva do Reino, não é perder identidade. É manter-se enraizado em Deus enquanto os cenários ao redor se transformam.',
      'Há quem veja mudanças como ameaça. Outros como perda. Mas o Espírito Santo ensina o genuíno cristão a enxergar mudança como terreno de oportunidade.',
      'José foi levado ao Egito. Moisés precisou mudar de identidade social. Paulo mudou de perseguidor para apóstolo. E em cada transição, Deus estava conduzindo propósito. Nada foge ao controle do Senhor.',
      '"Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus…" — Romanos 8:28',
      'O problema não é a mudança em si. O problema é quando o coração perde a direção espiritual diante dela. Você pode reagir às mudanças com medo, paralisia ou murmuração. Ou pode reagir com fé, discernimento e confiança.',
      'Aquele que é guiado pelo Espírito não é escravo das circunstâncias — ele aprende a caminhar nelas. Existe uma maturidade espiritual que se desenvolve justamente nos momentos em que nada permanece igual.',
      'Deus muitas vezes usa transições para alinhar destinos. O que parece instabilidade pode ser, na verdade, preparação divina. Talvez o que mudou na sua vida não foi para te destruir, mas para te reposicionar.',
      'O céu continua conduzindo sua história. E o Senhor ainda está formando em você uma fé que não depende de estabilidade externa, mas de confiança absoluta na Sua presença.',
      'Adaptar-se em Deus é continuar obedecendo mesmo quando o cenário muda. É continuar confiando mesmo quando o entendimento é limitado. É continuar avançando mesmo quando o caminho ainda não está totalmente visível. Porque quem está em Cristo não é guiado pelo caos — é guiado pelo Espírito.',
    ],
    gratuito: true,
  },
  {
    id: 3,
    numero: '03',
    titulo: 'Levanta-te e Vai: Fé Que Se Move',
    versiculo: '"Sejam praticantes da palavra, e não apenas ouvintes…" — Tiago 1:22',
    temas: ['Fé Prática', 'Obediência', 'Ação'],
    corpo: [
      'Existe uma fé que apenas emociona. E existe uma fé que se move.',
      'Muitas pessoas passam a vida desejando mudanças, falando sobre sonhos, planejando novos começos… mas nunca se levantam para agir. O Reino de Deus não avança através da passividade. Ele avança através de homens e mulheres que obedecem.',
      'A vida espiritual perde força quando fica presa apenas em palavras, intenções e emoções momentâneas. Deus não chamou você apenas para admirar possibilidades. Chamou você para caminhar em propósito.',
      '"Levanta-te, toma o teu leito e anda." — João 5:8',
      'O paralítico só experimentou o milagre quando decidiu se mover pela fé. Há momentos em que o Senhor libera direção. Mas cabe a nós sair da estagnação.',
      'Levante-se da acomodação. Levante-se da procrastinação espiritual. Levante-se da vida superficial. Levante-se do medo que paralisa seu chamado.',
      'Existe uma força que só é liberada quando você começa a caminhar. Muitos querem viver coisas profundas com Deus sem enfrentar desconfortos, sem renúncia e sem entrega verdadeira. Mas maturidade espiritual nasce no movimento da obediência.',
      'É no caminho que Deus fortalece você. É no processo que sua fé amadurece. É enfrentando terrenos difíceis que seu espírito aprende dependência do Senhor.',
      'A vida não foi criada para ser apenas consumida em distrações, entretenimentos vazios e conforto excessivo. Você foi criado para participar ativamente da obra de Deus na terra.',
      'Há pessoas para amar. Há vidas para servir. Há feridos para acolher. Há propósitos esperando sua coragem. Cada dia carrega oportunidades divinas. O céu está procurando pessoas disponíveis — não perfeitas.',
      'Pessoas dispostas a sair da zona confortável e viver uma fé prática, viva e frutífera. Talvez você esteja esperando sentir-se totalmente pronto para começar. Mas muitas vezes Deus só revela a próxima direção depois do primeiro passo de obediência.',
      'Pedro só viveu o impossível quando saiu do barco. Existe potencial dentro de você que ainda não foi ativado porque está esperando movimento.',
      'Não enterre os dons que Deus confiou a você. Não desperdice a vida apenas observando o tempo passar. Você nasceu com propósito. Foi alcançado pela graça para produzir frutos eternos. Então levante-se. Ore. Sirva. Construa. Perdoe. Avance. Ame. Obedeça. E faça todo o bem que puder enquanto ainda há tempo.',
    ],
    gratuito: true,
  },
  {
    id: 4,
    numero: '04',
    titulo: 'Chamados para Manifestar a Beleza do Reino',
    versiculo: '"DEUS fez tudo formoso no seu devido tempo…" — Eclesiastes 3:11',
    temas: ['Reino de Deus', 'Serviço', 'Excelência'],
    corpo: [
      'Deus nunca teve prazer no caos espiritual. Desde o princípio, o Senhor se revela através da ordem, da beleza, da excelência e da vida. A criação inteira carrega marcas da glória divina. O céu anuncia Sua majestade. A terra revela Sua criatividade. E o homem foi criado para refletir essa beleza espiritual ao mundo.',
      'Mas existe uma diferença entre aqueles que apenas consomem a vida e aqueles que investem nela. Há pessoas que espalham luz, cura, esperança, generosidade e paz por onde passam. E há outras que alimentam ambientes de divisão, dureza, egoísmo e destruição.',
      'O Reino de Deus nos chama para construir, não para deteriorar. Toda vez que você escolhe amar, servir, cuidar, encorajar, restaurar e agir com excelência, você está manifestando a cultura do céu na terra.',
      '"Assim resplandeça a vossa luz diante dos homens…" — Mateus 5:16',
      'Esforço, amor, cuidado e compaixão exigem entrega. Mas não são pesos — são sementes eternas. Existe beleza espiritual em uma vida rendida a Deus.',
      'Beleza em um coração humilde. Beleza em alguém que perdoa. Beleza em quem permanece íntegro em um mundo corrompido. Beleza em quem escolhe gerar vida em vez de competir por migalhas emocionais e espirituais.',
      'O mundo vive brigando por restos de reconhecimento, poder e validação. Mas Deus está levantando filhos maduros para preparar uma mesa abundante de graça, amor e esperança.',
      'Uma mesa onde vidas são restauradas. Onde feridos encontram cura. Onde cansados encontram descanso. Onde a presença de Deus transforma ambientes.',
      'Você foi chamado para ser cooperador dessa obra. A beleza do Reino não é superficial. Ela nasce de corações transformados. Quando Deus governa alguém, essa pessoa começa a carregar: excelência nas atitudes, pureza nas intenções, sabedoria nas palavras, amor nas relações, e luz nas obras.',
      'A vida floresce onde o Espírito de Deus encontra disponibilidade. Talvez você pense que possui pouco: pouco recurso, pouca força, pouca influência. Mas nas mãos de Deus, até o pouco pode se tornar um banquete para multidões.',
      'Jesus pegou poucos pães e alimentou milhares. O céu ainda multiplica aquilo que é entregue com amor, fé e obediência.',
      'Não viva apenas reagindo à escuridão deste mundo. Torne-se alguém que manifesta a beleza do Reino nele. Porque homens e mulheres cheios da presença de Deus transformam ambientes inteiros.',
    ],
    gratuito: false,
  },
  {
    id: 5,
    numero: '05',
    titulo: 'A Graça de Deus para o Agora',
    versiculo: '"A minha graça te basta, porque o poder se aperfeiçoa na fraqueza." — 2 Coríntios 12:9',
    temas: ['Graça', 'Presente', 'Renovação'],
    corpo: [
      'Uma das maiores estratégias do inimigo é fazer você acreditar que o agora nunca é suficiente. Ele tenta convencer você de que falta algo: mais força, mais recursos, mais oportunidades, mais reconhecimento, mais capacidade.',
      'Então a alma passa a viver aprisionada entre arrependimentos do passado e ansiedade pelo futuro, enquanto perde o mover de Deus no presente.',
      'Mas o Senhor está dizendo hoje: "Minha graça é suficiente para você neste momento." O agora carrega a provisão necessária para o propósito de hoje.',
      'Talvez você olhe para sua vida e veja limitações. Talvez existam dores que você não consegue mudar. Talvez certos cenários estejam muito diferentes daquilo que você imaginou. Mas Deus não trabalha apenas através de cenários perfeitos. Ele trabalha através de corações rendidos.',
      'Moisés achava que lhe faltava capacidade. Gideão achava que lhe faltava importância. Jeremias achava que lhe faltava maturidade. Mas Deus nunca precisou de perfeição para começar uma obra — Ele procura disponibilidade.',
      '"Não diga: Sou apenas um menino… porque a todos a quem eu te enviar irás." — Jeremias 1:7',
      'Existe poder espiritual em aceitar o tempo presente sem murmuração e sem fuga. Aceitar o agora não significa conformar-se com menos. Significa reconhecer que Deus já está presente neste exato momento.',
      'Há pessoas esperando uma fase ideal para obedecer, amar, servir, crescer e viver o propósito. Mas o Reino de Deus acontece no hoje.',
      'É hoje que você ora. É hoje que você perdoa. É hoje que você recomeça. É hoje que você se posiciona em fé.',
      'Enquanto você lamenta aquilo que não pode mudar, pode acabar negligenciando aquilo que ainda pode transformar. O agora é terreno fértil para milagres.',
      'Tudo o que você viveu, aprendeu, suportou e carregou até aqui pode ser usado por Deus para impulsionar você adiante. Você não chegou até este momento por acaso. Existe graça disponível para esta estação.',
      'O céu já liberou força para o dia de hoje. Por isso, não desperdice sua energia desejando outra realidade. Consagre a Deus a realidade que você possui agora — e permita que Ele transforme o comum em extraordinário.',
      'Porque quando Deus entra no presente de alguém, o impossível começa rapidamente a perder força.',
    ],
    gratuito: false,
  },
]

// ── MODAL DA MENSAGEM ──
function MensagemModal({ mensagem, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button className={styles.modalClose} onClick={onClose} aria-label="Fechar">✕</button>

        <div className={styles.modalHeader}>
          <div className={styles.modalHeaderTop}>
            <span className={styles.modalSerie}>✦ Motivação do Céu</span>
            {mensagem.gratuito && (
              <span className={styles.gratuiBadge}>✦ Gratuito</span>
            )}
          </div>
          <div className={styles.modalNumero}>{mensagem.numero}</div>
          <h2 className={styles.modalTitle} id="modal-title">{mensagem.titulo}</h2>
        </div>

        <div className={styles.modalVersiculo}>
          <p>{mensagem.versiculo}</p>
        </div>

        <div className={styles.modalBody}>
          {mensagem.corpo.map((para, i) => {
            const isVerse = para.startsWith('"') && para.includes('—')
            return isVerse
              ? <blockquote key={i} className={styles.verseInline}>{para}</blockquote>
              : <p key={i}>{para}</p>
          })}
        </div>

        <div className={styles.modalFooter}>
          <p>Que esta mensagem fortaleça sua fé e renove sua visão.</p>
          <button onClick={onClose} className={styles.btnClose}>
            Fechar mensagem
          </button>
        </div>
      </div>
    </div>
  )
}

// ── COMPONENTE PRINCIPAL ──
export default function MotivacaoDoCeu() {
  const [openMensagem, setOpenMensagem] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const mensagemAberta = mensagens.find(m => m.id === openMensagem)

  return (
    <section className={styles.page}>

      {/* ── MODAL ── */}
      {mensagemAberta && (
        <MensagemModal mensagem={mensagemAberta} onClose={() => setOpenMensagem(null)} />
      )}

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroParticles} aria-hidden>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--i': i }} />
          ))}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Série de Mensagens</span>
          <h1 className={styles.heroTitle}>
            Motivação<br />
            <em>do Céu</em>
          </h1>
          <p className={styles.heroSub}>
            Mensagens para fortalecer a alma e alinhar o coração com o Eterno.
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
          <div className={styles.flameDecor} aria-hidden>
            {['🕊', '✦', '🕊'].map((s, i) => (
              <span key={i} className={styles.flameIcon}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container}>

        {/* ── INTRODUÇÃO ── */}
        <div className={styles.introSection}>
          <div className={styles.introBlock}>
            <p className={styles.introLead}>
              Vivemos dias de muito barulho, muita correria e pouca profundidade.
            </p>
            <p>
              Muitas pessoas estão cansadas emocionalmente, confusas espiritualmente e tentando
              sobreviver em meio às pressões da vida, sem direção clara para a alma.
            </p>
            <p>
              Foi nesse contexto que nasceu a série <strong>"MOTIVAÇÃO DO CÉU"</strong>.
            </p>
            <p>
              Esta não é apenas uma coleção de mensagens.<br />
              É um chamado para reacender o coração.<br />
              Um convite para voltar os olhos ao eterno.<br />
              Uma voz de encorajamento para aqueles que desejam caminhar mais profundamente com Deus.
            </p>
          </div>

          <div className={styles.introHighlight}>
            <p className={styles.introHighlightText}>
              Aqui você encontrará reflexões intensas, fervorosas e cheias de verdade bíblica,
              abordando múltiplas facetas da caminhada cristã:
            </p>
            <ul className={styles.temasList}>
              {[
                'fé em tempos difíceis',
                'propósito',
                'identidade em Cristo',
                'maturidade espiritual',
                'cura interior',
                'perseverança',
                'liderança',
                'renovação da mente',
                'vida devocional',
                'o agir de Deus nas estações da vida',
              ].map((tema, i) => (
                <li key={i}><span className={styles.temasIcon}>✦</span>{tema}</li>
              ))}
            </ul>
          </div>

          <div className={styles.introBlock}>
            <p>
              Cada mensagem foi escrita em um tom acolhedor, direto e profundamente espiritual —
              não apenas para informar a mente, mas para fortalecer o coração e despertar a alma.
            </p>
            <p>
              <em>"MOTIVAÇÃO DO CÉU"</em> nasce da convicção de que Deus continua falando.
              Continua chamando. Continua restaurando pessoas. E continua fortalecendo aqueles
              que decidem permanecer firmes em Sua presença.
            </p>
            <p>
              Em um mundo cheio de distrações, esta série é um convite para desacelerar
              espiritualmente e ouvir novamente a voz do Senhor.
            </p>
          </div>

          <div className={styles.parasQuem}>
            <h3 className={styles.parasQuemTitle}>São mensagens para quem:</h3>
            <ul>
              {[
                'precisa reencontrar esperança',
                'deseja viver com propósito',
                'busca crescimento espiritual',
                'enfrenta batalhas silenciosas',
                'ou simplesmente sente sede de algo mais profundo em Deus',
              ].map((item, i) => (
                <li key={i}><span className={styles.temasIcon}>✦</span>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.introConclusao}>
            <p>
              Mais do que palavras motivacionais, esta série aponta para transformação espiritual
              genuína — aquela que nasce quando o coração é confrontado pela verdade e renovado
              pela presença de Cristo.
            </p>
            <blockquote className={styles.introQuote}>
              Que cada reflexão aqui publicada seja como uma chama acesa em sua caminhada:
              fortalecendo sua fé, renovando sua visão, e lembrando você de que o céu ainda
              inspira, direciona e sustenta aqueles que pertencem ao Senhor.
            </blockquote>
            <p className={styles.bemVindo}>
              Bem-vindo à série — <strong>"MOTIVAÇÃO DO CÉU"</strong>
            </p>
            <p className={styles.subtitulo}>
              Mensagens para fortalecer a alma e alinhar o coração com o Eterno.
            </p>
          </div>
        </div>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦ Mensagens da Série ✦</span>
        </div>

        {/* ── GRID DE MENSAGENS ── */}
        <div className={styles.grid} id="mensagens">
          {mensagens.map((m) => (
            <article key={m.id} className={styles.card}>
              <div className={styles.cardNumero}>{m.numero}</div>
              <div className={styles.cardBody}>
                <div className={styles.cardTemas}>
                  {m.temas.map((t, i) => (
                    <span key={i} className={styles.tema}>{t}</span>
                  ))}
                  {m.gratuito && (
                    <span className={styles.gratuitoTag}>Gratuito</span>
                  )}
                </div>
                <h2 className={styles.cardTitle}>{m.titulo}</h2>
                <p className={styles.cardVersiculo}>{m.versiculo}</p>
                <p className={styles.cardPreview}>
                  {m.corpo[0].slice(0, 160)}…
                </p>
                <button
                  className={styles.btnLer}
                  onClick={() => setOpenMensagem(m.id)}
                  aria-label={`Ler mensagem: ${m.titulo}`}
                >
                  Ler mensagem completa →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* ── RODAPÉ ── */}
        <div className={styles.ctaFooter}>
          <div className={styles.ctaIcon} aria-hidden>✦</div>
          <p className={styles.ctaText}>
            Novas mensagens são publicadas regularmente nesta série.
            Volte sempre para continuar sendo fortalecido pela Palavra de Deus.
          </p>
          <p className={styles.ctaAuthor}>— Série "Motivação do Céu" · Nélio DaSilva</p>
        </div>

      </div>
    </section>
  )
}
