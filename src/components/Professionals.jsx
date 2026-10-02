import './Professionals.css'

const professionals = [
  {
    name: 'Dr. Carlos Martínez',
    role: 'Psiquiatra',
    location: 'Encarnación',
    phone: '+595 21 000 001',
  },
  {
    name: 'Lic. María Gómez',
    role: 'Psicóloga Clínica',
    location: 'Encarnación',
    phone: '+595 21 000 002',
  },
  {
    name: 'Dr. Pedro Benítez',
    role: 'Médico General',
    location: 'Ciudad del Este',
    phone: '+595 21 000 003',
  },
  {
    name: 'Lic. Ana Riveros',
    role: 'Psicóloga',
    location: 'Hohenau',
    phone: '+595 21 000 004',
  },
]

export default function Professionals() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Profesionales de la Salud</h2>
        <p className="section-desc">
          Contactos de profesionales del Departamento de Itapúa que pueden ayudarte.
        </p>
        <div className="card-grid">
          {professionals.map((p) => (
            <div key={p.name} className="card pro-card">
              <div className="pro-avatar">{p.name.charAt(0)}</div>
              <h3>{p.name}</h3>
              <p className="pro-role">{p.role}</p>
              <p className="pro-loc">📍 {p.location}</p>
              <a href={`tel:${p.phone.replace(/\s/g, '')}`} className="pro-phone">
                📞 {p.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
