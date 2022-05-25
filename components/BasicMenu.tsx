import { useState, MouseEvent } from "react";
import { Menu, Button, MenuItem } from "@mui/material";

function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        onClick={handleClick}
        className="!capitalize !text-white"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls={open ? "basic-menu" : undefined}
      >
        Browse
      </Button>
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        className="menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>TV Shows</MenuItem>
        <MenuItem onClick={handleClose}>Movies</MenuItem>
        <MenuItem onClick={handleClose}>New & Popular</MenuItem>
        <MenuItem onClick={handleClose}>My List</MenuItem>
      </Menu>
    </div>
  );
}

export default BasicMenu;
