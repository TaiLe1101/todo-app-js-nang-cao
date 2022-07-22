import html from '../core.js';

function Header() {
  return html`<header class="header">
    <h1>Ghi chú</h1>
    <input
      class="new-todo"
      placeholder="Ghi cái ghi chú vào"
      autofocus
      onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
    />
  </header> `;
}

export default Header;
