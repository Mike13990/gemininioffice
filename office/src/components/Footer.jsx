const Footer = ({ setActiveTab }) => (
  <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
    <div className="container">
      <div className="row">
        <div className="col-md-4 mb-3">
          <h5>Office Smart Store</h5>
          <p className="text-secondary small">Equipando tu espacio de trabajo con la mejor tecnología, mobiliario y accesorios ergonómicos. Mejora tu productividad con nosotros.</p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Enlaces Rápidos</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); setActiveTab('inicio'); }}>Inicio</a></li>
            <li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); setActiveTab('catalogo'); }}>Catálogo</a></li>
            <li><a href="#" className="text-secondary text-decoration-none" onClick={(e) => { e.preventDefault(); setActiveTab('videos'); }}>Innovaciones</a></li>
          </ul>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Contáctanos</h5>
          <p className="text-secondary small mb-1"><i className="bi bi-geo-alt me-2"></i>Av. Central 123, Ciudad de Negocios</p>
          <p className="text-secondary small mb-1"><i className="bi bi-envelope me-2"></i>contacto@officesmart.com</p>
          <p className="text-secondary small mb-3"><i className="bi bi-telephone me-2"></i>+1 800 555 0199</p>
          <div>
            <a href="#" className="text-white me-3 fs-5"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3 fs-5"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
      <hr className="border-secondary" />
      <div className="text-center text-secondary small">
        &copy; {new Date().getFullYear()} Office Smart Store. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;