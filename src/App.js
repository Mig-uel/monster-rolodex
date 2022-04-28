import { useState, useEffect } from 'react'

import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'


const App = () => {

  const [searchField, setSeachField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearch = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();

    setSeachField(searchFieldString);
  }

  return (
    <div className="App" >
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearch} placeholder='search for monsters...' className="search-box" />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

// class App extends Component {

//   constructor() {
//     super();

//     // STATE
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   // API FETCH
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState(() => {
//         return { monsters: users }
//       }))
//   }

//   onSearch = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearch } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });


//     return (
//       <div className="App" >
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearch} placeholder='search for monsters...' className="search-box" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;