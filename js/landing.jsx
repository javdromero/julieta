/* Julieta Books & Coffee — Landing page body (Header/Footer come from router). */
const JL = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Eyebrow, Button, Card, Badge, MenuRow } = JL;
const L_IMG = window.JL_IMG;
const LIcon = window.JLIcon;

function Hero({ onJoin, onMenu }) {
  return (
    <section className="jlx-hero">
      <div className="jlx-hero__copy reveal">
        <Eyebrow>Cafetería · Librería · Piñas</Eyebrow>
        <h1 className="jlx-hero__h1"><span style={{ color: '#2A2017' }}>Donde el café</span><br /><span style={{ color: '#2A2017' }}>encuentra</span><span className="jlx-script"> un buen libro</span></h1>
        <p className="jlx-lead">La primera cafetería-librería de la parte alta de El Oro. Café de
          especialidad, desayunos de autor y estanterías para perderse toda la tarde.</p>
        <div className="jlx-row">
          <Button size="lg" onClick={onJoin}>Únete al programa</Button>
          <Button variant="secondary" size="lg" onClick={onMenu}>Ver el menú</Button>
        </div>
        <div className="jlx-hero__meta">
          <span><LIcon n="clock" /> Lunes a Domingo</span>
          <span><LIcon n="map-pin" /> Piñas, El Oro</span>
        </div>
      </div>
      <div className="jlx-hero__art reveal reveal--right">
        <img src={`${L_IMG}/desayuno-frances.jpg`} alt="Desayuno francés" />
        <div className="jlx-hero__chip">
          <div className="jlx-hero__chipmark">J</div>
          <div>
            <strong>Desayuno del día</strong>
            <span>Francés · recién horneado</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="jlx-story" id="historia">
      <div className="jlx-story__art reveal">
        <img src={`${L_IMG}/local.jpg`} alt="Rincón de Julieta" />
      </div>
      <div className="jlx-story__copy reveal reveal--right">
        <Eyebrow>Nuestra Historia</Eyebrow>
        <h2 className="jlx-h2">Un rincón que huele a café tostado y a páginas nuevas</h2>
        <p>Julieta nació de una idea sencilla: que un buen libro sabe mejor con un buen café.
          Tostamos en casa, horneamos cada mañana y cuidamos cada mesa como una sala de lectura.</p>
        <p>Toma un título de la estantería, pide tu desayuno favorito y quédate el tiempo que
          quieras. Aquí las tardes son largas a propósito.</p>
        <div className="jlx-story__stats">
          <div><b>1era</b><span>cafetería-librería de la zona alta</span></div>
          <div><b>+120</b><span>títulos para leer o llevar</span></div>
          <div><b>7 días</b><span>abiertos toda la semana</span></div>
        </div>
      </div>
    </section>
  );
}

function MenuTeaser({ onMenu }) {
  const picks = [...window.MENU.desayunos.items.slice(0, 2), ...window.MENU.almuerzos.items.slice(0, 1)];
  return (
    <section className="jlx-menu" id="menu">
      <div className="jlx-menu__head reveal">
        <Eyebrow>La Carta</Eyebrow>
        <h2 className="jlx-h2">Del horno a tu mesa</h2>
        <p className="jlx-menu__sub">Un adelanto de lo que servimos cada mañana.</p>
      </div>
      <Card padded className="jlx-menu__card reveal">
        {picks.map((d, i) => (
          <MenuRow key={i} name={d.name} script={d.script} price={d.price}
            thumb={d.thumb} description={d.description}
            tags={d.tag ? <Badge tone="gold">{d.tag}</Badge> : null} />
        ))}
        <div className="jlx-menu__more">
          <Button variant="secondary" onClick={onMenu}>Ver la carta completa <LIcon n="arrow-right" /></Button>
        </div>
      </Card>
    </section>
  );
}

function Program({ onJoin }) {
  return (
    <section className="jlx-prog" id="programa">
      <div className="jlx-prog__in reveal">
        <Eyebrow tone="onDark">Programa de recompensas</Eyebrow>
        <h2 className="jlx-h2 jlx-h2--light">Julieta Readers &amp; Roasters</h2>
        <p className="jlx-prog__lead">Gana puntos con cada visita. Acumula y canjéalos por un
          <em> pastelito gratis</em> o un <em>libro usado</em> de nuestra estantería.</p>
        <div className="jlx-prog__steps">
          <div><span className="jlx-prog__ic"><LIcon n="coffee" /></span><b>Consume</b><p>Suma 1 punto por cada $1.</p></div>
          <div><span className="jlx-prog__ic"><LIcon n="star" /></span><b>Acumula</b><p>Sigue tu progreso en el panel.</p></div>
          <div><span className="jlx-prog__ic"><LIcon n="gift" /></span><b>Canjea</b><p>Pastelito o libro usado.</p></div>
        </div>
        <Button size="lg" variant="festive" onClick={onJoin}>Crear mi cuenta</Button>
      </div>
    </section>
  );
}

function Services({ onReservas }) {
  const items = [
    { icon: 'smartphone', t: 'Pide desde la app', d: 'Reserva tu mesa y sigue tus puntos desde la app de Julieta. Las compras se realizan en el local.' },
    { icon: 'utensils', t: 'Banquetes', d: 'Menús de tres tiempos para celebraciones y fechas especiales.', action: onReservas },
    { icon: 'users', t: 'Catering & eventos', d: 'Llevamos el sabor de Julieta a tu oficina, club de lectura o reunión.', action: onReservas },
  ];
  return (
    <section className="jlx-serv" id="servicios">
      <div className="reveal">
        <Eyebrow>Más que una mesa</Eyebrow>
        <h2 className="jlx-h2">Servicios</h2>
      </div>
      <div className="jlx-serv__grid">
        {items.map((s, i) => (
          <Card key={i} padded interactive className="jlx-serv__card reveal" style={{ transitionDelay: `${i * 90}ms` }}
            onClick={s.action}>
            <span className="jlx-serv__ic"><LIcon n={s.icon} /></span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            {s.action && <a className="jlx-serv__link">Reservar <LIcon n="arrow-right" /></a>}
          </Card>
        ))}
      </div>
    </section>
  );
}

function VisitBand() {
  return (
    <section className="jlx-visit reveal">
      <div className="jlx-visit__in">
        <div>
          <Eyebrow>Te esperamos</Eyebrow>
          <h2 className="jlx-h2">Ven a leer con nosotros</h2>
          <p>Estamos en el corazón de Piñas, El Oro. Sin filas en línea: aquí se disfruta en persona,
            entre estanterías y aroma a café recién tostado.</p>
        </div>
        <a className="jlx-visit__btn" href={window.JL_MAPS} target="_blank" rel="noopener">
          <LIcon n="map-pin" /> Cómo llegar
        </a>
      </div>
    </section>
  );
}

function Landing({ onIngresar, onJoin, onNav }) {
  window.useReveal();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <main className="jlx-page">
      <Hero onJoin={onJoin} onMenu={() => onNav('menu')} />
      <Story />
      <MenuTeaser onMenu={() => onNav('menu')} />
      <Program onJoin={onJoin} />
      <Services onReservas={() => onNav('reservas')} />
      <VisitBand />
    </main>
  );
}

window.Landing = Landing;
