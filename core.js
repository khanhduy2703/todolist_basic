export default function html ([first,...string ],...values){
  
    return values.reduce( 
        (acc,curr) => acc.concat(curr,string.shift()),
        [first]

    )
    .filter( x => x && x !== true || x === 0)
    .join("");

}
export function createStore( reducer){
// 
 let state = reducer();
 // create object roots 
 const roots = new Map();
 function render( ){
    for(const [root , component] of roots){
      const output = component();
      root.innerHTML = output;
    }

 }
  return {
     attach( component , root){
        roots.set(root , component);
        render();

     },
     connect( selector  = state => state ){
        return component => (props,...args) => component(Object.assign({},props,selector(state),...args));
        // return function(component ){
        //     return function(props,...args){
        //         let result = component(Object.assign({},props,selector(state),...args));
        //         return result
        //     }
        // }
     },
     dispatch(action, ...args){
        // send action and values to reducer
        state = reducer(state,action,args); // return new state
        render();
     }
  }
}
