import React from "react";
import Button from "react-bootstrap/esm/Button";
import { IRecipeState } from "../../../features/recipe/recipeSlice";
import { useModal } from "../../hooks";
import { DeleteForm } from "../forms/DeleteForm";
import { Icon } from "../other/Icon";
import { ModalC } from "../other/ModalC";

interface Props {
  recipe: IRecipeState;
}

export const DeleteRecipe = ({ recipe }: Props) => {
  const [show, handleClose, handleShow] = useModal();

  return (
    <>
      <Button variant="light" title="Izbriši" onClick={handleShow}>
        <Icon name="trash" marginRight="0px" />
      </Button>
      <ModalC
        show={show}
        handleClose={handleClose}
        formId="deleteForm"
        formTitle="Izbriši recept"
        form={<DeleteForm handleClose={handleClose} recipe={recipe} />}
      />
    </>
  );
};
