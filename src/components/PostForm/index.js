import React, { useState } from 'react'
import './index.css';

export default function Index({addPost}) {

    let [title,setTitle]=useState("");

    let resetForm=()=>{
      setTitle('');
      console.log("update rest");
    }

    let upload_post=(e)=>{
      e.preventDefault(); //prevent refresh page

      let post={
        id:Math.floor(Math.random()*10000),
        title:title
      }

      resetForm();

      addPost(post);

      

    }

  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
        </div>

        <div className='form-control'>
            <button type='sumit'>Post Now</button>
        </div>
    </form>
  )
}
