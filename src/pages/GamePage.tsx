import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GameMap } from '@modules/game/components/GameMap/GameMap';

export const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate('/', { replace: true });
    }
  }, [location.state, navigate]);

  return (
    <GameMap />
  );
};
