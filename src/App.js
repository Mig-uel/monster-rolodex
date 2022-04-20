import { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {

  constructor() {
    super();

    // STATE
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // API FETCH
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }))
  }

  onSearch = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearch } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App" >
        <SearchBox onChangeHandler={onSearch} placeholder='search for monsters...' className="search-box" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
