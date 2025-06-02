import React, { useRef, useState } from 'react'
import './index.css';

export default function Index({addPost}) {


    let title=useRef();

    let resetForm=()=>{
      title.current.value="";
      console.log("update rest");
    }

    let upload_post=(e)=>{
      e.preventDefault(); //prevent refresh page

      let post={
        id:Math.floor(Math.random()*10000),
        title:title.current.value
      }

      resetForm();

      addPost(post);
    }

  return (
    <form className='post-form' onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type='text' ref={title}  ></input>
        </div>

        <div className='form-control'>
            <button type='sumit'>Post Now</button>
        </div>
    </form>
  )
}

