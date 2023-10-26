import React from 'react';

const SearchCategories = (props) => {
  const categories = Object.keys(props.category);

  return (
    <div>
      <h2>Most Searched Categories in {props.city}</h2>
      <ul className="list-group">
        {categories.map((category, index) => (
          <li key={index} className="my-2">{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchCategories;
