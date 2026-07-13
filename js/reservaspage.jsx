/* Julieta Books & Coffee — Reservations & banquets form. */
const JLr = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Eyebrow, Button, Card, Badge, TextField, Select } = JLr;
const RIcon = window.JLIcon;

const OCCASIONS = ['Mesa para leer', 'Desayuno / almuerzo', 'Banquete (3 tiempos)', 'Catering / evento', 'Club de lectura'];
const RESV_SIZES = ['1–2 personas', '3–4 personas', '5–8 personas', '9–15 personas', 'Más de 15'];
const TIMES = ['Mañana (8–11h)', 'Mediodía (11–14h)', 'Tarde (14–18h)', 'Noche (18–21h)'];

function ReservasPage() {
  const [sent, setSent] = React.useState(false);
  window.useReveal();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const submit = (e) => { e.preventDefault(); setSent(true); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <main className="jlx-page jlx-resv">
      <div className="jlx-resv__grid">
        <aside className="jlx-resv__aside reveal">
          <Eyebrow>Reservas &amp; banquetes</Eyebrow>
          <h1 className="jlx-h2">Aparta tu mesa o<span className="jlx-script"> tu celebración</span></h1>
          <p>Cuéntanos qué tienes en mente y te confirmamos por WhatsApp. Desde una mesa tranquila
            para leer hasta un banquete de tres tiempos para una fecha especial.</p>
          <ul className="jlx-resv__points">
            <li><span><RIcon n="calendar-check" /></span> Confirmación el mismo día</li>
            <li><span><RIcon n="utensils" /></span> Menús a medida para banquetes</li>
            <li><span><RIcon n="users" /></span> Espacios para clubes de lectura</li>
          </ul>
          <div className="jlx-resv__contact">
            <a href="tel:0997301416"><RIcon n="phone" /> 0997301416</a>
            <a href={window.JL_MAPS} target="_blank" rel="noopener"><RIcon n="map-pin" /> Cómo llegar</a>
          </div>
        </aside>

        <Card padded className="jlx-resv__card reveal reveal--right">
          {sent ? (
            <div className="jlx-resv__done">
              <span className="jlx-resv__doneic"><RIcon n="check" /></span>
              <h3>¡Solicitud enviada!</h3>
              <p>Gracias por escribirnos. Te confirmaremos tu reserva por WhatsApp muy pronto.
                Mientras tanto, puedes ir revisando <b>la carta</b> y <b>la estantería</b>.</p>
              <Button variant="secondary" onClick={() => setSent(false)}>Hacer otra solicitud</Button>
            </div>
          ) : (
            <form className="jlx-resv__form" onSubmit={submit}>
              <h3 className="jlx-resv__formtitle">Solicitar reserva</h3>
              <div className="jlx-resv__two">
                <TextField label="Nombre" placeholder="Tu nombre" icon={<RIcon n="user" />} required />
                <TextField label="WhatsApp" type="tel" placeholder="09XXXXXXXX" icon={<RIcon n="phone" />} required />
              </div>
              <Select label="Ocasión" placeholder="¿Qué te gustaría?" options={OCCASIONS} />
              <div className="jlx-resv__two">
                <TextField label="Fecha" type="date" required />
                <Select label="Horario" placeholder="Elige un horario" options={TIMES} />
              </div>
              <Select label="Personas" placeholder="¿Cuántos vienen?" options={RESV_SIZES} />
              <TextField label="Notas" multiline placeholder="Alergias, decoración, un libro favorito para la mesa…" />
              <Button type="submit" block size="lg">Enviar solicitud <RIcon n="send" /></Button>
              <p className="jlx-resv__fine">Las compras y pagos se realizan en el local. Esto es solo una solicitud de reserva.</p>
            </form>
          )}
        </Card>
      </div>
    </main>
  );
}

window.ReservasPage = ReservasPage;
