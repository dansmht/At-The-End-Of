import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { characterSelector } from '@store/selectors/player.selectors';
import styles from './styles.module.scss';

export const StatusBar: FC = () => {
  const dispatch = useAppDispatch();

  const character = useAppSelector(characterSelector);

  return (
    <div className={styles.StatusBar}>
      StatusBar
      {' '}
      {character?.name}
    </div>
  );
};
