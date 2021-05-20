import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface IIngredient {
  name: string;
  amount?: string;
}

export interface IRecipe {
  id: string;
  title: string;
  ingredients: IIngredient[];
  preparation: string;
}
export interface IRecipeState extends IRecipe {
  favourited?: boolean;
}

export const recipeAdapter = createEntityAdapter<IRecipeState>({
  selectId: (recipe) => recipe.id,
});

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: recipeAdapter.getInitialState(),
  reducers: {
    add: recipeAdapter.addOne,
    update: recipeAdapter.updateOne,
    remove: recipeAdapter.removeOne,
    favourite: (state, { payload }) => {
      recipeAdapter.updateOne(state, {
        changes: { favourited: true },
        id: payload.id,
      });
    },
    unfavourite: (state, { payload }) => {
      recipeAdapter.updateOne(state, {
        changes: { favourited: false },
        id: payload.id,
      });
    },
  },
  // Dummy initial value
  extraReducers: (builder) => {
    builder.addCase("user/signIn", (state) => {
      recipeAdapter.addOne(state, {
        preparation:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quibusdam amet iure corrupti architecto ratione et natus? Quas quo nostrum dolor, cum, aliquid veritatis similique impedit voluptates corrupti deleniti aspernatur, est quasi et. Iure laborum sint deserunt perferendis quaerat commodi aliquid aut libero, rerum ut eum nulla temporibus consequuntur architecto?",
        title: "Purica s mlincima",
        ingredients: [
          { name: "purica", amount: "2,5kg" },
          { name: "mlinci", amount: "50dag" },
          { name: "ulje" },
          { name: "sol" },
        ],
        id: "TestniRecept",
      });
    });
  },
});

export const { add, favourite, unfavourite, update, remove } =
  recipeSlice.actions;

export const { selectAll: selectRecipes, selectById: selectRecipesById } =
  recipeAdapter.getSelectors<RootState>((state) => state.recipe);

export const selectFavourited = createSelector([selectRecipes], (recipes) =>
  recipes.filter((recipe) => recipe.favourited)
);

export default recipeSlice.reducer;
