const AlertMessage = ({ alertInfo }) => {
  if (!alertInfo.show) return null;
  return (
    <div className="position-fixed bottom-0 start-50 translate-middle-x p-3" style={{ zIndex: 1060 }}>
      <div className={`alert alert-${alertInfo.type} shadow d-flex align-items-center animate__animated animate__fadeInUp`} role="alert">
        <i className={`bi bi-${alertInfo.type === 'success' ? 'check-circle-fill' : 'exclamation-triangle-fill'} me-2 fs-5`}></i>
        <div>{alertInfo.message}</div>
      </div>
    </div>
  );
};

export default AlertMessage;