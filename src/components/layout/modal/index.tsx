import { useEffect, useState } from 'react';
import './styles.scss';

interface IModalContentProps {
  isOpen: boolean;
  status: 'Erro' | 'Sucesso';
  text: string;
  requestCloseModal: () => void;
}

const Modal = ({ isOpen, status, text, requestCloseModal }: IModalContentProps) => {
  const [html, setHtml] = useState<HTMLElement | null>(null);
  const [modal, setModal] = useState<HTMLElement | null>(null);

  const handleClickOutside = (htmlEvent: MouseEvent) => {
    if (htmlEvent) {
      if (!modal?.contains(htmlEvent.target as Node)) {
        requestCloseModal();
        html?.removeEventListener('click', handleClickOutside);
      }
    }
  };

  const handleClick = () => {
    html?.removeEventListener('click', handleClickOutside);
    requestCloseModal();
  };

  // useEffect for listener click outside area of modal
  useEffect(() => {
    if (!html || !modal) {
      const htmlElement = document.documentElement;
      const modalElement = document.getElementById('modal');

      if (htmlElement && modalElement) {
        setHtml(htmlElement);
        setModal(modalElement);
      }
    }

    if (isOpen && html) {
      html.addEventListener('click', handleClickOutside);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className={`modal-container ${isOpen ? 'active' : ''}`}>
      <div id="modal" className="modal-content-container">
        <div className={`status-container ${status == 'Erro' ? 'error' : ''}`}>
          <h2>{status}!!!</h2>
        </div>
        <div className="text-container">
          <p>{text}</p>
        </div>

        <button onClick={handleClick} className="close-button">
          Fechar
        </button>
      </div>
    </div>
  );
};

export { Modal };
