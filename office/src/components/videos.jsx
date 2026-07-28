import { VIDEOS_DATA } from '../data/productos.js';

const Videos = () => (
  <div className="container py-5 animate__animated animate__fadeIn">
    <div className="text-center mb-5">
      <h2 className="display-6 fw-bold">Innovaciones para la Oficina</h2>
      <p className="lead text-muted">Descubre las últimas tendencias tecnológicas y ergonómicas para modernizar tu espacio de trabajo.</p>
    </div>
    <div className="row g-4">
      {VIDEOS_DATA.map(video => (
        <div className="col-md-6" key={video.id}>
          <div className="card h-100 shadow border-0 bg-light">
            <div className="card-body p-4">
              <h4 className="card-title text-primary fw-bold mb-2">{video.titulo}</h4>
              <p className="card-text text-muted mb-4">{video.desc}</p>
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
                <iframe 
                  src={video.url} 
                  title={video.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Videos;