import React, { useEffect, useMemo } from "react";
import { motion } from "framer-motion";

function Filter({ setActiveCategory, activeCategory, setFiltered, category }) {
  // Extract unique categories using useMemo to avoid unnecessary recalculations
  const uniqueCategories = useMemo(() => {
    const allCategories = category.map(
      (data) =>
        // data.attributes.categories.data[0].attributes.title || "Uncategorized"
        data.attributes.id_categories || "Uncategorized"
    );
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
        (data) =>
          data.attributes.id_categories === uniqueCategories[activeCategory]
      );
      setFiltered(filtered);
    }
  }, [activeCategory, category, uniqueCategories]);

  return (
    <motion.div
      // animate={{ opacity: 1 }}
      // initial={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ delay: 0.1, duration: 1.5 }}
      // layout
      className="filter-container"
    >
      {uniqueCategories.map((categoryName, index) => (
        <button
          key={index}
          className={activeCategory === index ? "active" : ""}
          onClick={() => setActiveCategory(index)}
        >
          {categoryName}
        </button>
      ))}
    </motion.div>
  );
}

export default Filter;
