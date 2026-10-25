import AppSidebar from "@/components/AppSidebar";
import Reveal from "@/components/Reveal";
import {
  memberBookings,
  memberGoals,
  memberMetrics,
  memberPayments,
  memberProfile,
  memberRoutines,
  weightHistory,
  weightLabels,
  workoutHistory,
} from "@/lib/data";

export const metadata = {
  title: "Mi zona · Gesundheitsforum Dienstbier",
};

export default function DashboardPage() {
  const min = Math.min(...weightHistory);
  const max = Math.max(...weightHistory);

  return (
    <div className="app app-shell">
      <AppSidebar active="dashboard" />

      <main className="app-main">
        <header className="app-header">
          <div>
            <span className="eyebrow">Zona privada</span>
            <h1>Hola, {memberProfile.name}</h1>
          </div>
          <span className="tag">Plan {memberProfile.plan} · {memberProfile.status}</span>
        </header>

        <div className="dashboard-grid">
          {/* KPIs */}
          <Reveal className="card kpi dark span-3">
            <span>Membresía activa</span>
            <strong>{memberProfile.plan}</strong>
            <span>Renueva el {memberProfile.renewal}</span>
          </Reveal>
          <Reveal className="card kpi span-3" style={{ transitionDelay: "80ms" }}>
            <span>Peso actual</span>
            <strong>{memberMetrics.weight}</strong>
            <span>IMC {memberMetrics.bmi}</span>
          </Reveal>
          <Reveal className="card kpi span-3" style={{ transitionDelay: "160ms" }}>
            <span>Masa muscular</span>
            <strong>{memberMetrics.muscle}</strong>
            <span>Grasa corporal {memberMetrics.fat}</span>
          </Reveal>
          <Reveal className="card kpi span-3" style={{ transitionDelay: "240ms" }}>
            <span>Entrenos este mes</span>
            <strong>12</strong>
            <span>Meta: 16</span>
          </Reveal>

          {/* Progreso de peso */}
          <Reveal className="card panel span-7">
            <h3>Evolución del peso</h3>
            <div className="bars">
              {weightHistory.map((v, i) => {
                const height = 30 + ((v - min) / (max - min || 1)) * 70;
                return (
                  <div
                    key={`${v}-${i}`}
                    className={i === weightHistory.length - 1 ? "hi" : ""}
                    style={{ height: `${height}%` }}
                  >
                    <span>{weightLabels[i]}</span>
                  </div>
                );
              })}
            </div>
            <p style={{ marginTop: "2.5rem", fontSize: "0.85rem", color: "var(--charcoal)" }}>
              Has bajado {(weightHistory[0] - weightHistory[weightHistory.length - 1]).toFixed(1).replace(".", ",")} kg desde agosto.
            </p>
          </Reveal>

          {/* Objetivos */}
          <Reveal className="card panel span-5">
            <h3>Objetivos personales</h3>
            <ul className="stack-list">
              {memberGoals.map((g) => (
                <li key={g.label} style={{ display: "block" }}>
                  <span>{g.label}</span>
                  <div className="progress-bar">
                    <div style={{ width: `${g.current}%` }} />
                  </div>
                  <small>{g.current} % completado</small>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Rutinas */}
          <Reveal className="card panel span-6">
            <h3>Rutinas asignadas</h3>
            <ul className="stack-list">
              {memberRoutines.map((r) => (
                <li key={r.name}>
                  <div>
                    {r.name}
                    <small>{r.detail}</small>
                  </div>
                  <span className="status">
                    {r.done}/{r.total}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Clases reservadas */}
          <Reveal className="card panel span-6">
            <h3>Próximas reservas</h3>
            <ul className="stack-list">
              {memberBookings.map((b) => (
                <li key={b.title}>
                  <div>
                    {b.title}
                    <small>{b.when}</small>
                  </div>
                  <span className="status">{b.kind}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Historial de entrenamientos */}
          <Reveal className="card panel span-6">
            <h3>Historial de entrenamientos</h3>
            <ul className="stack-list">
              {workoutHistory.map((w) => (
                <li key={w.date + w.title}>
                  <div>
                    {w.title}
                    <small>{w.date}</small>
                  </div>
                  <span>{w.duration}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Pagos */}
          <Reveal className="card panel span-6">
            <h3>Estado de pagos</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Concepto</th>
                  <th>Importe</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {memberPayments.map((p) => (
                  <tr key={p.date}>
                    <td>{p.date}</td>
                    <td>{p.concept}</td>
                    <td>{p.amount}</td>
                    <td>
                      <span className="status">{p.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
