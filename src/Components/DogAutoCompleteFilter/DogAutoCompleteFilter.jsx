import { ReactSearchAutocomplete } from 'react-search-autocomplete';

export default function DogAutoCompleteFilter({ dogs, handleFilter }) {
  const handleSelect = (selected) => {
    handleFilter(selected.name); // Pass the selected breed to the parent component
  };

  const items = dogs.map((dog) => ({ id: dog._id, name: dog.breed }));

  return (
    <ReactSearchAutocomplete
      items={items}
      onSelect={handleSelect}
      autoFocus
      placeholder="Search for a breed..."
    />
  );
}