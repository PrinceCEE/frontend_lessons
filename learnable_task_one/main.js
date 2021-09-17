const todoApp = new TodoApp(new LocalStorageAccessor());

(() => {
  let addBtn = document.getElementById("add"),
    todoListDiv = document.getElementById("todo-list"),
    inputTodoEl = document.getElementById("input-todo"),
    inputDescEl = document.getElementById("input-description");

  // add a property to the `addBtn` element
  addBtn.listDiv = null;

  // add click handler to the add button
  addBtn.addEventListener("click", function () {
    if (!addBtn.listDiv) {
      // add to the list
      todoApp.addToTodoList(inputTodoEl.value, inputDescEl.value);

      inputDescEl.value = "";
      inputTodoEl.value = "";
      return;
    }

    // handle the button when the listDiv has been attached to the button
    // const { listDiv } = addBtn;
    // const id = listDiv.getAttribute("title");
    // todoApp.updateList(id, {
    //   title: inputTodoEl.value,
    //   description: inputDescEl.value,
    // });
    // const h3 = listDiv.querySelector("h3");
    // const p = listDiv.querySelector("p");
    // h3.innerHTML = inputTodoEl.value;
    // p.innerHTML = inputDescEl.value;

    // // reset the addBtn and inputs
    // addBtn.listDiv = null;
    // addBtn.innerHTML = "Add";
    // addBtn.className = "";
    // inputDescEl.value = "";
    // inputTodoEl.value = "";
  });

  // load all the todo/completed lists stored in the localStorage
  todoApp.displayLists(todoListDiv, addBtn);
})();
