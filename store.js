// use create Store
import { createStore } from "../core.js";
import WithLogger from "./js/logger.js";
import reducer from "./reducer.js";

const { dispatch, connect , attach } = createStore(WithLogger(reducer));
// pick up functions dispatch to global
window.dispatch = dispatch ;

export{
    connect,
    attach
}
