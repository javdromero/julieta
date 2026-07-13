/* Julieta Books & Coffee — design-system components (standalone build).
   React is a UMD global; no bundler needed. */
window.JBC = window.JBC || {};

function useStyleOnce(id, css){
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

/* ---- Button ---- */
const CSS_Button = `
.jl-btn{
  display:inline-flex;align-items:center;justify-content:center;gap:.55em;
  font-family:var(--font-sans);font-weight:var(--fw-medium);
  letter-spacing:var(--ls-wide);line-height:1;text-decoration:none;
  border:1px solid transparent;border-radius:var(--radius-md);
  cursor:pointer;white-space:nowrap;
  transition:background var(--dur-fast) var(--ease-soft),
             color var(--dur-fast) var(--ease-soft),
             border-color var(--dur-fast) var(--ease-soft),
             transform var(--dur-fast) var(--ease-soft),
             box-shadow var(--dur-fast) var(--ease-soft);
}
.jl-btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring);}
.jl-btn:active{transform:translateY(1px);}
.jl-btn[disabled]{opacity:.45;cursor:not-allowed;transform:none;}

/* sizes */
.jl-btn--sm{font-size:var(--fs-sm);padding:.5rem .9rem;}
.jl-btn--md{font-size:var(--fs-body);padding:.72rem 1.3rem;}
.jl-btn--lg{font-size:var(--fs-h4);padding:.95rem 1.9rem;}

/* variants */
.jl-btn--primary{background:var(--accent-primary);color:var(--text-on-dark);box-shadow:var(--shadow-sm);}
.jl-btn--primary:hover:not([disabled]){background:#1d150e;box-shadow:var(--shadow-md);}
.jl-btn--secondary{background:transparent;color:var(--espresso);border-color:var(--gold);}
.jl-btn--secondary:hover:not([disabled]){background:var(--gold);color:var(--text-on-accent);}
.jl-btn--ghost{background:transparent;color:var(--text-body);}
.jl-btn--ghost:hover:not([disabled]){background:rgba(44,33,24,.06);}
.jl-btn--festive{background:var(--accent-festive);color:var(--text-on-dark);box-shadow:var(--shadow-sm);}
.jl-btn--festive:hover:not([disabled]){background:#631317;box-shadow:var(--shadow-md);}
.jl-btn--block{width:100%;}
`;

/** Julieta primary action button. */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  as = 'button',
  className = '',
  ...rest
}) {
  useStyleOnce('jl-btn-css', CSS_Button);
  const Tag = as;
  const cls = [
    'jl-btn',
    `jl-btn--${variant}`,
    `jl-btn--${size}`,
    block ? 'jl-btn--block' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}

/* ---- IconButton ---- */
const CSS_IconButton = `
.jl-iconbtn{
  display:inline-flex;align-items:center;justify-content:center;
  border:1px solid transparent;border-radius:var(--radius-pill);
  cursor:pointer;color:var(--text-body);background:transparent;
  transition:background var(--dur-fast) var(--ease-soft),
             color var(--dur-fast) var(--ease-soft),
             border-color var(--dur-fast) var(--ease-soft),
             transform var(--dur-fast) var(--ease-soft);
}
.jl-iconbtn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring);}
.jl-iconbtn:active{transform:translateY(1px);}
.jl-iconbtn[disabled]{opacity:.45;cursor:not-allowed;}
.jl-iconbtn--sm{width:34px;height:34px;}
.jl-iconbtn--md{width:42px;height:42px;}
.jl-iconbtn--lg{width:50px;height:50px;}
.jl-iconbtn--ghost:hover:not([disabled]){background:rgba(44,33,24,.07);}
.jl-iconbtn--soft{background:var(--surface-panel);}
.jl-iconbtn--soft:hover:not([disabled]){background:var(--oat);}
.jl-iconbtn--solid{background:var(--accent-primary);color:var(--text-on-dark);}
.jl-iconbtn--solid:hover:not([disabled]){background:#1d150e;}
.jl-iconbtn--outline{border-color:var(--border-soft);}
.jl-iconbtn--outline:hover:not([disabled]){border-color:var(--gold);color:var(--espresso);}
`;

/** Circular icon-only button (Lucide glyph or any node as children). */
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  ...rest
}) {
  useStyleOnce('jl-iconbtn-css', CSS_IconButton);
  const cls = ['jl-iconbtn', `jl-iconbtn--${variant}`, `jl-iconbtn--${size}`, className]
    .filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}

/* ---- TextField ---- */
const CSS_TextField = `
.jl-field{display:flex;flex-direction:column;gap:.4rem;font-family:var(--font-sans);}
.jl-field__label{
  font-size:var(--fs-xs);font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-muted);
}
.jl-field__wrap{position:relative;display:flex;align-items:center;}
.jl-field__icon{
  position:absolute;left:.85rem;display:flex;color:var(--text-subtle);pointer-events:none;
}
.jl-field__input{
  width:100%;font-family:var(--font-sans);font-size:var(--fs-body);color:var(--text-strong);
  background:var(--surface-card);border:1px solid var(--border-soft);
  border-radius:var(--radius-md);padding:.75rem .9rem;line-height:1.3;
  transition:border-color var(--dur-fast) var(--ease-soft),
             box-shadow var(--dur-fast) var(--ease-soft),background var(--dur-fast) var(--ease-soft);
}
.jl-field__input::placeholder{color:var(--text-subtle);}
.jl-field--icon .jl-field__input{padding-left:2.5rem;}
.jl-field__input:hover{border-color:var(--mocha);}
.jl-field__input:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px var(--focus-ring);}
.jl-field__input:disabled{opacity:.55;cursor:not-allowed;}
.jl-field--error .jl-field__input{border-color:var(--danger);}
.jl-field--error .jl-field__input:focus{box-shadow:0 0 0 3px rgba(122,30,34,.25);}
.jl-field__hint{font-size:var(--fs-xs);color:var(--text-subtle);}
.jl-field--error .jl-field__hint{color:var(--danger);}
textarea.jl-field__input{resize:vertical;min-height:96px;}
`;

/** Labeled text input (or textarea) with optional leading icon + hint. */
function TextField({
  label,
  hint,
  error = false,
  icon,
  multiline = false,
  id,
  className = '',
  ...rest
}) {
  useStyleOnce('jl-field-css', CSS_TextField);
  const fid = id || `jl-f-${Math.random().toString(36).slice(2, 8)}`;
  const cls = ['jl-field', icon ? 'jl-field--icon' : '', error ? 'jl-field--error' : '', className]
    .filter(Boolean).join(' ');
  const Input = multiline ? 'textarea' : 'input';
  return (
    <div className={cls}>
      {label && <label className="jl-field__label" htmlFor={fid}>{label}</label>}
      <div className="jl-field__wrap">
        {icon && <span className="jl-field__icon">{icon}</span>}
        <Input id={fid} className="jl-field__input" {...rest} />
      </div>
      {hint && <span className="jl-field__hint">{hint}</span>}
    </div>
  );
}

/* ---- Select ---- */
const CSS_Select = `
.jl-select{display:flex;flex-direction:column;gap:.4rem;font-family:var(--font-sans);}
.jl-select__label{
  font-size:var(--fs-xs);font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-caps);text-transform:uppercase;color:var(--text-muted);
}
.jl-select__wrap{position:relative;display:flex;align-items:center;}
.jl-select__el{
  width:100%;appearance:none;font-family:var(--font-sans);font-size:var(--fs-body);
  color:var(--text-strong);background:var(--surface-card);
  border:1px solid var(--border-soft);border-radius:var(--radius-md);
  padding:.75rem 2.4rem .75rem .9rem;line-height:1.3;cursor:pointer;
  transition:border-color var(--dur-fast) var(--ease-soft),box-shadow var(--dur-fast) var(--ease-soft);
}
.jl-select__el:hover{border-color:var(--mocha);}
.jl-select__el:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px var(--focus-ring);}
.jl-select__el:disabled{opacity:.55;cursor:not-allowed;}
.jl-select__chev{
  position:absolute;right:.9rem;display:flex;color:var(--text-subtle);pointer-events:none;
}
`;

/** Styled native <select> with small-caps label + chevron. */
function Select({
  label,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  useStyleOnce('jl-select-css', CSS_Select);
  const fid = id || `jl-s-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <div className={['jl-select', className].filter(Boolean).join(' ')}>
      {label && <label className="jl-select__label" htmlFor={fid}>{label}</label>}
      <div className="jl-select__wrap">
        <select id={fid} className="jl-select__el" {...rest}>
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lbl}</option>;
          })}
          {children}
        </select>
        <span className="jl-select__chev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>
  );
}

/* ---- Checkbox ---- */
const CSS_Checkbox = `
.jl-check{display:inline-flex;align-items:flex-start;gap:.6rem;cursor:pointer;
  font-family:var(--font-sans);font-size:var(--fs-body);color:var(--text-body);line-height:1.4;}
.jl-check input{position:absolute;opacity:0;width:0;height:0;}
.jl-check__box{
  flex:none;width:20px;height:20px;margin-top:1px;border-radius:var(--radius-xs);
  border:1.5px solid var(--border-strong);background:var(--surface-card);
  display:flex;align-items:center;justify-content:center;color:var(--text-on-dark);
  transition:background var(--dur-fast) var(--ease-soft),border-color var(--dur-fast) var(--ease-soft);
}
.jl-check__box svg{opacity:0;transform:scale(.6);transition:all var(--dur-fast) var(--ease-out);}
.jl-check:hover .jl-check__box{border-color:var(--gold);}
.jl-check input:checked + .jl-check__box{background:var(--accent-primary);border-color:var(--accent-primary);}
.jl-check input:checked + .jl-check__box svg{opacity:1;transform:scale(1);}
.jl-check input:focus-visible + .jl-check__box{box-shadow:0 0 0 3px var(--focus-ring);}
.jl-check input:disabled ~ *{opacity:.5;}
`;

/** Checkbox with warm espresso fill + soft check animation. */
function Checkbox({ label, id, className = '', ...rest }) {
  useStyleOnce('jl-check-css', CSS_Checkbox);
  const fid = id || `jl-c-${Math.random().toString(36).slice(2, 8)}`;
  return (
    <label className={['jl-check', className].filter(Boolean).join(' ')} htmlFor={fid}>
      <input type="checkbox" id={fid} {...rest} />
      <span className="jl-check__box" aria-hidden="true">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span className="jl-check__text">{label}</span>}
    </label>
  );
}

/* ---- Card ---- */
const CSS_Card = `
.jl-card{
  background:var(--surface-card);border:1px solid var(--border-hairline);
  border-radius:var(--radius-lg);box-shadow:var(--shadow-sm);
  overflow:hidden;color:var(--text-body);font-family:var(--font-sans);
  transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out);
}
.jl-card--pad{padding:var(--card-pad);}
.jl-card--cream{background:var(--surface-cream);}
.jl-card--panel{background:var(--surface-panel);}
.jl-card--interactive{cursor:pointer;}
.jl-card--interactive:hover{transform:translateY(-3px);box-shadow:var(--shadow-md);}
.jl-card--interactive:active{transform:translateY(-1px);}
.jl-card__media{display:block;width:100%;object-fit:cover;}
.jl-card__body{padding:var(--card-pad);}
`;

/** Warm surface container. Optionally interactive (lifts on hover). */
function Card({
  children,
  surface = 'card',
  padded = false,
  interactive = false,
  media,
  mediaHeight = 180,
  className = '',
  ...rest
}) {
  useStyleOnce('jl-card-css', CSS_Card);
  const cls = [
    'jl-card',
    surface !== 'card' ? `jl-card--${surface}` : '',
    padded ? 'jl-card--pad' : '',
    interactive ? 'jl-card--interactive' : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {media && (
        <img className="jl-card__media" src={media} alt=""
          style={{ height: typeof mediaHeight === 'number' ? `${mediaHeight}px` : mediaHeight }} />
      )}
      {media ? <div className="jl-card__body">{children}</div> : children}
    </div>
  );
}

/* ---- Badge ---- */
const CSS_Badge = `
.jl-badge{
  display:inline-flex;align-items:center;gap:.35em;font-family:var(--font-sans);
  font-size:var(--fs-xs);font-weight:var(--fw-semibold);letter-spacing:var(--ls-wide);
  padding:.3rem .6rem;border-radius:var(--radius-pill);line-height:1;white-space:nowrap;
  border:1px solid transparent;
}
.jl-badge--neutral{background:var(--surface-panel);color:var(--text-muted);}
.jl-badge--gold{background:rgba(140,118,59,.15);color:var(--gold);}
.jl-badge--forest{background:rgba(67,82,57,.15);color:var(--forest);}
.jl-badge--maroon{background:rgba(122,30,34,.12);color:var(--maroon);}
.jl-badge--espresso{background:var(--espresso);color:var(--text-on-dark);}
.jl-badge--outline{background:transparent;border-color:var(--gold);color:var(--gold);}
.jl-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
`;

/** Small status / category pill. */
function Badge({ children, tone = 'neutral', dot = false, className = '', ...rest }) {
  useStyleOnce('jl-badge-css', CSS_Badge);
  const cls = ['jl-badge', `jl-badge--${tone}`, className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot && <span className="jl-badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}

/* ---- ProgressBar ---- */
const CSS_ProgressBar = `
.jl-prog{font-family:var(--font-sans);display:flex;flex-direction:column;gap:.5rem;}
.jl-prog__top{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;}
.jl-prog__label{font-size:var(--fs-sm);color:var(--text-muted);font-weight:var(--fw-medium);}
.jl-prog__value{font-size:var(--fs-sm);color:var(--text-strong);font-weight:var(--fw-semibold);}
.jl-prog__track{
  position:relative;height:12px;border-radius:var(--radius-pill);
  background:var(--surface-panel);overflow:hidden;box-shadow:var(--shadow-inset);
}
.jl-prog__fill{
  position:absolute;inset:0 auto 0 0;height:100%;border-radius:var(--radius-pill);
  background:linear-gradient(90deg,var(--gold) 0%,var(--gold-soft) 100%);
  transition:width var(--dur-slow) var(--ease-out);
}
.jl-prog--forest .jl-prog__fill{background:linear-gradient(90deg,var(--forest) 0%,var(--forest-soft) 100%);}
.jl-prog--espresso .jl-prog__fill{background:linear-gradient(90deg,var(--coffee) 0%,var(--mocha) 100%);}
.jl-prog__caption{font-size:var(--fs-xs);color:var(--text-subtle);}
`;

/** Progress meter — cashback / points toward next reward. */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueText,
  caption,
  tone = 'gold',
  className = '',
  ...rest
}) {
  useStyleOnce('jl-prog-css', CSS_ProgressBar);
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const cls = ['jl-prog', `jl-prog--${tone}`, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      {(label || valueText) && (
        <div className="jl-prog__top">
          {label && <span className="jl-prog__label">{label}</span>}
          {valueText && <span className="jl-prog__value">{valueText}</span>}
        </div>
      )}
      <div className="jl-prog__track" role="progressbar"
        aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="jl-prog__fill" style={{ width: `${pct}%` }} />
      </div>
      {caption && <span className="jl-prog__caption">{caption}</span>}
    </div>
  );
}

/* ---- MenuRow ---- */
const CSS_MenuRow = `
.jl-menurow{
  display:flex;align-items:flex-start;gap:1rem;font-family:var(--font-sans);
  padding:1rem 0;border-bottom:1px dashed var(--border-soft);
}
.jl-menurow:last-child{border-bottom:none;}
.jl-menurow__thumb{
  flex:none;width:64px;height:64px;border-radius:var(--radius-md);object-fit:cover;
  box-shadow:var(--shadow-xs);
}
.jl-menurow__main{flex:1;min-width:0;}
.jl-menurow__head{display:flex;align-items:baseline;gap:.5rem;flex-wrap:wrap;}
.jl-menurow__name{
  font-family:var(--font-sans);font-weight:var(--fw-semibold);
  text-transform:uppercase;letter-spacing:var(--ls-wide);
  font-size:var(--fs-body);color:var(--text-strong);
}
.jl-menurow__script{
  font-family:var(--font-script);font-size:var(--fs-h4);
  color:var(--gold);line-height:1;text-transform:none;letter-spacing:0;
}
.jl-menurow__leader{flex:1;border-bottom:1px dotted var(--border-soft);transform:translateY(-4px);min-width:16px;}
.jl-menurow__price{
  font-family:var(--font-display);font-size:var(--fs-h4);font-weight:var(--fw-semibold);
  color:var(--espresso);white-space:nowrap;
}
.jl-menurow__desc{margin:.35rem 0 0;font-size:var(--fs-sm);color:var(--text-muted);line-height:1.5;}
.jl-menurow__tags{display:flex;gap:.4rem;margin-top:.5rem;flex-wrap:wrap;}
`;

/** A single menu line: caps name + optional script modifier, price, description. */
function MenuRow({
  name,
  script,
  price,
  description,
  thumb,
  tags,
  className = '',
  ...rest
}) {
  useStyleOnce('jl-menurow-css', CSS_MenuRow);
  return (
    <div className={['jl-menurow', className].filter(Boolean).join(' ')} {...rest}>
      {thumb && <img className="jl-menurow__thumb" src={thumb} alt="" />}
      <div className="jl-menurow__main">
        <div className="jl-menurow__head">
          <span className="jl-menurow__name">{name}</span>
          {script && <span className="jl-menurow__script">{script}</span>}
          <span className="jl-menurow__leader" aria-hidden="true" />
          {price != null && <span className="jl-menurow__price">{price}</span>}
        </div>
        {description && <p className="jl-menurow__desc">{description}</p>}
        {tags && <div className="jl-menurow__tags">{tags}</div>}
      </div>
    </div>
  );
}

/* ---- Avatar ---- */
const CSS_Avatar = `
.jl-avatar{
  display:inline-flex;align-items:center;justify-content:center;flex:none;
  border-radius:50%;overflow:hidden;font-family:var(--font-display);
  font-weight:var(--fw-semibold);background:var(--espresso);color:var(--cream);
  border:2px solid var(--linen);box-shadow:var(--shadow-xs);text-transform:uppercase;
}
.jl-avatar img{width:100%;height:100%;object-fit:cover;}
.jl-avatar--sm{width:32px;height:32px;font-size:.8rem;}
.jl-avatar--md{width:44px;height:44px;font-size:1.05rem;}
.jl-avatar--lg{width:64px;height:64px;font-size:1.5rem;}
.jl-avatar--gold{background:var(--gold);color:var(--espresso);}
.jl-avatar--forest{background:var(--forest);}
`;

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('');
}

/** Circular user avatar — image or initials fallback. */
function Avatar({ src, name = '', size = 'md', tone = 'espresso', className = '', ...rest }) {
  useStyleOnce('jl-avatar-css', CSS_Avatar);
  const cls = ['jl-avatar', `jl-avatar--${size}`, tone !== 'espresso' ? `jl-avatar--${tone}` : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}

/* ---- Logo ---- */
const CSS_Logo = `
.jl-logo{display:inline-flex;flex-direction:column;align-items:center;line-height:1;color:var(--espresso);}
.jl-logo--start{align-items:flex-start;}
.jl-logo__word{
  font-family:var(--font-display);font-weight:var(--fw-medium);
  letter-spacing:.01em;line-height:.9;color:inherit;
}
.jl-logo__tag{
  font-family:var(--font-sans);font-weight:var(--fw-medium);
  text-transform:uppercase;color:inherit;opacity:.9;
}
.jl-logo--onDark{color:var(--cream);}
.jl-logo__mono{
  font-family:var(--font-display);font-weight:var(--fw-semibold);
  display:inline-flex;align-items:center;justify-content:center;
  border:1.5px solid currentColor;border-radius:50%;color:inherit;line-height:1;
}
`;

const LOGO_SIZES = {
  sm: { word: '1.9rem', tag: '0.5rem', tagLs: '0.34em', gap: '0.15rem', mono: 40, monoF: '1.4rem' },
  md: { word: '2.9rem', tag: '0.62rem', tagLs: '0.4em', gap: '0.2rem', mono: 54, monoF: '1.9rem' },
  lg: { word: '4.2rem', tag: '0.8rem', tagLs: '0.46em', gap: '0.35rem', mono: 76, monoF: '2.7rem' },
};

/** Julieta wordmark, rendered as type (no vector supplied). */
function Logo({
  variant = 'full',
  size = 'md',
  align = 'center',
  onDark = false,
  className = '',
  ...rest
}) {
  useStyleOnce('jl-logo-css', CSS_Logo);
  const s = LOGO_SIZES[size] || LOGO_SIZES.md;
  const cls = ['jl-logo', align === 'start' ? 'jl-logo--start' : '', onDark ? 'jl-logo--onDark' : '', className]
    .filter(Boolean).join(' ');

  if (variant === 'monogram') {
    return (
      <span className={['jl-logo', onDark ? 'jl-logo--onDark' : '', className].filter(Boolean).join(' ')} {...rest}>
        <span className="jl-logo__mono" style={{ width: s.mono, height: s.mono, fontSize: s.monoF }}>J</span>
      </span>
    );
  }
  return (
    <span className={cls} style={{ gap: s.gap }} {...rest}>
      <span className="jl-logo__word" style={{ fontSize: s.word }}>Julieta</span>
      {variant === 'full' && (
        <span className="jl-logo__tag" style={{ fontSize: s.tag, letterSpacing: s.tagLs }}>
          Books&nbsp;&amp;&nbsp;Coffee
        </span>
      )}
    </span>
  );
}

/* ---- Eyebrow ---- */
const CSS_Eyebrow = `
.jl-eyebrow{
  display:inline-flex;align-items:center;gap:.6rem;font-family:var(--font-sans);
  font-size:var(--fs-eyebrow);font-weight:var(--fw-semibold);
  letter-spacing:var(--ls-eyebrow);text-transform:uppercase;color:var(--gold);
}
.jl-eyebrow--muted{color:var(--text-muted);}
.jl-eyebrow--onDark{color:var(--gold-soft);}
.jl-eyebrow__rule{width:26px;height:1px;background:currentColor;opacity:.7;}
`;

/** Small-caps section label with a leading gold rule — the marketing eyebrow. */
function Eyebrow({ children, tone = 'gold', rule = true, className = '', ...rest }) {
  useStyleOnce('jl-eyebrow-css', CSS_Eyebrow);
  const cls = ['jl-eyebrow', tone !== 'gold' ? `jl-eyebrow--${tone}` : '', className]
    .filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {rule && <span className="jl-eyebrow__rule" aria-hidden="true" />}
      {children}
    </span>
  );
}

Object.assign(window.JBC, { Button, IconButton, TextField, Select, Checkbox, Card, Badge, ProgressBar, MenuRow, Avatar, Logo, Eyebrow });
window.JulietaBooksCoffeeDesignSystem_302e87 = window.JBC; // alias so screen files resolve
