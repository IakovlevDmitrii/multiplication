import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { startGame, goToMainMenu } from '../../store/gameSlice';
import { GAME_STATE_VARIANTS } from '../../constants';

const Game: React.FC = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { gameState } = useAppSelector(state => state.game);

  useEffect(() => {
    if (gameState === GAME_STATE_VARIANTS.PLAYING && location.pathname !== '/game') {
      navigate('/game', { replace: true });
    } else if (gameState === GAME_STATE_VARIANTS.FINISHED && location.pathname !== '/results') {
      navigate('/results', { replace: true });
    } else if (gameState === GAME_STATE_VARIANTS.IDLE && location.pathname !== '/') {
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

  return <Outlet context={{ onStartGame: handleStartGame, onGoToMainMenu: handleGoToMainMenu }} />;
};

export default Game;
