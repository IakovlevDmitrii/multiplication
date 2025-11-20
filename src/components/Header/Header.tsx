import React from 'react';
import HomeButton from '../buttons/HomeButton/HomeButton';
import Example from '../Example/Example';
import DifficultyBar from '../DifficultyBar/DifficultyBar';
import { useAppSelector } from '../../utils/hooks';
import { GAME_STATE_VARIANTS } from '../../utils/constants';
import styles from './Header.module.scss';

interface HeaderProps {
  showHomeButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showHomeButton = false }): React.JSX.Element => {
  const { gameState } = useAppSelector(state => state.game);
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.homeButton}>{showHomeButton && <HomeButton />}</div>
        {gameState === GAME_STATE_VARIANTS.PLAYING && <Example />}
        <div className={styles.gameInfo}>
          <DifficultyBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
