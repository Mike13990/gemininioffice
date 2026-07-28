// Importamos los datos de los productos (ajusta 'data' o 'PRODUCTS_DATA' según cómo lo hayas exportado en productos.js)
import { PRODUCTS_DATA } from '../data/productos.js';

const Inicio = ({ setActiveTab, openProductModal, addToCart }) => {
  const destacados = PRODUCTS_DATA.filter(p => [2, 7, 11, 21].includes(p.id));

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="bg-light p-5 text-center mb-5 rounded shadow-sm" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80')", 
          backgroundSize: 'cover', backgroundPosition: 'center' 
      }}>
        <div className="bg-white bg-opacity-75 p-5 rounded d-inline-block">
          <h1 className="display-4 fw-bold text-primary">Renueva tu Oficina</h1>
          <p className="lead text-dark">Descubre las últimas tendencias en mobiliario, tecnología y ergonomía.</p>
          <button className="btn btn-primary btn-lg mt-3" onClick={() => setActiveTab('catalogo')}>
            Ver Catálogo Completo
          </button>
        </div>
      </div>

      <div className="container mb-5">
        <h2 className="text-center mb-4 fw-bold"><i className="bi bi-star-fill text-warning me-2"></i>Productos Destacados de la Semana</h2>
        <div className="row g-4">
          {destacados.map(product => (
            <div className="col-sm-6 col-lg-3" key={product.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="position-relative">
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">¡Oferta!</span>
                  <img src={product.imagen} className="card-img-top" alt={product.nombre} style={{ height: '200px', objectFit: 'cover' }} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate" title={product.nombre}>{product.nombre}</h5>
                  <h6 className="card-subtitle mb-2 text-primary fw-bold">${product.precio.toFixed(2)}</h6>
                  <p className="card-text text-muted small">{product.descCort}</p>
                  <div className="mt-auto d-grid gap-2">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => openProductModal(product)}>
                      <i className="bi bi-eye"></i> Ver Detalles
                    </button>
                    <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>
                      <i className="bi bi-cart-plus"></i> Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;