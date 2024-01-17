import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Filter from "./Fillter";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const AllRecap = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const fetchApi = async () => {
    const response = await fetch(
      "https://testrapi.bintangsempurna.co.id/api/recaps?populate=*"
    );
    const product = await response.json();

    setCategory(product.data);
    setFiltered(product.data);
  };

  const handleProductDetail = (id, category) => {
    navigate(`/events/recap/${id}?populate=${category}`);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const baseUrl = "https://testrapi.bintangsempurna.co.id";

  return (
    <div className="container mt-5">
      <Filter
        category={category}
        setFiltered={setFiltered}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <motion.div className="masonry">
        {filtered.map((data) => (
          <AnimatePresence>
            <motion.div
              key={data.id}
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mItem"
              onClick={() => handleProductDetail(data.id, data.attributes.slug)}
            >
              <img
                src={
                  baseUrl +
                  data.attributes.image.data.attributes.formats.medium.url
                }
              />
              <h2 className="paragraf-recap">{data.attributes.title}</h2>
              <span className="category-icon-recap-detail">
                {data.attributes.id_categories}
              </span>
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
};

export default AllRecap;
