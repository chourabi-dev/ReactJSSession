import React from 'react';
import Navbar from '../component/Navbar';

class Profile extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
    this.state={
        id:props.match.params.ninja
    }
  }


  getUserDetails(){
      // id
      // HTTP GET  /user/id => res > 
  }


  render(){
    return (
      <div className="App">
          <Navbar/>

            <h1>Profile page N° : {this.state.id} </h1>

      </div>
    );
  }
}

export default Profile;