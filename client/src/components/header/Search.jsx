import styled from "@emotion/styled";
import { Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 30%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const InputSearchBase = styled(InputBase)({
  padding: "0 16px",
  width: "100%",
  fontSize: "14px",
  "& input": {
    padding: "0",
  },
});

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000000;
  margin-top: 36px;
  width: 29%;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        autoComplete="off"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`/product/${product.id}`}
                onClick={() => setText("")}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <ListItem>{product.title.longTitle}</ListItem>
              </Link>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
