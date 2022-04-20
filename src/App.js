import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    // STATE
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor')
  }

  // API FETCH
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      }, () => console.log(this.state)))
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

    console.log('render')
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App" >
        <input type="search"
          className="search-box"
          placeholder="search monsters..."
          onChange={onSearch}
        />
        {
          filteredMonsters.map(monster => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
