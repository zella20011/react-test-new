import React, {useContext} from 'react';

import styles from './SideBar.module.scss';
import { StopTypes } from '../../shared/interface';
import { MyContext } from '../../../App';

function SideBar(props: any) {
  const { updateStops } = props;
  const { stops } = useContext(MyContext);

  return (
    <div className={styles.SideBar}>
      <div className={styles['SideBar-wrapper']}>
        <h2 className={styles['SideBar-title']}>Количество пересадок</h2>
        <div className={styles['SideBar-filters']}>
          <label htmlFor="all" className={styles['SideBar-filters-item']}>
            <input
              id="all"
              name="stops-count"
              type="radio"
              checked={stops === StopTypes.All}
              onClick={() => updateStops(StopTypes.All)}
            />
            <span>Все</span>
          </label>
          <label htmlFor="without" className={styles['SideBar-filters-item']}>
            <input
              id="without"
              name="stops-count"
              type="radio"
              checked={stops === StopTypes.Without}
              onClick={() => updateStops(StopTypes.Without)}
            />
            <span>Без пересадок</span>
          </label>
          <label htmlFor="one" className={styles['SideBar-filters-item']}>
            <input
              id="one"
              name="stops-count"
              type="radio"
              checked={stops === StopTypes.One}
              onClick={() => updateStops(StopTypes.One)}
            />
            <span>1 пересадка</span>
          </label>
          <label htmlFor="two" className={styles['SideBar-filters-item']}>
            <input
              id="two"
              name="stops-count"
              type="radio"
              checked={stops === StopTypes.Two}
              onClick={() => updateStops(StopTypes.Two)}
            />
            <span>2 пересадки</span>
          </label>
          <label htmlFor="three" className={styles['SideBar-filters-item']}>
            <input
              id="three"
              name="stops-count"
              type="radio"
              checked={stops === StopTypes.Three}
              onClick={() => updateStops(StopTypes.Three)}
            />
            <span>3 пересадки</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
