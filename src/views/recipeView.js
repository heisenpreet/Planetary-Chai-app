class RecipeView {
  #parentElement = document.querySelector(".recipe");
  #mainElement = document.querySelector(".main");

  #data;

  render(data) {
    this.#data = data;
    this.#clear();
    this.#backgroundImage();
    this.#parentElement.insertAdjacentHTML(
      "beforeend",
      this.#generateRecipeMarkup()
    );
  }

  #clear() {
    this.#parentElement.innerHTML = "";
    this.#mainElement.style.setProperty("background-image", "none");
  }
  generateSpinner() {
    this.#clear();
    this.#parentElement.insertAdjacentHTML(
      "beforeend",
      `<div class="recipe__spinner" uk-spinner="ratio: 2"></div>`
    );
  }

  #generateRecipeMarkup() {
    return `<h2 class="recipe__heading">${this.#data.title}</h2>
    <ul class="recipe__ingredients">
      <h2 class="recipe__ingredients-heading">RECIPE INGREDIENTS</h2>
      <div class="recipe__items">

      ${this.#data.ingredients
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
          <a class="lightbox" href="${this.#data.image}">
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
          this.#data.publisher
        }</strong> </span>.
        Please check out directions at their website.
      </p>
      <a target="_blank" href="${
        this.#data.publisherURL
      }" class="recipe__link-btn"
        >Instructions <span><i class="las la-arrow-right"></i></span
      ></a>
    </div>`;
  }

  #backgroundImage() {
    this.#mainElement.style.setProperty(
      "background-image",
      `linear-gradient(
        rgba(243, 226, 230, 0.3),
        rgba(243, 226, 230, 0.3)
      ),url(${this.#data.image})`
    );
  }

  eventPublisher(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  modalError(error) {
    this.#mainElement.insertAdjacentHTML("beforeend", this.#popupMarkup(error));
  }

  #popupMarkup(message, heading = "Something went wrong!") {
    return `<div
    id="modal-close-outside"
    uk-modal=""
    class="uk-modal uk-open"
    tabindex="-1"
    style="display: block"
  >
    <div class="uk-modal-dialog uk-modal-body">
      <button
        class="uk-modal-close-outside uk-icon uk-close"
        type="button"
        uk-close=""
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            fill="none"
            stroke="#000"
            stroke-width="1.1"
            x1="1"
            y1="1"
            x2="13"
            y2="13"
          ></line>
          <line
            fill="none"
            stroke="#000"
            stroke-width="1.1"
            x1="13"
            y1="1"
            x2="1"
            y2="13"
          ></line>
        </svg>
      </button>
      <h2 class="uk-modal-title">${heading}</h2>
      <p class="error--msg">${message}</p>
    </div>
  </div>`;
  }
}

export default new RecipeView();
