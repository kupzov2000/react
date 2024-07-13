import { ChangeEvent, Component } from 'react';
import { SiThemoviedatabase } from 'react-icons/si';
import { HeaderProps, StateHeader } from '../types/types';

class Header extends Component<HeaderProps, StateHeader> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      searchItem: '',
      filmsData: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchItem: event.target.value || '' });
  };

  handleClick() {
    localStorage.setItem('movieName', this.state.searchItem);
    this.props.handleFn();
  }

  render() {
    const { searchItem } = this.state;

    return (
      <header className="header">
        <div className="header-container">
          <SiThemoviedatabase className="header-logo" />
          <div className="header-search-bar">
            <input
              className="header-search-input"
              type="text"
              placeholder="Search..."
              value={searchItem}
              onChange={this.handleInputChange}
            />
            <button type="button" className="header-search-btn" onClick={this.handleClick}>
              Search
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
