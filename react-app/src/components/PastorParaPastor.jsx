import { useEffect, useState, useRef, useCallback } from 'react'
import styles from './PastorParaPastor.module.css'

// ── DADOS DOS ÁUDIOS ──
const audioData = [
  {
    id: 1,
    category: 'Introdução',
    title: 'De Pastor para Pastor — Áudio 01',
    desc: 'Palavra de encorajamento para pastores que servem com fidelidade no ministério.',
    duration: '--:--',
    date: '2026-05-06',
    audioSrc: '/Audio/pastor_pastor_01.mp4'
  },
  {
    id: 2,
    category: 'Introdução',
    title: 'De Pastor para Pastor — Áudio 02',
    desc: 'Palavra de encorajamento para pastores que servem com fidelidade no ministério.',
    duration: '--:--',
    date: '2026-05-06',
    audioSrc: '/Audio/pastor_pastor_02.mp4'
  },
  {
    id: 3,
    category: 'Introdução',
    title: 'De Pastor para Pastor — Áudio 03',
    desc: 'Palavra de encorajamento para pastores que servem com fidelidade no ministério.',
    duration: '--:--',
    date: '2026-05-06',
    audioSrc: '/Audio/pastor_pastor_03.mp4'
  }
]

const categories = ['Todos', ...new Set(audioData.map(a => a.category))]

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// ── Componente AudioCard ──
function AudioCard({ audio, index, isPlaying, currentTime, duration, onPlay, onPause, onSeek }) {
  const active = isPlaying !== false
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    onSeek(pct)
  }

  return (
    <div className={styles.audioCard} style={{ animationDelay: `${index * 0.06}s` }}>
      <div className={styles.cardNumber}>
        <span className={styles.cardNumberInner}>{String(audio.id).padStart(2, '0')}</span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardCategory}>
          <span className={styles.categoryDot} />
          {audio.category}
        </div>
        <h3 className={styles.cardTitle}>{audio.title}</h3>
        <p className={styles.cardDesc}>{audio.desc}</p>
        <div className={styles.cardMeta}>
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}>🕐</span>
            {audio.duration}
          </span>
          <span className={styles.metaItem}>
            <span className={styles.metaIcon}>📅</span>
            {new Date(audio.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
          </span>
        </div>
      </div>

      <div className={styles.playerWrapper}>
        <div className={styles.audioPlayer}>
          <button
            className={`${styles.playBtn} ${active && isPlaying ? styles.playBtnPlaying : ''}`}
            onClick={() => active && isPlaying ? onPause() : onPlay(audio)}
            aria-label={active && isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {active && isPlaying ? '❚❚' : '▶'}
          </button>

          <div className={styles.progressGroup}>
            <div className={styles.progressBar} onClick={handleProgressClick}>
              <div className={styles.progressFill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.timeRow}>
              <span>{formatTime(currentTime)}</span>
              <span>{active ? formatTime(duration) : audio.duration}</span>
            </div>
          </div>

          <button className={styles.speedBtn} title="Velocidade">
            1x
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Componente Principal ──
export default function PastorParaPastor() {
  const [filter, setFilter] = useState('Todos')
  const [playingId, setPlayingId] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Cleanup
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const filteredAudios = filter === 'Todos'
    ? audioData
    : audioData.filter(a => a.category === filter)

  const handlePlay = useCallback((audio) => {
    // Simulação — quando tiver áudios reais, usar Audio API
    if (playingId === audio.id && audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
      return
    }

    // Parar áudio anterior
    if (audioRef.current) {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }

    // Se tem fonte real de áudio
    if (audio.audioSrc) {
      const a = new Audio(audio.audioSrc)
      audioRef.current = a
      a.addEventListener('loadedmetadata', () => setDuration(a.duration))
      a.addEventListener('ended', () => {
        setIsPlaying(false)
        setCurrentTime(0)
        clearInterval(intervalRef.current)
      })
      a.play()

      intervalRef.current = setInterval(() => {
        setCurrentTime(a.currentTime)
      }, 200)

      setPlayingId(audio.id)
      setIsPlaying(true)
      setCurrentTime(0)
    } else {
      // Simulação para demonstração (sem arquivo de áudio real)
      const durationParts = audio.duration.split(':')
      const totalSecs = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1])
      setDuration(totalSecs)
      setPlayingId(audio.id)
      setIsPlaying(true)
      setCurrentTime(0)

      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= totalSecs) {
            clearInterval(intervalRef.current)
            setIsPlaying(false)
            return 0
          }
          return prev + 1
        })
      }, 1000)
    }
  }, [playingId])

  const handlePause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
    if (intervalRef.current) clearInterval(intervalRef.current)
    setIsPlaying(false)
  }, [])

  const handleSeek = useCallback((pct) => {
    const newTime = pct * duration
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }, [duration])

  const playingAudio = audioData.find(a => a.id === playingId)

  const totalDuration = audioData.reduce((sum, a) => {
    const parts = a.duration.split(':')
    return sum + parseInt(parts[0]) * 60 + parseInt(parts[1])
  }, 0)
  const totalHours = Math.floor(totalDuration / 3600)
  const totalMins = Math.round((totalDuration % 3600) / 60)

  return (
    <section className={styles.page}>

      {/* ── HERO ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroContent}>
          <span className={styles.badge}>✦ Áudio Pastoral</span>
          <h1 className={styles.heroTitle}>
            De Pastor<br />
            <em>para Pastor</em>
          </h1>
          <p className={styles.heroSub}>
            Palavras de encorajamento, orientação e consolo de quem conhece
            as alegrias e os desafios do ministério pastoral.
          </p>
          <p className={styles.heroAuthor}>— Nélio DaSilva</p>

          {/* Animated sound waves */}
          <div className={styles.soundWaves}>
            {[...Array(7)].map((_, i) => (
              <div key={i} className={styles.soundBar} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTEÚDO ── */}
      <div className={styles.container} id="audios-pastorais">

        {/* Stats */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{audioData.length}</div>
            <div className={styles.statLabel}>Áudios</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{categories.length - 1}</div>
            <div className={styles.statLabel}>Categorias</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>{totalHours > 0 ? `${totalHours}h${totalMins}` : `${totalMins}min`}</div>
            <div className={styles.statLabel}>de Conteúdo</div>
          </div>
        </div>

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

        {/* Filters */}
        <div className={styles.filters}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${filter === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Audio list */}
        {filteredAudios.length > 0 ? (
          <div className={styles.audioGrid}>
            {filteredAudios.map((audio, idx) => (
              <AudioCard
                key={audio.id}
                audio={audio}
                index={idx}
                isPlaying={playingId === audio.id ? isPlaying : false}
                currentTime={playingId === audio.id ? currentTime : 0}
                duration={playingId === audio.id ? duration : 0}
                onPlay={handlePlay}
                onPause={handlePause}
                onSeek={handleSeek}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>🎙️</div>
            <h3>Nenhum áudio nesta categoria</h3>
            <p>Selecione outra categoria para explorar mais conteúdos.</p>
          </div>
        )}

        {/* CTA Footer */}
        <div className={styles.ctaFooter}>
          <p>Novos áudios são publicados regularmente. Acompanhe e fortaleça seu ministério.</p>
          <a
            href="https://wa.me/5541999999999?text=Olá, gostaria de receber os novos áudios pastorais"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Receber novos áudios pelo WhatsApp →
          </a>
        </div>
      </div>

      {/* ── NOW PLAYING BAR ── */}
      {playingId && playingAudio && (
        <div className={styles.nowPlaying}>
          <button
            className={styles.nowPlayingBtn}
            onClick={() => isPlaying ? handlePause() : handlePlay(playingAudio)}
          >
            {isPlaying ? '❚❚' : '▶'}
          </button>

          <div className={styles.nowPlayingInfo}>
            <div className={styles.nowPlayingLabel}>Reproduzindo agora</div>
            <div className={styles.nowPlayingTitle}>{playingAudio.title}</div>
          </div>

          <div className={styles.nowPlayingProgress} onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            handleSeek((e.clientX - rect.left) / rect.width)
          }}>
            <div className={styles.nowPlayingFill} style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }} />
          </div>

          <span className={styles.nowPlayingTime}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button className={styles.nowPlayingClose} onClick={() => {
            handlePause()
            setPlayingId(null)
            setCurrentTime(0)
          }} aria-label="Fechar player">
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
