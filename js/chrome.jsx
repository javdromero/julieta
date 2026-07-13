/* Julieta Books & Coffee — shared Chrome: header, footer, data, helpers.
   Exposes everything on window for the sibling screen scripts. */
const JLc = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Logo, Button, IconButton, Badge } = JLc;

const JL_IMG = 'assets/img';
const JL_MAPS = 'https://maps.app.goo.gl/HJTC5nddJqgANjeWA';
const JLIcon = ({ n, ...p }) => <i data-lucide={n} {...p}></i>;

/* ---------------- Menu data (full carta) ---------------- */
const MENU = {
  desayunos: {
    label: 'Desayunos', icon: 'egg-fried',
    items: [
      { name: 'Desayuno', script: 'francés', price: '$6.90', thumb: `${JL_IMG}/desayuno-frances.jpg`,
        description: 'Croissant de mantequilla, frutos rojos y chocolate caliente.', diet: ['veg'] },
      { name: 'Desayuno', script: 'ecuatoriano', price: '$6.50', thumb: `${JL_IMG}/desayuno-ecuatoriano.jpg`,
        description: 'Bolón, chicharrón, salsa de la casa y café pasado o té.', diet: [] },
      { name: 'Tigrillo', script: 'tradicional', price: '$5.50', thumb: `${JL_IMG}/tigrillo.jpg`,
        description: 'Verde majado con huevo, queso y chicharrón crocante.', diet: ['gf'] },
      { name: 'Shak', script: 'shuka', price: '$7.20', thumb: `${JL_IMG}/shakshuka.jpg`,
        description: 'Huevos pochados en salsa de tomate especiada, pan artesanal.', diet: ['veg'] },
      { name: 'Pan', script: 'cakes', price: '$6.20', thumb: `${JL_IMG}/pancakes.jpg`,
        description: 'Torre de pancakes con tocino, frutos rojos y miel de maple.', diet: ['veg'] },
    ],
  },
  almuerzos: {
    label: 'Almuerzos', icon: 'utensils',
    items: [
      { name: 'Sanduche', script: 'ahumada de cerdo', price: '$7.90', thumb: `${JL_IMG}/sanduche-ahumada.jpg`,
        description: 'Cerdo ahumado, mozzarella fundida, pimientos y guacamole en baguette.', diet: [] },
      { name: 'Sanduche', script: 'de la casa', price: '$7.50', thumb: `${JL_IMG}/sanduche-plato.jpg`,
        description: 'Servido con papas fritas y salsa de la casa.', diet: [], tag: 'Popular' },
      { name: 'Bolón', script: 'en salsa de camarón', price: '$8.40', thumb: `${JL_IMG}/bolon-triptico.jpg`,
        description: 'Bolón de verde bañado en cremosa salsa de camarón.', diet: ['gf'] },
    ],
  },
  bebidas: {
    label: 'Café & Bebidas', icon: 'coffee',
    items: [
      { name: 'Cappuccino', script: 'de la casa', price: '$2.80',
        description: 'Espresso de tueste propio con leche cremada y arte latte.', diet: ['veg'] },
      { name: 'Latte', script: 'de vainilla', price: '$3.20',
        description: 'Doble espresso, leche sedosa y vainilla natural.', diet: ['veg'] },
      { name: 'Chocolate', script: 'caliente', price: '$3.00',
        description: 'Cacao ecuatoriano fundido, espuma de leche.', diet: ['veg'] },
      { name: 'Té', script: 'de la tarde', price: '$2.40',
        description: 'Selección de infusiones de hierbas y frutas.', diet: ['veg', 'gf'] },
    ],
  },
  detox: {
    label: 'Jugos Detox', icon: 'citrus',
    items: [
      { name: 'Detox', script: 'verde', price: '$3.90', thumb: `${JL_IMG}/detox.jpg`,
        description: 'Espinaca, manzana verde, pepino, jengibre y limón.', diet: ['veg', 'gf', 'vegan'] },
      { name: 'Detox', script: 'naranja', price: '$3.90',
        description: 'Naranja, zanahoria, cúrcuma y un toque de miel.', diet: ['veg', 'gf'] },
      { name: 'Detox', script: 'rojo', price: '$3.90',
        description: 'Remolacha, frutos rojos, fresa y naranja.', diet: ['veg', 'gf', 'vegan'] },
    ],
  },
};
const DIET_LABELS = { veg: 'Vegetariano', vegan: 'Vegano', gf: 'Sin gluten' };

/* ---------------- Books catalog data ---------------- */
const BOOKS = [
  { title: 'Rayuela', author: 'Julio Cortázar', genre: 'Novela', spine: '#7A1E22', year: 1963, note: 'Para leer sin orden, como una tarde larga.' },
  { title: 'Cien años de soledad', author: 'Gabriel García Márquez', genre: 'Novela', spine: '#435239', year: 1967, note: 'El clásico que siempre vuelve a la mesa.' },
  { title: 'La casa de los espíritus', author: 'Isabel Allende', genre: 'Novela', spine: '#8C763B', year: 1982, note: 'Saga familiar, ideal con chocolate caliente.' },
  { title: 'Poemas humanos', author: 'César Vallejo', genre: 'Poesía', spine: '#4A382A', year: 1939, note: 'Versos para acompañar un espresso corto.' },
  { title: 'El amor en los tiempos del cólera', author: 'Gabriel García Márquez', genre: 'Novela', spine: '#6B5238', year: 1985, note: 'Romance de largo aliento.' },
  { title: 'Las venas abiertas de América Latina', author: 'Eduardo Galeano', genre: 'Ensayo', spine: '#2C2118', year: 1971, note: 'Historia que se discute en voz alta.' },
  { title: 'Ficciones', author: 'Jorge Luis Borges', genre: 'Cuento', spine: '#7A1E22', year: 1944, note: 'Laberintos breves entre sorbo y sorbo.' },
  { title: 'Pedro Páramo', author: 'Juan Rulfo', genre: 'Novela', spine: '#435239', year: 1955, note: 'Corto, intenso, inolvidable.' },
  { title: 'Veinte poemas de amor', author: 'Pablo Neruda', genre: 'Poesía', spine: '#8C763B', year: 1924, note: 'El más prestado de la estantería.' },
  { title: 'Cuentos de la selva', author: 'Horacio Quiroga', genre: 'Infantil', spine: '#5E7150', year: 1918, note: 'Para los pequeños lectores de la casa.' },
  { title: 'El túnel', author: 'Ernesto Sabato', genre: 'Novela', spine: '#4A382A', year: 1948, note: 'Suspenso psicológico en una sentada.' },
  { title: 'Huasipungo', author: 'Jorge Icaza', genre: 'Novela', spine: '#7A1E22', year: 1934, note: 'Clásico ecuatoriano imprescindible.' },
];
const BOOK_GENRES = ['Todos', 'Novela', 'Poesía', 'Ensayo', 'Cuento', 'Infantil'];

/* ---------------- Reveal-on-scroll helper ---------------- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-in)');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach((e) => e.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

/* ---------------- Header ---------------- */
const NAV = [
  { key: 'landing', label: 'Inicio' },
  { key: 'menu', label: 'Menú' },
  { key: 'books', label: 'Libros' },
  { key: 'reservas', label: 'Reservas' },
];
function Header({ current, onNav, onIngresar }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="jlx-hd">
      <div className="jlx-hd__in">
        <a className="jlx-hd__logo" onClick={() => onNav('landing')}>
          <Logo variant="wordmark" size="sm" align="start" />
        </a>
        <nav className={`jlx-hd__nav ${open ? 'open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.key} className={current === n.key ? 'on' : ''}
              onClick={() => { onNav(n.key); setOpen(false); }}>{n.label}</a>
          ))}
        </nav>
        <div className="jlx-hd__act">
          <a className="jlx-hd__maps" href={JL_MAPS} target="_blank" rel="noopener">
            <JLIcon n="map-pin" /> Cómo llegar
          </a>
          <Button variant="secondary" size="sm" onClick={onIngresar}>Ingresar</Button>
          <button className="jlx-hd__burger" aria-label="Menú" onClick={() => setOpen((o) => !o)}>
            <JLIcon n={open ? 'x' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function Footer({ onNav }) {
  return (
    <footer className="jlx-ft">
      <div className="jlx-ft__in">
        <div className="jlx-ft__brand">
          <Logo variant="full" size="sm" align="start" onDark />
          <p>Somos la 1era Cafetería-Librería de la parte alta de El Oro.</p>
        </div>
        <div className="jlx-ft__col">
          <h4>Explora</h4>
          <span className="lk" onClick={() => onNav('menu')}>Menú</span>
          <span className="lk" onClick={() => onNav('books')}>Libros</span>
          <span className="lk" onClick={() => onNav('reservas')}>Reservas &amp; banquetes</span>
        </div>
        <div className="jlx-ft__col">
          <h4>Visítanos</h4>
          <a className="lk" href={JL_MAPS} target="_blank" rel="noopener"><JLIcon n="map-pin" /> Cómo llegar</a>
          <span><JLIcon n="clock" /> Lunes a Domingo</span>
          <span><JLIcon n="phone" /> 0997301416</span>
        </div>
        <div className="jlx-ft__col">
          <h4>App & redes</h4>
          <span><JLIcon n="smartphone" /> App Julieta (próximamente)</span>
          <span><JLIcon n="instagram" /> @julieta.books.coffee</span>
        </div>
      </div>
      <div className="jlx-ft__base">© 2026 Julieta Books &amp; Coffee · Hecho con café y buenos libros</div>
    </footer>
  );
}

Object.assign(window, {
  JL_IMG, JL_MAPS, JLIcon, MENU, DIET_LABELS, BOOKS, BOOK_GENRES,
  useReveal, JlHeader: Header, JlFooter: Footer,
});
