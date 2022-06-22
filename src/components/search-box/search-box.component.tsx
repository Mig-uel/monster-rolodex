import { ChangeEventHandler, ChangeEvent } from 'react';
import './search-box.styles.css';

// const func: (a: string, b: number, c: boolean) => void = (a, b, c) => { };

// interface ISearchBoxProps {
//   className: 'string';
//   placeholder?: 'string';
// };

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// };

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onChangeHandler, placeholder, className }: SearchBoxProps) => {
  return (
    <input type="search"
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

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