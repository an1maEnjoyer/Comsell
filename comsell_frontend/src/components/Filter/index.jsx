import React from 'react';
import styles from './Filter.module.scss';
import Sort from '../Sort';

import { ReactComponent as GenderIcon } from '../../images/gender.svg';

const Filter = () => {
  const listOfVariants = ['Мужской', 'Женский'];
  return (
    <div className={styles.filter}>
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
      <Sort leftIcon={GenderIcon} sortingAspect={'Пол'} listOfVariants={listOfVariants} />
    </div>
  );
};

export default Filter;
