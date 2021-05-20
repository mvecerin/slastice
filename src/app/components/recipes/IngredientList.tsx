import React from "react";
import Button from "react-bootstrap/esm/Button";
import { IIngredient } from "../../../features/recipe/recipeSlice";
import { Icon } from "../other/Icon";

interface Props {
  ingredients: IIngredient[];
  handleRemove?: any;
}

export const IngredientList = ({ ingredients, handleRemove }: Props) => {
  return (
    <ul className="pl-3">
      {ingredients.map((ingredient) => (
        <li key={ingredient.name} style={{ listStyleType: "circle" }}>
          {ingredient.name} {ingredient.amount}{" "}
          {handleRemove && (
            <Button
              size="sm"
              variant="light"
              className="rounded-circle"
              onClick={(e) => handleRemove(e, ingredient.name)}
            >
              <Icon name="x-lg" marginRight="0px" />
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};
