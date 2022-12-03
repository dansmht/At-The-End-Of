import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setMap } from '@store/actions/mapActions';
import { useAppDispatch } from '@hooks/reduxHooks';
import { initXorShiftGenerator } from '@src/global/xorShiftGenerator';
import { generateMap } from '@src/utils/map/generateMap';

export const StartGamePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [seed, setSeed] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeed(e.target.value);
  };

  const onPlayClick = () => {
    const gameSeed = +seed || Date.now();
    const xorShift = initXorShiftGenerator(gameSeed);
    // Save game seed
    const map = generateMap(xorShift);
    dispatch(setMap(map));
    navigate('/game', { state: true });
    console.log('MAP1', map);
  };

  return (
    <div>
      <input type="number" max={99999} value={seed} onChange={onChange} />
      <button type="button" onClick={onPlayClick}>
        Play
      </button>
    </div>
  );
};
