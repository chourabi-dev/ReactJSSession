import React from 'react';
import Navbar from '../component/Navbar';

class NotFound extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="App">
          <Navbar/>

        <h1>404 not found</h1> 
      </div>
    );
  }
}

export default NotFound;