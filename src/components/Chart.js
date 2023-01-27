import React, { useEffect, useState } from "react";
import ChartRow from "./ChartRow";

function Chart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // 'fetchear' productos y setear categorias
    fetch("http://localhost:3030/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Categoria</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Imagen</th>
                <th>Categoria</th>
              </tr>
            </tfoot>
            <tbody>
              {products.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
