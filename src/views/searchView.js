class SearchView {
  #parentEL = document.querySelector(".navbar__form");

  getQuery() {
    return this.#parentEL.querySelector(".navbar__form--input").value;
  }

  eventPublisher(handler) {
    this.#parentEL.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();
      this.reset();
    });
  }
}

export default new SearchView();
