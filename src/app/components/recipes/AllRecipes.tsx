import React from "react";
import { selectRecipes } from "../../../features/recipe/recipeSlice";
import { useAppSelector } from "../../hooks";
import { Title } from "../other/Title";
import { RecipeList } from "./RecipeList";

export const AllRecipes = () => {
  const recipes = useAppSelector(selectRecipes);
  return (
    <div className="py-2">
      <Title title="Svi recepti" icon="card-list" />
      <RecipeList recipes={recipes} />
    </div>
  );
};
