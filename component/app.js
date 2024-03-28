import html from "../core.js";
import { connect } from "../store.js";
import Header from "./Header.js";
import Todolist  from "./todolist.js";
import Footer from "./Footer.js";

function app ({todos}){
        return html`<section class="todoapp"> 
                ${Header()}
                ${todos.length > 0 && Todolist()}
                ${todos.length > 0 && Footer() }
        </section>
        `
        
}
export default connect()(app);