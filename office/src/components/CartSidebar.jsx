import { useState } from 'react';

const CartSidebar = ({ isCartOpen, setIsCartOpen, cart, updateCartQty, removeFromCart, clearCart, cartTotalQty, cartTotalPrice, setActiveTab }) => {
  // Estado local para alternar entre ver la lista del carrito o el formulario de pago
  const [isCheckout, setIsCheckout] = useState(false);

  // Función para procesar el formulario de pago
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    
    // Obtenemos los datos introducidos en el formulario
    const formData = new FormData(e.target);
    const nombre = formData.get('nombre');
    const direccion = formData.get('direccion');

    // Mostramos la confirmación al usuario
    alert(`¡Gracias por tu compra, ${nombre}!\nTu pedido será enviado a: ${direccion}\nTotal pagado: $${cartTotalPrice.toFixed(2)}`);
    
    // Vaciamos el carrito automáticamente usando removeFromCart para no disparar la alerta de confirmación de clearCart
    cart.forEach(item => removeFromCart(item.id));
    
    // Reseteamos la vista y cerramos el panel lateral
    setIsCheckout(false);
    setIsCartOpen(false);
  };

  // Si el usuario elimina productos manualmente y el carrito queda vacío, salimos del modo checkout
  if (cart.length === 0 && isCheckout) {
    setIsCheckout(false);
  }

  return (
    <>
      {isCartOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" 
          style={{ zIndex: 1040 }} 
          onClick={() => { setIsCartOpen(false); setIsCheckout(false); }}
        ></div>
      )}
      
      <div 
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg transition-transform ${isCartOpen ? 'translate-middle-x-0' : 'translate-middle-x-100'}`} 
        style={{ width: '350px', maxWidth: '100vw', zIndex: 1050, transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="d-flex flex-column h-100">
          
          <div className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">
              {isCheckout ? (
                <><i className="bi bi-credit-card me-2"></i>Finalizar Compra</>
              ) : (
                <><i className="bi bi-cart-fill me-2"></i>Mi Carrito</>
              )}
            </h5>
            <button className="btn-close btn-close-white" onClick={() => { setIsCartOpen(false); setIsCheckout(false); }}></button>
          </div>
          
          <div className="flex-grow-1 overflow-auto p-3">
            {cart.length === 0 ? (
              <div className="text-center text-muted mt-5">
                <i className="bi bi-cart-x display-1 text-light mb-3"></i>
                <p>Tu carrito está vacío.</p>
                <button 
                  className="btn btn-outline-primary mt-2" 
                  onClick={() => { setIsCartOpen(false); setActiveTab('catalogo'); }}
                >
                  Ir al Catálogo
                </button>
              </div>
            ) : isCheckout ? (
              /* --- FORMULARIO DE CHECKOUT --- */
              <form id="checkoutForm" onSubmit={handleCheckoutSubmit} className="animate__animated animate__fadeIn">
                <div className="mb-3">
                  <label className="form-label fw-bold">Nombre completo</label>
                  <input type="text" className="form-control" name="nombre" required placeholder="Ej. Juan Pérez" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Dirección de envío</label>
                  <input type="text" className="form-control" name="direccion" required placeholder="Ej. Calle Principal 123" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Método de pago</label>
                  <select className="form-select" name="pago" required>
                    <option value="">Selecciona un método...</option>
                    <option value="tarjeta">Tarjeta de Crédito / Débito</option>
                    <option value="transferencia">Transferencia Bancaria</option>
                    <option value="efectivo">Efectivo contra entrega</option>
                  </select>
                </div>
                <div className="alert alert-info py-2 mb-0">
                  <strong>Total a pagar: </strong> ${cartTotalPrice.toFixed(2)}
                </div>
              </form>
            ) : (
              /* --- LISTA DE PRODUCTOS DEL CARRITO --- */
              <ul className="list-group list-group-flush">
                {cart.map(item => (
                  <li className="list-group-item px-0 py-3 border-bottom" key={item.id}>
                    <div className="d-flex">
                      <img src={item.imagen} alt={item.nombre} className="rounded" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                      <div className="ms-3 flex-grow-1">
                        <h6 className="mb-1 text-truncate" style={{ maxWidth: '180px' }} title={item.nombre}>{item.nombre}</h6>
                        <div className="text-primary fw-bold small">${item.precio.toFixed(2)} unit.</div>
                        
                        <div className="d-flex justify-content-between align-items-center mt-2">
                          <div className="btn-group btn-group-sm">
                            <button className="btn btn-outline-secondary" onClick={() => updateCartQty(item.id, -1)}>-</button>
                            <span className="btn btn-outline-secondary disabled text-dark">{item.qty}</span>
                            <button className="btn btn-outline-secondary" onClick={() => updateCartQty(item.id, 1)}>+</button>
                          </div>
                          <span className="fw-bold text-success">${(item.precio * item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                      <button className="btn btn-link text-danger p-0 ms-2" onClick={() => removeFromCart(item.id)} title="Eliminar">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* --- PANEL INFERIOR (BOTONES) --- */}
          {cart.length > 0 && (
            <div className="bg-light p-3 border-top">
              {!isCheckout ? (
                <>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Total artículos:</span>
                    <span className="fw-bold">{cartTotalQty}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span className="fs-5">Total Compra:</span>
                    <span className="fs-5 fw-bold text-primary">${cartTotalPrice.toFixed(2)}</span>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success w-100 mb-2" onClick={() => setIsCheckout(true)}>
                      <i className="bi bi-credit-card-2-front me-2"></i> Proceder al Pago
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
                      <i className="bi bi-trash3 me-1"></i>Vaciar Carrito
                    </button>
                  </div>
                </>
              ) : (
                <div className="d-grid gap-2">
                  <button type="submit" form="checkoutForm" className="btn btn-success w-100 mb-2">
                    <i className="bi bi-check-circle me-2"></i> Confirmar y Pagar
                  </button>
                  <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => setIsCheckout(false)}>
                    <i className="bi bi-arrow-left me-1"></i> Volver al carrito
                  </button>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default CartSidebar;