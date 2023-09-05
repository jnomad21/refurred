import React, { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './DogAutoCompleteFilter.css';

export default function DogAutoCompleteFilter({ dogs, handleFilter }) {
  const [inputValue, setInputValue] = useState('');

  const handleSelect = (selected) => {
    handleFilter(selected.name); // Pass the selected breed to the parent component (DogIndexPage)
  };

  const handleClear = () => {
    setInputValue('');
    handleFilter(null); // Reset the filter
  };

  const items = dogs.map((dog) => ({ id: dog._id, name: dog.breed }));

  return (
    <div className="index-auto-filter-container">
      <div className="index-auto-filter">
        <ReactSearchAutocomplete
          items={items}
          onSelect={handleSelect}
          onClick={handleClear}
          onClear={handleClear}
          autoFocus
          placeholder="Search for a breed..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}
