import * as modal from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import listView from "./views/listView.js";

const controlRecipe = async () => {
  try {
    const hashID = window.location.hash.slice(1);

    if (!hashID) return;

    recipeView.generateSpinner();

    await modal.loadRecipe(hashID);

    recipeView.render(modal.state.recipe);
  } catch (error) {
    recipeView.modalError(error);
  }
};

const controlSearchResults = async () => {
  try {
    listView.generateSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    await modal.searchRecipe(query);
    console.log(modal.state.search.results);

    listView.render(modal.state.search.results);
  } catch (error) {
    recipeView.modalError(error);
  }
};

const init = () => {
  recipeView.eventPublisher(controlRecipe);
  searchView.eventPublisher(controlSearchResults);
};
init();
