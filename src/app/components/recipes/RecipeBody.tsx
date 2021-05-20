import React from "react";
import { IRecipeState } from "../../../features/recipe/recipeSlice";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { IngredientList } from "./IngredientList";

interface Props {
  recipe: IRecipeState;
}
export const RecipeBody = ({ recipe }: Props) => (
  <>
    <h3 className="pb-4">{recipe.title}</h3>
    <Row>
      <Col md={6}>
        <h5>Sastojci</h5>
        <IngredientList ingredients={recipe.ingredients} />
      </Col>
      <Col md={6}>
        <h5>Postupak</h5>
        <p className="">{recipe.preparation}</p>
      </Col>
    </Row>
  </>
);
