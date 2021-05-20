import React from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import {
  favourite,
  unfavourite,
  IRecipeState,
} from "../../../features/recipe/recipeSlice";
import { useAppDispatch } from "../../hooks";
import { Icon } from "../other/Icon";
import { DeleteRecipe } from "./DeleteRecipe";
import { EditRecipe } from "./EditRecipe";

interface Props {
  recipe: IRecipeState;
}
export const Buttons = ({ recipe }: Props) => {
  const dispatch = useAppDispatch();
  const favOnClick = () =>
    recipe.favourited
      ? dispatch(unfavourite({ id: recipe.id }))
      : dispatch(favourite({ id: recipe.id }));

  return (
    <ButtonGroup style={bStyle} className="position-absolute hoverBtn border">
      <Button variant="light" title="Favorit" onClick={() => favOnClick()}>
        <Icon
          name={recipe.favourited ? "star-fill" : "star"}
          marginRight="0px"
        />
      </Button>
      <EditRecipe recipe={recipe} />
      <DeleteRecipe recipe={recipe} />
    </ButtonGroup>
  );
};

const bStyle = {
  right: 0,
  top: 0,
};
