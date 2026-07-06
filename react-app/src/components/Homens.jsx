import { useEffect } from 'react'
import styles from './Homens.module.css'

export default function Homens() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Ministério Masculino</span>
          <h1 className={styles.heroTitle}>
            Homens<br />
            <em>de Valor</em>
          </h1>
          <p className={styles.heroSub}>
            18 anos alcançando o coração do homem — fortalecendo a identidade
            masculina segundo o coração de Deus.
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container} id="homens">

        {/* ── 1) INTRODUÇÃO DO MINISTÉRIO ── */}
        <div className={styles.sectionHeader}>
          <div className={styles.introContent}>
            <p className={styles.lead}>
              Em 2008 nasceu o ministério <strong>Homens de Valor</strong>, em um
              tempo em que ainda existiam poucas iniciativas voltadas para alcançar
              o homem em sua essência, sua identidade e sua masculinidade à luz da
              Palavra de Deus.
            </p>
            <p>Ao longo desses 18 anos de caminhada, Deus me permitiu enxergar de perto a profunda crise que muitos homens enfrentam silenciosamente — crises emocionais, espirituais, familiares e morais que, muitas vezes, permanecem escondidas até mesmo dentro da igreja.</p>
            <p>Essa jornada transformou radicalmente minha compreensão sobre a real situação do homem moderno. Percebi que, em muitos contextos, a igreja tem encontrado dificuldade em alcançar o coração do homem de maneira intencional, profunda e restauradora. Muitos homens frequentam cultos, ocupam posições, trabalham intensamente e sustentam responsabilidades, mas continuam feridos, cansados, desconectados de Deus e sem direção espiritual clara.</p>
            <p>O ministério <strong>Homens de Valor</strong> nasceu exatamente para preencher essa lacuna: levantar homens fortes na fé, íntegros no caráter, apaixonados por Cristo, comprometidos com suas famílias e preparados para viver uma masculinidade bíblica saudável e transformadora.</p>
            <p>Nestes 18 anos, tenho visto com alegria o surgimento de inúmeras iniciativas voltadas ao discipulado masculino, restauração familiar, liderança espiritual e fortalecimento de homens dentro e fora da igreja. Sou profundamente grato a Deus por cada vida alcançada, cada casamento restaurado, cada homem reconciliado com seu propósito e cada líder despertado para investir intencionalmente no coração masculino.</p>
            <p>Este espaço no site foi criado como uma ferramenta de encorajamento, restauração e crescimento espiritual para homens de todas as idades. Aqui você encontrará reflexões, mensagens, princípios bíblicos, experiências ministeriais e conteúdos voltados ao fortalecimento da identidade masculina segundo o coração de Deus.</p>
            <p>Meu desejo é que este ministério continue servindo como uma ponte entre homens feridos e a graça restauradora de Cristo.</p>
            <p className={styles.welcome}>Seja muito bem-vindo ao <strong>Homens de Valor</strong>.</p>

            <p>Que este conteúdo inspire você a:</p>
            <ul>
              <li>Buscar uma vida mais profunda com Deus;</li>
              <li>Restaurar sua identidade espiritual;</li>
              <li>Liderar sua casa com amor e firmeza;</li>
              <li>Permanecer firme em tempos difíceis;</li>
              <li>Tornar-se um homem segundo o coração de Deus.</li>
            </ul>

            <p className={styles.signature}>
              Com gratidão ao Senhor por esses 18 anos de missão,<br />
              <strong>Nélio DaSilva</strong><br />
              <em>Fundador do Ministério Homens de Valor</em>
            </p>
          </div>
        </div>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦ Reflexões para Homens ✦</span>
        </div>

        {/* ── 2) ATENTO AO TEMPO ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>01</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Homens de Valor
              </span>
              <h2 className={styles.articleTitle}>
                Atento ao Tempo
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <blockquote className={styles.articleVerse}>
              "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria."
              <cite>— Salmos 90:12</cite>
            </blockquote>

            <p>O imperador romano e filósofo estoico Marcus Aurelius escreveu certa vez: <em>"A vida é curta demais para se perder tempo com coisas que não importam."</em></p>

            <p>Embora tenha sido dita fora do contexto da fé cristã, essa frase ecoa uma verdade profundamente bíblica. As Escrituras constantemente nos lembram da brevidade da vida e da necessidade de vivermos com propósito eterno.</p>

            <p>Corremos de um compromisso para outro. Gastamos energia com preocupações desnecessárias, discussões inúteis, disputas de ego, mágoas acumuladas e a incessante busca por reconhecimento humano. Enchemos nossa agenda, mas muitas vezes esvaziamos a alma.</p>

            <p className={styles.closingQuestion}>O salmista, porém, faz uma oração diferente — não pede mais tempo, pede sabedoria para viver bem o tempo que já tem.</p>

            <p><em>(Reflexão em construção — continuação em breve.)</em></p>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── 3) COMO INICIAR UM MINISTÉRIO DE HOMENS ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>02</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Homens de Valor
              </span>
              <h2 className={styles.articleTitle}>
                Como Iniciar um Ministério de Homens
                <span className={styles.articleSubtitle}>Construindo um Ministério que Alcança o Coração do Homem</span>
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>Iniciar um ministério de homens não é simplesmente organizar reuniões para homens. Trata-se de alcançar o coração masculino com o poder transformador de Jesus Cristo e ajudá-los a se tornarem líderes espiritualmente fortes em seus lares, igrejas, locais de trabalho e comunidades.</p>
            <p>Muitas igrejas têm dificuldade em se conectar profundamente com os homens porque focam apenas em atividades em vez de transformação. Os homens não estão procurando apenas mais um programa — eles estão procurando propósito, irmandade, verdade, cura e direção.</p>
            <p>Um ministério saudável de homens precisa ir além de eventos e se tornar um movimento de discipulado e formação espiritual.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> Comece com Oração e Quebrantamento
            </h3>
            <p>Todo ministério eficaz começa com dependência de Deus. Antes de criar agendas, logotipos ou eventos, dedique tempo orando especificamente por:</p>
            <ul className={styles.articleQuestions}>
              <li>A condição espiritual dos homens;</li>
              <li>A restauração das famílias;</li>
              <li>A cura de corações feridos;</li>
              <li>Avivamento entre maridos, pais e líderes.</li>
            </ul>
            <blockquote className={styles.articleVerse}>
              "Se o Senhor não edificar a casa, em vão trabalham os que a edificam."
              <cite>— Salmos 127:1</cite>
            </blockquote>
            <p>Peça a Deus que lhe dê o peso no coração que Ele tem pelos homens. Um ministério de homens não pode ser sustentado apenas por entusiasmo. Ele precisa ser movido por convicção espiritual.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> Defina Claramente a Missão
            </h3>
            <p>Os homens precisam de clareza e direção. Responda a estas perguntas:</p>
            <ul className={styles.articleQuestions}>
              <li>Por que este ministério existe?</li>
              <li>Que tipo de homens estamos tentando formar?</li>
              <li>Quais problemas espirituais estamos tentando enfrentar?</li>
            </ul>
            <p>Uma forte declaração de missão poderia ser:</p>
            <blockquote className={styles.articleVerse}>
              "Desenvolver homens espiritualmente maduros que amem a Deus, liderem suas famílias, sirvam à igreja e impactem o mundo."
            </blockquote>
            <p>Mantenha a missão simples, bíblica e transformadora.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> Foque no Coração, Não Apenas em Atividades
            </h3>
            <p>Muitos ministérios fracassam porque se tornam centrados em cafés da manhã, esportes ou entretenimento sem confrontar as lutas reais que os homens enfrentam. Os homens estão lidando com:</p>
            <ul className={styles.articleQuestions}>
              <li>Solidão;</li>
              <li>Pornografia;</li>
              <li>Apatia espiritual;</li>
              <li>Medo;</li>
              <li>Feridas emocionais;</li>
              <li>Fracassos;</li>
              <li>Problemas conjugais;</li>
              <li>Confusão de identidade;</li>
              <li>Falta de propósito.</li>
            </ul>
            <p>Crie um ambiente onde os homens possam ser honestos e sem constrangimento de compartilhar o que se passa no "porão" da sua alma.</p>
            <blockquote className={styles.articleVerse}>
              "Confessai as vossas culpas uns aos outros e orai uns pelos outros, para serdes curados."
              <cite>— Tiago 5:16</cite>
            </blockquote>
            <p>A transformação começa onde a autenticidade é permitida.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> Construa Irmandade, Não Performance
            </h3>
            <p>Os homens frequentemente se escondem atrás de máscaras. Um ministério saudável de homens cria irmandade em vez de competição. Encoraje:</p>
            <ul className={styles.articleQuestions}>
              <li>Prestação de contas;</li>
              <li>Pequenos grupos;</li>
              <li>Parcerias de oração;</li>
              <li>Mentoria;</li>
              <li>Conversas honestas.</li>
            </ul>
            <p>Os homens crescem quando percebem que não estão lutando sozinhos.</p>
            <blockquote className={styles.articleVerse}>
              "Assim como o ferro afia o ferro, o homem afia o seu companheiro."
              <cite>— Provérbios 27:17</cite>
            </blockquote>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>5.</span> Ensine a Masculinidade Bíblica
            </h3>
            <p>A cultura da atualidade está muito confusa sobre a real masculinidade. Seu ministério deve ensinar que a verdadeira masculinidade não é domínio, agressividade ou orgulho. A masculinidade bíblica consiste de:</p>
            <ul className={styles.articleQuestions}>
              <li>Responsabilidade;</li>
              <li>Integridade;</li>
              <li>Sacrifício;</li>
              <li>Humildade;</li>
              <li>Liderança espiritual;</li>
              <li>Coragem sob a autoridade de Deus.</li>
            </ul>
            <p>Jesus é o modelo perfeito de masculinidade.</p>
            <blockquote className={styles.articleVerse}>
              "Vigiai, permanecei firmes na fé, portai-vos varonilmente e fortalecei-vos."
              <cite>— 1 Coríntios 16:13</cite>
            </blockquote>
            <p>Ensine os homens a liderar espiritualmente, amar suas esposas, criar seus filhos, lidar com fracassos, andar em pureza e perseverar no sofrimento.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>6.</span> Priorize o Discipulado Acima dos Eventos
            </h3>
            <p>Eventos podem atrair homens, mas é o discipulado que realmente transforma o coração dos homens. Um ministério bem-sucedido deve incluir:</p>
            <ul className={styles.articleQuestions}>
              <li>Estudos bíblicos;</li>
              <li>Treinamento de liderança;</li>
              <li>Mentoria individual;</li>
              <li>Reuniões de oração;</li>
              <li>Retiros espirituais;</li>
              <li>Estruturas de prestação de contas.</li>
            </ul>
            <p>Pergunte continuamente: <em>"Estamos entretendo homens ou discipulando homens?"</em> Jesus não construiu apenas multidões — Ele formou discípulos.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>7.</span> Aborde Questões da Vida Real
            </h3>
            <p>Os homens se conectam profundamente quando o ministério fala da vida real. Os temas podem incluir:</p>
            <ul className={styles.articleQuestions}>
              <li>Casamento e família;</li>
              <li>Esgotamento mental e emocional;</li>
              <li>Pureza sexual;</li>
              <li>Finanças;</li>
              <li>Liderança;</li>
              <li>Ira;</li>
              <li>Vícios;</li>
              <li>Identidade;</li>
              <li>Chamado e propósito;</li>
              <li>Perseverança;</li>
              <li>Solidão na liderança.</li>
            </ul>
            <p>A verdade prática gera envolvimento mais profundo.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>8.</span> Forme Líderes, Não Dependência
            </h3>
            <p>O objetivo é multiplicação. Um ministério forte de homens levanta outros líderes que discipularão mais homens.</p>
            <blockquote className={styles.articleVerse}>
              "E o que de minha parte ouviste… transmite-o a homens fiéis e também idôneos para instruir a outros."
              <cite>— 2 Timóteo 2:2</cite>
            </blockquote>
            <p>Um ministério saudável nunca é construído em torno de apenas uma personalidade. Desenvolva líderes de pequenos grupos, mentores, líderes de oração, mestres e líderes servos.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>9.</span> Crie uma Cultura de Ação
            </h3>
            <p>Os homens respondem à missão e ao propósito. Encoraje os homens a:</p>
            <ul className={styles.articleQuestions}>
              <li>Servirem à igreja;</li>
              <li>Protegerem espiritualmente suas famílias;</li>
              <li>Evangelizarem;</li>
              <li>Mentorearem homens mais jovens;</li>
              <li>Apoiarem missões;</li>
              <li>Ajudarem os necessitados.</li>
            </ul>
            <p>Os homens se tornam mais fortes quando desafiados a viver além de si mesmos.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>10.</span> Nunca Perca o Evangelho de Vista
            </h3>
            <p>O fundamento do ministério de homens não é auto-aperfeiçoamento — é o Evangelho. Os homens não precisam apenas de motivação. Eles precisam fundamentalmente de redenção.</p>
            <p>A resposta para o coração quebrado do homem é e sempre será Jesus Cristo.</p>
            <blockquote className={styles.articleVerse}>
              "E, assim, se alguém está em Cristo, é nova criatura."
              <cite>— 2 Coríntios 5:17</cite>
            </blockquote>
            <p>Um ministério de homens sem o Evangelho pode produzir melhor comportamento, mas somente Cristo produz corações transformados.</p>

            <div className={styles.articleConclusion}>
              <h3 className={styles.articleSubheading}>Encorajamento Final</h3>
              <p>Não subestime o impacto de investir nos homens. Quando Deus transforma um homem:</p>
              <ul className={styles.articleQuestions}>
                <li>Famílias mudam;</li>
                <li>Igrejas se tornam mais saudáveis;</li>
                <li>Filhos são fortalecidos;</li>
                <li>Comunidades são impactadas;</li>
                <li>Futuras gerações são alcançadas.</li>
              </ul>
              <p>Um homem transformado pode se tornar um pilar espiritual para muitos outros — tenho a profunda convicção de que o ministério de homens é o que tem maior potencial de atravessar, através dos seus efeitos, muitas gerações.</p>
              <p>Comece pequeno, se necessário. Comece com oração. Comece com autenticidade. Comece com a Palavra de Deus.</p>
              <p className={styles.closingQuestion}>Mas comece. Porque o mundo necessita desesperadamente de homens entregues completamente a Cristo.</p>
            </div>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── 4) PRINCIPAIS DESAFIOS NA CONSTRUÇÃO DE UM MINISTÉRIO DE HOMENS ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>03</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Homens de Valor
              </span>
              <h2 className={styles.articleTitle}>
                Principais Desafios na Construção de um Ministério de Homens
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>Quando converso com líderes de ministério de homens, as mesmas perguntas parecem surgir repetidamente. São as mesmas perguntas com as quais eu mesmo luto. Como ajudar os homens a se importarem mais com sua vida espiritual? Como alcançar os jovens? Como construir uma comunidade autêntica onde os homens falem sobre lutas reais? E como ajudar um pastor a enxergar que o ministério de homens não é apenas "mais um programa", mas uma parte vital da missão da igreja?</p>
            <p>Se você já fez essas perguntas, saiba que não está sozinho. Permita-me compartilhar algumas coisas que tenho aprendido — ao longo desses 18 anos, desde a fundação dos <strong>Homens de Valor</strong> — enquanto caminhava por esses desafios com os homens que Deus confiou aos meus cuidados.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> A Luta Contra a Apatia
            </h3>
            <p>A apatia é uma das batalhas mais difíceis que enfrentamos. Os homens se desviam com muita facilidade. O foco do homem é raso, efêmero. O homem também se distrai com muita facilidade. Somos constantemente tentados a ceder ao conforto, à acomodação e à preguiça espiritual. Alguns simplesmente não conseguem enxergar como seguir a Jesus pode conectá-los com a vida cotidiana.</p>
            <p>Aprendi que a resposta não é "bater nos homens", ou seja, constrangê-los para que ajam mais, para que orem mais ou para que leiam mais a Bíblia. Apesar do valor em tudo isso que citei, o fato é que nenhuma mudança real e profunda jamais irá ocorrer sem que o homem entenda no fundo da alma que a vida cristã não consiste de obedecer um acúmulo de regras — mas que a vida cristã consiste em uma transformação genuína do coração. Quando um homem percebe que andar com Cristo molda a forma como ele lidera sua família, trabalha com integridade e enfrenta as provações, tudo então para ele passa a fazer sentido.</p>
            <p>Para mim, a abordagem mais eficaz tem sido o convite pessoal. Sentar diante de um irmão com uma xícara de café, olhar nos olhos dele e dizer: "Deus está desafiando você neste momento. Quero ver você crescer." Esse tipo de investimento pessoal rompe a indiferença muito mais do que qualquer anúncio que uma programação para homens jamais poderia fazer.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> Alcançar a Próxima Geração
            </h3>
            <p>Os jovens não precisam de entretenimento. Não precisam de extravagâncias nem de coisas supostamente "emocionantes". O que eles precisam é de propósito.</p>
            <p>Eles anseiam por homens mais velhos que caminhem ao lado deles, os ouçam e os desafiem. Tenho percebido que, quando damos aos jovens responsabilidades reais — liderar uma oração, compartilhar um testemunho ou servir de maneira prática — eles começam a assumir compromisso.</p>
            <p>Também tenho visto como é importante criar ambientes onde eles possam fazer perguntas difíceis sem serem repreendidos. Seja em uma conversa tarde da noite em uma lanchonete, em uma breve reflexão antes de um jogo de futebol ou servindo juntos em algum projeto, eles querem saber se essa fé realmente funciona na vida real.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> Construir uma Comunidade Sincera
            </h3>
            <p>Se queremos que os homens se abram, isso precisa começar conosco, como líderes. Quando estou disposto a admitir minhas próprias lutas e pedir ajuda por oração, isso cria espaço para que outros façam o mesmo. Para mim, o apóstolo Paulo é o maior de todos os exemplos que podemos encontrar nas Escrituras. Veja o que ele diz:</p>
            <blockquote className={styles.articleVerse}>
              "Nós os amamos tanto que compartilhamos com vocês não apenas as boas-novas de Deus, mas também nossa própria vida."
              <cite>— 1 Tessalonicenses 2:8</cite>
            </blockquote>
            <p>Paulo não apenas pregava o Evangelho, mas igualmente compartilhava a sua própria vida.</p>
            <p>Muitas são as vezes que os homens se escondem atrás de piadas ou conversas superficiais. Naturalmente os homens têm a tendência de se mostrar ou parecer "machões", fortes e invulneráveis, como se não tivessem fraquezas reais. Mas quando alguém diz: "Irmãos, esta é a área em que estou lutando contra a tentação esta semana", ou "Eu realmente caí alguns dias atrás", então a conversa muda para aquilo que realmente importa.</p>
            <p>Uma das formas que tenho visto isso crescer é através de círculos menores — pequenos grupos de 7 ou no máximo oito homens de confiança. Isso não acontece imediatamente em grandes grupos, mas em grupos de dois ou três homens, onde podem ser realmente honestos e transparentes, sem o temor de serem julgados. Com o tempo, essa cultura de vulnerabilidade saudável se espalha.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> Conquistar o Apoio Pastoral
            </h3>
            <p>Tantas e tantas vezes os pastores não incentivam o ministério de homens simplesmente porque estão extremamente sobrecarregados. O que descobri ao longo dos anos é que, quando apresento o ministério de homens como uma forma de fortalecer a própria visão geral do pastor — e não competir com ela — a conversa muda completamente.</p>
            <p>Deixo claro que meu objetivo não é criar mais um ministério isolado, mas formar homens que sejam mais fortemente encorajados a liderar em casa, amar suas esposas, discipular seus filhos e servir fielmente na igreja.</p>
            <p>A maioria dos pastores concordará que uma das maneiras mais importantes de construir uma igreja saudável é formar homens saudáveis e consagrados dentro de seus lares, liderando suas esposas e filhos em Cristo.</p>
            <p>Quando um pastor percebe uma maneira prática de levar os homens à maturidade espiritual, rapidamente passa a entender quão vital e indispensável o ministério de homens realmente pode ser.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>5.</span> Manter o Movimento Vivo
            </h3>
            <p>Um dos maiores desafios no ministério de homens é mantê-los engajados além de um único evento ou de uma curta temporada. É muito fácil encher um salão para um grande churrasco, uma pescaria ou retiro, mas é muito mais difícil ver homens caminhando consistentemente com Cristo meses e anos depois.</p>
            <p>Tenho descoberto que o movimento continua quando o discipulado se torna um ritmo de vida, e não apenas um momento de empolgação passageira.</p>
            <p>Isso significa construir estruturas onde os homens cresçam juntos semana após semana. Pequenos grupos, parcerias de oração e relacionamentos de mentoria têm muito mais impacto a longo prazo do que apenas um calendário cheio de grandes eventos.</p>
            <p>Eventos podem ser uma excelente porta de entrada, mas o discipulado acontece na rotina contínua da vida diária. Quando os homens veem amizades verdadeiras surgindo, prestação de contas sincera e crescimento espiritual real, eles permanecem e passam a crescer profundamente em seu envolvimento no Reino de Deus.</p>

            <div className={styles.articleConclusion}>
              <h3 className={styles.articleSubheading}>Um Chamado à Ação</h3>
              <p>Irmãos, aqui está a verdade principal: o ministério de homens não é uma opção ministerial.</p>
              <ul className={styles.articleQuestions}>
                <li>Se queremos igrejas fortes, precisamos de homens fortes.</li>
                <li>Se queremos que a próxima geração ande com Cristo, precisamos de homens mais velhos que se levantem para discipulá-los.</li>
                <li>Se queremos comunidade verdadeira, precisamos correr o risco — seja este qual for — da vulnerabilidade.</li>
              </ul>
              <p>Então aqui está meu desafio para você: comece com um homem. Convide-o para um café. Pergunte sinceramente como ele realmente está. Vá fundo nessa pergunta. Compartilhe um pouco da sua própria caminhada. Veja o exemplo de Paulo que mencionei acima. Ore com ele.</p>
              <p>Depois faça isso novamente com outro homem. E com outro homem, e com outro homem. Não espere por um programa perfeito ou pela aprovação de todos os líderes.</p>
              <p className={styles.closingQuestion}>Entre em ação. Lidere com coragem. E confie que Deus multiplicará seus esforços. E toda a Glória será somente Dele.</p>
            </div>
          </div>
        </article>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦</span>
        </div>

        {/* ── 5) O HOMEM QUE VOCÊ FOI CHAMADO A SER ── */}
        <article className={styles.article}>
          <div className={styles.articleHead}>
            <span className={styles.articleNumber}>04</span>
            <div>
              <span className={styles.articleCategory}>
                <span className={styles.categoryDot} /> Homens de Valor
              </span>
              <h2 className={styles.articleTitle}>
                O Homem Que Você Foi Chamado a Ser
                <span className={styles.articleSubtitle}>Um Chamado ao Autoexame</span>
              </h2>
            </div>
          </div>

          <div className={styles.articleBody}>
            <p>Vivemos em um tempo onde muitos homens aprenderam a construir uma imagem, mas poucos estão dispostos a confrontar a realidade do próprio coração. Há homens que aparentam força, mas vivem quebrados por dentro. Outros possuem conhecimento bíblico, mas perderam a sensibilidade espiritual. Alguns frequentam a igreja, porém nunca permitiram que Cristo transformasse verdadeiramente sua vida.</p>

            <p>A pergunta não é apenas: <em>"Quem você parece ser?"</em> A verdadeira pergunta é: <strong>"Quem você é diante de Deus?"</strong></p>

            <p>A Bíblia constantemente nos chama ao autoexame espiritual.</p>

            <blockquote className={styles.articleVerse}>
              "Examinai-vos a vós mesmos, se permaneceis na fé; provai-vos a vós mesmos."
              <cite>— 2 Coríntios 13:5</cite>
            </blockquote>

            <p>O maior perigo não é o fracasso visível, mas a ilusão espiritual invisível. Há homens que conseguem enganar pessoas, líderes, amigos e até familiares — mas ninguém consegue enganar a Deus.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>1.</span> O homem que Deus chamou você para ser
            </h3>
            <p>Deus nunca chamou o homem apenas para existir. Ele chamou o homem para refletir Seu caráter, liderar com responsabilidade, amar com integridade e andar em santidade.</p>
            <blockquote className={styles.articleVerse}>
              "Sede fortes e corajosos, todos vocês que esperam no Senhor!"
              <cite>— Salmos 31:24</cite>
            </blockquote>
            <blockquote className={styles.articleVerse}>
              "O Senhor procura homens segundo o seu coração."
              <cite>— 1 Samuel 13:14</cite>
            </blockquote>
            <p>O homem que Deus deseja formar não é perfeito, mas é quebrantado. Não é arrogante, mas ensinável. Não vive de aparência, mas de arrependimento contínuo.</p>
            <p>A masculinidade bíblica não é construída sobre orgulho, agressividade ou domínio. Ela é construída sobre responsabilidade espiritual, humildade e submissão a Deus.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>2.</span> Um chamado ao crente acomodado
            </h3>
            <p>Há homens que conhecem a verdade, mas esfriaram espiritualmente. Perderam a paixão pela oração, pela Palavra e pela presença de Deus. Tornaram-se religiosos por fora e vazios por dentro.</p>
            <blockquote className={styles.articleVerse}>
              "Tenho, porém, contra ti que abandonaste o teu primeiro amor."
              <cite>— Apocalipse 2:4</cite>
            </blockquote>
            <p>Deus não procura homens apenas ativos na igreja; Ele procura homens vivos espiritualmente.</p>
            <p>Frequentar cultos não substitui intimidade com Deus. Aparência espiritual não substitui transformação verdadeira.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>3.</span> Um alerta ao hipócrita
            </h3>
            <p>Jesus foi duro com homens religiosos que escondiam corrupção atrás da aparência.</p>
            <blockquote className={styles.articleVerse}>
              "Este povo honra-me com os lábios, mas o seu coração está longe de mim."
              <cite>— Mateus 15:8</cite>
            </blockquote>
            <p>A hipocrisia espiritual é perigosa porque cria uma falsa sensação de segurança. O hipócrita aprende a parecer santo sem permitir que Deus trate sua alma.</p>
            <p>O evangelho não é maquiagem espiritual. O evangelho é transformação.</p>
            <p>Deus não se impressiona com títulos, posições ou discursos. Ele olha para o coração.</p>
            <blockquote className={styles.articleVerse}>
              "O homem vê o exterior, porém o Senhor, o coração."
              <cite>— 1 Samuel 16:7</cite>
            </blockquote>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>4.</span> Um convite para aquele que está de fora
            </h3>
            <p>Talvez você tenha se afastado de Deus. Talvez carregue culpa, vergonha, feridas ou decepções. Talvez ache que já foi longe demais.</p>
            <p>Mas Cristo continua chamando homens cansados, feridos e perdidos.</p>
            <blockquote className={styles.articleVerse}>
              "Vinde a mim todos os que estais cansados e sobrecarregados, e eu vos aliviarei."
              <cite>— Mateus 11:28</cite>
            </blockquote>
            <p>Jesus não veio apenas para homens perfeitos — porque eles não existem. Ele veio para homens que reconhecem sua necessidade de salvação.</p>
            <p>Nenhum homem será transformado até admitir que precisa ser transformado.</p>

            <h3 className={styles.articleSubheading}>
              <span className={styles.subheadingNum}>5.</span> O verdadeiro autoexame
            </h3>
            <p>O autoexame espiritual não é um exercício de culpa; é um caminho de restauração. É parar diante de Deus e perguntar:</p>
            <ul className={styles.articleQuestions}>
              <li>Quem estou me tornando?</li>
              <li>Minha vida reflete Cristo?</li>
              <li>Estou vivendo uma fé genuína ou apenas uma aparência?</li>
              <li>Sou o homem que Deus me chamou para ser?</li>
            </ul>
            <blockquote className={styles.articleVerse}>
              "Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito inabalável."
              <cite>— Salmos 51:10</cite>
            </blockquote>
            <p>Homens fortes não são aqueles que escondem suas fraquezas. Homens fortes são aqueles que permitem que Deus transforme suas fraquezas em testemunho.</p>

            <div className={styles.articleConclusion}>
              <h3 className={styles.articleSubheading}>Conclusão</h3>
              <p>O mundo não precisa de homens perfeitos. Precisa de homens verdadeiros. Homens que tenham coragem de olhar para dentro, reconhecer suas falhas e permitir que Deus os molde segundo Sua vontade.</p>
              <p>O maior homem não é o que conquista multidões — é o que se rende completamente a Cristo.</p>
              <p>Hoje Deus continua chamando homens:</p>
              <ul className={styles.articleQuestions}>
                <li>para fora da superficialidade;</li>
                <li>para fora da hipocrisia;</li>
                <li>para fora da acomodação espiritual;</li>
                <li>para uma vida autêntica, santa e transformada.</li>
              </ul>
              <p className={styles.closingQuestion}>Você está se tornando o homem que Deus chamou você para ser?</p>
            </div>
          </div>
        </article>

        {/* CTA Footer */}
        <div className={styles.ctaFooter}>
          <p>Novos conteúdos são publicados regularmente. Acompanhe e fortaleça sua caminhada.</p>
          <a
            href="https://wa.me/5541999999999?text=Olá, gostaria de receber os conteúdos do Homens de Valor"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Receber conteúdos pelo WhatsApp →
          </a>
        </div>
      </div>
    </section>
  )
}
