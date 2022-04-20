import { Component } from 'react';

class SearchBox extends Component {

  constructor() {
    super()

    this.state = {};
  }

  render() {
    console.log(this)
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input type="search"
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    )
  }
}

export default SearchBox;