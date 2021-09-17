class TodoApp {
  constructor(storeAccessor) {
    this._storeAccessor = storeAccessor;
  }

  get todoLists() {
    return this._storeAccessor.todoLists;
  }

  addToTodoList(title, description, addBtn) {
    if (!(title && description)) return;

    const data = { title, description };
    this._storeAccessor.addToStore(data);

    const node = document.getElementById("todo-list");
    this.addToDOM(node, data, addBtn);
  }

  removeFromList(title) {
    this._storeAccessor.removeFromStore(title);
  }

  _elementGenerator({ title, description }, addBtn) {
    const list = document.createElement("div"),
      about = document.createElement("div"),
      icons = document.createElement("div"),
      deleteSpan = document.createElement("span"),
      editSpan = document.createElement("span");

    deleteSpan.classList = "delete material-icons material-icons-outlined";
    editSpan.classList = "edit material-icons material-icons-outlined";

    deleteSpan.innerHTML = "delete";
    editSpan.innerHTML = "edit";

    // add click event handler to the delete button
    deleteSpan.addEventListener("click", function () {
      const listDiv = deleteSpan.parentElement.parentElement;
      listDiv.remove();
      const id = listDiv.getAttribute("title");
      todoApp.removeFromList(id);
    });

    // add click event handler to the edit button
    editSpan.addEventListener("click", function () {
      const inputTodoEl = document.getElementById("input-todo"),
        inputDescEl = document.getElementById("input-description");
      const listDiv = editSpan.parentElement.parentElement;
      addBtn.listDiv = listDiv;
      addBtn.innerHTML = "Update";
      addBtn.className = "update";

      const title = listDiv.getAttribute("title");
      const data = todoApp.todoLists.find((val) => val.title === title);

      inputTodoEl.value = data.title;
      inputDescEl.value = data.description;
    });

    about.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    icons.appendChild(deleteSpan);
    icons.appendChild(editSpan);
    list.insertAdjacentElement("beforeend", about);
    list.insertAdjacentElement("beforeend", icons);
    list.setAttribute("title", title);
    list.className = "list";

    return list;
  }

  addToDOM(node, data, addBtn) {
    node.insertAdjacentElement(
      "beforeend",
      this._elementGenerator(data, addBtn)
    );
  }

  displayLists(node, addBtn) {
    for (let data of this.todoLists) {
      this.addToDOM(node, data, addBtn);
    }
  }

  updateList(oldTitle, data) {
    this._storeAccessor.updateItem(oldTitle, data);
  }
}
