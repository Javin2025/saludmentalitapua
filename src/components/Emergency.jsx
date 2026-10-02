import './Emergency.css'

export default function Emergency({ full = false }) {
  return (
    <section className={`section ${full ? '' : 'emergency-section'}`}>
      <div className="container">
        <div className="emergency-banner">
          <h2>📞 Líneas de Emergencia</h2>
          <p className="emergency-text">
            Si tú o alguien que conoces está en crisis o tiene pensamientos suicidas,
            <strong> no dudes en pedir ayuda</strong>. Estas líneas están disponibles
            24 horas, todos los días.
          </p>
          <div className="emergency-lines">
            <div className="emergency-item">
              <span className="emergency-icon">🚑</span>
              <div>
                <strong>Emergencias Médicas</strong>
                <a href="tel:911">911</a>
              </div>
            </div>
            <div className="emergency-item">
              <span className="emergency-icon">💙</span>
              <div>
                <strong>Línea de Prevención del Suicidio</strong>
                <a href="tel:+595212141200">+595 21 214 1200</a>
              </div>
            </div>
            <div className="emergency-item">
              <span className="emergency-icon">🏥</span>
              <div>
                <strong>Ministerio de Salud Pública</strong>
                <a href="tel:+59521417000">+595 21 417 000</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
