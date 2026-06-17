import PublicNav from '@/components/PublicNav'
import { asset } from '@/lib/asset'

// Honoráveis Rainhas (Past Honored Queens) do Betel Nº 011.
// Ordem alfabética por enquanto — ajustar para a ordem das gestões quando confirmada.
const RAINHAS = [
  { n: 1, nome: 'Bárbara' },
  { n: 2, nome: 'Cotrim' },
  { n: 3, nome: 'Gabriella' },
  { n: 4, nome: 'Ingrid' },
  { n: 5, nome: 'Isabela' },
  { n: 6, nome: 'Julia' },
  { n: 7, nome: 'Laysa' },
  { n: 8, nome: 'Ludmilla' },
  { n: 9, nome: 'Marina' },
]

export default function AntigosMCPage() {
  return (
    <>
      <PublicNav />
      <main className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 text-white">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#6d28d9' }}>Galeria de Honra</p>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-6 md:mb-8">Past HQ</h1>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Homenagem às Honoráveis Rainhas (Past Honored Queens) que conduziram o Betel Nº 011.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {RAINHAS.map(({ n, nome }) => (
            <div key={n} className="overflow-hidden rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <img
                src={asset(`/pastmc/pastmc-${n}.jpg`)}
                alt={`Honorável Rainha ${nome}`}
                loading="lazy"
                className="w-full h-auto block"
              />
              <p className="text-center text-sm font-semibold py-3 px-2 text-white">{nome}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
