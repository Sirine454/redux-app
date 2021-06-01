import { SHOW_COMPLETED } from './actions';
import { todos} from "./states"; //pour une liste de taches prédéfinie
const initialState ={
    //todos, 
    filter :'all'
}

export let  ReducerFilter = (state = initialState, action) => {
 
  switch (action.type) {
    case   SHOW_COMPLETED:

  return {...state, filter: action.payload};

default:
  return state;
}}