import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import Videos from './components/videos';
import PdfViewer from './components/PdfViewer';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartSidebar from './components/CartSidebar';
import AlertMessage from './components/AlertMessage';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [alertInfo, setAlertInfo] = useState({ show: false, message: '', type: 'success' });
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');

  useEffect(() => {
    if (!document.getElementById('bootstrap-css')) {
      const link = document.createElement('link');
      link.id = 'bootstrap-css';
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
      document.head.appendChild(link);
    }
    if (!document.getElementById('bootstrap-icons')) {
      const iconLink = document.createElement('link');
      iconLink.id = 'bootstrap-icons';
      iconLink.rel = 'stylesheet';
      iconLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css';
      document.head.appendChild(iconLink);
    }
    
    document.title = 'Office Smart Store | ' + (activeTab.charAt(0).toUpperCase() + activeTab.slice(1));
  }, [activeTab]);

  const showAlert = (message, type = 'success') => {
    setAlertInfo({ show: true, message, type });
    setTimeout(() => {
      setAlertInfo({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    showAlert(`¡${product.nombre} agregado al carrito!`);
  };

  const removeFromCart = (productId) => setCart(prevCart => prevCart.filter(item => item.id !== productId));
  
  const updateCartQty = (productId, amount) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === productId) {
        const newQty = item.qty + amount;
        return { ...item, qty: newQty > 0 ? newQty : 1 };
      }
      return item;
    }));
  };

  const clearCart = () => {
    if (window.confirm('¿Estás seguro de vaciar el carrito?')) {
      setCart([]);
      showAlert('Carrito vaciado', 'warning');
    }
  };

  const cartTotalQty = cart.reduce((total, item) => total + item.qty, 0);
  const cartTotalPrice = cart.reduce((total, item) => total + (item.precio * item.qty), 0);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeProductModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light" style={{ overflowX: 'hidden' }}>
      <style>{`
        .hover-zoom:hover { transform: translateY(-5px); box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important; }
        .transition-all { transition: all 0.3s ease; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
      `}</style>
      
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setIsCartOpen={setIsCartOpen} 
        cartTotalQty={cartTotalQty}
        setCategoriaFiltro={setCategoriaFiltro}
      />
      
      <main className="flex-grow-1">
        {activeTab === 'inicio' && <Inicio setActiveTab={setActiveTab} openProductModal={openProductModal} addToCart={addToCart} />}
        {activeTab === 'catalogo' && <Catalogo categoriaFiltro={categoriaFiltro} setCategoriaFiltro={setCategoriaFiltro} openProductModal={openProductModal} addToCart={addToCart} />}
        {activeTab === 'videos' && <Videos />}
        {activeTab === 'pdf' && <PdfViewer />}
      </main>

      <Footer setActiveTab={setActiveTab} />
      
      <ProductModal showModal={showModal} selectedProduct={selectedProduct} closeProductModal={closeProductModal} addToCart={addToCart} />
      
      <CartSidebar 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen} 
        cart={cart} 
        updateCartQty={updateCartQty} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
        cartTotalQty={cartTotalQty} 
        cartTotalPrice={cartTotalPrice}
        setActiveTab={setActiveTab}
      />
      
      <AlertMessage alertInfo={alertInfo} />
    </div>
  );
}