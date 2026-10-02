import './Hero.css'

export default function Hero({ setPage }) {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>Salud Mental Itapúa</h1>
        <p className="hero-subtitle">
          Una plataforma de autoayuda en línea para la prevención de la depresión
          y el suicidio, conectándote con profesionales de la salud del Departamento
          de Itapúa.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => setPage('recursos')}>
            Ver recursos de autoayuda
          </button>
          <button className="btn btn-outline" onClick={() => setPage('emergencia')}>
            Ayuda de emergencia
          </button>
        </div>
      </div>
    </section>
  )
}
