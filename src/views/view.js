export default class View {
  _data;
  _clear() {
    this._parentElement.innerHTML = "";
    if (!this._mainElement) return;

    this._mainElement.style.setProperty("background-image", "none");
  }
  generateSpinner() {
    this._clear();
    this._parentElement.insertAdjacentHTML(
      "beforeend",
      `<div style=" color: #f38e82; position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);"  uk-spinner="ratio: 2"></div>`
    );
  }

  modalError(error) {
    this._mainElement.insertAdjacentHTML("beforeend", this.#popupMarkup(error));
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
