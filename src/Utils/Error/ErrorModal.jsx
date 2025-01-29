import './ErrorModal.css'; // Importamos el archivo CSS para estilos

const ErrorModal = ({message = "Error default..."}) => {
  return (
    <div className="error-modal">
      <div className="error-content">
        <p>{ message }</p>
        <div className="error-cross"></div>
      </div>
    </div>
  );
};

export default ErrorModal;