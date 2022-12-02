import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { initializeXorShiftGenerator } from '../store/actions/numbersGeneratorActions';
import { numbersGeneratorSelector } from '../store/selectors/numbersGeneratorSelectors';
import { generateMap } from '../utils/map/generateMap';
import styles from './styles.module.scss';

export const MainMenuPage = () => {
  const dispatch = useAppDispatch();

  const random = useAppSelector(numbersGeneratorSelector);

  const init = () => {
    console.log('INITIALIZE XOR SHIFT GENERATOR');
    dispatch(initializeXorShiftGenerator(1));
  };

  const generate = () => {
    if (random) {
      generateMap(random);
    }
  };

  return (
    <div className={classNames(styles.Page, styles.MainMenuPage)}>
      <h1 className={styles.MainTitle}>
        At The End Of
      </h1>
      <ul className={styles.NavList}>
        <li className={styles.NavItem}>
          <Link to="/start-game">Play</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/statistics">Statistics</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/achievements">Achievements</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/settings">Settings</Link>
        </li>
        <li className={styles.NavItem}>
          <Link to="/patch-notes">Patch Notes</Link>
        </li>
      </ul>
      <div className={styles.Profile}>
        Profile
      </div>
    </div>
  );
};
