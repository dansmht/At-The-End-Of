import { Route, Routes } from 'react-router-dom';
import {
  AchievementsPage,
  GamePage,
  MainMenuPage,
  NotFoundPage,
  PatchNotesPage,
  SettingsPage,
  StartGamePage,
  StatisticsPage,
} from '../pages';

export const App = () => (
  <Routes>
    <Route path="/" element={<MainMenuPage />} />
    <Route path="game" element={<GamePage />} />
    <Route path="start-game" element={<StartGamePage />} />
    <Route path="statistics" element={<StatisticsPage />} />
    <Route path="achievements" element={<AchievementsPage />} />
    <Route path="settings" element={<SettingsPage />} />
    <Route path="patch-notes" element={<PatchNotesPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
