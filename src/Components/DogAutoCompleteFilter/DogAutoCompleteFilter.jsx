import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import './DogAutoCompleteFilter.css'

export default function DogAutoCompleteFilter({ dogs, handleFilter }) {
  const handleSelect = (selected) => {
    handleFilter(selected.name); // Pass the selected breed to the parent component
  };

  const items = dogs.map((dog) => ({ id: dog._id, name: dog.breed }));

  return (
   <div className='index-auto-filter-container'>
        <div className='index-auto-filter'>
            <ReactSearchAutocomplete
            items={items}
            onSelect={handleSelect}
            autoFocus
            placeholder="Search for a breed..."
            />
        </div>
    </div> 
  );
}