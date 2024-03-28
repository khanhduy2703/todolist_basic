import html  from "../core.js";
import { connect } from "../store.js";
function Todolist_item({todo,index , editIndex}){
    return html`
    <li class="${todo.complete && "completed"} ${index === editIndex && "editing"}">
    <div class="view">
        <input 
         class="toggle"
         type="checkbox" 
          ${todo.complete && "checked"}  
          onchange="dispatch('toggle',${index})"  
          >
        <label ondblclick= "dispatch('startEdit', ${index}) ">${todo.title}</label>
        <button class="destroy" onClick="dispatch('destroy',${index})"></button>
    </div>
    <input
     class="edit" 
     value="${todo.title}"
     onkeyup="event.keyCode === 13 && dispatch('endEditing',this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
     onblur = "dispatch('endEditing',this.value.trim())"

     >
</li>
    `
}
export default connect()(Todolist_item);