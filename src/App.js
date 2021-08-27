import './styles/App.css';

import PostList from './components/PostList/PostList';
import { useState } from 'react';
import Form from './components/Form/Form';

function App() {
  const [posts, setPost] = useState([])


  return (
    <div className="App">
      <Form setPost={setPost} posts={posts} />
      <h3 style={{textAlign: "center"}}>List</h3>
      <hr style={{background: "black"}}></hr>
      <PostList posts={posts} setPost={setPost} />
    </div>
  );
}

export default App;
