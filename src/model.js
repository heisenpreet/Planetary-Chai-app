import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const recipeResponse = await getJSON(`${API_URL}${id}`); //helder.js for json

    const { recipe } = recipeResponse; //destructure each element in the object and rename
    state.recipe = {
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,
      publisherURL: recipe.publisher_url,
      recipeId: recipe.recipe_id,
      socialRank: recipe.social_rank,
      title: recipe.title,
      image: recipe.image_url,
    };
  } catch (error) {
    console.log(error);
  }
};
