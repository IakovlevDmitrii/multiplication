import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { startGame, goToMainMenu } from '../../store/gameSlice';
import styles from './Game.module.scss';

const Game: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { gameState } = useAppSelector((state) => state.game);

  useEffect(() => {
    if (gameState === 'playing' && location.pathname !== '/game') {
      navigate('/game', { replace: true });
    } else if (gameState === 'finished' && location.pathname !== '/results') {
      navigate('/results', { replace: true });
    } else if (gameState === 'idle' && location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, [gameState, location.pathname, navigate]);

  const handleStartGame = () => {
    dispatch(startGame());
    navigate('/game');
  };

  const handleGoToMainMenu = () => {
    dispatch(goToMainMenu());
    navigate('/');
  };

  return (
    <div className={styles.game}>
      <Header
        onHomeClick={handleGoToMainMenu}
        showHomeButton={location.pathname !== '/'}
      />
      <main className={styles.main}>
        <Outlet context={{ onStartGame: handleStartGame, onGoToMainMenu: handleGoToMainMenu }} />
      </main>
    </div>
  );
};

export default Game;