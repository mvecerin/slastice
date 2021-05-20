import React from "react";
import Accordion from "react-bootstrap/esm/Accordion";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { IRecipeState } from "../../../features/recipe/recipeSlice";
import { Buttons } from "./Buttons";
import { RecipeBody } from "./RecipeBody";

interface Props {
  recipe: IRecipeState;
}

export const RecipeItem = ({ recipe }: Props) => {
  return (
    <Card className="hoverBlock position-relative">
      <Buttons recipe={recipe} />
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={recipe.id}>
          {recipe.title}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={recipe.id}>
        <Card.Body>
          <RecipeBody recipe={recipe} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
