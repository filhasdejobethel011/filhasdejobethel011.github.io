import PublicNav from '@/components/PublicNav'
import { asset } from '@/lib/asset'

// Colunas laterais de fotos (do Drive). Duplicadas para o loop ficar contínuo.
const COL_ESQ = [1, 4, 7, 10, 13, 16, 19, 22]
const COL_DIR = [2, 5, 8, 11, 14, 17, 20, 23]

function ColunaFotos({ nums, dir, lado }: { nums: number[]; dir: 'up' | 'down'; lado: 'left' | 'right' }) {
  const lista = [...nums, ...nums] // duplica para loop sem emenda
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block pointer-events-none"
      style={{
        position: 'absolute', top: 0, bottom: 0, width: 200,
        [lado]: 0, overflow: 'hidden',
        maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, animation: `hist-${dir} 38s linear infinite` }}>
        {lista.map((n, i) => (
          <div key={i} className="overflow-hidden rounded-xl"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <img src={asset(`/fotos/foto-${n}.jpg`)} alt="" loading="lazy" className="w-full h-auto block" style={{ opacity: 0.55 }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HistoriaPage() {
  return (
    <>
      <PublicNav />
      <style>{`
        @keyframes hist-up   { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        @keyframes hist-down { from { transform: translateY(-50%); } to { transform: translateY(0); } }
      `}</style>

      <div className="relative">
        <ColunaFotos nums={COL_ESQ} dir="up" lado="left" />
        <ColunaFotos nums={COL_DIR} dir="down" lado="right" />

        <main className="relative z-10 max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16 text-white">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#6d28d9' }}>Nossa História</p>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-6 md:mb-8">Betel Nº 011 — Lírios de Keren</h1>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>
              O Betel Nº 011 é uma das mais importantes organizações juvenis
              da cidade de Caldas Novas, Goiás, integrando as Filhas de Jó Internacional, instituição
              dedicada à formação de jovens por meio dos princípios de fé, amor, lealdade,
              caridade e desenvolvimento moral.
            </p>
            <p>
              Fundado com o propósito de proporcionar às jovens um ambiente de crescimento pessoal e
              coletivo, o Betel Nº 011 tem desempenhado um papel relevante na formação de
              cidadãs comprometidas com a sociedade. Ao longo de sua trajetória, inúmeras jovens passaram
              por suas fileiras, desenvolvendo habilidades de liderança, oratória, organização, trabalho
              em equipe e responsabilidade social.
            </p>
            <p>
              A escolha do nome do Betel representa o compromisso permanente com os ideais de
              honra, integridade e serviço à comunidade, valores que servem de inspiração
              para todas as integrantes da instituição.
            </p>
            <p>
              Durante sua existência, o Betel tem promovido diversas atividades beneficentes,
              campanhas solidárias, eventos culturais, projetos educacionais e ações voltadas ao
              fortalecimento da juventude. Além disso, participa ativamente dos congressos e eventos
              das Filhas de Jó, contribuindo para o crescimento da instituição no Brasil.
            </p>
            <p>
              As Filhas de Jó (Job's Daughters International), fundadas nos Estados Unidos em 1920
              por Ethel T. Wead Mick, inspiram-se na passagem bíblica do Livro de Jó, na qual se diz
              que "em toda a terra não se encontraram mulheres tão formosas como as filhas de Jó".
              A organização reúne jovens entre 10 e 20 anos em torno dos valores da fé, da família
              e da caridade.
            </p>
            <p>
              Atualmente, o Betel Nº 011 continua sua missão de formar jovens
              preparadas para os desafios da vida, promovendo valores éticos e incentivando o exercício
              da liderança e da cidadania. Sua história é marcada pelo compromisso com a juventude, pela
              busca constante da excelência e pela construção de um legado de amizade e serviço à
              comunidade.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
