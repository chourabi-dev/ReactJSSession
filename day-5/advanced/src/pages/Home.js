import React from 'react';
import Navbar from '../component/Navbar';

class Home extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return (
      <div className="App">
          <Navbar/>


         <h1>home page</h1> 
      </div>
    );
  }
}

export default Home;