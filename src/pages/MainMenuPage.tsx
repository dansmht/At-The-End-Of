import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const MainMenuPage = () => (
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
