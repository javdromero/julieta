/* Julieta Books & Coffee — Cashback dashboard (logged-in). */
const JLd = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Logo, Eyebrow, Button, IconButton, Card, Badge, ProgressBar, Avatar } = JLd;

const IconD = ({ n }) => <i data-lucide={n}></i>;

const ACTIVITY = [
  { icon: 'coffee', t: "Cappuccino & 'The Secret History'", d: 'Hoy · 10:24', pts: 45 },
  { icon: 'croissant', t: 'Desayuno francés', d: 'Ayer · 09:10', pts: 30 },
  { icon: 'gift', t: 'Canje: pastelito gratis', d: '3 may · 16:40', pts: -200, redeem: true },
  { icon: 'book-open', t: 'Libro usado — "Rayuela"', d: '1 may · 12:02', pts: 60 },
  { icon: 'utensils', t: 'Sanduche ahumada + jugo detox', d: '28 abr · 13:30', pts: 38 },
];

function StatCard({ icon, label, value, sub, tone }) {
  return (
    <Card padded className={`jlx-dash__stat jlx-dash__stat--${tone || 'plain'}`}>
      <span className="jlx-dash__static"><IconD n={icon} /></span>
      <div>
        <span className="jlx-dash__statlbl">{label}</span>
        <strong className="jlx-dash__statval">{value}</strong>
        {sub && <span className="jlx-dash__statsub">{sub}</span>}
      </div>
    </Card>
  );
}

function Dashboard({ name = 'María Fernanda', onLogout }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const points = 180, next = 250;
  const first = name.split(' ')[0];

  return (
    <div className="jlx-dash">
      <header className="jlx-dash__top">
        <Logo variant="wordmark" size="sm" align="start" />
        <nav className="jlx-dash__nav">
          <a className="on"><IconD n="layout-dashboard" /> Panel</a>
          <a><IconD n="receipt" /> Actividad</a>
          <a><IconD n="gift" /> Recompensas</a>
        </nav>
        <div className="jlx-dash__topact">
          <IconButton variant="ghost" label="Notificaciones"><IconD n="bell" /></IconButton>
          <Avatar name={name} size="md" />
          <IconButton variant="ghost" label="Salir" onClick={onLogout}><IconD n="log-out" /></IconButton>
        </div>
      </header>

      <main className="jlx-dash__main">
        <div className="jlx-dash__welcome">
          <div>
            <Eyebrow>Julieta Readers &amp; Roasters</Eyebrow>
            <h1 className="jlx-h2">Hola de nuevo, <span className="jlx-script">{first}</span></h1>
          </div>
          <Badge tone="gold" dot>Miembro · Nivel Lector</Badge>
        </div>

        <div className="jlx-dash__grid">
          <section className="jlx-dash__col">
            <Card padded className="jlx-dash__balance">
              <div className="jlx-dash__baltop">
                <div>
                  <span className="jlx-dash__statlbl">Saldo de puntos</span>
                  <div className="jlx-dash__balnum">{points} <small>pts</small></div>
                  <span className="jlx-dash__statsub">≈ $1.80 en cashback acumulado</span>
                </div>
                <span className="jlx-dash__balic"><IconD n="coins" /></span>
              </div>
              <ProgressBar value={points} max={next} tone="gold"
                label="Próxima recompensa" valueText={`${points} / ${next} pts`}
                caption={`Te faltan ${next - points} pts para un pastelito gratis o un libro usado.`} />
              <div className="jlx-dash__balcta">
                <Button variant="secondary" size="sm"><IconD n="gift" /> Ver recompensas</Button>
                <Button size="sm"><IconD n="qr-code" /> Mostrar mi código</Button>
              </div>
            </Card>

            <div className="jlx-dash__stats">
              <StatCard icon="flame" label="Racha" value="6 visitas" sub="este mes" tone="maroon" />
              <StatCard icon="book-open" label="Libros canjeados" value="3" sub="desde enero" tone="forest" />
              <StatCard icon="trophy" label="Puntos de por vida" value="1,240" tone="gold" />
            </div>

            <Card padded className="jlx-dash__activity">
              <div className="jlx-dash__achead">
                <h3>Actividad reciente</h3>
                <a className="jlx-dash__all">Ver todo</a>
              </div>
              <ul className="jlx-dash__aclist">
                {ACTIVITY.map((a, i) => (
                  <li key={i}>
                    <span className={`jlx-dash__acic ${a.redeem ? 'redeem' : ''}`}><IconD n={a.icon} /></span>
                    <div className="jlx-dash__acmain">
                      <strong>{a.t}</strong>
                      <span>{a.d}</span>
                    </div>
                    <span className={`jlx-dash__acpts ${a.pts < 0 ? 'neg' : ''}`}>
                      {a.pts > 0 ? `+${a.pts}` : a.pts} pts
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <aside className="jlx-dash__side">
            <Card padded className="jlx-dash__reward">
              <Badge tone="maroon">Próxima recompensa</Badge>
              <h3>Pastelito gratis <span className="jlx-script">o libro usado</span></h3>
              <p>Al llegar a 250 puntos eliges tu premio en caja o desde la app.</p>
              <div className="jlx-dash__rewardbar">
                <IconD n="gift" />
                <div><b>70 pts</b> restantes</div>
              </div>
            </Card>
            <Card padded className="jlx-dash__tip">
              <span className="jlx-dash__tipic"><IconD n="sparkles" /></span>
              <h4>Duplica tus puntos</h4>
              <p>Cada martes de lectura suma <b>2x</b> puntos en toda la carta de café.</p>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}

window.Dashboard = Dashboard;
