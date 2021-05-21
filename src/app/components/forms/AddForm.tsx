import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";
import { add, IIngredient } from "../../../features/recipe/recipeSlice";
import { useAppDispatch, useForm } from "../../hooks";
import { v4 as uuidv4 } from "uuid";
import { IngredientForm } from "./IngredientForm";

interface Props {
  handleClose: Function;
}

export const AddForm = ({ handleClose }: Props) => {
  const [ingredients, handleIngredients] = useState<IIngredient[]>([]);
  const [values, handleChange] = useForm({
    title: "",
    preparation: "",
  });
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(add({ ...values, ingredients, id }));
    handleClose();
  };
  return (
    <>
      <Form id="addForm" onSubmit={onSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Naziv</Form.Label>
          <Form.Control
            name="title"
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
