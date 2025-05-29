
import './App.css';
import { useState } from 'react';

function App() {

  let [name,setName]=useState('Wai Yan Hein');
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
console.log(posts);

  let changename=()=>{
    setName('Aung Aung Tun');
    console.log(name);
  }

  let delePost=(id)=>{
    setPosts((preState)=>preState.filter((post)=>post.id!=id))
  }

  return (
    <div className='app'>
      <h1>Hello {name}</h1>
      <button onClick={changename}>change name</button>
        
      <h1>Posts</h1>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>
            {post.title}
            
          <button onClick={()=>delePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
