import React from 'react';
import Task  from './Task';
import {useSelector} from 'react-redux';

 const Tasklist = () => {
     let todos= useSelector(state => state.Reducer);
     console.log(todos)
     let filtretodos= useSelector(state => state.ReducerFilter.filter);

     const show_todos =(todos,filtretodos)=>{
        if(filtretodos=="all"){
            return todos;
        }
        else if (filtretodos=="done"){
return todos.filter((todo)=> todo.completed==true )
        }
        else if  (filtretodos=="undone"){
            return todos.filter((todo)=> todo.completed==false )
                    }
     } 
     let filtred= show_todos(todos,filtretodos) ;   
    return (
        <div>
            
           {filtred.map(todo=>{
               return <Task key={todo.id} todo={todo}  />
           })} 
        </div>
    )
};

export default Tasklist;