import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

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

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        autoComplete="off"
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
