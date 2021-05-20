import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Icon } from "../other/Icon";
import { useAppDispatch } from "../../hooks";
import { signOut } from "../../../features/user/userSlice";

export const NavDropdown = () => {
  const dispatch = useAppDispatch();

  return (
    <DropdownButton title="" menuAlign="right">
      <Dropdown.Item onClick={() => dispatch(signOut())}>
        <Icon name="box-arrow-right"></Icon>
        Odjava
      </Dropdown.Item>
    </DropdownButton>
  );
};
