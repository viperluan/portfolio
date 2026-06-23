import { Bounce, ToastContainer } from 'react-toastify';

import './styles.scss';

const ToastifyContainer = () => {
  return (
    <ToastContainer
      className="toast-container"
      toastClassName="toast-item"
      progressClassName="toast-progress"
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
};

export { ToastifyContainer };
