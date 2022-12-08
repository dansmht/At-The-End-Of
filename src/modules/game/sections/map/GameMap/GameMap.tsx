import { FC, useCallback, useState } from 'react';
import classNames from 'classnames';
import MapPointers from '@images/SVG/MapPointers';
import { mapSelector } from '@store/selectors/map.selectors';
import { useAppSelector } from '@hooks/reduxHooks';
import { MapPointersLegend } from '@modules/game/sections/map';
import { Nullable } from '@src/types/general.types';
import { MapPointerTitle } from '@src/types/map.types';
import styles from './styles.module.scss';

type FloorAndRoom = { floor: number, room: number };

let render = 0;
export const GameMap: FC = () => {
  console.log('RENDER GameMap', ++render);
  const map = useAppSelector(mapSelector);

  const [emphasizedRoom, setEmphasizedRoom] = useState<Nullable<FloorAndRoom>>(null);
  const [emphasizedRoomsType, setEmphasizedRoomsType] = useState<Nullable<MapPointerTitle>>(null);

  const emphasizeRoom = (floorAndRoom: Nullable<FloorAndRoom>) => {
    setEmphasizedRoom(floorAndRoom);
  };

  const emphasizeRoomsByType = useCallback((type: Nullable<MapPointerTitle>) => {
    setEmphasizedRoomsType(type);
  }, []);

  return (
    <>
      <ul className={styles.GameMap}>
        {map.floors.map((floor, floorIdx) => (
          <ul key={floorIdx} className={styles.Floor}>
            {floor.map((room, roomIdx) => {
              const RoomTypeSvg = room.isHidden ? MapPointers.Unknown : MapPointers[room.type];
              const roomClassName = classNames(styles.Room, {
                [styles.Emphasized]: (emphasizedRoomsType === room.type && !room.isHidden)
                  || (emphasizedRoomsType === 'Unknown' && room.isHidden),
                [styles.EmphasizedPointer]: (emphasizedRoom && emphasizedRoom.floor === floorIdx && emphasizedRoom.room === roomIdx),
              });

              return (
                <li
                  key={roomIdx}
                  className={roomClassName}
                  onMouseEnter={() => floorIdx === 0 && emphasizeRoom({ floor: floorIdx, room: roomIdx })}
                  onMouseLeave={() => emphasizeRoom(null)}
                >
                  <RoomTypeSvg className={styles.Svg} />
                </li>
              );
            })}
          </ul>
        ))}
      </ul>
      <MapPointersLegend emphasizeRoomsByType={emphasizeRoomsByType} />
    </>
  );
};
