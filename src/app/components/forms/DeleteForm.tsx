import React from "react";
import Form from "react-bootstrap/esm/Form";
import { IRecipeState, remove } from "../../../features/recipe/recipeSlice";
import { useAppDispatch } from "../../hooks";

interface Props {
  handleClose: Function;
  recipe: IRecipeState;
}

export const DeleteForm = ({ handleClose, recipe }: Props) => {
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(remove(recipe.id));
    handleClose();
  };
  return (
    <Form id="deleteForm" onSubmit={onSubmit}>
      <Form.Label>
        Jeste li sigurni da želite izbrisati "<strong>{recipe.title}</strong>"?
      </Form.Label>
    </Form>
  );
};
