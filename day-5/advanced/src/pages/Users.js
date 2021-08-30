import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';

class Users extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        users:[
            { name:"chourabi taher",phone:"11223366", id:"1" },
            { name:"chourabi taher 2",phone:"11223366", id:"2" },
            { name:"chourabi taher 3",phone:"11223366", id:"3" },
            { name:"chourabi taher 4",phone:"11223366", id:"4" },
            
            
        ]
    }
  }


  render(){
    return (
      <div className="App">
          <Navbar/>

            <ul>
                {
                    this.state.users.map((u)=><li>
                        <Link to= {"/profile/"+u.id}  > { u.name } <br/> {u.phone}  </Link>
                    </li>)
                }
            </ul>
        
      </div>
    );
  }
}

export default Users;