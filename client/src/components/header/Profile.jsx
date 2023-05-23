import styled from "@emotion/styled";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PowerSettingNewIcon from "@mui/icons-material/PowerSettingsNew";
import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 15px;
`;

const Profile = ({ account }) => {
  const [open, setOpen] = useState(false);
  const { setAccount } = useContext(DataContext);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount(null);
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ cursor: "pointer" }}>{account}</Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={(handleClose, logout)}>
          <PowerSettingNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
