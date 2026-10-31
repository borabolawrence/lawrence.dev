import SplitText from './common/SplitText'
import { systemsArchitectureData } from '../data/portfolioData'

export default function SystemsSection() {
  return (
    <section id="systems" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-white/10">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
          // ENTERPRISE DATABASE & WORKFLOW INFRASTRUCTURE
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display mb-3">
          <SplitText text="SYSTEMS ADMINISTRATION & REPLICATION" />
        </h2>
        <p className="text-slate-400 text-sm max-w-2xl font-mono">
          {systemsArchitectureData.subtitle}
        </p>
      </div>

      {/* Replication Topology Visual Diagram */}
      <div className="mb-12 p-6 sm:p-8 rounded-xl bg-[#090C12] border border-white/10 relative overflow-hidden">
        <div className="text-xs font-mono text-slate-400 uppercase mb-6 flex items-center justify-between">
          <span className="font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            MYSQL BINARY REPLICATION & VPN TOPOLOGY (GUANZON ENTERPRISE)
          </span>
          <span className="text-[11px] text-emerald-400">STATUS: REPLICATION HEALTHY (0 LAG)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs items-center">
          {/* Node 1: Primary HQ */}
          <div className="p-5 rounded-lg bg-[#0F131D] border border-cyan-500/30 space-y-2 relative">
            <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider">
              PRIMARY CLUSTER NODE
            </div>
            <div className="text-white font-bold text-sm">Guanzon Head Office DB</div>
            <div className="text-slate-400 text-[11px] space-y-1">
              <div>Log: mysql-bin.000412</div>
              <div>Format: ROW Level Locking</div>
              <div className="text-emerald-400">Engine: InnoDB Transactions</div>
            </div>
          </div>

          {/* Node 2: VPN Tunnel Connector */}
          <div className="p-4 rounded-lg bg-[#070A10] border border-dashed border-white/20 text-center space-y-2">
            <div className="text-xs text-slate-400">Encrypted IPsec / OpenVPN</div>
            <div className="text-emerald-400 font-bold text-base animate-pulse">⇄ DATA SYNC ⇄</div>
            <div className="text-[11px] text-slate-500">AES-256 Tunnel Encryption</div>
          </div>

          {/* Node 3: Distributed Branch Nodes */}
          <div className="p-5 rounded-lg bg-[#0F131D] border border-emerald-500/30 space-y-2">
            <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
              DISTRIBUTED REPLICAS
            </div>
            <div className="text-white font-bold text-sm">Branch Database Servers</div>
            <div className="text-slate-400 text-[11px] space-y-1">
              <div>Seconds_Behind_Master: 0</div>
              <div>Read-Only Branch Queries</div>
              <div className="text-cyan-400">Auto Failover & Log Relay</div>
            </div>
          </div>
        </div>
      </div>

      {/* Systems Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {systemsArchitectureData.items.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-xl bg-[#0C0F17] border border-white/10 hover:border-cyan-500/30 transition space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                {item.badge}
              </span>
              <span className="text-xs font-mono text-slate-500">{item.company}</span>
            </div>

            <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{item.summary}</p>

            <ul className="space-y-2 pt-2 border-t border-white/5 font-mono text-xs text-slate-400">
              {item.specs.map((spec, specIdx) => (
                <li key={specIdx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
