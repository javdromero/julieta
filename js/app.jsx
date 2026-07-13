/* Julieta Books & Coffee — app router (standalone build). */
const CONTENT = ['landing', 'menu', 'books', 'reservas'];

function App() {
  const [view, setView] = React.useState('landing');
  const [authMode, setAuthMode] = React.useState('login');
  const [name, setName] = React.useState('María Fernanda');

  React.useEffect(() => { window.scrollTo(0, 0); }, [view]);
  React.useEffect(() => { const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30); return () => clearTimeout(t); });

  const nav = (key) => setView(key);
  const openAuth = (mode) => { setAuthMode(mode); setView('auth'); };

  if (view === 'auth') {
    return <window.Auth mode={authMode} onModeChange={setAuthMode}
      onAuthed={(n) => { setName(n); setView('dashboard'); }}
      onHome={() => setView('landing')} />;
  }
  if (view === 'dashboard') {
    return <window.Dashboard name={name} onNav={nav} onLogout={() => setView('landing')} />;
  }

  let page;
  if (view === 'menu') page = <window.MenuPage key="menu" onNav={nav} />;
  else if (view === 'books') page = <window.BooksPage key="books" onNav={nav} />;
  else if (view === 'reservas') page = <window.ReservasPage key="reservas" onNav={nav} />;
  else page = <window.Landing key="landing" onNav={nav}
    onIngresar={() => openAuth('login')} onJoin={() => openAuth('register')} />;

  return (
    <React.Fragment>
      <window.JlHeader current={view} onNav={nav} onIngresar={() => openAuth('login')} />
      <div className="jlx-view" key={view}>{page}</div>
      <window.JlFooter onNav={nav} />
    </React.Fragment>
  );
}

function mountJulieta() {
  const need = ['JlHeader', 'JlFooter', 'Landing', 'MenuPage', 'BooksPage', 'ReservasPage', 'Auth', 'Dashboard'];
  if (need.some((g) => typeof window[g] !== 'function')) { setTimeout(mountJulieta, 20); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
}
mountJulieta();
