import { useState } from 'react';

const Navbar = ({ activeTab, setActiveTab, setIsCartOpen, cartTotalQty, setCategoriaFiltro }) => {
  // Estado para controlar la apertura del menú lateral en móviles
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Función manejadora para cerrar el menú automáticamente al hacer clic en un enlace
  const handleNavClick = (tab) => {
    setActiveTab(tab);
    if (tab === 'catalogo') setCategoriaFiltro('Todas');
    setIsNavOpen(false); 
  };

  // Función para renderizar los enlaces y no repetir código (DRY)
  const renderNavLinks = (isMobile = false) => (
    <ul className={`navbar-nav ${isMobile ? '' : 'me-auto mb-2 mb-lg-0'}`}>
      {[
        { id: 'inicio', label: 'Inicio', icon: 'bi-house-door' },
        { id: 'catalogo', label: 'Catálogo', icon: 'bi-grid' },
        { id: 'videos', label: 'Innovaciones', icon: 'bi-play-circle' },
        { id: 'pdf', label: 'Catálogo Digital', icon: 'bi-file-earmark-pdf' }
      ].map(link => (
        <li className={`nav-item ${isMobile ? 'mb-3' : ''}`} key={link.id}>
          <a 
            className={`nav-link ${isMobile ? 'text-white fs-5' : ''} ${activeTab === link.id ? 'active fw-bold' : ''}`} 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavClick(link.id); }}
          >
            {isMobile && <i className={`bi ${link.icon} me-2`}></i>}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
        <div className="container">
          {/* Botón Hamburguesa que abre el Slider Bar */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={() => setIsNavOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand fw-bold" href="#" onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}>
            <i className="bi bi-shop me-2"></i>Office Smart Store
          </a>

          {/* Menú tradicional de Escritorio (Oculto en móviles) */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            {renderNavLinks(false)}
          </div>

          {/* Botón Mi Carrito (Siempre visible) */}
          <button className="btn btn-outline-light position-relative ms-auto ms-lg-0" onClick={() => setIsCartOpen(true)}>
            <i className="bi bi-cart3"></i> <span className="d-none d-sm-inline">Mi Carrito</span>
            {cartTotalQty > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotalQty}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Menú Lateral Offcanvas (Slider Bar) solo para Móviles */}
      <div 
        className={`offcanvas offcanvas-start bg-primary text-white d-lg-none ${isNavOpen ? 'show' : ''}`} 
        tabIndex="-1" 
        style={{ visibility: isNavOpen ? 'visible' : 'hidden', transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="offcanvas-header border-bottom border-light border-opacity-25">
          <h5 className="offcanvas-title fw-bold"><i className="bi bi-shop me-2"></i>Menú</h5>
          <button type="button" className="btn-close btn-close-white" onClick={() => setIsNavOpen(false)}></button>
        </div>
        <div className="offcanvas-body">
          {renderNavLinks(true)}
        </div>
      </div>

      {/* Fondo semitransparente (Backdrop) al abrir el menú móvil */}
      {isNavOpen && (
        <div className="offcanvas-backdrop fade show d-lg-none" onClick={() => setIsNavOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;