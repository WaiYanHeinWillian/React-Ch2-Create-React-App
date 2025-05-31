
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList';
import Modal from './components/Modal';

function App() {

  
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
      <Navbar/>

      <PostsList posts={posts}/>

      <Modal>
        <h1>Zoom class is available now</h1>
        <p>Feel free to <a href=''>join</a></p>
      </Modal>
      
    </>
  );
}

export default App;
