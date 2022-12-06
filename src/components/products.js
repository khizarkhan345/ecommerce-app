import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../apiData/category";
import { getProducts } from "./../apiData/products";
import Pagination from "./paginationComp";
import DisplayProducts from "./displayProducts";
import ListCategory from "./listCategory";
import DisplaySortOption from "./displaySortOption";
import SearchForm from "./searchForm";
import { paginate } from "./../utils/paginate";
import { AddProduct } from "./../Action/DataAction";
import { setFilterText, setCategoryFilter } from "../Action/FilterAction";
import { SortBy } from "./../Action/FilterAction";
import _ from "lodash";

function Products(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All-categories");

  useEffect(() => {
    const category = getCategories();
    const product = getProducts();
    setCategories([...category]);
    //setProducts([...product]);
    props.dispatch(AddProduct(product));
    //product.map((p) => props.dispatch(AddProduct(p)));
  }, []);

  const onCategoryChange = (category) => {
    props.dispatch(setFilterText(""));
    //console.log("Condition true");
    props.dispatch(setCategoryFilter(category));
  };

  const onSortOptionChange = (sortOption) => {
    setSortOption(sortOption);
    props.dispatch(SortBy(sortOption));
    console.log(sortOption);
  };

  const handleSearchForm = () => {
    setCurrentPage(1);
    props.dispatch(setFilterText(searchTerm));
    setSearchTerm("");
  };
  const handleChange = (Text) => {
    setSearchTerm(Text);
  };

  const filteredData =
    props.Filter.selectedCategory === "All-categories"
      ? props.ProductData
      : props.ProductData.filter(
          (product) => product.category === props.Filter.selectedCategory
        );

  const filterSearchData =
    filteredData &&
    props.ProductData.filter((product) => {
      return product.title
        .toLowerCase()
        .includes(props.Filter.text.toLowerCase());
    });

  //console.log("Search Data", filterSearchData);

  const finalData =
    props.Filter.text.length === 0 ? filteredData : filterSearchData;

  //console.log("Final Data", finalData);
  const sortedData = _.orderBy(
    finalData,
    [props.Filter.sortBy],
    [props.Filter.orderBy]
  );
  //console.log("Sorted DAta", sortedData);
  const paginateData = paginate(sortedData, currentPage, pageSize);

  return (
    <div className="container">
      <div className="row flex">
        <div className="col-3">
          <ListCategory
            categories={categories}
            selectedCategory={props.Filter.selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </div>
        <div className="col-md">
          <DisplaySortOption
            sortValue={sortOption}
            onSortOptionChange={onSortOptionChange}
          />
          <SearchForm
            searchValue={searchTerm}
            handleChange={handleChange}
            handleSearchForm={handleSearchForm}
          />
          <DisplayProducts products={paginateData} />
          <Pagination
            itemsCount={filteredData.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    ProductData: state.ProductData,
    CartData: state.CartData,
    Filter: state.Filter,
  };
};
export default connect(mapStateToProps)(Products);
