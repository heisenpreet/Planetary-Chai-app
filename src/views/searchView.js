class SearchView {
  _parentElement = document.querySelector(".navbar__form");

  getQuery() {
    return this._parentElement.querySelector(".navbar__form--input").value;
  }

  eventPublisher(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();
      this.reset();
    });
  }
}

export default new SearchView();
