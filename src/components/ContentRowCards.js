import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";

function ContentRowMovies() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const rowContent = [users, products, categories];

  // fetch de info que va a ir en paneles
  //   const getUsers = useCallback(async () => {
  //     try {
  //       const response = await fetch("http://localhost:3030/api/users");

  //       const data = await response.json();

  //       setUsers({
  //         title: "Usuarios",
  //         users: data.users,
  //         quantity: data.users.length,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);
  //   const getProductsAndCategories = useCallback(async () => {
  //     try {
  //       const response = await fetch("http://localhost:3030/api/products");

  //       const data = await response.json();

  //       setProducts({
  //         title: "Productos",
  //         products: data.products,
  //         quantity: data.products.length,
  //       });
  //       setCategories({
  //         title: "Categories",
  //         quantity: Object.entries(data.countByCategory).length,
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  // fetch de datos a renderizar
  useEffect(() => {
    // getUsers();
    // getProductsAndCategories();

    // 'fetchear' productos y setear categorias
    fetch("http://localhost:3030/api/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts({
          title: "Productos",
          products: data.products,
          quantity: data.products.length,
          color: "success",
          icon: "fa-clipboard-list",
        });
        setCategories({
          title: "Categories",
          quantity: Object.entries(data.countByCategory).length,
          color: "danger",
          icon: "fa-boxes",
        });
      })
      .catch((err) => console.log(err));

    // 'fetchear' usuarios
    fetch("http://localhost:3030/api/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers({
          title: "Usuarios",
          users: data.users,
          quantity: data.users.length,
          color: "primary",
          icon: "fa-user",
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row">
      {rowContent.map((item, i) => {
        return (
          <SmallCard
            color={rowContent[i].color}
            icon={rowContent[i].icon}
            title={item.title}
            quantity={item.quantity}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default ContentRowMovies;
