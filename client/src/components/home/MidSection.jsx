import { Grid } from "@mui/material";
import React from "react";

import { imageURL } from "../../constants/data";
import styled from "@emotion/styled";

const Image = styled("img")`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 900px) {
    object-fit: cover;
    height: 120px;
  }
`;

const MidSection = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <Grid
        container
        lg={12}
        sm={12}
        md={12}
        xs={12}
        style={{ marginTop: "10px", justifyContent: "space-between" }}
      >
        {imageURL.map((image) => (
          <Grid item lg={4} sm={4} md={12} xs={12}>
            <img src={image} alt="" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>

      <Image src={url} alt="COVID-19" />
    </>
  );
};

export default MidSection;
