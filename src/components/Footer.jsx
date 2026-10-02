import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          <strong>Salud Mental Itapúa</strong> — Plataforma de autoayuda en línea
        </p>
        <p className="footer-note">
          Departamento de Itapúa, Paraguay · Si necesitas ayuda, no dudes en
          contactar a un profesional.
        </p>
        <p className="footer-disclaimer">
          ⚠️ Este sitio no sustituye la atención médica profesional. En caso de
          emergencia, llama al 911.
        </p>
      </div>
    </footer>
  )
}
