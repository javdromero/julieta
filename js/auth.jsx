/* Julieta Books & Coffee — Auth screen (login / register). */
const JLa = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Logo, Eyebrow, Button, TextField, Select, Checkbox } = JLa;

const IMGa = 'assets/img';
const IconA = ({ n }) => <i data-lucide={n}></i>;

const GENRES = ['Novela', 'Poesía', 'Historia', 'Ensayo', 'Ciencia ficción', 'Infantil', 'Biografía'];

function Auth({ mode = 'login', onModeChange, onAuthed, onHome }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const isLogin = mode === 'login';

  const submit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name ? e.target.elements.name.value : '';
    onAuthed(name || 'María Fernanda');
  };

  return (
    <div className="jlx-auth">
      <aside className="jlx-auth__art">
        <img src={`${IMGa}/desayuno-ecuatoriano.jpg`} alt="Julieta" />
        <div className="jlx-auth__artcopy">
          <Logo variant="full" size="md" onDark />
          <p className="jlx-script jlx-auth__tag">un café, un libro, tu lugar</p>
        </div>
        <div className="jlx-auth__quote">
          “Aquí las tardes son largas a propósito.”
        </div>
      </aside>

      <section className="jlx-auth__panel">
        <button className="jlx-auth__back" onClick={onHome}><IconA n="arrow-left" /> Volver al inicio</button>
        <div className="jlx-auth__box">
          <Eyebrow>{isLogin ? 'Bienvenido de nuevo' : 'Únete a Julieta'}</Eyebrow>
          <h2 className="jlx-h2">{isLogin ? 'Inicia sesión' : 'Crea tu cuenta'}</h2>
          <p className="jlx-auth__sub">
            {isLogin
              ? 'Entra para ver tus puntos y recompensas.'
              : 'Empieza a sumar puntos en Julieta Readers & Roasters.'}
          </p>

          <form className="jlx-auth__form" onSubmit={submit}>
            {!isLogin && (
              <TextField name="name" label="Nombre" placeholder="Tu nombre completo"
                icon={<IconA n="user" />} required />
            )}
            <TextField name="email" label="Correo" type="email" placeholder="tu@correo.com"
              icon={<IconA n="mail" />} required />
            <TextField name="password" label="Contraseña" type="password" placeholder="••••••••"
              icon={<IconA n="lock" />} required
              hint={isLogin ? undefined : 'Mínimo 8 caracteres'} />
            {!isLogin && (
              <Select label="Género favorito de lectura" placeholder="Elige un género"
                options={GENRES} />
            )}
            <div className="jlx-auth__meta">
              {isLogin
                ? <><Checkbox label="Recuérdame" defaultChecked /><a className="jlx-auth__link">¿Olvidaste tu contraseña?</a></>
                : <Checkbox label="Acepto recibir novedades y el reglamento del programa." />}
            </div>
            <Button type="submit" block size="lg">
              {isLogin ? 'Ingresar' : 'Crear cuenta'}
            </Button>
          </form>

          <div className="jlx-auth__switch">
            {isLogin
              ? <>¿Aún no tienes cuenta? <a onClick={() => onModeChange('register')}>Regístrate</a></>
              : <>¿Ya eres parte? <a onClick={() => onModeChange('login')}>Inicia sesión</a></>}
          </div>
        </div>
      </section>
    </div>
  );
}

window.Auth = Auth;
