import {ADD_TODO, UPPDATE_TODO, DELETE_TODO,TOGGLE_TODO } from './actions';
import { todos} from "./states"; //pour une liste de taches prédéfinie
//const todos =[]; //  avec liste initial vide

export let Reducer = (state=todos, action)=> {
    let newtodos ;
   switch (action.type) {

       case ADD_TODO:
           newtodos=[...state]; 
           newtodos.push (action.payload);
           return newtodos; 
           
     case TOGGLE_TODO: 
          
          return state.map(todo=> todo.id == action.payload ? {... todo, completed: ! todo.completed} : todo) ;
           
     case DELETE_TODO:
            newtodos=[...state];
            newtodos=newtodos.filter(todo=>todo.id !== action.payload)
    return newtodos;           
                  
     case UPPDATE_TODO:
          newtodos=[...state]; 
          let index = -1;
          for (let i=0; i< newtodos.length;i++)  {
            index ++;
            if(newtodos[i].id === action.payload.id){
                break;
            } 
          }
          if(index !== -1) {
            newtodos[index]= action.payload;
            return newtodos;
          }
        }

           return state;
        }
