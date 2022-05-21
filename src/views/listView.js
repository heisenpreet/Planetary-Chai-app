import View from "./view.js";

class ListView extends View {
  _parentElement = document.querySelector(".list");

  render(data) {
    this._data = data;
    this._clear();
    this._data.forEach((element) => {
      this._parentElement.insertAdjacentHTML(
        "beforeend",
        this.#listMarkup(element)
      );
    });
  }
  #listMarkup(element) {
    return `<li >
<a href="#${element.recipeId}" class="list__item">
        <div class="list__item-imgbox">
        <img
        class="list__item-img"
        src="${element.image}"
        alt=""
        />
        </div>

        <div class="list__item-content">
        <h2 class="list__item-heading">${element.title}</h2>
        <p class="list__item-author">${element.publisher}</p>
        </div>

</a>
  </li>`;
  }
  renderErrorMsg() {
    this._clear();

    this._parentElement.insertAdjacentHTML("beforeend", this.#errorMarkup());
  }

  #errorMarkup() {
    return `<p class="list__error">
    <i class="list__error--icon las la-utensils"></i>
    Sorry ! This recipe isn't on our list <br />Please search for
    another recipe. <br /><br />
    Try Pizza ! <br /><i
      class="list__error--icon las la-pizza-slice"
    ></i>
  </p>`;
  }
}

export default new ListView();
