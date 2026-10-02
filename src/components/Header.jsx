import './Header.css'

export default function Header({ page, setPage }) {
  const nav = [
    { id: 'home', label: 'Inicio' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'profesionales', label: 'Profesionales' },
    { id: 'emergencia', label: 'Emergencia' },
  ]

  return (
    <header className="header">
      <div className="container header-inner">
        <button className="logo" onClick={() => setPage('home')}>
          <span className="logo-icon">🧠</span>
          <span>Salud Mental Itapúa</span>
        </button>
        <nav className="nav">
          {nav.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${page === item.id ? 'active' : ''}`}
              onClick={() => setPage(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
