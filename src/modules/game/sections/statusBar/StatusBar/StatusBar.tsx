import { FC } from 'react';
import { useAppDispatch } from '@hooks/reduxHooks';
import styles from './styles.module.scss';

export const StatusBar: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.StatusBar}>
      StatusBar
    </div>
  );
};
