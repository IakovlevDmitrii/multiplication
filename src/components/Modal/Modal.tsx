import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps): React.JSX.Element | null => {
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
