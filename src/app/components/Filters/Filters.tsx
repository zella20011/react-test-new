import React, { useContext } from 'react';

import styles from './Filters.module.scss';
import { FilterTypes } from '../../shared/interface';
import { MyContext } from '../../../App';

function Filters(props: any) {
  const updateType = props.updateType;
  const { filterType } = useContext(MyContext);

  return (
    <div className={styles.Filters}>
      <div onClick={() => updateType(FilterTypes.Lower)} className={`${styles['Filters-item']} ${filterType === FilterTypes.Lower ? styles['Filters-item_active'] : ''}`}>Самый дешевый</div>
      <div onClick={() => updateType(FilterTypes.Faster)} className={`${styles['Filters-item']} ${filterType === FilterTypes.Faster ? styles['Filters-item_active'] : ''}`}>Самый быстрый</div>
      <div onClick={() => updateType(FilterTypes.Optimal)} className={`${styles['Filters-item']} ${filterType === FilterTypes.Optimal ? styles['Filters-item_active'] : ''}`}>Оптимальный</div>
    </div>
  )
};

export default Filters;
