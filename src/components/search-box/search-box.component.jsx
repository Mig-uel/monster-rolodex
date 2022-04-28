import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, placeholder, className }) => {

  return (
    <input type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default SearchBox;

// class SearchBox extends Component {

//   render() {
//     console.log(this)
//     const { onChangeHandler, placeholder, className } = this.props;
//     return (
//       <input type="search"
//         className={`search-box ${className}`}
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     )
//   }
// }

// export default SearchBox;