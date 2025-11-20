import React from 'react';
import HomeButton from '../buttons/HomeButton/HomeButton';
import DifficultyBar from '../DifficultyBar/DifficultyBar';
import styles from './Header.module.scss';

interface HeaderProps {
  showHomeButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showHomeButton = false }): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.homeButton}>{showHomeButton && <HomeButton />}</div>
        <div className={styles.gameInfo}>
          <DifficultyBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
