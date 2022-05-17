const recipeSection = document.querySelector(".recipe");
const mainSection = document.querySelector(".main");

const lightBox = document.querySelector(".lightbox");

const renderSpinner = (parentEl) => {
  const markup = `  <div class="recipe__spinner" uk-spinner="ratio: 2"></div>`;
  parentEl.innerHTML = " ";
  parentEl.insertAdjacentHTML("beforeend", markup);
};

const showRecipe = async () => {
  try {
    const hashID = window.location.hash.slice(1);
    console.log(hashID);
    if (!hashID) return;

    renderSpinner(recipeSection);

    const recipeData = await fetch(
      `    https://forkify-api.herokuapp.com/api/get?rId=${hashID}`
    );
    const recipeResponse = await recipeData.json();

    if (recipeResponse.hasOwnProperty("error")) {
      throw new Error(recipeResponse.error);
    }

    const { recipe } = recipeResponse; //destructure each element in the object and rename
    const {
      ingredients,
      publisher,
      publisher_url: publisherURL,
      recipe_id: recipeId,
      social_rank: socialRank,
      title,
      image_url: image,
    } = recipe;
    console.log(recipe);
    const markup = `<h2 class="recipe__heading">${title}</h2>
    <ul class="recipe__ingredients">
      <h2 class="recipe__ingredients-heading">RECIPE INGREDIENTS</h2>
      <div class="recipe__items">

      ${ingredients
        .slice(-8)
        .map((el) => {
          return ` <li>
        <span><i class="las la-check recipe__items-icon"></i></span
        ><span>${el}</span>
      </li>`;
        })
        .join(" ")}
       
       
      </div>
      <div class="recipe__action">
        <div uk-lightbox>
          <a class="lightbox" href="${image}">
            <div class="recipe__action-icon">
              <i class="las la-image"></i></div
          ></a>
        </div>

        <div class="recipe__action-icon">
          <i class="las la-bookmark"></i>
        </div>
      </div>
    </ul>
    <hr class="uk-divider-icon" />
    <div class="recipe__link">
      <h2 class="recipe__ingredients-heading">HOW IT'S COOKED</h2>
      <p class="recipe__link-para">
        This recipe was carefully designed and tested by
        <span class="publisher"><strong>${publisher}</strong> </span>.
        Please check out directions at their website.
      </p>
      <a target="_blank" href="${publisherURL}" class="recipe__link-btn"
        >Instructions <span><i class="las la-arrow-right"></i></span
      ></a>
    </div>`;
    recipeSection.innerHTML = "";
    recipeSection.insertAdjacentHTML("beforeend", markup);
    //////////setting image of the recipe

    mainSection.style.setProperty(
      "background-image",
      `linear-gradient(
      rgba(243, 226, 230, 0.3),
      rgba(243, 226, 230, 0.3)
    ),url(${image})`
    );

    /////////////
  } catch (error) {
    alert(error);
  }
};
// showRecipe();

["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe));
