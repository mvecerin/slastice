import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";
import { IIngredient } from "../../../features/recipe/recipeSlice";
import { IngredientList } from "../recipes/IngredientList";

interface Props {
  handleIngredients: Function;
  ingredients: IIngredient[];
}
export const IngredientForm = ({ handleIngredients, ingredients }: Props) => {
  const [values, setValues] = useState<IIngredient>({
    name: "",
    amount: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleIngredients([...ingredients, values]);
    e.currentTarget.reset();
    setValues({
      name: "",
      amount: "",
    });
  };
  const removeItem = (
    e: React.MouseEventHandler<HTMLElement>,
    name: string
  ) => {
    handleIngredients(ingredients.filter((item) => item.name !== name));
  };
  return (
    <Form onSubmit={onSubmit}>
      <Form.Label>Sastojci</Form.Label>
      <Form.Row>
        <Col xs={4}>
          <Form.Group controlId="ingredientTitle">
            <Form.Label srOnly>Naziv sastojka</Form.Label>
            <Form.Control
              name="name"
              placeholder="Sastojak"
              required
              onChange={(e) =>
                setValues({
                  ...values,
                  name: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group controlId="ingredientAmount">
            <Form.Label srOnly>Količina sastojka</Form.Label>
            <Form.Control
              name="amount"
              placeholder="Količina"
              onChange={(e) =>
                setValues({
                  ...values,
                  amount: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Button type="submit" variant="secondary">
            Dodaj
          </Button>
        </Col>
      </Form.Row>
      <IngredientList ingredients={ingredients} handleRemove={removeItem} />
    </Form>
  );
};
