const ProductModal = ({ showModal, selectedProduct, closeProductModal, addToCart }) => {
  if (!selectedProduct) return null;

  return (
    <>
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} onClick={closeProductModal}>
        <div className="modal-dialog modal-dialog-centered modal-lg" onClick={e => e.stopPropagation()}>
          <div className="modal-content border-0 shadow-lg animate__animated animate__zoomIn animate__faster">
            <div className="modal-header bg-light">
              <h5 className="modal-title fw-bold text-primary">{selectedProduct.nombre}</h5>
              <button type="button" className="btn-close" onClick={closeProductModal}></button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-5 mb-3 mb-md-0 text-center">
                  <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="img-fluid rounded shadow-sm" style={{ maxHeight: '300px', objectFit: 'contain' }}/>
                </div>
                <div className="col-md-7">
                  <div className="mb-2">
                    <span className="badge bg-secondary me-2">{selectedProduct.categoria}</span>
                    <span className="badge bg-info text-dark">Marca: {selectedProduct.marca}</span>
                  </div>
                  <h3 className="text-success fw-bold mb-3">${selectedProduct.precio.toFixed(2)}</h3>
                  <p className="text-dark">{selectedProduct.descCompleta}</p>
                  
                  <ul className="list-group list-group-flush mb-4 small">
                    <li className="list-group-item px-0"><strong>Material:</strong> {selectedProduct.material}</li>
                    <li className="list-group-item px-0"><strong>Color:</strong> {selectedProduct.color}</li>
                    <li className="list-group-item px-0"><strong>Garantía:</strong> {selectedProduct.garantia}</li>
                    <li className="list-group-item px-0"><strong>Disponibilidad:</strong> 
                      <span className={`ms-1 fw-bold ${selectedProduct.disponibilidad === 'En stock' ? 'text-success' : 'text-warning'}`}>
                        {selectedProduct.disponibilidad}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer bg-light">
              <button type="button" className="btn btn-outline-secondary" onClick={closeProductModal}>Cerrar</button>
              <button type="button" className="btn btn-primary px-4" onClick={() => { addToCart(selectedProduct); closeProductModal(); }}>
                <i className="bi bi-cart-plus me-2"></i>Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
};

export default ProductModal;
