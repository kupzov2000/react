import { SiThemoviedatabase } from 'react-icons/si';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <SiThemoviedatabase className='header-logo' />
        <div className="header-search-bar">
          <input type="text" className="header-search-input" placeholder="Search..." />
          <button type="button" className="header-search-btn">
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
