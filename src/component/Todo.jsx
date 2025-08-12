import React from 'react'
import './Todo.css'
import { useState } from 'react'
import axios from 'axios'

const Todo = () => {


    const[add,setAdd]=useState();


    const senddata = async (e)=>{
    e.preventDefault()
 try{
        const response=await axios.post('http://localhost:3000/workouts/',
           {
            add
           } 
        );

        console.log(response.data);
        }
        catch(error){
            console.error(error);
            
        }
    }
  return (
    <div>
      
<div class="todohead">
        <h2>To Do List</h2>

        </div>


        <div>

    <form action=""> 
        <input type="text" name='add' placeholder='enter Items' 
        onChange={(e)=> setAdd(e.target.value)}/>
        <button type='submit' >ADD</button></form>
        </div>


        


         <ul id="ul">
            <li>go to gym</li>
        <li id="checked">wash car</li>
    <li>read book</li>
</ul>
</div>
  )
}

export default Todo
