import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";
import { Search_API_URL } from "./config.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
  },
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
    throw error;
  }
};

export const searchRecipe = async (query) => {
  try {
    state.search.query = query;
    const data = await getJSON(`${Search_API_URL}${query}`);

    state.search.results = data.recipes.map((recipe) => {
      return {
        publisher: recipe.publisher,

        recipeId: recipe.recipe_id,

        title: recipe.title,
        image: recipe.image_url,
      };
    });
    console.log(state.search);
  } catch (error) {
    throw error;
  }
};
