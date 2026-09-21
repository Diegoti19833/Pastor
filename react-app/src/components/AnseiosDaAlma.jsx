import { useEffect, useRef, useState } from 'react'
import styles from './AnseiosDaAlma.module.css'

// ── EPISÓDIOS ──────────────────────────────────────────────────────────────────
// Os arquivos ficam em /Audio/AnseiodaAlma/
const BASE = '/Audio/AnseiodaAlma/'

const episodios = [
  { id: 1,  titulo: 'Mais do que você possa suportar', arquivo: 'WhatsApp Audio 2026-05-17 at 00.20.45.mp4' },
  { id: 2,  titulo: 'A alma não foi criada para conflitos', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.29 (1).mp4' },
  { id: 3,  titulo: 'A palavra que é calma a alma', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.30.mp4' },
  { id: 4,  titulo: 'Um reenado sem fim deste especial de Natal', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.31.mp4' },
  { id: 5,  titulo: 'Lembre-se', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53 (1).mp4' },
  { id: 6,  titulo: 'O essencial que sustenta a alma, e, inclusive, há as capítulos do universo 13', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53 (2).mp4' },
  { id: 7,  titulo: 'Alinhando as nossas expectativas, as de Deus', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.53 (3).mp4' },
  { id: 8,  titulo: 'Deus esteve aqui', arquivo: 'WhatsApp Audio 2026-05-17 at 00.36.54.mp4' },
  { id: 9,  titulo: 'Bom dia, a Belia querida pensando em orando por você aqui no Gabriel, por toda', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.39 (1).mp4' },
  { id: 10,  titulo: 'Vivendo para o essencial', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.40 (1).mp4' },
  { id: 11,  titulo: 'O médico das alma esferidas, marcos capítulos dois, 17 levos, não somos que tem', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.40 (2).mp4' },
  { id: 12,  titulo: 'Abatidos, mas não destruídos', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.40.mp4' },
  { id: 13,  titulo: 'Senhor Deus de pai e nome de Jesus', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.41 (1).mp4' },
  { id: 14,  titulo: 'Começando novo ano com um novo coração', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.41.mp4' },
  { id: 15,  titulo: 'O poder de uma vida tranquila', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.42 (1).mp4' },
  { id: 16,  titulo: 'A lucidez da alma diante do fim', arquivo: 'WhatsApp Audio 2026-05-17 at 01.01.42.mp4' },
  { id: 17,  titulo: 'Tópico, Lugar onde a graça flores', arquivo: 'WhatsApp Audio 2026-05-18 at 08.38.24 (1).mp4' },
  { id: 18,  titulo: 'As Anseios da Alma, episódio 25, tópico, glorificando o Senhor até o último', arquivo: 'WhatsApp Audio 2026-05-18 at 08.41.09.mp4' },
  { id: 19,  titulo: 'Enseios da Alma, quando a expectativa se torna um peso, gênera minha, eu', arquivo: 'WhatsApp Audio 2026-05-18 at 08.42.08.mp4' },
  { id: 20,  titulo: 'Enseios está Alma, quando a alma se sente pequena, da vida não sabe o 138, o', arquivo: 'WhatsApp Audio 2026-05-18 at 08.45.10.mp4' },
  { id: 21,  titulo: 'Crescimento que nasce da dor', arquivo: 'WhatsApp Audio 2026-05-18 at 08.47.06.mp4' },
  { id: 22,  titulo: 'Abrindo o coração de Deus', arquivo: 'WhatsApp Audio 2026-05-18 at 09.02.28.mp4' },
  { id: 23,  titulo: 'Transformando lágrimas e sementes de fele', arquivo: 'WhatsApp Audio 2026-05-18 at 09.09.21.mp4' },
  { id: 24,  titulo: 'Tópico quando a alma sangre por causa de uma traição', arquivo: 'WhatsApp Audio 2026-05-18 at 09.11.14.mp4' },
  { id: 25,  titulo: 'Alívio ou paz', arquivo: 'WhatsApp Audio 2026-05-18 at 09.13.24.mp4' },
  { id: 26,  titulo: 'Mensagem Espiritual (30)', arquivo: 'WhatsApp Audio 2026-05-18 at 09.14.50.mp4' },
  { id: 27,  titulo: 'A alma que persevera quando tudo parece ruir', arquivo: 'WhatsApp Audio 2026-05-18 at 15.28.09.mp4' },
  { id: 28,  titulo: 'Episódio número 3, título, a alma que se a queda para ouvir a Deus', arquivo: 'WhatsApp Audio 2026-05-18 at 15.29.39.mp4' },
  { id: 29,  titulo: 'Mensagem Espiritual (33)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.32.04.mp4' },
  { id: 30,  titulo: 'Mensagem Espiritual (34)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.33.45.mp4' },
  { id: 31,  titulo: 'Tópico, decidido a Naomi desde em corajar', arquivo: 'WhatsApp Audio 2026-05-18 at 15.34.17.mp4' },
  { id: 32,  titulo: 'É episódio 24, tópico, quando tudo balança, mas Deus permanece firme', arquivo: 'WhatsApp Audio 2026-05-18 at 15.36.23.mp4' },
  { id: 33,  titulo: 'Mensagem Espiritual (41)', arquivo: 'WhatsApp Audio 2026-05-18 at 15.42.32.mp4' },
  { id: 34,  titulo: 'O tempo de Deus não é atrás, é preparado', arquivo: 'WhatsApp Audio 2026-05-18 at 15.43.38.mp4' },
  { id: 35,  titulo: 'Deus sou ove, Jesus, Intercede, e abrê-los o capitão de sete verso de cinco', arquivo: 'WhatsApp Audio 2026-05-18 at 15.45.23.mp4' },
  { id: 36,  titulo: 'Quando a correria rouba a nossa alegria, e joa capítulo 9, versos 25, leimos', arquivo: 'WhatsApp Audio 2026-05-18 at 15.46.31.mp4' },
  { id: 37,  titulo: 'Quando eu pensei, o Elcentinho nos afasta de Deus', arquivo: 'WhatsApp Audio 2026-05-18 at 15.47.05.mp4' },
  { id: 38,  titulo: 'Quando a fé espera em siles, ebreus 11, 1, lemos', arquivo: 'WhatsApp Audio 2026-05-18 at 15.48.59.mp4' },
  { id: 39,  titulo: 'O silêncio que veja se a mentira, a poucas dores tão profundas, quanto o', arquivo: 'WhatsApp Audio 2026-05-18 at 15.49.47.mp4' },
  { id: 40,  titulo: 'Santo-Ariom Vivo, Paulo I', arquivo: 'WhatsApp Audio 2026-05-18 at 15.50.09.mp4' },
  { id: 41,  titulo: 'Quando Jesus acalma o mar interior, Marcos capítulo 4, verá-se 39, vemos, ele', arquivo: 'WhatsApp Audio 2026-05-18 at 15.50.40.mp4' },
  { id: 42,  titulo: 'Os ídulos que nos governam', arquivo: 'WhatsApp Audio 2026-05-18 at 15.51.25.mp4' },
  { id: 43,  titulo: 'Quando a alma corre, aceleradamente no vazio, gerenmias que a pitodou em este', arquivo: 'WhatsApp Audio 2026-05-18 at 15.52.04.mp4' },
  { id: 44,  titulo: 'Quando a ferida não entra, a alma permanece forte', arquivo: 'WhatsApp Audio 2026-05-18 at 15.52.32.mp4' },
  { id: 45,  titulo: 'Do questionamento, a adoração, não só um 77, versetreze, 14 lemos, os seus', arquivo: 'WhatsApp Audio 2026-05-18 at 15.54.24.mp4' },
  { id: 46,  titulo: 'Serenidade', arquivo: 'WhatsApp Audio 2026-05-18 at 15.54.50.mp4' },
  { id: 47,  titulo: 'Quando a alma respeita o ritmo de Deus, salvo 19, os céus proclamam agora de', arquivo: 'WhatsApp Audio 2026-05-18 at 15.55.21.mp4' },
  { id: 48,  titulo: 'A batalha invisível da Alma, o posto-o Paulo e Romano-Os Doze, não se amouvam', arquivo: 'WhatsApp Audio 2026-05-18 at 15.55.46.mp4' },
  { id: 49,  titulo: 'Eu sou a resposta para o vazio', arquivo: 'WhatsApp Audio 2026-05-18 at 15.56.10.mp4' },
  { id: 50,  titulo: 'Caminhos firmes, alma em paz', arquivo: 'WhatsApp Audio 2026-05-18 at 15.59.32.mp4' },
  { id: 51,  titulo: 'Quando a alma decide permanecer', arquivo: 'WhatsApp Audio 2026-05-18 at 16.00.02.mp4' },
  { id: 52,  titulo: 'Onde a ofensa em contra morada', arquivo: 'WhatsApp Audio 2026-05-18 at 16.01.47.mp4' },
  { id: 53,  titulo: 'Tudo é femero', arquivo: 'WhatsApp Audio 2026-05-18 at 16.02.06.mp4' },
  { id: 54,  titulo: 'Quando as pessoas serem, e o humano nos capítulo 12, verso 18, Paulo disse, se', arquivo: 'WhatsApp Audio 2026-05-18 at 16.02.41.mp4' },
  { id: 55,  titulo: 'O único real de escasso, Mateus Capitrolose 28 Jesus diz, vim de amin todos os', arquivo: 'WhatsApp Audio 2026-05-18 at 16.03.59.mp4' },
  { id: 56,  titulo: 'Transformando fracassos em itórias', arquivo: 'WhatsApp Audio 2026-05-18 at 16.04.24.mp4' },
  { id: 57,  titulo: 'A fidelidade que restaura as ruínas da alma, lamentações, capitão três, treinta', arquivo: 'WhatsApp Audio 2026-05-18 at 16.04.44.mp4' },
  { id: 58,  titulo: 'A ilusão da segurança material, Thiago, capítulo 5, verse 2, ele diz, a Riqueza', arquivo: 'WhatsApp Audio 2026-05-18 at 16.05.07.mp4' },
  { id: 59,  titulo: 'Tia-go, capítulo 4, 13, 16, ele disse, ou são agora', arquivo: 'WhatsApp Audio 2026-05-18 at 16.06.05.mp4' },
  { id: 60,  titulo: 'A vida simples é uma vida forte, Lucas, a Petrisa 6, R$10, Jesus diz que a FI é', arquivo: 'WhatsApp Audio 2026-05-18 at 16.06.24.mp4' },
  { id: 61,  titulo: 'O Brasil que só Deus pode prejear, e joga a tors de 27, Jesus, 10 chulhos a', arquivo: 'WhatsApp Audio 2026-05-18 at 16.06.41.mp4' },
  { id: 62,  titulo: 'Quando o invisível não é revelado, da turonôme 29, 29 lemos as coisas em', arquivo: 'WhatsApp Audio 2026-05-18 at 16.07.16.mp4' },
  { id: 63,  titulo: 'Quando não há como voltar atrás', arquivo: 'WhatsApp Audio 2026-05-18 at 16.07.54.mp4' },
  { id: 64,  titulo: 'Quando você não entende o caminho', arquivo: 'WhatsApp Audio 2026-05-18 at 16.08.22.mp4' },
  { id: 65,  titulo: 'Quando o passado volta à memória', arquivo: 'WhatsApp Audio 2026-05-18 at 16.08.48.mp4' },
  { id: 66,  titulo: 'O agora é o único tempo que possuímos', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.04.52.mp4' },
  { id: 67,  titulo: 'Como e quando a alma reposa', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.13.19.mp4' },
  { id: 68,  titulo: 'O conflito dos anseios da alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.15.00.mp4' },
  { id: 69,  titulo: 'A vitória silenciosa da alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.16.34.mp4' },
  { id: 70,  titulo: 'Aceitação não é desistência — é compreensão', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.17.35.mp4' },
  { id: 71,  titulo: 'A mente indisciplinada cria as suas próprias prisões', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.18.42 (1).mp4' },
  { id: 72,  titulo: 'A força do firme silêncio', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.19.29 (1).mp4' },
  { id: 73,  titulo: 'Poucos bens, deixa a alma muito mais tranquila', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.20.15 (1).mp4' },
  { id: 74,  titulo: 'O que depende de você já é suficiente', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.20.57.mp4' },
  { id: 75,  titulo: 'O conforto que aprisiona a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.21.55.mp4' },
  { id: 76,  titulo: 'A travessia que molda a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.22.45.mp4' },
  { id: 77,  titulo: 'Quando a alma define o caminho', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.24.00.mp4' },
  { id: 78,  titulo: 'Alinhamento da alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.24.53.mp4' },
  { id: 79,  titulo: 'Não reclame do mundo — aprenda com ele', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.28.33.mp4' },
  { id: 80,  titulo: 'Sofrer antes do tempo é sofrer em vão', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.30.41.mp4' },
  { id: 81,  titulo: 'O tempo revela o que a pressa distorce', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.31.18.mp4' },
  { id: 82,  titulo: 'Não é sobre ser forte, é sobre confiar', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.40.22.mp4' },
  { id: 83,  titulo: 'Deixando o peso para trás', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.48.00.mp4' },
  { id: 84,  titulo: 'Libertos para uma nova vida', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.55.50.mp4' },
  { id: 85,  titulo: 'Olhos guardados — alma restaurada', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 11.58.09.mp4' },
  { id: 86,  titulo: 'Com o foco na eternidade', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.01.09.mp4' },
  { id: 87,  titulo: 'A esperança que vem da Palavra', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.02.06.mp4' },
  { id: 88,  titulo: 'Cair não é o fim', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.05.22.mp4' },
  { id: 89,  titulo: 'O descanso de quem confia', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.07.16.mp4' },
  { id: 90,  titulo: 'Quem anda na luz não é surpreendido — é sustentado', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.08.49.mp4' },
  { id: 91,  titulo: 'Não se torne escravo do conforto', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.10.44.mp4' },
  { id: 92,  titulo: 'O perigo da alma fechada', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.14.28.mp4' },
  { id: 93,  titulo: 'Entre confiar e controlar', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.15.09.mp4' },
  { id: 94,  titulo: 'Quando a alma para de reclamar', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.15.38.mp4' },
  { id: 95,  titulo: 'O descanso que aguarda os fiéis', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.16.08.mp4' },
  { id: 96,  titulo: 'A beleza do verdor que permanece', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.16.42.mp4' },
  { id: 97,  titulo: 'Tudo tem um fim', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.18.23.mp4' },
  { id: 98,  titulo: 'O equilíbrio que fortalece a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.18.52.mp4' },
  { id: 99,  titulo: 'A dor ensina o que o prazer não revela', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.19.13.mp4' },
  { id: 100,  titulo: 'Quem não se dobra… quebra!', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.20.42.mp4' },
  { id: 101,  titulo: 'Poucos bens, deixa a alma muito mais tranquila', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.22.30.mp4' },
  { id: 102,  titulo: 'Eu cuidarei de você!', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.22.56.mp4' },
  { id: 103,  titulo: 'Não confunda necessidade com desejo', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.23.19.mp4' },
  { id: 104,  titulo: 'A fortuna muda, o caráter permanece', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.24.54.mp4' },
  { id: 105,  titulo: 'O brilho que vence as trevas', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.25.35.mp4' },
  { id: 106,  titulo: 'Quando o aplauso rouba a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.26.27.mp4' },
  { id: 107,  titulo: 'Onde estão os olhos do Senhor', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.27.00.mp4' },
  { id: 108,  titulo: 'A tragédia da luz invisível', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.27.29.mp4' },
  { id: 109,  titulo: 'Descobrindo o que agrada ao Senhor', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.28.08.mp4' },
  { id: 110,  titulo: 'A plenitude da reconciliação', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.28.42.mp4' },
  { id: 111,  titulo: 'Misericórdia que acolhe a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.29.03.mp4' },
  { id: 112,  titulo: 'Entre a resistência e a rendição', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.29.26.mp4' },
  { id: 113,  titulo: 'Graça no tempo da enfermidade', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.29.46 (1).mp4' },
  { id: 114,  titulo: 'A casa que a tempestade não derruba', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.30.06.mp4' },
  { id: 115,  titulo: 'A paz que o mundo não pode dar', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.30.38.mp4' },
  { id: 116,  titulo: 'Os olhos fitos em Jesus faz toda a diferença!', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.31.00.mp4' },
  { id: 117,  titulo: 'A loucura que salva', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.31.21.mp4' },
  { id: 118,  titulo: 'A alegria de quem sabe que o Senhor está perto', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.31.48.mp4' },
  { id: 119,  titulo: 'Entre a ameaça e o socorro de Deus', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.32.09.mp4' },
  { id: 120,  titulo: 'Entre o cerco visível e o invisível', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.32.34.mp4' },
  { id: 121,  titulo: 'O alto preço invisível do prazer', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.33.02.mp4' },
  { id: 122,  titulo: 'O refúgio que sacia a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.33.56.mp4' },
  { id: 123,  titulo: 'Um advogado nas alturas', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.34.53.mp4' },
  { id: 124,  titulo: 'Quando a Palavra se torna vida', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.35.23.mp4' },
  { id: 125,  titulo: 'A paz que permanece quando tudo muda', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.35.43.mp4' },
  { id: 126,  titulo: 'O caminho de volta está aberto', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.36.03.mp4' },
  { id: 127,  titulo: 'Entre o agora e o “ainda não”', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.36.26.mp4' },
  { id: 128,  titulo: 'Quando o fogo não é o fim', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.36.45.mp4' },
  { id: 129,  titulo: 'O deserto que alimenta', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.37.11.mp4' },
  { id: 130,  titulo: 'Para onde Deus realmente olha', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.37.31.mp4' },
  { id: 131,  titulo: 'Quando o amor desvia o coração', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.37.54.mp4' },
  { id: 132,  titulo: 'A alma que não se exalta', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.38.48.mp4' },
  { id: 133,  titulo: 'A sabedoria que fala em silêncio', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.39.13.mp4' },
  { id: 134,  titulo: 'Quando o Reino é prioridade, a alma descansa', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.39.37.mp4' },
  { id: 135,  titulo: 'Meu Redentor vive — a esperança que não morre', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.40.23.mp4' },
  { id: 136,  titulo: 'A alegria de Deus em meio ao seu povo', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.40.41.mp4' },
  { id: 137,  titulo: 'O orgulho na alma que deve permanecer', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.41.24.mp4' },
  { id: 138,  titulo: 'A força que sustenta a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.41.54.mp4' },
  { id: 139,  titulo: 'Reconhecidos por andar com Jesus', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.42.18.mp4' },
  { id: 140,  titulo: 'Quando a familiaridade não gera fidelidade', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.42.58.mp4' },
  { id: 141,  titulo: 'O sucesso e o custo da alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.43.24.mp4' },
  { id: 142,  titulo: 'O caminho que faz bem à alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.43.57.mp4' },
  { id: 143,  titulo: 'Livres do peso que adoece a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.44.22.mp4' },
  { id: 144,  titulo: 'As manhãs que restauram a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.44.46.mp4' },
  { id: 145,  titulo: 'A esperança segura de uma alma fielmente cuidada', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.45.24.mp4' },
  { id: 146,  titulo: 'Quando a alma aprende a lembrar', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.45.39.mp4' },
  { id: 147,  titulo: 'Guardando a fonte da vida', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.46.06.mp4' },
  { id: 148,  titulo: 'A alma diante do imprevisível', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.46.07 (1).mp4' },
  { id: 149,  titulo: 'Buscar a Deus é encontrar vida!', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.46.07.mp4' },
  { id: 150,  titulo: 'A esperança em um trono que jamais falha', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.47.11.mp4' },
  { id: 151,  titulo: 'Esgotados exteriormente — renovados interiormente', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.47.12 (1).mp4' },
  { id: 152,  titulo: 'O convite que cura a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.47.12 (2).mp4' },
  { id: 153,  titulo: 'O mundo interior que se renova', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.47.12 (4).mp4' },
  { id: 154,  titulo: 'O processo que forma a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.47.12.mp4' },
  { id: 155,  titulo: 'Quando a alma teme ser esquecida', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.48.40 (1).mp4' },
  { id: 156,  titulo: 'As lágrimas guardadas por Deus', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.48.40.mp4' },
  { id: 157,  titulo: 'O toque do Consolador na alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.49.57.mp4' },
  { id: 158,  titulo: 'O Deus que enxuga toda lágrima', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.51.02.mp4' },
  { id: 159,  titulo: 'Quando a força acaba, a rocha permanece', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.51.52 (1).mp4' },
  { id: 160,  titulo: 'O que não é cultivado, se perde', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.51.52 (2).mp4' },
  { id: 161,  titulo: 'Guardados pela graça até o fim', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.51.52.mp4' },
  { id: 162,  titulo: 'Quando as palavras confronta as práticas', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.53.20.mp4' },
  { id: 163,  titulo: 'Paz em todos os momentos', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.54.16 (1).mp4' },
  { id: 164,  titulo: 'O perigo de uma alma distraída', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.55.01 (1).mp4' },
  { id: 165,  titulo: 'O acordo invisível que sustenta a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.55.01.mp4' },
  { id: 166,  titulo: 'Apenas águas que passaram', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.56.02.mp4' },
  { id: 167,  titulo: 'A força de uma vida simples', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.56.03 (1).mp4' },
  { id: 168,  titulo: 'A imprescindível expansão interior', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.56.03 (2).mp4' },
  { id: 169,  titulo: 'O silêncio que salva a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 12.56.03.mp4' },
  { id: 170,  titulo: 'O amor que satisfaz o anseio da alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 13.03.34 (2).mp4' },
  { id: 171,  titulo: 'A alma que decide permanecer fiel', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 13.03.34 (3).mp4' },
  { id: 172,  titulo: 'Ancorado em Jesus e não nas circunstâncias', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 13.03.34.mp4' },
  { id: 173,  titulo: 'A âncora segura para a alma rejeitada', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 13.03.35 (1).mp4' },
  { id: 174,  titulo: 'O mandamento que liberta a alma', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 13.03.35 (2).mp4' },
  { id: 175,  titulo: 'Quando a mente amplifica a dor', arquivo: '/Audio/AnseiodaAlma2/WhatsApp Audio 2026-06-11 at 13.03.35.mp4' },
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
        src={episodio.arquivo.startsWith('/') ? episodio.arquivo : BASE + episodio.arquivo}
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
            const isFree = ep.id <= 5
            const isPago = !isFree
            return (
              <article
                key={ep.id}
                className={`${styles.episodeCard} ${isAtivo ? styles.episodeCardAtivo : ''} ${semAudio ? styles.episodeCardBreve : ''} ${isPago ? styles.episodeCardPago : ''}`}
                style={{ '--delay': `${idx * 0.045}s` }}
              >
                <div className={styles.epNumero}>
                  {String(ep.id).padStart(2, '0')}
                </div>

                <div className={styles.epBody}>
                  <div className={styles.epTags}>
                    <span className={styles.tag}>Anseios da Alma</span>
                    {isFree && <span className={styles.tagGratis}>Gratuito</span>}
                    {isPago && <span className={styles.tagPremium}>Premium</span>}
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
