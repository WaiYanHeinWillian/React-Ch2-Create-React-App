
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
      title:'First Post'
    },
    {
      id:2,
      title:'Second Post'
    },
    {
      id:3,
      title:'Third Post'
    }
  ]);
  

  return (
    <>
      <Navbar  setShowModal={setShowModal}/>

      <PostsList posts={posts}/>

      {showModal && <Modal setShowModal={setShowModal}>
          <PostFrom/>            
      </Modal>
      }
      
    </>
  );
}

export default App;
