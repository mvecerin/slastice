import React from "react";
import { useAppSelector } from "../hooks";
import { AddRecipe } from "./recipes/AddRecipe";
import { AllRecipes } from "./recipes/AllRecipes";
import { Favourites } from "./recipes/Favourites";
import { Icon } from "./other/Icon";

export const MainContainer = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  return (
    <main className="pt-2 container">
      {isAuth ? (
        <>
          <AddRecipe />
          <Favourites />
          <AllRecipes />
        </>
      ) : (
        <h3 className="h5 pt-4">
          <Icon name="lock" />
          Za nastavak je potrebna prijava
        </h3>
      )}
    </main>
  );
};
