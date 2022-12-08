import { FC } from 'react';
import classNames from 'classnames';
import { characters } from '@constants/characters.const';
import { Nullable } from '@src/types/general.types';
import { Button } from '@src/components';
import styles from './styles.module.scss';

interface Props {
  selectedCharacterIndex?: Nullable<number>,
  selectCharacter: (index: number) => void,
  className?: string,
}

export const CharacterList: FC<Props> = ({ selectedCharacterIndex, selectCharacter, className }) => (
  <ul className={styles.CharacterList}>
    {characters.map((c, index) => (
      <li
        key={index}
        className={classNames(styles.Item, { [styles.Selected]: index === selectedCharacterIndex }, className)}
      >
        <Button onClick={() => selectCharacter(index)}>
          {c.name}
        </Button>
      </li>
    ))}
  </ul>
);
