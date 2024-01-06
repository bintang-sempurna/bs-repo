import React, { useEffect, useMemo } from "react";

function Filter({ setActiveCategory, activeCategory, setFiltered, category }) {
  // Extract unique categories using useMemo to avoid unnecessary recalculations
  const uniqueCategories = useMemo(() => {
    const allCategories = category.map((data) => data.attributes.category);
    const unique = [...new Set(allCategories)];
    // Include "All" category
    return ["All", ...unique];
  }, [category]);

  useEffect(() => {
    if (activeCategory === 0) {
      // Show all items if "All" is selected
      setFiltered(category);
    } else {
      const filtered = category.filter(
        (data) => data.attributes.category === uniqueCategories[activeCategory]
      );
      setFiltered(filtered);
    }
  }, [activeCategory, category, uniqueCategories]);

  return (
    <>
      <div className="filter-container">
        {uniqueCategories.map((cat, index) => (
          <button
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => setActiveCategory(index)}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}

export default Filter;
