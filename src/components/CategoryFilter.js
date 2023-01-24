import React from "react";

function CategoryFilter({categories,selectCategory,categoryName}) {

  const categoryButton = categories.map((category) => {
    const categoryClass = (category === selectCategory ? "selected":null)
    
    return (
      <button
      key={category}
      onClick={categoryName}
      categoryClass={categoryClass} >
        {category}
      </button>
      
    )
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
