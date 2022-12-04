import { FC, memo, useMemo } from 'react';
import MapPointers from '@images/SVG/MapPointers';
import { Nullable } from '@src/types/general.types';
import { MapPointer, MapPointerTitle } from '@src/types/map.types';
import styles from './styles.module.scss';

interface Props {
  emphasizeRoomsByType: (type: Nullable<MapPointerTitle>) => void,
}

let render = 0;
export const MapPointersLegend: FC<Props> = memo(({ emphasizeRoomsByType }) => {
  console.log('RENDER MapPointersLegend', ++render);

  const mapPointers: MapPointer[] = useMemo(() => [
    { title: 'Unknown', description: '' },
    { title: 'Merchant', description: '' },
    { title: 'Treasure', description: '' },
    { title: 'Rest', description: '' },
    { title: 'Enemy', description: '' },
    { title: 'Boss', description: '' },
  ], []);

  return (
    <div className={styles.MapPointersLegend}>
      <ul className={styles.List}>
        <h3 className={styles.Title}>Legend</h3>
        {mapPointers.map(({ title, description }) => {
          const Icon = MapPointers[title];

          return (
            <li
              key={title}
              className={styles.Item}
              onMouseEnter={() => emphasizeRoomsByType(title)}
              onMouseLeave={() => emphasizeRoomsByType(null)}
            >
              <div className={styles.IconWrapper}>
                <Icon className={styles.Icon} />
              </div>
              <span className={styles.ItemTitle}>
                {title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
