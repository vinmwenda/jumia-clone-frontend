import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "react-bootstrap/Button";

const Search = () => {
  return (
    <>
      <span className="searchBorder">
        <span className="inputBorder">
          <SearchIcon />
          <input placeholder="Search product...." className="navInput" />
        </span>
        <span className="btnBorder m-1">
          <Button
            style={{ backgroundColor: "orange", border: "none" }}
            size="md"
          >
            SEARCH
          </Button>
        </span>
      </span>
    </>
  );
};

export default Search;
