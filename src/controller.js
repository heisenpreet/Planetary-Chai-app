import * as modal from "./model.js";
import recipeView from "./views/recipeView.js";

const showRecipe = async () => {
  try {
    const hashID = window.location.hash.slice(1);
    console.log(hashID);
    if (!hashID) return;

    recipeView.generateSpinner();

    await modal.loadRecipe(hashID);

    recipeView.render(modal.state.recipe);

    /////////////
  } catch (error) {
    alert(error);
  }
};
// showRecipe();

["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe));
