const TODO_STORE = 'TODOS';
export default {
  get() {
    return JSON.parse(localStorage.getItem(TODO_STORE)) || [];
  },
  set(todos) {
    localStorage.setItem(TODO_STORE, JSON.stringify(todos));
  },
};
