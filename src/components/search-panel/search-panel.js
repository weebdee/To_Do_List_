import React from 'react';

import './search-panel.css';

const SearchPanel = ({onSearchFilterChange }) => {
  return (
    <input type="text"
          className="form-control search-input"
          placeholder="type to search"
          onChange={(e) => onSearchFilterChange(e.target.value) } />
  );
};

export default SearchPanel;
