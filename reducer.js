import local from './utils/local.js';
const init = {
  todos: local.get(),
};

const actions = {
  add({ todos }, title) {
    todos.push({ title, completed: false });
    local.set(todos);
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
