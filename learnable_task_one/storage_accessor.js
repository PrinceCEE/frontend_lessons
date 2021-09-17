class LocalStorageAccessor {
  constructor() {
    this._store = window.localStorage;
    this.storeName = "todo-list";
  }

  get todoLists() {
    return JSON.parse(this._store.getItem(this.storeName)) ?? [];
  }

  addToStore(data) {
    const storeData = JSON.parse(this._store.getItem(this.storeName)) ?? [];
    storeData.push(data);
    this._store.setItem(this.storeName, JSON.stringify(storeData));
  }

  removeFromStore(title) {
    const storeData = JSON.parse(this._store.getItem(this.storeName));

    if (storeData.length) {
      const index = storeData.findIndex((val) => val.title === title);
      storeData.splice(index, 1);
      this._store.setItem(this.storeName, JSON.stringify(storeData));
    }
  }

  updateItem(oldTitle, data) {
    console.log(oldTitle, data);
    const lists = this.todoLists;
    const index = lists.findIndex((val) => val.title);
    lists[index] = data;
    this._store.setItem(this.storeName, JSON.stringify(lists));
  }
}
