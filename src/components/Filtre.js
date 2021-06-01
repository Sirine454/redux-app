import React from 'react';
  import { vesibtodos } from '../redux/actions';
  import {  useDispatch } from "react-redux";
  export const Filtre = (todos) => {
    const dispatch = useDispatch();
    const handlefilter=(e)=>{
        //console.log(e.target.id)
        dispatch(vesibtodos(e.target.id))
    }
      return (
          <div className="todos_filter">

              <li  id="all" style={{textDecoration:"underline", color:"darkorange", fontWeight:"500"}} 
              onClick ={handlefilter}> All </li>
              <li  id="done" style={{textDecoration:"underline", marginLeft:20 , color:"darkorange", fontWeight:"500"}} 
              onClick ={handlefilter} > Done </li>
              <li id="undone" style={{textDecoration:"underline", marginLeft:20 , color:"darkorange", fontWeight:"500"}}  
              onClick ={handlefilter}> notDone </li>     
          </div>
      )
  }