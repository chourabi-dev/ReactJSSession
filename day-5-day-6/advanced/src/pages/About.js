import React from 'react';
 
import Navbar from '../component/Navbar';
import NosClients from './No-clients';
import NosService from './Nos-services';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class About extends React.Component{

  constructor(props){
    console.log(props);
    super(props);
  }


  render(){

    
    return (
      <div className="App">
          <Navbar/>
        <h1>about page</h1> 


         
          <Switch>
            <Route path= { this.props.match.path+'/nos-service' } component={ NosService } />
            <Route path={ this.props.match.path+'/nos-clients' } component={ NosClients } />
            

          </Switch>
         


      </div>
    );
  }
}

export default About;