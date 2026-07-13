/* Julieta Books & Coffee — Books catalog: a quick browse of what's on the shelves. */
const JLb = window.JulietaBooksCoffeeDesignSystem_302e87;
const { Eyebrow, Button, Card, Badge } = JLb;
const BIcon = window.JLIcon;

function BookCard({ book, i }) {
  return (
    <Card interactive className="jlx-book reveal" style={{ transitionDelay: `${(i % 4) * 70}ms` }}>
      <div className="jlx-book__cover" style={{ '--spine': book.spine }}>
        <span className="jlx-book__genre">{book.genre}</span>
        <span className="jlx-book__title">{book.title}</span>
        <span className="jlx-book__author">{book.author}</span>
        <span className="jlx-book__year">{book.year}</span>
      </div>
      <div className="jlx-book__body">
        <p className="jlx-book__note">{book.note}</p>
        <span className="jlx-book__tag"><BIcon n="book-open" /> Para leer aquí</span>
      </div>
    </Card>
  );
}

function BooksPage({ onNav }) {
  const [genre, setGenre] = React.useState('Todos');
  const [q, setQ] = React.useState('');
  window.useReveal();
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const list = window.BOOKS.filter((b) =>
    (genre === 'Todos' || b.genre === genre) &&
    (q === '' || (b.title + ' ' + b.author).toLowerCase().includes(q.toLowerCase())));

  return (
    <main className="jlx-page jlx-bookspage">
      <div className="jlx-bookspage__hero reveal">
        <Eyebrow>La estantería</Eyebrow>
        <h1 className="jlx-h2">Libros para acompañar tu café</h1>
        <p>Un vistazo rápido a lo que encontrarás para leer en la cafetería. Toma un título de la
          estantería y quédate el tiempo que quieras — algunos también son canjeables con tus puntos.</p>
      </div>

      <div className="jlx-bookspage__bar reveal">
        <div className="jlx-bookspage__search">
          <BIcon n="search" />
          <input placeholder="Buscar por título o autor…" value={q}
            onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="jlx-bookspage__genres">
          {window.BOOK_GENRES.map((g) => (
            <button key={g} className={`jlx-chip ${genre === g ? 'on' : ''}`} onClick={() => setGenre(g)}>{g}</button>
          ))}
        </div>
      </div>

      <div className="jlx-bookspage__count reveal">
        {list.length} {list.length === 1 ? 'título' : 'títulos'}
        {genre !== 'Todos' ? ` en ${genre}` : ' en la estantería'}
      </div>

      <div className="jlx-bookspage__grid" key={genre + q}>
        {list.map((b, i) => <BookCard key={b.title} book={b} i={i} />)}
        {!list.length && (
          <div className="jlx-menupage__empty reveal">
            <BIcon n="book-x" />
            <p>No encontramos ese título. Pregúntanos en el local, quizá lo tengamos guardado.</p>
          </div>
        )}
      </div>

      <div className="jlx-bookspage__cta reveal">
        <div>
          <h3>¿Buscas algo en especial?</h3>
          <p>Nuestra estantería rota cada semana. Ven y pregúntanos por tu próxima lectura.</p>
        </div>
        <a className="jlx-visit__btn" href={window.JL_MAPS} target="_blank" rel="noopener">
          <BIcon n="map-pin" /> Cómo llegar
        </a>
      </div>
    </main>
  );
}

window.BooksPage = BooksPage;
