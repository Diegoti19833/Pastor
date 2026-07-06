import { useEffect } from 'react'
import styles from './PortaDosFundos.module.css'

export default function PortaDosFundos() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Saúde da Igreja</span>
          <h1 className={styles.heroTitle}>
            Porta dos<br />
            <em>Fundos da Igreja</em>
          </h1>
          <p className={styles.heroSub}>
            Reflexões pastorais sobre retenção, discipulado e o cuidado
            com cada pessoa que Deus confia à sua comunidade.
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container}>

        {/* ── INTRODUÇÃO ── */}
        <div className={styles.sectionHeader}>
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>Como Fechar a Porta do Fundo da Igreja</h2>

            <p className={styles.lead}>
              Em muitas igrejas, existe um grande investimento na porta da frente. Orações,
              evangelismo, missões, eventos e estratégias são desenvolvidos com o propósito
              de alcançar novas pessoas para Cristo. E isso é bíblico, necessário e deve
              continuar sendo uma das prioridades da Igreja.
            </p>

            <p>
              Entretanto, existe uma realidade que, por vezes, recebe pouca atenção: a porta
              do fundo. Enquanto novos visitantes chegam, muitos outros deixam a igreja
              silenciosamente. O resultado é uma espécie de porta giratória: pessoas entram,
              pessoas saem, e a igreja nem sempre compreende por que isso acontece.
            </p>

            <p>
              Esse fenômeno não deve ser encarado apenas como uma questão de números, mas de
              cuidado pastoral, discipulado, comunhão e maturidade espiritual. Cada pessoa
              que se afasta representa uma história, uma família e uma oportunidade de
              crescimento que, por diferentes razões, foi interrompida.
            </p>

            <p>
              A pergunta que todo líder, pastor e membro comprometido deveria fazer é:{' '}
              <em>estamos dedicando a mesma atenção em conservar as pessoas que dedicamos em alcançá-las?</em>
            </p>

            <p>
              Nesta seção, convido você a caminhar comigo por um tema que considero de extrema
              importância para a saúde da Igreja de Cristo. Juntos, vamos examinar as principais
              razões pelas quais tantas pessoas deixam suas igrejas, identificar princípios
              bíblicos para fortalecer a permanência dos discípulos e refletir sobre práticas
              que podem transformar uma igreja de portas giratórias em uma comunidade onde as
              pessoas são acolhidas, cuidadas, discipuladas, permanecidas firmes na fé e na
              comunhão da igreja.
            </p>

            <p className={styles.closing}>
              Meu desejo é que este material desafie líderes e igrejas a desenvolver uma visão
              equilibrada: celebrar cada nova vida que entra pela porta da frente, sem perder de
              vista a responsabilidade de fechar, com amor, sabedoria, cuidado e discernimento,
              a porta do fundo.
            </p>

            <p className={styles.signature}>
              <strong>Nélio DaSilva</strong><br />
              <em>Pastor e Fundador do Ministério Homens de Valor</em>
            </p>
          </div>
        </div>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦ Reflexões Pastorais ✦</span>
        </div>

        {/* ── ARTIGO 01 — O PLANO DE RETENÇÃO EM 90 DIAS ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>01</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Porta dos Fundos da Igreja
              </span>
              <h2 className={styles.articleTitle}>
                O Plano de Retenção em 90 Dias
                <span className={styles.articleSubtitle}>Como Transformar um Convidado em um Discípulo Comprometido</span>
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>

            <p>A maioria das pessoas decide se permanecerá em uma igreja nos primeiros noventa dias. Esse período é decisivo. É quando o convidado procura responder, consciente ou inconscientemente, a quatro perguntas fundamentais:</p>

            <ul className={styles.articleList}>
              <li>Sou bem-vindo aqui?</li>
              <li>Alguém realmente se importa comigo?</li>
              <li>Posso construir amizades nesta igreja?</li>
              <li>Existe um lugar onde eu possa crescer e servir?</li>
            </ul>

            <p>Se a resposta for "sim" para essas quatro perguntas, as chances de permanência aumentam significativamente.</p>

            <p>O objetivo dos primeiros 90 dias não é transformar um visitante em um membro apenas, mas em um discípulo que ama a Cristo, ama Sua Igreja e encontra seu propósito no Reino de Deus.</p>

            {/* ETAPA 1 */}
            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1ª Etapa</span> Primeiras 24 Horas
            </h3>
            <p>As primeiras horas após a visita são fundamentais. Objetivos:</p>
            <ul className={styles.articleList}>
              <li>Agradecer pela visita.</li>
              <li>Demonstrar interesse genuíno.</li>
              <li>Abrir a porta para um relacionamento.</li>
            </ul>
            <p>Ações práticas:</p>
            <ul className={styles.articleList}>
              <li>Enviar uma mensagem de agradecimento no mesmo dia ou até 24 horas depois.</li>
              <li>O pastor ou um líder grava um breve vídeo personalizado.</li>
              <li>Convidar o visitante para retornar no domingo seguinte.</li>
              <li>Oferecer ajuda caso tenha alguma necessidade.</li>
            </ul>
            <p>É de fundamental importância que o visitante perceba que sua presença foi notada.</p>

            {/* ETAPA 2 */}
            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2ª Etapa</span> Primeira Semana
            </h3>
            <p>Agora o objetivo é criar conexão. Ações:</p>
            <ul className={styles.articleList}>
              <li>Telefonema de um líder.</li>
              <li>Entrega de um pequeno presente ou cartão.</li>
              <li>Convite para um café com um casal da igreja.</li>
              <li>Apresentação dos ministérios.</li>
            </ul>
            <p className={styles.closingQuestion} style={{fontSize: '1.05rem', marginTop: '0.5rem'}}>Ninguém permanece onde não cria amizades.</p>

            {/* ETAPA 3 */}
            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3ª Etapa</span> Dias 15 a 30
            </h3>
            <p>Agora é hora de integrar. Objetivos:</p>
            <ul className={styles.articleList}>
              <li>Inserir o visitante em um pequeno grupo.</li>
              <li>Apresentá-lo a outras famílias.</li>
              <li>Descobrir seus dons, experiências e interesses.</li>
            </ul>
            <p>Nesta fase o visitante deixa de ser apenas alguém que assiste aos cultos e começa a fazer parte da comunidade.</p>

            {/* ETAPA 4 */}
            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4ª Etapa</span> Dias 30 a 60
            </h3>
            <p>Chegou o momento do discipulado. Todo novo participante deve ter um discipulador. O discipulado deve abordar:</p>
            <ul className={styles.articleList}>
              <li>A segurança da salvação.</li>
              <li>Como estudar a Bíblia.</li>
              <li>Como desenvolver uma vida de oração.</li>
              <li>A importância da comunhão.</li>
              <li>Mordomia cristã.</li>
              <li>Descoberta dos dons espirituais.</li>
            </ul>
            <p className={styles.closingQuestion} style={{fontSize: '1.05rem', marginTop: '0.5rem'}}>Quem cresce espiritualmente cria raízes.</p>

            {/* ETAPA 5 */}
            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>5ª Etapa</span> Dias 60 a 90
            </h3>
            <p>Agora o foco é gerar pertencimento. A pessoa deve ser incentivada a:</p>
            <ul className={styles.articleList}>
              <li>Participar de um ministério.</li>
              <li>Servir conforme seus dons.</li>
              <li>Fazer o curso de membresia.</li>
              <li>Conhecer a visão da igreja.</li>
              <li>Assumir compromissos espirituais.</li>
            </ul>
            <p className={styles.closingQuestion} style={{fontSize: '1.05rem', marginTop: '0.5rem'}}>As pessoas permanecem onde fazem diferença.</p>

            {/* 4 PILARES */}
            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>Os Quatro Pilares da Retenção</h3>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> Relacionamentos
            </h3>
            <p>As pessoas dificilmente abandonam amigos. A igreja precisa criar ambientes onde amizades floresçam naturalmente.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> Discipulado
            </h3>
            <p>Sem crescimento espiritual, a permanência será superficial. Discipulado produz maturidade.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> Serviço
            </h3>
            <p>Quem serve cria vínculos. O ministério transforma espectadores em participantes.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> Cuidado Pastoral
            </h3>
            <p>Ninguém deve caminhar sozinho. Cada pessoa precisa saber quem é seu pastor, líder ou discipulador.</p>

            {/* INDICADORES */}
            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>Indicadores de Sucesso</h3>
            <p>Ao final dos primeiros 90 dias, pergunte:</p>
            <ul className={styles.articleList}>
              <li>O visitante conhece pelo menos dez pessoas pelo nome?</li>
              <li>Participa de um pequeno grupo?</li>
              <li>Possui um discipulador?</li>
              <li>Está envolvido em algum ministério?</li>
              <li>Frequenta os cultos regularmente?</li>
              <li>Conhece a visão e os valores da igreja?</li>
              <li>Está caminhando para tornar-se membro?</li>
            </ul>
            <p>Se a maioria das respostas for positiva, a igreja não apenas recebeu um visitante — ela começou a formar um discípulo.</p>

            {/* CONCLUSÃO */}
            <div className={styles.articleConclusion}>
              <h3 className={styles.articleSubheading}>Um Princípio que Nunca Devemos Esquecer</h3>
              <p>As pessoas não permanecem em uma igreja apenas porque a música é excelente, a estrutura é bonita ou a pregação é inspiradora.</p>
              <p><strong>Elas permanecem porque encontraram uma família.</strong></p>
              <p>Uma igreja saudável não mede seu sucesso apenas pelo número de visitantes que entram pela porta da frente, mas pelo número de pessoas que permanecem, crescem na graça de Cristo e se tornam discípulos que fazem outros discípulos.</p>
              <blockquote className={styles.articleVerse}>
                "Assim, já não sois estrangeiros e peregrinos, mas concidadãos dos santos e membros da família de Deus."
                <cite>— Efésios 2:19</cite>
              </blockquote>
              <p className={styles.closingQuestion}>O verdadeiro crescimento acontece quando cada visitante deixa de ser apenas um convidado e passa a fazer parte da família de Deus.</p>
            </div>

          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── ARTIGO 02 — COMO DESCOBRIR PORQUE AS PESSOAS DEIXAM A IGREJA ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>02</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Porta dos Fundos da Igreja
              </span>
              <h2 className={styles.articleTitle}>
                Como Descobrir por que as Pessoas Deixam a Igreja
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>Toda igreja que deseja fechar a porta dos fundos precisa aprender não apenas a receber pessoas, mas também a compreender por que elas vão embora. Cada despedida traz uma lição. Quando ouvimos com humildade, transformamos perdas em oportunidades de crescimento.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> Entrevistas de Saída
            </h3>
            <p>Sempre que possível, converse com aqueles que decidiram deixar a igreja. Faça isso com espírito de amor, sem atitude defensiva e sem tentar convencê-los a mudar de ideia. O objetivo é ouvir, aprender e demonstrar cuidado.</p>
            <p>Algumas perguntas podem ajudar:</p>
            <ul className={styles.articleList}>
              <li>O que você mais apreciou durante o tempo em que esteve conosco?</li>
              <li>O que poderíamos ter feito de forma diferente?</li>
              <li>Existe algo que poderia tê-lo(a) ajudado a permanecer conosco?</li>
            </ul>
            <p>Uma conversa respeitosa pode oferecer informações preciosas para fortalecer o ministério da igreja.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> Pesquisas Anônimas
            </h3>
            <p>Questionários anônimos permitem que as pessoas expressem suas percepções com maior liberdade. Muitas vezes, eles revelam padrões que passariam despercebidos em conversas informais.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> Acompanhamento da Frequência
            </h3>
            <p>Monitorar a frequência não é exercer controle, mas demonstrar cuidado. Quando uma igreja percebe rapidamente que alguém começou a faltar, pode agir antes que o afastamento se torne definitivo.</p>
            <p className={styles.closingQuestion} style={{fontSize: '1.05rem', marginTop: '0.5rem'}}>Quanto mais cedo a ausência é percebida, maiores são as oportunidades de restauração.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> Contato Pastoral
            </h3>
            <p>Uma ligação telefônica, uma mensagem ou uma visita pastoral comunica algo poderoso: <em>"Você é importante para nós."</em></p>
            <p>Mesmo que a pessoa não retorne, ela saberá que foi amada e valorizada. Em muitos casos, um simples gesto de cuidado é suficiente para impedir que alguém se afaste completamente.</p>

            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>Perguntas para uma Entrevista de Saída</h3>
            <ul className={styles.articleList}>
              <li>O que o(a) levou a visitar nossa igreja?</li>
              <li>O que você esperava encontrar aqui?</li>
              <li>Quais fatores contribuíram para sua decisão de sair?</li>
              <li>Como podemos servi-lo(a) ou ajudá-lo(a) no futuro?</li>
            </ul>
            <p>Essas perguntas devem ser feitas com humildade, disposição para ouvir e sincero desejo de aprender. O propósito não é justificar a igreja, mas compreender a experiência da pessoa.</p>

            <div className={styles.articleConclusion}>
              <h3 className={styles.articleSubheading}>Como Evitar Saídas Desnecessárias</h3>
              <p>A melhor maneira de reduzir o número de pessoas que deixam a igreja é agir antes que elas pensem em partir. Algumas práticas são essenciais:</p>
              <ul className={styles.articleList}>
                <li>Desenvolver um sistema consistente de acolhimento, acompanhamento e cuidado pastoral.</li>
                <li>Incentivar cada membro a perceber quem está chegando e quem está se ausentando.</li>
                <li>Criar uma cultura em que todos se sintam responsáveis por receber, cuidar e integrar novas pessoas.</li>
                <li>Estimular relacionamentos autênticos por meio de pequenos grupos, ministérios e oportunidades de serviço.</li>
                <li>Fazer com que cada visitante encontre não apenas um bom culto, mas uma família espiritual onde seja conhecido, amado e discipulado.</li>
              </ul>
              <p className={styles.closingQuestion}>A retenção não acontece por acaso; ela é resultado de uma igreja intencional.</p>
            </div>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── ARTIGO 03 — RAZÕES PELAS QUAIS AS PESSOAS DEIXAM A IGREJA ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>03</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Porta dos Fundos da Igreja
              </span>
              <h2 className={styles.articleTitle}>
                Razões pelas quais as Pessoas Deixam a Igreja
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> Falta de Amizades
            </h3>
            <p>Os convidados raramente permanecem quando não desenvolvem relacionamentos significativos nos primeiros 90 dias.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> Expectativas Não Correspondidas
            </h3>
            <p>Os recém-chegados sentem-se decepcionados quando a igreja promete mais do que pode oferecer ou quando a comunicação é deficiente.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> Transições da Vida
            </h3>
            <p>Mudanças de cidade, de emprego ou na estrutura familiar podem afastar as pessoas. Algumas transições são inevitáveis, mas relacionamentos sólidos podem minimizar essas perdas.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> Sentimento de Invisibilidade
            </h3>
            <p>Quando ninguém percebe sua ausência, os convidados concluem que não fazem diferença e que não são importantes para a igreja.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>5.</span> Conflitos ou Decepções
            </h3>
            <p>Experiências negativas — discussões, fofocas ou política eclesiástica — podem levar as pessoas a se afastarem rapidamente.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>6.</span> Enfraquecimento Espiritual
            </h3>
            <p>Alguns convidados perdem o interesse pela fé, revelando a necessidade de um discipulado mais profundo e intencional.</p>

            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>Os Principais Momentos em que as Pessoas Desistem</h3>
            <ul className={styles.articleList}>
              <li><strong>Após a primeira visita:</strong> quando não recebem nenhum acompanhamento.</li>
              <li><strong>Após o primeiro mês:</strong> quando ainda não desenvolveram amizades.</li>
              <li><strong>Após os primeiros 90 dias:</strong> quando não encontram um caminho claro para pertencer à comunidade.</li>
              <li><strong>Após o primeiro ano:</strong> quando não são discipuladas nem encontram uma oportunidade para servir.</li>
            </ul>

            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>Sinais de Alerta: Quando o Coração Começa a se Afastar</h3>
            <p>A maioria das pessoas não abandona a igreja de um dia para o outro. O afastamento quase sempre é um processo silencioso. Antes de desaparecerem fisicamente, elas já começaram a se desconectar emocional e espiritualmente. Líderes atentos aprendem a identificar esses sinais enquanto ainda há tempo para restaurar relacionamentos.</p>
            <ul className={styles.articleList}>
              <li><strong>Frequência irregular aos cultos.</strong> A pessoa que antes participava com alegria começa a faltar com frequência, sempre apresentando justificativas plausíveis.</li>
              <li><strong>Distanciamento dos pequenos grupos.</strong> Ela evita momentos de comunhão, deixa de participar das reuniões e perde o interesse pelos relacionamentos.</li>
              <li><strong>Resistência em servir.</strong> O entusiasmo dá lugar à apatia. A pessoa não demonstra interesse em encontrar um lugar para servir ou abandona os ministérios nos quais já estava envolvida.</li>
              <li><strong>Relacionamentos superficiais.</strong> Mesmo frequentando a igreja, ela permanece isolada. Conhece muitas pessoas, mas não construiu amizades profundas.</li>
            </ul>
            <p>Esses sinais não devem ser interpretados com julgamento, mas como um chamado ao cuidado pastoral. Igrejas saudáveis desenvolvem uma cultura de atenção, onde as pessoas são percebidas antes que desapareçam.</p>
            <blockquote className={styles.articleVerse}>
              A ausência não começa com o corpo; ela começa com o coração. Quando o coração se distancia, o corpo apenas confirma uma decisão que já estava sendo construída em silêncio.
            </blockquote>

            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>O Alto Custo de Perder Pessoas</h3>
            <p>Cada pessoa que deixa a igreja representa muito mais do que uma cadeira vazia. Há perdas que não aparecem nos relatórios estatísticos, mas que afetam profundamente a saúde da congregação.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> O Custo Espiritual
            </h3>
            <p>Cada pessoa que se afasta representa uma oportunidade perdida de discipulado, crescimento na fé e serviço ao Reino de Deus. Muitas vezes, quem abandona a igreja torna-se espiritualmente vulnerável e se distancia também de sua caminhada com Cristo.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> O Custo Emocional
            </h3>
            <p>Quando membros deixam a igreja, líderes, pastores e voluntários experimentam tristeza e frustração. O sentimento de impotência pode desanimar aqueles que dedicam suas vidas ao cuidado do rebanho.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> O Custo Numérico
            </h3>
            <p>Nenhuma igreja cresce de forma consistente quando perde tantas pessoas quanto recebe. O crescimento verdadeiro não depende apenas de atrair visitantes, mas de ajudá-los a permanecer, amadurecer e servir.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> O Custo Financeiro
            </h3>
            <p>Quando pessoas comprometidas deixam a igreja, seus dons, talentos e recursos também se vão. A redução das contribuições limita investimentos em evangelismo, missões, discipulado e ação social.</p>

            <p>A triste realidade é que muitas igrejas investem enormes recursos para atrair novos visitantes, mas dedicam muito pouco esforço para conservar aqueles que Deus já lhes enviou. É como tentar encher um balde furado: enquanto novas pessoas entram pela porta da frente, outras saem silenciosamente pela porta dos fundos.</p>

            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>Histórias que Ensinam</h3>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>›</span> O Visitante Esquecido
            </h3>
            <p>Uma família visitou uma igreja durante três domingos consecutivos. Gostaram da pregação, da música e do ambiente. Esperavam que alguém os procurasse, fizesse uma ligação, enviasse uma mensagem ou simplesmente perguntasse como estavam. Nada aconteceu.</p>
            <p>Sem qualquer contato, concluíram que sua presença não fazia diferença. Algumas semanas depois, encontraram outra igreja onde foram recebidos pelo nome, convidados para um pequeno grupo e acompanhados por líderes. Permaneceram ali e tornaram-se membros ativos.</p>
            <p><strong>A diferença não estava na qualidade do culto, mas na qualidade do cuidado.</strong></p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>›</span> A Vítima do Conflito
            </h3>
            <p>Um recém-convertido chegou cheio de entusiasmo. Entretanto, antes mesmo de criar raízes, foi exposto a críticas, fofocas e divisões internas. Em vez de encontrar um ambiente de amor e graça, encontrou disputas e ressentimentos.</p>
            <p>Ferido, afastou-se da igreja e, infelizmente, também enfraqueceu sua fé.</p>
            <p>Conflitos mal resolvidos não afastam apenas membros antigos; frequentemente expulsam aqueles que Deus estava acrescentando à Sua igreja.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>›</span> O Ausente Invisível
            </h3>
            <p>Um homem deixou de frequentar os cultos durante quatro semanas consecutivas. Domingo após domingo, sua cadeira permaneceu vazia, mas ninguém percebeu sua ausência. Nenhuma ligação foi feita, nenhuma mensagem foi enviada, nenhuma visita aconteceu.</p>
            <p>Quando, finalmente, alguém notou que ele havia desaparecido, já era tarde demais. Ferido pela sensação de que sua falta não fez diferença para ninguém, ele já havia encontrado outro caminho.</p>
            <p>Essa história revela uma verdade que toda igreja precisa enfrentar: as pessoas não desejam apenas ser recebidas quando chegam; elas também desejam ser percebidas quando faltam.</p>

            <div className={styles.articleConclusion}>
              <p>Uma igreja verdadeiramente acolhedora é aquela que celebra a presença, mas também sente a ausência. O acompanhamento pastoral não deve começar apenas quando alguém vai embora — ele deve acontecer enquanto a pessoa ainda está presente.</p>
              <p>Pessoas não permanecem apenas por causa de uma boa pregação. Elas permanecem porque encontram um ambiente onde são conhecidas, amadas, cuidadas e discipuladas.</p>
              <blockquote className={styles.articleVerse}>
                "A ausência raramente começa no banco da igreja; ela começa silenciosamente no coração. Líderes sábios aprendem a perceber os primeiros sinais antes que a ausência se torne um adeus definitivo."
              </blockquote>
              <p className={styles.closingQuestion}>O crescimento saudável da igreja acontece quando a verdade é proclamada e o amor é vivido diariamente.</p>
            </div>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── ARTIGO 04 — PORQUE AS PESSOAS DEIXAM A IGREJA ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>04</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Porta dos Fundos da Igreja
              </span>
              <h2 className={styles.articleTitle}>
                Por que as Pessoas Deixam a Igreja
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <blockquote className={styles.articleVerse}>
              "Um problema conhecido é um problema 50% resolvido."
              <cite>— Mark Twain</cite>
            </blockquote>

            <p>Rosana e seu marido Gabriel frequentaram a igreja durante três meses. Eram pontuais, participavam dos cultos, apreciavam profundamente a adoração e eram edificados pela exposição fiel da Palavra. Seus filhos estavam felizes e envolvidos no ministério infantil. Aos olhos de todos, pareciam estar encontrando seu lugar na comunidade.</p>

            <p>Então, sem qualquer aviso, desapareceram. Algumas semanas depois, alguém entrou em contato para saber o que havia acontecido. A resposta foi simples, mas devastadora:</p>

            <blockquote className={styles.articleVerse}>
              "Nós gostávamos da igreja. Gostávamos das mensagens. Gostávamos da programação. Mas nunca conseguimos desenvolver um relacionamento verdadeiro com ninguém. Quando deixamos de vir, percebemos que nossa ausência não fez diferença para ninguém."
            </blockquote>

            <p>Essa história se repete todos os domingos em milhares de igrejas ao redor do mundo.</p>

            <p>Na minha experiência de mais de 30 anos ensinando, pregando e oferecendo seminários e workshops sobre esse tema, ganhei uma profunda convicção: a maioria das pessoas não abandona uma igreja por causa de problemas doutrinários. Pouquíssimas saem por causa de escândalos ou conflitos graves. Na realidade, a grande maioria simplesmente vai embora em silêncio, porque nunca encontrou um lugar onde pudesse ser conhecida, amada e cuidada.</p>

            <p>Pouco a pouco, elas deixam de frequentar um culto, depois outro, até que desaparecem completamente. E, muitas vezes, passam semanas ou até meses sem que alguém perceba sua ausência.</p>

            <p className={styles.closingQuestion} style={{fontSize: '1.1rem'}}>Isso revela uma verdade dolorosa: pessoas permanecem onde se sentem pertencentes.</p>

            <h3 className={styles.articleSubheading} style={{marginTop: '2.75rem'}}>A Tragédia do Anonimato</h3>
            <p>Cada pessoa que sai da igreja representa muito mais do que um lugar vazio no templo. Representa uma história interrompida, um relacionamento que não foi construído e uma oportunidade perdida de manifestar o amor de Cristo.</p>
            <p>Uma igreja pode possuir excelente pregação, música inspiradora, boa estrutura e programas eficientes. Entretanto, se não criar conexões humanas intencionais, continuará vendo pessoas entrarem pela porta da frente e saírem pela porta dos fundos.</p>
            <p><strong>Nenhuma estratégia de crescimento será duradoura enquanto a cultura do cuidado não fizer parte do DNA da igreja.</strong></p>

            <h3 className={styles.articleSubheading}>O Primeiro Passo Para a Retenção</h3>
            <p>A retenção começa quando a liderança decide compreender por que as pessoas estão indo embora.</p>
            <p>Não basta celebrar quantos visitantes chegaram neste domingo. É preciso perguntar quantos ainda estarão conosco daqui a seis meses.</p>
            <p>Igrejas saudáveis não apenas atraem pessoas; elas as acolhem, caminham ao lado delas e as ajudam a encontrar uma verdadeira família espiritual.</p>
            <p><em>No Reino de Deus, ninguém deveria permanecer invisível.</em></p>

            <div className={styles.articleConclusion}>
              <p>As pessoas raramente deixam a igreja porque perderam a fé. Na maioria das vezes, elas deixam a igreja porque perderam o senso de pertencimento. Quando ninguém conhece seu nome, sente sua falta ou demonstra interesse genuíno por sua vida, a porta dos fundos começa a se abrir silenciosamente.</p>
              <p>Fechar essa porta não exige apenas melhores programas; exige corações que <em>enxerguem</em> pessoas. Existe uma diferença abismal entre ver e enxergar. Ver, todos veem — porém enxergar fica a cargo de uma diminuta minoria. E aqui é onde se encontra a maior de todas as diferenças.</p>
              <p className={styles.closingQuestion}>Afinal, uma igreja cresce verdadeiramente quando cada membro assume a responsabilidade de amar, acolher e cuidar daqueles que Deus traz para junto do Seu povo.</p>
            </div>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* CTA Footer */}
        <div className={styles.ctaFooter}>
          <p>Novos conteúdos serão publicados regularmente. Acompanhe e fortaleça sua liderança pastoral.</p>
        </div>

      </div>
    </section>
  )
}
