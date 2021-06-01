export const  ADD_TODO ="ADD_TODO";
export const DELETE_TODO ="DELETE_TODO";
export const  UPPDATE_TODO ="UPPDATE_TODO";
export const  TOGGLE_TODO ="TOGGLE_TODO";
export const  SHOW_COMPLETED ="SHOW_COMPLETED";


export function addTodo (todo){
    return {
        type :  ADD_TODO,
        payload : todo,
    }
}

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: id
  });


  export function Uppdate (todo){
    return {
        type :  UPPDATE_TODO,
        payload : todo,
    }
}

export function Delete (todoId) {
    return {
        type :  DELETE_TODO,
        payload : todoId,
    }
}


export function vesibtodos  (filter) {
    return {
    type: SHOW_COMPLETED,
    payload : filter,



    }}