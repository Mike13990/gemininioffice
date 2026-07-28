
const PdfViewer = () => (
  <div className="container py-4 animate__animated animate__fadeIn d-flex flex-column" style={{ minHeight: '80vh' }}>
    <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
      <div>
        <h2 className="fw-bold mb-1">Catálogo Digital</h2>
        <p className="text-muted mb-0">Consulta nuestro portafolio completo en formato PDF.</p>
      </div>
      <div>
        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-primary me-2">
          <i className="bi bi-box-arrow-up-right me-2"></i>Abrir en nueva pestaña
        </a>
        <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download className="btn btn-primary">
          <i className="bi bi-download me-2"></i>Descargar PDF
        </a>
      </div>
    </div>
    <div className="flex-grow-1 bg-light rounded border shadow-sm p-2">
      <iframe 
        src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
        width="100%" 
        height="100%" 
        style={{ minHeight: '600px', border: 'none' }}
        title="Catálogo PDF Office Smart Store"
      >
        <p>Tu navegador no soporta iframes para visualizar el PDF. Puedes <a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf">descargarlo aquí</a>.</p>
      </iframe>
    </div>
  </div>
);

export default PdfViewer;