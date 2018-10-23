import React, { Component } from 'react';

import FruitBasket from './FruitBasket';


class App extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null
    };
  }

    fetchFruit() {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

      componentDidMount() {
        this.fetchFilters();
        this.fetchFruit();
      }

      handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
      }

      //handleFilterChange = event => {
        //console.log('new filter: ', event.target.value);
        //this.setState({ currentFilter: event.target.value });
      //}

    render(){
      return (
        <div>
          <FruitBasket
           fruit={this.state.fruit}
           filters={this.state.filters}
           currentFilter={this.state.currentFilter}
           filteredChange={this.state.handleFilterChange}
        />
      </div>
      );
     }
    };



export default App;
