import logo from './logo.svg';
import './App.css';
import { Router, Routes, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './Pages/Home';
import SignIn from '../src/Pages/SignIn';
import SignUp from '../src/Pages/SignUp';
import Posts from '../src/components/PostSpecs/Posts';
import PostContent from '../src/components/PostSpecs/PostContent';
import Profile from './components/ProfileSpecs/Profile'

function App() {
  return (
    <>
    
      <Router>
        <Routes>

          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin' exact component={SignIn} />
          <Route path='/posts' exact component={Posts} />
          <Route path='/header' exact component={Header} />
          <Route path='/user/posts' exact component={PostContent} />
          <Route path='/profile' exact component={Profile} />
          {/* <Redirect to='/' /> */}
       
        </Routes>
      </Router>
    <Home />
    </>
  );
}

export default App;
