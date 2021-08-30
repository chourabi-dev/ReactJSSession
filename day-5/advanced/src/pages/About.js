import React from 'react';
import Navbar from '../component/Navbar';

class About extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="App">
          <Navbar/>
        <h1>about page</h1> 
      </div>
    );
  }
}

export default About;