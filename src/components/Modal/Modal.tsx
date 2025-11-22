import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  children,
}): React.JSX.Element | null => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть"
          >
            ×
          </button>
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
