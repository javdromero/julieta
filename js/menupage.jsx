/* Julieta Books & Coffee — Full Menu page: categories, dietary filters, dish detail. */
const JLm = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Eyebrow, Button, Card, Badge, MenuRow } = JLm;
const MIcon = window.JLIcon;

const DIET_FILTERS = [
  { key: 'veg', label: 'Vegetariano', icon: 'leaf' },
  { key: 'vegan', label: 'Vegano', icon: 'sprout' },
  { key: 'gf', label: 'Sin gluten', icon: 'wheat-off' },
];

function DishDetail({ dish, cat, onClose }) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  if (!dish) return null;
  return (
    <div className="jlx-modal" onClick={onClose}>
      <div className="jlx-modal__card jlx-dish" onClick={(e) => e.stopPropagation()}>
        <button className="jlx-modal__close" aria-label="Cerrar" onClick={onClose}><MIcon n="x" /></button>
        <div className={`jlx-dish__media ${dish.thumb ? '' : 'jlx-dish__media--none'}`}>
          {dish.thumb
            ? <img src={dish.thumb} alt={`${dish.name} ${dish.script || ''}`} />
            : <span className="jlx-dish__mono">J</span>}
        </div>
        <div className="jlx-dish__body">
          <span className="jlx-dish__cat">{cat}</span>
          <h3 className="jlx-dish__name">{dish.name} <span className="jlx-script">{dish.script}</span></h3>
          <p className="jlx-dish__desc">{dish.description}</p>
          <div className="jlx-dish__diet">
            {(dish.diet || []).map((d) => (
              <Badge key={d} tone={d === 'gf' ? 'outline' : 'forest'} dot={d !== 'gf'}>
                {window.DIET_LABELS[d]}
              </Badge>
            ))}
            {(!dish.diet || !dish.diet.length) && <span className="jlx-dish__nodiet">Plato de la casa</span>}
          </div>
          <div className="jlx-dish__foot">
            <span className="jlx-dish__price">{dish.price}</span>
            <a className="jlx-dish__visit" href={window.JL_MAPS} target="_blank" rel="noopener">
              <MIcon n="map-pin" /> Pídelo en el local
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuPage({ onNav }) {
  const cats = Object.keys(window.MENU);
  const [cat, setCat] = React.useState('desayunos');
  const [diet, setDiet] = React.useState([]);
  const [detail, setDetail] = React.useState(null);
  window.useReveal();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const toggleDiet = (k) => setDiet((d) => d.includes(k) ? d.filter((x) => x !== k) : [...d, k]);
  const group = window.MENU[cat];
  const items = group.items.filter((it) => diet.every((d) => (it.diet || []).includes(d)));

  return (
    <main className="jlx-page jlx-menupage">
      <div className="jlx-menupage__hero reveal">
        <Eyebrow>La Carta</Eyebrow>
        <h1 className="jlx-h2">Menú</h1>
        <p>Desayunos de autor, almuerzos, café de tueste propio y jugos detox.
          Se sirve todo en el local — <a href={window.JL_MAPS} target="_blank" rel="noopener">cómo llegar</a>.</p>
      </div>

      <div className="jlx-menupage__cats reveal">
        {cats.map((c) => (
          <button key={c} className={`jlx-catbtn ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>
            <MIcon n={window.MENU[c].icon} /> {window.MENU[c].label}
          </button>
        ))}
      </div>

      <div className="jlx-menupage__filters reveal">
        <span className="jlx-filterlbl">Filtrar:</span>
        {DIET_FILTERS.map((f) => (
          <button key={f.key} className={`jlx-chip ${diet.includes(f.key) ? 'on' : ''}`}
            onClick={() => toggleDiet(f.key)}>
            <MIcon n={f.icon} /> {f.label}
          </button>
        ))}
        {diet.length > 0 && (
          <button className="jlx-chip jlx-chip--clear" onClick={() => setDiet([])}>
            <MIcon n="x" /> Limpiar
          </button>
        )}
      </div>

      <div className="jlx-menupage__list reveal" key={cat + diet.join()}>
        <Card padded className="jlx-menu__card">
          {items.length ? items.map((d, i) => (
            <div key={i} className="jlx-menupage__row" onClick={() => setDetail(d)}>
              <MenuRow name={d.name} script={d.script} price={d.price}
                thumb={d.thumb} description={d.description}
                tags={<>
                  {d.tag && <Badge tone="gold">{d.tag}</Badge>}
                  {(d.diet || []).map((x) => (
                    <Badge key={x} tone={x === 'gf' ? 'outline' : 'forest'}>{window.DIET_LABELS[x]}</Badge>
                  ))}
                </>} />
              <span className="jlx-menupage__chev"><MIcon n="chevron-right" /></span>
            </div>
          )) : (
            <div className="jlx-menupage__empty">
              <MIcon n="search-x" />
              <p>No hay platos con esos filtros en esta categoría.</p>
            </div>
          )}
        </Card>
      </div>

      <div className="jlx-menupage__cta reveal">
        <p>¿Celebración especial? Armamos menús de tres tiempos y banquetes.</p>
        <Button onClick={() => onNav('reservas')}>Reservar o cotizar <MIcon n="arrow-right" /></Button>
      </div>

      {detail && <DishDetail dish={detail} cat={group.label} onClose={() => setDetail(null)} />}
    </main>
  );
}

window.MenuPage = MenuPage;
