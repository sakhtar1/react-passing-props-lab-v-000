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
        <div>
          <Filter />
          <FilteredFruitList />
          <FruitBasket />
        </div>
      );
    }
  }
}

export default App;
