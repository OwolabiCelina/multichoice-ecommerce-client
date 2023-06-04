import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import "../styles/shop.css";
import products from "../assets/data/products";
// import ProductsList from "../components/UI/ProductsList";
import ProductList from "../components/UI/ProductList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filteredValue = e.target.value;
    if (filteredValue === "sofa") {
      const filteredProducts = products.filter(
        (item) => item.category === "sofa"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "shoe") {
      const filteredProducts = products.filter(
        (item) => item.category === "shoe"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "chair") {
      const filteredProducts = products.filter(
        (item) => item.category === "chair"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "top") {
      const filteredProducts = products.filter(
        (item) => item.category === "top"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "heel") {
      const filteredProducts = products.filter(
        (item) => item.category === "heel"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "bag") {
      const filteredProducts = products.filter(
        (item) => item.category === "bag"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "gown") {
      const filteredProducts = products.filter(
        (item) => item.category === "gown"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "watch") {
      const filteredProducts = products.filter(
        (item) => item.category === "watch"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "wireless") {
      const filteredProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filteredProducts)
    }
    if (filteredValue === "mobile") {
      const filteredProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filteredProducts)
    }
  };
  const handleSearch = e => {
    const searchTerm = e.target.value
    const searchedProducts = products.filter((item)=>item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }
  return (
    <Helmet title={"Shop"}>
      <CommonSection title={"Products"} />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                  <option value="heel">Heel</option>
                  <option value="shoe">Sneakers</option>
                  <option value="gown">Gown</option>
                  {/* <option value="top">Top</option> */}
                  {/* <option value="bag">Bag</option> */}
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" className="text-end">
              <div className="filter__widget">
                <select>
                  <option>Sort By </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Search....." onChange={handleSearch} />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;