import './Resources.css'

const resources = [
  {
    icon: '🌬️',
    title: 'Ejercicios de respiración',
    desc: 'Técnicas de respiración profunda para reducir la ansiedad y el estrés en minutos.',
  },
  {
    icon: '📓',
    title: 'Diario emocional',
    desc: 'Registrar tus emociones diariamente te ayuda a identificar patrones y mejorar tu bienestar.',
  },
  {
    icon: '🧘',
    title: 'Mindfulness',
    desc: 'Prácticas de atención plena para vivir el presente y reducir pensamientos negativos.',
  },
  {
    icon: '💪',
    title: 'Hábitos saludables',
    desc: 'Rutinas de sueño, alimentación y ejercicio físico que fortalecen tu salud mental.',
  },
  {
    icon: '🤝',
    title: 'Apoyo social',
    desc: 'Cómo construir y mantener una red de apoyo con familia, amigos y comunidad.',
  },
  {
    icon: '📚',
    title: 'Lecturas recomendadas',
    desc: 'Guías y materiales sobre depresión, ansiedad y estrategias de afrontamiento.',
  },
]

export default function Resources({ full = false }) {
  const items = full ? resources : resources.slice(0, 3)
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Recursos de Autoayuda</h2>
        <p className="section-desc">
          Herramientas prácticas que puedes usar desde casa para cuidar tu salud mental.
        </p>
        <div className="card-grid">
          {items.map((r) => (
            <div key={r.title} className="card">
              <span className="card-icon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
