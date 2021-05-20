import React from "react";
import Button from "react-bootstrap/esm/Button";
import { IRecipeState } from "../../../features/recipe/recipeSlice";
import { useModal } from "../../hooks";
import { EditForm } from "../forms/EditForm";
import { Icon } from "../other/Icon";
import { ModalC } from "../other/ModalC";

interface Props {
  recipe: IRecipeState;
}

export const EditRecipe = ({ recipe }: Props) => {
  const [show, handleClose, handleShow] = useModal();
  return (
    <>
      <Button variant="light" title="Uredi" onClick={handleShow}>
        <Icon name="pencil" marginRight="0px" />
      </Button>
      <ModalC
        show={show}
        handleClose={handleClose}
        formId="editForm"
        formTitle="Uredi recept"
        form={<EditForm handleClose={handleClose} recipe={recipe} />}
      />
    </>
  );
};
