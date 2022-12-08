import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch } from '@hooks/reduxHooks';
import { setMap } from '@store/actions/map.actions';
import { initXorShiftGenerator } from '@src/global/xorShiftGenerator';
import { generateMap } from '@src/utils/map/generateMap';
import { Button, CharacterList } from '@src/components';
import { Nullable } from '@src/types/general.types';
import { characters } from '@constants/characters.const';
import { setCharacterByIndex } from '@store/actions/player.actions';
import styles from './styles.module.scss';

export const StartGamePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<Nullable<number>>(null);
  const [seed, setSeed] = useState('');

  const character = selectedCharacterIndex !== null ? characters[selectedCharacterIndex] : null;

  const onBackClick = () => {
    navigate(-1);
  };

  const onPlayClick = () => {
    if (selectedCharacterIndex !== null) {
      const gameSeed = +seed || Date.now();
      const xorShift = initXorShiftGenerator(gameSeed);
      // Save game seed
      const map = generateMap(xorShift);

      dispatch(setMap(map));
      dispatch(setCharacterByIndex(selectedCharacterIndex));

      navigate('/game', { state: true });
      console.log('MAP1', map);
    }
  };

  const onChange = ({ target: { value, max } }: ChangeEvent<HTMLInputElement>) => {
    if (+value > +max) return;

    setSeed(value);
  };

  return (
    <div className={classNames(styles.Page, styles.StartGamePage)}>
      <div>
        {character ? (
          <div>
            {character.name}
            {' '}
            {character.healthPoints}
          </div>
        ) : (
          <div>Select character</div>
        )}
      </div>

      <CharacterList
        className={styles.CharacterList}
        selectedCharacterIndex={selectedCharacterIndex}
        selectCharacter={setSelectedCharacterIndex}
      />

      <input type="number" max={999999999999} value={seed} onChange={onChange} />

      <Button
        className={styles.BackButton}
        onClick={onBackClick}
      >
        Back
      </Button>

      <Button
        className={classNames(styles.PlayButton, {
          [styles.Hidden]: !character,
        })}
        onClick={onPlayClick}
        disabled={!character}
      >
        Play
      </Button>

    </div>
  );
};
