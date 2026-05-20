import { useEffect, useRef, useState } from 'react'
import styles from './AnseiosDaAlma.module.css'

// ── EPISÓDIOS ──────────────────────────────────────────────────────────────────
// Os arquivos ficam em /Audio/AnseiodaAlma/
const BASE = '/Audio/AnseiodaAlma/'

const episodios = [
  { id: 1,  titulo: 'Mais do que Você Possa Suportar',                        arquivo: 'WhatsApp Audio 2026-05-17 at 00.20.45.mp4' },
  { id: 2,  titulo: 'Quando Jesus Acalma o Nosso Mar Interior',               arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.29.mp4' },
  { id: 3,  titulo: 'Os Ídolos que nos Governam',                             arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.30.mp4' },
  { id: 4,  titulo: 'Em Tempos de Intensa Aflição',                           arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.31.mp4' },
  { id: 5,  titulo: 'Quando as Pessoas nos Ferem',                            arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53.mp4' },
  { id: 6,  titulo: 'Como e Quando a Alma Repousa',                           arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53 (1).mp4' },
  { id: 7,  titulo: 'Deus Está Mais Perto do que Parece Estar',               arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53 (2).mp4' },
  { id: 8,  titulo: 'Estabelecendo Novos Limites',                            arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53 (3).mp4' },
  { id: 9,  titulo: 'Abrindo a Alma Diante de Deus',                         arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.54.mp4' },
  { id: 10, titulo: 'Onde a Ofensa Encontra Morada',                          arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.39.mp4' },
  { id: 11, titulo: 'O Lugar onde a Graça Floresce',                          arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.39 (1).mp4' },
  { id: 12, titulo: 'A Paz que Não Oscila',                                   arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.40.mp4' },
  { id: 13, titulo: 'O que Depende de Você Já é Suficiente',                  arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.40 (1).mp4' },
  { id: 14, titulo: 'A Alma Não Foi Criada para Conflitos',                   arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.40 (2).mp4' },
  { id: 15, titulo: 'Cada Dia É uma Vida em Miniatura',                       arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.41.mp4' },
  { id: 16, titulo: 'A Palavra que Acalma a Alma (Especial de Natal)',        arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.41 (1).mp4' },
  { id: 17, titulo: 'O Governo que Traz Paz ao Coração',                      arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.42.mp4' },
  { id: 18, titulo: 'Um Reinado que Não Terá Fim (Especial de Natal)',        arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.42 (1).mp4' },
  { id: 19, titulo: 'Um Novo Tempo Começa Quando Deus Renova o Coração',      arquivo: 'WhatsApp Audio 2026-05-18 at 08.38.24.mp4' },
  { id: 20, titulo: 'Quando o Cansaço Fala Mais Alto',                        arquivo: 'WhatsApp Audio 2026-05-18 at 08.41.09.mp4' },
  { id: 21, titulo: 'Lembre-se!',                                             arquivo: 'WhatsApp Audio 2026-05-18 at 08.42.08.mp4' },
  { id: 22, titulo: 'O Essencial que Sustenta a Alma',                        arquivo: 'WhatsApp Audio 2026-05-18 at 08.45.10.mp4' },
  { id: 23, titulo: 'Alinhando Nossas Expectativas às de Deus',               arquivo: 'WhatsApp Audio 2026-05-18 at 08.47.06.mp4' },
  { id: 24, titulo: 'Deus Esteve Aqui!',                                      arquivo: 'WhatsApp Audio 2026-05-18 at 09.02.28.mp4' },
  { id: 25, titulo: 'Glorificando a Deus até o Último Fôlego',                arquivo: 'WhatsApp Audio 2026-05-18 at 09.09.21.mp4' },
  { id: 26, titulo: 'Alívio ou Paz?',                                         arquivo: 'WhatsApp Audio 2026-05-18 at 09.11.14.mp4' },
  { id: 27, titulo: 'Quando a Alma Sangra por Causa de uma Traição',          arquivo: 'WhatsApp Audio 2026-05-18 at 09.13.24.mp4' },
  { id: 28, titulo: 'Transformando Lágrimas em Sementes de Fé',               arquivo: 'WhatsApp Audio 2026-05-18 at 09.14.50.mp4' },
  { id: 29, titulo: 'Quando Deus Reescreve a História',                       arquivo: 'WhatsApp Audio 2026-05-18 at 08.38.24 (1).mp4' },
  { id: 30, titulo: 'O Ano Novo Começa no Coração',                           arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.29 (1).mp4' },
  { id: 31, titulo: 'Quando a Alma Persevera Quando Tudo Parece Ruir', arquivo: 'WhatsApp Audio 2026-05-18 at 15.28.09.mp4' },
  { id: 32, titulo: 'Episódio 4 - As Podas de Deus Que Produzem Frutos', arquivo: 'WhatsApp Audio 2026-05-18 at 15.29.39.mp4' },
  { id: 33, titulo: 'A Alma Que Se Aquieta Para Ouvir a Deus', arquivo: 'WhatsApp Audio 2026-05-18 at 15.32.04.mp4' },
  { id: 34, titulo: 'Episódio 5 - Lembre-se do Que Te Cura - Esqueça do Que Te Fere', arquivo: 'WhatsApp Audio 2026-05-18 at 15.33.45.mp4' },
  { id: 35, titulo: 'Episódio 12 - Decidido a Não Me Desencorajar!', arquivo: 'WhatsApp Audio 2026-05-18 at 15.34.17.mp4' },
  { id: 36, titulo: 'O Lugar Onde a Graça Floresce', arquivo: 'WhatsApp Audio 2026-05-18 at 15.35.04.mp4' },
  { id: 37, titulo: 'Quando Tudo Balança, Mas Deus Permanece Firme', arquivo: 'WhatsApp Audio 2026-05-18 at 15.36.23.mp4' },
  { id: 38, titulo: 'Ep 33 - Anseios da Alma - "Cristãos Mal Nutridos"', arquivo: 'WhatsApp Audio 2026-05-18 at 15.39.23.mp4' },
  { id: 39, titulo: 'Ep 38 - Quando a Expectativa se Torna um Peso', arquivo: 'WhatsApp Audio 2026-05-18 at 15.40.08.mp4' },
  { id: 40, titulo: 'Crescimento Que Nasce da Dor', arquivo: 'WhatsApp Audio 2026-05-18 at 15.42.07.mp4' },
  { id: 41, titulo: 'Nas Mãos Que Não Têm Fim', arquivo: 'WhatsApp Audio 2026-05-18 at 15.42.32.mp4' },
  { id: 42, titulo: 'O Tempo de Deus Não é Atraso, é Preparo', arquivo: 'WhatsApp Audio 2026-05-18 at 15.43.38.mp4' },
  { id: 43, titulo: 'Alívio ou Paz? (Anseios da Alma)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.44.31.mp4' },
  { id: 44, titulo: 'Você Ora, Deus Ouve, Jesus Intercede', arquivo: 'WhatsApp Audio 2026-05-18 at 15.44.52.mp4' },
  { id: 45, titulo: 'Quando a Correria Rouba a Nossa Alegria', arquivo: 'WhatsApp Audio 2026-05-18 at 15.45.23.mp4' },
  { id: 46, titulo: 'Quando o “Eu Pensei” e “Eu Senti” Nos Afasta de Deus', arquivo: 'WhatsApp Audio 2026-05-18 at 15.46.31.mp4' },
  { id: 47, titulo: 'Quando a Fé Espera em Silêncio', arquivo: 'WhatsApp Audio 2026-05-18 at 15.47.05.mp4' },
  { id: 48, titulo: 'O Silêncio Que Vence a Mentira', arquivo: 'WhatsApp Audio 2026-05-18 at 15.48.59.mp4' },
  { id: 49, titulo: 'Santuário Vivo', arquivo: 'WhatsApp Audio 2026-05-18 at 15.49.47.mp4' },
  { id: 50, titulo: 'Quando Jesus Acalma o Nosso Mar Interior', arquivo: 'WhatsApp Audio 2026-05-18 at 15.50.09.mp4' },
  { id: 51, titulo: 'Os Ídolos Que Nos Governam', arquivo: 'WhatsApp Audio 2026-05-18 at 15.50.40.mp4' },
  { id: 52, titulo: 'Quando a Alma Corre no Vazio', arquivo: 'WhatsApp Audio 2026-05-18 at 15.51.25.mp4' },
  { id: 53, titulo: 'Quando a Ferida Não Entra, a Alma Permanece Forte', arquivo: 'WhatsApp Audio 2026-05-18 at 15.52.04.mp4' },
  { id: 54, titulo: 'Do Questionamento à Adoração (Salmos 77:13-14)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.52.32.mp4' },
  { id: 55, titulo: 'Serenidade (Isaías 26:3)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.54.24.mp4' },
  { id: 56, titulo: 'Quando a Alma Respeita o Ritmo de Deus (Salmos 19:1)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.54.50.mp4' },
  { id: 57, titulo: 'A Batalha Invisível da Alma (Romanos 12:1-2)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.55.21.mp4' },
  { id: 58, titulo: 'Eu Sou - A Resposta Para o Vazio (João 4:25-26)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.55.46.mp4' },
  { id: 59, titulo: 'Caminhos Firmes, Alma em Paz (Salmos 119:5-6)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.56.10.mp4' },
  { id: 60, titulo: 'Quando a Alma Decide Permanecer (Apocalipse 2:10)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.56.51.mp4' },
  { id: 61, titulo: 'Muros Que Protegem a Alma', arquivo: 'WhatsApp Audio 2026-05-18 at 15.57.46.mp4' },
  { id: 62, titulo: 'Onde a Ofensa Encontra Morada', arquivo: 'WhatsApp Audio 2026-05-18 at 15.58.55.mp4' },
  { id: 63, titulo: 'Tudo É Efêmero', arquivo: 'WhatsApp Audio 2026-05-18 at 15.59.32.mp4' },
  { id: 64, titulo: 'Quando as Pessoas Nos Ferem', arquivo: 'WhatsApp Audio 2026-05-18 at 16.00.02.mp4' },
  { id: 65, titulo: 'O Único Real Descanso', arquivo: 'WhatsApp Audio 2026-05-18 at 16.00.15.mp4' },
  { id: 66, titulo: 'Transformando Fracassos em Vitórias', arquivo: 'WhatsApp Audio 2026-05-18 at 16.01.05.mp4' },
  { id: 67, titulo: 'A Fidelidade Que Restaura as Ruínas da Alma', arquivo: 'WhatsApp Audio 2026-05-18 at 16.01.47.mp4' },
  { id: 68, titulo: 'A Ilusão da Segurança Material (Tiago 5:2)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.02.06.mp4' },
  { id: 69, titulo: 'Esperança em Tempos de Decepções (Romanos 5:5)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.02.41.mp4' },
  { id: 70, titulo: 'A Brevidade Que Desperta a Alma (Tiago 4:13-16)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.03.59.mp4' },
  { id: 71, titulo: 'O Vazio Que Só Deus Pode Preencher (João 14:27)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.04.24.mp4' },
  { id: 72, titulo: 'Quando o Invisível Não é Revelado (Deut. 29:29)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.04.44.mp4' },
  { id: 73, titulo: 'Quando Não Há Como Voltar Atrás (2 Samuel 14:14)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.05.07.mp4' },
  { id: 74, titulo: 'Quando Você Não Entende o Caminho (Isaías 46:9-10)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.06.05.mp4' },
  { id: 75, titulo: 'Quando o Passado Volta à Memória (Gênesis 42:21)', arquivo: 'WhatsApp Audio 2026-05-18 at 16.06.24.mp4' },
]

// ── PLAYER COMPONENT ────────────────────────────────────────────────────────
function AudioPlayer({ episodio, onEnded }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrent] = useState(0)
  const [volume, setVolume] = useState(1)

  // Reset ao mudar episódio
  useEffect(() => {
    setPlaying(false)
    setProgress(0)
    setCurrent(0)
    setDuration(0)
  }, [episodio.id])

  const fmt = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  const onTimeUpdate = () => {
    const a = audioRef.current
    setCurrent(a.currentTime)
    setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0)
  }

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const onSeek = (e) => {
    const a = audioRef.current
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    a.currentTime = pct * a.duration
  }

  const onVolumeChange = (e) => {
    const v = parseFloat(e.target.value)
    setVolume(v)
    audioRef.current.volume = v
  }

  const handleEnded = () => {
    setPlaying(false)
    setProgress(0)
    setCurrent(0)
    onEnded && onEnded()
  }

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={BASE + episodio.arquivo}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Controles */}
      <button
        className={styles.playBtn}
        onClick={togglePlay}
        aria-label={playing ? 'Pausar' : 'Reproduzir'}
      >
        {playing
          ? <svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          : <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
        }
      </button>

      <div className={styles.playerMiddle}>
        <div
          className={styles.progressBar}
          onClick={onSeek}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          tabIndex={0}
        >
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          <div className={styles.progressThumb} style={{ left: `${progress}%` }} />
        </div>
        <div className={styles.times}>
          <span>{fmt(currentTime)}</span>
          <span>{duration ? fmt(duration) : '--:--'}</span>
        </div>
      </div>

      <div className={styles.volumeControl}>
        <span className={styles.volIcon}>🔊</span>
        <input
          type="range" min={0} max={1} step={0.05}
          value={volume}
          onChange={onVolumeChange}
          className={styles.volSlider}
          aria-label="Volume"
        />
      </div>
    </div>
  )
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function AnseiosDaAlma() {
  const [ativo, setAtivo] = useState(null)
  const [paginaAtiva, setPaginaAtiva] = useState(1)
  const epsPorPagina = 10

  useEffect(() => { window.scrollTo(0, 0) }, [])

  const episodioAtivo = episodios.find(e => e.id === ativo)

  const tocarProximo = () => {
    if (!ativo) return
    const idx = episodios.findIndex(e => e.id === ativo)
    const prox = episodios.slice(idx + 1).find(e => e.arquivo)
    if (prox) setAtivo(prox.id)
  }

  // Lógica de Paginação
  const idxUltimoEpisodio = paginaAtiva * epsPorPagina
  const idxPrimeiroEpisodio = idxUltimoEpisodio - epsPorPagina
  const episodiosAtuais = episodios.slice(idxPrimeiroEpisodio, idxUltimoEpisodio)
  const totalPaginas = Math.ceil(episodios.length / epsPorPagina)

  const paginate = (numero) => {
    setPaginaAtiva(numero)
    // Rolar suavemente para o início da lista de episódios ao mudar de página
    const el = document.getElementById('episodios')
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroParticles} aria-hidden>
          {[...Array(14)].map((_, i) => (
            <div key={i} className={styles.particle} style={{ '--i': i }} />
          ))}
        </div>
        <div className={styles.heroContent}>
          <span className={styles.badge}>🎙 Série de Áudios Espirituais</span>
          <h1 className={styles.heroTitle}>
            Anseios<br />
            <em>da Alma</em>
          </h1>
          <p className={styles.heroSub}>
            Um chamado ao coração de Deus — mensagens curtas, diretas e intensas
            para despertar a consciência espiritual e reacender a fome por Deus.
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

        {/* ── INTRO ── */}
        <div className={styles.introSection}>
          <div className={styles.introImageWrapper}>
            <img 
              src="/anseios-cover.jpeg" 
              alt="Anseios da Alma" 
              className={styles.introImage} 
            />
          </div>
          
          <div className={styles.introBlock}>
            <p className={styles.introLead}>
              Há um lugar dentro do ser humano que nenhuma conquista consegue preencher,
              nenhuma resposta humana consegue satisfazer e nenhuma rotina consegue silenciar por completo.
            </p>
            <p>
              É o lugar onde a alma respira, sente, chora, busca e se volta —
              consciente ou inconscientemente — para o Eterno.
            </p>
            <p>
              A série <strong>"Anseios da Alma"</strong> nasce exatamente desse espaço interior:
              profundo, sensível e, ao mesmo tempo, inquieto. Aqui, não tratamos apenas de pensamentos
              ou reflexões superficiais, mas das questões mais essenciais da existência humana diante de Deus.
            </p>
          </div>

          <div className={styles.introHighlight}>
            <p className={styles.introHighlightText}>
              São mensagens curtas, diretas e intensas — para tocar a alma com verdade,
              despertar consciência espiritual e reacender a fome por Deus. Os temas abordados tratam
              daquilo que é invisível aos olhos, mas decisivo para a vida:
            </p>
            <ul className={styles.temasList}>
              {[
                'identidade e vazio interior',
                'propósito e direção',
                'dor, fé e esperança',
                'arrependimento e restauração',
                'o desejo da alma por Deus',
                'a paz que ultrapassa o entendimento',
              ].map((tema, i) => (
                <li key={i}><span className={styles.temasIcon}>✦</span>{tema}</li>
              ))}
            </ul>
          </div>

          <div className={styles.introConclusao}>
            <blockquote className={styles.introQuote}>
              Que cada mensagem seja como um sopro de eternidade no meio da sua rotina.
              Que cada reflexão seja um chamado ao retorno. E que, ao ouvir, você não apenas
              pense — mas seja tocado, despertado e conduzido a um encontro mais profundo com o Pai.
            </blockquote>
            <p className={styles.bemVindo}>
              Bem-vindo àquilo que a alma, em silêncio, sempre buscou:
              <br />
              <strong>Anseios da Alma — um chamado ao coração de Deus.</strong>
            </p>
          </div>
        </div>

        {/* ── DIVISOR ── */}
        <div className={styles.divider}>
          <span className={styles.dividerText}>✦ Episódios da Série ✦</span>
        </div>

        {/* ── LISTA DE EPISÓDIOS ── */}
        <div className={styles.episodeList} id="episodios">
          {episodiosAtuais.map((ep, idx) => {
            const isAtivo = ativo === ep.id
            const semAudio = !ep.arquivo
            return (
              <article
                key={ep.id}
                className={`${styles.episodeCard} ${isAtivo ? styles.episodeCardAtivo : ''} ${semAudio ? styles.episodeCardBreve : ''}`}
                style={{ '--delay': `${idx * 0.045}s` }}
              >
                <div className={styles.epNumero}>
                  {String(ep.id).padStart(2, '0')}
                </div>

                <div className={styles.epBody}>
                  <div className={styles.epTags}>
                    <span className={styles.tag}>Anseios da Alma</span>
                    {semAudio && <span className={styles.tagBreve}>Em breve</span>}
                  </div>
                  <h2 className={styles.epTitulo}>{ep.titulo}</h2>

                  {isAtivo && episodioAtivo && !semAudio && (
                    <AudioPlayer
                      episodio={episodioAtivo}
                      onEnded={tocarProximo}
                    />
                  )}

                  {!semAudio && (
                    <button
                      className={`${styles.btnPlay} ${isAtivo ? styles.btnPlayAtivo : ''}`}
                      onClick={() => setAtivo(isAtivo ? null : ep.id)}
                      aria-label={isAtivo ? 'Fechar player' : `Ouvir: ${ep.titulo}`}
                      id={`ep-btn-${ep.id}`}
                    >
                      {isAtivo ? '▼ Fechar' : '▶ Ouvir agora'}
                    </button>
                  )}
                </div>

                {/* ícone decorativo */}
                <div className={styles.epWave} aria-hidden>
                  {isAtivo ? '🎙' : '🎵'}
                </div>
              </article>
            )
          })}
        </div>

        {/* ── CONTROLES DE PAGINAÇÃO ── */}
        {totalPaginas > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageBtn}
              onClick={() => paginate(paginaAtiva - 1)}
              disabled={paginaAtiva === 1}
              aria-label="Página anterior"
            >
              {'<'}
            </button>
            
            {[...Array(totalPaginas)].map((_, i) => {
              const num = i + 1;
              // Mostrar apenas algumas páginas em volta da atual
              if (
                num === 1 || 
                num === totalPaginas || 
                (num >= paginaAtiva - 1 && num <= paginaAtiva + 1)
              ) {
                return (
                  <button
                    key={num}
                    onClick={() => paginate(num)}
                    className={`${styles.pageBtn} ${paginaAtiva === num ? styles.pageBtnAtivo : ''}`}
                  >
                    {num}
                  </button>
                )
              }
              // Renderizar elipse (...) se necessário
              if (num === paginaAtiva - 2 || num === paginaAtiva + 2) {
                return <span key={num} className={styles.pageEllipsis}>...</span>
              }
              return null;
            })}

            <button
              className={styles.pageBtn}
              onClick={() => paginate(paginaAtiva + 1)}
              disabled={paginaAtiva === totalPaginas}
              aria-label="Próxima página"
            >
              {'>'}
            </button>
          </div>
        )}

        {/* ── RODAPÉ ── */}
        <div className={styles.ctaFooter}>
          <div className={styles.ctaIcon} aria-hidden>✦</div>
          <p className={styles.ctaText}>
            Novos episódios são adicionados regularmente. Volte sempre para
            continuar sendo tocado pela Palavra e conduzido à presença de Deus.
          </p>
          <p className={styles.ctaAuthor}>
            — Série "Anseios da Alma" · Nélio DaSilva
          </p>
        </div>

      </div>
    </section>
  )
}
