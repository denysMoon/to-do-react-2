import './styles/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import PostList from './components/PostList/PostList';
import { useState } from 'react';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import AppRouter from './components/AppRouter';
import FormModal from './components/UI/FormModal/FormModal';
import Button from './components/UI/button/Button';

function App() {
  const [posts, setPost] = useState([])

  const [modal, setModal] = useState(false)


  return (
    <Router>
      <div className="App">
        <NavBar />

      <Button onClick={()=>setModal(true)}>
        Create post
      </Button>

        <FormModal visible={modal} setVisible={setModal}>
          <Form setPost={setPost} posts={posts} setModal={setModal} />
        </FormModal>

        <h3 style={{textAlign: "center"}}>List</h3>
        <hr style={{background: "black"}}></hr>

        <Switch>
          <Route path="/posts" component={()=><PostList posts={posts} setPost={setPost} />} />
          <Route path="/about" component={About} />
          <Redirect to="/posts"/>
        </Switch>

        {/* <AppRouter /> */}

        {/* <PostList posts={posts} setPost={setPost} /> */}
      </div>
    </Router>
  );
}

export default App;
