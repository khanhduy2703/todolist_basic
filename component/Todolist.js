import html from "../core.js";
import Todolist_item from "./Todolist_item.js";
import { connect } from "../store.js";
function Todolist({ todos, filter, filters }) {
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onchange="dispatch('toggleAll',this.checked)"
        ${todos.every(filters.completed) && "checked"}
      />
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        ${todos
			.filter(filters[filter])
			.map((todo, index) => {
          return Todolist_item({ todo, index });
        })}
      </ul>
    </section>
  `;
}
export default connect()(Todolist);
