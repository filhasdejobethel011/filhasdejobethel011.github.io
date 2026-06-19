import PublicNav from '@/components/PublicNav'
import { asset } from '@/lib/asset'

// Colunas laterais de fotos (do Drive). Duplicadas para o loop ficar contínuo.
const COL_ESQ = [1, 3, 5, 7, 9, 11, 13, 15]
const COL_DIR = [2, 4, 6, 8, 10, 12, 14, 16]

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
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-6 md:mb-8">Bethel Nº 011 — Lírios de Keren</h1>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>
              O Bethel Nº 011 de Caldas Novas, Goiás, integra a Ordem Internacional das Filhas de Jó,
              organização dedicada à formação de jovens por meio dos valores da fé, liderança, amizade,
              responsabilidade e serviço à comunidade.
            </p>
            <p>
              O sonho de fundar um Bethel em Caldas Novas surgiu em 2009, idealizado pelas jovens
              Marina B. e Ingrid G. Com o apoio das Lojas Maçônicas da cidade, especialmente do
              Tio José Henrique B., o projeto começou a se concretizar em 2014. Após a busca pelas
              jovens fundadoras e o auxílio fundamental do Bethel de Catalão, que orientou todo o
              processo de fundação, o Bethel Nº 011 foi oficialmente instituído em{' '}
              <strong style={{ color: '#fff' }}>24 de novembro de 2014</strong>, na Loja Maçônica
              Thermas de Caldas.
            </p>
            <p>
              Desde sua fundação, o Bethel tem promovido ações beneficentes, atividades culturais,
              projetos sociais e oportunidades de desenvolvimento para suas integrantes, formando
              jovens líderes comprometidas com a sociedade.
            </p>

            <h2 className="text-xl md:text-2xl font-black text-white pt-6">Colmeia Pequenos Lírios</h2>
            <p>
              Em <strong style={{ color: '#fff' }}>31 de maio de 2025</strong>, durante a XX Gestão
              Administrativa do Bethel Nº 011, foi fundada a Colmeia Pequenos Lírios, com a iniciação
              de três Abelhinhas. Na ocasião, a Honorável Rainha era Laura Q., o Casal Guardião era
              formado pela Tia Bruna Guerino e pelo Tio Heitor Ricieri, e a Apicultora era Ingrid
              Gontijo. A criação da Colmeia representou um importante passo para a continuidade do
              trabalho de formação de novas gerações dentro da Ordem.
            </p>

            <h2 className="text-xl md:text-2xl font-black text-white pt-6">Galeria de Misses</h2>
            <p>
              Ao longo de sua trajetória, o Bethel Nº 011 conquistou importantes reconhecimentos
              estaduais, destacando-se:
            </p>
            <ul className="space-y-2.5">
              <li className="flex gap-3">
                <span style={{ color: '#6d28d9' }}>♦</span>
                <span><strong style={{ color: '#fff' }}>Laysa do Carmo R.</strong> — Miss Filha de Jó Goiás 2017/2018</span>
              </li>
              <li className="flex gap-3">
                <span style={{ color: '#6d28d9' }}>♦</span>
                <span><strong style={{ color: '#fff' }}>Gabriela S.</strong> — Miss Simpatia Goiás 2022/2023</span>
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-black text-white pt-6">Legado</h2>
            <p>
              Ao longo dos anos, o Bethel Nº 011 construiu uma história marcada pela amizade,
              liderança, serviço e crescimento pessoal. Por meio de suas atividades e projetos, tem
              contribuído para a formação de jovens comprometidas com valores éticos e com o bem-estar
              da comunidade. Seu legado permanece vivo na trajetória de cada integrante que passou pela
              instituição e nas futuras gerações que continuarão fortalecendo os princípios das Filhas
              de Jó.
            </p>

            <h2 className="text-xl md:text-2xl font-black text-white pt-6">Criação</h2>
            <p>
              Este site foi desenvolvido pela gestão da <strong style={{ color: '#fff' }}>Vitória Vecchi</strong>.
            </p>

            <h2 className="text-xl md:text-2xl font-black text-white pt-6">Contato</h2>
            <p>
              E-mail:{' '}
              <a href="mailto:bethel011go@gmail.com" style={{ color: '#a78bfa' }}>bethel011go@gmail.com</a>
              <br />
              Instagram:{' '}
              <a href="https://instagram.com/bethel11go" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa' }}>@bethel11go</a>
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
