import { ChangeEvent, useState } from 'react';
import { SiThemoviedatabase } from 'react-icons/si';
import { HeaderProps } from '../types/types';

function Header({ handleFn }: HeaderProps) {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value || '');
  };

  const handleClick = () => {
    localStorage.setItem('movieName', searchItem);
    handleFn();
  };

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
            onChange={handleInputChange}
          />
          <button type="button" className="header-search-btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
