import PublicNav from '@/components/PublicNav'

type Evento = { dia: string; mes: string; titulo: string; obs?: string }

// Agenda do Betel (ordem cronológica)
const AGENDA: Evento[] = [
  { dia: '20',     mes: 'JUN',     titulo: 'Cerimônia das Rosas' },
  { dia: '26',     mes: 'JUN',     titulo: 'Festa de Encerramento de Semestre', obs: 'Loja Maçônica Vale do Rio Quente' },
  { dia: '27',     mes: 'JUN',     titulo: 'Prestação de Contas + Posse da XXIV Gestão Administrativa' },
  { dia: '31/07',  mes: 'A 02/08', titulo: 'Grande Sessão GO e DF' },
]

export default function EventosPage() {
  return (
    <>
      <PublicNav />
      <main className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16 text-white">
        <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#6d28d9' }}>Agenda</p>
        <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Eventos &amp; Notícias</h1>
        <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Calendário de atividades do Betel Nº 011.
        </p>

        <div className="space-y-3">
          {AGENDA.map((ev, i) => (
            <div key={i}
              className="flex items-center gap-4 rounded-2xl px-4 sm:px-5 py-4 transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              {/* Data */}
              <div className="flex-shrink-0 w-16 sm:w-20 text-center rounded-xl py-2"
                style={{ background: 'rgba(109,40,217,0.15)', border: '1px solid rgba(109,40,217,0.3)' }}>
                <div className="text-base sm:text-lg font-black leading-none text-white">{ev.dia}</div>
                <div className="text-[10px] font-bold tracking-widest mt-1" style={{ color: '#a78bfa' }}>{ev.mes}</div>
              </div>
              {/* Título */}
              <div className="min-w-0">
                <p className="font-bold text-white text-sm sm:text-base leading-snug">{ev.titulo}</p>
                {ev.obs && <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{ev.obs}</p>}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs mt-8" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Datas sujeitas a alteração. Acompanhe o Instagram <a href="https://instagram.com/bethel11go" target="_blank" rel="noopener noreferrer" style={{ color: '#a78bfa' }}>@bethel11go</a> para confirmações.
        </p>
      </main>
    </>
  )
}
