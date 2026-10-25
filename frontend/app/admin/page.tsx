import AppSidebar from "@/components/AppSidebar";
import Reveal from "@/components/Reveal";
import { adminActivity, adminKpis, adminPayments, adminRevenue } from "@/lib/data";

export const metadata = {
  title: "Administración · Gesundheitsforum Dienstbier",
};

export default function AdminPage() {
  const maxRevenue = Math.max(...adminRevenue.map((r) => r.value));

  return (
    <div className="app app-shell">
      <AppSidebar active="admin" />

      <main className="app-main">
        <header className="app-header">
          <div>
            <span className="eyebrow">Dashboard administrativo</span>
            <h1>Resumen del gimnasio</h1>
          </div>
          <span className="tag">Octubre 2026</span>
        </header>

        <div className="dashboard-grid">
          {adminKpis.map((k, i) => (
            <Reveal
              key={k.label}
              delay={i * 80}
              className={`card kpi span-3 ${k.dark ? "dark" : ""}`}
            >
              <span>{k.label}</span>
              <strong>{k.value}</strong>
              <span>{k.note}</span>
            </Reveal>
          ))}

          {/* Ingresos */}
          <Reveal className="card panel span-7">
            <h3>Ingresos por mes (miles)</h3>
            <div className="bars">
              {adminRevenue.map((r) => (
                <div
                  key={r.month}
                  className={r.month === "Oct" ? "hi" : ""}
                  style={{ height: `${(r.value / maxRevenue) * 100}%` }}
                >
                  <span>{r.month}</span>
                </div>
              ))}
            </div>
            <div style={{ height: "1.5rem" }} />
          </Reveal>

          {/* Actividad */}
          <Reveal className="card panel span-5">
            <h3>Actividad reciente</h3>
            <ul className="stack-list">
              {adminActivity.map((a) => (
                <li key={a.title}>
                  <div>
                    {a.title}
                    <small>{a.detail}</small>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Pagos */}
          <Reveal className="card panel span-12">
            <h3>Pagos recientes</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Miembro</th>
                  <th>Plan</th>
                  <th>Importe</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {adminPayments.map((p) => (
                  <tr key={p.member + p.date}>
                    <td>{p.member}</td>
                    <td>{p.plan}</td>
                    <td>{p.amount}</td>
                    <td>{p.date}</td>
                    <td>
                      <span
                        className={`status ${p.status === "Pendiente" ? "pending" : ""} ${
                          p.status === "Vencido" ? "late" : ""
                        }`}
                      >
                        {p.status}
                      </span>
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
