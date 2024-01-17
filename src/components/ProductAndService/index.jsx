import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";
import { Helmet } from "react-helmet";

const ProductService = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  const fetchApi = async () => {
    const response = await fetch(
      "https://testrapi.bintangsempurna.co.id/api/products?populate=*"
    );
    const product = await response.json();

    setCategory(product.data);
    setFiltered(product.data);
  };

  const handleProductDetail = (id, category) => {
    navigate(`/product/${id}?populate=${category}`);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const baseUrl = "https://testrapi.bintangsempurna.co.id";

  return (
    <div className="container mt-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product </title>
        <link rel="canonical" href="#" />
      </Helmet>
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
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={data.id}
              className="mItem"
              onClick={() => handleProductDetail(data.id, data.attributes.slug)}
            >
              {/* <img
              src={
                baseUrl +
                data.attributes.image.data.attributes.formats.medium.url
              }
            /> */}
              <LazyLoadImage
                alt={data.attributes.title} // Adjusted alt text
                src={`${baseUrl}${data.attributes.image.data.attributes.formats.small.url}`}
                effect="blur" // Add the blur effect
              />
              <h2 className="paragraf-recap">{data.attributes.title}</h2>
              <span className="category-icon-name__product ">
                {data.attributes.category}
              </span>
            </motion.div>
          </AnimatePresence>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductService;
