import React from "react";
import Accordion from "react-bootstrap/esm/Accordion";
import { IRecipeState } from "../../../features/recipe/recipeSlice";
import { RecipeItem } from "./RecipeItem";

interface Props {
  recipes: IRecipeState[];
}

export const RecipeList = ({ recipes }: Props) => {
  return recipes.length ? (
    <Accordion>
      {recipes.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </Accordion>
  ) : (
    <p className="ml-4 pl-2">Nema recepata za prikaz</p>
  );
};
