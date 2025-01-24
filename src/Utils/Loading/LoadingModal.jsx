import './LoadingModal.css'; // Importamos el archivo CSS para estilos

const LoadingModal = () => {
  return (
    <div className="loading-modal">
      <div className="loading-content">
        <p>Cargando...</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoadingModal;