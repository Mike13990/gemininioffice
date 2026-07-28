import { PRODUCTS_DATA } from '../data/productos.js';

const Catalogo = ({ categoriaFiltro, setCategoriaFiltro, openProductModal, addToCart }) => {
  const categorias = ['Todas', 'Papelería', 'Mobiliario', 'Tecnología', 'Organización', 'Ergonomía'];
  const productosFiltrados = categoriaFiltro === 'Todas' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.categoria === categoriaFiltro);

  return (
    <div className="container py-4 animate__animated animate__fadeIn">
      <h2 className="mb-4 fw-bold border-bottom pb-2">Catálogo de Productos</h2>
      
      <div className="mb-4 d-flex flex-wrap gap-2">
        {categorias.map(cat => (
          <button 
            key={cat} 
            className={`btn rounded-pill ${categoriaFiltro === cat ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setCategoriaFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {productosFiltrados.map(product => (
          <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={product.id}>
            <div className="card h-100 shadow-sm border-0 hover-zoom transition-all">
              <img src={product.imagen} className="card-img-top" alt={product.nombre} style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="badge bg-secondary">{product.categoria}</span>
                  <span className={`badge ${product.disponibilidad === 'En stock' ? 'bg-success' : 'bg-warning text-dark'}`}>
                    {product.disponibilidad}
                  </span>
                </div>
                <h5 className="card-title fw-bold mb-1">{product.nombre}</h5>
                <p className="text-muted small mb-2">{product.marca}</p>
                <h4 className="text-primary mb-3">${product.precio.toFixed(2)}</h4>
                <p className="card-text small text-secondary flex-grow-1">{product.descCort}</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-dark" onClick={() => openProductModal(product)}>
                    <i className="bi bi-info-circle me-1"></i>Ver detalles
                  </button>
                  <button className="btn btn-primary" onClick={() => addToCart(product)}>
                    <i className="bi bi-cart-plus me-1"></i>Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;