import React from "react";
import Button from "react-bootstrap/esm/Button";
import { useModal } from "../../hooks";
import { AddForm } from "../forms/AddForm";
import { Icon } from "../other/Icon";
import { ModalC } from "../other/ModalC";

export const AddRecipe = () => {
  const [show, handleClose, handleShow] = useModal();
  return (
    <div className="text-right">
      <Button variant="primary" onClick={handleShow}>
        <Icon name="plus-circle"></Icon>
        Dodaj
      </Button>
      <ModalC
        show={show}
        handleClose={handleClose}
        formId="addForm"
        formTitle="Dodaj recept"
        form={<AddForm handleClose={handleClose} />}
      />
    </div>
  );
};
