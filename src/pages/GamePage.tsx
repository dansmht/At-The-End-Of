import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { mapSelector } from '../store/selectors/mapSelectors';

export const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const map = useAppSelector(mapSelector);
  console.log('MAP MAP MAP MAP MAP', map);

  useEffect(() => {
    console.log('location.state', location.state);
    if (!location.state) {
      navigate('/', { replace: true });
    }
  }, [location.state, navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
      {map.floors.map((floor, floorIdx) => (
        <div
          style={{
            width: 300,
            height: 50,
            backgroundColor: 'grey',
            border: '2px solid white',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {map.floors[floorIdx].map((room, roomIdx) => (
            <div title={room.isHidden ? '???' : room.type}>
              Room
              {' '}
              {roomIdx + 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
