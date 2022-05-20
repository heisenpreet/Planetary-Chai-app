import View from "./view.js";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _mainElement = document.querySelector(".main");

  render(data) {
    this._data = data;
    this._clear();
    this.#backgroundImage();
    this._parentElement.insertAdjacentHTML(
      "beforeend",
      this.#generateRecipeMarkup()
    );
  }

  #generateRecipeMarkup() {
    return `<h2 class="recipe__heading">${this._data.title}</h2>
    <ul class="recipe__ingredients">
      <h2 class="recipe__ingredients-heading">RECIPE INGREDIENTS</h2>
      <div class="recipe__items">

      ${this._data.ingredients
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
          <a class="lightbox" href="${this._data.image}">
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
        <span class="publisher"><strong>${
          this._data.publisher
        }</strong> </span>.
        Please check out directions at their website.
      </p>
      <a target="_blank" href="${
        this._data.publisherURL
      }" class="recipe__link-btn"
        >Instructions <span><i class="las la-arrow-right"></i></span
      ></a>
    </div>`;
  }

  #backgroundImage() {
    this._mainElement.style.setProperty(
      "background-image",
      `linear-gradient(
        rgba(243, 226, 230, 0.3),
        rgba(243, 226, 230, 0.3)
      ),url(${this._data.image})`
    );
  }

  eventPublisher(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }
}

export default new RecipeView();
