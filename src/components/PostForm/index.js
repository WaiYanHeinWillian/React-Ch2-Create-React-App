import React, { useState } from 'react'
import './index.css';

export default function Index() {

    let [title,setTitle]=useState("");

    let resetForm=()=>{
      setTitle('');
      console.log("update rest");
    }

  return (
    <form className='post-form'>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
        </div>

        <p>{title}</p>

        <button type='button' onClick={resetForm}>Rest Form</button>

        <div className='form-control'>
            <button>Post Now</button>
        </div>
    </form>
  )
}
