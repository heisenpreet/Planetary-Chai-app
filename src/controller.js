import * as modal from "./model.js";
import recipeView from "./views/recipeView.js";

const showRecipe = async () => {
  try {
    const hashID = window.location.hash.slice(1);

    if (!hashID) return;

    recipeView.generateSpinner();

    await modal.loadRecipe(hashID);

    recipeView.render(modal.state.recipe);
  } catch (error) {
    alert(error);
  }
};

const init = () => {
  recipeView.eventPublisher(showRecipe);
};
init();
