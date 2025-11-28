import React, { useState } from 'react';
import HomeButton from '../../buttons/HomeButton/HomeButton';
import SettingsButton from '../../buttons/SettingsButton/SettingsButton';
import Modal from '../../Modal/Modal';
import ModeSelector from '../../ModeSelector/ModeSelector';
import styles from './Header.module.scss';

interface HeaderProps {
  showHomeButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showHomeButton = false }): React.JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.homeButton}>{showHomeButton && <HomeButton />}</div>
          <div className={styles.gameInfo}></div>
          <div className={styles.settingsButton}>
            <SettingsButton onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModeSelector />
      </Modal>
    </>
  );
};
