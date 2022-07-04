// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // rajouter Switch au moment voulu
import Header from './Components/Header';
import Home from './Pages/Home';
import SignIn from '../src/Pages/SignIn';
import SignUp from '../src/Pages/SignUp';
import Posts from './Components/PostSpecs/Posts';
// import PostContent from './Components/PostSpecs/PostContent';
import Account from './Pages/Account'


function App() {

  return (
    <>
    
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} exact />
        <Route exact path='/home' element={<Home />} />
          {/* <Route path='/signup' exact component={SignUp} /> */}
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path='/post' element={<Posts />} />
          <Route exact path='/header' element={<Header />} />
          <Route exact path='*' element={<Account />} />
          {/* <Redirect to='/' /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
