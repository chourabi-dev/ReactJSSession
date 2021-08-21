import React from 'react';
import Child from './Child';

class Parent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            response:''
        }

        this.responseFromChild = this.responseFromChild.bind(this);
    }

    responseFromChild(response){
        console.log(response);
        this.setState({
            response:response
        })
    }
    render(){
        return(
            <div>
                <h1>Hi i'm the parent</h1>
                <p> { this.state.response } </p>
                <Child message="how are you son !" response = { this.responseFromChild  }   />

            </div>
        );

    }

}

export default Parent;