import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './component/Navbar';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Profile from './pages/Profile';

class App extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
      <div  >

        

         <Router>



           <Switch>

            {
              /**
               * <Route path="/" >
               <Home />
             </Route> 


             <Route path="/about" >
               <About />
             </Route>

             <Route path="/home" >
               <Home />
             </Route>
               */
            }

            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/users" component={Users} exact />
            <Route path="/profile/:ninja" component={Profile} exact />
            
            
            

            <Route path="*" component={NotFound}  />
            
            

             
             
           </Switch>

         </Router>
      </div>
    );
  }
}

export default App;
