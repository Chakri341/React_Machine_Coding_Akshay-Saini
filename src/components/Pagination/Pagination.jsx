import React from "react";

import { useEffect, useState } from "react";
import "./Pagination.css";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const productsPerPage = 10;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=194");
    const res = await data.json();

    setProducts(res?.products);
    setCurrentProducts(res?.products.slice(0, 10));
    const size = Math.ceil(res?.products.length / 10);
    console.log("size===> ", res?.products.length, size);
    setPages(size);
  };

  const handleClickPage = (no) => {
    if (no === "prev") {
      no = currentPage - 1;
    }
    if (no === "next") {
      no = currentPage + 1;
    }

    let start = no * productsPerPage;
    let end = start + productsPerPage;
    console.log("start : ", start, "  end :", end);
    setCurrentProducts(products.slice(start, end));
    setCurrentPage(no);
  };

  return (
    <div className="pagination">
      <div className="pagination-header">
        <h1>Products List</h1>
      </div>
      {/* <div className="pagination-container"> */}
      <div className="products-list">
        {currentProducts.map((product) => {
          return (
            <div key={product?.id} className="pagination-product-card">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-img"
              />
              <p className="product-name">{product.title}</p>
            </div>
          );
        })}
      </div>
      {/* </div> */}

      <div className="total-pages">
        <span className="page-item" onClick={() => handleClickPage("prev")}>
          {"<"}
        </span>
        <div className="pagination-pages">
          {[...new Array(pages || 0)].map((_, index) => {
            return (
              <span
                key={index}
                className={
                  currentPage !== index
                    ? "page-item"
                    : "page-item page-btn-highlight"
                }
                onClick={() => handleClickPage(index)}
              >
                {index + 1}
              </span>
            );
          })}
        </div>
        <span className="page-item" onClick={() => handleClickPage("next")}>
          {">"}
        </span>
      </div>
    </div>
  );
}
