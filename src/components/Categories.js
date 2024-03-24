import React, { useEffect, useState } from "react";
import Category from "../components/Category";


export default function Categories({ categoryData , header }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>{header}</h3>
        <div className="row row-cols-6 g-0">
          {categories &&
            categories.map((category, index) => (
              <div className="col" key={index}>
                <Category category={category} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
