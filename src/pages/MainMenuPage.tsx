import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { initializeXorShiftGenerator } from '../store/actions/numbersGeneratorActions';
import { numbersGeneratorSelector } from '../store/selectors/numbersGeneratorSelectors';
import { generateMap } from '../utils/map/generateMap';

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
    <div>
      MainMenuPage
      <button type="button" onClick={init}>
        INIT XOR SHIFT GEN
      </button>
      <button type="button" onClick={generate}>
        GENERATE MAP
      </button>
    </div>
  );
};
