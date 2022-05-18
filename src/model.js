export const state = {
  recipe: {},
};

export const loadRecipe = async (id) => {
  try {
    const recipeData = await fetch(
      `    https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    const recipeResponse = await recipeData.json();

    if (recipeResponse.hasOwnProperty("error")) {
      throw new Error(recipeResponse.error);
    }

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
    console.log(state.recipe);
  } catch (error) {
    alert(error);
  }
};
