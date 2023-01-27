import React, { useEffect, useState } from "react";

import classes from "./CategoriesInDb.module.css";

function GenresInDb() {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    // 'fetchear' productos y setear categorias
    fetch("http://localhost:3030/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.countByCategory);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {Object.entries(categories).map((category) => {
              return (
                <div className="col-lg-6 mb-4" key={category[0]}>
                  <div className="card bg-dark text-white shadow">
                    <div className={`card-body ${classes["card-body"]}`}>
                      <h5>{category[0]}</h5>
                      <p>{category[1]}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
