import { FC } from 'react';
import MapPointers from '@images/SVG/MapPointers';
import { mapSelector } from '@store/selectors/mapSelectors';
import { useAppSelector } from '@hooks/reduxHooks';
import styles from './styles.module.scss';

export const GameMap: FC = () => {
  const map = useAppSelector(mapSelector);

  return (
    <div className={styles.GameMap}>
      {map.floors.map((floor, floorIdx) => (
        <div key={floorIdx} className={styles.Floor}>
          {floor.map((room, roomIdx) => {
            const RoomTypeSvg = room.isHidden ? MapPointers.Unknown : MapPointers[room.type];

            return (
              <div key={roomIdx}>
                <RoomTypeSvg className={styles.Svg} />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
