import React from "react";
import { selectFavourited } from "../../../features/recipe/recipeSlice";
import { useAppSelector } from "../../hooks";
import { Title } from "../other/Title";
import { RecipeList } from "./RecipeList";

export const Favourites = () => {
  const recipes = useAppSelector(selectFavourited);
  return (
    <div className="py-2">
      <Title title="Favoriti" icon="star" />
      <RecipeList recipes={recipes} />
    </div>
  );
};
