import { ChangeEvent, Component } from 'react';
import { SiThemoviedatabase } from 'react-icons/si';
import GetFilms from './GetFilms';
import MainComp from './MainComp';

class Header extends Component {
  state = {
    searchItem: '',
    filmsData: null,
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchItem: event.target.value || '' });
  };

  handleSearch = async () => {
    try {
      const data = await GetFilms(this.state.searchItem);
      this.setState({ filmsData: data });
    } catch (error) {
      console.log('Ошибка при получении данных:', error);
      this.setState({ filmsData: null });
    }
  };

  render() {
    const { searchItem, filmsData } = this.state;

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
            <button type="button" className="header-search-btn" onClick={this.handleSearch}>
              Search
            </button>
          </div>
        </div>
        {filmsData && <MainComp data={filmsData} />}
      </header>
    );
  }
}

export default Header;
