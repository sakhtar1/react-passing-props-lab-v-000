import React from 'react';

import FruitBasket from './FruitBasket';
class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: []
      items: []
      filters: [],
      selectedFilter: null
    };

    render() {
      return (
        <div className="fruit-basket">
          <Filter />
          <FilteredFruitList />
          <FruitBasket />
        </div>
      );
    }
  }
}

export default App;
