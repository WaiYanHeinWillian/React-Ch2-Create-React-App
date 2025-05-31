
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostsList from './components/PostsList';

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
      
    </>
  );
}

export default App;
