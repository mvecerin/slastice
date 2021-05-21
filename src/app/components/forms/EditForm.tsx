import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import {
  IIngredient,
  IRecipeState,
  update,
} from "../../../features/recipe/recipeSlice";
import { useAppDispatch, useForm } from "../../hooks";
import { IngredientForm } from "./IngredientForm";

interface Props {
  handleClose: Function;
  recipe: IRecipeState;
}
export const EditForm = ({ handleClose, recipe }: Props) => {
  const [ingredients, handleIngredients] = useState<IIngredient[]>(
    recipe.ingredients
  );
  const [values, handleChange] = useForm({
    title: recipe.title,
    preparation: recipe.preparation,
  });
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(update({ changes: { ...values, ingredients }, id: recipe.id }));
    handleClose();
  };
  return (
    <>
      <Form id="editForm" onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Naziv</Form.Label>
          <Form.Control
            name="title"
            // defaultValue={recipe.title}
            onChange={handleChange}
            value={values.title}
            placeholder="Naziv"
            required
          />
        </Form.Group>

        <Form.Group controlId="preparation">
          <Form.Label>Priprema</Form.Label>
          <Form.Control
            name="preparation"
            onChange={handleChange}
            value={values.preparation}
            // defaultValue={recipe.preparation}
            required
            as="textarea"
            placeholder="Priprema"
            rows={3}
          />
        </Form.Group>
      </Form>
      <IngredientForm
        handleIngredients={handleIngredients}
        ingredients={ingredients}
      />
    </>
  );
};
