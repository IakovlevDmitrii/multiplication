import React, { useState } from 'react';
import HomeButton from '../../buttons/HomeButton/HomeButton';
import SettingsButton from '../../buttons/SettingsButton/SettingsButton';
import Modal from '../../Modal/Modal';
import ModeSelector from '../../ModeSelector/ModeSelector';
import { useAppSelector } from '../../../hooks';
import { GAME_STATE_VARIANTS } from '../../../constants';
import styles from './Header.module.scss';

export const Header = () => {
  const { gameState } = useAppSelector(state => state.game);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showHomeButton =
    gameState === GAME_STATE_VARIANTS.PLAYING || gameState === GAME_STATE_VARIANTS.FINISHED;
  const showSettingsButton = gameState === GAME_STATE_VARIANTS.IDLE;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.homeButton}>{showHomeButton && <HomeButton />}</div>
          <div className={styles.gameInfo}></div>
          <div className={styles.settingsButton}>
            {showSettingsButton && <SettingsButton onClick={() => setIsModalOpen(true)} />}
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModeSelector />
      </Modal>
    </>
  );
};
