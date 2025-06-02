
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList';
import PostFrom from './components/PostForm'
import Modal from './components/Modal';

function App() {

  let [showModal,setShowModal]=useState(false);
  
  let [posts,setPosts]=useState([
    {
      id:1,
      title:'First Post',
      status:'dropped'
    },
    {
      id:2,
      title:'Second Post',
      status:'ongoing'
    },
    
  ]);

  let addPost=(post)=>{
    setPosts((prevState=>[...prevState,post]));
    setShowModal(false);
  }
  

  return (
    <>
      <Navbar  setShowModal={setShowModal}/>

      <PostsList posts={posts}/>

      {showModal && <Modal setShowModal={setShowModal}>
          <PostFrom addPost={addPost}/>            
      </Modal>
      }
      
    </>
  );
}

export default App;
