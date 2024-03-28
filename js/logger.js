// The logger function takes a function reducer as an argument
export default function Logger(reducer){
    // return a function because  the function reducer  export is a function
    return (prevState,action,args)=>{
        console.group(action);
        console.log("prevState : " , prevState )
        console.log("arguments : " , args)
        const nextState = reducer(prevState,action,args);
        console.log("nextState : " , nextState )

        console.groupEnd();
        return nextState
    }
}