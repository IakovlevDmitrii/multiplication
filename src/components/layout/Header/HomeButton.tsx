import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderButton } from './HeaderButton';
import { HomeIcon } from '../../../icons';
import { useAppDispatch } from '../../../hooks';
import { goToMainMenu } from '../../../store/gameSlice';

interface HomeButtonProps {
  className?: string;
}

export const HomeButton = ({ className }: HomeButtonProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleGoToMainMenu = () => {
    dispatch(goToMainMenu());
    navigate('/');
  };
  return (
    <HeaderButton
      title="В главное меню"
      ariaLabel="Главная"
      className={className}
      onClick={handleGoToMainMenu}
    >
      <HomeIcon />
    </HeaderButton>
  );
};
