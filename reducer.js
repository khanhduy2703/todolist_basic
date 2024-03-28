import Storage from "../util/Storage.js"
const init = {
   todos: Storage.get(),
   filter: "all",
   filters: {
     all: ()=> true,
     active : todo => !todo.complete ,
     completed : todo => todo.complete,
   },
   editIndex : null
   

}
// method two
 const actions = {
    // the object has a reference ,  there is no need to return new state 
    add({todos},title){   
       if(title){
        todos.push({title,complete:false});
        Storage.set(todos);
       }
    },
    toggle({todos},index){
        const todo = todos[index];
        todo.complete = !todo.complete;
        Storage.set(todos);
    },
    toggleAll({todos},completed){
            todos.forEach(todo => todo.complete = completed);
            Storage.set(todos);

    },
    destroy({todos},index){
            todos.splice(index, 1);
            Storage.set(todos);

    },
    // in here get state because state can this from init
    switchFilter(state,filter){
        state.filter = filter;
    },
    clearCompleted(state ){
      state.todos  = state.todos.filter(state.filters.active)
      Storage.set(state.todos);

    },
    startEdit(state , index){
        state.editIndex = index;
    },
    endEditing(state,title){
      if(state.editIndex !== null){
        if(title){
          state.todos[state.editIndex].title = title;
          Storage.set(state.todos);
        }else{
          this.destroy(state,state.editIndex)
          state.editIndex = null;
        }
      }
    },
    cancelEdit(state){
      state.editIndex = null;
    }
 }
export default  function reducer( state = init , action , args ) {
    actions[action] && actions[action](state,...args)
    // switch ( action ) {
    //     case"add":
    //     const [title] = args;
    //     // console.log({...state,todos: [...state.todos,{title,complete:false}]});
    //         return {...state//  get all in storege
    //             ,todos:[...state.todos,// get all todos in storege
    //                 {title,complete:false}
    //             ]

    //         }
    //     default :
        return state;
    }
