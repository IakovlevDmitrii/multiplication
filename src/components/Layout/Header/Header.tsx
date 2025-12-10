import React, { useState } from 'react';
import { HomeButton } from './HomeButton/HomeButton';
import { SettingsButton } from './SettingsButton/SettingsButton';
import { Modal } from '../../Modal/Modal';
import { ModeSelector } from '../../ModeSelector/ModeSelector';
import { useAppSelector } from '../../../hooks';
import { GAME_STATE } from '../../../constants';
import styles from './Header.module.scss';

export const Header = () => {
  const { gameState } = useAppSelector(state => state.game);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showHomeButton = gameState === GAME_STATE.PLAYING || gameState === GAME_STATE.FINISHED;
  const showSettingsButton = gameState === GAME_STATE.IDLE;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.homeButton}>{showHomeButton && <HomeButton />}</div>
        <h1 className={styles.title}>Умножение</h1>
        <div className={styles.settingsButton}>
          {showSettingsButton && <SettingsButton onClick={() => setIsModalOpen(true)} />}
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModeSelector />
      </Modal>
    </>
  );
};
