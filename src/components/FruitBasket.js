import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';




const FruitBasket = ({ fruit, filters, currentFilter, handleFilterChange }) =>
      <div className="fruit-basket">
        <Filter
        filter={filters}
        handleChange={handleFilterChange} />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter} />
      </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

export default FruitBasket;
