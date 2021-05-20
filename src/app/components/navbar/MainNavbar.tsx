import React from "react";
import Button from "react-bootstrap/esm/Button";
import Navbar from "react-bootstrap/Navbar";
import { useAppSelector, useModal } from "../../hooks";
import { SignInForm } from "../forms/SignInForm";
import { Icon } from "../other/Icon";
import { ModalC } from "../other/ModalC";
import { NavDropdown } from "./NavDropdown";

export const MainNavbar = () => {
  const { isAuth, user } = useAppSelector((state) => state.user);
  const [show, handleClose, handleShow] = useModal();

  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="#">
        <Icon name="suit-heart" />
        SLASTICE
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        {isAuth ? (
          <>
            <Navbar.Text className="mr-2">
              <Icon name="emoji-sunglasses"></Icon>
              {user?.username}
            </Navbar.Text>
            <NavDropdown />
          </>
        ) : (
          <>
            <Button onClick={handleShow}>
              <Icon name="person-fill"></Icon>
              Prijava
            </Button>
            <ModalC
              show={show}
              handleClose={handleClose}
              formId="signInForm"
              formTitle="Prijava"
              form={<SignInForm handleClose={handleClose} />}
            />
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
